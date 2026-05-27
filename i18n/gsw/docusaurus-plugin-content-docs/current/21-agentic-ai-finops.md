---
title: "Agentic AI FinOps: Cost, Latency und Capacity managen"
sidebar_position: 21
description: "En Manager vo Shared Services gseet, wie en Agent-Pilot für AP Exception Handling runderlofft. D’Cost pro Transaktion im Dashboard sind chli, d’Latency isch no..."
image: "/img/social/21-agentic-ai-finops.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Agentic AI FinOps: Cost, Latency und Capacity managen

<ArticleDiagram src="/img/diagrams/21-agentic-ai-finops.png" alt="Diagramm: Agentic AI FinOps: Cost, Latency und Capacity managen" />

En Manager vo Shared Services gseet, wie en Agent-Pilot für AP Exception Handling runderlofft. D’Cost pro Transaktion im Dashboard sind chli, d’Latency isch no okay, und s’Team isch froh, wills weniger z’tue händ. Sächs Mönet spöter, wenn s’Volume uf s’Zähfache aagstige isch, wird d’Cloud-Rächnig mächtig grösser, d’Aawänder fanged a sich über d’Trägheit z’beschwere, und s’IT-Team chunt mit de Kapazität nüme noche. Was isch passiert?

En Pilot, wo billig usgseet, versteckt oft die würkliche Chöste. En Agentic Workflow isch nöd eifach en einzelne Model-Uffruef. Er cha mehreri Reasoning-Schritt umfasse, Retrieval i d’Knowledge-Layer, Tool-Uffruef i’s Enterprise-System, Retries, Evaluierige, Logging, und ab und zue d’Koordination vo mehrere Agents gliichzitig. Wenn das Muster uf Enterprise-Skala bracht wird, ändered sich d’Economics komplett.

Da isch de Punkt, wo d’Firma afah sött über **Agentic AI FinOps** nochezdenke. Nöd nume Token spare, sondern drei Sache gliichzitig manage: Was chostet’s würkli, en erfolgriichi Uusgab z’produziere? Wie schnell git de Agent es Resultat, wo no bruuchbar isch? Und chönd d’Platform, s’Model, d’API und s’Operations-Team s’Volume und d’Laste-Spitzene verchrafte?

## Wiso Pilote d’Wirtschaft oft täusched

De hüfigscht Fähler isch, d’Cost vomne Agent nume vom Model-Priis pro Token oder pro Request uszrächne. In eme Enterprise-Workflow chan e Uusgab us vile Komponente bestah. Nämme mer AP Exception Handling: De Agent überchunt en Fall, holt de Kontext us em ERP und de Knowledge Base, rüeft es Model für d’Klassifizierig a, rüeft es Tool für de Check vo Invoice und Goods Receipt, macht villicht en Retry, wenn Date nöd vollständig sind, und bereitet deno e Empfählig oder Eskalation vor. Uf den erste Blick gseet jede Schritt billig uus. Aber die würkliche Chöste chömed vo de Akkumulation.

S’Gliiche passiert i de Customer Operations. En Agent für Refunds liest villicht d’Kundehistorie, prüeft d’Entitlements, holt d’Policy, stellt e Empfählig zäme, beaatreit en Approval für gwüssi Fäll, und trägt s’Resultat i’s CRM ii. Wenn s’tägliche Fall-Volume hoch isch, wärded die chline Chöste pro Schritt material. No schlimmer, wenn de Agent hüfig i Loops und Retries goot, oder es Model bruucht, wo für eifachi Ufgabe vil z’gross isch.

En Pilot lauft normalerwiis mit tüüfem Volume, relativ saubere Date, usgsuechte Szenarie, und vil menschlicher Ufsicht. I so eme Umfeld gseet d’Cost kontrolliert uus. Aber wenn’s i d’Production goot, stigt d’Variation vo de Fäll, es git meh Exception, d’Aawänder probiered meh Interaktionsmuster, und d’Quellsystem antworted nöd immer perfekt. Drum stigt d’Zahl vo de Schritt pro Transaktion. D’Chöste, wo vorher chli usgseh händ, wärded signifikant.

Drum isch de besser Metrik nöd Cost pro Prompt oder Cost pro Token, sondern **Cost pro successful outcome**. Was mers müend usrächne, isch nöd nume d’Inference-Cost, sondern was es chostet, en würkliche Wert z’schaffe. Zum Bischpil d’Cost pro Exception, wo korrekt klassifiziert und routet worden isch, d’Cost pro Low-Risk-Refund, wo ohni Rework erledigt isch, oder d’Cost pro Incident, wo korrekt triagiert worden isch. Wenn de Agent billig isch, aber d’Correction-Rate hoch, d’Escalation-Rate übermässig, oder vill Fäll müend widerholt wärde, denn sind d’Economics eigentli schlecht.

## Sächs Cost-Treiber, wo mä hüfig übersiet

Für d’Economics guet z’manage, müend d’Firma verstah, wo d’Chöste würkli här chömed. I agentische System gits sächs Haupttreiber.

**Erstens, d’Uswahl vom Model.** Stärkeri Models sind normalerwiis tüürer und hüfig langsamer. S’Problem isch, dass vili Team s’beschte Model für alli Schritt bruuched, au für eifachi Ufgabe wie Intent-Klassifizierig, Fäld-Extraktion, eifachs Routing, oder Format-Validierig. Für en Procurement Intake zum Bischpil chönt d’ersti Klassifizierig vo de Sparte mit eme chlinere Model erledigt wärde. Es stärkers Model bruuchts erscht, wenn de Fall ambivalent isch, nöd-standard Verträg betrifft, oder es um Entscheidige mit höcherem Risiko goot.

**Zweitens, d’Längi vom Kontext.** Context Length isch en Cost-Killer, wo mä hüfig nöd gseet. Je meh Dokument, Transkript, Historie und Metadate i’s Prompt gschobe wärded, desto tüürer und langsamer wird d’Inference. Das Problem chunt hüfig uuf, wenn d’Organisation no nöd diszipliniert isch, en präzises Retrieval uufzbaue. Drum wird em Agent z’viel Kontext gäh, nume für de Fall. D’Cost stigt, d’Latency wird schlimmer, und d’Qualität isch nöd unbedingt besser, wil s’Model im Noise versinkt.

**Drittens, d’Zahl vo de Reasoning-Schritt.** En multi-step Agentic Workflow isch nützlich für komplizierti Ufgabe. Aber jede zusätzlichi Reasoning-Schritt bedütet meh Chöste. Wenn das nöd kontrolliert wird, cha de Agent z’viel denke für eifachi Problem. I de IT Operations bruucht en Agent für eifachi Incident Enrichment kei langi Reasoning. Wenn alli Incident wie komplizierti Untersuchige behandlet wärded, stiged d’Cost und d’Latency ohni entsprechende Mehrwert.

**Viertens, Retrieval- und Tool-Uffruef.** Jede Retrieval i’ne Vector Store, Knowledge Graph oder Data Product het sini eigene Compute-Coste und Latenz. Jede Tool-Uffruef i’s ERP, CRM, HRIS oder ITSM het au Chöste, direkt und indirekt: API-Verbruuch, Middleware-Last, Event-Verarbeitig, und ab und zue Lizenz- oder Platform-Chöste. Im Enterprise sind Tool-Uffruef hüfig operativ tüürer, als mä uf de AI-Ebeni gseet.

**Fünftens, d’Frequänz vo Evaluierig und Observability.** Logging, Tracing, Audit-Storage und Post-Production-Evaluierige händ au Chöste: Storage für Transkript und Trace, Telemetry-Verarbeitig, Dashboard und Alerting, Sampling-Review, und regelmässigi Regression-Tests. Je meh Governance, desto grösser d’Cost vo de Kontrolle. Das isch kei Grund, d’Observability z’reduziere, sondern en Grund, si vo Aafang a i’s Cost-Model iizrechne.

**Sächstens, Multi-Agent-Orchestrierig.** En Multi-Agent-Architektur cha d’Modularität verbessere, aber au d’Economics verschlechtere. Wenn e Request dur en Orchestrator und deno zwei oder drei Task-Agents muess, stigt d’Cost pro Uusgab schnell. Das Muster lohnt sich nume, wenns würkli besseri Qualität oder Kontrolle bringt. Für eifachi Use Cases isch Multi-Agent hüfig en architektonische Luxus, wo nöd wirtschaftlich isch.

## Fümf Hebel für Optimierig ohni d’Uusgab z’verschlechtere

Gsunds FinOps heisst nöd immer, die billigsti Option z’näh. S’Ziel isch, d’Kombination vo Cost, Qualität und Risiko z’finde, wo für en bestimmte Use Case am meiste Sinn macht.

**Model Routing** isch de wichtigscht Hebel. Bruuch chlini Models für eifachi Ufgabe und stärkeri Models nume für komplizierts Reasoning, ambivalenti Fäll, High-Risk-Entscheidige, oder Synthese us mehrere Quelle. Im Finance Close zum Bischpil es liechts Model für d’Extraktion vo Variance Drivers us strukturierte Date, es stärkers Model für de Draft vomne Commentary, wo Zahle, Policy und Business-Narrativ kombiniert. De Trade-Off isch klar: Routing macht d’Architektur und d’Evaluierig komplexer. Aber ohni Routing wärded d’Chöste schnell unkontrollierbar.

**Reduzier Context Bloat.** Vili Chöste vo agentischer AI sind eigentli Chöste für übermässige Kontext. Die drei praktischste Technike: präzisers Retrieval, Summarization vor em Haupt-Reasoning, und Caching vo hüfig bruuchte Kontext. I de Customer Operations muess de Agent nöd immer die ganzi Kundehistorie i’s Prompt nä. Es langt e relevanti Zämmefassig für de aktiv Fall, plus en On-Demand-Zuegriff, wenn meh Detail nötig sind. Aber Summarization und Caching händ au Risike. D’Zämmefassig cha wichtigi Nüanze verlüüre, und de Cache cha veraltet si. Die Technike sind besser für Domain mit relativ stabile Informationsmuster und tüefem bis mittlerem Risiko.

**Begrenz Retries und Loops.** En Agent, wo immer wider probiert, bis es klappt, isch es Rezäpt für explodierendi Chöste. Jede Workflow brucht expliziti Stopping Criteria, es Retry-Limit, es Limit für d’Zahl vo Tool-Uffruef, und Bedingige für d’Eskalation zum Mensch. I de Shared Services, wenn d’Invoice-Date nach eme oder zwei Validierigs-Versuech immer no nöd vollständig sind, sött de Agent ufhöre und en manuelle Fall ufmache, nöd immer wider s’Model und s’Tool aarüefe.

**Unterscheid zwüsche Draft-, Recommend- und Execute-Modus.** Nöd alli Use Cases bruuched tüüfs Reasoning bi jedem Schritt. Für vili Prozess langts, wenn de Agent en Draft vorbereitet, e Empfählig git, oder e Vorverarbeitig macht, bevor de Mensch d’Entscheidig trifft. Das isch hüfig wirtschaftlicher, als de Agent z’zwinge, de ganz Workflow autonom z’erledige. Vor allem i de früehe Phase vom Scale-Up git de Draft-Modus hüfig gsündere Economics und erhaltet gliichzitig s’Vertraue.

**Optimier Observability, mach si nöd uus.** Volles Logging für alli Interaktion cha tüür si. Aber d’Observability uszschalte, nume zum Chöste spare, isch en schlechte Entscheid. En gsünderi Aasatz: volles Logging für High-Risk-Workflows, Sampling oder Zämmefassige für Low-Risk-Workflows, unterschidlichi Retention-Policy je nach Risk-Tier, und d’Trennig vo obligatorische Audit-Logs und temporäre Debug-Logs. So het d’Firma immer no d’Accountability, ohni dass d’Telemetry-Chöste wild wachsed.

## Latency: Akkurat isch nöd gnueg

Vili Team sind z’fokusiert uf d’Qualität vo de Antwort und vergässed, dass en Agent, wo z’langsam isch, nöd bruucht wird. Im Enterprise het d’Latency en Iifluss uf d’Adoption vo de Aawänder, d’SLA vo Prozess, d’Produktivität vom Team, und d’Wahrnähmig vom Vertraue i de Agent. En Customer-Service-Agent, wo sehr akkurat aber langsam isch, wird d’menschliche Agenten wieder i’s alte Verhalte tribe. En Procurement-Agent, wo z’lang bruucht für e Intake-Empfählig, wird als Hindernis aagluegt.

De wichtigscht Design-Entscheid isch d’Unterscheidig vo synchrone und asynchrone Workflows. De synchrone Modus isch guet für Interaktione, wo e schnelli Antwort vor em Aawänder bruuched, wie interni Q&A, eifachi Klassifizierig, churzi Drafts, oder eifachi Empfählige. Für dä Modus muess de Workflow liecht si: begränzte Kontext, minimum Tool-Uffruef, und en klare Fallback, wenn de Prozess z’lang isch.

De asynchrone Modus isch guet für schwäreri Arbeite, wie d’Analyse vo komplexe Exception, d’Erstellig vo Bericht, d’Untersuechig vo Incident, d’Rekonziliation us mehrere Quelle, oder Batch-Processing i de Shared Services. Für dä Modus muess de Aawänder nöd am Bildschirm warte. Wichtiger sind en klare Status, e Notifikation, wenns fertig isch, und es Resultat, wo mä cha aluege.

Vili Latency-Problem chömed daher, dass d’Organisation en asynchrone Workflow in en synchrone zwängt, nume für es Chat-like Erlebnis. Wenn de Workflow würkli Zit bruucht, muess d’UX ehrlich und hilfreich si. S’System sött de Status zeige, weli Schritt grad laufed, wenn möglich Zwüscherresultat, und en Fallback, wenn de Prozess fäldschlaat oder z’lang isch. Im Finance Close sött en Agent, wo grad Evidence sammlet und en Commentary vorbereitet, Status wie "hol Daten zu Variance", "prüef zueghörigi Policy", und deno "bereite Draft vor" zeige. Das isch viel besser als en stille Bildschirm, wo de Aawänder glaubt, s’System seg hange blibe.

## Capacity: Wart nöd, bis de Engpass da isch

Näbed de Cost und de Latency muess FinOps für agentischi AI au d’Capacity im Blick ha. D’Frag isch nöd nume, was e Transaktion chostet, sondern au, ob de Model Gateway d’Laste-Spitzene verchraftet, ob d’API vo de Core-Systems die zusätzliche Tool-Uffruef verchraftet, ob de Vector Store und d’Retrieval-Layer responsiv bliibed, und ob d’Approval-Queue vo de Mensche zum Engpass wird.

Am Mönet-End im Finance Close oder i de Peak-Saison vo de Customer Operations cha s’Volume zu bestimmte Zite aastige. Wenn kei Capacity-Planning gmacht wird, gseet d’Firma d’Latency starch aastige, d’Timeouts näh zue, d’Retries wärded meh, d’Chöste stiged mit, und d’Aawändererfahrig wird schlechter. Capacity-Planning für agentischi System muess die ganzi Chetti umfasse: Model Inference, Retrieval, Integration-Layer, Workflow Engine, und d’menschlichi Approval-Kapazität.

## Wer isch verantwortlich für die Wirtschaft?

Agentic AI FinOps lauft nöd, wenns nume als es technischs Dashboard aagluegt wird. Jede Agent i de Production sött en Business Owner, en Technical Owner, es Budget oder Spending Envelope, Cost Alerts, Usage Analytics, und es klares Ziel für d’Uusgab ha. Ohne en klare Owner wärded d’Chöste zu "gemeinsame Platform-Chöste", wo nie würkli verantwortet wärded.

Es Portfolio-Review vo de Agents sött nöd bim Volume ufhöre. Was mä vergliche muess, sind d’Total Cost, d’Cost pro successful outcome, d’Latency, d’Correction-Rate, d’Escalation-Rate, und de bewiseni Business-Value. En populäre Agent isch nöd automatisch wirtschaftlich. Umkehrt cha en Agent mit mittlerem Volume sehr wertvoll si, wenn d’Uusgab starch isch und d’Cost pro Resultat gsund.

Es git es paar Signale, dass en Agent no nöd bereit isch für d’Skalierig: d’Cost pro successful outcome isch z’hoch, d’Latency tribt d’Aawänder wieder zrügg zum manuelle Prozess, Retries und Loops sind z’hüfig, d’Observability zeigt übermässigi Tool-Uffruef, d’Approval-Queue wird zum Engpass, oder de Business-Value isch no nöd gross gnueg, um d’Operations- und Oversight-Chöste z’decke. I so eme Fall isch d’richtigi Antwort nöd immer "optimier s’Model". Manchmal isch d’Antwort: vereifach de Workflow, reduzier d’Autonomii, mach d’UX asynchron, oder stopp de Use Case ganz.

Am Schluss goot’s bi FinOps für agentischi AI nöd drum, d’Chöste so tüüf wie möglich z’drucke. S’Ziel isch, sicherzstelle, dass d’Firma Agenten skaliere cha, ohni d’Economics, d’Aawändererfahrig und d’operativi Kontrolle z’zerstöre. Im Enterprise isch das d’Bedingig, dass d’agentischi Transformation würkli überlebt, und nöd nume i de Pilot-Phase imponiert.
