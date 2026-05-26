const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Series Index'
    },
    {
      type: 'category',
      label: '1. Foundations',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Strategic Shift',
          collapsed: false,
          items: [
            'agentic-enterprise/agentic-transformation',
            'agentic-enterprise/agentic-enterprise-architecture',
            'agentic-enterprise/agentic-operating-model'
          ]
        },
        {
          type: 'category',
          label: 'Agent Design',
          collapsed: false,
          items: [
            'agentic-enterprise/orchestrator-vs-task-agent',
            'agentic-enterprise/tool-calling-api-integration',
            'agentic-enterprise/agents-erp-crm-core-systems'
          ]
        },
        {
          type: 'category',
          label: 'Data and Context',
          collapsed: false,
          items: [
            'agentic-enterprise/data-foundation',
            'agentic-enterprise/context-layer'
          ]
        },
        {
          type: 'category',
          label: 'Strategy and Value',
          collapsed: false,
          items: [
            'agentic-enterprise/agentic-ai-maturity-model',
            'agentic-enterprise/agentic-ai-value-pool-selection',
            'agentic-enterprise/build-buy-partner-borrow-agents',
            'agentic-enterprise/agentic-ai-business-case'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '2. Architecture and Governance',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Runtime Control',
          collapsed: false,
          items: [
            'agentic-enterprise/identity-access-control',
            'agentic-enterprise/observability',
            'agentic-enterprise/guardrails-policy-human-approval',
            'agentic-enterprise/agent-lifecycle-management'
          ]
        },
        {
          type: 'category',
          label: 'Security and Evaluation',
          collapsed: false,
          items: [
            'agentic-enterprise/enterprise-agent-platform-reference-architecture',
            'agentic-enterprise/agent-evaluation-testing',
            'agentic-enterprise/agentic-ai-security-threat-model',
            'agentic-enterprise/data-products-for-agents',
            'agentic-enterprise/agentic-ai-finops'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: '3. Operating Model',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Human-Agent Organization',
          collapsed: false,
          items: [
            'agentic-enterprise/human-ai-teaming',
            'agentic-enterprise/new-roles',
            'agentic-enterprise/agentic-shared-services',
            'agentic-enterprise/gcc-4-ai-agents'
          ]
        },
        {
          type: 'category',
          label: 'Function Transformation',
          collapsed: false,
          items: [
            'agentic-enterprise/finance-function',
            'agentic-enterprise/supply-chain-control-tower',
            'agentic-enterprise/it-delivery-model'
          ]
        },
        {
          type: 'category',
          label: 'Roadmap and Metrics',
          collapsed: false,
          items: [
            'agentic-enterprise/workforce-reskilling',
            'agentic-enterprise/performance-metrics',
            'agentic-enterprise/outcome-based-operating-model',
            'agentic-enterprise/roadmap-90-days',
            'agentic-enterprise/roadmap-12-months'
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
