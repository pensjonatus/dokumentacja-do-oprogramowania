const path = require('path');

module.exports = {
  title: 'Dokumentacja do oprogramowania',
  tagline: 'poradnik dla managerów',
  favicon: 'img/favicon.ico',
  url: 'https://pensjonatus.github.io',
  baseUrl: '/dokumentacja-do-oprogramowania/',
  projectName: 'dokumentacja-do-oprogramowania', // Usually your repo name.
  organizationName: 'pensjonatus',
  plugins: [
    path.resolve(__dirname, './book-plugin/src'),
    '@docusaurus/plugin-google-analytics'
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-164939288-1',
      anonymizeIP: true,
    },
    disableDarkMode: true,
    navbar: {
      title: 'Dokumentacja do oprogramowania',
      logo: {
        alt: 'logo',
        src: 'img/book-logo.png',
      },
      links: [
        {
          to: 'docs/przedslowie',
          activeBasePath: 'docs',
          label: 'Czytaj online',
          position: 'right',
        },
      ],
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
              href: 'https://www.linkedin.com/in/pawel-kowaluk/'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paweł Kowaluk, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
