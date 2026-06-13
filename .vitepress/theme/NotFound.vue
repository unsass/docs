<script setup>
import { withBase } from 'vitepress';
</script>

<template>
    <div class="NotFound">
        <p class="code">404</p>
        <h1 class="title">Page not found</h1>
        <div class="divider" />
        <blockquote class="quote">
            The page you're looking for doesn't exist — it may have moved, or never existed.
        </blockquote>
        <div class="actions">
            <a class="link brand" :href="withBase('/')">Take me home</a>
            <a class="link" :href="withBase('/guide/what-is-unsass')">Read the guide</a>
        </div>
    </div>
</template>

<style scoped>
.NotFound {
    padding: 96px 24px 120px;
    text-align: center;
}

.code {
    font-family: var(--us-font-display);
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--vp-c-brand-1);
}

.title {
    margin: 12px 0 0;
    font-family: var(--us-font-display);
    font-size: 24px;
    font-weight: 600;
    border: none;
}

.divider {
    margin: 24px auto;
    width: 64px;
    height: 1px;
    background: var(--vp-c-divider);
}

.quote {
    margin: 0 auto;
    max-width: 440px;
    font-size: 14px;
    color: var(--vp-c-text-2);
}

.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-top: 32px;
}

.link {
    display: inline-block;
    border: 1px solid var(--vp-c-divider);
    border-radius: 20px;
    padding: 6px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    transition: border-color 0.2s, color 0.2s;
}

.link:hover {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
}

.link.brand {
    border-color: var(--vp-c-brand-1);
    color: var(--vp-c-brand-1);
}
</style>
