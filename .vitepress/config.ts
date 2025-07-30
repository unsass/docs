import { defineConfig } from 'vitepress';

export default defineConfig({
    title: 'Unsass',
    description: 'The Unified Sass Tools.',
    srcDir: 'src/',
    themeConfig: {
        outline: 'deep',
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Guide',
                link: '/guide/introduction'
            },
            {
                text: 'Resources',
                items: [
                    {
                        text: 'Breakpoint',
                        link: '/guide/breakpoint/getting-started'
                    },
                    {
                        text: 'CSS',
                        link: '/guide/css/getting-started'
                    },
                    {
                        text: 'Em',
                        link: '/guide/em/getting-started'
                    },
                    {
                        text: 'Rem',
                        link: '/guide/rem/getting-started'
                    }
                ]
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/unsass'
            }
        ],
        sidebar: {
            '/guide': [
                {
                    text: 'Overview',
                    items: [
                        {
                            text: 'Introduction',
                            link: '/guide/introduction/'
                        }
                    ]
                },
                {
                    text: 'Resources',
                    items: [
                        {
                            text: 'CSS',
                            link: '/guide/css'
                        },
                        {
                            text: 'Breakpoint',
                            link: '/guide/breakpoint'
                        },
                        {
                            text: 'Rem',
                            link: '/guide/rem'
                        },
                        {
                            text: 'Em',
                            link: '/guide/em'
                        },
                        {
                            text: 'Selector',
                            link: '/guide/selector'
                        }
                    ]
                },
                {
                    text: 'CSS',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/breakpoint/'
                        },
                        {
                            text: 'Configuration',
                            link: '/breakpoint/configuration'
                        }
                    ]
                },
                {
                    text: 'Rem',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/breakpoint/'
                        },
                        {
                            text: 'Configuration',
                            link: '/breakpoint/configuration'
                        }
                    ]
                }
            ],
            // 'breakpoint': [
            //     {
            //         text: 'Getting Started',
            //         items: [
            //             {
            //                 text: 'Introduction',
            //                 link: '/breakpoint/'
            //             },
            //             {
            //                 text: 'Configuration',
            //                 link: '/breakpoint/configuration'
            //             }
            //         ]
            //     },
            //     {
            //         text: 'API',
            //         items: [
            //             {
            //                 text: 'Mixins',
            //                 link: '/breakpoint/mixins'
            //             }
            //         ]
            //     }
            // ],
            '/guide/css': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/guide/css/getting-started'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'declaration',
                            link: '/guide/css/api/declaration'
                        },
                        {
                            text: 'selector',
                            link: '/guide/css/api/selector'
                        }
                    ]
                }
            ],
            // '/guide/breakpoint/': [
            //     {
            //         text: 'Introduction',
            //         items: [
            //             {
            //                 text: 'Getting Started',
            //                 link: 'guide/breakpoint/getting-started'
            //             },
            //             {
            //                 text: 'Configuration',
            //                 link: 'guide/breakpoint/configuration'
            //             },
            //             {
            //                 text: 'Changelog',
            //                 link: 'guide/breakpoint/changelog'
            //             }
            //         ]
            //     },
            //     {
            //         text: 'API',
            //         items: [
            //             {
            //                 text: 'Functions',
            //                 link: 'guide/breakpoint/api/functions'
            //             },
            //             {
            //                 text: 'Mixins',
            //                 link: 'guide/breakpoint/api/mixins'
            //             }
            //         ]
            //     }
            // ],
            '/guide/rem/': [
                {
                    text: 'Introduction',
                    items: [
                        {
                            text: 'Getting Started',
                            link: 'guide/rem/getting-started'
                        },
                        {
                            text: 'Configuration',
                            link: 'guide/rem/configuration'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Functions',
                            link: '/guide/rem/api/functions'
                        },
                        {
                            text: 'Mixins',
                            link: '/guide/rem/api/mixins'
                        }
                    ]
                }
            ]
        }
    }
});
