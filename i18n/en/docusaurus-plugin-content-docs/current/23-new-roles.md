---
title: "New Roles in the Agentic Enterprise"
sidebar_position: 23
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# New Roles in the Agentic Enterprise

<ArticleDiagram src="/img/diagrams/23-new-roles.png" alt="Diagram: New Roles in the Agentic Enterprise" />

Imagine a finance team starting to use an agent to help with the monthly close process. The agent can pull data from the ERP, draft commentary, and flag exceptions. As a result, the time the team needs decreases. But then unexpected questions arise: who is actually responsible if the agent misclassifies an account? Who decides the priority for improving the agent next week? Who ensures the agent doesn't access data it shouldn't see?

Situations like this are starting to surface in many companies. Business teams often feel agents are an IT matter. IT feels agents are a "feature" that the business should own. Risk and compliance only get involved when concerns arise. Operations end up bearing the daily impact but lack the mandate for design. The outcome is predictable: the agent lives between functions but isn't truly owned by anyone.

This problem won't be solved by technology alone. As companies move from simply trying out copilots to making agents part of daily operations, new jobs do emerge. Not just technical jobs, but jobs centered around designing agent-based workflows, overseeing outputs and exceptions, managing risk and approvals, curating knowledge and business rules, and managing the agent lifecycle as an operational asset.

This shift aligns with a change now visible in many organizations: humans are no longer just users of AI, but are increasingly taking on roles as architects, overseers, stewards, and managers of a digital workforce. If these roles are not explicitly defined, companies will face two problems simultaneously: the business value of agents will never be fully realized, and operational risk will rise due to a lack of clear ownership.

## Why New Roles Are Needed

Agentic AI is often misunderstood as a new wave of automation. As if once agents arrive, human work simply decreases. In enterprise practice, the opposite is true. When agents start handling intake, triage, drafting, routing, monitoring, or limited execution, companies actually need more discipline around what agents are allowed to do, who determines improvement priorities, who monitors quality, who is responsible if an agent makes a mistake, and who ensures the business context the agent uses remains correct.

In other words, agents don't eliminate organizational needs. They transform the form those needs take.

As long as agents are still in pilot mode, companies can get by with informal structures. A product manager helps a bit. A data scientist tweaks a prompt. An operations lead provides input. An architect assists with integration. This can still work. But once agents enter processes like finance close, procurement intake-to-PO, customer complaint handling, IT incident triage, supply chain exception management, or shared services case handling, they are no longer experiments. They become part of the work system. And every part of an enterprise work system needs an owner, controls, metrics, and a rhythm of improvement. If not, responsibility falls into the gaps between business, IT, risk, and operations.

There are several clear signals that these new roles haven't been well defined. Agents are used in operations, but no single business owner holds their roadmap. Operations teams often complain about agent output quality, but feedback never enters a clear backlog. Changes to prompts, models, or tools are made by technical teams without adequate domain review. Risk is only involved after an incident or an audit question. The agent's knowledge base is full of outdated documents, but no one feels responsible for cleaning it up. Human supervisors are asked to "oversee AI" but are not given SOPs, dashboards, or decision-making authority.

In such conditions, companies usually still see agents as a technology layer. What's actually needed is an operating model design. A common mistake is treating these roles as informal add-ons: "the operations manager can just keep an eye on the agent's output," or "the AI platform team can handle everything." This approach won't scale. New roles in the agentic enterprise must be designed like any other role in operations: with a mandate, defined decision rights, metrics, working forums, and clear relationships with other functions.

## Agent Product Owner: Owner of Value, Not Just Features

The most important role is typically the Agent Product Owner. This is the person responsible for ensuring the agent delivers tangible business value, is adopted by users, and evolves according to enterprise priorities. If an agent is treated like a product, then someone must hold its vision and business objectives, its development roadmap, backlog priorities, success metrics, and trade-off decisions between speed, quality, risk, and adoption.

The Agent Product Owner is not just an AI project coordinator. They must hold four main things. First, the value thesis. They must be able to answer what business problem the agent solves, what outcomes are expected, and why this use case deserves prioritization. Example in finance close: the agent isn't built just to "help the controller," but to reduce evidence gathering time, speed up exception triage, and improve the consistency of draft commentary. Example in procurement: the agent isn't just a chatbot for intake, but a tool to decrease request cycle time, increase sourcing path compliance, and reduce buyer rework.

Second, the roadmap and backlog. Agents will always change. Policies change, SOPs change, tools are added, data products improve, and new failure modes emerge. Therefore, agents need a backlog like any other digital product: quality improvements, scope expansion, threshold adjustments, new tool integrations, UX improvements, and control enhancements. Without a clear backlog, feedback from operations will just become recurring complaints.

Third, adoption and operating fit. A technically good agent isn't necessarily used. The product owner must ensure the agent fits the actual work rhythm: is its output usable, is the handoff to humans clear, are supervisors not burdened with excessive review, do users trust the evidence presented? This is crucial because many agents fail not because the model is bad, but because the daily work design isn't a good fit.

Fourth, lifecycle and metric ownership. The Agent Product Owner must treat the agent as a product with a lifecycle: pilot, limited production, scale-up, optimization, or retirement. They must also own relevant metrics, such as adoption rate, acceptance rate, correction rate, escalation rate, cycle time impact, and business outcome per workflow.

The Agent Product Owner sits at the intersection of five worlds: business domain, engineering/platform, data/knowledge, risk/compliance, and operational users. Therefore, this role is rarely a good fit for someone strong in only one area. A product owner who is too technical can lose process sensitivity. One who is too operational can struggle to lead a technical backlog. One who is too focused on compliance can prevent the agent from ever moving forward. In practice, this role is most effective when filled by someone who deeply understands the business process, understands technology enough to set realistic priorities, and can lead cross-functional change.

In smaller organizations, the Agent Product Owner role can be combined with a process owner or digital product manager. That makes sense. But for use cases that are cross-functional, touch core systems, have medium to high risk tiers, or are used at high volume, this role should not be a side job. If product ownership is weak, what typically happens is that the roadmap is determined by what is easy to build, not what is most valuable; operations feel unheard; risk gets involved too late; and the agent evolves without consistent direction.

## Agent Supervisor and Risk Owner: Productivity Must Not Sacrifice Trust

Once agents start working in operations, companies need two roles that are often mistakenly thought of as the same thing, but are different: the Agent Supervisor and the Agent Risk Owner. They must work very closely together, but their mandates are not identical.

### Agent Supervisor: The Daily Overseer of Agent Work

The Agent Supervisor is an operational role. Their focus is not strategic design, but the agent's performance on the ground. They are responsible for monitoring agent output, handling exceptions, correcting wrong results, providing structured feedback, and ensuring the agent works according to daily SOPs. If the Agent Product Owner holds the roadmap, the Agent Supervisor holds the reality check from operations.

In customer operations, the supervisor checks which cases the agent handled well, which refund recommendations are frequently rejected, what customer or product patterns trigger errors, and when the agent is too aggressive or too conservative. In finance close, the supervisor or controllership team lead monitors which draft commentaries are most often changed, which exceptions fail to be classified, which accounts or entities most frequently trigger escalations, and whether the agent truly reduces the team's workload. In IT operations, the supervisor monitors incidents that are triaged incorrectly, runbook recommendations that are irrelevant, alert fatigue created by the agent, and when an engineer needs to take over.

A common mistake is making the supervisor just a "human who checks AI results." That is too narrow and expensive. An effective supervisor must have the tools and mandate to flag failure modes, group error patterns, propose changes to SOPs or thresholds, and provide input to the product owner's backlog. This means the supervisor is part of a continuous improvement loop, not just a safety guardrail.

If too much agent output needs to be checked by the supervisor, productivity is lost. If there is too little oversight, trust and control can erode. Therefore, the design of the supervisor role must be tailored to the risk tier of the use case, the agent's level of autonomy, the agent's current quality, and the capacity of the operations team. For low-risk use cases, sampling review might be enough. For medium-risk use cases, exception-based review is more appropriate. For high-risk use cases, stricter approval or oversight may still be necessary.

### Agent Risk Owner: The Owner of Trust Boundaries

Different from the supervisor, the Agent Risk Owner holds the governance mandate. They are responsible for setting the agent's risk tier, mandatory minimum controls, approval thresholds, delegated authority limits, auditability requirements, and compliance conditions. This role is crucial because agentic AI is not just about efficiency. It touches data access, operational decisions, actions affecting customers or transactions, and sometimes heavily regulated domains.

The risk owner must answer questions like: is this agent only allowed to recommend, or can it execute with approval? What transactions or actions must always go through a human gate? What data is the agent allowed to access in a specific context? What evidence must be saved for audit? When should an agent incident be considered material?

Example in procurement: the risk owner stipulates that the agent can create a draft purchase request, but cannot create a new vendor or bypass due diligence. Example in finance: the agent can prepare draft analysis and recommendations, but material accounting treatments must still be decided by a human. Example in HR services: the agent can answer general policy questions, but cannot make decisions affecting employment status or compensation without much stricter controls.

If the supervisor and risk owner roles are combined without discipline, two things can happen: operations become too dominant and push productivity at the expense of control, or risk becomes too dominant and prevents the agent from ever being autonomous enough to deliver value. Separating the roles helps maintain balance. The supervisor brings the reality of productivity. The risk owner brings the discipline of trust. Both must meet in regular forums, for example, weekly reviews for exception patterns, monthly reviews for threshold changes, and sign-offs when the agent's level of autonomy increases.

## Platform Engineer and Knowledge Curator: Technical Foundation and Business Context

Many organizations focus too much on models and prompts, forgetting that an enterprise agent is only as good as the platform it runs on and the business context it understands. Therefore, the following two roles are very important: the Agent Platform Engineer and the Knowledge Curator.

### Agent Platform Engineer: Building a Trustworthy Execution Layer

The Agent Platform Engineer is responsible for the technical foundation that allows agents to run safely, scalably, and operably. Their mandate typically covers runtime and orchestration, tool registry and tool execution, IAM and access control, observability and tracing, deployment pipeline, environment management, rollback and release control, and integration with ERP, CRM, HRIS, ITSM, and other core systems.

Application software engineers can build features. But agentic systems require additional discipline: model gateways, policy enforcement, audit trails, permission-aware access, behavior evaluation, and cost/latency/capacity control. Therefore, a platform engineer for the agentic enterprise must understand the intersection of cloud/platform engineering, enterprise integration, AI runtime, and governance requirements.

In shared services, the platform engineer ensures that the AP exception handling agent can only call permitted tools, all tool calls are logged, the approval workflow is connected, and agent version changes can be rolled back if quality drops. In IT operations, they ensure that agent remediation runs in the correct sandbox or environment, does not use excessive credentials, and all sensitive actions pass a policy check. Without this role, companies will have agents that seem smart but are fragile when they hit production.

### Knowledge Curator: Ensuring the Agent Understands the Business Correctly

If the platform engineer maintains the "engine," the Knowledge Curator maintains the "content of the agent's head." This role is responsible for ensuring that the documents the agent uses are relevant, that the SOPs and policies fed into the context layer are still valid, that business rules are well documented, that metadata and sources of truth are clear, and that outdated or conflicting knowledge is cleaned up.

Many enterprise agent failures are not due to a weak model, but because the context is poor. Old policies are still retrieved, SOPs are inconsistent across units, informal documents are mixed with official rules, or business definitions are never standardized. In such conditions, the agent will still answer confidently, but be operationally wrong.

In procurement, the knowledge curator ensures the latest category spend policies are available, vendor onboarding rules are not mixed with old guides, sourcing templates and SOPs have correct metadata, and superseded documents are no longer primary retrieval sources. In finance, they ensure that current accounting guidance is the source of truth, the close calendar and exception handling SOPs are updated, official commentary templates are available, and terms like material variance or final close status are unambiguous. In customer operations, they ensure refund policies, entitlement rules, and escalation playbooks are synchronized, inactive product bulletins are no longer used, and knowledge articles that are most frequently corrected are promptly fixed.

The knowledge curator does not have to come from the data team. Often, this role is better filled by a domain expert who understands the process, knows which documents are official and which are informal references, and can work closely with the platform or AI team. The trade-off is clear: if this role is too technical, the quality of business context will be weak. If it is too domain-only without discipline in metadata and lifecycle, the knowledge layer will quickly become messy. In more mature organizations, the knowledge curator often works alongside process excellence, data product owners, compliance/policy owners, and the platform team.

## Designing a Sensible Human-Agent Organization

After understanding the roles above, the next question is how to place them within the organizational structure. There is no one-size-fits-all design. But there are several fairly consistent principles.

First, value ownership must remain with the business. The Agent Product Owner should be close to the business or operations function that receives the value. If this role is pulled entirely into IT, the agent tends to become a technology project, not a process transformation tool.

Second, runtime and technical control need a shared platform. The Agent Platform Engineer is usually more effective if they are part of a centralized platform team or a federated platform model, rather than scattered across individual use cases. This is important for consistency in IAM, observability, deployment, and governance.

Third, daily oversight must be close to operations. The Agent Supervisor should be on the operations front line, as they understand the exceptions, workload, and daily reality of SOPs.

Fourth, risk ownership must be formal, not merely advisory. For use cases that touch transactions, customers, sensitive data, or regulated domains, the risk owner cannot just be an occasional reviewer. They must have decision-making authority.

Fifth, knowledge cannot be treated as a side job. If knowledge curation is left informal, agent quality will silently degrade. This is one of the most common reasons agents look good initially but worsen as they scale.

Companies that are still in the early stages don't have to create five new job titles immediately. What matters is that the functions exist. For example, in the early phase, a process owner could double as the Agent Product Owner, an operations team lead could become the Agent Supervisor, an existing control owner could take on the Agent Risk Owner role, an enterprise platform engineer's mandate could be expanded, and a subject matter expert could become a part-time knowledge curator. However, once agents are used across units, touch several core systems, have a continuously growing backlog, or materially impact operational KPIs, formalizing the roles becomes important.

## Practical Implications

After understanding this topic, there are several decisions that should be made now. First, determine who owns each agent that is already in or about to enter production. Do not let an agent live without a clear Agent Product Owner. Second, separate operational oversight from risk ownership. Identify who the Agent Supervisor and who the Agent Risk Owner are for each important use case. Third, decide on the platform and knowledge ownership model. Are runtime, IAM, observability, and deployment managed by a shared platform? Who curates the SOPs, policies, and business rules? Fourth, define metrics per role. The product owner owns value and adoption. The supervisor owns exceptions and feedback quality. The risk owner owns control adherence. The platform engineer owns reliability and operability. The knowledge curator owns the freshness and trustworthiness of the context. Fifth, determine when informal roles should be formalized, for example, when an agent touches a core system, transaction volume increases, or the level of autonomy rises.

There are several danger signals that this topic is not yet ready to scale. Agents are widely used, but no single name can be pointed to as the owner. Operations teams are asked to oversee agents without dashboards, SOPs, or allocated time. Risk only appears at the end of a project or after an incident. The agent's knowledge base is full of old documents with no curation process. Platforms are built per use case, so access control, logging, and deployment are inconsistent. Agent success is measured only by demos or model accuracy, not by operational outcomes and trust.

If tomorrow agents become a permanent part of your company's workforce, do you already know who leads their value, who oversees their work, who holds their risk, and who keeps their business context correct? If the answer isn't clear, then your challenge is no longer about technology. It's about organizational design.
