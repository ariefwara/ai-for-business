const config = {
  title: 'AI for Business',
  tagline: 'Practical notes and playbooks for applying AI in business workflows.',
  favicon: 'img/favicon.ico',

  url: 'https://ariefwara.github.io',
  baseUrl: '/ai-for-business/',
  organizationName: 'ariefwara',
  projectName: 'ai-for-business',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'AI for Business',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Docs'
        },
        {
          href: 'https://github.com/ariefwara/ai-for-business',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AI for Business`
    },
    prism: {
      additionalLanguages: ['bash', 'json']
    }
  }
};

module.exports = config;
