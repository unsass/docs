export default {
    title: 'Unsass',
    description: 'The Unified Sass Tools.',
    srcDir: 'src/',
    themeConfig: {
        nav: [
            {
                text: "Rem",
                activeMatch: `^/rem/`,
                link: '/rem/'
            },
            {
                text: "Breakpoint",
                activeMatch: `^/breakpoint/`,
                link: '/breakpoint/'
            }
        ],
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/unsass'
            }
        ],
        sidebar: {
            'rem': [
                {
                    text: 'Getting Started',
                    items: [
                        {
                            text: 'Introduction',
                            link: '/rem/'
                        },
                        {
                            text: 'Configuration',
                            link: '/rem/configuration'
                        }
                    ]
                },
                {
                    text: 'API',
                    items: [
                        {
                            text: 'Functions',
                            link: '/rem/functions'
                        },
                        {
                            text: 'Mixins',
                            link: '/rem/mixins'
                        }
                    ]
                }
            ],
            'breakpoint': [
                {
                    text: 'Getting Started',
                    items: [
                        {
                            text: 'Introduction',
                            link: '/breakpoint/'
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
            ]
        }
    }
};
