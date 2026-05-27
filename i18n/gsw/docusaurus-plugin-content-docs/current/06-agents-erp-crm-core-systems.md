---
title: "AI Agents mit ERP, CRM, HRIS und Chärnsystem verbinde"
sidebar_position: 6
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# AI Agents mit ERP, CRM, HRIS und Chärnsystem verbinde

<ArticleDiagram src="/img/diagrams/06-agents-erp-crm-core-systems.png" alt="Diagramm: AI Agents mit ERP, CRM, HRIS und Chärnsystem verbinde" />

Stell dir vor, dini Finance-Abteilig fangt a, en Agent für de monatlech Büecher-Abschluss yzsetze. De Agent cha Rännige läse, si mit Bestellige abglyche und usefinde, wo nöd zämmepassed. Aber sobald er wüsse muess, ob d'Warenempfang scho verbuecht isch, ob de Lieferant no aktiv isch, oder ob die Rännig scho imene Dispute-Workflow isch, muess er s'System froge, wo all die Informatione drin sind. Do fingt s'Problem a.

ERP, CRM, HRIS oder anderi Chärnsystem sind nöd eifach grossi Datebanke, wo me jederzyt cha dra. Si sind de Ort, wo de offiziell Gschäftsstatus gspicheret und validiert wird. Bestellige, Rännige, Kundedate, Mitarbeiterstatus – alles isch det. En Agent cha nöd guet schaffe, ohni de aktuell Gschäftszuestand z'verstah. Aber vili Unternehmen gsehn, dass ihri System nöd für sonigi Interaktione usgleit sind.

Es isch nöd, dass d'AI-Modell z'wenig usgfützt sind oder d'Use Cases nöd spannend sind. Vili agentic AI-Programm werded langsamer, wil d'Chärnsystem schwirig z'zugänglich, langsam, inkonsistent oder nöd sicher für semi-autonomi Interaktione sind. De CIO gseht's als es Architekturproblem. De COO als es Prozessdesignproblem. De CFO und d'CHRO gsehn's als es Problem vo Kontrolle und Verantwortlichkeit.

## Worum Chärnsystem oft es Hindernis sind

Enterprise-Chärnsystem sind meischtens für Standardisierig und Transaktionskontrolle baut, nöd für dynamischi Interaktione, wie si en Agent brucht. Es git es paar typischi Hindernis.

Echtzit-Zuegriff isch nöd immer möglich. Vili System schaffed immer no mit Batch-Verarbeitig, periodischer Date-Replikation oder langsame Point-to-Point-Integratione. En Agent chönt Entscheidige träffe uf Basis vo veraltete Date. Für analytischi Use Cases isch das villicht akzeptabel. Aber für operativi Use Cases isch's gföhrlich.

APIs gits villicht scho, aber si sind nöd unbedingt bruuchbar für en agentische Workflow. D'Abdeckig isch beschränkt, d'Dokumentation schwach, d'Performance nöd stabil, oder si sind nume für traditionelli Applikatione mit starch strukturierte Interaktione usgleit. En Agent muess mehreri Endpoints nachenand aarüefe, brucht underwegs Policy-Validierige, oder muess aahalte und uf es Approval warte. Chärnsystem sind nöd unbedingt parat für sonigi Muster.

D'Zuegriffskontrolle isch oft z'grob. D'Zuegriffsrächt i Chärnsystem sind für menschlichi Rolle usgleit, nöd für digitali Arbeiter mit eme enge Scope. D'Folg isch, dass d'Unternehmen i de Falle sind: de Agent bechunnt z'viel Zuegriff, oder er cha gar nüt mache.

Es git au s'Problem vo de Gschäftssemantik, wo usserhalb vom System verteilt isch. Die eigentliche Gschäftsregle sind nöd nume im ERP oder CRM. Es Teil läbt i Excel-Tabälle vo Teams, lokale SOPs, E-Mails, Knowledge Bases oder i operative Gwohnheite, wo nöd dokumentiert sind. En Agent, wo nume a s'Chärnsystem aaghängt isch, ohni die Regle-Ebeni z'verstah, wird oft de Kontext falsch ha.

## Die sinnvollste Integrationsmuster: Read, Recommend, Act

En hüfige Fehler isch, dass me wott, dass de Agent sofort Transaktione chan mache. En gsünderi Aasatz isch schrittwiis. S'Muster Read, Recommend, Act isch nöd nume en technische Fahrplan. Es isch en Weg, um Risike z'manage, Vertraue ufzbaue und s'Operating Model z'entwickle.

### Phase 1: Read – De Agent verstaht de Gschäftszuestand, ohni ihn z'ändere

I de erschte Phase sött de Agent sich uf Read-Only-Zuegriff zu de Chärnsystem konzentriere. S'Ziel isch, de Kontext vo Transaktione z'verstah, Usnahme z'entdecke, de Status zämezfasse und Iisichte oder Prioritäte für Handlige z'gee. Die Phase bringt am schnellschte Wert, wil s'Risiko relativ tüüf isch.

D'Finance-Abteilig chönt en Agent bruche, um Ledger-Date, Rekonsiliationsstatus und Usnahme-Historie z'läse, um Entitäte oder Kontene z'markiere, wo Risiko für en verspötete Abschluss bestönd. D'Procurement-Abteilig chönt en Agent nutze, um Intake-Requests, Lieferantestatus, Verträg und Chaufhistorie z'läse und de Requester uf de richtigi Chaufweg z'leite. De Customer Operations chönt en Agent en Fallzämmefassig mache lah, bevor en menschliche Mitarbeiter de Kunde übernimmt. D'HR Operations chönt proaktivi Benachrichtigunge über stockendi Onboarding-Prozess uslöse.

De Gschäftswert vo dere Phase chunt vo de Reduktion vo de Zit für d'Datesuechi, de Priorisierig vo Usnahme und weniger manuelle Übergab. Aber Read-Only isch nöd gnueg, wenn s'Unternehmen d'Ökonomie vo Prozess wesentlich wott verändere. De Mensch muess immer no d'Entscheidig isch System überfüehre, Transaktione mache, Follow-ups schicke und de Loop schliesse.

### Phase 2: Recommend – De Agent bereitet Handlige vor, de Mensch stimmt zue

I dere Phase list de Agent nöd nume. Er fangt a, Transaktionsentwürf z'mache, Workflow-Requests z'erstelle, Handligsempfehlige z'gäh, oder de nöchscht Schritt azstosse, wo no es menschlichs Approval brucht. Das isch oft de Sweet Spot für vili Enterprise-Funktione.

I de Accounts Payable chönt de Agent en Rännigs-Mismatch entdecke, en Ursacheanalyse mache und de Entwurf für en Falllösig mache, wo de AP-Sachbearbeiter aluegt. I de Sales Operations bereitet de Agent en Next-Best-Action für de Account Manager vor oder macht en Entwurf für es Opportunity-Update. Im HRIS bereitet de Agent en Entwurf für d'Änderig vo Mitarbeiterdate vor, aber d'Freigab blibt bim HR oder Line Manager. I de IT Operations sammlet de Agent Telemetrie, schloot en Root Cause vor und bereitet en Runbook-Action vor, aber de Engineer git d'Freigab für d'Behebig.

De Mensch het immer no de Kontrollpunkt. D'Qualität vo de Empfehlige cha beurteilt werde. D'Organisation lernt, wo de Agent würkli hilft und wo er no oft falsch ligt.

Es git aber en Trade-off. Wenn s'Approval-Design schlecht isch, verschiebt s'Unternehmen nume de Engpass vom Datesueche zum Genehmige vo Agent-Entwürf. D'Approval-Prozess müend diszipliniert designet si: nume für Handlige, wo würkli nötig sind, mit gnueg Kontext und mit klare SLAs.

### Phase 3: Act – De Agent macht beschränkti Handlige i klare Grenze

Die reifschti Phase isch, wenn de Agent direkt im Chärnsystem handlet. De Schlüssel isch beschränkt. Es heisst nöd, dass de Agent frei jedi Transaktion mache cha. Realistischer isch en bounded autonomy: Handlige nume für bestimmti Szenarie, mit Policy und Thresholds, mit vollständigem Logging, mit Rollback oder Compensating Actions, und mit eme Mechanismus zum Aahalte, wenn s'Verhalte abwicht.

De Customer Service chönt em Agent d'Befugnis gäh, Ticket-Status z'update, standardisierti Kommunikation z'schicke, oder nöd-materiali Änderige a Bestellige z'mache, wenn si d'Policy erfülle. D'Collections chönt em Agent d'Befugnis gäh, automatisierti Follow-ups z'schicke oder Promise-to-Pay-Erinnerige z'mache. D'IT Operations chönt em Agent d'Befugnis gäh, nöd-risikanti Remediatione wie en Neustart vo bestimmte Service durezfüehre. D'Procurement chönt em Agent d'Befugnis gäh, für sehr standardisierti Kategorie en PO-Entwurf z'mache.

Erzwing kei Act-Phase für Domäne, wo materielli Finanzkontrolle, höchi rechtlichi oder regulatori Usiwirkige, no nöd stabil Date, oder kei klar Rollback-Mechanisme händ. D'Buechig vo materiale Journale, sensibli Änderige a Lieferantestammdate, Entscheidige über Mitarbeiterkompensation, Kreditgenehmigunge oder Änderige a wertvolle Kundenpolicy sötted lenger en Human-in-the-Loop bhalte.

## De Agent sött nöd warte, bis me ne froget

Vili früehi Agent-Implementierige sind no passiv: De Agent schaffet nume, wenn öpper e Frag stellt oder en Chnopf drückt. Das isch nützlich für en Copilot. Aber für es agentischs Operating Model isch es Muster starch, wo de Agent uf Gschäftsänderige reagiert, wenn si passiered.

En Agent schaffet viel besser, wenn er Signal bechunnt wie Order changed, Ticket escalated, Invoice overdue, Payment failed, Inventory exception, Employee onboarding delayed oder Shipment at risk. Mit sonige Events muess de Agent nöd ständig s'System abfrage oder warte, bis de Mensch s'Problem bemerkt.

Manuells Polling oder periodischi Abfrage belasted s'Chärnsystem, schaffed Latenz und füered oft dezue, dass de Agent z'langsam reagiert. En Event-driven Design erlaubt em Agent, nöcher am tatsächliche Betriebsrhythmus z'schaffe.

I de Supply Chain, wenn de Lagerbestand under en Threshold fallt oder en Transport verspötet isch, wird es Event uf en Bus gschickt. En Agent Control Tower beurteilt sofort d'Usiwirkig uf d'Kundebestellige und bereitet Mitigationsoptione vor. I de Customer Operations, wenn es Ticket uf en höchi Priorität gsetzt wird, trigeret es Event en Agent, um en Fallzämmefassig und Eskalationsempfehlig z'mache. I de Finance, wenn e Rännig überfällig isch, trigeret es Event en Collections-Agent, um mit de Aaschlusshandlige azfange.

Zwei Muster, wo oft relevant sind, sind de Event Bus, wo d'Enterprise-System operativi Events uf e gemeinsami Platform publiziered und de Agent sich für die relevante Events abonniert, sowie Change Data Capture (CDC), wo hilft, Änderige a Transaktionsdate z'erfasse, wenn s'Chärnsystem no kei gueti nativen Events het.

En Event-driven Design verbesseret au d'Observability. Jede Trigger, jedi Entscheidig und jedi Handlig cha als e Reihe vo Ereigniss verfolgt werde: Event passiert, Agent wird trigeret, zuesätzlichi Date werded ghohlet, Policy wird prüeft, Handlig wird duregfüehrt oder eskaliert. Für Betrieb, Risk und Audit isch das viel gsünder, als wenn de Agent still im Hintergrund schaffet.

Es git natürlich en Trade-off. Event-driven Architecture erhöht d'Notwendigkeit für d'Standardisierig vo Events, s'Manage vo Idempotency, d'Handhabig vo dopplete oder verspötete Events, und d'Disziplin vo de Ownership über d'Systemgrenze use. Wenn d'Integrationsbasis vom Unternehmen no sehr schwach isch, sött me mit de Domäne aafo, wo d'Events am klarste und am wertvollste sind.

## Wart nöd, bis alli System perfekt sind

En Grund, worum Unternehmen langsam sind, isch d'Aahm, dass alli Chärnsystem zerscht modernisiert werde müend, bevor me en Agent cha ysetze. Das isch nöd realistisch. De besser Aasatz isch e selektivi Modernisierig, basierend uf de Capabilities, wo für d'Prioritäts-Use Cases am nötigste sind.

Die nützlicheri Frog isch nöd "Welches System sött zerscht ersetzt werde?", sondern "Welchi Capability wird am hüfigste vo de prioritäre agentische Use Cases bruucht?" Wenn dini Priorität de Finance Close isch, sind die wichtigste Capabilities villicht de Zuegriff uf de Close- und Rekonsiliationsstatus, s'Läse vo Journal-Usnahme, s'Erstelle vo Issue-Workflows und de Zuegriff uf es Evidence-Repository. Wenn dini Priorität d'Customer Operations sind, sind d'wichtige Capabilities villicht s'Läse vo de Kundehistorie, s'Läse und Update vo Cases, de Check vom Bestelligsstatus und s'Schicke vo standardisierte Kommunikatione.

Für Legacy-System, wo schwirig z'berüehre sind, isch s'effektivschti Muster, en API-Facade oder en Service-Layer davorzbaue. S'Ziel isch, d'Komplexität vom alte System z'vereifache, d'Schema z'normalisiere, d'Handlige, wo de Agent mache darf, z'beschränke, und d'Abhängigkeit vo UI oder direktem Datebank-Zuegriff z'vermeide. En Agent sött nöd abhängig si vo Bildschirmklick, direkte Query a Chärntabelle oder versteckter Logik, wo nume wenigi Lüt verstönd. En API-Facade hilft au bi de Governance, wil s'Unternehmen entscheide cha, dass de Agent nume über validierti, mit Policy verseheni, protokollierti und im Notfall abstellbari Service interagiere darf.

Vili Integrationsprogramm gsehn sich als fertig, wenn de Endpoint baut isch. Für es agentischs Enterprise isch das nöd gnueg. Was gmesse werde muess, isch, ob die Integration würkli für de Betrieb taugt. D'Zuegriffszit für prioritäri Use Cases, d'Reliability und d'Error-Rate vo de API, d'Vollständigkeit vo de verfügbare Events, d'Aazahl vo Workflows, wo de Agent sicher cha usfüehre, und d'Hüfigkeit vom Fallback uf de Mensch wäge Integrationsfehler – das sind die relevantere Metrike. Wenn d'API existiert, aber oft timeoutet, s'Schema sich ohni Governance ändert, oder d'Events nöd konsistent sind, wird de Gschäft d'Agent nöd vertraue.

## Usiwirkige uf s'Operating Model und d'Governance

En Agent a Chärnsystem aazhänge isch nöd eifach es Middleware-Projekt. Sobald de Agent ERP, CRM oder HRIS berüehrt, chömed sofort es paar Governance-Implikatione.

Jedi Verbindig zu eme Chärnsystem muess en Business-Owner und en Technical-Owner ha. "S'Integrationsteam macht das" isch nöd gnueg. Es muess klar si, wem d'Gschäftscapability ghört, wo für de Agent ufgmacht wird.

D'Grenze vo Read, Recommend und Act müend formal si. La nöd jedes Team sini eigeni Autonomiestufe ohni en gemeinsame Rahme bestimme. Das füert zu inkonsistente Kontrolle.

De Audit Trail muess systemübergriffend si. S'Unternehmen muess nöd nume erkläre chönne, was de Agent gmacht het, sondern au, welchen Gschäftszuestand er gläse und welli Änderige er im Chärnsystem gmacht het.

D'Usiwirkig uf d'Belegschaft muess vo Afang a dänkt werde. Sobald de Agent i Chärnsystem läse und handle cha, wird sich d'Arbeit vo de Lüt verschiebe. D'Operationsteams werded nüm nume Date ygäh oder Status verfolge, sondern sich meh um Usnahme, Approvals und Policy-Verbesserige kümmere.

La d'Agent-Integration nöd wild pro Funktion wachse. Wenn jedi Funktion ihri eigeni Verbindig zu ERP oder CRM ohni gemeinsami Standard baut, schafft s'Unternehmen neue technische Schulde i Form vo Agent Integration Sprawl.

## Reflektivi Froge

Für de CIO isch d'Frog, ob de digital Core vom Unternehmen würkli parat isch, en Platform für d'Uusfüehrig vo Agents z'si, oder ob er nume es schwer zugänglichs, aber sicheres Buchhaltigssystem isch.

Für de COO isch d'Frog, i welne Prozess de gröschti Engpass nöd bi de Lüt ligt, sondern bi de Verspötig bim Zuegriff uf de Gschäftszuestand us em Chärnsystem.

Für d'CHRO, wenn de Agent afoot, im HRIS z'läse und Workflows azstosse, welli Rolle werded sich vo de Administration zur Ufsicht und zum Usnahme-Management verschiebe.

Für de Transformation Leader, ob de Fahrplan mit eme hochwertige Use Case und realistische Integrationscapabilities afoot, oder ob er no zwüsched eme spannende AI-Demo und Chärnsysteme, wo nöd parat sind, feschtsteckt.

Wenn d'Antwort uf die Froge no unklar sind, isch di nöchschti Priorität nöd, en neue Agent z'erschaffe. D'Priorität isch, de sicheri Weg zwüsched em Agent und em Chärnsystem klar z'mache. Det fangt s'agentische Enterprise würkli a, real z'werde.
