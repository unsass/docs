import { defineConfig } from 'vitepress';
import baseConfig from '@frontfactory/vitepress-theme/config';

const description = 'A suite of small, dependency-free Sass utilities. Install only what you need.';
const hostname = 'https://unsass.dev';
const ogImage = `${hostname}/og-image.png`;
const ogImageAlt = 'UnSass — standalone Sass utilities, à la carte';

const changelog = (pkg: string) => `https://github.com/unsass/${pkg}/blob/main/CHANGELOG.md`;
const monorepoChangelog = (pkg: string) => `https://github.com/unsass/unsass/blob/main/packages/${pkg}/CHANGELOG.md`;

interface PackageSidebarOptions {
    slug: string;
    configLabel?: string;
    hasFunctions: boolean;
    hasMixins?: boolean;
    changelogLink?: string;
}

const packageSidebar = ({
    slug,
    configLabel,
    hasFunctions,
    hasMixins = true,
    changelogLink = changelog(slug)
}: PackageSidebarOptions) => [
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
            ...(hasMixins ? [
                {
                    text: 'Mixins',
                    link: `/${slug}/mixins`
                }
            ] : [])
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
                link: changelogLink
            }
        ]
    }
];

export default defineConfig({
    extends: baseConfig,
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
        ['meta', { name: 'theme-color', content: '#008b8b' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'UnSass' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:image:alt', content: ogImageAlt }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:image', content: ogImage }],
        ['meta', { name: 'twitter:image:alt', content: ogImageAlt }],
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
        const title = isHome ? pageData.title : !pageData.title ? 'UnSass' : `${pageData.title} | UnSass`;
        const desc = pageData.frontmatter.description || pageData.description || description;

        const segments = path.split('/').filter(Boolean);
        const schemas: object[] = [];

        if (!isHome && segments.length > 0) {
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'UnSass', item: hostname },
                    ...segments.map((_, i) => ({
                        '@type': 'ListItem',
                        position: i + 2,
                        name: i === segments.length - 1 ? segments[i].replace(/-/g, ' ').replace(/^./, (c) => c.toUpperCase()) : segments[i] === 'guide' ? 'Guide' : `@unsass/${segments[i]}`,
                        item: i === segments.length - 1
                            ? canonical
                            : `${hostname}/${segments[i]}/${segments[i] === 'guide' ? 'what-is-unsass' : 'getting-started'}`
                    }))
                ]
            });
        }

        if (segments.length === 2 && segments[1] === 'getting-started') {
            schemas.push({
                '@context': 'https://schema.org',
                '@type': 'SoftwareSourceCode',
                name: `@unsass/${segments[0]}`,
                description: desc,
                url: canonical,
                codeRepositoryUrl: 'https://github.com/unsass/unsass',
                programmingLanguage: 'Sass',
                license: 'https://opensource.org/licenses/MIT'
            });
        }

        pageData.frontmatter.head ??= [];
        schemas.forEach((schema) => {
            pageData.frontmatter.head.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema)]);
        });
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
        ff: {
            navOrder: 'menu-first',
            footerColumns: [
                {
                    title: 'Guide',
                    items: [
                        { text: 'What is UnSass?', link: '/guide/what-is-unsass' },
                        { text: 'Installation', link: '/guide/installation' },
                        { text: 'Best Practices', link: '/guide/best-practices' },
                        { text: 'Patterns', link: '/guide/patterns' }
                    ]
                },
                {
                    title: 'Packages',
                    items: [
                        { text: 'Breakpoint', link: '/breakpoint/getting-started' },
                        { text: 'CSS', link: '/css/getting-started' },
                        { text: 'Em', link: '/em/getting-started' },
                        { text: 'Rem', link: '/rem/getting-started' },
                        { text: 'Selector', link: '/selector/getting-started' },
                        { text: 'String', link: '/string/getting-started' },
                        { text: 'Types', link: '/types/getting-started' },
                        { text: 'Var', link: '/var/getting-started' }
                    ]
                }
            ],
            footerSocial: true
        },
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
                link: '/guide/what-is-unsass',
                activeMatch: '^/guide/'
            },
            {
                text: 'Packages',
                activeMatch: '^/(breakpoint|css|em|rem|selector|string|types|var)/',
                items: [
                    { text: 'Breakpoint', link: '/breakpoint/getting-started', activeMatch: '^/breakpoint/' },
                    { text: 'CSS', link: '/css/getting-started', activeMatch: '^/css/' },
                    { text: 'Em', link: '/em/getting-started', activeMatch: '^/em/' },
                    { text: 'Rem', link: '/rem/getting-started', activeMatch: '^/rem/' },
                    { text: 'Selector', link: '/selector/getting-started', activeMatch: '^/selector/' },
                    { text: 'String', link: '/string/getting-started', activeMatch: '^/string/' },
                    { text: 'Types', link: '/types/getting-started', activeMatch: '^/types/' },
                    { text: 'Var', link: '/var/getting-started', activeMatch: '^/var/' }
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
                        { text: 'Selector', link: '/selector/getting-started' },
                        { text: 'String', link: '/string/getting-started' },
                        { text: 'Types', link: '/types/getting-started' },
                        { text: 'Var', link: '/var/getting-started' }
                    ]
                }
            ],
            '/breakpoint/': packageSidebar({ slug: 'breakpoint', configLabel: 'Configuration', hasFunctions: true }),
            '/css/': packageSidebar({ slug: 'css', configLabel: 'Custom Properties', hasFunctions: true }),
            '/em/': packageSidebar({ slug: 'em', hasFunctions: true }),
            '/rem/': packageSidebar({ slug: 'rem', configLabel: 'Configuration', hasFunctions: true }),
            '/selector/': packageSidebar({ slug: 'selector', hasFunctions: true }),
            '/string/': packageSidebar({
                slug: 'string',
                hasFunctions: true,
                hasMixins: false,
                changelogLink: monorepoChangelog('string')
            }),
            '/types/': packageSidebar({
                slug: 'types',
                hasFunctions: true,
                hasMixins: false,
                changelogLink: monorepoChangelog('types')
            }),
            '/var/': packageSidebar({
                slug: 'var',
                hasFunctions: true,
                hasMixins: false,
                changelogLink: monorepoChangelog('var')
            })
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/unsass'
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: `Copyright © 2022-${new Date().getFullYear()} <a href="https://frontfactory.dev">Front Factory</a>.`
        }
    }
});
