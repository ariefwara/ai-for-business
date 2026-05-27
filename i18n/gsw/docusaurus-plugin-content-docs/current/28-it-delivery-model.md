---
title: "IT Delivery Model mit AI Software Agents"
sidebar_position: 28
description: "Vili Technologie-Teams fanged ire AI-Reis a de Position wo am meischte vertraut isch: em Coding Assistant. Entwickler bruuched AI zum Boilerplate schriibe,..."
image: "/img/social/28-it-delivery-model.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# IT Delivery Model mit AI Software Agents

<ArticleDiagram src="/img/diagrams/28-it-delivery-model.png" alt="Diagramm: IT Delivery Model mit AI Software Agents" />

Vili Technologie-Teams fanged ire AI-Reis a de Position wo am meischte vertraut isch: em Coding Assistant. Entwickler bruuched AI zum Boilerplate schriibe, Unit-Test mache oder Dokumentation zämmefasse. D Resultat spürt me sofort – di individuelli Arbet wird schnäller. Aber wenn mer det stopped, hämmer nur d Oberflächi aagfasst.

Di grundsätzlichere Froge chömed denn uuf, wenn s Team merkt, dass de Bottleneck vom Software-Delivery nöd d Tippgschwindigkeit isch. Requirement sind no immer unklar. Reviews staped sich. Testing isch z spot. Incidents bruuched lang zum verstah. Und d Handoffs zwüsched de Rolle sind immer no e Quelle vo Verzögerige, wo kei Coding Assistant aapackt.

Det fanged d Firme a, sich vo eifache Hilfsmittlen für Entwickler wegzebewege, und d Arbet vom ganze Technologie-Team nöd z überdenke. Es goot nümm drum, wie schnäll eini Person Code schriibt, sondern wie AI i de Workflow vom Software-Delivery und IT-Operations vo Aafang bis Ändi integriert werde cha.

## Was ändert sich, wenn AI im Workflow schaffet

Bisher hät de Copilot i eim eifache Muster gschaffet: De Entwickler frogt um Hilf, AI git en Vorschlag, de Mänsch wählt us und füert us. Das Modell beschlünigt individuelli Ufgabe, aber es ändert d Struktur vom Delivery nöd. Di systemische Problem – wie inkonsistente Test-Coverage, Security Findings wo z spot entdeckt werde, oder unklari Deployment-Readiness – bliibed bestah.

En Software Agent schaffet anders. Er antwortet nöd nur uf einzelni Aafroge. Er cha Teil vo längere Arbetsabläuf si: Requirement i User Stories ufteile, en erschti Implementierig mache, Test generiere, en erschte Review mache, Dependencies prüefe, oder bim Triage vo Produktionsincidente hälfe. Mit andere Wort: De Copilot erhöht d Produktivität vo Ufgabe, während en Software Agent s Potenzial hät, de Delivery-Workflow sälber z verändere.

De Underschied isch wichtig, denn wenn er nöd verstande wird, chömed zwei hüfigi Fehler. Erschtens: D Organisation gseht e höcheri Coding-Gschwindigkeit und dänkt, de ganz Lieferzyklus verbesseret sich. Aber wenn Reviews, Testing und Releases langsam bliibed, ändert sich de System-Durchsatz nöd vil. Zwöitens: Es gits Organisatione, wo z schnäll vill Autonomie a Agent gänd – ihm s Rächt gänd, automatisch z merge oder z deploye, ohni usgreifti Guardrails. Das isch gföhrlich, vor allem i Umfäld mit Kernsystem, höcher technischer Schuld und Audit-Pflichte.

En Software Agent isch am nützlichste bi sich widerholende Arbet, wo aber trotzdem technische Kontext bruucht, wo Artefakt trackbar sind, wo automatisch testbar isch, und wo es klari Risikogrenze git. Zum Bispiel: Requirement-Ufteilig für chlini Enhancements, Regressionstest erstelle, en erschte Pull-Request-Review, oder Incident-Triage basierend uf Runbooks. Umgekehrt isch en Agent weniger geeignet, wenn er grossi Architekturentscheidige söll treffe, Kernsystem mit vilne Trade-offs nöd söll umbaue, oder ohni menschlichi Ufsicht hochrisikanti Produktionsänderige söll mache.

## Nöd en eine Agent für alles

Di gsündist Art, über Software Agents im Delivery-Zyklus nöd z denke, isch nöd als eini Entität wo alles macht, sondern als es Set vo Agents mit beschränkte Rolle. Das Muster isch besser für d Enterprise, wil d Verantwortlichkeite klarer sind, d Evaluierig eifacher, d Kontrolle präziser, und en Fehler vo eim Agent nöd sofort de ganz Ablauf kabut macht.

En Analyst Agent cha hälfe, Requirement z übersetze. Vili Delivery-Problem fanged mit Tickets aa, wo es allgemeins Ziel händ, aber nöd klar gnueg für d Implementierig sind. De Agent cha Business-Requirement i User Stories umwandele, Acceptance Criteria ufstelle, erschti Dependencies identifiziere, und Bereich markiere wo no unklar sind. Aber wichtig: De Product Manager, de Business Analyst oder de Lead Engineer müend immer no validiere, ob die Ufteilig fachlich und technisch korrekt isch.

En Developer Agent cha en erschti Implementierig mache, wenn d Requirement klar gnueg sind. Er cha Skeleton-Code mache, erschti Funktionene schriibe, Konfigurationene aktualisiere, oder en Draft-Migration-Script für beschränkti Änderige generiere. De Hauptwert isch nöd, de Engineer z ersetze, sondern d Ziit z reduziere, wo me bruucht zum vo Null aafange. De menschlichi Engineer prüeft denn, ob s Design zu de Architektur-Pattern passt, ob s Error-Handling usreichend isch, und ob d Änderig sicher für anderi System isch.

En QA Agent cha hälfe, es klassischs Problem z löse: De Code isch schnäller fertig als de Test. De Agent cha Unit-Test mache, Integration-Test ufbaue, synthetischi Testdaten generiere, und Acceptance Criteria i Testszenarie umsetze. Das isch extrem nützlich, wil Test oft de weniger glamourösi, aber entscheidende Bottleneck für d Qualität vom Delivery sind.

En Security Agent cha früeh iigsetzt werde, zum riskanti Dependencies prüefe, unsicheri Coding-Muster markiere, Secret-Exposure checke, und Änderige mit de Secure-Coding-Policy verchnüpfe. Wenn de Developer Agent en nöii Library dezuefüegt, cha de Security Agent sofort markiere, dass die Library es Issue hät, wo müend aagluegt werde.

En Reviewer Agent cha en erschte Review vo Pull-Requests mache: Ob d Änderig zu de Requirement passt, ob Test fehled, ob d Struktur konsistent isch, und ob d Dokumentation müend aktualisiert werde. Das isch kei Ersatz für en menschliche Code-Review, aber es cha d Review-Last reduziere, indem grundlegendi Problem usgfilteret werde, bevor de Senior Engineer dra goot.

I gsunde Multi-Agent-Muster bhaltet de Mänsch drei Hauptverantwortlichkeite. Entscheidige über Systemgrenze, Performance-Trade-offs und domänübergriffendi Integration müend vom menschliche Engineer gleitet werde. Für Änderige, wo i de Hauptbranch oder de Production-Path gönd, isch de Mänsch immer no de letscht Verantwortlich. Und kein Agent dörf de Besitzer vom Produktionsrisiko si – d Accountability blibt bim Engineering Manager, Tech Lead oder designierte Change Owner.

Stell der vor, es Team baut en Enhancement für es Customer-Service-Modul i erä interne CRM. De Analyst Agent teilt s Requirement i User Stories uuf. De Developer Agent macht en Draft vo de Implementierig. De QA Agent generiert Unit-Test und Regression-Szenarie. De Security Agent prüeft nöii Dependencies und d Date-Zuegriffsmuster vo de Kundedate. De Reviewer Agent macht erschti Kommentar zum Pull-Request. De menschlichi Engineer prüeft s Design, verbesseret Edge Cases, und entscheidt, ob d Änderig merge-würdig isch. D CI/CD-Pipeline füert automatisierti Kontrolle us, bevor d Änderig witergoot. Es Muster wie das isch realistischer als d Gschicht "AI schribt di ganz Applikation."

## IT Operations: Vom Alert zur schnällere Aktion

Wenn Software Agents nur i de Development-Phase iigsetzt werde, hät d Firma erst en Teil vom Wert gnutzt. En andere Bereich, wo sehr relevant isch, sind d IT Operations. Vili Operations-Teams verbringed immer no vill Ziit mit em Läse vo Alerts, em Sueche vo Runbooks, em Ufmache vo Logs us mehrere Tools, em Sammle vo Konfigurations-Kontext, und em Vorbereite vo Eskalatione. Die Arbet isch wichtig, aber oft repetitiv und ziitintensiv, vorallem wenn de Druck hoch isch.

En Incident Agent cha Alerts vo Monitoring-Tools läse, si mit em Service-Map verchnüpfe, s relevanti Runbook sueche, Logs und letschti Änderige prüefe, und denn e Hypothese zur Ursach und en Lösigs-Vorschlag vorbereite. Zum Bispiel: Nach eme Deployment vo erä Zahlungs-App chunt en Aastieg vo de Error-Rate. De Incident Agent cha gseh, dass es es nöis Deployment vor 20 Minute ggä hät, di wichtigste Error-Logs usezieh, si mit em Rollback-Runbook abgliche, und e Empfählig vorbereite. De Hauptwert isch, dass d Situations-Erfassig schnäller goot, nöd dass sofort riskanti Aktionene usgfüert werde.

En Service Desk Agent cha standardi Aafroge abwickle, wie Access-Reset, technischi FAQ beantworte, bim Onboarding vo Tools hälfe, oder Tickets mit de richtige Klassifizierig ufmache. Das isch sehr relevant für Shared Services i de IT, wo en höchi Volumen händ. Aber d Grenze müend klar si: Wenn d Aafrog höchi Privilegie, sensibleni Date oder wichtigi Konfigurationsänderige betrifft, muess de Agent bi de Verifizierig und Eskalation stoppe.

En Change Management Agent cha d Readiness vor em Release prüefe. Vili Produktionsproblem chömed nöd, wil de Code komplett falsch isch, sondern wil de Change nöd gnueg vorbereitet isch. De Agent cha Dependencies zwüsched Services prüefe, sicherstelle dass Test und Scans vollständig sind, beurteile ob es offeni Incidents im Zämmehang git, de Release-Window-Zitplan prüefe, und e Risiko-Zämmefassig für de Approver vorbereite. Das macht de Change-Prozess meh evidenz-basiert, nöd nur e manuelli Checkliste.

## Kontrolle, wo nöd verhandelbar sind

Je nöcher de Agent am Codebase, de Pipeline und de Production isch, desto wichtiger sind d Kontrolle. I de IT-Funktion sind Guardrails nöd en spötere Zuesatz. Si sind es Design-Kriterium.

Au wenn de Agent guete Code produziert, dörf er nöd automatisch i de Hauptbranch merge, d Produktionskonfiguration ändere, oder es Deployment usfüere, usser es git e sehr klari Policy und en Approval wo zum Risk-Tier passt. Für Low-Risk-Änderige i Non-Production-Environment cha d Autonomie grösser si. Aber für de Production-Path sött d Firma konservativ si.

Jedi Änderig, wo vom Agent gmacht oder understützt wird, muess durch automatisierti Test, Static Analysis, Security Scan, e Trace zum Requirement oder Ticket, und en menschliche Review je nach Risiko-Level. Das isch nöd nur wichtig für d Qualität, sondern au für d Auditability. Wenn es mal en Incident git, muess d Organisation chönne antworte: Vo welem Requirement chunnt die Änderig, weli Agent sind involviert gsi, welli Kontrolle sind usgfüert worde, und wer hät de letscht Schritt bewilliget.

De Erfolg vo Engineering Agents sött nöd nur a de Mängi vom produzierten Code gmesse werde. Metrike wo relevanter sind, sind Lead Time, Defect Leakage, Incident MTTR, Developer Satisfaction, und Review Burden. De Trade-off muess ehrlich gläse werde. Wenn d Lead Time sinkt, aber d Defect Leakage stigt, isch s Modell no nöd gsund. Wenn s Coding schnäller wird, aber d Review-Last explodiert, verschiebt d Firma nur de Bottleneck.

## Wänn das Muster no nöd passt

Nöd alli Organisatione sind bereit, das Modell z überneh. Es git Bedingige, wo me mit em Scale-Up sött warte: De Codebase isch sehr unordentlich und hät kei Test-Baseline, d CI/CD-Pipeline isch no nöd diszipliniert, s Requirement-Management isch schwach, de Zuegriff uf d Production isch no z wenig kontrolliert, d Observability isch minimal, oder d Engineering-Kultur isch no nöd bereit für evidenz-basierti Reviews. I sonige Situatione beschlünigt en Agent eher d Output, ohni s Kontrollsystem z stärche. S Resultat isch en Delivery, wo schnäll usgseht, aber immer zerbrechlicher wird.

Organisatione, wo am beschte vorbereitet sind, händ normalerwis scho e usgreifti Engineering-Pipeline, klari Coding- und Testing-Standard, e verbundeni ITSM und Observability, und e klari Ownership zwüsched Engineering, Platform, Security und Operations.

Platform Engineering wird e Schlüsselfunktion i dem Modell si. Nöd nur, wil si d Developer-Platform baue, sondern wil si e sichers Tool-Registry, kontrollierte Zuegriff uf CI/CD und Observability, Policy Enforcement, Audit Trail, und Environment wo Draft, Test und Production-Aktion trännt, müend bereitstelle. Ohni Platform-Disziplin werded Software Agents schnäll zu erä Sammlig vo wilder Automatisierig, wo schwirig z auditierä isch.

## Froge zum mitnäh

D Entscheidig, wo jetzt muess troffe werde, isch nöd, weles s beste AI-Tool isch. D Frog isch grundsätzlicher: Gseht d IT-Funktion i öierä Firma AI immer no hauptsächlich als es Coding-Hilfsmittel für Einzelpersonen, oder fangt si scho a, de Software-Delivery, d IT Operations und s Platform Engineering als es messbars, kontrollierts und skalierbars human-agentisches Arbetssystem nöd z gstalte?

Wenn d Antwort no di erschti isch, fanged a mit em Underscheid zwüsched Copilot- und Software-Agent-Agenda. Wähled en erste bounded Workflow – wie Requirement-Ufteilig, Test-Generierig oder Incident-Triage – nöd sofort Merge und automatischs Deploy. Setzed d Autonomie-Grenze pro Agent: Was isch nur Draft, Recommend, Execute with Approval, und was söll gar nöd gmacht werde. Baued d Kontrolle i d Pipeline, nöd i d Präsentation. Und definiered Outcome-Metrike, nöd Vanity-Metrics.

Wenn d Antwort scho di zweiti isch, denn isch di nöchsti Useforderig, sicherzstelle, dass jede Agent klari Grenze hät, jedi Änderig en Kontroll-Pfad hät, und jedi Architekturentscheidig und jedes Produktionsrisiko i de Hand vom Mänsch blibt. Denn am Ändi goot es bi de Transformation vom Delivery-Model nöd drum, wie vill Code d AI produziere cha, sondern wie Mänsch und Agent zäme messbar und verantwortigsvoll schaffe chönd.
