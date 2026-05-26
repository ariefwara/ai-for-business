---
title: "Vendor dan Service Provider Model untuk Agentic Enterprise"
sidebar_position: 35
---

# Vendor dan Service Provider Model untuk Agentic Enterprise

Pada fase awal adopsi AI, banyak perusahaan masih bisa bergerak dengan logika yang relatif sederhana: memilih satu model, satu platform, lalu menjalankan beberapa use case internal. Namun begitu organisasi mulai masuk ke **agentic operating model**, lanskapnya berubah cepat. Perusahaan tidak lagi hanya berhadapan dengan satu jenis penyedia. Mereka akan bertemu dengan:

- agent yang tertanam di SaaS enterprise,
- kapabilitas agentic dari hyperscaler,
- platform orchestration dari vendor spesialis,
- layanan implementasi dari system integrator,
- managed services dari provider operasi,
- startup yang menawarkan agent vertikal,
- open-source stack,
- dan tim internal yang membangun agent sendiri.

Hasilnya adalah ekosistem yang sangat kaya, tetapi juga sangat terfragmentasi.

Fragmentasi ini memang mempercepat inovasi. Fungsi finance bisa mencoba agent untuk close support dari vendor aplikasi keuangan. Procurement bisa memakai intake agent dari platform workflow. IT operations bisa memanfaatkan incident agent dari vendor observability atau ITSM. Shared services dan GCC bisa bekerja sama dengan service provider untuk mengoperasikan workflow agentic lintas geografi. Tetapi semakin banyak pihak yang terlibat, semakin besar pula risiko:

- governance menjadi tidak konsisten,
- integrasi ke ERP, CRM, HRIS, dan core systems menjadi rumit,
- data boundary menjadi kabur,
- observability terpecah,
- dan lock-in komersial maupun teknis meningkat.

Karena itu, perusahaan membutuhkan **vendor strategy yang eksplisit**. Bukan sekadar daftar vendor yang “menarik”, tetapi keputusan sadar tentang:
- kapabilitas apa yang dibeli,
- apa yang harus tetap dikendalikan internal,
- kapan memakai managed service,
- bagaimana kontrak disusun,
- dan bagaimana memastikan provider tidak berubah menjadi black box baru di jantung operasi perusahaan.

Artikel ini membahas tiga hal utama: cara mengevaluasi vendor agentic AI, bagaimana memikirkan model komersialnya, dan kapan managed agentic services masuk akal—beserta due diligence yang harus dilakukan sebelum menandatangani kontrak.

## Ekosistem Agentic AI yang Semakin Terfragmentasi

Dalam enterprise architecture tradisional, kategori vendor relatif jelas. Ada vendor aplikasi inti, vendor infrastruktur, system integrator, dan BPO atau managed services provider. Dalam dunia agentic AI, batas-batas itu mulai kabur.

SaaS vendor kini menanamkan agent langsung ke platform mereka. Hyperscaler menawarkan model, orchestration, observability, dan security primitives. Konsultan dan integrator membangun accelerators serta reference implementation. Service provider mulai bergerak ke model **agentic services**, yaitu layanan terkelola yang menggabungkan agent, tool-calling, memory, dan orchestration ke dalam workflow end-to-end. Di sisi lain, startup menawarkan solusi yang sangat tajam untuk domain tertentu, sementara open-source memberi fleksibilitas tinggi bagi tim internal.

Bagi perusahaan, ini menciptakan dua godaan yang berlawanan.

### Godaan pertama: membeli terlalu banyak

Setiap fungsi melihat demo yang menarik lalu membeli solusi sendiri. Finance memilih satu vendor. Customer operations memilih vendor lain. IT memilih stack berbeda. GCC membangun sendiri dengan partner lain. Dalam beberapa kuartal, perusahaan memiliki banyak agent tetapi tidak punya:
- standar identity dan access yang seragam,
- observability lintas vendor,
- policy enforcement yang konsisten,
- atau inventory yang jelas tentang agent mana yang aktif dan menyentuh sistem apa.

Ini adalah bentuk baru dari **agent sprawl**, hanya saja kali ini dipicu oleh vendor.

### Godaan kedua: menunggu terlalu lama

Sebaliknya, ada organisasi yang terlalu takut pada fragmentasi sehingga menunda semua keputusan sampai “pasar matang”. Ini juga berbahaya. Pasar memang bergerak cepat, tetapi operating model perusahaan tidak bisa menunggu sampai semua vendor stabil. Seperti pada gelombang cloud dan platform sebelumnya, pemenang biasanya bukan yang menunggu kepastian penuh, melainkan yang bergerak dengan arsitektur dan governance yang disiplin.

### Prinsip strategis: bedakan lapisan ekosistem

Cara paling sehat adalah memetakan vendor berdasarkan lapisan peran, bukan berdasarkan hype produk. Secara praktis, perusahaan bisa membedakan setidaknya lima lapisan:

1. **Embedded agents di enterprise platforms**  
   Misalnya agent yang hidup di ERP, CRM, HRIS, ITSM, atau platform workflow. Kelebihannya adalah integrasi native dan konteks data yang lebih dekat. Kekurangannya: sering terbatas pada domain platform tersebut.

2. **Agent platform dan orchestration layer**  
   Cocok untuk use case lintas sistem dan lintas domain. Namun membutuhkan disiplin integrasi, policy, dan observability yang lebih tinggi.

3. **Model dan infrastructure providers**  
   Penting untuk performa, keamanan, dan skalabilitas, tetapi jarang cukup sendiri untuk menghasilkan workflow enterprise yang usable.

4. **System integrator dan consulting partners**  
   Berguna untuk desain arsitektur, integrasi, change management, dan operating model. Namun perusahaan harus berhati-hati agar tidak menyerahkan terlalu banyak kontrol desain inti.

5. **Managed agentic service providers**  
   Menawarkan outcome layanan, bukan hanya tool. Ini menarik untuk shared services, customer service, finance operations, atau IT operations—tetapi juga membawa risiko black box jika governance internal lemah.

Dengan pemetaan seperti ini, perusahaan bisa mulai menjawab pertanyaan yang lebih penting: **di lapisan mana kita ingin standardisasi, di lapisan mana kita menerima variasi, dan di lapisan mana kita harus mempertahankan kontrol internal?**

## Cara Mengevaluasi Vendor Agentic AI Secara Serius

Kesalahan paling umum dalam evaluasi vendor agentic AI adalah terlalu fokus pada demo. Demo hampir selalu terlihat meyakinkan: agent memahami instruksi, memanggil tool, memberi jawaban rapi, dan tampak otonom. Masalahnya, operasi enterprise tidak hidup di lingkungan demo. Ia hidup di dunia:
- data yang tidak lengkap,
- policy yang ambigu,
- exception yang berulang,
- permission yang berlapis,
- dan perubahan model yang bisa memengaruhi perilaku sistem.

Karena itu, evaluasi vendor harus bergerak dari **showcase** ke **operational proof**.

### 1. Capability: apa yang benar-benar bisa dilakukan?

Pertanyaan pertama bukan “apakah vendor punya agent?”, melainkan:
- workflow apa yang benar-benar bisa dijalankan,
- level otonomi apa yang didukung,
- apakah agent hanya menjawab atau juga mengorkestrasi tindakan,
- dan apakah kapabilitas itu sudah dipakai di produksi, bukan hanya POC.

Untuk enterprise, capability yang relevan biasanya mencakup:
- reasoning dalam konteks workflow,
- tool calling ke sistem enterprise,
- memory atau state management yang terkendali,
- human approval workflow,
- exception handling,
- dan dukungan untuk multi-step orchestration.

Vendor yang hanya kuat di antarmuka percakapan belum tentu siap untuk operasi end-to-end.

### 2. Integration: seberapa realistis integrasinya?

Banyak solusi agentic terlihat bagus sampai harus terhubung ke ERP, CRM, HRIS, data warehouse, ITSM, atau knowledge base perusahaan. Di sinilah banyak proyek melambat.

Tanyakan secara spesifik:
- konektor apa yang sudah tersedia,
- bagaimana vendor menangani API rate limit, error, dan retry,
- apakah ada dukungan untuk event-driven workflow,
- bagaimana agent memanggil tool dengan permission yang benar,
- dan bagaimana integrasi dipisahkan antara sandbox, test, dan production.

Contoh praktis:  
Dalam **procurement intake**, vendor mungkin bisa mengklasifikasikan request dengan baik. Tetapi jika ia tidak bisa membaca master data vendor, memeriksa policy, dan menulis status ke workflow engine secara andal, nilainya akan terbatas.  
Dalam **finance close**, agent yang pandai merangkum variance tidak cukup jika ia tidak bisa menarik evidence dari beberapa sistem dan menautkannya ke review workflow.

### 3. Data boundary: data masuk ke mana, disimpan di mana?

Ini area yang sering diabaikan sampai legal, security, atau audit masuk terlambat. Perusahaan harus memahami:
- data apa yang dikirim ke model,
- apakah data dipakai untuk training lebih lanjut,
- di mana data disimpan,
- berapa lama retention-nya,
- dan bagaimana pemisahan tenant dilakukan.

Untuk domain seperti HR, finance, customer data, atau regulated operations, pertanyaan ini bukan formalitas. Ia menentukan apakah use case layak dijalankan sama sekali.

### 4. Observability dan auditability: bisakah kita melihat apa yang terjadi?

Vendor agentic yang layak untuk enterprise harus bisa menjelaskan:
- input konteks apa yang dipakai,
- tool apa yang dipanggil,
- keputusan atau rekomendasi apa yang dihasilkan,
- kapan manusia menyetujui atau meng-override,
- dan bagaimana semua itu dicatat untuk audit.

Jika vendor tidak bisa memberi logging yang memadai, perusahaan akan kesulitan saat terjadi:
- policy deviation,
- kesalahan keputusan,
- insiden keamanan,
- atau pertanyaan audit internal.

### 5. Security dan control posture

Perusahaan harus meminta bukti, bukan janji, tentang bagaimana vendor menangani:
- prompt injection,
- tool misuse,
- permission boundary,
- secret management,
- model change management,
- dan incident response.

Pertanyaan yang perlu diajukan sangat konkret:
- bagaimana sistem mendeteksi atau membatasi prompt injection?
- apakah agent bisa dipaksa keluar dari scope?
- bagaimana akses ke tool dibatasi per role dan per use case?
- bagaimana perubahan model atau prompt diuji sebelum live?
- bagaimana pelanggan diberi tahu jika ada perubahan perilaku material?

### 6. Roadmap control: siapa yang memegang arah evolusi?

Ini sering menjadi pembeda antara solusi yang nyaman di awal dan solusi yang sehat untuk jangka panjang. Jika vendor mengubah model, workflow, atau pricing secara sepihak, perusahaan bisa kehilangan kontrol atas operasi yang sudah kritikal.

Karena itu, evaluasi harus mencakup:
- seberapa besar ketergantungan pada model atau stack proprietary,
- apakah ada portability ke model lain,
- apakah prompt, policy, dan workflow logic bisa diekspor,
- dan apakah perusahaan punya hak untuk mempertahankan kontrol atas konfigurasi inti.

### Uji vendor dengan skenario nyata, bukan scripted showcase

Cara terbaik mengevaluasi vendor adalah dengan **scenario-based testing** memakai data dan constraint nyata. Misalnya:

- **Finance close**: minta vendor menangani variance explanation dengan data yang tidak lengkap dan beberapa sumber yang bertentangan.
- **Customer operations**: uji agent pada kasus pelanggan yang emosional, policy ambigu, dan histori interaksi panjang.
- **IT operations**: uji incident triage dengan alert palsu, log yang noisy, dan runbook yang tidak selalu mutakhir.
- **Procurement**: uji intake request yang dokumennya tidak lengkap dan kategori spend-nya abu-abu.

Vendor yang hanya kuat pada jalur ideal akan cepat terlihat.

## Model Komersial: Dari Lisensi dan T&M ke Outcome, Tetapi Tidak Selalu

Agentic AI mulai mendorong perubahan model komersial. Dalam model lama, perusahaan terbiasa membeli:
- lisensi per seat,
- konsumsi infrastruktur,
- atau layanan implementasi berbasis time-and-material.

Dalam model agentic, terutama ketika layanan mulai menyentuh workflow end-to-end, muncul dorongan ke arah:
- pricing per transaction,
- pricing per resolved case,
- pricing berbasis throughput,
- atau bahkan outcome-linked pricing.

Arah ini masuk akal karena agentic AI mengubah hubungan antara tenaga kerja, platform, dan hasil layanan. Namun perusahaan perlu berhati-hati: **outcome pricing terdengar menarik, tetapi sulit jika fondasi pengukurannya lemah**.

### Kapan outcome-linked pricing masuk akal

Model ini lebih cocok jika:
- outcome bisa didefinisikan jelas,
- baseline tersedia,
- faktor eksternal cukup terkendali,
- attribution model disepakati,
- dan data operasional dapat dibagi dengan aman.

Contoh yang relatif lebih masuk akal:
- customer service untuk kategori kasus standar,
- service desk internal untuk request tertentu,
- intake dan routing pada shared services,
- atau workflow finance operations yang cukup stabil.

### Kapan belum tepat

Outcome pricing kurang tepat jika:
- proses masih sangat kacau,
- data klien sendiri belum siap,
- hasil dipengaruhi banyak faktor di luar kontrol provider,
- atau definisi “resolved” dan “successful” belum disepakati.

Dalam kondisi seperti itu, model hibrida sering lebih realistis:
- biaya dasar untuk platform dan operasi,
- ditambah komponen variabel berbasis volume atau outcome tertentu.

### Kontrak harus mengatur lebih dari sekadar harga

Untuk agentic AI, kontrak yang sehat harus mencakup setidaknya:

- **SLA dan service quality**  
  Bukan hanya uptime, tetapi juga kualitas outcome, response time, dan mekanisme eskalasi.

- **Risk ownership**  
  Siapa bertanggung jawab jika agent salah mengambil tindakan, melanggar policy, atau memicu insiden operasional?

- **Incident response**  
  Bagaimana insiden dideteksi, dilaporkan, diinvestigasi, dan diperbaiki?

- **IP dan configuration ownership**  
  Siapa yang memiliki prompt, workflow logic, policy rules, evaluation assets, dan data feedback?

- **Data retention dan usage rights**  
  Berapa lama data disimpan, untuk tujuan apa, dan apakah boleh dipakai untuk melatih model lain?

- **Model change governance**  
  Apakah vendor boleh mengganti model dasar tanpa persetujuan? Bagaimana regression testing dilakukan?

- **Exit rights**  
  Bagaimana perusahaan keluar dari kontrak tanpa kehilangan data, log, konfigurasi, dan continuity operasi?

### Jangan abaikan economics internal

Bahkan jika vendor menawarkan pricing yang menarik, perusahaan tetap harus menghitung economics internal:
- biaya integrasi,
- biaya governance,
- biaya observability,
- biaya review manusia,
- dan biaya perubahan proses.

Sering kali solusi vendor tampak murah di lisensi, tetapi mahal di operating overhead. Sebaliknya, solusi yang tampak mahal di awal bisa lebih sehat jika mengurangi correction rate, rework, dan beban pengawasan.

## Managed Agentic Services: Membeli Tool Saja Tidak Selalu Cukup

Di beberapa domain, perusahaan tidak hanya ingin membeli software. Mereka ingin membeli **kapabilitas operasi**. Di sinilah managed agentic services mulai relevan.

Model ini pada dasarnya menawarkan layanan terkelola yang menggabungkan:
- agent,
- orchestration,
- tool integration,
- memory,
- workflow operation,
- dan manusia untuk oversight serta exception handling.

Bagi banyak perusahaan, ini menarik karena mereka tidak harus membangun semua kapabilitas sendiri. Shared services, GCC, atau fungsi operasi bisa mempercepat transformasi dengan partner yang sudah punya domain expertise dan engineering depth.

### Domain yang paling sering cocok

Managed agentic services biasanya paling masuk akal untuk area seperti:
- **customer service** dengan volume tinggi dan pola kasus berulang,
- **finance operations** seperti AP, AR, close support, atau dispute handling,
- **IT operations** seperti service desk, incident triage, dan change readiness,
- **procurement operations** seperti intake, policy check, dan vendor inquiry,
- atau layanan shared services lintas geografi.

### Tetapi ada satu syarat besar: provider tidak boleh menjadi black box

Ini titik yang sangat penting. Jika perusahaan membeli managed agentic service lalu menyerahkan seluruh eksekusi tanpa integrasi governance internal, maka provider akan berubah menjadi **lapisan operasi yang tidak transparan**. Itu berbahaya.

Perusahaan tetap harus mempertahankan:
- visibility atas workflow,
- akses ke log dan audit trail,
- hak review atas policy dan approval logic,
- kontrol atas data boundary,
- dan forum governance bersama untuk incident, model change, dan performance review.

Contoh:
- Dalam **finance operations**, provider boleh mengelola evidence gathering dan draft exception handling, tetapi controller internal tetap harus memegang akuntabilitas atas keputusan material.
- Dalam **customer operations**, provider boleh menjalankan agentic resolution untuk kasus standar, tetapi policy concession dan escalation threshold harus tetap ditetapkan bersama.
- Dalam **IT operations**, provider boleh mengoperasikan triage dan rekomendasi remediation, tetapi akses ke tindakan produksi harus dibatasi sesuai risk tier.

### Apa yang harus dicari dari service provider

Provider yang layak untuk managed agentic services biasanya menunjukkan tiga hal sekaligus:

1. **Domain expertise**  
   Mereka memahami proses bisnis, exception, dan control point, bukan hanya teknologi AI.

2. **Tech depth**  
   Mereka mampu mengintegrasikan agent ke sistem enterprise, mengelola observability, dan menjalankan lifecycle change dengan disiplin.

3. **Operating discipline**  
   Mereka bisa menunjukkan bagaimana pilot masuk ke produksi, bagaimana ROI diukur, dan bagaimana layanan dijalankan dengan governance yang jelas.

Jika salah satu dari tiga ini lemah, risiko implementasi naik tajam.

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

1. **Petakan ekosistem vendor berdasarkan lapisan peran.**  
   Bedakan embedded agents, platform/orchestration, model provider, integrator, dan managed service provider. Jangan campur semua dalam satu kategori “vendor AI”.

2. **Tentukan area kontrol yang harus tetap internal.**  
   Minimal putuskan siapa yang memegang policy, identity, approval threshold, observability, dan data boundary.

3. **Ubah proses evaluasi vendor dari demo ke skenario operasional.**  
   Minta vendor diuji dengan workflow nyata, data constraint, exception, dan permission model perusahaan Anda.

4. **Pilih model komersial yang sesuai kematangan proses.**  
   Jangan memaksakan outcome pricing jika baseline, attribution, dan data sharing belum siap. Gunakan model hibrida bila perlu.

5. **Jika memakai managed agentic services, bangun governance bersama sejak awal.**  
   Provider tidak boleh menjadi black box. Pastikan ada joint operating review, akses log, incident process, dan exit plan.

### Due diligence checklist untuk vendor atau service provider agentic AI

- [ ] Vendor dapat menjelaskan capability agent pada workflow nyata, bukan hanya demo percakapan.
- [ ] Integrasi ke ERP, CRM, HRIS, ITSM, atau core systems dapat dibuktikan secara realistis.
- [ ] Data boundary, retention, tenant isolation, dan usage rights dijelaskan dengan jelas.
- [ ] Logging, observability, dan audit trail tersedia untuk kebutuhan operasi dan audit.
- [ ] Ada kontrol terhadap prompt injection, permission misuse, dan unauthorized tool calls.
- [ ] Perubahan model, prompt, atau workflow memiliki proses testing dan approval yang jelas.
- [ ] Kontrak mencakup SLA, incident response, IP ownership, data rights, dan exit rights.
- [ ] Baseline dan definisi outcome disepakati sebelum membahas outcome-linked pricing.
- [ ] Provider menunjukkan domain expertise, bukan hanya kemampuan teknis AI.
- [ ] Managed service tidak menghilangkan akuntabilitas internal perusahaan.

### Sinyal bahaya bahwa model vendor Anda belum sehat

- [ ] Keputusan vendor terutama didorong oleh demo yang impresif.
- [ ] Setiap fungsi membeli agent sendiri tanpa arsitektur dan governance bersama.
- [ ] Tidak jelas data apa yang keluar dari boundary perusahaan.
- [ ] Vendor tidak bisa menjelaskan bagaimana logging dan audit dilakukan.
- [ ] Kontrak tidak mengatur perubahan model atau hak keluar.
- [ ] Managed service provider menjalankan workflow penting tanpa transparansi yang memadai.
- [ ] Perusahaan tidak tahu siapa yang memegang policy, siapa yang memegang outcome, dan siapa yang memegang risiko.
- [ ] Harga terlihat menarik, tetapi biaya integrasi, review manusia, dan governance tidak dihitung.

### Pertanyaan reflektif untuk CIO, COO, CPO, CFO, dan GCC leader

**Apakah perusahaan Anda sedang membangun ekosistem agentic yang sengaja dirancang—dengan kontrol, kontrak, dan peran yang jelas—atau hanya sedang mengumpulkan vendor yang masing-masing terlihat canggih, tetapi bersama-sama menciptakan fragmentasi baru di jantung operasi perusahaan?**

Itulah pertanyaan yang harus dijawab sebelum agentic AI benar-benar di-scale lintas enterprise.
