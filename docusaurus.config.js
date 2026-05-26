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
          to: '/agentic-enterprise/agentic-transformation',
          label: 'Start Here',
          position: 'left'
        },
        {
          label: 'Explore',
          position: 'left',
          items: [
            {
              to: '/agentic-enterprise/identity-access-control',
              label: 'Architecture and Governance'
            },
            {
              to: '/agentic-enterprise/human-ai-teaming',
              label: 'Operating Model'
            },
            {
              to: '/agentic-enterprise/roadmap-90-days',
              label: 'Roadmap'
            },
            {
              to: '/agentic-enterprise/agentic-enterprise-from-zero-playbook',
              label: 'Playbook'
            }
          ]
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
