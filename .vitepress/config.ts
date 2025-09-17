import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/',
    srcDir: 'src',
    title: 'UnSass',
    description: 'The Unified Sass Tools.',
    themeConfig: {
        outline: [2, 3],
        search: {
            provider: 'local'
        },
        logo: '/logo.png',
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Components',
                items: [
                    {
                        text: 'Breakpoint',
                        link: '/breakpoint/getting-started'
                    },
                    {
                        text: 'CSS',
                        link: '/css/getting-started'
                    }
                ]
            }
        ],
        sidebar: {
            '/breakpoint': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/breakpoint/getting-started'
                        },
                        {
                            text: 'Configuration',
                            link: '/breakpoint/configuration'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Mixins',
                            link: '/breakpoint/mixins'
                        }
                    ]
                }
            ],
            '/css': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/css/getting-started'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Declaration',
                            link: '/css/declaration'
                        },
                        {
                            text: 'Selector',
                            link: '/css/selector'
                        }
                    ]
                }
            ]
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/unsass'
            }
        ]
    }
});
