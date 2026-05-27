---
title: "Identity und Access Control für AI Agents"
sidebar_position: 13
image: "/img/diagrams/13-identity-access-control.png"
description: "Stell dir vor, es Finance-Team bereitet en Agent vor, wo bim monatliche Bücherabschluss hälft. Dä Agent cha offeni Journäl läse, Reconciliation prüefe und..."
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Identity und Access Control für AI Agents

<ArticleDiagram src="/img/diagrams/13-identity-access-control.png" alt="Diagramm: Identity und Access Control für AI Agents" />

Stell dir vor, es Finance-Team bereitet en Agent vor, wo bim monatliche Bücherabschluss hälft. Dä Agent cha offeni Journäl läse, Reconciliation prüefe und Kommentar-Entwürf für no nöd abgschlosseni Pöstli mache. Im Demo lauft alles glatt. Aber wenn de Agent würkli aafoot, Adjustment-Entwürf is ERP z schicke, chömed uf einisch Froge, wo s Team zum Stop bringe: Wer füehrt eigentli die Aktion us? Handlet de Agent im Name vonere bestimmte Controllerin? Oder als unabhängigs System? Und wenns Ergebnis falsch isch, wer isch verantwortlich?

Die Froge sind nöd nume technisch. Si gönd is Herz devo, wie d Firma de Agent gseht: als anonymes Hilfsmittel, oder als en digitale Akteur, wo gliich behandlet wird wie en Mensch oder en anderi Applikation – mit Kontrolle und Verantwortlichkeit.

Vili Organisatione händ hüt scho en guete Stand, wenns um Model, Prompt und API-Integration für ihri Agents gaht. Aber wenn d Use Cases vo Demos id Production gönd, wird öppis vergässe: De Agent het kei klar Identity. Er lauft mit eme generische Service Account, z wiite Permissione und Logs, wo nöd gnueg erkläre, wo d Aktion härchunt. Wenn de Agent denn aafoot, Invoices z läse, Tickets z eröffne, Orderstatus z ändere oder Procurement-Workflows usz'löse, cha d Firma kei eifachi Frog beantworte: Welchi Identity bruucht de Agent, in wäm sim Name handlet er, weli Berechtigige het er, und in welchem Workflow-Kontext passiert die Aktion?

Für en Enterprise isch das kei chliises Detail. Ohni es explizits Identity- und Access-Modell gönd Auditability, Accountability und Runtime Governance verlore – genau i dem Momänt, wo de Agent würkliche Wert schafft.

## De Agent isch kei anonymes Script

I de traditionelle Enterprise-Architektur kennemer verschideni Akteur: Mensche, Applikatione, Service Accounts und planti Prozäss. Agentic AI füegt e nüüi Kategorii dezue: en digitale Akteur, wo überleggt, Tool uswählt und über mehreri Schritt handelt. Drum dörf mer en Agent nöd wie nes anonymes Script behandle, wo zufällig im Hintergrund lauft.

En Agent brucht e klar Identity, wil d Firma drei grundlegendi Sache weiss muess: Wer füehrt d Aktion us, in wäm sim Uftrag passierts, und i welchem Workflow? Ohni die drei Sache wird d Kontrolle im Unternehmen unscharf.

Stell der en Procurement-Agent vor, wo en Intake-Request annimmt, de Vertrag prüeft und denn en Purchase-Request-Entwurf im ERP macht. Wenn die Aktion nume als Aktivität vonem generische Service Account ufgzeichnet wird, cha d Firma bi Problem nöd unterscheide, ob d Aktion vonere bestimmte Person usglöst worden isch, ob si Teil vonem plangte Workflow gsi isch, ob de Agent autonom wäge eme Event ghandlet het, oder ob öpper d Access missbruucht het. S gliiche gilt für Finance Close, Customer Operations oder IT Operations. Wenn Agents aafönd, de Business State z verändere, muess ihri Identity so nachevollziehbar sii wie die von Mensche oder andere Applikatione.

D Identity vom Agent isch au d Grundlag für Accountability. Im alte Operating-Modell folgt d Verantwortig meischtens em Mensch: Analyst, Approver, Supervisor oder System Owner. Im agentische Modell gönd Teil vo de Aktion uf digitali Arbeiter über. Das heisst nöd, dass d Verantwortig verschwindet. Im Gegenteil, si muess no expliziter gmacht werde. D Firma muess chönne säge: Zu welere Funktion ghört de Agent, wer isch de Business Owner, wer de Technical Owner, weli Tool dörf er bruuche, und weli Handligsgrenze sind erlaubt? Wenn nöd, chunt d Organisation i e gföhrlichi Situation: De Agent macht würkliche Sache, aber es git kei Kontrollmodell, wo sim Iifluss entspricht.

Meh no: D Identity bestimmt au d Trust Boundary. En Agent, wo mit interne Mitarbeiter interagiert, isch nöd gliich wie eine, wo externi Kund*ine bedient. En Agent, wo nume d Knowledge Base list, isch nöd gliich wie eine, wo de Zahligsstatus chan ändere. En Agent, wo im Kontext vonere verifizierte Person lauft, isch nöd gliich wie eine, wo uf eme öffentliche oder halb-öffentliche Channel unterwegs isch. Drum isch d Identity vom Agent nöd nume en technische Name. Si bestimmt, weli Date zuegriffe werde dörfe, weli Tool ufgrüeft werde dörfe, und weli Überwachigsstufe nötig isch. Wenn alli Agents gliich behandlet werde, landet d Firma i einere vo zwei Extreme: z los oder z stark iigschränkt. Beides isch schlächt.

## Permission sind nöd gnueg mit statische Role

Wenn d Identity vom Agent klar isch, chunt d Otorisierig. Da mached vili Organisatione de gliich alt Fähler i nöier Form: Si gänd Zugriff basierend uf statische Role und hoffed, dass das sicher gnueg isch. Für Agentic AI isch das z grob.

D Permission vom Agent sötted nöd nume vo sinere Role abhänge, sondern au vom Kontext: Wen representiert de User, weli Ufgab wird grad usgfüehrt, weli Date werde grad zuegriffe, wie sensibel sind d Informatione, und weles Risiko het die Aktion, wo grad gmacht wird. Das nennt mer Context-Aware Authorization.

Es eifachs Bispil us de Kreditorebuchhaltig: De Agent darf Invoices, Bestellige und Wareiigäng läse, zum Diskrepanze z analysiere. Er darf Lösigsempfählige mache. Aber er dörf nöd automatisch de Zahligsstatus ändere oder en Zahligssperri ufhebe. Wiso? Wil die letschti Aktion es viel höchers Risikoprofil het als nume läse oder empfähle.

Es Bispil us HR: De Agent darf de Onboarding-Status und d Dokumäntevollständigkeit läse und Entwürf für Benachrichtigige a d Hiring Manager mache. Aber er dörf kei Kompensationsdate oder Employment-Status ändere, ohni dass en korrekti Approval passiert. Es Bispil us Customer Operations: De Agent darf d Ticket-Historie und d Kundeberechtigige läse und chliini Refunds vorbereite, wenn d Policy das erlaubt. Aber Refunds über eme gwüsse Threshold müend für d Supervisor-Review aaghalte werde.

I allne dene Bispil langet e statischi Role nöd. Was bruucht wird, isch en Authorization, wo de Runtime-Kontext berücksichtigt.

Praktisch gsee, gits vier Kontext-Dimensione, wo jedes Mal sötte prüeft werde, wenn de Agent es Tool ufruft oder uf Date zuegrift. Erschtens: de User- oder Principal-Kontext – handlet de Agent im Name vonere bestimmte Person, eme Team oder enere Business-Funktion? Wenn ja, dörfed d Recht vom Agent s Mandat nöd überschriite, ohni en klare Grund. Zwöitens: de Task- oder Workflow-Kontext – füehrt de Agent grad en Analyse, en Entwurf, e Transaktionsusfüehrig oder en Approval-Support us? D Zugriffsrecht für jedi Phase müend verschide sii. Drittens: de Date-Kontext – sind d Date, wo zuegriffe werde, allgemein, intern, vertraulich oder extrem sensibel? Gönd si um Payroll, Bankverbindige vo Lieferante, strategischi Verträg oder gschützti Kundeinformatione? Viertens: s Risiko vo de Aktion – Date läse, Entwürf mache, Änderige usfüehre und Transaktione bewillige sind vier verschideni Risikostufe. D Kontrolle dörfed nöd gliich sii.

Wiso isch das wichtig? Wil en Agent mit z vil Berechtigige eine vo de grösste Risike im Enterprise isch. D Versuechig isch gross: Damit de Pilot schnäll funktioniert, gänd d Team em Agent oft wiite Zugriff. Churzfristig beschlünigt das d Demo. Langfristig entstönd überberechtigti Agents, wo schwirig z auditiered und gföhrlich sind, wenn mer si skaliert. Es gsünderes Prinzip isch s gliiche wie bi de Sicherheit vo Mensche und Applikatione: Least Privilege. De Unterschied isch, dass bi Agentic AI s Least Privilege dynamischer aagwändet werde muess, wil de Agent über verschideni Kontext schafft.

## Delegierti Autorität: In wäm sim Name handlet de Agent?

Vili Handlige vom Agent ghöred nöd würkli em Agent. De Agent handlet oft im Name vonere Person oder ere Funktion. Drum muess d Firma scharf unterscheide zwüsched de Identity vom Agent und de Quälle vo sinere Autorität. Das isch de Chärn vo de delegierte Autorität.

I de Enterprise-Praxis chömed d Handlige vom Agent us einere vo drei Quelle. Erschtens: en User-Instruktion – zum Bispil bittet en Chäufer de Procurement-Agent, en Vertrag z prüefe und en Purchase-Request-Entwurf z mache. I dem Fall handlet de Agent uf expliziti Aawisig vom User. Zwöitens: en plangte Workflow oder en offizielle Business-Prozess – zum Bispil prüeft de Finance-Close-Agent jede Nacht no nöd abgschlosseni Usnahme und schickt Follow-ups. Da chunt s Mandat vom Workflow, wo d Organisation bewilligt het. Drittens: en autonome Trigger basierend uf eme Event – zum Bispil bechunt de IT-Operations-Agent es Event, dass en Service usgfalle isch, und füehrt denn e Diagnose us und eröffnet es Incident. Oder de Supply-Chain-Agent bechunt es Event über e Lieferverzögerig und bereitet Optione für d Schadensminderig vor. I dem Fall wird d Aktion vom Event usglöst, nöd vonere direkte menschliche Aawisig.

Die drei Quelle vom Mandat müend im System unterschide werde. Wenn nöd, verlürt de Audit Trail de wichtig Kontext.

E gsundi delegierti Autorität muess Grenze ha. Wenigstens sött d Delegation jederzit chönne widerruefe werde, ziitlich beschränkt sii, uf en bestimmte Ufgabebereich beschränkt sii, und wenn relevant, uf en Transaktionswert beschränkt sii. Es Bispil im Procurement: De Agent darf Entwürf für Standard-Beschaffigskategorie mache, solang de Wert under eme gwüsse Threshold isch. Däüber use dörf er nume empfähle. Es Bispil im Kundenservice: De Agent darf Goodwill-Credits bis zu eme gwüsse Wert für Kunde mit bestimmte Kriterie verarbeite. Däüber use muess de Agent aahalte. Es Bispil i de IT-Operations: De Agent darf Runbooks für nidrigi Risiko-Remediation uf Nicht-Produktions-Umgebige oder bestimmti Service usfüehre, aber kei materiali Produktionsänderige ohni Approval.

En hüfige Schwachpunkt isch, dass d Delegation nume uf Business-Ebene verstande wird, aber nöd in technischi Kontrolle übersetzt wird. Debii sött s System klar ufzeichne chönne, wer s Mandat gee het, weli Agent usgfüehrt het, wenn s Mandat gültig gsi isch, weli Tool bruucht worde sind, und ob d Aktion de Policy entsproche het. Ohni das wirds für d Firma schwirig, zwüsched erlaubte Handlige, Handlige usserhalb vom Mandat und Handlige, wo scho nüm gültig sind, z unterscheide.

## Implementierigs-Muster für Enterprise

Damit Identity und Access Control für Agents nöd nume Prinzipie blibed, muess d Firma si in operativi Muster übersetze.

Erschtens: Gib jedem Agent en formelli Service Identity. Jede Agent, wo id Production chunt, sött sini eigeni Service Identity ha, und nöd en generische Account teile. Die Identity muess registriert sii, en Owner ha und mit em Enterprise-Agent-Katalog verbunde sii. Wenigstens sötted die Metadate vorhande sii: Name und Zweck vom Agent, Business Owner, Technical Owner, Prozess-Domäne, erlaubti Tool, Risk Tier und Lifecycle-Status. Das isch wichtig, damit de Agent als operative Vermögenswert behandlet wird, nöd als es Experiment, wo lauft lo wird.

Zwöitens: Bind jede Tool Call an e Policy Engine. De Agent dörf nöd frei Tool ufruefe, nume wil si verfüegbar sind. Jede Tool Call sött über e Policy Engine laufe, wo d Identity vom Agent, d Identity vom User oder d Mandatsquelle, d Art vo de Aktion, s Date- oder Transaktionsobjekt, de Workflow-Kontext und d Approvel-Regle prüeft. Mit dem Muster passiert d Kontrolle nöd nume bim Aamälde, sondern zur Laufzit, genau wenn de Agent öppis wott mache. Das isch extrem wichtig, wil Agentic AI dynamisch isch. Ein und di gliichi Sitzig cha mehreri Schritt mit verschidene Risikostufe umfasse. D Otorisierig muess dene Schritt folge, nöd nume de erschte Identity.

Drittens: Tren d Permission nach Handligsart. Eis vo de nützlichste Design isch, d Zugriffsrecht i Handligs-Schichte ufzteile: Read, Recommend, Draft, Execute und Approve. Die Ufteilig isch für Agents vil relevanter als s traditionelle Applikations-Zugriffsmodell. Es Bispil im Finance: Read zum Journäl, Reconciliation und Beleg läse; Recommend zum Behandligsvorschläg für Usnahme mache; Draft zum Kommentar oder Adjustment-Entwürf vorbereite; Execute zum bestimmti erlaubti Aktion bueche; Approve, wo fast immer bim Mensch blibt für materielli Pöstli. Es Bispil im Procurement: Read zum Verträg, Lieferante und Policy läse; Draft zum Purchase-Request-Entwürf mache; Execute zum Request in de Workflow schicke; Approve, wo bim menschliche Approver blibt. Mit dere Ufteilig cha d Firma d Autonomie vom Agent schrittwise erhöhe, ohni alli Recht uf einisch z gäh.

Viertens: Verwänd Just-in-Time und Scoped Access, wenns möglich isch. Für sensiblere Handlige sött de Zugriff nöd permanent aktiv sii. Sicherer isch, wenn de Agent en temporäre Zugriff überchunt, nume für en bestimmte Task, und denn wider verlöscht, wenn d Ufgab fertig isch. Das hilft, de Blast Radius z verchlinere, wenn en Konfigurationsfähler oder Missbruuch passiert.

Fünftens: Spiichere Audit Logs, wo d Handlig würkli erkläre. Audit Logs für Agents sind nöd gnueg, wenn si nume ufzeichne, dass en API ufgruefe worde isch. En würdige Enterprise-Log muess de User oder d Mandatsquelle, d Identity vom Agent, d Policy-Entscheidig, de Tool Call, d Iigab, d Usgab, d Approval, wo passiert oder übersprunge worde isch, und de ändgültig State im System verbinde. Das isch s minimale Spuurbild, zum Audit-Froge, Incident-Investigations oder d Qualitätsbewärtig vom Agent z beantworte. Wenn d Firma die Chetti nöd cha rekonstruiere, isch de Agent nöd bereit für d Production-Skala.

## Wie die Muster i de Praxis schaffed

Im Finance Close het de Close-Orchestration-Agent sini eigeni Service Identity. Er darf de Reconciliation-Status, offeni Journäl und Beleg läse. Er darf Kommentar-Entwürf und Follow-ups mache. Aber für materielli Adjustments zwingt d Policy Engine en menschliche Approval. De Log zeichnet uf: weli Controllerin s Mandat gee het, weli Agent de Entwurf vorbereitet het, weli Policy aagwändet worde isch, und welne ändgültige Status s Journal het.

Im Procurement Intake-to-PO handlet de Procurement-Agent im Name vom Requester oder Buyer, je nach Prozessphase. Er darf Verträg, Lieferantestamm und Kategorie-Policy läse. Er darf Entwürf für Standard-Kategorie mache. Wenn de Transaktionswert über eme Threshold isch oder de Lieferant no nöd approved isch, wird de Tool Call für d Usfüehrig abglehnt oder an en Approval-Workflow wiitergleitet.

I de Customer Operations het de Service-Agent sini eigeni Identity und lauft im Kontext vom verifizierte Kunde. Er darf d Ticket-Historie und d Berechtigige läse. Er darf chliini Goodwill-Credits usfüehre, wenn d Policy das erlaubt. Für VIP-Kunde, widerholti Fäll oder Wert über eme Threshold macht de Agent nume Empfählige und wartet uf de Supervisor.

I de IT Operations bechunt de Incident-Response-Agent es Event vo de Observability-Plattform. Er darf Diagnose und nidrigi Risiko-Remediation uf bestimmte Service usfüehre. Für Handlige, wo kritisch Produktion betreffed, verlangt d Policy Engine en Approval vom Engineer on Call. Alli Schritt sind ufzeichnet: s ursprüngliche Event, de Agent, wo ghandlet het, s Runbook, wo ufgruefe worde isch, s Ergebnis und d System-Statusänderig.

## Wenn die Muster no nöd passend sind

Nöd alli Organisatione sind parat, sofort es usgreifts Modell aazwände. Es git es paar Alarmzeiche, wo zeiged, dass de Agent no nöd bereit isch zum skaliere. De Agent bruucht en gmeinsame Service Account ohni eigeni Identity. D Permission sind z wiite, damit de Use Case zerscht lauft. Es git kei Trennig zwüsched Läse, Entwürf mache und Usfüehre. D delegierti Autorität wird nöd explizit ufzeichnet. Tool Calls laufe nöd über e Policy Engine oder Runtime-Kontrolle. Audit Logs zeichned nume s ändgültige Output uf, nöd d Entscheidigschetti. Es git kei schnälli Möglichkeit, de Zugriff vom Agent z entzieh, wenn en Incident passiert. De Business Owner weiss nöd genau, weli Tool und Date de Agent bruucht.

Wenn einigi vo dene Symptom no vorhande sind, wird s Skaliere vo Agentic AI s Risiko schnäller vergrössere als de Wert.

Agents mit executive Autonomie sind au nöd passend für Domäne, wo materielli Transaktione ohni klar Rollback betreffed, wo no kei Policy-Definitione für Runtime-Regle existiered, wo d Date no nöd stabil sind, oder wo d Prozess-Ownership no unscharf isch. I sonige Situatione isch es sicherer, mit Read, Recommend und Draft aazfange und zerscht d Identity, d Policy und s Logging z stärke.

## Froge zum Mitnäh

Nachdem du das Thema verstande hesch, gits es paar Entscheidige, wo du jetzt söttisch träffe. Erschtens: Leg s Identity-Modell für Agents i dinere Firma fest – wird jede Agent en formelli Service Identity, en Business Owner, en Technical Owner und en klar definierte Risk Tier ha? Zwöitens: Entscheid, weles Otorisierigs-Modell du wotsch – blibsch du bi statische Role, oder wächslsch du zu Context-Based Authorization für jede Tool Call? Drittens: Definier s Modell vo de delegierte Autorität – wenn handlet de Agent im Name vom User, wenn im Name vom Workflow, und wenn wäge eme autonome Event? Wie wird d Delegation iigschränkt, entzoge und auditiert? Viertens: Tren d Permission-Stufe vom Agent – sind d Zugriffsrecht scho unterschide zwüsched Read, Recommend, Draft, Execute und Approve? Fünftens: Leg de minimali Audit-Standard fest – cha d Firma de User, de Agent, d Policy-Entscheidig, de Tool Call, d Iigab, d Usgab und de ändgültig State verbinde?

Wenn morn en Auditor, en Regulierigsbehörde oder es Risiko-Komitee frogt: "Wer het die Aktion usgfüehrt, in wäm sim Uftrag, und wiso het s System das erlaubt?" – cha dini Firma das mit vollständige Bewiis beantworte, nöd nume mit ere mündliche Erklärig? Wenn d Antwort no nöd klar isch, denn isch, bevor du meh Agents zufüegsch, di nöchsti Priorität nöd es nöis Feature. D Priorität isch, d Identity, d Otorisierig und d Delegation ufzbaue, wo de Agent würdig macht, als Enterprise-Akteur vertrauenswürdig z sii.
