---
title: "Guardrails, Policy Engine, und Human Approval Workflow"
sidebar_position: 15
image: "/img/diagrams/15-guardrails-policy-human-approval.png"
description: "Stell der vor, dini Finance-Abteilig händ agfange, en Agent für de monatlech Abschluss z‘bruuche. De Agent chan Exception identifiziere, Bewiis us verschidene..."
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Guardrails, Policy Engine, und Human Approval Workflow

<ArticleDiagram src="/img/diagrams/15-guardrails-policy-human-approval.png" alt="Diagramm: Guardrails, Policy Engine, und Human Approval Workflow" />

Stell der vor, dini Finance-Abteilig händ agfange, en Agent für de monatlech Abschluss z‘bruuche. De Agent chan Exception identifiziere, Bewiis us verschidene System sammle und en Entwurf für Kommentar vorbereite. Im Pilot lauft alles rund. Aber denn, ohni Vorwarnig, postet de Agent en materiale Adjustment, wo eigentlech nöd ohni Rückspraach mit em Manager hätt döfe mache. D‘Zahle im Finanzbericht ändered sich. Panik bricht us.

Es isch nöd so, dass de AI-Modell falsch funktioniert het. De Modell cha perfekt schaffe. S‘Problem isch d‘Kontrolle: Es het kei Mechanismus gha, wo de Agent stoppet, bevor er en Aktione usgfüert het, wo de Business-State permanent veränderet.

Das isch d‘Fro, wo jedes Unternehmen beantworte muess, bevor es eme Agent Zugriff uf Produktionssystem git: Wie verhinderet mer, dass en Agent falschi Handlige macht, bevor de Schade passiert? Observability, wo mir im letschte Artikel behandlet händ, cha nur luege und erkläre, nachem öppis passiert isch. Zum verhindere, bevor öppis passiert, brucht’s drei Komponente, wo zäme schaffed: Guardrails, Policy Engine und Human Approval Workflow.

Vili Organisatione gsehn Guardrails immer no als Content-Filter – zum gföhrlichi Antworte, sensitives Vokabular oder unpassendi Reaktione blockiere. Das isch wichtig, aber für d‘Enterprise isch das nume die ussersti Schicht. S‘gröschte Risiko vo agentischer AI isch nöd de Satz, wo produziert wird, sondern s‘Tool, wo ufgruefe wird, d‘Date, wo abgruefe wird, und de Business-State, wo veränderet wird. En Agent, wo e interni Fro falsch beantwortet, isch nervig. Aber en Agent, wo falsch e Refund verarbeitet, en neue Lieferant alegt, en Konfigurationsänderig uslöst, en Order-Status ändered oder en Aawisig a s‘Finanzsystem schickt – das isch viil gföhrlicher.

Drum müend Guardrails im agentische Enterprise zur Laufzit (Runtime) aagmacht werde, ganz nöch a de Entscheidig und de Aktione, nöd nume im Policy-Dokument oder im System-Prompt.

## Guardrails sind nöd nume Output-Filter

De gröscht Fehler isch, Guardrails als e Sensur-Schicht am Endi vom Prozess z‘verstah: De Modell produziert e Antwort, und s‘System prüeft, ob de Output sicher isch. Das cha für eifachi Chatbots längge. Für agentischi System isch das z‘spaat. Wenn de Agent scho es Dokumänt abgruefe het, wo er nöd hätt söle, es falschs Tool ufgruefe het, oder e Aktion usgfüert het, wo e Transaktion veränderet, denn hilft s‘Filtere vom Output nüüt me.

Im Enterprise-Betrieb müend Guardrails mindestens a füf Stelle schaffe. Erschtens, Input. S‘System muess prüefe, was de Benutzer oder de Uslöser-Event verlangt. Nöd nume für d‘Sicherheit vom Inhalt, sondern zum sicherstelle, dass de Intent zum Use Case vom Agent passt, d‘Aafrog nöd probiert, de offiziell Prozess z‘umgah, und de initial Kontext längt zum de Workflow starte. Im Procurement zum Bispil sött de Aafrager nöd de Agent bruuche zum direkt e Bestellig (PO) mache, wenn de Prozess eigentlech mit em Intake und de Kategorie-Klassifizierig aafangt. Im HR Operations sött de Agent kei freii Aawisige akzeptiere zum Mitarbeiterdate ohni offizielle Wäg z‘ändere.

Zweitens, Context Retrieval. Guardrails müend kontrolliere, weli Dokumänt, Date und Memory de Agent dörf abruefe. En Finance-Agent dörf di relevanti Accounting-Guidance abruefe, aber nöd alli sensitive Memos über d‘Entitäte use. En Customer-Service-Agent dörf d‘Ticket-History vom aktuelle Kunde gseh, aber nöd Date vo andere Kunde abruefe, nume wills semantisch ähnlich sind. En Legal-Intake-Agent dörf di gültige Vertragsvorlage abruefe, aber nöd alli privilegierte Matter.

Drittens, Tool Access. Nöd alli verfügbare Tool dörfed für alli Situatione bruucht werde. Guardrails müend ischränke, weli Tool vo welem Agent, in welem Workflow, und mit wele Parameter dörfed ufgruefe werde. Im IT Operations dörf de Agent diagnostischi Tool ufruefe und Tickets erstelle, aber nöd automatisch Produktionsänderige durefüehre. Im Customer Operations dörf de Agent Entitlements prüefe und Refund vorbereite, aber nöd Refund über e gwüssi Schwelle usfüehre.

Viertens, Action Execution. Das isch de kritischti Punkt. Guardrails müend prüefe, ob d‘Handlig, wo de Business-State veränderet, erlaubt isch. En neue Lieferant alege, en Journal bueche, e Kreditlimit ändere, e Zahligsblockierig löse, oder en Incident als erledigt schliesse – das alles brucht Kontrolle. Da muess d‘Firma klar unterscheide zwüsched Read, Recommend, Draft und Execute. Vili Use Cases gsehn sicher us, bis de Agent s‘Execute-Recht überchunt ohni adäquati Runtime-Kontrolle.

Füftens, Output. Erst nach dene vier Punkt isch de Output-Filter immer no relevant. Er hilft, Datelecks z‘verhindere, sicherzstelle, dass d‘Sprooch passend isch, und z‘prüefe, ob d‘Endantwort Behauptige enthaltet, wo nöd durch Bewiis gstützt sind. Aber de Output-Filter sött als letschti Schicht verstande werde, nöd als de Haupt-Guardrail.

## Guardrails müend zur Laufzit läbe

Vili Unternehmen händ scho SOPs, Approval-Matrixe und Zugriffsrichtlinie. S‘Problem isch, de Agent list kei Governance-Dokumänt wie en Mensch. Damit d‘Kontrolle würkli funktioniert, müend die Regle in Runtime-Mechanisme übersetzt werde: Policy-Check vor em Tool-Call, Parameter-Validierig, Transaktions-Schwelle, Approval-Trigger und Logging vo Entscheidige. Wenn Guardrails nume im Governance-Slide oder im System-Prompt läbed, denn het s‘System kei formelle Weg, de Agent z‘stoppe oder umzleite, wenn er in ere ambiguöse Situation isch.

Im Finance Close hilft de Agent villicht, Exception z‘identifiziere, Bewiis z‘sammle und en Entwurf für Kommentar vorbereite. Gsundi Guardrails erlaubed de Lese-Zugriff uf bestimmti Close-Date, s‘Erstelle vo Kommentar-Entwürf und s‘Routing vo Follow-ups. Aber die gliiche Guardrails müend ablehne oder eskalieren, wenn de Agent probiert, en materiale Adjustment z‘poste, en Accounting-Treatment ohni usreichendi Grundlag uszwähle, oder e Exception ohni minimale Bewiis z‘schliesse.

Es git en Trade-Off, wo mer muess anerkenne. Guardrails, wo z‘strikt sind, chönd de Agent nutzlos mache. Wenn jede chliine Schritt e Approval bruucht oder z‘viil Validierige, denn gönd d‘Benutzer wider zum manuelle Prozess. Drum sött s‘Design vo Guardrails em Risk Tier folge. Für Use Cases wie en interne Knowledge Assistant chönd Guardrails liechter si. Für Use Cases, wo Transaktione, Kunde oder Produktionssystem betreffed, müend Guardrails viil strikter si.

## Policy Engine: Wo Entscheidige über Erlaubnis konsistent troffe werde

Wenn Guardrails d‘Kontrollschicht sind, denn isch d‘Policy Engine d‘Maschine, wo zur Laufzit entscheidt, ob e Handlig erlaubt isch. Eifach gseit, d‘Policy Engine beantwortet Froge wie: Darf de Agent das Tool in däm Kontext (Benutzer oder Workflow) für das Business-Objekt, mit däm Transaktionswert, mit däm Risiko-Level ufruefe, und bruucht’s en menschlechi Approval, bevor er wiitermacht?

Ohni Policy Engine sind vili Kontrolle über de Agent im Prompt, im Applikationscode, in de Tool-Konfiguration und in Team-Gwohnheite verstreut. S‘Resultat isch inkonsistent und schwirig z‘prüefe (auditierbar).

Für d‘Enterprise bruucht d‘Policy-Entscheidig normalerweis e Kombination vo mehrere Faktore. Erschtens, Role und delegierti Authority. Für wen handelt de Agent? Handlet er uf Aawisig vom Benutzer, eme offizielle Workflow oder eme System-Event? Isch sis Mandat no gültig? Zweitens, Business-Kontext. Welches Objekt wird berüehrt? Lieferant, Rächning, Order, Ticket, Vertrag oder Mitarbeiterdate? Verschideni Domäne chönd verschideni Regle ha. Drittens, Transaktionswert oder Materiality. Vili Handlige sind bi nidrigem Wert sicher, aber nöd bi höchem. En chliine Goodwill-Credit dörf villicht automatisch usgfüert werde, aber en grosse Refund muess zum Supervisor. En Standard-Purchase-Request dörf villicht bis zu ere gwüsse Grenze automatisch verarbeitet werde, aber en strategische Iichauf muess für d‘Approval aaghalte werde. Viertens, Risk Level. Einigi Handlige sind reversibel, anderi nöd. Einigi händ en lokale Impact, anderi gönd über System use. D‘Policy Engine muess de Unterschied verstah. Füftens, Regulatory oder Control Requirement. In bestimmte Domäne sind d‘Regle nöd nume interni Präferenze, sondern Compliance-Pflichte – zum Bispil d‘Trennig vo Ufgabe, minimi Bewiis oder d‘Pflicht zur menschleche Review.

Nöd alli Policies müend gliich gmacht werde. Im Allgemeine gits drei Muster. Determinischtischi Regle sind am beste für Sache, wo klar sind und sich strikt formuliere lönd: Transaktionswert über ere gwüsse Schwelle, bestimmti Lieferante-Kategorie, Produktionsänderige zu bestimmte Zite, oder sensitives Date, wo nöd dörfed abgruefe werde. De Vorteil isch, si sind eifach z‘prüefe, z‘teste und z‘erkläre. De Nochteil isch, si werded schnäll kompliziert, wenn de Business-Kontext sehr variiert.

Für ambiguöseri Situatione cha d‘Firma en modellbasierte Classifier bruuche zum d‘Sensitivität vomene Request, s‘Risiko-Level vomene Fall, d‘Wohrschinlichkeit vo Fraud, oder ob de Intent vom Benutzer usserhalb vom Scope isch, z‘bewerte. De Vorteil isch meh Flexibilität für Fäll, wo sich nöd eifach als strikti Regle schribe lönd. De Nochteil isch, si sind schwiriger z‘erkläre, bruuched regelmässigi Evaluierige, und sind nöd als einzigi Kontrolle für Handlige mit höchem Risiko geeignet.

D‘Kombination vo beide isch normalerweis das gsündischt Muster. De Classifier hilft, de Kontext oder s‘Risk-Signal z‘bewerte, und denn setzed determinsitischi Regle d‘Endentscheidig. Im Customer Operations bewertet de Classifier, ob en Fall sensitiv oder potenziell strittig isch, und denn entscheidid e determinsitischi Regle, dass alli sensitive Fäll oder Fäll über ere gwüsse Schwelle in d‘Approval müend.

Eis vo de wichtigste Prinzipie: Jedi Policy-Entscheidig muess en verfolgbare (auditierbare) Fuessabdruck hinterlah. D‘Firma muess chönne erkläre, welli Policy evaluiert worde isch, welli Kontext-Input bruucht worde sind, ob s‘Resultat Allow, Deny, Escalate oder Require Approval isch, und wänn d‘Entscheidig troffe worde isch. Das isch nöd nume für formelli Audits wichtig, sondern au für de täglich Betrieb. Wenn en Benutzer frogt, wiso de Agent e bestimmti Handlig abglehnt het, sött s‘Team nöd antworte, "will s‘System nei gseit het." Si müend d‘Logik und de Kontext chönne zeige.

Stell der vor, en Procurement-Agent bechunnt en Iichaufs-Request. D‘Policy Engine evaluiert d‘Iichaufs-Kategorie, ob de Lieferant approved isch, de Transaktionswert, ob en Vertrag existiert, und d‘Role vom Aafrager. S‘Resultat cha verschide si: Allow für en Standard-Request mit nidrigem Wert und approvedem Lieferant, Require Approval für en höchere Wert, Deny, wenn de Lieferant d‘Due Diligence nöd bestande het, Escalate, wenn d‘Iichaufs-Kategorie ambigu isch oder d‘Policy sich widerspricht. Ohni d‘Ufzeichnig vo de Policy-Entscheidig wird’s d‘Firma schwirig ha, z‘erkläre, wiso zwei ähnlich usgsehendi Request verschide behandlet worde sind.

## Human Approval Workflow: De Mensch chunnt am richtige Punkt ine

Im agentische Enterprise bedüütet Human-in-the-Loop nöd, dass de Mensch alles muess prüefe. Das würd de Nutze vo agentischer AI zerstöre. Was brucht wird, isch en selektive und risikobasierte Human Approval Workflow.

Menschlechi Approval isch normalerweis nötig, wenn d‘Handlig en höche Wert het, sensitiv isch, irreversibel oder schwirig z‘rückgängig mache isch, oder reguliert isch. Das isch kei Zeiche für es Versage vom Agent. Im Gegenteil, es zeigt, dass d‘Firma d‘Grenze vo de Autonomie gsund verstoht.

Einigi Muster, wo fast immer en Approval verdiened: Transaktione über ere materiale Schwelle, Änderige a kritische Stammdate, Entscheidige, wo d‘Rächt vo Mitarbeiter betreffed, Handlige am Kunde, wo potenziell strittig sind, Produktionsänderige mit höchem Risiko, und Entscheidige, wo en formelle professionelle Urteil bruuched. Im Finance: materiale Adjustment, Release vo Zahligsblockierige, oder Treatment vo Exception mit signifikantem Impact. Im Procurement: neue Lieferant, nöd-standard Verträg, oder Iichäuf usserhalb vom Katalog mit grossem Wert. Im Customer Operations: grosse Refund, Goodwill-Credit für VIP-Kunde, oder d‘Lösig vo Complaints, wo potenziell rechtlich sind. Im IT Operations: Konfigurationsänderige i de Produktion, Neustart vo kritische Services, oder Rollback vo Deployment i de Hauptverkehrszit.

Eine vo de hüfigste Fehler isch, en Approval Workflow z‘mache, wo nume e Notifikation schickt: "De Agent empfiehlt Handlig X. Approve?" Das isch schlecht. De menschlich Reviewer wird verwirrt si, muess vili System ufmache, oder stimmt am End blind zue, will er überlade isch. En gsunde Approval Workflow sött em Reviewer de minimal usreichend Kontext geh: d‘Empfählig vom Agent, d‘Bewiis, wo bruucht worde sind, di relevanti Policy, s‘Hauptrisiko, de Confidence oder de Grund für d‘Eskalation, und Alternativ, falls es die git.

En Supervisor, wo en Approval-Request für en Kunde-Refund bechunnt, sött nöd nume de Refund-Betrag gseh. Er bruucht d‘Kunde-History, de Grund für de Refund, di gültige Entitlements, ob es ähnlichi Fäll scho geh het, ob es en Abuse-Signal git, und wiso de Agent nöd automatisch usgfüert het. Mit sonem Kontext wird d‘Approval zu ere sinnvolle Entscheidig, nöd zu re Formalität.

Aber es git en gliich wichtige Trade-Off: Wenn z‘viil Fäll in d‘Approval gönd, verschlechteret sich d‘Zykluszit, de Supervisor wird zum Engpass, d‘Benutzer verlüred s‘Vertraue, und de Agent wird nume no zu re Maschine, wo neui Warteschlange produziert. Drum müend d‘Approval-Schwelle uf Basis vom Risk Tier entworfe werde, nöd us eme übermässige Sicherheitsbedürfnis use. En gsunde Aasatz isch normalerweis: Low Risk – Execute with Monitoring, Medium Risk – Execute with Post-Review oder Sampling, High Risk – Execute with Approval, Very High Risk – Human-Led, Agent Assist only. Das isch viil effektiver, als alli Handlige dur d‘Approval z‘schicke.

Damit d‘Approval nöd zum Hindernis wird, muess d‘Firma e paar Sache explizit entscheide: Wer isch de primär und de Ersatz-Approver, was isch d‘SLA für d‘Approval, was passiert, wenn de Approver nöd reagiert, cha d‘Approval delegiert werde, und wie wird d‘Approval-Entscheidig für s‘nöchscht Lern ufzeichnet. I vili Organisatione isch de Engpass nöd de AI-Modell, sondern d‘Approval-Queue, wo nöd guet entworfe isch.

## Eskalation und Rollback: De Agent muess wüsse, wänn er ufhöre sött

En guete Agent weiss nöd nume, wänn er handle sött, sondern au, wänn er nöd wiitermache sött. Eskalation isch nötig, wenn de Agent uf Bedingige stösst wie nidrige Confidence, Konflikt zwüsched Datequelle, Policy-Ambiguität, inkonsischtenti Tool-Resultat, oder Situatione usserhalb vom definierte Scope. In sonene Fäll isch s‘richtige Verhalte nöd "probier wiiter, bis es klappt," sondern aahalte, de Grund erkläre, und a en Mensch oder en andere Workflow übergeh.

Im Finance Close entdeckt de Agent zwei Quelle vo Guidance, wo für es bestimmts Exception-Treatment widersprüchlich usgsehn. Im Procurement sind d‘Lieferante-Stammdate nöd konsistent mit em aktive Vertrag. Im Customer Operations zeigt d‘Kunde-History es Abuse-Muster, aber di formelle Entitlements gsehn immer no gültig us. Im IT Operations gänd diagnostischi Runbooks widersprüchlichi Resultat, und de potenziell Impact uf d‘Produktion stigt. In allne dene Fäll bedüütet bounded Autonomy, dass de Agent sini Grenze kennt.

Für bestimmti Handlige hört d‘Kontrolle nöd bi de Approval uf. D‘Firma muess au denaa denke, was passiert, wenn d‘Handlig vom Agent falsch isch. Es git drei hüfigi Muster. Erschtens, Rollback. Wenn s‘System e direkti Umkehr understützt, isch das ideal – es Ticket, wo falsch erstellt worde isch, widerrufe, e nöd-produktivi Konfiguration zruggsetze, oder en bestimmte Status vor em Wiitermache widerrufe. Zweitens, Compensation Action. Wenn d‘Handlig nöd direkt umkehrbar isch, bruucht s‘System e Kompensationsaktion – wenn de Agent falsch e Notifikation an en Lieferant gschickt het, bruucht’s e korrigierends Follow-up; wenn de Agent en Kunde-Fall falsch routet het, bruucht’s e Neu-Zuewiisig und erneuti Kommunikation; wenn de Agent en falsche Prozessschritt usglöst het, bruucht’s e neutralisierendi Handlig. Drittens, Manual Remediation Path. Für komplexeri Fäll bruucht d‘Firma en klare manuelle Sanierigswäg: Wer übernimmt, wie wird de Incident ufzeichnet, und wie wird s‘Gelernte wider i d‘Policy oder d‘Guardrails iibaut.

Ohni Rollback oder Remediation Path tendiered Organisatione dezue, entweder z‘vil Angscht vor Autonomie z‘ha, oder umgekehrt z‘vil Vertraue ohni Sicherheitsnetz z‘ha.

## Autonomie-Matrix: En praktische Weg zum Bestimme vo de Grenze vom Agent

De praktischti Weg, die Diskussion abzschliesse, isch d‘Autonomie-Matrix. Nöd alli Use Cases müend uf em gliiche Level si.

Uf em Level Assist hilft de Agent nume, Kontext z‘finde, zämezfasse oder Insight z‘geh. Geeignet für Domäne, wo ambigu sind, Date no nöd stabil, oder Prozess, wo no starch vom menschliche Urteil abhängig sind.

Uf em Level Draft bereitet de Agent Empfählige, Dokumänt oder Handlige vor, aber de Mensch füert si us. Geeignet für früehi Phase vo de Transformation, Domäne mit höchem Kontrollbedarf, oder Prozess, wo mer beschleunige will, ohni s‘Execute-Recht z‘geh.

Uf em Level Execute-with-Approval cha de Agent Handlige vorbereite und usfüehre, nachem en Mensch si genehmigt het. Geeignet für Handlige mit höchem Wert, regulierti Workflows, oder Bereich, wo formelli Kontroll-Bewiis bruucht werde.

Uf em Level Execute-with-Monitoring füert de Agent Handlige automatisch us, innerhalb vo klare Policy-Grenze, und wird denn via Observability und Sampling überwacht. Geeignet für höchi Volumen, nidrigs bis mittlers Risiko, reversibli Handlige, und Domäne, wo d‘Policy gnueg usgreift isch.

Die Matrix hilft de Firma, zwei Extrem z‘vermeide: z‘schnäll volli Autonomie z‘geh, oder de Agent z‘lang im Assist-Modus z‘lah, obwohl de Prozess eigentlech bereit wär.

## Praktischi Implikatione

Nach däm Artikel gits es paar Entscheidige, wo troffe werde müend. Erschtens, bestimm d‘Guardrail-Punkt zur Laufzit. Filtered dini Guardrails nume de Output, oder kontrolliered si scho Input, Retrieval, Tool Access, Action Execution und Output? Zweitens, entscheid über d‘Architektur vo de Policy Engine. Welli Regle müend deterministisch si, weli Bereich dörfed en Classifier bruuche, und wie wird d‘Policy-Entscheidig für d‘Audit ufzeichnet? Drittens, definier d‘Risk Tiers und d‘Approval-Schwelle. Welli Handlige dörfed automatisch usgfüert werde, welli bruuched Monitoring, welli müend en Approval ha, und welli müend menschlich gleitet si? Viertens, entwirf en Approval Workflow, wo würkli bruuchbar isch. Bechunnt de Approver gnueg Kontext, Bewiis, Risiko und Alternative zum schnäll und verantwortlich entscheide? Füftens, bereite Eskalations- und Sanierigswäg vor. Wänn muess de Agent ufhöre, zu wem eskaliert er, und wie wird en Rollback oder e Compensation Action duregfüert, wenn s‘Resultat falsch isch?

Es git es paar Alarmzeiche, dass das Thema no nöd bereit für d‘Skalierig isch. De Agent cha scho Produktions-Tool ufruefe, aber d‘Guardrails sind immer no nume Prompt und Content-Filter. Menschlechi Approval wird für fast alli Fäll bruucht, will d‘Firma de Runtime-Policy no nöd vertraut. Es git kei formelli Ufzeichnig, wiso e Handlig erlaubt, abglehnt oder eskaliert worde isch. De menschlich Reviewer bechunnt en Approval-Request ohni usreichendi Bewiis. Es git kei Rollback-Wäg, wenn de Agent falsch de Business-State veränderet het. D‘Business-, Technologie-, Risk- und Audit-Teams händ verschideni Definitione vo "sicher für automatisch." D‘Autonomie vom Agent wird erhöht wäge Effizienzdruck, nöd wäge Bewiis vo Kontrolle und Qualität.

E reflektivi Frog für CIOs, COOs, CHROs und Transformation Leader: Wenn morn en Agent i dinere Firma e falschi Handlig usfüert, wo en echte Impact uf Kunde, Mitarbeiter oder Transaktione het, chasch du schnäll erkläre, welli Guardrail ihn hätt söle stoppe, welli Policy die Handlig erlaubt het, wer si hätt söle genehmige, und wie s‘System si wider behebt? Wenn d‘Antwort no nöd klar isch, denn isch de nöchscht Fokus nöd, meh Agent z‘schnälle, sondern z‘ersch d‘Control und s‘Runtime-Governance z‘sterke.
