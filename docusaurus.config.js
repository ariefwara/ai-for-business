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
    defaultLocale: 'id',
    locales: ['id', 'en', 'gsw'],
    localeConfigs: {
      id: {
        label: 'Indonesia',
        htmlLang: 'id-ID'
      },
      en: {
        label: 'English',
        htmlLang: 'en-US'
      },
      gsw: {
        label: 'Schwiizerdütsch',
        htmlLang: 'gsw-CH'
      }
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false
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
          label: 'Series'
        },
        {
          to: '/',
          label: 'Index',
          position: 'left'
        },
        {
          to: '/agentic-transformation',
          label: 'Start Here',
          position: 'left'
        },
        {
          label: 'Explore',
          position: 'left',
          items: [
            {
              to: '/identity-access-control',
              label: 'Architecture and Governance'
            },
            {
              to: '/human-ai-teaming',
              label: 'Operating Model'
            },
            {
              to: '/roadmap-90-days',
              label: 'Roadmap'
            }
          ]
        },
        {
          href: 'https://github.com/ariefwara/ai-for-business',
          label: 'GitHub',
          position: 'right'
        },
        {
          type: 'localeDropdown',
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
