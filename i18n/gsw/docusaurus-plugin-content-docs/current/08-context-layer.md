---
title: "Context Layer: RAG, Knowledge Graph, und Enterprise Memory"
sidebar_position: 8
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Context Layer: RAG, Knowledge Graph, und Enterprise Memory

<ArticleDiagram src="/img/diagrams/08-context-layer.png" alt="Diagramm: Context Layer: RAG, Knowledge Graph, und Enterprise Memory" />

Stell dir vor, dis Finance-Team probiert en Agent z'bruuche, zum bi monatliche Buechabschlöss z'hälfe. De Agent cha uf Date zuegriffe, aber d'Resultat sind komisch: Mängisch holt er alti, nüm gültigi Rächnigspolicie use, mängisch mischt er Date vo verschidnige Entitäte, und mängisch vergisst er, dass gwüssi Schritt scho erledigt sind. Ds Team wird unsicher – cha de Agent würkli hälfe, oder schafft er nu meh Arbet?

Sone Situation isch nöd, wil s'AI-Modell schwach isch. S'Problem isch grundlegender: De Kontext, wo em Agent ggä wird, isch z'roh, z'breit, oder nöd kontrolliert. Vili Team versueche, die Lücke mit immer längere Prompts, immer kompliziertere Aawisige, oder immer aggressiverem Retrieval z'flicke. Ds Resultat isch nöd stabil. Mängisch würkt de Agent gschid, mängisch holt er di falsche Dokument, mängisch vergisst er früenerigi Entscheidige, und mängisch verletzt er Zugriffsgränze.

Für es Unternähme isch Kontext nöd eifach "zuesätzlichi Information". Kontext isch en operativi Schicht, wo entscheidet, ob en Agent relevanti, sicherei, und verantwortbari Entscheidige cha treffe.

## Was isch de Context Layer?

Wenn en Agent schafft, hängt er fast nie nu vo einere Datequälle ab. Für eine Fall muess er vilicht Transaktionsstatus us em ERP, Policy us de Knowledge Base, Entitätsbeziehige us de Stammdate, Entscheidigs-Historie us früenere Workflows, und Zugriffsgränze basierend uf de User-Identität oder em Prozess zämespiele. Das alles cha mer nöd roh gäh.

De Context Layer isch d'Schicht, wo Date und Knowledge in en Kontext verwandlet, wo parat isch für Entscheidige. Si macht vier Sache. Erstens: Selektion – uswähle, was für en bestimmti Ufgab würkli relevant isch. Zweitens: Interpretation – em Information en Gschäftssinn gäh, zum Bischpil unterscheide zwüsche aktive Policy und alte Entwürf. Drittens: Permissioning – sicherstelle, dass de Agent nu Kontext gseht, wo er au dörf. Viertens: Packaging – de Kontext in ere Form präsentiere, wo de Agent effizient cha bruuche.

Ohni die vier Schritte fallt de Agent gern i zwei schlimmi Muster. S'Erste: Er verlässt sich z'stark uf langi Prompts, wo alli Aawisige und de ganz Kontext uf einisch iipacke. S'Zweite: Er verlässt sich z'stark uf es unkontrollierts Retrieval, wo z'viel oder z'wenig Information bringt.

## Wiso de Context Layer en eigene Architektur-Bereich wird

In eifache Copiloten wird Kontext oft als usreichend agluegt, wenn es Modell Dokument cha sueche. Im agentische Unternähme langt das nöd. De Agent muess die aktuell operativi Situation verstoh, die gültige Regle interpretiere, sich an scho gmachti Schritt erinnere, und innert de Kompetenzgränze handle.

Lueg s'Bischpil Finance Close. En Agent, wo bi Ufnahm vo Usname hilft, cha nöd eifach d'Close-SOP läse. Er muess au wüsse, weli Entität grad bearbeitet wird, welli Kontene material sind, welli Usname scho ufgmacht sind, wer früener Entscheidige troffe het, und ob en ähnliche Fall scho mit ere bestimmte Lösig behandlet worde isch.

Es Bischpil us em Procurement. En Agent für Intake-to-PO cha nöd nu d'Ikaufs-Policy läse. Er muess d'Uusgabekategori kenne, die relevante aktive Verträg, die gnenmigte Lieferante, d'Genehmigigs-Gränze, und d'Historie vo Usname für die Gschäftseinheit.

De Context Layer isch d'Brugg zwüsche de Date-Grundlag und de Agent-Uusfüehrig. Ohni die Brugg schaffet de Agent uf Information, wo nöd usreichend sind für gueti Entscheidige.

## RAG für kontrolliertes Knowledge Retrieval

De erst und am hüfigste brucht Teil vom Context Layer isch s'Retrieval-Augmented Generation, oder RAG. Siini Roll isch klar: Er hilft em Agent, relevanti Dokument oder Informationsteil us de Wissensbasis vom Unternähme z'hole, und die Information z'bruuche zum Antworte, Schlüss z'zieh, oder Handlige vorzbereite.

Für vili Aawendige isch das en sinnvolle Iistieg. Service Desk, wo Knowledge-Artikel müend läse, HR Operations, wo Policy müend beantworte, Procurement, wo uf SOP und Verträg müend verwiise, Legal Ops, wo Klausle müend vergliche, oder Finance, wo Accounting-Guidance müend sueche.

Aber guets RAG isch vil schwiriger als eifach Dokument i en Vector Database z'stecke. D'Qualität wird dur s'Design vorgelagert bestimmt, nöd nu dur s'Suechmodell.

Sächs Faktore sind meischtens am wichtigste. Erstens: d'Datequälle. Wenn de Corpus en Mischig us offizielle Policy, alte Entwürf, informelle E-Mails, und Dateie ohni klar Bsitzer isch, bringt s'Retrieval Rüsche. RAG isch nu so guet wie d'Qualität vom Corpus, wo ine gsteckt wird.

Zweitens: s'Chunking. Langi Dokument müend i Einheite ufteilt werde, wo relevant chönd usegholt werde. Chunks, wo z'gross sind, mache s'Retrieval unscharf. Chunks, wo z'chlii sind, risse de Kontext usenand. Für Unternähme sött s'Chunking oft de Struktur vo Gschäftsdokument folge, nöd nu de Zeichezahl.

Drittens: d'Metadate. Metadate sind oft wichtiger als d'Embeddings. Gültigkeitsdatum, Dokumenteversion, Region, Funktion, Vertraulichkeitsstufe, Status (aktiv/inaktiv), und Bsitzer vom Dokument mache s'Retrieval vil präziser.

Viertens: d'Suechstrategie. Ähnlichkeitssuechi (Similarity Search) allein langt oft nöd. Vili Implementierige mache besser, wenn si semantischi Suechi, Keyword-Suechi, Metadate-Filter, und mängisch Query Expansion basierend uf em Workflow-Kontext kombiniere.

Fünftens: s'Reranking. Di erschte Retrieval-Ergebnis müend nöi gordnet werde, damit di relevantiste und autoritativste Teil z'erscht chömed. Das isch wichtig, wenn mehreri Dokument ähnlich usgsehnd, aber en andere Gschäftsstatus händ.

Sächstens: d'Evaluierig vo de Antworte. RAG sött nöd nu nach "d'Antwort tönt guet" beurteilt werde. Es Unternähme muess prüefe, ob de Agent di richtige Dokument usegholt het, ob er no gültigi Policy zitiert, ob er keini widersprüchliche Quelle mischt, und ob d'Antwort würkli für d'Entscheidig hilft.

Eine vo de gföhrlichste Fehler isch, es RAG z'baue, wo technisch gschid isch, aber blind gegenüber Berechtigige. De Agent sött nöd es Dokument hole, nume wil es semantisch relevant isch. Er muess au prüefe, ob das Dokument vom User oder Workflow, wo er vertritt, dörf igsee werde. En HR-Agent sött nöd für alli Mitarbeiter sensibli Kompensations-Dokument usezieh. En Procurement-Agent sött nöd für en normale Aafrager strategischi Verträg ufmache. Permission-aware RAG bedüütet, dass d'Zugriffskontroll scho bim Retrieval aagwändet wird, nöd erst nachdem d'Antwort formuliert isch.

## Knowledge Graph für Gschäftsbeziehige, wo Dokument nöd erfasse

Wenn RAG em Agent hilft, z'finde, was gschribe isch, denn hilft de Knowledge Graph em Agent, z'verstoh, was mit was zämehanget. En Knowledge Graph stellt Entitäte und Gschäftsbeziehige explizit dar. Entitäte chönd Customer, Product, Supplier, Contract, Asset, Location, Policy, Risk, Employee, oder Case si. Beziehige chönd si, dass en Customer en bestimmte Vertrag het, en Supplier Komponente für es bestimmts Product liferet, oder es Product under ere bestimmte Policy fallt.

Für en Enterprise-Agent isch en Graph nützlich, wil vili operativi Entscheidige nöd us eme einzige Dokument oder ere einzige Tabelle chönd troffe werde. Entscheidige hänged oft vo eme Netz us Beziehige ab.

S'klarste Bischpil isch en Supply Chain Control Tower. Wenn e Lieferig Verspötig het, muess de Agent verstoh: Mit wellere Kunde-Bestellig hängt die Sendig zäme? Welli Produkt sind i dere Bestellig? Vo wellne Lieferante hänged die Produkt ab? Het de Kunde en bestimmte SLA oder Priorität? Welli Standort sind betroffe? Und gits en Vertrag oder Eskalations-Policy? Das alles isch eifacher als en Graph z'modelliere denn als en Stapel Dokument.

Es anders Bischpil isch en Compliance Review. De Agent muess beurteile, ob en Transaktion, en Lieferant, en Vertrag, und gwüssi Policy mit bestimmte Risikokategorie zämehänged. Wenn die Beziehige nöd explizit sind, wirds em Agent schwerfalle, konsistenti Schlüss z'zieh.

Vili Organisatione gönd em Knowledge Graph us Wäg, wil si sich es grosses, tüürs, und langs Projekt für s'ganze Unternähme vorstelled. Das isch nötig. En realistischere Aasatz isch, mit eme Domain-Graph für prioritäri Use Cases azfah. En Graph für d'Beziehige zwüsche Lieferant, Vertrag, Kategori, und Policy im Procurement; en Graph für Customer, Product, Ticket, und SLA im Kundedienst; oder en Graph für Entität, Konto, Journal, und Kontrolle im Finance Close.

De Domain-First-Aasatz bringt drei Vorteil: Er bringt schneller Wert, er isch eifacher vom Gschäftsbsitzer z'validiere, und er isch eifacher z'governe, als wenn mer versuecht, s'ganze Unternähme uf einisch z'mappe.

En Graph isch sehr nützlich, aber nöd immer nötig. En Graph lohnt sich normalerwiis, wenn d'Beziehige zwüsche Entitäte würkli d'Entscheidig beiiflusset, wenn Workflows domänenübergriffend sind, und wenn s'Schlussfolgere mit Dokumänt allein nöd langet. En Graph isch vilicht no nöd sinnvoll, wenn de Use Case no eifach und dokumentbasiert isch, d'Gschäftsentitäte no nöd stabil sind, oder d'Organisation no kei klar Date-Bsitzer het.

## Enterprise Memory: Erinnere, ohni Fehler als Wohret z'spiichere

De dritt Teil vom Context Layer isch d'Memory. Memory erlaubt em Agent, Kontext z'behalte, wo nöd immer i eim Prompt oder ere einzige Aafrog verfüegbar isch. Das isch wichtig, wil vili Enterprise-Arbete über mehreri Schritt, mehreri Täg, und sogar über mehreri Team hinweg laufed.

Aber Memory im Unternähme muess diszipliniert verstoh werde. Nöd alles muess erinneret werde, und nöd alli Erinnerige dörfed gliich behandlet werde.

Es git vier Arte vo Memory, wo mer unterscheide muess. Erschtens: Session Memory – de Kontext vo eme Gspröch oder ere Interaktion inere einzige Sitzig. Zum Bischpil, de Agent erinneret sich no, dass de User über en bestimmti Rächnig redt. Session Memory isch nützlich zum es Gspröch kohärent z'halte, aber muess normalerwiis nöd lang gspiicheret werde.

Zweitens: Workflow Memory – d'Erinnerig a de Status vo laufende Arbet. Welli Schritt sind scho gmacht? Welli Dokument sind scho prüeft? Welli Entscheidige sind scho troffe? Wer het scho en Genehmigig ggä? Und welli Usname sind no offe? Das isch extrem wichtig für Workflow wie Finance Close, Procurement Case Management, oder Incident Response.

Drittens: User Memory – d'Vorliebe oder de spezifisch Kontext vomene Benutzer, zum Bischpil es bevorzugts Berichtsformat oder bestimmti Arbeitsmuster. User Memory cha d'Erfahrig verbessere, muess aber vorsichtig verwaltet werde, wil's d'Privatsphäre und d'Fairness betrifft.

Viertens: Institutional Memory – längerfristigs Lernwüsse vo de Organisation. Muster vo hüfige Usname, Behandlige, wo früener funktioniert händ, menschlichs Feedback uf Agent-Empfähligen, und sich widerholends operativs Wüsse. Institutional Memory isch am wertvollste für kontinuierlichi Verbesserig, aber au am riskantischte, wenn's nöd kuratiert wird.

Ohni Memory schaffet de Agent wie mit operative Amnesie. Jedes Mal, wenn en Fall ufgmacht wird, muess de Agent vo vorne afah. D'Übergab zwüsche Sitzige isch schlecht, früenerigi Entscheidige wärded nöd berücksichtigt, menschlichs Feedback goht verlore, und langi Workflow wärded brüchig.

In de IT-Operations sött en Agent, wo sich widerholendi Vorfäll behandlet, sich erinnere, welli Runbook früener funktioniert het, wer de relevanti Genehmiger isch, und welli Systemabhängigkeite hüfig d'Ursach sind. Im Inkasso sött en Agent sich an früenerigi Zahligsverspräche, d'Reaktion vom Kunde, und scho gmachti Folgeaktion erinnere, damit er keini widersprüchliche Kommunikazione verschickt.

Im Unternähme dörf Memory nöd wie en frei Notizzettel ohni Regle behandlet werde. Es git vier minimali Diszipline. Retention: Es muess klar si, was gspiicheret wird, wie lang, und wann's glöscht wird. Privacy: Memory cha sensibli Date enthalte, drum muess d'Spicherig und d'Nutze under schtrenger Privatsphäre- und Zugriffspolicy stoh. Audit: S'Unternähme muess chönne erkläre, welli Memory de Agent bruucht het, zum en bestimmti Empfählig oder Handlig z'generiere. Correction: Memory muess en Mechanismus für Korrekture ha. Wenn de Agent en falsche Schluss gspiicheret het, muess menschlichs Feedback die Erinnerig chönne korrigiere oder markiere.

Memory isch no nöd bereit für en grosse Iisatz, wenn d'Organisation d'Memory-Arte nöd klar unterscheidet, kei Retention-Policy het, menschlichs Feedback nöd i de Korrekturmechanismus flüsst, oder de Agent z'viel Kontext ohni Klassifizierig spiicheret.

## RAG, Graph, und Memory imene Context Layer zämespannen

Die drei Komponente ersetze sich nöd. Si ergänze sich. RAG hilft em Agent, relevantes Knowledge us Dokumänt und em Enterprise-Corpus z'hole. De Knowledge Graph hilft em Agent, d'Beziehige zwüsche Gschäftsentitäte z'verstoh. Memory hilft em Agent, de Kontext über Sitzige, Workflow, und operativs Lernwüsse hinweg kontinuierlich z'halte.

In eme usgriifte Enterprise-Workflow schaffed die drei oft zäme. Imene Procurement-Usnahmefall holt RAG die relevanti Ikaufspolicy und Vertragsklausle, de Graph zeigt d'Beziehige zwüsche Aafrager, Kategori, Lieferant, Vertrag, und Genehmigigsweg, und d'Memory erinneret, dass en ähnliche Fall früener abglehnt worde isch, wil es bestimmts Dokument gfehlt het. Im Finance Close holt RAG d'Accounting-Guidance und d'Close-SOP, de Graph bildet d'Beziehige zwüsche Entität, Konto, Journal, und Kontrolle ab, und d'Memory spiicheret d'Historie vo Usname und früenerigi Entscheidige vom Controller.

Da wird de Context Layer würkli zu ere Uusfüehrigsschicht, nöd nu zu ere Suechschicht.

## Praktischi Folgerige

De Context Layer isch keis Technologie-Projekt, wo mer inere Wuche cha abschlüsse. Er isch en Architekturentscheid, wo bestimmt, ob em Agent vertraut werde cha, operativi Entscheidige z'treffe.

Für de CIO isch d'Fro, ob s'Unternähme scho en Context Layer het, wo cha g'governt werde, oder ob's no uf Prompt Engineering und ad-hoc Retrieval setzt. Für de COO isch d'Fro, welen Kontext de Agent uf prioritäre Workflow würkli bruucht, zum relevanti und sicherei Entscheidige z'treffe. Für de CHRO isch d'Fro, ob d'Privatsphäre-, Fairness- und Korrektur-Policy scho parat sind, wenn de Agent aafoot, User Memory oder Institutional Memory z'spiichere. Für de Transformation Leader isch d'Fro, ob d'agentische Use Cases uf vertrauenswürdigem Enterprise-Kontext ufbaue, oder nu uf ere Demo vo Retrieval, wo überzügend usgseht.

Wenn d'Antworte uf die Froge no unscharf sind, isch di nöchst Priorität nöd, en neue Agent z'zuezfüege. D'Priorität isch, en Context Layer z'baue, wo genau, relevant, und sicher isch. Denn det wird s'operativi Vertraue i de Agent würkli formt.
