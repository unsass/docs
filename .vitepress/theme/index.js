import { h } from 'vue';
import Theme from '@frontfactory/vitepress-theme';
import NotFound from './NotFound.vue';
import HeroCanvas from './components/HeroCanvas.vue';
import './styles.css';

export default {
    extends: Theme,
    NotFound,
    // ff's Layout only forwards slots it was itself given, and nothing passes any in by default —
    // wire through the ones this site fills: the 404 page, and the home hero's canvas animation.
    Layout() {
        return h(Theme.Layout, null, {
            'not-found': () => h(NotFound),
            'home-hero-image': () => h(HeroCanvas)
        });
    }
};
