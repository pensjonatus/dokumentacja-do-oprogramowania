// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Dokumentacja do oprogramowania',
    tagline: 'Poradnik dla managerów',
    url: 'https://pensjonatus.github.io',
    baseUrl: '/dokumentacja-do-oprogramowania/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon-ddo.ico',
    organizationName: 'pensjonatus', // Usually your GitHub org/user name.
    projectName: 'dokumentacja-do-oprogramowania', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Dokumentacja do oprogramowania',
                logo: {
                    alt: 'logo',
                    src: 'img/DDO.png',
                },
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Warto odwiedzić',
                        items: [
                            {
                                label: 'Podcast Tech Writer koduje',
                                href: 'https://techwriterkoduje.pl',
                            },
                            {
                                label: 'Blog dla techwriterów',
                                href: 'http://techwriter.pl',
                            },
                        ],
                    },
                    {
                        title: 'Kontakt',
                        items: [
                            {
                                label: 'Autor',
                                href: 'https://www.linkedin.com/in/pawel-kowaluk/',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Paweł Kowaluk, Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
