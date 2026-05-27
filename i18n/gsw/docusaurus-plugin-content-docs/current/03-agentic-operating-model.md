---
title: "Was isch es Agentic Operating Model"
sidebar_position: 3
description: "Stell der vor, es Finanzteam fangt a, en Agent z bruuche für de monatlech Abschluss. De Agent cha Date us em ERP hole, Rächige abglyche, Journaleentwürf vorbereite..."
image: "/img/social/03-agentic-operating-model.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Was isch es Agentic Operating Model

<ArticleDiagram src="/img/diagrams/03-agentic-operating-model.png" alt="Diagramm: Was isch es Agentic Operating Model" />

Stell der vor, es Finanzteam fangt a, en Agent z bruuche für de monatlech Abschluss. De Agent cha Date us em ERP hole, Rächige abglyche, Journaleentwürf vorbereite und Usnahme nachegoh. Uf de andere Site het s Customer Operations Team au en Agent, wo Kunderfroge beantwortet, Adrässe ändered oder de Status vo Bestellige prüeft. Und s IT-Team macht en Agent für d Erstdiagnose vo Störige.

Alles gseht guet us. Aber denn chömed unagnähmi Froge: Wer isch eigentli verantwortlich, wenn de Agent e Rächig falsch klassifiziert? Wer entscheidet, wie wit de Agent sälber handelet? Wänn muess de Agent zerscht en Mensch froge? Und wie weiss d Firma, ob de Agent würkli hilft oder nume s Risiko erhöht?

Die Froge cha kei technischi Architektur beantworte. Architektur isch wichtig – si seit, wie s System baut isch, wie de Agent Kontext überchunnt und wie er Tools ufruft. Aber sobald de Agent würkli schaffet, brucht s Firma öppis meh: e Art, wie me s Unternehmen füehrt, wenn Software nüm nume es Hilfsmittel isch, sondern afo d Arbet usfüehrt.

Do wird s Konzept vom **agentic operating model** relevant.

## Wenn alti Annahme afo wackle

Sit Jahrzähnte isch s Operating Model vo Unternehmen uf eifache Annahme ufbaut: De Mensch isch de Hauptusfüehrer vo de Arbet. Software isch do zum Hälfe – Transaktionene im ERP erfasse, Interaktione im CRM verwalte, Approvals über Workflow steuere oder Date i Dashboards aazeige. Aber am Schluss isch de Mensch gsi, wo agfange, beurteilt, entschiede und d Arbet abgschlosse het.

Agentic AI fangt a, die Annahme z verändere.

Jetzt macht Software nüm nume, dass de Mensch schneller schaffet. Si fangt a, mehschrittigi Ufgabe uszfüehre, Arbet über System hinweg z koordiniere, ersti Usnahme z behandlet, Entscheidige mit tiefem Risiko z treffe und nume zum Mensch z eskaliere, wenn d Sicherheit tief isch oder d Policy es verlangt. Die Veränderig gseht pro Use Case vilicht chli us. Aber sobald Agent i mehrere Funktione glichzitig im Isatz sind, zeigt s alte Operating Model syni Schwäche.

S erschte Problem isch d Automatisierig, wo zufällig passiert. Ei Funktion chauft es agentic Tool für de Kundenservice. E anderi Funktion baut en Agent für d Finanze. S IT-Team macht en Agent für d Incident-Triage. Alles gseht produktiv us, aber es git kei gmainsams Model, wem d Agent ghöred, wie Approvals funktioniered oder wie d Resultat beurteilt wärded. S Resultat isch nid es nöis Operating Model, sondern en Hufe wildi Automatisierige.

S zweite Problem isch d Unklarheit bi de Verantwortig. Wenn de Agent e Rächig falsch klassifiziert, wer isch verantwortlich? S Data-Science-Team? De AP-Prozessbesitzer? De Plattform-Aabieter? Ohni klari Definition wird jede Vorfall zu ere Diskussion zwüsched de Funktione.

S dritte Problem isch, dass d Skalierig s Risiko vergrösseret. Chliini Pilots gsehned oft sicher us, wil si vom Projektteam eng überwacht wärded. Aber sobald de Agent i mehrere Abteilige oder Länder im Isatz isch, zeiged d Schwäche vom Operating Model: Approvals sind nid konsischtent, Risikoschwellene sind verschide, und d Metrike für Erfolg sind nid einheitlich.

Drum cha agentic AI nid nume als Technologieprojekt gfüehrt wärde. Es isch e nöii Usfüehrigsschicht, wo e nöii Operationsdisziplin brucht.

## Sächs Element, wo vo Afang a klar si müend

Es gsunds agentic operating model muess nid kompliziert si, aber es muess explizit si. Mindestens sächs Element müend vo Afang a definiert si.

### 1. Klari Kompetenzgränze

Jede Agent muess genau wüsse, welli Handlige er ohni Zuestimmig dörf usfüehre, welli e menschlechi Approval bruched und welli nume Empfehlige sind. Das isch nid nume "de Agent hilft bim Iichauf." Was brucht wird, isch e operationelli Definition.

Bi de Beschaffig zum Bischpiil: De Agent dörf Iigangsaafrage klassifiziere und Iichaufsweeg vorschlah. Er dörf d Vollständigkeit vo Lieferante-Onboardings prüefe. Er dörf eifachi Rächigsdiskrepanze im Rahme vo de Policy-Toleranz behandlet. Aber er dörf kei nöii Lieferante mit höchem Risiko gnehmige oder d Lieferantestammdate ohni Approval ändere.

Im IT-Betrieb dörf de Agent Erstdiagnose und Risiko-armi Behebig gemäss Runbook mache. Aber er dörf kei Produktionskonfiguratione mit wiitere Usdruck ohni Zuestimmig vom Incident Manager ändere.

Ohni klari Kompetenzgränze wird de Agent entwedder z stark igschränkt, so dass er nid wertvoll isch, oder z frei, so dass er nid sicher isch.

### 2. Drei Bsitzer für jede Agent

Es wichtigscht Prinzip im agentic operating model isch, dass jede Agent drei Bsitzer het.

Erschtens, de **Business Owner**. Meistens de Bsitzer vom Prozess-Outcome. Er bestimmt d Gschäftsziel vom Agent, d SLA, d Prioritäte vo de Use Cases und de Trade-Off zwüsched Gschwindigkeit, Qualität und Benutzererfahrig. Zum Bischpiil de Head of AP für en Agent für Rächigsusnahme, oder de Controller für en Agent für d Abschluss-Orcheschtrierig.

Zweitens, de **Technical Owner**. Verantwortlich für Integration, Reliability, Observability und de technisch Lebenszyklus vom Agent. Das cha im Platform- oder AI-Engineering-Team si.

Drittens, de **Risk Owner**. Legt Guardrails, Approval-Schwellene, Compliance-Kontrollen und Abbruchbedingige fest. I einige Beriich chunt de Risk Owner us de Compliance, em Internal Control oder de Rechtsabteilig.

Ohni die drei Ownerships gseht de Agent us, wie wenn er allne ghört, aber i de Praxis ghört er niemerem würkli.

### 3. Klari Eskalationsweg

Es ryfes Operating Model strebt nid nach maximaler Autonomii. Es strebt nach de richtige Autonomii. Drum muess jede Agent en klare Eskalationsweg ha: wänn er zum Mensch muess.

Das cha si, wenn d Sicherheit tief isch, Date nid vollständig sind, d Policy in Konflikt isch, d Usnahme usserhalb vom normale Muster ligged, de Transaktionswert d Schwellene überschrittet oder de Reputationsschade z gross wär.

Im Kundenservice cha de Agent Adrässeänderige sälber erledige, aber er muess grossi Rückzahlige oder Fäll, wo zu Stritigkeite chönnte, eskaliere. Im Record-to-Report cha de Agent Journaleentwürf vorbereite, aber er muess materielli Journale oder sensibli Kontene eskaliere.

En guete Eskalationsweg isch nid nume "schicks zum Mensch." Er muess definiere, wer s bechunnt, innert wellere SLA und mit welem Kontext, damit de Mensch nid vo null afo muess.

### 4. Drei Betriebsmodi

D Firma muess drei eifachi, aber klari Betriebsmodi festlege.

De erschti Modus isch **Recommendation only**. De Agent analysiert, fasst zäme oder schloot Handlige vor, aber de Mensch füehrt si us. Passend für Beriich, wo no nöi sind, es höchs Risiko hend oder no nid gnueg Date und Kontrolle hend.

De zweit Modus isch **Human-in-the-loop**. De Agent bereitet d Handlig vor und cha Teil Schritt usfüehre, aber d Endentscheidig brucht d Approval vom Mensch. Das isch oft de realistischti Modus für di erschti Welle i de Finanze, Beschaffig, HR und im Kundenservice.

De dritt Modus isch **Bounded autonomy**. De Agent dörf i eme definierte Rahme sälbständig handle, mit Guardrails, Logging und klare Fallbacks. Passend für Arbeite mit höchem Volumen und relativ klare Regle, wie Ticket-Triage oder Risiko-armi IT-Behebig.

Wichtig: Die Modi dörf nid s Technologieteam elei bestimme. Si müend vo de Gschäftssite, em Risk und de Operations vereinbart wärde.

### 5. Miss Outcome, nid Aktivität

Alti Operating Models sind oft z stark uf Aktivitäte und menschlechi Kapazität konzentriert: Aazahl Ticket, wo behandlet worde sind, Aazahl FTE oder de Backlog pro Supervisor. Im agentic Model muess de Fokus uf d Outcome vom Arbetssystem verlageret wärde.

Relevanteri Metrike sind under anderem Cycle Time, Exception Rate, Automation Rate, Cost per Transaction, Entscheidigsqualität, Rework-Rate und SLA-Ethaltig. Beim Finanzabschluss isch d Hauptfrog nüm, wie vili Analyste Überzyt schaffed, sondern ob de Abschluss schneller isch, ob Usnahme schneller glöst wärded und ob de interni Prüfer meh Vertraue i d Kontrollspur het.

### 6. Neui Gstaltig vo de Rolle vom Mensch

Das isch de Teil, wo am meiste underschätzt wird. Es agentic operating model isch nid nume, dass me en Agent zum alte Team dezuegitt. Es veränderet d Arbet.

I vilne Prozess wird de Mensch devo weggoo, Transaktione z mache, Date z verschiebe und Follow-ups nachezgoo, und wird sich uf d Behandlung vo Usnahme, d Überwachig vo de Entscheidigsqualität, d Verbesserig vo Workflows, d Verwaltig vo Policies und s Training vom System dur operationells Feedback konzentriere.

I de Kreditorebuchhaltig verbringt s Team nüm di meischt Zit demit, standardi Rächige einzeln z prüefe. De Fokus verlageret sich uf komplizierti Usnahme, Lieferantestritigkeite und Policy-Tuning. I de Shared Services cha d Rolle vom Frontline-Case-Processor abneh, während de Bedarf a Process Controller, Knowledge Curator und Agent Supervisor stigt.

D Firma cha meh Kapazität und Gschwindigkeit übercho, aber nume, wenn si d Rolle, d Fähigkeite und d Teamstruktur neu gstaltet. Wenn nid, wird de Agent nume obe uf di alti Organisation gsetzt.

## Vo role-basiert zu outcome-basiert

Einì vo de grösste Us- und Implikatione vom agentic operating model isch d Verschiebig vo de Verwaltig uf Basis vo Rolle zur Verwaltig uf Basis vo Outcome.

Im alte Model hend d Organisatio d Arbet nach Organisationschästli verwaltet: Wer macht was, wie vili Lüt sind i jedem Team und wie lauft d Übergab zwüsched de Rolle. Die Aagah isch sinnvoll gsi, wo de Mensch de Hauptusfüehrer gsi isch. Aber wenn de Agent mitmacht, isch d Analyseeinheit, wo wichtiger isch, nüm d Rolle, sondern s Outcome über de ganzi Prozesskette.

Em Agent isch es egal, was für Jobgränze d Organisatio het. Er cha Date us em CRM zieh, d Policy i de Knowledge Base prüefe, es Ticket im ITSM erstelle und s ERP i eim Durchgang aktualisiere. Drum muess d Firma afo froge: Welis Outcome wömer erreiche? Welli Schritt bruched würkli en Mensch? Welli Entscheidigspünkt müend gschützt si? Und welli Teil sötted vom digitale Arbeiter usgfüehrt wärde?

Im Lead-to-Cash zum Bischpiil, statt d Produktivität vo Sales Ops, Order Management, Billing und Collections separat z optimiere, cha d Firma s Outcome "Order isch gültig und wird schnell iizoge" neu gstalte, mit eme Agent, wo d Orderprüefig, d Vertragsprüefig und de erschti Collection-Follow-up orcheschtriert.

Nid alli Beriich sind parat, sofort outcome-basiert gfüehrt z wärde. Wenn de Prozess no sehr unordentlich isch, d Date nid standardisiert sind und es no kei End-to-End-Ownership git, cha s Erzwinge vo dem Model nume meh Verwirrig bringe. En realistischere erschte Schritt isch, de Prozess z stabilisiere, d Ownership klar z mache, Basis-Metrike festzlege und denn de Agent Schritt für Schritt izfüehre.

## Wer sött füehre

Sobald d Firma ernsthaft afoht, Agent als Teil vo de Usfüehrig z bruuche, muess sich d Verwaltigsstruktur ändere.

D Firma brucht normalerwiis es funktionsübergriffends Governance-Forum mit de Gschäftssite, Technologie, Risk, Security, Legal und HR. S Ziel isch nid, meh Bürokratii z schaffe, sondern sicherzstelle, dass wichtigi Entscheidige nid isoliert troffe wärded. Das Forum diskutiert d Prioritäte vo de Use Cases, de Grad vo Autonomii pro Beriich, d Minimum-Kontrollstandards, d Performance-Metrike, Vorfäll und d Us- und Implikatione uf d Arbet.

Es Transformation Office oder AI Office muess d agentische Use Cases als operativs Produktportfolio verwalte, nid als Sammlig vo Pilots. Das heisst, es git e Roadmap, en langfristige Bsitzer, es Ziil-Outcome und en klari Entscheidig, wänn en Use Case beendet oder usbaut wird.

Am wichtigschte: Es agentic operating model isch nid nume e Technologie-Agenda. De COO muess debii si, wil d Hauptveränderige bim Prozessdesign und de Operations-Ökonomie ligged. De CHRO muess debii si, wil d Us- und Implikatione direkt uf d Job-Gstaltig, d Fähigkeite und s Performance-Management gönd. De CFO und d Risk-Leiter müend au aktiv si, wil de Agent Kontrolle, Prüefbarkeit und Verantwortig betrifft.

## Zeiche, dass d Firma no nid parat isch

Nid alli Organisatio sind parat, es agentic operating model z skalieren. E paar Alarmzeiche, wo oft uftauched: Jedi Funktion baut ihre eigene Agent ohni standardisierti Ownership; es git kei offizielli Liste vo aktive Agent i de Produktion; de Business Owner isch nid klar; d Approval-Schwellene sind verschide ohni Risk-Policy-Grundlag; s Operations-Team weiss nid, wänn de Agent handlet; d Erfolgsmetrike sind nume d Tool-Adoption; d HR het no kei Vorstellig vo de Rolleveränderige; und Vorfäll mit Agent gönd nid i formelli Governance-Mechanisme.

Wenn scho e paar vo dene Symptom sichtbar sind, isch d Priorität nid, nöii Use Cases z mache, sondern zerscht d Operationsdisziplin z stärke.

Es agentic operating model isch am Schluss nid e Frog, wie me AI aktiver macht. Es isch d Frog, wie me sicherstellt, dass wenn Software afoht mitzschaffe, d Firma immer no weiss, wer entscheidet, wer verantwortlich isch, wie s Risiko kontrolliert wird und wie Mensch und Agent zäme es Outcome produziere. Das isch de Underschid zwüsched eme spannende Demo und ere Transformation, wo würkli skaliert.
