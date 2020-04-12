module.exports = {
  title: 'Dokumentacja do oprogramowania',
  tagline: 'poradnik dla managerów',
  favicon: 'img/favicon.ico',
  url: 'https://pensjonatus.github.io',
  baseUrl: '/dokumentacja-do-oprogramowania/',
  projectName: 'dokumentacja-do-oprogramowania', // Usually your repo name.
  organizationName: 'pensjonatus',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
  ],
  themeConfig: {
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
              label: 'Podcast Techwriter Koduje',
              href: 'https://techwriterkoduje.pl',
            },
            {
              label: 'Blog dla techwriterów',
              href: 'https://techwriter.pl',
            },
          ],
        },
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
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
