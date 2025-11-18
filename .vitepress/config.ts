import { defineConfig } from 'vitepress';

export default defineConfig({
    base: '/',
    srcDir: 'src',
    title: 'UnSass',
    description: 'The Unified Sass Tools.',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico'
            }
        ]
    ],
    themeConfig: {
        outline: [
            2,
            3
        ],
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
                text: 'Guide',
                items: [
                    {
                        text: 'Introduction',
                        link: '/guide/introduction'
                    },
                    {
                        text: 'Best Practices',
                        link: '/guide/best-practices'
                    }
                ]
            },
            {
                text: 'Packages',
                items: [
                    {
                        text: 'Breakpoint',
                        link: '/breakpoint/getting-started'
                    },
                    {
                        text: 'CSS',
                        link: '/css/getting-started'
                    },
                    {
                        text: 'Rem',
                        link: '/rem/getting-started'
                    }
                ]
            }
        ],
        sidebar: {
            '/guide': [
                {
                    text: 'Getting Started',
                    items: [
                        {
                            text: 'Introduction',
                            link: '/guide/introduction'
                        },
                        {
                            text: 'Best Practices',
                            link: '/guide/best-practices'
                        }
                    ]
                },
                {
                    text: 'Packages',
                    items: [
                        {
                            text: 'Breakpoint',
                            link: '/breakpoint/getting-started'
                        },
                        {
                            text: 'CSS',
                            link: '/css/getting-started'
                        },
                        {
                            text: 'Rem',
                            link: '/rem/getting-started'
                        }
                    ]
                }
            ],
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
                        },
                        {
                            text: 'Best Practices',
                            link: '/breakpoint/best-practices'
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
            ],
            '/rem': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/rem/getting-started'
                        },
                        {
                            text: 'Configuration',
                            link: '/rem/configuration'
                        },
                        {
                            text: 'Best Practices',
                            link: '/rem/best-practices'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Mixins',
                            link: '/rem/mixins'
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
