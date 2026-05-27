---
title: "Selecting Agentic AI Value Pools Worth Pursuing"
sidebar_position: 10
description: "Imagine you are the head of a business function. Your team has already run several AI pilots. Technically, some have succeeded—the model responds well, the agent..."
image: "/img/social/10-agentic-ai-value-pool-selection.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Selecting Agentic AI Value Pools Worth Pursuing

<ArticleDiagram src="/img/diagrams/10-agentic-ai-value-pool-selection.png" alt="Diagram: Selecting Agentic AI Value Pools Worth Pursuing" />

Imagine you are the head of a business function. Your team has already run several AI pilots. Technically, some have succeeded—the model responds well, the agent can pull data from systems, and a few early users feel it's helpful. Then management asks, "What's the business value? How big is it? When will we see it?" The answers you have are still vague. You are not alone. Many companies are experiencing the exact same thing.

The problem isn't the technology. Pilots can look impressive in a demo. But when it's time to take them to production and be accountable to the CFO, COO, CIO, and risk teams, the story changes. The questions are no longer "can this model work?" but rather "what is the business value, how big is it, how fast can we realize it, and is this more important than other initiatives?"

For agentic AI, this challenge is sharper than for standard copilots. Agentic AI requires integration into core systems, access controls, a policy engine, logging and audit trails, evaluation, and changes to the operating model. All of this comes with a cost. If the chosen use case is too small, too localized, or too ambiguous, the organizational cost of building it can outweigh the value generated.

Therefore, selecting a use case cannot start with the question "what can this model be used for?" The more appropriate questions are: which business pain is significant enough to fix? which workflow is important enough to redesign? which domain is ready enough for agent execution? and which capability can be reused across many areas?

## Pilot Purgatory, a Common Trap

Many organizations get stuck in a condition that can be called pilot purgatory. There are many experiments, some impressive demos, and even use cases that succeed technically. But nothing truly becomes an operational capability at scale.

The cause is rarely just the technology. The main barriers usually fall into three categories.

First, the use case is too small to bear the enterprise cost. An agent that helps summarize internal emails or prepare draft responses might be useful. But if the business value is only saving a few minutes of work in a non-critical area, it's hard to justify the investment in integration with core systems, access controls, policy engine, logging, evaluation, and operating model changes. For an individual copilot, this might still make sense. For agentic execution, it often does not.

Second, the use case is not connected to a value pool recognized by executives. Many pilots are chosen because they are easy to demo, not because they are important to the business. Consequently, when the program needs to scale to production, executive sponsorship weakens. There is no P&L owner who finds it material enough. No domain owner is willing to change the process. There is no strong reason to prioritize integration or governance.

Third, the focus is on model capabilities, not on business pain. Organizations often start from technical capabilities: document understanding, summarization, reasoning, workflow automation, or multi-agent orchestration. All of these are important, but they are not the starting point for selecting a value pool. A healthier starting point is to ask: where is the company losing time? where is working capital tied up? where are exceptions piling up? where are decisions slow? where is control risk high? and where is the customer or employee experience broken due to poor handoffs?

In other words, agentic AI should be positioned as a tool to improve the economics and control profile of important workflows, not as a technology experiment looking for a problem.

## Start from Business Pain, Not from an Attractive Demo

Valuable value pools typically emerge in workflows that have a combination of sufficiently high volume, many handoffs or exceptions, dependence on multiple systems, a need for repetitive decisions, and a real impact on cost, revenue, risk, or speed.

Examples can be seen across various functions. In finance close, there are reconciliation exceptions, journal entries, commentary, and evidence packs. In procurement, there are intake-to-PO, vendor onboarding, invoice exceptions, and approval routing. In customer operations, there are complaint resolution, refund eligibility, and order exception handling. In IT operations, there are incident triage, runbook execution, and change risk assessment. In supply chain, there are shipment exceptions, allocation issues, and supplier disruption response. In shared services or GCCs, there is case management across HR, finance, procurement, and IT.

Conversely, workflows that are very small, non-critical, or only touch personal productivity are usually better suited for a copilot approach, not an agentic transformation.

## The Value Truly Worth Pursuing

Once the pain areas are identified, the next step is to define the type of value you want to capture. This sounds simple, but many AI business cases fail because all value is lumped into a general narrative about efficiency or productivity. In reality, agentic AI value pools usually come from several distinct categories.

The first category is financial value. However, cost reduction is just one form of it. Cost reduction is the easiest to understand, especially for high-volume, repetitive processes. Examples include reducing manual effort in AP exception handling, decreasing the load on level 1 service desks, reducing rework in customer case management, or lowering coordination effort during finance close. But cost reduction can be a trap if used too early. Many organizations claim FTE savings before the process is truly redesigned. A healthier approach is to start with reductions in effort, cycle time, or backlog, and then realistically assess the capacity implications.

Working capital improvement is often more attractive to a CFO than mere labor efficiency. An agent for collections can accelerate follow-ups and dispute resolution. An AP agent helps reduce held invoices. A procurement agent speeds up intake and PO issuance, thereby reducing emergency purchases. A supply chain agent helps reduce excess safety stock because exceptions are handled faster. In many companies, the working capital value pool is actually more material than direct cost savings.

Revenue uplift can also be a value pool, though not all are in the back office. In customer operations or sales support, an agent can accelerate customer response times, improve conversion rates on lead handling, reduce churn due to service failures, or speed up the resolution of order exceptions that previously hindered billing. However, revenue uplift must be treated carefully. Its relationship is often indirect, so baselines and attribution need to be more disciplined.

Risk reduction can be a primary value pool for regulated domains. Examples include agent policy checking in procurement or finance, evidence pack generation for audits, detection of process deviations, or triaging cases with potential fraud or compliance breaches. The value of risk reduction is often difficult to translate into a single number, but it remains a valid value pool as long as the baseline and indicators are clear.

Faster cycle time is also a source of value in many workflows. Faster close, faster vendor onboarding, faster incident resolution, faster customer complaint resolution, or faster order change processing. Faster cycle time can impact cost, customer experience, working capital, and operational resilience simultaneously.

Beyond financial value, there is strategic value that often determines executive priority. Customer experience, for example. If agentic AI improves the quality and consistency of service at critical moments, its value can be enormous even if it doesn't appear directly as cost savings. Speed-to-market is also important. In functions like product operations, IT delivery, or supply chain planning, agentic capability can accelerate change cycles and market responsiveness. Regulatory confidence, for heavily regulated industries, the ability to produce better audit trails, evidence, and policy adherence can be a primary reason for investment. Competitive differentiation, some value pools are worth pursuing not because they save costs, but because they change how the company competes.

Whatever the type of value, every value pool must have a baseline. Without a baseline, ROI becomes a story that is difficult to test. At a minimum, before selecting a use case, the company needs to know the current cycle time, transaction or case volume, exception rate, backlog, rework level, SLA misses, and where costs or risks truly arise.

Example in finance close: don't start with the claim "an agent will speed up the close." Start with a baseline like which steps cause the most delays, which exceptions recur most often, how much time is spent on evidence gathering, and how much senior staff effort is consumed by coordination. Example in customer operations: don't just say "an agent will improve CX." First measure average handling time, first-contact resolution, escalation volume, and the types of cases that most often get stuck. Without a baseline, the organization will struggle to distinguish real value from initial user enthusiasm.

## Realistic Feasibility

High value alone is not enough. Many high-value workflows are not yet ready for agentic execution. Therefore, the second dimension is feasibility.

Practically, feasibility is determined by five questions.

First, is the data and context sufficiently available? If data is scattered, business definitions are inconsistent, or the knowledge corpus is not curated, the agent will frequently get the context wrong. Workflows that heavily depend on tacit knowledge and unstructured documents may be high-value, but they are not ready for an initial phase.

Second, are the systems and APIs ready enough? If the use case requires interaction with ERP, CRM, HRIS, or core systems, the company must assess whether read access is available, actions can be performed via governable APIs, events are available, and access controls can be properly applied. If everything still relies on fragile UI automation, feasibility decreases.

Third, is the process stable enough? This point is often overlooked. Workflows that are very chaotic, full of local variations, and undocumented might seem attractive for AI assistance. But precisely because they are too ambiguous, they are often poor candidates for initial agentic execution. Agentic AI is not a substitute for basic process discipline. If a process lacks a clear definition of outcomes, exception paths, and ownership, an agent will only accelerate the chaos.

Fourth, is the domain owner truly committed? Many use cases fail not because of the model, but because the process owner is not ready to change how work is done. Agentic AI almost always demands a redesign of handoffs, a redefinition of approvals, changes in human roles, and new measurements. If the domain owner only wants to "add AI" without changing the process, practical feasibility is low.

Fifth, can the risk be controlled? Some workflows are too sensitive for a first wave, for example, posting material journal entries, high-risk changes to vendor master data, compensation decisions, credit approvals, or high-value customer actions without controls. This doesn't mean these areas are never suitable. It's just that for an initial phase, bounded autonomy may not be appropriate.

To keep the discussion from being too subjective, companies can use a simple scoring system per use case, for example, a scale of 1 to 5 for four dimensions: value, feasibility, risk, and reusability. Value measures how significant the business impact would be if successful. Feasibility measures how ready the data, process, integration, and owner are. Risk measures the potential impact if the agent makes a mistake. Reusability measures how much of the capability can be reused.

This score is not an automatic formula. Its function is to force conversations across business, technology, and risk teams to become more concrete.

## Reusability, the Difference Between a Use Case and a Platform Asset

One of the most expensive mistakes is choosing a use case that only solves one narrow problem without building a reusable capability. In an agentic enterprise, the best use cases usually do two things at once: solve a real business pain and build a reusable capability for other domains.

Some capabilities that frequently appear across functions include document understanding, exception triage, approval routing, evidence pack generation, and policy checking. Document understanding is useful for invoices, contracts, onboarding forms, claim documents, audit evidence, and customer correspondence. Exception triage is useful in AP, collections, customer complaints, IT incidents, shipment exceptions, and HR case management. Approval routing is useful for procurement, HR requests, finance approvals, IT changes, and cross-functional exception handling. Evidence pack generation is highly relevant for finance close, audit support, compliance reviews, vendor due diligence, and regulated operations. Policy checking can be used in procurement policy, HR policy, finance controls, customer entitlements, and IT change governance.

If a company chooses a use case that builds capabilities like these, the cost per agent will decrease as the portfolio grows. Conversely, if every use case is built as a unique solution, the organization will quickly fall into agent sprawl.

For example, a company starts with a vendor onboarding document check. If built correctly, the resulting capability is not just a "vendor onboarding agent," but document extraction, completeness checking, policy validation, approval routing, and evidence logging. The same capability can then be used for customer onboarding, employee onboarding, contract intake, or compliance review. This is why reusability must be an explicit dimension in value pool selection, not a bonus expected to appear later.

Despite its importance, reusability also has its traps. If a company pursues a platform that "can do everything" too early, it can lose business momentum. The first use case becomes too abstract, too generic, and never truly solves a real problem. A healthier principle is to start with a concrete business pain, but design the capability so it is not entirely single-use.

## Balancing the Portfolio

After assessing value, feasibility, and reusability, the company needs to look at the portfolio as a whole. This is important because an agentic transformation will not succeed if all investments are directed at one type of use case.

A healthy portfolio typically balances four categories. Quick wins are use cases with high feasibility, relatively low risk, and value that can be seen fairly quickly. Examples include AP exception triage, IT incident enrichment, vendor onboarding document checks, and customer case summarization plus routing. Their role is to build trust, prove the operating model, and train the organization.

Strategic bets are use cases with high value and transformational impact, but are more complex or involve heavier change. Examples include finance close orchestration, a supply chain exception control tower, end-to-end customer issue resolution, and GCC/shared services redesign based on agentic services. Their role is to unlock truly material value pools. However, if the portfolio only contains strategic bets, the organization will quickly tire.

Platform investments are not single business use cases, but capabilities that enable many use cases to run more cheaply and safely. Examples include a tool registry, policy engine, observability, identity for agents, a reusable document understanding service, and an enterprise memory and context layer. Without these investments, quick wins will be difficult to scale.

Risk-control initiatives do not directly generate large business value, but they are essential to enable scale. Examples include approval workflows, audit logging, model evaluation, access control, data permissioning, and incident response for agent behavior. This category is often overlooked because it doesn't "sell" well on business slides. Yet without it, strategic bets will not make it to production.

There are two extreme patterns that often appear. Too many quick wins makes the organization look active, but the transformation is shallow. Many small use cases live in isolation, do not build reusable capabilities, and do not change the economics of core processes. Too many strategic bets exhausts the organization. Heavy integration, large process changes, immature governance, and business sponsors losing patience before value is realized.

A healthy portfolio typically requires a combination of several quick wins for momentum, one or two strategic bets for transformation direction, deliberate platform investments, and risk-control initiatives built from the start.

## Portfolio Board for Executive Review

To ensure decisions are not scattered across functions, companies should have a portfolio board to review candidate value pools periodically. Not a committee that only discusses technology, but a forum across business, technology, risk, and operations.

A practical review template could include columns: candidate value pool, business pain, type of value, baseline available, feasibility, risk posture, reusability, business sponsor, and decision. A forum like this forces the organization to answer the right questions: is this important enough, is it ready enough, is it safe enough, and does it build a reusable asset?

## Practical Checklist

Use the following checklist when selecting an agentic AI value pool.

Start from business pain. Ensure the use case originates from a real business bottleneck, not from a model demo. There is a process owner who acknowledges the problem as a priority. The chosen workflow is material enough for operations or the P&L.

Define the type of value clearly. The primary value is classified: cost, working capital, revenue, risk, or cycle time. Strategic value is also stated explicitly: CX, speed-to-market, regulatory confidence, or differentiation. An operational baseline exists before the pilot begins.

Test feasibility honestly. The required data and knowledge are sufficiently available and trustworthy. APIs or integration paths to core systems are ready enough. The process is stable enough to be agent-enabled. The domain owner is ready to change the workflow, not just add AI. The risk owner agrees that bounded autonomy or human-in-the-loop can be designed safely.

Value reusability, not just local results. The use case builds reusable capabilities like document understanding, triage, routing, evidence, or policy checking. The initial design is not entirely single-use. There is a clear view of how this capability could be used in other domains.

Balance the portfolio. The portfolio has quick wins for momentum. There is a strategic bet large enough to change the economics of core processes. There are deliberate platform investments. There are risk-control initiatives running in parallel.

Use simple scoring for prioritization. Each candidate is scored on value, feasibility, risk, and reusability. Scores are discussed across business, technology, and risk teams. Decisions are made in the portfolio forum, not by individual teams separately.

Watch for red flags. Defer or deprioritize if the use case only saves a small amount of time on a non-critical activity, a baseline is unavailable, the process is very ambiguous and lacks a strong owner, integration with core systems is fragile, risk is high but guardrails are unclear, or the capability being built has no reuse potential.

If it must be summarized into one principle, it is this: choose a value pool large enough to justify the integration and governance, ready enough to execute, and reusable enough to become a portfolio foundation—not just a pilot that looks smart. That is the starting point for agentic AI to stop being an experiment and truly become an execution layer for the enterprise.
