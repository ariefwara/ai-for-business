---
title: "Executive Governance Board untuk Agentic AI"
sidebar_position: 37
---

# Executive Governance Board untuk Agentic AI

Ketika perusahaan masih berada pada fase eksperimen AI, governance sering terasa cukup jika ditangani oleh kombinasi steering committee teknologi, risk review ad hoc, dan sponsor bisnis per use case. Namun begitu organisasi mulai bergerak ke **agentic operating model**, pendekatan itu cepat menjadi tidak memadai.

Alasannya sederhana: **agentic AI tidak tinggal di satu kotak organisasi**.

Ia menyentuh:
- prioritas bisnis dan alokasi investasi,
- arsitektur platform dan integrasi ke sistem inti,
- risk, compliance, legal, dan security,
- model layanan shared services atau GCC,
- perubahan peran kerja dan reskilling,
- serta hubungan dengan vendor, system integrator, dan managed service provider.

Dalam artikel-artikel sebelumnya di seri ini, kita sudah membahas operating model, metrik human-agent teams, roadmap scaling, agent factory, vendor model, dan change management. Langkah berikutnya adalah menjawab pertanyaan yang sangat praktis:

**forum eksekutif seperti apa yang dibutuhkan agar agentic AI bisa di-scale tanpa kehilangan arah, tanpa konflik prioritas, dan tanpa governance yang tertinggal?**

Jawabannya bukan sekadar “buat komite baru”. Yang dibutuhkan adalah **executive governance board** dengan mandat yang jelas, komposisi yang tepat, ritme keputusan yang disiplin, dan mekanisme delegasi agar tidak berubah menjadi bottleneck.

## Mengapa Perlu Board Khusus

Banyak organisasi mencoba menempatkan agentic AI di bawah satu fungsi dominan. Kadang di bawah CIO atau CTO karena teknologinya kompleks. Kadang di bawah unit digital atau data karena dianggap bagian dari agenda AI. Kadang di bawah risk karena kekhawatiran kontrol. Kadang di bawah COO karena menyentuh operasi.

Semua pendekatan itu punya logika, tetapi semuanya punya keterbatasan yang sama: **agentic AI melintasi batas fungsi terlalu jauh untuk dikelola secara efektif oleh satu pemilik tunggal**.

### Agentic AI adalah isu operating model, bukan hanya isu teknologi

Jika perusahaan membangun agent untuk:
- finance close orchestration,
- procurement intake dan policy check,
- customer operations case resolution,
- IT incident triage,
- atau supply chain exception coordination,

maka keputusan yang muncul bukan hanya soal model, prompt, atau integrasi API. Keputusan yang muncul justru lebih strategis:
- workflow mana yang layak diubah,
- level otonomi apa yang dapat diterima,
- data dan sistem mana yang boleh diakses,
- siapa yang memegang approval,
- bagaimana value diukur,
- vendor mana yang boleh masuk ke lapisan kritikal,
- dan bagaimana peran manusia akan bergeser.

Itu sebabnya governance agentic AI harus menghubungkan **value, risk, platform, dan workforce** dalam satu forum keputusan.

### Board dibutuhkan untuk menyetujui hal-hal yang tidak bisa diputuskan sendiri oleh domain

Ada beberapa keputusan yang secara alami bersifat lintas-enterprise:
- **risk appetite** untuk bounded autonomy,
- **investment priority** antar-domain,
- **standar minimum** untuk identity, observability, evaluation, dan approval workflow,
- **pendanaan platform bersama**,
- **keputusan vendor strategis**,
- dan **eskalasi insiden atau policy conflict**.

Tanpa forum eksekutif, keputusan-keputusan ini biasanya jatuh ke pola yang buruk:
- domain yang paling cepat bergerak menang sendiri,
- platform team dipaksa mendukung terlalu banyak variasi,
- risk dan legal masuk terlambat,
- HR baru dilibatkan setelah role mulai terganggu,
- finance hanya melihat biaya setelah komitmen vendor telanjur dibuat.

### Tanpa board, shadow agents hampir pasti muncul

Begitu permintaan bisnis meningkat, fungsi-fungsi akan mencari jalan tercepat. Procurement mungkin membeli agent intake sendiri. Customer operations memakai vendor berbeda untuk case automation. IT membangun agent internal dengan akses luas ke tool operasional. Shared services atau GCC menjalankan pilot dengan partner eksternal tanpa standar yang sama.

Hasilnya adalah **shadow agents**:
- agent yang aktif tetapi tidak tercatat resmi,
- integrasi ke sistem inti yang tidak melewati pola standar,
- penggunaan data sensitif tanpa review yang memadai,
- dan konflik prioritas antara domain, platform, dan control functions.

Masalahnya bukan hanya keamanan. Masalahnya adalah perusahaan kehilangan **strategic control** atas lapisan eksekusi baru yang sedang tumbuh di jantung operasi.

### Board bukan simbol governance; ia adalah mekanisme scale

Board yang baik membantu perusahaan menjawab pertanyaan yang sulit tetapi penting:
- use case mana yang benar-benar layak di-scale?
- mana yang harus dibatasi?
- mana yang perlu dihentikan?
- kapan platform bersama perlu didanai?
- kapan vendor tertentu terlalu berisiko?
- kapan workforce impact sudah cukup besar untuk memerlukan intervensi CHRO dan COO?

Tanpa forum seperti ini, organisasi biasanya bergerak dalam dua ekstrem: terlalu lambat karena semua orang menunggu kepastian, atau terlalu cepat dengan governance yang tertinggal.

## Mandat Board: Apa yang Harus Diurus, dan Apa yang Tidak

Kesalahan umum dalam membentuk governance board adalah membuat mandat yang terlalu luas. Akibatnya, semua agent kecil harus lewat board, semua keputusan menumpuk, dan organisasi mulai melihat governance sebagai penghambat.

Board agentic AI harus punya mandat yang **tajam**, bukan total.

## Fokus pada keputusan high-risk, high-value, dan cross-enterprise

Mandat inti board sebaiknya mencakup enam area.

### 1. Portfolio approval dan investment priority

Board harus menilai portofolio agentic AI sebagai portofolio enterprise, bukan kumpulan proyek terpisah. Artinya, board meninjau:
- use case mana yang memberi value paling nyata,
- mana yang membutuhkan redesign proses sebelum AI,
- mana yang bergantung pada platform bersama,
- dan mana yang tidak layak diteruskan.

Contoh:
- CFO ingin memperluas agent dari close support ke AP exception handling.
- COO ingin mempercepat customer operations resolution.
- CIO ingin mendanai observability dan policy layer.
- GCC leader ingin membangun reusable services untuk beberapa fungsi.

Semua ini valid, tetapi tidak semuanya bisa dibiayai sekaligus. Board dibutuhkan untuk memutuskan urutan, bukan sekadar menyetujui semua permintaan.

### 2. Risk tiering dan bounded autonomy

Tidak semua agent perlu diperlakukan sama. Board harus menyetujui kerangka **risk tiering** yang membedakan:
- agent low-risk dengan scope sempit dan tanpa tindakan material,
- agent medium-risk yang menyentuh workflow operasional penting,
- agent high-risk yang dapat memengaruhi transaksi, kepatuhan, data sensitif, atau keputusan material.

Board tidak perlu menilai setiap prompt. Tetapi board harus menyetujui:
- kategori risiko,
- level otonomi yang diperbolehkan per kategori,
- approval threshold,
- dan kondisi eskalasi.

Contoh:
- agent yang hanya merangkum knowledge article internal mungkin cukup lewat delegated governance.
- agent yang merutekan purchase request bernilai rendah bisa memakai template standar.
- agent yang menyentuh posting finance, supplier action, customer concession, atau tindakan IT produksi harus masuk review yang lebih tinggi.

### 3. Platform funding dan standard enterprise

Banyak nilai agentic AI tidak akan muncul jika perusahaan hanya mendanai use case domain tanpa mendanai fondasi bersama. Board harus memutuskan investasi pada:
- identity dan access control untuk agents,
- observability dan audit trail,
- evaluation harness,
- policy engine,
- integration patterns ke ERP, CRM, HRIS, ITSM, dan core systems,
- serta agent registry dan lifecycle control.

Ini penting karena domain sering melihat platform sebagai biaya tambahan, padahal tanpa platform bersama perusahaan akan jatuh ke agent sprawl.

### 4. Governance standards

Board perlu menetapkan standar minimum yang berlaku lintas domain, misalnya:
- setiap agent harus punya owner bisnis, owner teknis, dan risk owner;
- setiap agent harus tercatat di registry;
- setiap high-risk use case harus punya audit trail dan human approval path;
- setiap perubahan material harus melewati testing dan release discipline;
- setiap vendor harus memenuhi persyaratan data boundary, logging, dan control posture tertentu.

Standar ini tidak harus membuat semua use case identik. Tetapi ia harus cukup kuat untuk menjaga konsistensi enterprise.

### 5. Vendor dan ecosystem decisions

Keputusan vendor tertentu tidak boleh dibiarkan tersebar tanpa koordinasi, terutama jika menyangkut:
- platform agentic utama,
- model provider strategis,
- managed agentic services,
- atau integrator yang akan membangun pola reusable lintas domain.

Board harus menilai trade-off seperti:
- kecepatan versus lock-in,
- embedded agent di SaaS versus orchestration layer independen,
- managed service versus kapabilitas internal,
- vendor spesialis domain versus platform enterprise yang lebih generik.

### 6. Workforce implications

Ini area yang sering terlambat dibahas. Padahal agentic AI mengubah:
- kapasitas kerja,
- desain peran,
- KPI supervisor,
- kebutuhan reskilling,
- model layanan shared services,
- dan dalam beberapa kasus struktur organisasi GCC atau operations.

Board tidak perlu mengelola training harian. Tetapi board harus memastikan bahwa keputusan scale selalu disertai jawaban atas pertanyaan:
- role mana yang berubah,
- siapa yang perlu dilatih,
- bagaimana metrik kerja akan disesuaikan,
- dan apakah perubahan ini memerlukan intervensi change management yang lebih besar.

## Apa yang tidak boleh menjadi mandat board

Agar tidak menjadi bottleneck, board **tidak boleh**:
- menyetujui setiap agent low-risk,
- meninjau desain prompt satu per satu,
- menggantikan peran architecture review board, security review, atau procurement committee yang sudah ada,
- atau menjadi forum operasional mingguan untuk semua isu delivery.

Board harus fokus pada keputusan yang:
1. lintas fungsi,
2. material terhadap value atau risk,
3. membutuhkan trade-off eksekutif.

## Delegated governance untuk low-risk agents

Agar skala tetap mungkin, perusahaan perlu menerapkan **delegated governance**. Artinya:
- low-risk agents bisa disetujui di level domain atau program office,
- selama mereka memakai template standar,
- berada dalam batas otonomi yang telah ditetapkan,
- dan tidak menyentuh data atau tindakan material.

Contoh delegated governance yang sehat:
- agent FAQ internal HR,
- summarization untuk knowledge worker,
- routing awal untuk tiket internal non-sensitif,
- drafting awal untuk komunikasi standar tanpa keputusan material.

Dengan model ini, board menjaga arah dan kontrol, tetapi tidak menghambat throughput delivery.

## Komposisi Board: Siapa yang Harus Duduk di Meja

Board agentic AI yang efektif bukan forum teknologi yang ditambah satu-dua orang bisnis. Ia harus mencerminkan kenyataan bahwa agentic AI adalah agenda enterprise.

## Komposisi inti yang ideal

### Sponsor bisnis senior
Biasanya COO, CFO, atau eksekutif bisnis yang memegang agenda transformasi lintas fungsi. Tanpa sponsor bisnis yang kuat, board akan jatuh menjadi forum teknologi dan kontrol, bukan forum value realization.

### CIO atau CTO
Mewakili platform, arsitektur, integrasi, dan keputusan teknis strategis. Mereka penting untuk memastikan bahwa keputusan bisnis tidak menciptakan utang arsitektur yang tidak terkendali.

### COO
Sangat penting karena banyak use case agentic hidup di operasi: shared services, customer operations, supply chain, IT operations, dan workflow lintas fungsi.

### CHRO
Peran ini sering diremehkan. Padahal perubahan role, reskilling, job architecture, dan performance model tidak bisa ditangani belakangan. CHRO perlu hadir terutama saat use case mulai memengaruhi model kerja secara nyata.

### CISO
Karena agent membawa isu identity, access, tool calling, data exposure, dan threat surface baru.

### CRO, compliance, atau risk leader
Untuk memastikan bounded autonomy, control design, dan risk appetite tidak diputuskan secara implisit oleh tim delivery.

### Legal
Terutama penting untuk data usage, accountability, vendor contract, IP, dan implikasi regulasi.

### Data leader atau CDO
Untuk memastikan kualitas data, data product readiness, dan governance konteks tidak tertinggal dari kecepatan use case.

### Finance
Bukan hanya untuk mengawasi biaya, tetapi untuk menilai business case, platform funding, dan value realization lintas portofolio.

## Domain owner hadir sesuai agenda

Board inti tidak harus terlalu besar setiap saat. Praktik yang sehat adalah:
- anggota inti hadir tetap,
- **domain owner** hadir ketika use case mereka dibahas.

Misalnya:
- controller atau finance transformation lead saat membahas close agent,
- CPO atau procurement operations lead saat membahas intake-to-PO,
- customer operations head saat membahas case resolution,
- CIO operations lead saat membahas IT incident agents,
- GCC leader saat membahas scaling melalui shared services.

Ini menjaga diskusi tetap relevan tanpa membuat board terlalu berat.

## Board perlu didukung program office, bukan bekerja dari nol

Board yang baik hampir selalu didukung oleh **agentic AI program office** atau transformation office khusus. Fungsi ini sangat penting karena board tidak boleh menghabiskan waktu untuk mengumpulkan data dasar.

Program office menyiapkan:
- decision paper,
- scorecard portofolio,
- risk summary,
- status incidents,
- dependency platform,
- vendor assessment,
- dan workforce impact note.

Tanpa dukungan ini, rapat board akan dipenuhi update verbal, bukan keputusan yang berkualitas.

## Apa yang dilakukan program office

Secara praktis, program office bertugas:
- mengelola intake use case yang perlu naik ke board,
- memastikan template business case dan risk assessment konsisten,
- mengonsolidasikan metrik value, quality, risk, adoption, dan cost,
- menyiapkan rekomendasi keputusan,
- melacak action item lintas fungsi,
- dan menjaga hubungan antara board, domain squad, platform team, risk, HR, dan vendor.

Dalam organisasi besar, program office ini bisa berada di bawah transformation office, digital office, enterprise AI office, atau GCC transformation hub. Yang penting bukan nama organisasinya, tetapi kemampuannya menjadi **mesin koordinasi eksekutif**.

## Decision Cadence: Seberapa Sering Board Harus Bertemu

Governance board yang terlalu jarang bertemu akan tertinggal dari kecepatan perubahan. Yang terlalu sering dengan agenda yang buruk akan melelahkan eksekutif tanpa menghasilkan keputusan.

Karena itu, ritme harus dibedakan antara **portfolio cadence** dan **launch gate cadence**.

## Cadence bulanan untuk portfolio review

Untuk kebanyakan perusahaan, **rapat bulanan** adalah ritme yang sehat untuk meninjau:
- value realized dari use case yang sudah live,
- status use case yang sedang pilot,
- insiden atau policy deviation,
- kebutuhan investasi platform,
- risiko vendor,
- hambatan adopsi,
- dan prioritas gelombang berikutnya.

Rapat bulanan cukup untuk menjaga arah strategis tanpa membuat board tenggelam dalam detail operasional.

## Cadence mingguan untuk launch gate high-risk saat fase intensif

Jika perusahaan sedang dalam fase scale yang agresif, terutama ketika beberapa high-risk use case akan go-live, board atau sub-komite yang diberi mandat bisa bertemu **mingguan** untuk:
- launch gate high-risk agents,
- review readiness kontrol,
- menyetujui exception terhadap standar,
- atau menangani eskalasi insiden material.

Penting dicatat: forum mingguan ini tidak harus selalu seluruh board inti. Bisa berupa **delegated executive gate** dengan anggota yang relevan, selama mandatnya jelas.

## Agenda yang seharusnya dibahas

Board agentic AI sebaiknya tidak terjebak pada demo. Agenda yang sehat biasanya mencakup enam blok.

### 1. Value realized
- outcome bisnis apa yang benar-benar membaik,
- use case mana yang menunjukkan adopsi sehat,
- mana yang economics-nya memburuk,
- mana yang perlu dihentikan atau dipersempit.

Contoh:
close agent mungkin mempercepat evidence gathering tetapi correction rate draft commentary masih tinggi. Procurement intake agent mungkin berhasil menurunkan salah routing, tetapi adopsi business requester masih rendah karena input form belum diperbaiki.

### 2. Incidents dan control effectiveness
- policy deviation,
- unauthorized access attempt,
- tool misuse,
- audit finding,
- atau near miss yang perlu tindakan korektif.

Board tidak perlu membahas semua insiden kecil, tetapi harus melihat pola dan implikasi kebijakan.

### 3. Policy changes
Misalnya:
- perubahan risk tiering,
- perubahan approval threshold,
- pembaruan standar logging,
- atau keputusan untuk membatasi jenis tindakan tertentu sampai kontrol lebih matang.

### 4. Vendor risks dan ecosystem dependency
- vendor mana yang menjadi single point of dependency,
- perubahan kontrak atau pricing,
- isu data residency,
- perubahan model yang memengaruhi perilaku agent,
- atau kebutuhan exit planning.

### 5. Adoption blockers dan workforce signals
- tim mana yang correction burden-nya terlalu tinggi,
- role mana yang KPI-nya belum selaras,
- area mana yang membutuhkan training tambahan,
- atau domain mana yang resistensinya menunjukkan masalah desain, bukan sekadar masalah komunikasi.

### 6. Next wave selection
Board harus memutuskan:
- use case mana yang naik ke gelombang berikutnya,
- mana yang menunggu fondasi,
- mana yang perlu redesign proses dulu,
- dan mana yang tidak layak diteruskan.

## Template agenda governance board

Berikut template agenda yang praktis untuk rapat bulanan board:

### 1. Pembukaan dan keputusan yang diminta
- ringkasan keputusan yang perlu diambil hari itu
- perubahan sejak rapat sebelumnya

### 2. Portfolio scorecard
- status use case: pilot, live terbatas, scale, hold, stop
- value realized versus target
- quality, risk, adoption, dan cost summary

### 3. High-risk use case review
- readiness launch
- exception terhadap standar
- keputusan go / hold / redesign

### 4. Incident dan risk review
- insiden material
- near miss
- tren policy deviation
- tindakan korektif dan owner

### 5. Platform dan architecture decisions
- kebutuhan funding
- dependency integrasi
- observability, identity, evaluation, policy layer

### 6. Vendor dan legal/commercial review
- keputusan vendor strategis
- isu kontrak
- data boundary dan accountability

### 7. Workforce dan change review
- role impact
- reskilling progress
- adoption blockers
- kebutuhan intervensi change management

### 8. Next wave prioritization
- use case baru
- keputusan investasi
- dependency lintas fungsi

### 9. Penutup
- keputusan final
- action owner
- tanggal dan fokus rapat berikutnya

## Trade-off yang Harus Diakui

Membentuk board tidak otomatis membuat governance lebih baik. Ada trade-off yang harus dikelola secara sadar.

### Risiko menjadi forum seremonial
Jika board hanya menerima update tanpa keputusan tegas, ia akan kehilangan kredibilitas.

### Risiko menjadi bottleneck
Jika semua hal harus naik ke board, delivery akan melambat dan shadow agents justru meningkat.

### Risiko terlalu risk-heavy
Jika board didominasi fungsi kontrol tanpa sponsor value yang kuat, organisasi akan aman tetapi stagnan.

### Risiko terlalu business-heavy
Sebaliknya, jika board hanya mengejar scale dan ROI tanpa disiplin kontrol, insiden besar tinggal menunggu waktu.

### Risiko workforce dibahas terlambat
Banyak board fokus pada use case dan platform, tetapi lupa bahwa perubahan role, KPI, dan kapasitas kerja adalah bagian dari keputusan scale. Ini kesalahan yang mahal.

Board yang sehat bukan yang paling ketat atau paling cepat. Board yang sehat adalah yang mampu **membuat trade-off secara eksplisit**.

# Checklist Praktis

## Keputusan yang perlu diambil sekarang

1. **Tentukan apakah perusahaan sudah membutuhkan executive governance board khusus.**  
   Jika use case agentic sudah melintasi lebih dari satu domain, menyentuh sistem inti, atau mulai memengaruhi workforce dan vendor model, jawabannya biasanya ya.

2. **Definisikan mandat board secara sempit tetapi strategis.**  
   Fokuskan pada portfolio approval, risk tiering, platform funding, governance standards, vendor decisions, dan workforce implications.

3. **Bangun delegated governance untuk low-risk agents.**  
   Jangan biarkan board menjadi jalur persetujuan untuk semua use case. Gunakan template standar dan risk tiering agar throughput delivery tetap sehat.

4. **Tetapkan komposisi inti lintas fungsi.**  
   Minimal libatkan sponsor bisnis, CIO/CTO, COO, CHRO, CISO, risk/compliance, legal, data leader, dan finance. Undang domain owner sesuai agenda.

5. **Bentuk agentic AI program office sebagai mesin pendukung board.**  
   Tanpa decision paper, scorecard, dan tracking lintas fungsi yang rapi, board akan tenggelam dalam update operasional.

## Checklist readiness singkat

- [ ] Perusahaan memiliki lebih dari satu domain agentic AI yang aktif atau akan aktif.
- [ ] Ada kebutuhan keputusan lintas bisnis, teknologi, risk, legal, HR, dan finance.
- [ ] Risk tiering untuk agents sudah mulai didefinisikan.
- [ ] Low-risk use case dapat diproses melalui delegated governance.
- [ ] Platform bersama membutuhkan keputusan pendanaan lintas domain.
- [ ] Vendor agentic AI mulai menjadi keputusan strategis, bukan pembelian lokal semata.
- [ ] Workforce impact mulai terlihat pada role, KPI, atau model layanan.
- [ ] Program office atau transformation office siap menyiapkan scorecard dan decision paper.
- [ ] Ada ritme bulanan untuk portfolio review dan mekanisme lebih cepat untuk high-risk launch gate.

## Sinyal bahaya bahwa governance eksekutif belum memadai

- [ ] Setiap domain membeli atau membangun agent sendiri tanpa inventory resmi.
- [ ] Konflik prioritas antara use case domain dan investasi platform terus berulang.
- [ ] Risk, legal, atau HR baru dilibatkan menjelang go-live.
- [ ] Tidak ada forum yang bisa memutuskan risk appetite dan bounded autonomy lintas fungsi.
- [ ] Vendor strategis dipilih per domain tanpa pandangan enterprise.
- [ ] Board yang ada terlalu teknis, terlalu legalistik, atau terlalu operasional sehingga tidak mampu membuat trade-off strategis.
- [ ] Low-risk dan high-risk agents diperlakukan sama, sehingga governance menjadi lambat atau justru longgar.
- [ ] Tidak ada keputusan tegas untuk scale, redesign, hold, atau stop.

## Pertanyaan reflektif untuk CEO, COO, CIO, CHRO, dan risk leaders

**Jika dalam 12 bulan ke depan perusahaan Anda memiliki puluhan agent yang menyentuh finance, procurement, customer operations, IT, dan shared services, siapa sebenarnya yang hari ini berwenang memutuskan trade-off antara value, risk, platform, vendor, dan workforce impact?**

Jika jawabannya masih kabur, maka board itu belum ada—meskipun rapat-rapatnya mungkin sudah banyak.
