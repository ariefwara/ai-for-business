---
title: "Data Foundation für Agentic AI"
sidebar_position: 7
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Data Foundation für Agentic AI

<ArticleDiagram src="/img/diagrams/07-data-foundation.png" alt="Diagramm: Data Foundation für Agentic AI" />

Stell dir vor, dini Finance-Abteilig hät en Agent baut, wo bim Abschlussprozess hälfe söll. De Agent isch a s ERP aabunde, cha Journäl läse und sogar scho en Entwurf für d'Rekonsiliation mache. Im Demo lauft alles glatt. Aber sobald er für en richtige Abschlussperiode igsetzt wird, fangt de Agent a, Invoice-Status falsch z'läse, falschi Kontene z'empfähle und Exception z'eskalieren, wo scho längst erledigt sind. D'Finance-Abteilig mues denn alles vo vorn überprüefe.

Was isch falsch gloffe? Nöd s'Modell. Au nöd, wie de Agent a s System aabunden isch. S'Problem liit i de Date, wo de Agent als "Brennstoff" brucht.

Vili Unternehmen fokussiered sich z'starch ufs Modell, uf Agent-Frameworks oder d'Platform. Aber im Enterprise-Kontext cha mer Modell hüt eifach chaufe oder uswechsle. Viel schwiriger z'kopiere isch de unternehmensspezifisch Kontext: interni Date-Definitione, Prozessstrukture, operativi Richtlinie, Entscheidigs-Historie und d'Beziehige zwüsched Gschäfts-Entitäte. Das alles läbt i de Date – sowohl strukturiert als au unstrukturiert.

Wenn d'Agentic-Architektur di nöi Usfüehrigs-Maschine isch, denn isch d'Data Foundation de Brennstoff und s'Navigations-System zuglich. Ohni e starchi Date-Grundlag cha en Agent überzügend töne, aber operativ falsch liege. Er cha Antwortenä gäh, wo plausibel tönd, aber de falsch Lieferant uswähle, de falsch Order-Status läse oder en Policy falsch interpretiere.

De Underschied zwüsched eme Demo-Agent und eme Agent, wo im tägliche Betrieb bruuchbar isch, liit normalerweis nöd i de Gspröchs-Qualität. De Underschied isch d'Data Readiness.

## Wiso Date wichtiger sind als Modell

I de AI-Diskussion stönd Modell oft im Zentrum, wills am sichtbarschte sind. Lüt vergliiched Reasoning-Fähigkeite, Latenz oder Output-Qualität. Das isch alles wichtig. Aber für es Enterprise isch es Modell nume en Teil. De würkli Gschäftswert entstaht, wenn es Modell uf em richtige Unternehmens-Kontext schaffet.

### Modell cha mer chaufe, Unternehmens-Kontext nöd

Unternehme chönd Zugang zu Frontier-Modell chaufe, Open-Source-Modell bruuche oder de Modell-Aabieter mit de Zit wächsle. Aber es git kei Aabieter, wo dir direkt d'Definition vo "aktivem Kunde" i dinere Version, d'Toleranz-Regle für Invoice-Mismatch i bestimmte Einheite, d'Beziehige zwüsched Verträg, Order, Shipment und Dispute oder d'Exception-Historie vom Finance-Abschluss chönnt liefere.

En Agent, wo dä Kontext nöd verstaht, wird a de wichtigste Stell versage: bi de operative Usfüehrig.

Es Bispil us em Procurement. En Agent cha en Aafrag läse und en Prozess-Weg vorschla. Aber wenn d'Supplier-Masterdate nöd konsistent sind, d'Spend-Kategorie nöd standardisiert und lokali Policy i verschidene Dokumente verteilt sind, cha de Agent d'Aafrag uf de falsch Weg leite. Sprachlich gseht er gschiid us. Operativ verursacht er Rework.

Es anders Bispil us de Customer Operations. En Agent cha d'Kunde-Historie guet zämmefasse. Aber wenn d'Entitlement-Status, SLA und Vertrags-Uusnahme nöd verfüegbar oder nöd synchron sind, cha de Agent Service-Verspräche mache, wo nöd im Vertrag stönd. Das isch nöd nume en technische Fehler; das cha es kommerziells und Reputations-Problem werde.

### Agent ohni korrekti Date produziert "Operational Hallucination"

De Begriff "Halluzination" wird oft bruucht, zum beschriibe, wenn es Modell Fakten erfindet. Im Enterprise isch di gföhrlicheri Form d'Operational Hallucination: De Output tönt glaubwürdig, isch aber falsch i Bezug uf d'Gschäfts-Realität.

Zum Bispil en Finance-Agent, wo folgeret, en Invoice sig no nöd zahlt, obwoll de Status im ERP scho gänderet isch. Oder en HR-Agent, wo d'Ferien-Policy uf Basis von eme alte, nöd updateete Dokumänt beantwortet. Oder en IT-Operations-Agent, wo en Runbook empfiehlt, wo nöd relevant isch, wills CMDB nöd akkurat isch. Oder en Supply-Chain-Agent, wo en Rerouting vorschlaht, ohni d'aktuelle Lagerbeständ z'berücksichtige.

S'Problem isch nöd nume d'Richtigkeit vo de Antwort. S'Problem isch, dass de Agent aafangt, Handlige, Prioritäte und Entscheidige z'beiiflusse.

### Data Readiness isch de Underschied zwüsched Pilot und Production

Vili Agentic-Pilot gönd guet, wills d'Date manuell gruumt, de Scope verchlineret, d'Dokumänt einzeln usgwählt und s'Projektteam d'Ergebnis intensiv überwacht händ. Sobald's i d'Production gaht, ändered sich d'Bedingige. Date chönd us vili System, Gschäfts-Definitione sind nöd einheitlich, Dokumänt sind dur'enand, d'Berechtigige sind komplex und es git vil meh Exception.

A däm Punkt gseht s'Unternehmen, dass d'Data Readiness kei Nebesach isch. Si isch en Vorbedingig fürs Scalierä.

Drum isch di wichtigere Frog als "welches Modell bruuche mer?" oft: weli Gschäftsdate sind d'Wohrheits-Quelle, wär isch de Bsitzer, wie konsistent sind d'Definitione, wie wird d'Qualität überwacht und wie greift de Agent druff zue, ohni d'Kontrollen z'verletze?

## Structured Data: Grundlag für Action Agents

Wenn en Agent im Enterprise-System handlet, bruucht er Zugriff uf Structured Data, wo de offiziell Gschäfts-Zuestand repräsentiert. Structured Data umfasst normalerwis Kern-Entitäte wie Kunde, Order, Invoice, Produkt, Mitarbeiter, Lieferant, Asset, Vertrag, Ticket und Finanztransaktion. Das sind d'Date, wo am nöchschte a de operative Handlig sind. Wenn en Agent en Status prüeft, e Bedingig validiert oder en Action vorbereitet, isch er fast immer uf Structured Data aagwise.

### Nöd nume Tabelle, sondern konsistenti Gschäfts-Objekte

En hüfige Fehler isch z'dänke, Structured Data sig gnueg vorhande, wills Unternehmen scho es ERP oder CRM hät. I de Realität bedütet s'Vorhandesii vomene System nöd automatisch, dass d'Date für en Agent bereit sind.

Damit Structured Data für Agentic AI bruuchbar isch, sötts mindestens sächs Eigeschafte ha.

**Konsistenti Gschäfts-Definitione.** Was heisst "aktive Kunde"? Wänn gilt en Order als "erfüllt"? Was isch de Underschied zwüsched "Lieferant freigeh" und "Lieferant aktiviert"? Wenn die Definitione zwüsched Funktionä oder Länder underschidlich sind, wird de Agent Müeh ha, konsistenti Entscheidige z'treffe. Im Record-to-Report, zum Bispil, müend d'Definitione vo sensitive Kontene, Materialität oder Rekonsiliations-Status klar si. Suscht wird en Close-Orchestration-Agent di falsche Pünkt priorisiere.

**Klari Bsitzerverhältnis.** Jede Date-Domain bruucht en Gschäfts-Bsitzer, nöd nume en technische Administrator. Es muess klar si, wär für d'Qualität vom Customer Master, Vendor Master, Employee Data oder de Product Hierarchy verantwortlich isch. Ohni Bsitzer werded Date-Problem immer als "System-Problem" abgschobe, obwoll si direkt d'Agent-Operatione beiiflussed.

**Nachvollziehbare Lineage.** En Agent sött uf Date schaffe, wo d'Herkunft klar isch. Wenn es Feld im Dashboard us ere verschachtlete Transformation ohni gueti Lineage chunnt, isch's schwirig sicherzstelle, ob de Agent de richtig Gschäfts-Zuestand list oder nume en scho veralteti Ableitig. Das isch speziell wichtig für Use Cases, wo operativi Entscheidige beträffe, nöd nume Einsichte.

**Überwachti Qualität.** D'Date-Qualität cha mer nöd eifach aah. Es Unternehmen muess Vollständigkeit, Eindeutigkeit, Konsistenz, Aktualität und Gültigkeit überwache. Bispil i de Accounts Payable: wenn de Vendor Master Duplikat hät oder d'Tax-ID nöd vollständig isch, wird en Invoice-Resolution-Agent hüfig falschi Fäll verchnüpfe. Bispil i de HR-Operations: wenn d'Organisationsstruktur nöd aktuell isch, cha en Onboarding-Agent d'Genehmigige oder Benachrichtigige falsch leite.

**Starchi Semantik.** Structured Data für Agent sött nöd nume "gspicheret" si. Es muess e Bedütig ha, wo über Systemgrenzen use verstande wird. Do werded Enterprise-Data-Modell, Canonical Models oder Master Data Management relevant. Maturi Organisatione legged au starch Wert uf es konsistentes Enterprise-Data-Modell, damit d'Agent-Entscheidige nöd je nach Quellsystem variiered.

**Sichere Zugriffs-Interface.** Agent sötted nöd wild i Kern-Tabelle lässe. De Zugriff uf Structured Data sött über es Interface laufe, wo Berechtigige, Audit Trail, stabil Schema und Policy Enforcement sicherstellt. Mit andere Wort: Structured Data für Agent sött wie en Enterprise-Capability zuegänglich si, nöd wie en technische Shortcut.

### Enterprise-Bispil: Finance, Procurement und Shared Services

Im Finance Close bruucht en Agent, wo bim Abschluss hilft, Date wie Rekonsiliations-Status, offeni Journäl, Aging-Exception, Close-Kalender und Konten-Mapping. Wenn die Date konsistent sind und e klari Lineage händ, cha de Agent Exception priorisiere, Kommentar vorbereite und Follow-ups orchestriere. Wenn nöd, macht de Agent nume meh Lärm.

Im Procurement bruucht en Intake-to-PO-Agent de Supplier Master, Spend-Kategorie, aktivi Verträg, Budget-Status und d'Bestell-Historie. Wenn de Supplier Master dur'enand isch oder d'Kategorie nöd standardisiert sind, wird de Agent hüfig de falsch Iikaufsweg wähle. I däm Domain isch d'Qualität vo de Masterdate hüfig entscheidender als d'Fähigkeit vom Modell.

I de Shared Services sind Structured Date hüfig über Funktionä verteilt. En Case-Management-Agent muess villicht Ticket-Date, SLA, Transaktions-Status und Interaktions-Historie zämmebringe. Wenn d'Identifier zwüsched de System nöd synchron sind, wird de Agent Müeh ha, en ganzheitliche Fall-Überblick z'baue.

### Wänn Structured Data nöd usreichend sind

Structured Data isch entscheidend für Handlige. Aber vil Enterprise-Kontext läbt nöd i Transaktions-Tabelle. Policy, Verträg, E-Mails, Call-Transcripts, SOPs und Fall-Notize sind hüfig d'Entscheidigs-Träger. Do chunnt Unstructured Data ins Spiil.

## Unstructured Data: Wo de würkli Kontext hüfig versteckt isch

Vili Organisatione gsehn de Wert vo Unstructured Data erst, wenn si aafanged, Agent z'baue. Bisher sind Dokumänt und Kommunikation hüfig als passivs Archiv behandlet worde. I de Agentic AI werded die Quelle zu eme aktive Kontext-Layer.

Unstructured Data umfasst normalerwis Policy-Dokumänt, SOPs, Verträg, E-Mails, Call-Transcripts, Chat-Historie, Bild- oder Scan-Dokumänt, Protokoll, Knowledge-Artikel und Fall-Notize. Für vili Enterprise-Workflows isch genau do de Grund für Entscheidige.

I de Customer Operations isch de Ticket-Status villicht im CRM, aber de Kontext vom Kunde sine Emotionä, Verspräche, wo gmacht worde sind, oder d'Ursach vom Problem sind hüfig i Transcripts und Gspröchs-Historie. Im Procurement isch de Supplier Master im System, aber di kommerzielle Bedingige und Vertrags-Uusnahme sind i Dokumänt. Im HR sind d'Mitarbeiterdate im HRIS, aber lokali Policy, FAQ und Programm-Uusnahme läbed hüfig uf Portal, i PDFs oder E-Mails. Im IT-Operations sind Alert i de Observability-Platform, aber Runbooks, Postmortems und historischi Workarounds sind hüfig i Wiki, Ticket-Notize und Chat-Channel verteilt.

Agentic AI erschliesst neue Wert us Unstructured Data, wil de Agent nöd nume "Dokumänt sueche" tuet. Er cha mehreri Quelle gliichzitig läse, Dokumänt-Inhalt vergliiche, historische Kontext mit Transaktions-Status verchnüpfe und denn uf Basis vo däm Kontext handlig oder eskalierä.

### Unstructured Data bruucht en Pipeline, nöd nume en Upload

Vili früehi Implementierige blibed bi "Dokumänt i Vector Store lade". Für es Enterprise isch das z'oberflächlich. Unstructured Data müend über e disziplinierti Pipeline gstüret werde.

**Ingestion.** Dokumänt müend us klare Quelle cho: offizielle Repository, E-Mail-Archiv, Call-Center-Platform, Contract-Management-System, Knowledge Base oder kuratierti File Shares. Wenn d'Ingestion nöd kontrolliert isch, holt de Agent Kontext us nöd-authoritative Quelle.

**Classification.** Nöd alli Dokumänt händ s'gliche Gwicht. Es Unternehmen muess unterscheide zwüsched offizieller Policy, Entwurf, abglaufene Dokumänt, aktive Verträg, informeller Kommunikation und Referenz-Material. Ohni Klassifikation cha de Agent alti Dokumänt zitiere, als wäred si no gültig.

**Chunking und Enrichment.** Langi Dokumänt müend i abholbari Einheite ufteilt werde. Aber s'Chunking sött nöd blind si. Metadate wie Dokumänt-Bsitzer, Gültigkeitsdatum, Version, Region, Funktion, Vertraulichkeitsstufe und Status (aktiv/inaktiv) sind hüfig wichtiger als s'Embedding sälber.

**Embeddings und Retrieval.** Embeddings hälfed bi de semantische Suechi, aber es Enterprise-Retrieval muess meh si als nume Similarity Search. Es muess Metadate, Berechtigige und Workflow-Kontext berücksichtige. D'HR-Policy für Indonesie sött nöd für en Fall vo me Mitarbeiter i eme andere Land uuftauche, nume wil d'Sprach ähnlich isch.

**Retention und Lifecycle.** Unstructured Data händ au es Ablaufdatum. Alti E-Mails, sensibleni Transcripts oder Verträg, wo abgloffe sind, sötted nöd ohni Regle wyter als aktive Kontext diene. Es muess en Retention-Policy aagwändet werde, damit de Agent kei Entscheidige uf Basis vo Erinnerige trifft, wo nümm relevant sind.

### Wichtigi Trade-offs bi Unstructured Data

Es git d'Versuchig, alli Dokumänt i s'Agentic-System z'stecke. Das isch selte gschiid. Je meh Dokumänt ohni Kuratiere igspiiset werded, desto höcher isch de Noise, desto grösser s'Risiko vo falschem Retrieval, desto schwiriger isch d'Berechtigigs-Verwaltig und desto höcher d'Chöste.

Drum isch e gsündere Strategie, mit eme autoritative und wertvolle Corpus azfange. Zum Bispil offizielli SOPs für Shared Services, aktivi Verträg für Procurement, verifizierti Knowledge-Artikel für de Service Desk oder kuratierti HR-Policy. Nöd alli Date, wo s'Unternehmen je produziert hät.

## Data Governance für Agents: Vo de Policy zur Runtime

A däm Punkt gönd vili Unternehmen devo us, si hebed scho Data Governance: es git Date-Klassifikation, Zugriffsrichtlinie, Date-Bsitzer und Retention-Policy. S'Problem isch, dass traditionelli Governance hüfig bi Dokumänt, Komitee oder manuelle Kontrolle ufhört. Für Agentic AI muess Governance i d'Runtime übersetzt werde.

Di entscheidendi Frog isch nöd nume "wär darf uf die Date zuegriffe?" sondern: wär darf über en Agent uf die Date zuegriffe, für welen Zweck, i welem Workflow, mit welem Autonomie-Grad, und füert de Zugriff zu ere Handlig oder nume zu ere Iisicht?

### Permission müend bi Retrieval und Tool Call gältä

Das isch en sehr wichtige Punkt. Wenn de Agent Kontext us eme Dokumänt oder us Structured Data holt, muess d'Berechtigig zum Zitpunkt vom Retrieval prüeft werde, nöd erst, wenn d'Antwort usegaht.

En HR-Agent sött kei Kompensations-Date abrüefe, wenn de Benutzer nöd berechtigt isch. En Procurement-Agent sött kei strategische Vertrag für en normale Aafragsteller ufmache. En Finance-Agent sött kei Date vo bestimmte Entitäte aazeige, wo usserhalb vom Benutzer-Scope ligged. En Customer-Service-Agent sött ohni korrekti Identitätsprüefig kei sensibleni Historie abrüefe.

S'gliche gilt für Tool Calls. S'Rächt, en Order-Status z'läse, isch nöd s'gliche wie s'Rächt, en Order z'ändere. S'Rächt, en Lieferant z'gseh, isch nöd s'gliche wie s'Rächt, de Lieferant-Master z'ändere.

### Governance für Agents bruucht Kontext vom Zweck

Im Enterprise gohts bim Date-Zugriff nöd nume um d'Identität, sondern au um de Zweck. En Agent darf villicht Date vo ere Invoice läse, zum e AP-Exception z'löse, aber er darf nöd di gliche Date bruuche, zum e Zämmefassig z'mache, wo an nöd relevanti Partei verteilt wird.

Drum muess d'Agentic-Governance d'Identität vom Agent, d'Identität vom Benutzer oder Prozess, wo er vertritt, de Gschäftszweck und de laufend Workflow verchnüpfe. Das isch komplexer als es traditionells Applikations-Zugriffsmodell, aber au realistischer.

### Audit Trail muess de Entscheidigs-Kontext erkläre

Für en Agent isch en guete Audit Trail nöd gnueg, wenn er nume "Zugriff isch passiert" ufzeichnet. Er muess chönne erkläre, weli Date abgruefe worde sind, us wele Quelle, uf Basis vo wele Berechtigige, i welem Workflow und wie die Date d'Entscheidig oder Handlig beiiflusst händ. Das isch wichtig für Risiko, Compliance und au für d'operativi Verbesserig. Wenn en Agent e falschi Empfählig git, muess s'Unternehmen chönne zruggverfolge, ob s'Problem bi de Date-Qualität, em falsche Retrieval, fehlende Metadate oder ere nöd aagwändete Policy liit.

### Sinal, dass d'Data Governance no nöd bereit isch für Agents

Es git es paar typischi Azeiche: De Date-Bsitzer weiss nöd, dass sini Date vom Agent bruucht werded; offizielli Dokumänt und Entwürf sind ohni klari Version vermischt; d'Berechtigige im Knowledge-Layer sind grosszügiger als im Quellsystem; es git kei Metadate über Gültigkeitsdatum oder Region vo de Policy; de Agent cha uf Date zuegriffe, wil er en generische Service-Account bruucht; und es git kei eifachi Möglichkeit, en bestimmte Corpus oder e Date-Quelle bi eme Vorfall z'deaktiviere.

Wenn die Azeiche vorhande sind, wird s'Skalierä vo Agentic AI s'Risiko schneller vergrösserä als de Nutze.

## Data Foundation stärke, bevor mer skaliert

Nachdem mer d'Wichtigkeit vo de Data Foundation verstande hät, gits es paar Entscheidige, wo jetzt müend troffe werde. Erstens: leg d'prioritäre Date-Domain für de erst Agentic Use Case fest. Fang nöd mit "allne Unternehmensdate" a. Wähl en Domain, wo am nöchschte a de prioritäre Value-Stream isch, zum Bispil Kunde, Invoice, Lieferant, Mitarbeiter oder Ticket. Zweitens: entscheid, weli Wohrheits-Quelle für Structured Data und weli autoritative Corpus für Unstructured Data gälted. De Agent sött nöd sälber us ere ambivalente Date-Landschaft wähle dörfe. Drittens: leg Bsitzerverhältnis über Date und Workflow fescht. Es muess klar si, wär de Bsitzer vo de Gschäftsdate, wär de Bsitzer vom Knowledge-Corpus und wär für d'Berechtigige und d'Qualitäts-Überwachig verantwortlich isch. Viertens: bau Governance für d'Runtime, nöd nume für Dokumänt. Berechtigige, Metadate, Retention und Policy müend bi Retrieval und Tool Call gältä. Fünftens: wähl e Strategie für d'Kuration vo Unstructured Data. Fang mit eme wertvolle und offizielle Corpus a; steck nöd alli Dokumänt ine, nume für d'Abdeckig.

Für d'Bewertig vo de Bereitschaft vom Unternehmen, lueg, ob di wichtigschte Structured-Data-Domains für de prioritär Use Case identifiziert sind, ob d'Gschäfts-Definitione für wichtigi Entitäte konsistent über d'Funktionä sind, ob es klari Bsitzer für Kunde, Lieferant, Mitarbeiter, Order, Invoice oder anderi relevanti Domains git, ob d'Kern-Date-Qualität zumindest für Vollständigkeit, Konsistenz und Aktualität überwacht wird, ob de Agent uf Structured Data über es Interface zuegrift, wo Berechtigige und Audit Trail sicherstellt, ob de Unstructured-Data-Corpus, wo de Agent bruucht, kuratiert isch und vo Entwürf oder abglaufene Dokumänt underschide wird, ob wichtigi Metadate wie Version, Gültigkeitsdatum, Region und Vertraulichkeitsstufe verfüegbar sind, ob s'Retrieval Berechtigige aawändet, wo mit em Quellsystem konsistent sind, ob d'Retention-Policy für Dokumänt, Transcripts und Interaktions-Historie berücksichtigt isch, und ob es gnueg Logging git, zum zruggverfolge, weli Date de Agent für e Empfählig oder Handlig bruucht hät.

Pass uf uf Gfahre-Sinal, dass das Thema no nöd bereit isch für d'Skalierig. Wenn s'AI-Team seit "d'Date werded spöter gruumt", wenn d'Kern-Masterdate no zwüsched de Funktionä umstritte sind, wenn de Agent Antwortenä us Dokumänt holt, wo nöd klar isch, ob si offiziell sind, wenn es kei Metadate zu Version oder Gültigkeitsdatum vo de Policy git, wenn de Service-Account vom Agent z'wiite Zugriff uf Date über Domains hinweg hät, wenn s'Retrieval us de Knowledge Base d'Benutzer-Berechtigige nöd respektiert, wenn es für wichtigi Felder kei usreichendi Date-Lineage git, und wenn s'Gschäft no keine Bsitzer benennt hät, wo für d'Qualität vom Kontext verantwortlich isch, wo de Agent bruucht, denn wird s'Skalierä s'Risiko vergrösserä.

Bevor mer Agentic AI uswiitet, sött mer sich ehrlich froge: Baut üses Unternehmen en Agent, wo würkli verstaht, wie s'Gschäft funktioniert, oder baut mer nume en intelligents Interface uf Date, wo no nöd bereit sind, vertraut z'werde? Wenn d'Antwort di zweiti isch, denn isch di nöchst Priorität nöd, nöii Agent z'baue. D'Priorität isch, d'Data Foundation z'stärke, damit d'Agent, wo scho existiered, vertrauenswürdig, prüefbar und skalierbar sind.
