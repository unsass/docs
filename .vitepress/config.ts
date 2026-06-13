import { defineConfig } from 'vitepress';

const description = 'A suite of small, dependency-free Sass utilities. Install only what you need.';
const hostname = 'https://unsass.dev';
const ogImage = `${hostname}/og-image.png`;

const changelog = (pkg: string) => `https://github.com/unsass/${pkg}/blob/main/CHANGELOG.md`;

interface PackageSidebarOptions {
    slug: string;
    configLabel?: string;
    hasFunctions: boolean;
}

const packageSidebar = ({ slug, configLabel, hasFunctions }: PackageSidebarOptions) => [
    {
        text: 'Introduction',
        items: [
            {
                text: 'Getting Started',
                link: `/${slug}/getting-started`
            },
            ...(configLabel ? [
                {
                    text: configLabel,
                    link: `/${slug}/configuration`
                }
            ] : [])
        ]
    },
    {
        text: 'API',
        items: [
            ...(hasFunctions ? [
                {
                    text: 'Functions',
                    link: `/${slug}/functions`
                }
            ] : []),
            {
                text: 'Mixins',
                link: `/${slug}/mixins`
            }
        ]
    },
    {
        text: 'Resources',
        items: [
            {
                text: 'Best Practices',
                link: `/${slug}/best-practices`
            },
            {
                text: 'Changelog',
                link: changelog(slug)
            }
        ]
    }
];

export default defineConfig({
    title: 'UnSass',
    description,
    lang: 'en-US',
    srcDir: 'src',
    cleanUrls: true,
    lastUpdated: true,
    sitemap: {
        hostname
    },
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
        ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' }],
        ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'
            }
        ],
        ['meta', { name: 'theme-color', content: '#008b8b' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'UnSass' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: ogImage }],
        [
            'script',
            { type: 'application/ld+json' },
            JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'UnSass',
                url: hostname,
                description
            })
        ]
    ],
    transformPageData(pageData) {
        const path = pageData.relativePath
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '');
        const canonical = `${hostname}/${path}`;
        const isHome = pageData.frontmatter.layout === 'home';
        const title = isHome || !pageData.title ? 'UnSass' : `${pageData.title} | UnSass`;
        const desc = pageData.frontmatter.description || pageData.description || description;

        pageData.frontmatter.head ??= [];
        pageData.frontmatter.head.push(
            ['link', { rel: 'canonical', href: canonical }],
            ['meta', { property: 'og:title', content: title }],
            ['meta', { property: 'og:description', content: desc }],
            ['meta', { property: 'og:url', content: canonical }],
            ['meta', { name: 'twitter:title', content: title }],
            ['meta', { name: 'twitter:description', content: desc }]
        );
    },
    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo-white.svg'
        },
        siteTitle: false,
        outline: [2, 3],
        search: {
            provider: 'local'
        },
        lastUpdated: {
            text: 'Last updated'
        },
        editLink: {
            pattern: 'https://github.com/unsass/docs/edit/main/src/:path',
            text: 'Edit this page on GitHub'
        },
        nav: [
            {
                text: 'Guide',
                link: '/guide/what-is-unsass'
            },
            {
                text: 'Packages',
                items: [
                    { text: 'Breakpoint', link: '/breakpoint/getting-started' },
                    { text: 'CSS', link: '/css/getting-started' },
                    { text: 'Em', link: '/em/getting-started' },
                    { text: 'Rem', link: '/rem/getting-started' },
                    { text: 'Selector', link: '/selector/getting-started' }
                ]
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    items: [
                        { text: 'What is UnSass?', link: '/guide/what-is-unsass' },
                        { text: 'Installation', link: '/guide/installation' },
                        { text: 'Best Practices', link: '/guide/best-practices' },
                        { text: 'Patterns', link: '/guide/patterns' }
                    ]
                },
                {
                    text: 'Packages',
                    items: [
                        { text: 'Breakpoint', link: '/breakpoint/getting-started' },
                        { text: 'CSS', link: '/css/getting-started' },
                        { text: 'Em', link: '/em/getting-started' },
                        { text: 'Rem', link: '/rem/getting-started' },
                        { text: 'Selector', link: '/selector/getting-started' }
                    ]
                }
            ],
            '/breakpoint/': packageSidebar({ slug: 'breakpoint', configLabel: 'Configuration', hasFunctions: true }),
            '/css/': packageSidebar({ slug: 'css', configLabel: 'Custom Properties', hasFunctions: false }),
            '/em/': packageSidebar({ slug: 'em', hasFunctions: true }),
            '/rem/': packageSidebar({ slug: 'rem', configLabel: 'Configuration', hasFunctions: true }),
            '/selector/': packageSidebar({ slug: 'selector', hasFunctions: true })
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/unsass'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © UnSass'
        }
    }
});
