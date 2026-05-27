---
title: "Referenzarchitektur für e Enterprise Agent Platform"
sidebar_position: 17
description: "Stell der vor, dis Finance-Team het en Agent baut, wo bim monatliche Abschluss hilft. D Resultat sind vielversprechend: weniger Zyt für Abgliche, schnelleri..."
image: "/img/social/17-enterprise-agent-platform-reference-architecture.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Referenzarchitektur für e Enterprise Agent Platform

<ArticleDiagram src="/img/diagrams/17-enterprise-agent-platform-reference-architecture.png" alt="Diagramm: Referenzarchitektur für e Enterprise Agent Platform" />

Stell der vor, dis Finance-Team het en Agent baut, wo bim monatliche Abschluss hilft. D Resultat sind vielversprechend: weniger Zyt für Abgliche, schnelleri Erkennig vo Usnahme, und s Team cha sich uf Analysä konzentriere statt uf Dateierfassig. Wege dem Erfolg fangt s Procurement-Team a, en Agent für Intake-to-PO z baue. S Customer Service Team wott en Agent für Complaint Resolution. S IT Operations Team plant en Agent für Incident Triage.

Jedes Team fangt mit em gliche Elan a. Aber jedes bout uf sini eigeni Art. S Finance-Team macht es einfachs Logging i de Excel-Tabelle. S Procurement-Team wählt es anders Gateway-Modell. S Customer Service Team speicheret Kontext i lokale Dateie. S IT Operations Team bout en eigene Approval-Mechanismus.

Lokal gseh sind alli dene Entscheidige sinnvoll. Aber us Enterprise-Perspektive zeigt sich s Problem: Tool-Integration wird mehrmals gmacht, Access Control isch inkonsistent, Logs und Audits sind nöd vergliichbar, und d Evaluierig vo Agents wird schwierig. Was am Afang wie Fortschritt usgseht, wird langsam zur Fragmentierig.

Da isch de Punkt, wo d Firma afoot froge: Baue mir mehreri Agent-Applications, oder baue mir e Enterprise Platform, wo Agents sicher und skaliert betriebe werde chönd?

## Wieso s Muster "Jedes Team bout selber" zum Problem wird

Vili Organisatione fanged mit em richtige Aasatz a: en wertvolle Use Case uswähle, en schnelle Pilot baue, de Nutze bewise. S Problem chunt, wenn de erschti Erfolg ohni Platform-Disziplin repliziert wird. Jedes Team bout sin Agent mit eigene Stack, Logging und Kontrolle. D Folge isch Agent Sprawl: vil Agents laufe, aber es git kei gmeinsami Grundlag, wo alles konsistent verwaltbar macht.

Zum verstah, wiso das zum Problem wird, müemer zwei Sache unterscheide, wo oft verwächslet werde.

**Agent Application** isch d Lösig für en bestimmte Use Case. Zum Bispiel en Agent für AP Exception Handling, en Agent für Procurement Intake-to-PO, oder en Agent für Customer Complaint Resolution. Jede het sini eigene Workflow, Prompt, Tool, Kontext und UI, wo spezifisch für das Domain sind. Da isch d Schicht, wo de Business-Benutzer direkt gseht.

**Enterprise Agent Platform** isch die gmeinsami Schicht, wo vili Agent Applications bruuche. Die Platform löst kei spezifische Business-Prozess direkt. Si stellt standardisierti Capabilities bereit, wie Identity und Access Control, Model Gateway, Tool Registry, Context Retrieval, Observability, Evaluation Harness, Deployment und Rollback, Policy Enforcement, sowie Registry und Lifecycle Governance.

Ohni die Unterscheidig gönd Firmen oft i d Falle. Einigi denked, si bauet e Platform, aber in Wirklichkeit macheds nume de erst Agent mit vilne eigene Komponente, wo schwer widerverwendbar sind. Anderi baued z lang an ere generische Platform ohni echte Use Case, und s Projekt wird zu ere Infrastruktur, wo nie brucht wird.

E gmeinsami Platform wird wichtig wäge drei Problem, wo bi Skalierig uftauche. Erstens: Reusability – Capabilities wie Model Routing, Permission-aware Retrieval, Audit Logging und Approval Orchestration müend nöd für jede Agent neu baut werde. Zweitens: Control Consistency – wenn alli Agents di gliche Policy Enforcement, Observability und Identity Patterns durelaufed, wird Governance viel stärker. Drittens: Operating Leverage – s Platform-Team cha Cost, Latency, Incidents und Lifecycle zentral verwalte, während d Domain Teams sich uf Business-Logik konzentriere.

Natürlich muen nöd alli Organisatione sofort e volli Platform baue. Wenn d Firma nume ein oder zwei Pilot het, wo no nöd a d Kernsysteme aabindet, langt en lichte Aasatz. Aber sobald Agents aafanged, Enterprise-APIs azruefe, sensitivi Date zuezgriffe, Aktion uszfüehre, oder über Funktione hinweg brucht werde, wird es Platform-Muster zum ene Mues, nöd zum Luxus.

## Runtime: Wo de Agent würkli lauft

Di erst Schicht i de Referenzarchitektur isch de Ort, wo de Agent Trigger empfangt, denkt, Kontext holt, Tool ufruft und Aktion generiert. Da isch d Logik vo de Usfüehrig.

De **Orchestrator** isch d Komponente, wo de Workflow vom Agent managed. Er empfangt Trigger vo User, Event oder Workflow, teilt d Ufgab i Schritt, entscheidet, wänn s Modell ufgruefe wird, wänn es Tool brucht wird, wänn en Mensch um Approval gfragt wird, und wänn de Prozess stoppt oder eskalieret wird. Bi eifache Use Cases cha de Orchestrator lücht si. Aber für Enterprise-Workflow, wie Finance Close oder Supply Chain Exception Management, wird de Orchestrator wichtig, wil d Prozess multi-step sind, voll mit Handoffs, und oft mehreri System iibindet. Be Finance Close cha de Orchestrator d Schritt für d Dateiabgliche, Klassifizierig vo Usnahme, Drafting vom Commentary und s Routing zum Controller ordne. Be IT Operations cha de Orchestrator Event Monitoring, Diagnostik, Runbook und Engineer Approval verbinde.

De **Model Gateway** isch e Komponente, wo oft unterschätzt wird, aber sehr wichtig isch. Sini Funktion isch nöd nume, zum Modell z verbinde, sondern s richtige Modell für d Ufgab uszwähle, Fallback z mache, falls s Hauptmodell versagt, standardisierti Logging azwende, Cost und Latency z kontrolliere, und d Konsistenz vo de Modell-Nutzigspolicy z erhalte. Ohni Model Gateway rüeft jede Agent s Modell direkt mit andere Muster a. D Folge isch, dass d Firma d Kontrolle über Cost, Qualität und Auditability verlürt. De Model Gateway isch au wichtig für e Multi-Model-Strategie. Eifachi Klassifizierigs-Ufgabe chönd mit em lichtere Modell mache, während komplexi Reasoning oder Synthese über Dokumente hinweg es stärkers Modell bruucht.

**Tool** i de Enterprise Agent Platform dörfed nöd wie e freii API-Liste behandlet werde. Es brucht zwei unterschidlichi Schichte. D **Tool Registry** isch de Katalog vo allne verfügbare Tool, mit Metadate, Owner, Berechtigige, Risk Tier und Nutzigsvertrag. De **Tool Execution Service** isch d Runtime-Schicht, wo de Tool Call würkli usfüert, aber erst nach Validierig. Jedi Aktion vom Agent muen e Parameter-Validierig, Permission Check, Policy Evaluation, Audit Logging und, wänn nötig, en Approval Workflow durelaufe. Da verhinderet, dass de Agent direkt uf ERP, CRM, HRIS oder ITSM zuegrift ohni adäquati Kontrolle. En Procurement Agent darf es Tool ufruefe, zum en Purchase Request z erstelle, aber de Tool Execution Service cha d Usfüehrig verweigerä, wänn de Vendor no nöd approved isch. En Customer Operations Agent darf en Refund vorbereite, aber d Usfüehrig wird blockiert, wänn de Wert über d Threshold-Policy goht.

Enterprise Agents schaffed selten i ere einzige Interaktion. Si müend de Status vom Workflow, d Resultat vo vorherige Schritt, Zwischeentscheidige und manchmal au Memory für folgendi Interaktione speichere. Drum muen d Architektur zwüschem **State Store** für de deterministischi Workflow-Status und em **Memory Service** für zusätzliche Kontext unterscheide, wo de Agent über Sitzige oder Schritt hinweg bruuche cha. Vili Implementierige werfed das als Memory i eine Topf, aber d Governance-Aaforderige sind unterschidlich. State Workflow sött strenger, strukturierter und eifacher z auditier si. Memory cha flexibler si, muen aber immer no Permission- und Retention-Policy folge.

De **Policy Enforcement Point** isch de Punkt i de Runtime, wo d Policy-Entscheidig aagwändet wird. Er muen i de Nöchi vom Tool Call, Data Access und Action Execution si. Ohni en explizite Enforcement Point wird d Policy nume es Dokument oder Logik, wo über vili Komponente verteilt isch. Für Enterprise isch das z fragil.

## Context und Knowledge: D Qualität vom Agent wird da entschiede

Vili Agent-Fehlschläg sind nöd, wil s Modell schlecht isch, sondern wil de Kontext falsch, unvollständig, veraltet oder usserhalb vo de Permission Boundary isch. D Context Layer isch kei Beiwerk. Si isch di wichtigsti Abhängigkeit für d Qualität vom Agent.

D Platform brucht en **Ingestion Pipeline**, wo Dokument, Knowledge Articles, Policy, SOP, Transcripts und Referenzdate i d Context Layer bringt, und das managed. Die Pipeline macht Extraktion, Chunking oder Segmentierig, Aarichere vo Metadate, Klassifizierig vo Sensitivität, Versionierig und Synchronisation vo Updates. Ohni disziplinierti Ingestion holt de Retrieval Dokument, wo nöd relevant oder veraltet sind.

Drei Speicherkomponente händ unterschidlichi Rolle. De **Vector Store** hilft bi de semantische Suechi über unstrukturierti Inhalt. De **Metadata Catalog** git Struktur: Quelle vom Dokument, Owner, Gültigkeitsdatum, Klassifizierig, Domain und Zugriffsrächt. De **Knowledge Graph** isch nützlich, wenn d Firma d Beziehige zwüschem Entitäte verstah muen: Vendor, Verträg, Produkt, Kunde, Kontene, Vorfäll, Standort oder Policy. Nöd alli Use Cases bruched vo Afang a en Knowledge Graph. Für en eifache Knowledge Assistant langet Vector Retrieval plus Metadata. Aber für Enterprise Use Cases mit komplexe Beziehige – wie Supply Chain Disruption, Customer Entitlement oder Finance Exception über Entitäte hinweg – cha en Graph d Qualität vom Reasoning und vo de Kontext-Navigation verbessere.

**Permission-aware Retrieval** isch eini vo de wichtigschte Capabilities. De Agent dörf Kontext nöd nume näh, wil es Dokument semantisch ähnlich isch. De Retrieval muen d Berechtigige kenne: weli User oder Principal het aagfragt, weli Agent, weles Domain wird verarbeitet, und uf weli Date darf i dem Kontext zuegriffe werde. En HR Agent dörf kei Kompensations-Dokument zieh, wo nöd zum Fall ghöred. En Customer Service Agent dörf kei Historie vo andere Kunde hole. En Finance Agent dörf kei Guidance über Entitäte hinweg mische ohni entsprechendi Zugriffsrächt.

En guete Enterprise Agent muen fast immer zwei Arte vo Kontext verbinde: **structured data** us ERP, CRM, HRIS, Data Warehouse oder Event Stream, und **unstructured data** us Dokument, Email, SOP, Verträg, Knowledge Base oder Transcript. D Platform sött en **Context Service** ha, wo beides sicher zämmebringt. Be AP Exception Handling brucht de Agent Invoice, PO und Goods Receipt us em strukturierte System, plus Policy und Fallhistorie us Dokumente. Be Customer Operations brucht de Agent Entitlement und Order Historie us CRM/OMS, plus Knowledge Article und Interaktions-Transcript. Wenn de Context Service schwach isch, tönt de Agent gschiid, aber handelt uf ere brüchige Grundlag.

## Governance und Operations: Damit Agents i Production betriebe werde chönd

E Enterprise Platform isch nöd fertig mit Runtime und Context. Si brucht au e Governance- und Operations-Schicht, wo Agents auditierbar, testbar und über ihre ganze Lifecycle verwaltbar macht.

D **Agent Registry** isch de offiziell Katalog vo allne Agents, wo i de Firma laufed. Mindeschtens sötts de Name und Zweck vom Agent, de Business- und Technical Owner, s Risk Tier, d Tools und Data Sources, de Grad vo de Autonomie, de Lifecycle-Status und di wichtigste Abhängigkeite enthalte. D **Policy Registry** speicheret d Regle, wo über Agents hinweg gelted: Transaktions-Thresholds, Approval-Regle, Tool-Beschränkige, Risiko-Klassifizierige und Domain-spezifischi Policy. Ohni Registry het d Firma kei Inventar, wo für Governance taugt.

Nöd alli Agents bruched di gliche Kontrolle. D Platform muen **Risk Tiering** unterstütze. En interne Knowledge Agent im Assist-Modus isch öppis anders als en Agent, wo Aktion im ERP usfüehre cha. En Agent, wo Commentary draftet, isch anders als en Agent, wo en Refund oder e Produktions-Remediation uslöse cha. Das Risk Tiering muen mit em Approval Workflow, de Observability-Tiefi, em Testing-Rigor und de Release-Kontrolle verbunde si.

Alli wichtige Spure – Tool Call, Policy Decision, Approval, Context Retrieval, Outcome – müend i en **Audit Storage** cho, wo sicher und nachvollziehbar isch. Dezue brucht d Platform en **Evaluation Harness**: e Umgebig und Tool, zum Agents vor und nach em Release z teste. Das beinhaltet Golden Dataset, Scenario Test, Policy Compliance Test, Regression Test, wenn Modell, Prompt oder Tool sich ändered, und Sampling-Evaluierig nach de Production. Ohni Evaluation Harness weiss d Firma nume, dass de Agent lauft, aber nöd, ob d Qualität besser oder schlechter wird.

Us Operations-Sicht brucht d Platform **Dashboard** für Runtime Health, Dashboard für Qualität und Outcome, **Alert** für technischi Incidents, Policy Breach und Cost Spike, Mechanisme für schnells Rollback oder Disable, sowie **Cost Management** für Modell, Retrieval und Tool Usage. Agentic Systems chönd nöd nume technisch versage. Si chönd au z tür, z langsam, z vil Eskalatione ha, oder still d Qualität vo Entscheidige verschlechtere.

## En sinnvollen Build-Order

De klassisch Fehler bi de Platform-Strategie isch, dass me probiert, di volli Architektur vom erste Tag a z baue. Das endet fast immer langsam, tür und wit weg vom Business-Bedarf. En gsünder Aasatz isch, e **Minimum Viable Platform** z baue, wo us em erste Production-Grade Use Case entstoht.

En praktische Ablauf, wo meistens am meiste Sinn macht, fangt mit em **Model Gateway** a. Da defür, dass alli erschte Agents en standardisierte Weg für Modell-Zuegriff, Logging, Fallback und Cost Control händ. Denn chunt d **Tool Registry** und de **Tool Execution**. Sobald Agents aafanged, Enterprise-Systeme azapfe, wird die Capability zum Mues. Ohni das wird d Integration wild und schwierig z auditier. Denn chunt **Logging, Tracing und Observability** grundsätzlich. Bevor me skaliert, muen d Firma chönne gseh, was de Agent macht, und was er kostet und wie lang er bruucht. **Permission Enforcement und Policy Check** chömed, wenn de Agent aafoot, sensitivi Date z läse oder Aktion uszfüehre. En **Evaluation Harness** wird nötig, sobald Änderige am Modell, Prompt oder Tool hüfiger werded. **Memory Service** und **Agent Registry** chömed spöter, usser de Use Case bruchts vo Afang a.

S Prinzip isch: Capabilities müend us em echte Use Case entstoh. Wenn d Firma en Knowledge Graph bout ohni en Use Case, wo würkli komplexi Beziehige brucht, isch s Risiko gross, dass es en türe Aktivposte wird, wo selte brucht wird. Wenn me en sophisticated Memory Service bout, obwohl d Agents no task-based und stateless sind, isch das au verfrüeht. E gsundi Platform wachst us em echte Bedarf, aber mit eme konsistente Architektur-Muster.

Stell der vor, d Firma fangt mit zwei Use Cases a: AP Exception Handling im Shared Services und Incident Triage im IT Operations. Us dene zwei Use Cases finded si villicht use, dass di dringendste gmeinsame Bedürfnis Model Gateway, Tool Registry, Observability, Permission-aware Retrieval und Approval Workflow sind. En vollständige Knowledge Graph oder Memory über Agents hinweg isch villicht no nöd dringend. So wachst d Platform basierend uf Economics und reale Risike, nöd basierend uf ere Feature-Liste.

E gueti Referenzarchitektur isch nöd die, wo uf Papier am vollständigste isch, sondern die, wo d Firma eifachi Froge mit Vertraue cha beantworte: Wenn morn zäh nüüi Agents im Finance, Procurement, Customer Operations und IT dezue chömed, hämmer denn e gmeinsami Grundlag, zum si sicher, skaliert und ohni Agent Sprawl z betriebe?

Wenn d Antwort na nöd "Ja" isch, denn isch di nöchsti Priorität nöd, no meh Agents z baue, sondern d Platform z stärke.
