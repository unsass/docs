module.exports = {
    title: 'Unsass',
    description: 'Just playing around.',
    srcDir: 'src/',
    themeConfig: {
        nav: [
            {
                text: 'Packages',
                items: [
                    {
                        text: 'Breakpoint',
                        link: '/guide/breakpoint/getting-started'
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
            '/guide/breakpoint/': [
                {
                    text: 'Introduction',
                    collapsible: true,
                    items: [
                        {
                            text: 'Getting Started',
                            link: 'guide/breakpoint/getting-started'
                        },
                        {
                            text: 'Configuration',
                            link: 'guide/breakpoint/configuration'
                        },
                        {
                            text: 'Changelog',
                            link: 'guide/breakpoint/changelog'
                        }
                    ]
                },
                {
                    text: 'API',
                    collapsible: true,
                    items: [
                        {
                            text: 'Functions',
                            link: 'guide/breakpoint/api/functions'
                        },
                        {
                            text: 'Mixins',
                            link: 'guide/breakpoint/api/mixins'
                        }
                    ]
                }
            ],
            '/guide/rem/': [
                {
                    text: 'Introduction',
                    collapsible: true,
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
                    collapsible: true,
                    items: [
                        {
                            text: 'Functions',
                            link: 'guide/rem/api/functions'
                        },
                        {
                            text: 'Mixins',
                            link: 'guide/rem/api/mixins'
                        }
                    ]
                }
            ]
        }
    }
};
