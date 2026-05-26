---
title: "Reference Architecture untuk Enterprise Agent Platform"
sidebar_position: 17
---

# Reference Architecture untuk Enterprise Agent Platform

Pada artikel-artikel sebelumnya, kita sudah membahas identity, observability, guardrails, approval workflow, dan lifecycle management. Semua itu menjawab pertanyaan penting tentang **bagaimana agent dikendalikan**. Namun ketika perusahaan mulai membawa lebih dari satu use case ke production, muncul pertanyaan yang lebih struktural:

**apakah kita sedang membangun beberapa aplikasi agent, atau sedang membangun platform enterprise untuk menjalankan agent secara aman dan terukur?**

Perbedaannya besar.

Satu agent untuk procurement intake atau finance close memang bisa dibangun relatif cepat. Tetapi begitu perusahaan ingin menambah agent untuk customer operations, IT operations, shared services, atau supply chain, pola lama “setiap tim membangun sendiri” akan segera menimbulkan masalah:
- integrasi tool berulang,
- kontrol akses tidak konsisten,
- logging dan audit berbeda-beda,
- evaluasi sulit dibandingkan,
- dan pada akhirnya muncul **agent sprawl**.

Di titik inilah perusahaan membutuhkan **enterprise agent platform**: fondasi bersama yang menyediakan runtime, kontrol, observability, evaluasi, dan governance untuk banyak agent lintas domain.

Artikel ini menyusun arsitektur referensi yang bisa dipakai sebagai dasar implementasi. Bukan sebagai diagram vendor, melainkan sebagai **cara berpikir arsitektural** agar agentic systems dapat dioperasikan seperti kapabilitas enterprise, bukan kumpulan eksperimen.

## Mengapa Butuh Platform, Bukan Proyek Satuan

Banyak organisasi memulai dengan benar: memilih satu use case bernilai, membangun pilot cepat, lalu membuktikan manfaat. Masalah muncul ketika keberhasilan awal itu direplikasi tanpa disiplin platform.

Tim finance membangun agent close sendiri. Tim procurement membuat tool registry sendiri. Tim customer service memakai model gateway berbeda. Tim IT operations membuat logging sendiri. Secara lokal, semuanya tampak masuk akal. Secara enterprise, hasilnya adalah fragmentasi.

### Bedakan agent application dan enterprise agent platform

Pembedaan ini penting.

**Agent application** adalah solusi untuk use case tertentu. Misalnya:
- agent AP exception handling,
- agent procurement intake-to-PO,
- agent customer complaint resolution,
- agent incident triage di ITSM.

Ia berisi workflow, prompt, tool, konteks, dan UI yang spesifik untuk domain tersebut.

Sementara itu, **enterprise agent platform** adalah lapisan bersama yang dipakai banyak agent application. Platform ini tidak menyelesaikan proses bisnis tertentu secara langsung. Ia menyediakan capability standar seperti:
- identity dan access control,
- model gateway,
- tool registry dan tool execution,
- context retrieval,
- memory dan state management,
- observability,
- evaluation harness,
- deployment dan rollback,
- policy enforcement,
- registry dan lifecycle governance.

Tanpa pembedaan ini, perusahaan sering salah arah. Mereka mengira sedang membangun “platform”, padahal sebenarnya hanya membuat agent pertama dengan banyak komponen custom yang sulit dipakai ulang. Atau sebaliknya, mereka terlalu lama membangun platform generik tanpa use case nyata, sehingga menjadi proyek infrastruktur kosong.

### Platform adalah jawaban atas tiga masalah skala

Pertama, **reusability**. Capability seperti model routing, permission-aware retrieval, audit logging, dan approval orchestration tidak perlu dibangun ulang untuk setiap agent.

Kedua, **control consistency**. Jika semua agent melewati policy enforcement, observability, dan identity pattern yang sama, governance menjadi jauh lebih kuat.

Ketiga, **operating leverage**. Tim platform dapat mengelola cost, latency, incident, dan lifecycle secara terpusat, sementara domain team fokus pada logic bisnis.

### Kapan platform belum perlu terlalu berat

Tidak semua organisasi harus langsung membangun platform penuh. Jika perusahaan masih pada satu atau dua pilot yang belum menyentuh sistem inti, pendekatan ringan bisa cukup. Namun begitu agent mulai:
- memanggil API enterprise,
- mengakses data sensitif,
- mengeksekusi tindakan,
- atau dipakai lintas fungsi,

maka pola platform bersama menjadi kebutuhan, bukan kemewahan.

## Komponen Inti Runtime: Tempat Agent Benar-Benar Berjalan

Lapisan pertama dalam arsitektur referensi adalah **runtime layer**. Di sinilah agent menerima trigger, menalar, mengambil konteks, memanggil tool, dan menghasilkan tindakan.

### 1. Orchestrator

Orchestrator mengelola alur kerja agent:
- menerima trigger dari user, event, atau workflow,
- memecah tugas menjadi langkah-langkah,
- menentukan kapan model dipanggil,
- kapan tool digunakan,
- kapan manusia diminta approval,
- dan kapan proses dihentikan atau dieskalasi.

Pada use case sederhana, orchestrator bisa ringan. Tetapi untuk workflow enterprise seperti finance close atau supply chain exception management, orchestrator menjadi penting karena prosesnya multi-step, penuh handoff, dan sering melibatkan beberapa sistem.

Contoh:
- di **finance close**, orchestrator dapat mengurutkan langkah pengambilan data rekonsiliasi, klasifikasi exception, drafting commentary, lalu routing ke controller;
- di **IT operations**, orchestrator dapat menggabungkan event monitoring, diagnostik, runbook, dan approval engineer.

### 2. Model gateway

Model gateway adalah komponen yang sering diremehkan, padahal sangat penting untuk enterprise. Fungsinya bukan sekadar “menghubungkan ke model”, tetapi:
- memilih model yang sesuai untuk task tertentu,
- mengatur fallback jika model utama gagal,
- menerapkan logging standar,
- mengontrol cost dan latency,
- dan menjaga konsistensi kebijakan penggunaan model.

Tanpa model gateway, setiap agent cenderung memanggil model secara langsung dengan pola berbeda-beda. Akibatnya, perusahaan kehilangan kontrol atas biaya, kualitas, dan auditability.

Model gateway juga penting untuk strategi multi-model. Tidak semua langkah butuh model yang sama. Task klasifikasi sederhana mungkin cukup memakai model yang lebih ringan, sementara reasoning kompleks atau synthesis lintas dokumen mungkin butuh model yang lebih kuat. Di sinilah gateway membantu menyeimbangkan kualitas, kecepatan, dan biaya.

### 3. Tool registry dan tool execution service

Dalam enterprise agent platform, tool tidak boleh diperlakukan sebagai daftar API bebas pakai. Harus ada dua lapisan berbeda:

- **tool registry**: katalog tool yang tersedia, metadata, owner, izin, risk tier, dan kontrak penggunaannya;
- **tool execution service**: lapisan runtime yang benar-benar mengeksekusi tool call setelah validasi.

Tool execution service seharusnya memastikan bahwa setiap aksi agent melewati:
- validasi parameter,
- permission check,
- policy evaluation,
- audit logging,
- dan jika perlu approval workflow.

Ini sangat penting untuk mencegah agent bertindak langsung ke ERP, CRM, HRIS, atau ITSM tanpa kontrol yang memadai.

Contoh:
- agent procurement boleh memanggil tool untuk membuat draft purchase request, tetapi tool execution service dapat menolak eksekusi jika vendor belum approved;
- agent customer operations boleh menyiapkan refund, tetapi eksekusi ditahan jika nilai melewati threshold policy;
- agent IT operations boleh menjalankan diagnostik, tetapi runbook perubahan produksi harus masuk approval.

### 4. State store dan memory service

Agent enterprise jarang bekerja dalam satu interaksi tunggal. Ia perlu menyimpan:
- status workflow,
- hasil langkah sebelumnya,
- keputusan sementara,
- dan kadang memory yang relevan untuk interaksi lanjutan.

Karena itu, arsitektur perlu membedakan:
- **state store** untuk status operasional workflow yang deterministik,
- **memory service** untuk konteks tambahan yang dapat dipakai agent lintas sesi atau lintas langkah.

Pembedaan ini penting. Banyak implementasi mencampur semuanya sebagai “memory”, padahal kebutuhan governance-nya berbeda. State workflow biasanya harus lebih ketat, terstruktur, dan mudah diaudit. Memory bisa lebih fleksibel, tetapi tetap harus tunduk pada permission dan retention policy.

### 5. Policy enforcement point

Jika policy engine adalah tempat aturan diputuskan, maka **policy enforcement point** adalah titik di runtime tempat keputusan itu diterapkan. Ia harus berada dekat dengan tool call, data access, dan action execution.

Tanpa enforcement point yang eksplisit, policy hanya menjadi dokumen atau logika tersebar di banyak komponen. Untuk enterprise, ini terlalu rapuh.

## Komponen Context dan Knowledge: Kualitas Agent Ditentukan di Sini

Banyak kegagalan agent bukan karena modelnya buruk, tetapi karena konteks yang diberikan salah, tidak lengkap, kadaluarsa, atau melanggar permission boundary. Karena itu, **context layer** bukan pelengkap. Ia adalah dependency utama kualitas agent.

### 1. Ingestion pipeline

Platform perlu ingestion pipeline untuk membawa dokumen, knowledge article, policy, SOP, transcript, dan data referensi ke dalam context layer secara terkelola.

Pipeline ini seharusnya menangani:
- ekstraksi,
- chunking atau segmentasi,
- enrichment metadata,
- klasifikasi sensitivitas,
- versioning,
- dan sinkronisasi pembaruan.

Tanpa ingestion yang disiplin, retrieval akan mengambil dokumen yang tidak relevan atau usang.

### 2. Vector store, metadata catalog, dan knowledge graph

Ketiga komponen ini punya peran berbeda.

- **Vector store** membantu pencarian semantik atas konten tidak terstruktur.
- **Metadata catalog** memberi struktur: sumber dokumen, pemilik, tanggal berlaku, klasifikasi, domain, dan hak akses.
- **Knowledge graph** berguna ketika perusahaan perlu memahami relasi antar-entitas: vendor, kontrak, produk, pelanggan, akun, insiden, lokasi, atau kebijakan.

Tidak semua use case butuh knowledge graph sejak awal. Untuk knowledge assistant sederhana, vector retrieval plus metadata mungkin cukup. Tetapi untuk use case enterprise yang melibatkan relasi kompleks—misalnya supply chain disruption, customer entitlement, atau finance exception lintas entitas—graph dapat meningkatkan kualitas reasoning dan navigasi konteks.

### 3. Permission-aware retrieval

Ini salah satu capability paling penting. Agent tidak boleh mengambil konteks hanya karena dokumen itu “mirip secara semantik”. Retrieval harus sadar izin:
- siapa user atau principal asal,
- agent mana yang meminta,
- domain apa yang sedang diproses,
- dan data apa yang boleh diakses dalam konteks tersebut.

Contoh:
- agent HR tidak boleh menarik dokumen kompensasi yang tidak relevan dengan kasus;
- agent customer service tidak boleh mengambil histori pelanggan lain;
- agent finance tidak boleh mencampur guidance lintas entitas tanpa hak akses yang sesuai.

### 4. Context service yang menggabungkan structured dan unstructured data

Agent enterprise yang baik hampir selalu perlu menggabungkan dua jenis konteks:
- **structured data** dari ERP, CRM, HRIS, data warehouse, atau event stream;
- **unstructured data** dari dokumen, email, SOP, kontrak, knowledge base, atau transcript.

Karena itu, platform sebaiknya memiliki **context service** yang dapat menyatukan keduanya secara aman.

Contoh:
- di **AP exception handling**, agent perlu invoice, PO, dan goods receipt dari sistem terstruktur, plus policy dan histori kasus dari dokumen;
- di **customer operations**, agent perlu entitlement dan histori order dari CRM/OMS, plus knowledge article dan transcript interaksi;
- di **IT operations**, agent perlu telemetry dan incident history terstruktur, plus runbook dan postmortem tidak terstruktur.

Jika context service lemah, agent akan terdengar pintar tetapi bertindak dengan dasar yang rapuh.

## Komponen Governance dan Operations: Agar Agent Bisa Dioperasikan di Production

Platform enterprise tidak selesai di runtime dan context. Ia juga membutuhkan lapisan governance dan operations yang membuat agent dapat diaudit, diuji, dan dikelola sepanjang siklus hidupnya.

### 1. Agent registry dan policy registry

**Agent registry** adalah katalog resmi semua agent yang hidup di enterprise. Minimal berisi:
- nama dan tujuan agent,
- owner bisnis dan teknis,
- risk tier,
- tools dan data source,
- tingkat otonomi,
- status lifecycle,
- dan dependensi utama.

Sementara **policy registry** menyimpan aturan yang dipakai lintas agent:
- threshold transaksi,
- aturan approval,
- pembatasan tool,
- klasifikasi risiko,
- dan kebijakan domain tertentu.

Tanpa registry, perusahaan tidak punya inventaris yang layak untuk governance.

### 2. Risk tiering dan approval workflow

Tidak semua agent perlu kontrol yang sama. Karena itu, platform harus mendukung **risk tiering**:
- agent knowledge internal dengan mode assist tentu berbeda dari agent yang bisa mengeksekusi tindakan di ERP;
- agent drafting commentary berbeda dari agent yang bisa memicu refund atau remediasi produksi.

Risk tiering ini harus terhubung ke approval workflow, observability depth, testing rigor, dan release control.

### 3. Audit storage dan evaluation harness

Semua jejak penting—tool call, policy decision, approval, context retrieval, outcome—perlu masuk ke **audit storage** yang aman dan dapat ditelusuri.

Di samping itu, platform perlu **evaluation harness**: lingkungan dan alat untuk menguji agent sebelum dan sesudah release. Ini mencakup:
- golden dataset,
- scenario test,
- policy compliance test,
- regression test saat model/prompt/tool berubah,
- dan sampling evaluasi pasca-produksi.

Tanpa evaluation harness, perusahaan hanya tahu agent “jalan”, tetapi tidak tahu apakah kualitasnya membaik atau memburuk.

### 4. Monitoring dashboard, incident management, rollback, dan cost management

Dari sisi operasi, platform perlu menyediakan:
- dashboard runtime health,
- dashboard kualitas dan outcome,
- alert untuk incident teknis, policy breach, dan cost spike,
- mekanisme rollback atau disable cepat,
- serta cost management untuk model, retrieval, dan tool usage.

Ini penting karena agentic systems tidak hanya bisa gagal secara teknis. Mereka juga bisa:
- menjadi terlalu mahal,
- terlalu lambat,
- terlalu sering eskalasi,
- atau diam-diam menurunkan kualitas keputusan.

## Diagram Naratif: Cara Membaca Platform Secara Layer-by-Layer

Jika arsitektur ini diterjemahkan menjadi diagram visual, cara membacanya bisa seperti berikut:

### Lapisan 1: Channels dan agent applications
Di paling atas ada channel dan aplikasi agent:
- chat interface internal,
- workflow UI,
- API consumer,
- event-driven trigger,
- dan agent application spesifik seperti finance close agent atau procurement agent.

### Lapisan 2: Orchestration dan runtime control
Di bawahnya ada orchestrator, model gateway, tool execution service, state store, memory service, dan policy enforcement point.

### Lapisan 3: Context dan enterprise knowledge
Lapisan berikutnya berisi ingestion pipeline, vector store, metadata catalog, knowledge graph, context service, dan permission-aware retrieval.

### Lapisan 4: Integration ke digital core
Di bawah context ada koneksi ke ERP, CRM, HRIS, ITSM, data platform, event bus, document repository, dan core systems lain melalui API, event, atau integration layer yang governable.

### Lapisan 5: Governance dan operations plane
Melintang di seluruh lapisan ada control plane:
- identity dan access control,
- agent registry,
- policy registry,
- observability,
- audit storage,
- evaluation harness,
- deployment pipeline,
- rollback control,
- incident management,
- dan cost management.

Cara membaca ini penting karena membantu perusahaan menghindari kesalahan umum: menaruh semua perhatian pada model dan prompt, padahal masalah production justru sering muncul di integration, context, control, dan operations.

## Urutan Build yang Masuk Akal: Jangan Bangun Semua Sekaligus

Kesalahan klasik dalam platform strategy adalah mencoba membangun arsitektur lengkap sejak hari pertama. Ini hampir selalu berakhir lambat, mahal, dan jauh dari kebutuhan bisnis.

Pendekatan yang lebih sehat adalah membangun **minimum viable platform** yang lahir dari use case production-grade pertama.

### Urutan praktis yang biasanya paling masuk akal

#### 1. Model gateway
Mulai dari sini agar semua agent awal punya jalur standar untuk akses model, logging, fallback, dan cost control.

#### 2. Tool registry dan tool execution
Begitu agent mulai menyentuh sistem enterprise, capability ini menjadi wajib. Tanpa ini, integrasi akan liar dan sulit diaudit.

#### 3. Logging, tracing, dan observability dasar
Sebelum skala, perusahaan harus bisa melihat apa yang dilakukan agent dan berapa biaya serta latency-nya.

#### 4. Permission enforcement dan policy check
Saat agent mulai membaca data sensitif atau mengeksekusi tindakan, kontrol runtime harus diperkuat.

#### 5. Evaluation harness
Begitu perubahan model, prompt, atau tool mulai sering terjadi, perusahaan perlu regression testing yang formal.

#### 6. Memory service dan agent registry yang lebih matang
Capability ini penting, tetapi sering tidak perlu dibangun penuh di hari pertama kecuali use case memang membutuhkannya.

### Prinsip utamanya: capability harus lahir dari use case nyata

Jika perusahaan membangun knowledge graph tanpa use case yang benar-benar memerlukan relasi kompleks, itu berisiko menjadi aset mahal yang jarang dipakai. Jika membangun memory service canggih padahal agent masih bersifat task-based dan stateless, itu juga prematur.

Platform yang sehat tumbuh dari kebutuhan nyata, tetapi dengan pola arsitektur yang konsisten. Bukan dari ambisi membangun “semua komponen AI” sekaligus.

### Contoh urutan untuk perusahaan besar

Bayangkan perusahaan memulai dari dua use case:
- AP exception handling di shared services,
- incident triage di IT operations.

Dari dua use case ini, perusahaan mungkin menemukan kebutuhan bersama paling mendesak adalah:
- model gateway,
- tool registry,
- observability,
- permission-aware retrieval,
- dan approval workflow.

Sementara knowledge graph penuh atau memory lintas-agent mungkin belum mendesak. Dengan cara ini, platform tumbuh berdasarkan economics dan risiko nyata, bukan berdasarkan daftar fitur.

## Checklist Praktis

Gunakan checklist berikut untuk menilai apakah perusahaan Anda sedang membangun agent platform yang sehat atau hanya menumpuk proyek agent.

### Keputusan arsitektur
- [ ] Sudah dibedakan dengan jelas antara **agent application** dan **enterprise agent platform**.
- [ ] Ada keputusan eksplisit tentang capability mana yang menjadi shared platform service dan mana yang tetap spesifik use case.
- [ ] Arsitektur platform dirancang untuk multi-agent, bukan hanya untuk agent pertama.

### Runtime dan integration
- [ ] Ada orchestrator atau workflow runtime yang sesuai dengan kompleksitas use case.
- [ ] Semua akses model melewati model gateway, bukan koneksi langsung per agent.
- [ ] Tool tersedia melalui registry dan dieksekusi lewat service yang mendukung validasi, permission, dan audit.
- [ ] State workflow dan memory dibedakan secara arsitektural.

### Context dan knowledge
- [ ] Ada ingestion pipeline yang mengelola pembaruan knowledge secara terstruktur.
- [ ] Retrieval tidak hanya semantik, tetapi juga permission-aware.
- [ ] Context service mampu menggabungkan data structured dan unstructured.
- [ ] Metadata catalog tersedia untuk menjelaskan sumber, owner, dan status dokumen.
- [ ] Knowledge graph hanya dibangun jika benar-benar dibutuhkan oleh use case.

### Governance dan operations
- [ ] Ada agent registry dengan owner, risk tier, tools, dan status lifecycle yang jelas.
- [ ] Ada policy registry atau mekanisme terpusat untuk aturan runtime.
- [ ] Audit storage mampu merekonstruksi tool call, policy decision, approval, dan outcome.
- [ ] Evaluation harness tersedia untuk regression test dan scenario test.
- [ ] Monitoring dashboard mencakup runtime, kualitas, dan biaya.
- [ ] Ada rollback atau kill switch untuk menonaktifkan agent dengan cepat.

### Urutan implementasi
- [ ] Platform dibangun bertahap dari use case production-grade, bukan sebagai proyek infrastruktur abstrak.
- [ ] Model gateway, tool execution, observability, dan permission enforcement diprioritaskan lebih dulu.
- [ ] Capability lanjutan seperti memory kompleks atau knowledge graph dibangun hanya jika ada kebutuhan nyata.
- [ ] Setiap komponen platform punya sponsor use case yang jelas, bukan sekadar “bagus untuk masa depan”.

### Sinyal bahaya
- [ ] Setiap tim membangun agent dengan stack, logging, dan kontrolnya sendiri.
- [ ] Tidak ada inventaris resmi agent yang hidup di enterprise.
- [ ] Tool call ke sistem inti berjalan tanpa policy enforcement yang konsisten.
- [ ] Retrieval mengambil konteks tanpa mempertimbangkan permission.
- [ ] Evaluasi agent hanya dilakukan saat demo, bukan sebagai capability platform.
- [ ] Platform roadmap lebih didorong oleh fitur vendor daripada kebutuhan operating model perusahaan.

Arsitektur referensi yang baik bukan yang paling lengkap di atas kertas, melainkan yang membuat perusahaan bisa menjawab satu pertanyaan sederhana dengan percaya diri:

**jika besok kita menambah sepuluh agent baru di finance, procurement, customer operations, dan IT, apakah kita punya fondasi bersama untuk menjalankannya dengan aman, terukur, dan tanpa menciptakan agent sprawl?**

Jika jawabannya belum, maka prioritas berikutnya bukan menambah agent lagi, melainkan memperkuat platformnya.
