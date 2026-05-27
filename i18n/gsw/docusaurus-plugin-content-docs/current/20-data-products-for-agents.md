---
title: "Data Products für AI Agents"
sidebar_position: 20
description: "Vili Team, wo mit agentic AI aafönd, gönd devo us, si sige parat, wil d Date scho vorhande sind. Es het en Data Lake, es Warehouse, es BI-Dashboard oder en grosse..."
image: "/img/social/20-data-products-for-agents.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Data Products für AI Agents

<ArticleDiagram src="/img/diagrams/20-data-products-for-agents.png" alt="Diagramm: Data Products für AI Agents" />

Vili Team, wo mit agentic AI aafönd, gönd devo us, si sige parat, wil d Date scho vorhande sind. Es het en Data Lake, es Warehouse, es BI-Dashboard oder en grosse Dokumente-Index. Für traditionelli Bericht und Analysen längt das. Aber wenn de Agent würkli iigsetzt wird, chömed d Problem. De Agent list Date und triffed denn en Entscheid, wo falsch isch. Nöd will s Modell schlächt isch, sondern will d Date nöd so verpackt sind, dass de Agent se sicher und konsistent cha verstah.

Das isch es Problem, wo mä i de Praxis immer wider gseht. Es Finance-Team wott, dass en Agent bim Close hiiift, aber d Trial-Balance-Date sind en Mischmasch us vorläufige und definitive Zahle. Es Procurement-Team wott, dass en Agent Bestellige bearbeitet, aber d Definition vo "approved vendor" isch im Sourcing-System en anderi als im ERP. Es Customer-Operations-Team wott, dass en Agent Reklamazione beantwortet, aber de Status "active customer" het kei einheitlichi Definition. D Date sind da, aber de Agent cha se nöd richtig bruuche.

Was de Agent bruucht, sind nöd alli Rohdate. De Agent bruucht Data Products und Knowledge Products, wo en chline Bedütig hend, en Owner hend, messbari Qualität, Zugriffsregle, wo zur Laufzit chönd usgwärtet werde, und gnueg stabil sind, zum Handlige uszlöse. Das isch de Wechsel vo "Data Availability" zu "Agent Usability".

## Vo verfüegbare Date zu Date, wo de Agent cha bruuche

Bis jetz hend moderni Date-Programm sich druf konzentriert, Date z sammle, z speichere und de Zugriff z ermögliche. Das macht Sinn für Reporting und Analytics. Aber en Agent schafft nöd wie en menschliche Analyst. En Analyst cha mit Ambiguität umgoh, es paar Dashboards ufmache und de Kontext sälber interpretiere. En Agent cha das nöd. Er bruucht en explizite Input: Was stelled die Date dar? Wie aktuell sinds? Wänn dörf me se bruuche? Für welen Zweck? Und wer isch verantwortlich, wenn d Definition sich ändered?

S Konzept vom ene "agent-ready data product" isch us däm Bedürfnis entstande. Es Dataset wird zum Data Product, wenn es nöd nume Date enthaltet, sondern au en operative Vertrag, wo's bruuchbar macht. Für en Agent muess dä Vertrag no strenger si. Mindeschtens bruucht es Data Product für Agent en klari und stabil Schema, dokumentierti Semantik, en Business- und en Technical Owner, en Erwartig a d Aktualität (Freshness), es Qualitäts-Limit, en grundlegendi Lineage, en Access Policy und, falls relevant, erlaubti Aktione oder erlaubti Nutzige. Ohni die Element gseht de Agent nume en Hufe Fälder ohni Bedütig.

De Underschied zwüsched "Data Availability" und "Agent Usability" muess klar si. Es Invoice-Table isch vilicht im Warehouse verfüegbar. En Customer-API isch vilicht aktiv. Es SOP-Dossier isch vilicht für RAG indexiert. Technisch gseh sind d Date verfüegbar. Aber cha de Agent se sicher und richtig bruuche? Nöd unbedingt. Beim Finance Close sind d Trial-Balance-Date, d Journal-Adjustments und de historisch Kommentar verfüegbar. Aber wenn de Agent nöd weiss, welli Zahle vorläufig und welli definitiv sind, welli juristischi Entität grad bearbeitet wird, oder wänn s Close-Fäischter offiziell zue isch, denn wird us de Verfüegbarkeit nöd automatisch en Nutzbarkeit.

Für en agentic Workflow isch es Data Product meischtens nützlicher, wenn's in einere vo dene drei Forme verpackt isch. Erschtens: en Domain-API oder en Service, wo scho iigschränkt isch, wie `customer_entitlement_summary` oder `approved_vendor_profile`. Die Form isch guet, wenn de Agent operativi, strukturierti Date bruucht, wo regelmässig vorchömed. Zwöitens: en curated analytical view, wie en View uf usständigi Invoices mit ere standardisierte Definition vo "overdue". Die Form isch guet, wenn de Agent über Metrike oder Business-Status nohdenke muess. Drittens: es event-basierts Product, wie es Shipment-Delay-Event oder es Failed-Payment-Event. Die Form isch guet für Agent, wo event-driven schaffed.

Je kurierter es Data Product isch, desto höcher sind Usability und Governance, aber d Flexibilität bi de Erforschig sinkt. Für en Agent in Produktion isch dä Trade-Off normalerweise vertretbar. De Agent bruucht nöd di gliich Erforschigsfreiheit wie en menschliche Analyst. De Agent bruucht Klarheit und Zueverlässigkeit.

## Semantic Contracts: Bedütig vereinheitliche, nöd nume Format

Vili Organisatione hend scho es Schema Registry oder e API-Dokumentation. Das isch wichtig, aber nöd gnueg. De Agent muess nöd nume wüsse, dass es es Fäld mit Name `revenue`, `margin` oder `customer_status` git. De Agent muess wüsse, was die Bedütig fürs Gschäft isch.

En Semantic Contract isch d Schicht, wo d Bedütig vo jedem Fäld oder Objekt erklärd, di gschäftliche Regle, wo dra sind, di erlaubti Nutzig, d Annahme und d Iischränkige, und d Bedingige, under dene d Date nöd für gwüssi Entscheidige dörfed bruucht werde. De Semantic Contract beantwortet Froge, wo normalerweise im Chopf vomene Domain-Expert läbed, nöd im technische Schema.

Ohni Semantic Contract cha de Agent liecht Begriff falsch interpretiere, wo eifach usgönd. `Revenue` cha booked revenue, billed revenue, recognized revenue oder net revenue bedüte. `Margin` cha gross margin, contribution margin oder margin nach ere bestimmte Ufteilig bedüte. `Active customer` cha bedüte, dass öpper in ere bestimmte Periode en Transaktion gha het, no en aktive Vertrag het, oder no nöd formell churned isch. `Overdue invoice` cha bedüte, dass s Fälligkeitsdatum überschritte isch, d Gnadenfrist abgloffe isch, oder nume gältet, wenn de Dispute-Status nöd aktiv isch. En erfahrene menschliche Analyst weiss die Unterschied normalerweise us em organisatorische Kontext. De Agent nöd. Wenn de Semantic Contract nöd explizit isch, wird de Agent d Lücke mit Schlussfolgerige fülle, wo oft plausibel tönd, aber operativ falsch sind.

Im Enterprise sött de Semantic Contract idealerweise Teil vonere Semantic Layer si, wo d Sprach zwüsched BI und Analytics, operative Applikatione, AI Agents und Business-Benutzer vereinheitlicht. Das isch wichtig, wil vili Date-Konflikt nöd würkli technischi Qualitätsproblem sind, sondern Definitionsproblem. Im Shared-Services-Finance chönd s Controllership-Team, s FP&A-Team und de Close-Assistant-Agent de Begriff "material variance" mit verschidnige Bedütige bruuche, wenn d Semantic Layer nöd standardisiert isch. In de Supply Chain cha "available inventory" on-hand, available-to-promise oder de Bestand nach em Sicherheitsbestand bedüte. Wenn de Replenishment-Agent nöd di richtig Definition weiss, sind sini Empfählige falsch.

De Semantic Contract muess am strengste si bi Data Products, wo für Entscheidige bruucht werded, wo mehreri Funktion betreffed, wo Transaktione oder Genehmigige berüered, wo vo Agent bruucht werded, zum Handlige uszfüere, oder wo in regulierte Domäne wie HR, Finance, Legal und Customer Data sind. Für explorativi Use Cases oder interni Assistant mit tüfem Risiko cha de Semantic Contract weniger streng si. Aber sobald de Agent en würkliche Workflow beiiflusst, muess de Semantic Contract als Teil vo de Kontrolle behandlet werde, nöd als optionali Dokumentation.

## Permission-Aware Retrieval: Zugriff muess em Kontext folge

En Agent dörf nöd nume Date näh, wil si im Index, Lake oder Vector Store sind. De Zugriff muess folgem: Wer isch de User oder de Principal? Wel Role und delegierti Autorität het er? Wel Workflow lauft grad? Für welen Zweck sölled d Date bruucht werde? Und wie sensibel sind d Date? Das isch de Chärn vom Permission-Aware Retrieval.

Vili RAG- oder interni Search-Implementierige fanged mit eme eifache Muster a: Indexier alli Dokument, und nimm denn die, wo semantisch am relevantschte sind. Für es Enterprise isch das gföhrlich. S relevantschte Dokument isch nöd automatisch s Dokument, wo am meischte dörf zugegriffe werde. Im HR-Betrieb cha en Onboarding-Agent nach de Policy für Ferie oder Benefit sueche. Wenn s Retrieval nume uf semantischi Ähnlichkeit setzt, cha de Agent es Dokument über Kompensation oder en andere Mitarbeiter-Fall finde, wo er nöd sött gseh. Im Legal-Berich cha en Contract-Assistant-Agent en Vertrag finde, wo inhaltlich sehr relevant isch, aber in ere andere Jurisdiktion, eme andere Business Unit oder eme Matter mit Privileg-Iischränkig isch. Im Customer Service cha de Agent d Historie vonere andere, ähnliche Kundin finde, obwohl de Kontext vom User nume für en bestimmte Account gilt.

En hüfige Fehler isch, d Zugriffskontrolle nume bim Indexiere aazwende. Aber d Zugriffsrächt chönd sich ändere, je nachdem, wel User de Agent ufruft, wel Kanal bruucht wird, i welere Phase vom Workflow mä isch, oder für welen Zweck. Drum muess s Permission-Aware Retrieval zur Laufzit usgwärtet werde. Praktisch bedütet das, dass es Data Product oder Knowledge Product Metadate mitfüere muess, wie d Klassifikation vo de Sensitivität, de Owner, s Business Unit, d Jurisdiktion, s erlaubti Publikum und d Nutzigsregle. De Laufzit-Agent muess denn prüefe, ob de aktuell Kontext d Bedingige erfüllt, zum die Date z hole.

Für agentic Systems isch Role-Based Access (RBAC) elai oft z grob. Zwei Lüt mit de gliiche Role chönd nöd automatisch di gliiche Date für de gliiche Zweck bruuche. En Manager dörf d Date vo sim Team für es Performance-Review gseh, aber nöd automatisch für en Kompensations-Untersuechig. En Finance-Agent dörf Invoice-Details für d Exception-Behandlig läse, aber nöd für en Vendor-Zämmefassig über mehreri Entitäte ohni en entsprechende Uftrag. Permission-Aware Retrieval sött idealerweise näbe de Role und de Identität au de Purpose berücksichtige.

Permission-Aware Retrieval macht s Ganze komplexer. D Metadate müend richer si, d Integration vo IAM und Policy Engine muess enger si, d Latenz cha stiige, und de Index-Design wird ufwändiger. Aber für Domäne wie HR, Finance, Legal, Customer Data und regulierti Operations isch dä Trade-Off kei optionali Zuezahl. Es isch d Mindescht-Aaforderig, damet de Agent nöd zum ene neue Wäg für Dateleck oder Kontrollverstöss wird.

## Qualität und Freshness: De Agent muess wüsse, wänn Date nöd bruuchbar sind

Eis vo de praktischste Risike bi agentic AI isch nöd, dass s Modell halluziniert, sondern dass de Agent uf Basis vo Date handelt, wo veraltet, unvollständig, nöd synchronisiert oder grad in eme Übergangszuestand sind. Für en Enterprise-Workflow cha das grossi Schäde aarichte.

Im Procurement macht de Agent en Vendor-Empfählig uf Basis vomene Status "approved", wo no nöd us em Due-Diligence-System synchronisiert isch. Im Finance stellt de Close-Assistant-Agent en Kommentar us vorläufige Zahle zäme, obwohl d definitive Zahle scho anderst sind. Im Customer Operations verspricht de Agent en Refund uf Basis vomene Order-Status, wo no nöd aktualisiert isch. Im IT Operations bruucht de Incident-Triage-Agent es CMDB, wo nüm akkurat isch, und leitet d Remediation zum falsche System. In allne dene Fäll isch s Problem nöd s Modell. S Problem isch, dass s Data Product nöd gnueg Signale für Qualität und Freshness mitgibt.

Es Data Product für Agent sött mindeschtens vier Mechanisme ha. Erschtens: Quality Checks – grundlegendi Validierige wie Pflichtfälder, Schema-Konformität, referenzielli Integrität und kei extremi Abwichige i de Wärtverteilig. Zwöitens: en Freshness Indicator – de Agent muess wüsse, wänn d Date s letschte Mal aktualisiert worde sind, wel Refresh-Zyklus erwartet wird, und ob d Date no im Fenster für d Nutzig sind. Drittens: Anomaly Detection – wenn es en ufällige Uusschlag oder es unüeblichs Muster git, sött de Agent nöd automatisch d Date als gültig betrachte. Viertens: es Fallback-Verhalte – wenn d Qualität oder d Freshness d Schwelle nöd erreiched, muess de Agent wüsse, was er tuet: aahalte, zuesätzlichi Date aafordere, en alternative Quelle bruuche, oder zu me Mönsch eskaliere.

En Fähigkeit, wo oft überse wird, isch, dass de Agent muess chönne säge: "D Date sind nöd gnueg." Vili Team sind z sehr defür fokussiert, dass de Agent immer en Antwort git. Aber im Enterprise isch s richtige Verhalte oft, aazhalte. En AP-Exception-Agent sött en Mismatch nöd klassifiziere, wenn de Goods-Receipt no nöd verbuecht isch. En HR-Agent sött de Benefit-Status nöd beantworte, wenn d Eligibility-Date no nöd definitiv sind. En Supply-Chain-Agent sött kei Rerouting empfähle, wenn de Shipment-Feed no nöd aktualisiert isch. Us Governance-Sicht isch en Agent, wo weiss, wänn er aahalte muess, wertvoller als en Agent, wo immer selbschtsicher usgseht.

Je strenger d Schwelle für Qualität und Freshness sind, desto sicherer sind d Entscheide vom Agent, aber desto meh Fäll gönd in de manuelle Weg oder zur Eskalation. Umkehrt: z laschi Schwelle erhöhed d Automationsrate, aber au s Risiko vo falsche Entscheidige. D Schwelle müend pro Use Case feschtgleit werde. En interne Knowledge Assistant cha weniger strengi Freshness-Toleranze ha. Refund, Payment, HR-Aktion oder Production-Remediation bruuched viel strengeri Schwelle.

## Knowledge Products für unstrukturierti Date

Nöd alli Kontext für en Agent chönd us Tabälle und API. I vline Enterprise-Workflow chömed di wichtigste Quelle us SOPs, Policy-Dokument, Verträg, Email-Archiv, Knowledge-Artikel, Runbooks und interne Memos. S Problem isch, dass vili Organisatione das alles nume als Dokument für de Index behandlet. Für agentic Systems längt das nöd. Die Dokument müend als Knowledge Products behandlet werde.

Es Knowledge Product isch en Sammlig vo unstrukturierte Inhalt, wo kuriert isch, damet de Agent se sicher und zueverlässig cha bruuche – komplett mit Metadate, Ownership und Nutzigsregle. Wenn s Data Product d Frog "Was isch d Zahl oder de Status?" beantwortet, hilft s Knowledge Product bi de Frog "Weli Regle, Prozess oder Kontext gelted?"

Für en Agent sind d Metadate vomene Dokumänt oft genau so wichtig wie de Inhalt sälber. Metadate, wo sehr wichtig sind, sind s Effective Date, de Owner, s Business Unit, d Jurisdiktion, de Dokumenttyp, d Klassifikation/Sensitivität, de Superseded-Status, de Approval-Status und d Source of Truth. Ohni die Metadate cha s Retrieval es Dokumänt finde, wo thematisch richtig isch, aber kontextuell falsch. Im Legal und Procurement cha en Vertragsvorlage inhaltlich relevant si, aber nöd für s Land oder d Business Unit gälte, wo grad bearbeitet wird. Im HR cha en alti Benefit-Policy sehr ähnlich si wie di nöi, aber scho ersetzt si. Im IT Operations cha es altes Runbook technisch no relevant si, aber nüm zur aktuelle Produktions-Architektur passe.

En Anti-Pattern, wo recht hüfig isch, isch, alli Emails z indexiere und z hoffe, dass s Ergebnis guet wird. Organisatione indexiere s Email-Archiv, de Shared Drive und alti Dokument und hoffed, dass de Agent di bescht Antwort findt. S Resultat isch oft schlächt: s Retrieval isch voller Rüüsch, veralteti Dokument gönd mit, Kontext widerspreched sich, und de Agent cha schwer unterscheide zwüsched ere offizielle Policy und eme informelle Gspröch. Für es Enterprise muess es Knowledge Product kuriert si. Nöd jedes Dokumänt verdient, Kontext für en Agent z si. Manchmal isch di bescht Entscheidig, de gröscht Teil vom Archiv nöd i d Retrieval-Layer z neh.

Im Finance Close chönnt es guets Knowledge Product die geltendi Accounting-Policy, de Close-Kalender, d SOP für d Exception-Behandlig, offizielli Kommentar-Vorlage und interni, validierti FAQ enthalte. Im Customer Operations chönnt es Knowledge Product d Refund-Policy, d Entitlement-Regle, s Eskalations-Playbook, freigeeni Antwort-Richtlinie und no aktivi Product-Issue-Bulletins enthalte. Im IT Operations chönnt es Knowledge Product offizielli Runbooks, kurierti Postmortems, no geltendi Service-Dependency-Notes und di relevanti Change-Policy enthalte.

## Implikatione für Architektur und Governance

Sobald Date und Knowledge als Produkt für Agent behandlet werded, chömed e paar direkti Implikatione.

Erschtens: De Ownership muess klar si. Jedes Data Product und jedes Knowledge Product bruucht en Business Owner für d Definition und di erlaubti Nutzig, en Technical Owner für d Lieferig, s Schema und d Qualität, und wenn nötig en Risk- oder Compliance-Owner für sensibli Domäne. Ohni Owner wird de Agent d Date bruuche, wo verfüegbar sind, aber niemer isch würkli verantwortlich, wenn d Definition sich ändered oder d Qualität sinkt.

Zwöitens: De Katalog muess Teil vo de Control Plane si. D Firma bruucht en Katalog, wo nöd nume d Existänz vomene Data Product notiert, sondern au de Semantic Contract, d Freshness-Erwartig, de Qualitäts-Status, d Access Policy und d Risk-Stuefe. So cha d Agent-Plattform s Data Product als en governable Abhängigkeit behandle, nöd als en ad-hoc Verbindig.

Drittens: D Evaluierig vom Agent muess au s Data Product prüefe. Wenn de Agent versagt, söll mä nöd immer em Modell d Schuld gäh. Oft lyt d Ursach i de semantische Ambiguität, z wenig Metadate, ere schlächte Freshness oder eme Permission, wo zur Laufzit nöd mitgange isch. D Evaluierig für en Agent sött Froge umfasse: Isch s bruchte Data Product würkli s richtige? Isch de Semantic Contract klar gnueg? Funktionieret de Fallback, wenn d Qualität sinkt? Und haltet s Retrieval d Policy ii?

## Nöchsti Schritt

Nach däm Artikel chönt me es paar Froge is Team bringe. Wel Workflow het am hüfigste Problem, wil d Date nöd guet verpackt sind? Wel Data Product isch am kritischste für de erscht Agent, wo mä wott ufsetze? Wer wird de Owner für das Data Product si? Sind d Semantic Contracts für Metrike und Business-Status scho dokumentiert? Wie stellt mä sicher, dass de Agent kei Date nimmt, wo er nöd dörf? Und am wichtigste: Weiss de Agent, wänn er aahalte muess, wil d Date nöd zueverlässig gnueg sind?

En agentic Enterprise ufzbaue isch nöd nume e Frog vom Modell, de Orchestrierig oder em Tool Calling. Es goht au drum, d Enterprise-Date i Produkt z verpacke, wo de Agent mit de gliiche Disziplin cha bruuche, wie mä API, Workflow und Sicherheitskontrollene verpackt. D Firmene, wo das verstönd, werded schneller vo imponierende Demos zu würkli vertrauenswürdige Operatione cho.
