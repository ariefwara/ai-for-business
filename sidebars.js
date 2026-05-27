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
            'agentic-transformation',
            'agentic-enterprise-architecture',
            'agentic-operating-model'
          ]
        },
        {
          type: 'category',
          label: 'Agent Design',
          collapsed: false,
          items: [
            'orchestrator-vs-task-agent',
            'tool-calling-api-integration',
            'agents-erp-crm-core-systems'
          ]
        },
        {
          type: 'category',
          label: 'Data and Context',
          collapsed: false,
          items: [
            'data-foundation',
            'context-layer'
          ]
        },
        {
          type: 'category',
          label: 'Strategy and Value',
          collapsed: false,
          items: [
            'agentic-ai-maturity-model',
            'agentic-ai-value-pool-selection',
            'build-buy-partner-borrow-agents',
            'agentic-ai-business-case'
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
            'identity-access-control',
            'observability',
            'guardrails-policy-human-approval',
            'agent-lifecycle-management'
          ]
        },
        {
          type: 'category',
          label: 'Security and Evaluation',
          collapsed: false,
          items: [
            'enterprise-agent-platform-reference-architecture',
            'agent-evaluation-testing',
            'agentic-ai-security-threat-model',
            'data-products-for-agents',
            'agentic-ai-finops'
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
            'human-ai-teaming',
            'new-roles',
            'agentic-shared-services',
            'gcc-4-ai-agents'
          ]
        },
        {
          type: 'category',
          label: 'Function Transformation',
          collapsed: false,
          items: [
            'finance-function',
            'supply-chain-control-tower',
            'it-delivery-model'
          ]
        },
        {
          type: 'category',
          label: 'Roadmap and Metrics',
          collapsed: false,
          items: [
            'workforce-reskilling',
            'performance-metrics',
            'outcome-based-operating-model',
            'roadmap-90-days',
            'roadmap-12-months'
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
