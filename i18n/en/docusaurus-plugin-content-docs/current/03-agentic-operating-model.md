---
title: "What Is an Agentic Operating Model"
sidebar_position: 3
description: "Imagine a finance team starting to use agents to help with the monthly book close process. An agent can pull data from the ERP, match invoices, prepare draft..."
image: "/img/social/03-agentic-operating-model.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# What Is an Agentic Operating Model

<ArticleDiagram src="/img/diagrams/03-agentic-operating-model.png" alt="Diagram: What Is an Agentic Operating Model" />

Imagine a finance team starting to use agents to help with the monthly book close process. An agent can pull data from the ERP, match invoices, prepare draft journal entries, and follow up on exceptions. Meanwhile, a customer operations team also has an agent that responds to customer inquiries, changes addresses, or checks order status. At the same time, the IT team builds an agent for initial incident diagnosis.

Each of these seems to be working well. But then uncomfortable questions arise: who is actually responsible if an agent misclassifies an invoice? Who decides how much autonomy an agent should have? When should an agent ask a human first? And how does the company know whether the agents are genuinely helping or simply adding risk?

These questions cannot be answered by technical architecture alone. Architecture is important—it addresses how the system is built, how the agent gets context, and how it calls tools. But once agents start doing real work, companies need something more: a way to run the enterprise when software is no longer just a tool, but an active participant in executing work.

This is where the concept of an **agentic operating model** becomes relevant.

## When Old Assumptions Begin to Crumble

For decades, corporate operating models were built on a simple assumption: humans are the primary executors of work. Software existed to help—recording transactions in an ERP, managing interactions in a CRM, routing approvals through a workflow, or displaying data on a dashboard. But ultimately, it was humans who initiated, assessed, decided, and closed out the work.

Agentic AI is beginning to change this assumption.

Now, software is no longer just helping humans work faster. It is starting to execute multi-step tasks, coordinate work across systems, handle initial exceptions, make low-risk decisions, and only escalate to humans when confidence is low or policy requires it. This change might seem small when viewed per use case. But when agents start being deployed across multiple functions simultaneously, the old operating model begins to show its fragility.

The first problem is sporadic automation. One function buys an agentic tool for customer service. Another function builds an agent for finance. The IT team creates an agent for incident triage. Each looks productive in isolation, but there is no shared model for who owns the agent, how approvals work, or how results are evaluated. The outcome isn't a new operating model, but a collection of automation efforts growing in an uncoordinated way.

The second problem is blurred accountability. When an agent misclassifies an invoice, who is responsible? The data science team? The AP process owner? The platform vendor? Without clear definitions, every incident turns into a cross-functional debate.

The third problem is that scale amplifies risk. Small pilots often seem safe because they are closely monitored by the project team. But when agents are deployed across business units or countries, the weaknesses of the operating model become immediately apparent: inconsistent approvals, varying risk thresholds, and non-uniform success metrics.

For this reason, agentic AI cannot be managed merely as a technology project. It represents a new execution layer that demands a new operational discipline.

## Six Elements to Define from the Start

A healthy agentic operating model doesn't have to be complex, but it must be explicit. At a minimum, there are six elements that need to be defined from the outset.

### 1. Clear Boundaries of Authority

Every agent must know precisely which actions it can take without approval, which actions require human approval, and which actions should only be recommendations. This isn't just about saying "the agent helps with procurement." What's needed is an operational definition.

In procurement, for example, an agent might be allowed to classify intake requests and suggest a purchasing path. It can validate the completeness of vendor onboarding. It can handle simple invoice mismatches within policy tolerance limits. But it cannot approve a high-risk new supplier or modify the vendor master without approval.

In IT operations, an agent can perform initial diagnosis and low-risk remediation according to a runbook. But it cannot make broad-impact production configuration changes without the incident manager's approval.

Without clear boundaries of authority, an agent will either be too constrained to be valuable, or too free to be safe.

### 2. Three Owners for Every Agent

One of the most important principles in an agentic operating model is that every agent must have three owners.

First, the **business owner**. This is typically the owner of the process outcome. They define the agent's business objectives, SLAs, use case priorities, and the trade-offs between speed, quality, and user experience. For example, the Head of AP for an invoice exception agent, or the Controller for a close orchestration agent.

Second, the **technical owner**. This person is responsible for integration, reliability, observability, and the technical lifecycle of the agent. This role could reside in a platform team or an AI engineering team.

Third, the **risk owner**. This person defines guardrails, approval thresholds, compliance controls, and conditions for deactivation. In certain domains, the risk owner might come from compliance, internal control, or legal.

Without these three ownership roles, an agent may appear to be collectively owned, but in practice, it ends up being owned by no one.

### 3. Clear Escalation Paths

A mature operating model doesn't chase maximum autonomy. It pursues the *right* level of autonomy. Therefore, every agent must have a clear escalation path: when it needs to hand things over to a human.

This can happen when confidence is low, data is incomplete, there is a policy conflict, an exception falls outside normal patterns, a transaction value exceeds a threshold, or the potential reputational impact is too high.

In customer operations, an agent can handle address change requests independently, but must escalate large refunds or cases that could become disputes. In record-to-report, an agent can prepare draft journal entries, but must escalate material journals or sensitive accounts.

A good escalation path isn't just "throw it to a human." It must specify who receives the escalation, within what SLA, and with what context, so the human doesn't have to start the work over from scratch.

### 4. Three Operating Modes

Companies need to establish three simple but definitive operating modes.

The first mode is **recommendation only**. The agent analyzes, summarizes, or suggests actions, but the human still executes. This is suitable for domains that are new, high-risk, or lack sufficiently mature data and controls.

The second mode is **human-in-the-loop**. The agent prepares actions and can execute some steps, but the final decision still requires human approval. This is often the most realistic mode for the first wave of deployments in finance, procurement, HR, and customer operations.

The third mode is **bounded autonomy**. The agent can act independently within a defined scope, with clear guardrails, logging, and fallback mechanisms. This is suitable for high-volume work with relatively clear rules, such as ticket triage or low-risk IT remediation.

Importantly, these modes should not be determined by the technology team alone. They must be agreed upon by business, risk, and operations.

### 5. Measure Outcomes, Not Activity

Old operating models often focus too much on human activity and capacity: number of tickets handled, number of FTEs, or backlog per supervisor. In an agentic model, the focus must shift to the outcomes of the work system.

More relevant metrics include cycle time, exception rate, automation rate, cost per transaction, decision quality, rework rate, and SLA attainment. In the finance close, the primary question is no longer how many analysts are working overtime, but whether the close is faster, whether exceptions are resolved more quickly, and whether internal auditors have greater confidence in the control trail.

### 6. Redesign Human Roles

This is the part that is most often underestimated. An agentic operating model isn't just about adding agents to an existing team. It changes the design of work itself.

In many processes, humans will shift from performing transactions, moving data, and chasing follow-ups, to handling exceptions, overseeing decision quality, improving workflows, managing policies, and training the system through operational feedback.

In accounts payable, the team will no longer spend most of its time checking standard invoices one by one. The focus shifts to complex exceptions, vendor disputes, and policy tuning. In shared services, the role of the frontline case processor may diminish, while the need for process controllers, knowledge curators, and agent supervisors increases.

Companies can gain higher capacity and speed, but only if they are willing to redesign roles, skills, and team structures. If not, agents will simply be layered on top of the old organization.

## From Role-Based to Outcome-Based

One of the most significant implications of an agentic operating model is the shift from role-based management to outcome-based management.

In the old model, organizations tend to manage work based on organizational boxes: who does what, how many people are in each team, and how handoffs occur between roles. This approach makes sense when humans are the primary executors. But when agents are also executing, the more important unit of analysis is no longer the role, but the end-to-end outcome.

Agents don't care about job boundaries the way human organizations do. An agent can pull data from a CRM, check a policy in a knowledge base, create a ticket in an ITSM system, and update an ERP system all in one flow. Therefore, companies need to start asking: what outcome are we trying to achieve, which steps truly require a human, which decision points must be safeguarded, and which parts are best handled by digital labor.

In lead-to-cash, for example, instead of optimizing the separate productivity of sales ops, order management, billing, and collections, a company could redesign the outcome of "a valid order that is collected quickly" by using an agent to orchestrate order validation, contract checks, and initial collection follow-ups.

Not every area is ready to be managed in an outcome-based way immediately. If a process is still very chaotic, data is non-standard, and end-to-end ownership doesn't exist, forcing this model could add confusion. A more realistic first step is to stabilize the process, clarify ownership, establish baseline metrics, and then introduce agents gradually.

## Who Should Lead

Once a company gets serious about making agents a part of execution, its management structure must change accordingly.

Companies typically need a cross-functional governance forum involving business, technology, risk, security, legal, and HR. The goal isn't to add bureaucracy, but to ensure that important decisions aren't made in silos. This forum discusses use case priorities, levels of autonomy per domain, minimum control standards, performance metrics, incidents, and workforce impact.

A transformation office or AI office needs to manage agentic use cases as an operational product portfolio, not a collection of pilots. This means having a roadmap, a long-term owner, target outcomes, and clear decisions on when a use case should be stopped or expanded.

Most importantly, the agentic operating model is not solely a technology agenda. The COO needs to be involved because the primary changes are in process design and operational economics. The CHRO needs to be involved because the impact directly affects job design, skills, and performance management. The CFO and risk leaders also need to be active because agents touch controls, auditability, and accountability.

## Signs That a Company Isn't Ready

Not every organization is ready to scale an agentic operating model. Several common warning signs include: each function building its own agents without standard ownership; no official list of agents active in production; unclear business owners; approval thresholds varying without a basis in risk policy; operations teams not knowing when an agent has taken action; success metrics limited to tool adoption; HR having no perspective on changing roles; and agent incidents not being fed into formal governance mechanisms.

If several of these symptoms are already present, the priority should not be adding new use cases, but first strengthening operational discipline.

Ultimately, the agentic operating model isn't about making AI more active. It's about ensuring that when software starts to participate in work, the company still knows who decides, who is accountable, how risk is controlled, and how humans and agents produce outcomes together. That is what separates an impressive demo from a truly scalable transformation.
