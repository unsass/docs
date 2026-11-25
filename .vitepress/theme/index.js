import { h } from 'vue';
import Theme from '@frontfactory/vitepress-theme';
import NotFound from './NotFound.vue';
import '@fontsource-variable/montserrat/wght.css';
import './styles.css';

export default {
    extends: Theme,
    NotFound,
    // ff's Layout only forwards slots it was itself given, and nothing passes any in by default —
    // wire through the one this site fills: the 404 page.
    Layout() {
        return h(Theme.Layout, null, {
            'not-found': () => h(NotFound)
        });
    }
};
