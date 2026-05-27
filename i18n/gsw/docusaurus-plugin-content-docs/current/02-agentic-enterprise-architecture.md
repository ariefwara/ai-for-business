---
title: "Wa isch Agentic Enterprise Architecture"
sidebar_position: 2
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Wa isch Agentic Enterprise Architecture

<ArticleDiagram src="/img/diagrams/02-agentic-enterprise-architecture.png" alt="Diagram: Wa isch Agentic Enterprise Architecture" />

Stell dir vor, dis Finance-Team isch grad am monatliche Abschluss. D Date sind verteilt über ERP, Spreadsheets, wo per Email gschickt worde sind, und manuelli Notize vom Shared Service. Es brucht Täg zum abgliche, Anomalie z'prüefe und d'Freigabe z'hole. Und jetzt stell der vor, es öppis würd de Abschluss-Kalender überwache, Entitäte erkenne, wo no nöd abgliche hend, verdächtigi Journale analysiere, Beleg us verschidene System sammle und em Controller Empfählige vorbereite – alles innert Minute, nöd Täg.

Das tönt spannend. Aber d Frog chunt sofort: Wie söll das funktioniere? Was bruchts, dass so öppis imene Unternehmen würkli lauft, und nöd nur en beeidruckendi Demo isch?

Die Frog bringt eus zum Konzept vo de Agentic Enterprise Architecture. De Begriff tönt villicht technisch, aber de Chärn isch ganz operativ. Es isch en Blaupause, wie es Unternehmen AI Agents über sini bestehende System legt, wie die Agents de Gschäftskontext verstönd, wie si über Enterprise-System handlet und wie alli ihri Aktione gstüüret werded, dass si sicher, prüefbar und skalierbar sind.

Ohni en klari Architektur landet me meistens in einem vo zwei Extrem. S erschti: AI blibt en Chatbot, wo guet antwortet, aber nüt würkli erledigt. S zweiti: De Agent bechunnt z'viel Zuegriff uf System und Date ohni gnüegendi Kontrolle. Beides isch problematisch.

## Drum isch das meh als nume en gschideri Chatbot

Vili Organisatione gsehn agentic AI immer no als natürliche Schritt vo generative AI: gschideri Model, besseri Prompts, komfortableri Oberfläche. Die Sicht isch z'eng.

Was grad passiert, isch eher en Evolution vo Enterprise-Plattforme. ERP, CRM, HRIS und Workflow-Engine sind sit langem s Rückgrat für Transaktione und Kontrolle. Die Plattforme sind für Prozess-Standardisierig baut. Si sind starch bi stabile Regle, aber nöd so flexibel für Orcheschtration über System, Uusnahmebehandlig und operativi Entscheidige, wo dynamische Kontext bruched.

Agentic AI wird zur neue Orcheschtrations-Schicht über dene Plattforme. Es ersetzt nöd ERP oder CRM. Es wird zum Interface und Executor, wo Ziel verstoh cha, Kontext us verschidene Quelle holt, Tools oder API ufruft, mehstufigi Arbeitsschritt usfüert und bimene Mensch um Freigab frogt, wenns nötig isch.

Drum isch agentic enterprise architecture kei AI-Feature-Thema. Es isch es Enterprise-Architektur-Thema: Wo läbt d AI, wie isch si mit de Plattforme verbunde, wie greift si uf Date zue, und wie werded ihri Aktione greglet?

## Drei Sache, wo en Agent vomene Chatbot unterscheided

Eifach gseit, isch agentic enterprise architecture es Systemdesign, wo AI Agents ermöglicht, Kontext z'verstoh, begrenzti Entscheidige z'treffe und über Enterprise-Tools z'handle, zum bestimmti Gschäftsergebnis z'erziele. Da sind drei Schlüsselbegriff.

**Erstens, Kontext verstoh.** En Agent, wo nume en Prompt ohni Enterprise-Kontext bechunnt, isch für reali Operazione nüt wert. Im Unternehmen bedüütet Kontext e Kombination us Transaktionsdate, Dokument und Knowledge Base, Prozess-Metadate, Interaktions-Historie, Policy-Regle, Workflow-Status und Zuegriffsrächt vom Benutzer oder vo de Abteilig. Zum Bispiel bim Procurement: De Agent cha nöd nume wüsse, dass en Rächning blockiert isch. Er muess au wüsse, weli Lieferant debii isch, ob d Bestellig gültig isch, ob en Priis-Unterschied git, wer de Approver für die Kategori isch, weli Toleranz-Policy gilt, und ob ähnlichi Fäll scho passiert sind.

**Zweitens, begrenzti Entscheidige treffe.** S Wort "begrenzt" isch extrem wichtig. En gsundi Agentic-Architektur setzt nöd vorus, dass de Agent alles entscheide darf. S Gegenteil: Si wird mit eme klare Entscheid-Spielraum baut. De Agent darf IT-Tickets klassifiziere und es ersts Diagnose-Runbook usfüere. Er darf en Korrektur-Journal-Entwurf mache und d'Beleg dezue lege. Er darf uf Basis vo de Policy en Mahn-Vorschlag mache. Aber er darf nöd automatisch de Lieferantestamm ändere, grossi Zahlige freigäbe oder kritische Incidents schliesse ohni zuesätzlichi Kontrolle.

**Drittens, über Enterprise-Tools handle.** Das isch de gröschti Unterschied zum Chatbot. De Chatbot antwortet. De Agent handelt. Handle bedüütet, Tool Calling, API, Workflow-Engine, Robotic Action oder Applikations-Integration z'bruuche, zum öppis imene echte System z'mache: es Ticket erstelle, es CRM aktualisiere, en Freigabeprozess uslöse, Date us em ERP zieh, en Query usfüere oder en Aawisig a e anderi Plattform schicke.

Also: Agentic Enterprise Architecture isch nöd über de Bau von eme einzige Super-Agent, wo alles weiss. S Ziel isch es Ökosystem vo kontrollierte, modulare und skalierbare Agents.

## Drei Schichte, wo d Architektur bildet

Am beste verstoh mer die Architektur, wenn mer se i drei Schichte ufteilt: d Agent-Schicht, d Kontext-Schicht und d Kontroll-Schicht. Drunter isch immer de digital Core vom Unternehmen: ERP, CRM, HRIS, Data Platform, Workflow Engine und anderi operativi Applikatione.

### Agent-Schicht: Wer macht was

Nöd alli Agents müend di gliichi Rolle ha. Eine vo de hüfigste Design-Fehler isch, en einzige generische Agent für alli Bedürfnis z'mache. S Resultat isch meistens schlecht: schwirig z'kontrolliere, schwirig z'teste und schwirig fürs Gschäft vertrauenswürdig.

En gsündere Architektur unterscheidet verschidni Agent-Typen. **De Orchestrator Agent** managet de Workflow über mehreri Schritt oder mehreri Agents. Er muess nöd de Experte i jedem Bereich si, aber er weiss d'Arbeitsschritt-Riiefolg, wänn er en Specialist Agent ufrueft, wänn er es Tool brucht und wänn er zum Mensch eskalieren muess. Im Finance Close überwacht de Orchestrator de Abschluss-Kalender, entdeckt Entitäte, wo no nöd abgliche hend, rüeft de Specialist Agent für d'Analyse vo Journal-Anomalie, verlangt Beleg vom Shared Service und schickt die wesentliche Uusnahme zum Controller für d'Freigab.

**De Specialist Agent** konzentriert sich uf en bestimmte Bereich. Zum Bispiel en Agent für Procurement-Policy, en Agent für Vertragsanalys, en Agent für Customer Complaint Triage, en Agent für Root-Cause-Analyse bi IT-Incidents oder en Agent für Supply-Chain-Uusnahme. De Vorteil isch en engere Spielraum, spezifischeres Wissen und eifacheri Bewertig.

**De Task Agent** erledigt atomareri und sich widerholendi Ufgabe. Zum Bispiel Date us ere Rächning extrahiere, Dokument mit eme Standard vergliche, en Fall zämmefasse, bestimmti Fälder imene System usfülle oder d'Vollständigkeit vo Date bi de Onboarding-Prüefig validiere. Task Agents sind guet für Arbeit mit hohem Volumen und relativ klare Regle.

**De Human Interface Agent** interagiert direkt mit Mensche – Mitarbeiter, Manager, Lieferante oder Kunde. Er cha im Chat, Portal, Email, Voice oder imne interne Workspace si. Aber sini Rolle isch nöd nume s Gspröch. Er isch de Iigang zum wiitere Agentic-System. I de HR Operations frogt en Mitarbeiter nach em Status vo sinere Speserückvergütig. De Human Interface Agent verstohd d Frog, prüeft d'Identität, holt de Status us em System, erklärt de Grund für d'Verzögerig und löst, wänn nötig, en Task Agent us, zum fählendi Dokument z'prüefe.

Die Ufteilig i Rolle isch wichtig, wills d'Kontrolle, s Teste und d'Verantwortlichkeite eifacher macht.

### Kontext-Schicht: Wie de Agent d'Wält vom Unternehmen verstohd

En Agent cha nöd guet schaffe, wenn de Kontext z'oberflächlich isch. Drum isch d'Kontext-Schicht oft de Unterschied zwüschet ere imponierende Demo und eme Produktionssystem, wo würkli nützlich isch.

Vili Organisatione fanged mit Retrieval-Augmented Generation (RAG) aa, zum em Agent Zuegriff uf Dokument, SOPs, Policy, Handbüecher oder Wissensbasis z'gäh. Das isch en sinnvolle erschte Schritt, vor allem für wissensintensive Use Cases wie Service Desk, Legal Ops oder Policy Support. Aber RAG allei isch oft nöd gnueg für komplexi Enterprise-Prozess.

Im echte Betrieb muess de Agent Beziehige zwüschet Entitäte verstoh: Welche Kunde hät weli Verträg, weli Rächning ghört zu welere Bestellig, weli Asset sind a welem Standort, weli Rolle hät en Benutzer, weli Risikokategori hät en Lieferant. Da wird en Knowledge Graph oder es Enterprise-Relations-Modell nützlich. Es hilft em Agent, Kontext z' navigiere, wo nöd nume us Dokumente bestoht, sondern au us Beziehige zwüschet Gschäftsobjekt.

En guete Agent list nöd nume s aktuelle Dokument. Er muess sich au an früeneri Entscheidige erinnere, an Muster vo Uusnahme, wo scho passiert sind, an früeneri Interaktione, an Benutzer-Präferenze und an d'Ergebnis vo früenere Aktione. Aber Memory im Unternehmen darf nöd als grenzelosi Erinnerig verstange werde. Si muess als Architektur-Asset verwaltet werde: Was wird gspicheret, wie lang, für weli Zweck, und wer darf dra zuegryffe?

En Komponent, wo oft vergesse wird, isch de Permission-Aware Retrieval. Im Unternehmen dörf nöd alli Kontext vo allne Agents für alli Benutzer gholt werde. De Retrieval muess rächtebewusst si. En HR-Agent dörf keni Kompensationsdate über mehreri Mitarbeiter aazeige ohni Autorisierig. En Procurement-Agent dörf keni strategische Verträg für alli Aafrager ufmache. En Finance-Agent dörf keni Date vo bestimmte Entitäte zieh, wenn de Benutzer s Rächt nöd hät. Wenn s Permission-Modell vom Retrieval nöd usgreift isch, cha de Agent zu ere sehr gföhrliche Date-Leckage werde.

### Kontroll-Schicht: Wie s Unternehmen d'Kontrolle bhalt

Je meh de Agent vom Antworte zum Handle übergoht, desto wichtiger wird d'Kontroll-Schicht. Das isch kei Compliance-Zubehör. Das isch de Chärn vo de Architektur.

En Agent muess en klari Identität ha. S Unternehmen muess wüsse, weli Agent handelt, i wäm sim Name, mit welne Zuegriffsrächt, i welem System und i welem Prozess-Kontext. S Prinzip isch eifach: Gib em Agent nie meh Zuegriff, als er für sine Ufgab brucht. Wenn en Agent für Rächning-Uusnahme volle Zuegriff uf s ganze ERP-Modul hät, isch s Problem nöd bi de AI, sondern bim Architektur-Design.

Nöd alli Aktione dörfed sofort usgfüert werde. En Teil muess under Policy-Regle stoh: Transaktions-Wert-Grenze, Art vo sensitive Date, Confidence-Level vom Modell, Risikokategori oder operativi Usdrukig. Drum brucht d'Architektur en explizite Approval-Workflow. De Agent darf Empfählige und Beleg vorbereite, aber d'Endentscheidig blibt bi Uusnahme bim Mensch.

Jedi Aktion vomene Agent muess noovollziehbar si. Minimal muess s Unternehmen chönne antworte: Weli Agent hät d'Aktion usgfüert, weli Date sind brucht worde, weli Tool oder API isch ufgruefe worde, weli Policy isch aagwändet worde, weli Usgab isch produziert worde, und wer hät, wänn nötig, d'Freigab gäh. Ohni Audit Trail cha s Unternehmen kei Vorfäll erkläre, kei Fehler behebe oder s Vertraue vo Regulierigsbehörde und Auditor ufbaue.

Es Agentic-System cha nöd einisch testet und denn i Produktion gschickt werde. Es brucht en kontinuierlichi Evaluierig: Sind d'Entscheidige vom Agent no korrekt, fählt de Tool Call hüfig, isch d'Latenz z'hoch für d'SLA, eskalieret de Agent z'hüfig, git's en Drift bi de Output-Qualität? Runtime-Monitoring isch au wichtig zum unerwartets Verhalte z'erkenne: sich widerholendi Loops, übermässigi Tool-Ufrüef oder Aktione usserhalb vom normale Muster.

## Design-Prinzipie, wo en gsundi Architektur vo ere brüchige unterscheided

Nachdem mer d'Komponente verstohnd, isch di nächsti Frog: Welii Design-Prinzipie unterscheided en gsundi Architektur von ere brüchige?

**Fang bim Spielraum aa, nöd bi de Fähigkeite vom Modell.** Vili Technik-Teams werded versuecht, bim modernste Modell aazfange und denn es passends Problem z'sueche. De Enterprise-Ansatz muess umgchehrt si: Fang bim Gschäftsergebnis aa, definier de Arbeits-Spielraum vom Agent, und wähl denn d'Fähigkeite, wo nötig sind. En Agent für Customer Refund mit tüfem Risiko brucht nöd di gliiche Fähigkeite wie en Agent für Supply-Chain-Replanning. En klare Spielraum macht s Design sicherer und schneller produktionstauglich.

**Jedi Aktion muess erklärbar und noovollziehbar si.** Im Unternehmen isch es nöd gnueg, dass de Agent Erfolg hät. S Unternehmen muess wüsse, wie er zum Ergebnis cho isch. Wenn en Agent en Kundeclaim ablehnt, muess d'Organisation d'Policy-Grundlag, d'Date, wo brucht worde sind, und de Entscheid-Punkt gseh, wo zur Ablehnig oder Eskalation gfüert hät.

**Human Override muess en Kern-Feature si, kei Notfall-Backup.** En usgschaffti Agentic-Architektur gaht immer devo us, dass es Bedingige git, wo de Mensch überneh muess: tüfe Confidence, unvollständigi Date, Policy verbütet d'Aktion, z'komplexi Uusnahm oder z'grosse Gschäftsiifluss. Human Override isch kei Zeiche vo Misserfolg. Es isch Teil vom gsunde Operations-Design.

**D Architektur muess graceful degradation unterstütze.** Wenn s Modell versagt, es Tool nöd verfüegbar isch oder de Retrieval nöd gnueg Kontext findet, söll s System nöd komplett zämmebreche. Es muess elegant abestufe chönne: vo autonomer Aktion zur Empfählig, vo Multi-Step-Usfüerig zum Entwurf, vo Self-Service zur Übergab a de Mensch. Das isch extrem wichtig für kritische Prozess wie IT Operations, Finance Close oder Customer Operations mit strenge SLA.

**Modular isch besser als monolithisch.** Es modulares Ökosystem vo Agents isch eifacher z'teste, z'ersetze und z'governe als en einzige grosse Agent, wo alles macht. Modularität macht es em Unternehmen au eifacher, Lieferante, Model und Prozessänderige über d'Zit z'manage. De Trade-Off isch, dass Modularität meh Orcheschtration brucht. Aber für grossi Unternehmen isch de Trade-Off meistens wert, wills s Risiko vo Konzentration reduziert und s Skaliere eifacher macht.

## Bispiel für d'Aawändig im Enterprise-Workflow

Damits nöd z'abstrakt blibt, luege mer e paar churzi Bispiel aa.

Im **Finance Close** git en gueti Agentic-Architektur em Agent nöd sofort s Rächt, de Abschluss z'mache. Realistischer isch: En Task Agent zieht d'Abgliche-Date und entdeckt Uusnahme, en Specialist Agent analysiert Journal-Anomalie, de Orchestrator ordnet d'Prioritäte nach Materialität und Termin, de Human Interface Agent kommuniziert mit em Controller, und de Approval-Workflow stellt sicher, dass bestimmti Journale immer vom Mensch freigäh werded. De Wert chunnt vo de beschleunigte Orcheschtration und Uusnahmebehandlig, nöd vo de volle Autonomie.

Im **Procurement** cha de Agent Aafrage klassifiziere, d'Kauf-Policy prüefe, d'Lieferante-Onboarding validiere, en Bestelligs-Entwurf vorbereite und eifachi Rächning-Differenze behandlet. Aber für strategischi Kategorie, Vertragsverhandlige oder Änderige am Lieferantestamm isch en begrenzti Autonomie besser als volli Autonomie.

I de **IT Operations** isch en Agentic-Architektur sehr guet, wenn Observability und Runbook scho usgreift sind. De Agent cha Alerts überwache, relevanti Logs sammle, en erschti Diagnose mache, en Incident eröffne und Risiko-armi Remediation usfüere. Aber wenn d'CMDB durrenand isch, d'Runbook nöd standardisiert sind und d'Admin-Zuegriff nöd greglet sind, beschlünigt de Agent nume s Chaos.

## Hüfigi Fehler, wo immer wider passiered

Vili Organisatione baue Agents, wo i de Demo guet usgsehnd, aber nöd mit eme echte Workflow, SLA und Entscheidigsrächt verbunde sind. S Resultat: De Agent wird ab und zue brucht, aber nie Teil vom operative Betrieb. Wenn de Agent nöd mit eme End-to-End-Prozess verbunde isch, isch er nume en zusätzlichi Schicht, kei Usfüerigsschicht.

Wil me schnelli Resultat wott zeige, gäbed Teams hüfig z'wiiti Service-Accounts. Churzfristig macht das d'Integration eifacher. Mittelfristig schaffts ernsti Sicherheits-, Compliance- und Verantwortlichkeitsrisiko.

Unternehmen konzentriered sich hüfig uf d'Richtigkäit vo de Antworte, vergessed aber s Verhalte vom System z'überwache: Wie vili Tool-Calls passiered, wo de Agent versagt, wänn de Agent z'hüfig eskalieret, und ob d'Aktione vom Agent würkli es Gschäftsergebnis bringed. Ohni Observability weiss d'Organisation nöd, was de Agent tuet, gschweige denn, dass si's verbessere cha.

Nöd alli Prozess bruched en Agent. Für sehr deterministischi Prozess sind normale Workflow oder traditionelli Automatisierig billiger, schneller und verlässlicher. Es Agentic-Pattern isch besser, wenns e Kombination us dynamischem Kontext, hüfige Uusnahme und Orcheschtration über System git.

D'Ambition, en einzige Agent für s ganze Unternehmen z'mache, endet meistens i unkontrollierbarer Komplexität. Besser isch, mit eme klare Domain aazfange, es widerverwendbars Architektur-Muster z'baue und denn schrittwiis z'skaliere.

## Implikatione für CIO, COO und Transformationsfüehrer

Für de CIO bedüütet das, dass d'Enterprise-Architektur nümme nume über Applikatione, Date und Integration rede cha. Es brucht jetzt en expliziti Sicht uf d'Digital-Labor-Schicht: Arte vo Agents, ihri Identität, ihri Zuegriff und ihre Lifecycle.

Für de COO bedüütet das, dass es Prozess-Redesign nöd bi de Vereifachig vom Workflow ufhöre cha. D Frog wird zu: Welie Teil vo de Value Stream wird vom Mensch usgfüert, welie Teil vom Agent, und weli Kontrollpünkt müend immer bhalte werde?

Für de CHRO hät die Architektur Implikatione für d'Arbetskräft. Wenn de Agent zum Executor wird, verschiebt sich d'Mensche-Rolle zur Überwachig, Uusnahmebehandlig, Policy-Design und kontinuierliche Verbesserig. Das bedüütet, dass au d'Job-Design, s Fähigkeitsmodell und d'Leistigsmetrike müend ändere.

Für de Transformationsfüehrer isch d'Kernbotschaft eifach: Trenne d'technischi Architektur nöd vom Operating Model. Wenn die beide separat laufed, hät s Unternehmen entweder Technologii ohni Adoption, oder Adoption ohni Kontrolle.

## Froge, wo me söll mitnäh

Nach däm Artikel gits es paar Froge, wo du i d'Team-Diskussion söllsch mitnäh. **Für de CIO:** Hät dini Enterprise-Architektur de Agent scho als en reali operativi Identität, oder behandlet si en immer no als es Applikations-Feature? **Für de COO:** Welie Prozess isch würkli bereit für d'Orcheschtration dur es Human-Agent-Team, und welie Prozess isch no z'brüchig für Autonomie? **Für de CHRO:** Wenn en Teil vo de Usfüerig zu Digital Labor goht, weli Mensche-Rolle sött me jetzt stärche? **Für de Transformationsfüehrer:** Bisch du am Ufbau von ere skalierbare Grundlag, oder sammelsch du nume Demo, wo nie zum Operating Model werded?

Im nächste Artikel göh mer vom technische Blueprint zu de gliich wichtige Frog: Wenn d'Architektur verstange isch, wie gseht s Operating Model vomene agentic enterprise us, wo würkli lauft?
