<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useData } from 'vitepress';

// Layers drop one by one onto a fixed pedestal and fuse into it — each package folding into the
// suite, in the same teal family as the accent.
const STACK_LAYERS = [
    { label: 'CSS', colorHex: '#0fa8a8', delay: 0, dropDuration: 2000, fuseStartProgress: 0.3 },
    { label: 'EM', colorHex: '#0e9b9b', delay: 1600, dropDuration: 2000, fuseStartProgress: 0.3 },
    { label: 'REM', colorHex: '#0d8f8f', delay: 3200, dropDuration: 2000, fuseStartProgress: 0.3 },
    { label: 'BREAKPOINT', colorHex: '#0b7373', delay: 4800, dropDuration: 2000, fuseStartProgress: 0.3 },
    { label: 'SELECTOR', colorHex: '#095959', delay: 6400, dropDuration: 2000, fuseStartProgress: 0.3 }
];

const PAUSE_END = 1000;
const TOTAL_CYCLE = 6400 + 2000 + PAUSE_END;

const canvas = ref(null);
const { isDark } = useData();

let ctx = null;
let raf = null;
let cx = 0;
let cy = 0;

// Dimensions du socle et des plaques, calculées pour occuper 80% de la largeur du canvas — en
// projection isométrique (rotation -45°) la largeur visuelle vaut BASE_SIZE * sqrt(2).
let BASE_SIZE = 0;
let BASE_OFFSET = 0;
let BASE_RADIUS = 0;
let BASE_HEIGHT_3D = 24;

let LAYER_W = 0;
let LAYER_H = 0;
let LAYER_RADIUS = 0;
let DROP_HEIGHT = -360;

function computeDimensions(width) {
    const targetWidth = width * 0.8;

    BASE_SIZE = targetWidth / Math.SQRT2;
    BASE_OFFSET = BASE_SIZE / 2;
    BASE_RADIUS = BASE_SIZE * 0.1;

    LAYER_W = BASE_SIZE * 0.78;
    LAYER_H = BASE_SIZE * 0.78;
    LAYER_RADIUS = LAYER_W * 0.09;
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function getThemeColors() {
    const dark = isDark.value;

    return {
        isDark: dark,
        baseSideTop: dark ? '#112226' : '#cbd5e1',
        baseSideBottom: dark ? '#081417' : '#94a3b8',
        baseTop: dark ? '#0a191c' : '#f1f5f9',
        gridLine: dark ? 'rgba(13, 143, 143, 0.22)' : 'rgba(13, 143, 143, 0.25)',
        cardBg: dark ? 'rgba(10, 25, 28, 0.94)' : 'rgba(255, 255, 255, 0.95)',
        textPrimary: dark ? '#ffffff' : '#0f172a',
        baseOutline: '#0d8f8f'
    };
}

// Dessin du socle 3D (entièrement fixe)
function draw3DPedestal(colors) {
    const baseShape = new Path2D();
    baseShape.roundRect(-BASE_OFFSET, -BASE_OFFSET, BASE_SIZE, BASE_SIZE, BASE_RADIUS);

    // 1. Flancs 3D
    for (let h = BASE_HEIGHT_3D; h > 0; h--) {
        ctx.save();
        ctx.translate(cx, cy + h);
        ctx.scale(1, 0.5);
        ctx.rotate(-Math.PI / 4);

        ctx.fillStyle = h > BASE_HEIGHT_3D / 2 ? colors.baseSideTop : colors.baseSideBottom;
        ctx.fill(baseShape);
        ctx.restore();
    }

    // 2. Contour de la base inférieure
    ctx.save();
    ctx.translate(cx, cy + BASE_HEIGHT_3D);
    ctx.scale(1, 0.5);
    ctx.rotate(-Math.PI / 4);
    ctx.beginPath();
    ctx.roundRect(-BASE_OFFSET, -BASE_OFFSET, BASE_SIZE, BASE_SIZE, BASE_RADIUS);
    ctx.strokeStyle = colors.baseOutline;
    ctx.shadowColor = colors.baseOutline;
    ctx.shadowBlur = colors.isDark ? 10 : 5;
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.restore();

    // 3. Plateau supérieur
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, 0.5);
    ctx.rotate(-Math.PI / 4);

    ctx.fillStyle = colors.baseTop;
    ctx.fill(baseShape);

    // Grille gravée
    ctx.save();
    ctx.clip(baseShape);

    ctx.beginPath();
    ctx.strokeStyle = colors.gridLine;
    ctx.lineWidth = 1;
    const step = BASE_SIZE / 6;

    for (let x = -BASE_OFFSET + step; x < BASE_OFFSET; x += step) {
        ctx.moveTo(x, -BASE_OFFSET);
        ctx.lineTo(x, BASE_OFFSET);
    }
    for (let y = -BASE_OFFSET + step; y < BASE_OFFSET; y += step) {
        ctx.moveTo(-BASE_OFFSET, y);
        ctx.lineTo(BASE_OFFSET, y);
    }
    ctx.stroke();
    ctx.restore();

    // Contour supérieur fixe
    ctx.strokeStyle = colors.baseOutline;
    ctx.shadowColor = colors.baseOutline;
    ctx.shadowBlur = colors.isDark ? 12 : 6;
    ctx.lineWidth = 2;
    ctx.stroke(baseShape);

    ctx.restore();
}

// Dessin de la plaque
function drawCard(offsetY, alpha, layerData, colors) {
    ctx.save();
    ctx.translate(cx, cy + offsetY);
    ctx.scale(1, 0.5);
    ctx.rotate(-Math.PI / 4);

    ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

    const halfW = LAYER_W / 2;
    const halfH = LAYER_H / 2;

    // Corps de la plaque
    ctx.beginPath();
    ctx.roundRect(-halfW, -halfH, LAYER_W, LAYER_H, LAYER_RADIUS);
    ctx.fillStyle = colors.cardBg;
    ctx.fill();

    // Contour néon
    ctx.strokeStyle = layerData.colorHex;
    ctx.shadowColor = layerData.colorHex;
    ctx.shadowBlur = colors.isDark ? 16 : 8;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Texte principal (adapté à la taille accrue)
    ctx.save();
    ctx.shadowBlur = 0;

    ctx.fillStyle = colors.textPrimary;
    ctx.font = '800 24px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(layerData.label, 0, 0);

    ctx.restore();
    ctx.restore();
}

function animate(time) {
    const colors = getThemeColors();
    const cycleTime = time % TOTAL_CYCLE;

    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

    // Socle 3D fixe
    draw3DPedestal(colors);

    // Animation des plaques
    STACK_LAYERS.forEach((layer) => {
        const elapsed = cycleTime - layer.delay;

        if (elapsed > 0 && elapsed < layer.dropDuration) {
            const progress = elapsed / layer.dropDuration;
            const dropEase = easeOutCubic(progress);

            // Position verticale
            const offsetY = DROP_HEIGHT * (1 - dropEase);

            // Calcul de l'opacité (fusion progressive jusqu'à 0 à l'arrivée)
            let alpha = 1;

            if (progress < layer.fuseStartProgress) {
                alpha = Math.min(1, progress / 0.15);
            } else {
                const fuseProgress = (progress - layer.fuseStartProgress) / (1 - layer.fuseStartProgress);
                alpha = 1 - fuseProgress;
            }

            drawCard(offsetY, alpha, layer, colors);
        }
    });

    raf = requestAnimationFrame(animate);
}

onMounted(() => {
    ctx = canvas.value.getContext('2d');
    cx = canvas.value.width / 2;
    cy = canvas.value.height * 0.68;
    computeDimensions(canvas.value.width);
    raf = requestAnimationFrame(animate);
});

onUnmounted(() => {
    if (raf) cancelAnimationFrame(raf);
});
</script>

<template>
    <canvas ref="canvas" class="hero-canvas" width="650" height="650" />
</template>

<style scoped>
.hero-canvas {
    display: block;
    width: 100%;
    max-width: 420px;
    height: auto;
    margin: 0 auto;
}
</style>
