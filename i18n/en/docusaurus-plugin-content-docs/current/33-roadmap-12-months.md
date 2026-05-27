---
title: "12-Month Roadmap to an Agentic Operating Model"
sidebar_position: 33
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# 12-Month Roadmap to an Agentic Operating Model

<ArticleDiagram src="/img/diagrams/33-roadmap-12-months.png" alt="Diagram: 12-Month Roadmap to an Agentic Operating Model" />

Imagine you have just completed a 90-day pilot. One agent is running, the results are promising, and the team is starting to ask: "When do we scale?" That question is natural, but it often leads to a trap. Many companies can build one agent that looks good. Far fewer can turn that success into a reliable capability across the entire organization.

At this point, the problem is no longer about which use case can be demonstrated or which model is most compelling. The focus shifts to a more fundamental question: how does a company move from a single pilot to a new, formal, measurable, and scalable way of working that can be extended across functions without losing control?

This is what the 12-month roadmap aims to answer. It is not just a plan to increase the number of agents, but a blueprint for building four things in parallel: credible proof of value, reusable platforms and patterns, governance and operational discipline, and changes to the workforce and service model.

Why must all four run concurrently? Because agentic transformation is not a technology project. It is a change in how a company runs its daily operations. The greatest value does not come from attaching AI to old processes, but from redesigning how humans and agents work together, how the platform supports them, and how risk is managed. Therefore, this roadmap should be read as a path to a new operating model, not just a schedule for experiments.

We will break it down into four quarters. Not because every company moves at the same pace, but because this sequence helps maintain a sound logic: prove value, build the foundation, expand to other domains, and then embed it into the company's mechanisms.

## First Quarter: Prove Value in One Domain

The first quarter is not the time to chase many use cases. The focus should be narrow: proving that an agent can improve a real outcome in one domain, while building just enough governance to learn safely.

The initial domain needs to be chosen with discipline. The best candidates are typically high-volume work with many exceptions, a clear process owner, and manageable risk. Examples include finance close support, procurement intake, customer operations triage, IT incident triage, or supply chain exception coordination within a limited scope.

The goal of the first quarter is not to launch AI. The goal is to produce evidence that an agent can measurably improve something.

### What should be in place by the end of the first quarter

These five things should be completed.

First, a pilot agent that is actually used in a real workflow. Not a generic chatbot, but an agent with a clear scope, limited tool access, and explicit human review. Examples include an agent that gathers evidence and prepares draft comments for the close process, an agent that classifies procurement requests and routes them to the correct path, or an agent that collects logs and recommendations for IT incidents.

Second, baseline metrics before the pilot runs. The company must have data on cycle time, error rates, backlogs, escalations, or other relevant metrics. Without baseline data, the pilot results will be nothing more than opinions.

Third, a template for an agent card. Each agent needs to be treated as an operational object. An agent card should at minimum describe the business objective, scope of cases, data sources, tools it is allowed to call, business owner, technical owner, risk level, and success criteria. This may seem administrative, but it becomes critical as the number of agents grows. Without a template from the start, each team will define agents in their own way.

Fourth, an initial tool registry. The first quarter does not require a large platform, but the company needs to start recording which tools and APIs agents are allowed to use, along with clear access rights and usage limits. This prevents agents from growing wild through ad-hoc connections to ERP, CRM, or knowledge base systems.

Fifth, a minimum risk review process. A large council is not needed yet, but there must be a simple review process involving business, technology, security, and risk control. This process assesses sensitive data, autonomy levels, approval thresholds, audit trails, and fallback plans if the agent fails.

### How to measure success

This is the discipline most often violated. The success of the first quarter is not measured by how many prompts succeeded, how many stakeholders were impressed, or how many use cases are on the waiting list. Success is measured by questions like: Did cycle time improve for the selected cases? Was the agent's output useful enough to reduce manual workload? Is the error rate still acceptable? Are users actually using it? Are the minimum controls working?

If the answers are not clear, the company is not ready to move to the next phase.

### Compromises to accept

The first quarter demands conservatism. Many organizations want to give agents execution rights immediately. That is usually too fast. For most companies, the first quarter should stop at the level of monitoring, drafting, or recommending. This pattern suits domains like finance, procurement, and IT operations, where limited autonomy is healthier than full automation. If the basic processes are still chaotic, data is unstable, or policies are undocumented, the first quarter might rightly end with the correct decision: fix the foundation before expanding.

## Second Quarter: Build Reusable Platforms and Patterns

If the first quarter proved that one use case has value, the second quarter is about avoiding the most common trap: building the second, third, and fourth agents in completely different ways. This is where the company starts moving from a pilot toward a shared platform.

Scale value emerges when AI strategy, platform, and business begin to align. Without that, the organization is just collecting expensive, hard-to-audit pilots.

### Platform capabilities to build

The second quarter does not mean everything must be perfect, but several shared capabilities need to become tangible.

First, identity and access control. Agents should not use generic credentials or borrowed human access. The company needs to start implementing agent identities, role-based access, and tool call restrictions according to policy.

Second, observability. Every time an agent runs, it should be possible to see the input context, the tools called, the results given, any errors that occurred, and when a human intervened. Without observability, scaling will produce confusion, not learning.

Third, an evaluation framework. A good pilot is not tested just once. The second quarter needs to start building more systematic evaluation: historical test cases, boundary scenarios, policy compliance checks, and output quality measurements.

Fourth, a policy and approval layer. The company needs to start separating policy logic from agent prompts or code. For example, transactions above a certain threshold require approval, certain data cannot be accessed, or specific actions can only be taken at a low-risk level.

Fifth, a deployment pipeline. Agents also need lifecycle discipline. Changes to prompts, tool schemas, policies, or models should not go directly into production without appropriate testing and approval.

### Turn pilot components into reusable patterns

The second quarter is the phase of initial standardization. The team should start asking: which parts of the pilot can be reused, what should become a template, and what should be prohibited. Examples of reusable patterns include agent card templates, human approval workflow patterns, evidence package structures, tool wrapper designs for ERP or CRM systems, evaluations for classification or drafting, and standard observability dashboards.

This is especially important for shared service teams, global service centers, or enterprise platform teams. Without reusable patterns, each domain will build its own mini-platform.

### Formal governance council begins to form

In the second quarter, governance can no longer be informal. The company needs to form a governance council or equivalent forum that manages three things: portfolio prioritization—which use cases to proceed with, which to defer, and which to stop; risk classification—because not all agents are treated equally; and minimum standards for identity, logging, evaluation, approval, and release.

This council should ideally be cross-functional: head of IT, business owners, risk/compliance/security, architecture, and, if necessary, finance or internal audit.

### When the second quarter is not yet appropriate

If the first quarter did not produce sufficient evidence, the second quarter should not be forced into a large platform program. Building a platform without proven use cases will only create fixed costs with no adoption.

## Third Quarter: Expand to Multiple Domains and Start Running an Agent Factory

Once the basic platform and reusable patterns are in place, the third quarter is the time to expand agentic work to two or three additional domains. But it must be emphasized: expanding does not mean opening the floodgates to every idea. Expanding means selectively adding domains that have a clear business sponsor and adequate operational readiness.

Examples of sensible combinations: from finance close to accounts payable exception handling; from procurement intake to vendor inquiry operations; from IT incident triage to change readiness; from customer operations to claims or service requests; from supply chain exception monitoring to coordination workflows.

### Business sponsors must be real

Every additional domain must have a sponsor willing to own the target outcomes, process changes, compromise decisions, and team adoption. Without an active business sponsor, expansion will revert to being a technology project.

### The agent factory begins operations

In the third quarter, the company should start running an agent factory. Not a literal factory, but a delivery model that makes agent building more industrialized and controlled.

Its key components include a playbook: a standard guide for selecting use cases, designing agents, determining autonomy levels, setting up evaluations, and running limited launches. Also, a reference architecture that explains how agents connect to models, the context layer, the tool layer, the policy engine, observability, and enterprise systems. Then, a reusable test suite for output quality, tool failures, policy compliance, security checks, and regression testing when changes occur. And a training program for business owners, supervisors, engineers, risk reviewers, and operations leaders so they can work within a human-agent team model.

The agent factory is critical to prevent uncontrolled agent proliferation. Without it, the company will have many agents, but few standards, little reuse, and limited control.

### HR and operations begin changing roles, KPIs, and workforce plans

The third quarter is also the point where workforce changes can no longer be delayed. Once several domains are running, HR and operations must start updating job descriptions, skill expectations, supervisor KPIs, capacity models, and workforce plans.

Examples of changes: finance analysts are no longer measured primarily by the volume of manual touches, but by the quality of reviews, exception resolution, and root cause fixes. Service desk leaders are measured by the quality of resolution from the human-agent team, not just the number of tickets per human agent. Supply chain planners hold KPIs on exception resolution and decision quality, not just dashboard monitoring.

This is also the right time to clarify new roles such as agent product owner, workflow designer, agent operations lead, evaluation or testing lead, and policy manager.

### Compromises in the third quarter

The third quarter is often the most dangerous phase. Early value is visible, so the organization is tempted to accelerate too many domains at once. The risks: the platform is not mature enough, the governance council is overwhelmed, training lags behind, and agent quality drops as teams chase volume. Therefore, it is better to expand to two or three domains with discipline than to ten domains in chaos.

## Fourth Quarter: Integrate into the Formal Operating Model

If the first quarter was about proving, the second about standardizing, and the third about controlled expansion, then the fourth quarter is the phase that separates serious companies from mere innovation showcases. In the fourth quarter, agentic AI must begin to enter the company's management mechanisms, not just its list of experiments.

### Integrate into planning and budgeting

The company needs to start including agentic initiatives in annual planning, platform investment allocation, functional business cases, and productivity or service outcome targets. This is important because as long as agents are funded like experiments, they will always be vulnerable to cuts or marginalization.

### Integrate into risk management

Risk management must move from ad-hoc reviews to a more formal model: a risk taxonomy for agents, control testing, incident response for agent failures, periodic reviews of policy deviations, and involvement of internal audit.

### Integrate into vendor management

Many companies will use a mix of vendor platforms, model providers, system integrators, and managed service partners. The fourth quarter is the time to establish who is responsible for what, what standards vendors must meet, how data and model risk are managed, and how outcomes are measured in contracts. This is especially relevant for shared services and global service centers that are moving toward agentic service models. Ultimately, agentic services are not about buying tools, but about buying and managing outcomes.

### Integrate into performance reviews

If the operating model changes, the performance evaluation system must also change. The company needs to start assessing the quality of human-agent collaboration, supervisory capability, contributions to workflow redesign, and continuous improvement of agent performance. If KPIs remain based on old activities, the organization will silently resist the transformation.

### From innovation lab to formal operating model

The clearest sign of success in the fourth quarter is this: agents are no longer seen as experiments by the innovation team, but as part of how the company runs its operations. This means there is a clear owner, a budget, standards, periodic reviews, outcome metrics, and accountability.

### Focus for the following year

After 12 months, the company should no longer be thinking only in terms of use cases. The focus for the following year should shift to strategic bets, such as redesigning entire value streams, building agentic shared services, transforming global service centers into AI-driven delivery hubs, or turning the enterprise platform into a more adaptive orchestration layer. This is where agentic transformation truly becomes an agenda for the company's operating model.

## What Needs to Be Decided Now

Several decisions need to be made immediately. First, choose one domain for the first quarter that is important enough to prove value, but safe enough to be contained. Do not start with a domain that is only easy to demo, or conversely, too material for an initial experiment.

Second, decide when the company will invest in a shared platform. Building a platform too early will be expensive. Building it too late will create uncontrolled agent proliferation. Use the evidence from the first quarter as the basis for the second-quarter decision.

Third, form a governance council before expanding across domains. If more than one domain starts running, the portfolio, risk levels, and standards can no longer be managed informally.

Fourth, determine the company's agent factory model. Decide whether it will be centralized in a platform team, a digital factory, a global service center, or a hybrid model with central standards.

Fifth, start aligning HR, finance, and operations with the agentic roadmap. If roles, KPIs, budgeting, and vendor models do not change, agents will remain a side project.

## Red Flags to Watch For

Several signals indicate that a company is not ready to expand. If success is still measured by the number of demos or the number of agents, rather than outcomes. If each domain builds agents with different tools, standards, and access. If there is no clear separation between business owner, agent owner, and risk owner. If governance is only discussed after agents start touching core systems. If HR has not been involved even though human workflows have already changed. If the platform team is asked to scale but lacks observability, evaluation, or deployment discipline. If business sponsors are passive and view this as purely a technology agenda. If there is no firm decision to stop use cases that are not showing value.

## Questions to Reflect On

If 12 months from now your company has 20 active agents, does that mean your operating model has changed? Or do you simply have 20 new experiments, each dependent on the hard work of a small team, without a platform, governance, or workforce model ready to support them?

That is the question that separates shallow agentic adoption from an agentic operating model that is truly ready for the enterprise.
