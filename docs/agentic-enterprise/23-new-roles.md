---
title: "Peran Baru di Agentic Enterprise"
sidebar_position: 23
---

# Peran Baru di Agentic Enterprise

Pada artikel sebelumnya, kita membahas **human-AI teaming**: bagaimana manusia dan agent bekerja bersama di dalam workflow enterprise. Langkah berikutnya lebih organisasional dan lebih sulit:

**siapa yang sebenarnya memiliki, mengawasi, mengendalikan, dan terus memperbaiki agent ketika agent sudah menjadi bagian dari operasi perusahaan?**

Banyak organisasi masih menjawab pertanyaan ini secara informal. Tim bisnis merasa agent adalah urusan IT. IT merasa agent adalah “fitur” yang harus dimiliki bisnis. Risk dan compliance baru dilibatkan ketika ada kekhawatiran. Operations menjadi pihak yang menanggung dampak sehari-hari, tetapi tidak punya mandat desain. Hasilnya mudah ditebak: agent hidup di antara fungsi-fungsi, tetapi tidak benar-benar dimiliki siapa pun.

Padahal ketika perusahaan bergerak dari copilot ke **agentic operating model**, pekerjaan baru memang muncul. Bukan hanya pekerjaan teknis, tetapi pekerjaan di sekitar:
- desain workflow berbasis agent,
- pengawasan output dan exception,
- pengelolaan risiko dan approval,
- kurasi knowledge dan business rules,
- serta pengelolaan lifecycle agent sebagai aset operasional.

Ini sejalan dengan pergeseran yang kini terlihat di banyak organisasi maju: manusia tidak lagi hanya menjadi pengguna AI, tetapi semakin berperan sebagai **arsitek, pengawas, steward, dan pengelola digital labor**. Jika peran-peran ini tidak didefinisikan secara eksplisit, perusahaan akan mengalami dua masalah sekaligus:
1. nilai bisnis agent tidak pernah benar-benar maksimal, dan  
2. risiko operasional naik karena tidak ada ownership yang jelas.

Artikel ini membahas empat peran yang paling penting untuk mulai dibangun:
- **Agent Product Owner**
- **Agent Supervisor**
- **Agent Risk Owner**
- **Agent Platform Engineer**
- **Knowledge Curator**

Tidak semua perusahaan harus membuat jabatan baru dengan nama persis seperti ini. Namun fungsi kerjanya harus ada. Dalam banyak kasus, peran-peran ini bisa dimulai sebagai perluasan mandat dari role yang sudah ada, lalu diformalisasi ketika skala meningkat.

## Mengapa Role Baru Dibutuhkan

Agentic AI sering disalahpahami sebagai gelombang otomatisasi baru. Seolah-olah begitu agent hadir, pekerjaan manusia hanya berkurang. Dalam praktik enterprise, yang terjadi lebih kompleks.

Ketika agent mulai menangani intake, triage, drafting, routing, monitoring, atau eksekusi terbatas, perusahaan justru membutuhkan lebih banyak disiplin di sekitar:
- **apa yang boleh dilakukan agent,**
- **siapa yang menentukan prioritas perbaikannya,**
- **siapa yang memonitor kualitasnya,**
- **siapa yang bertanggung jawab jika agent salah,**
- **dan siapa yang memastikan konteks bisnis yang dipakai agent tetap benar.**

Dengan kata lain, agent tidak menghapus kebutuhan organisasi. Agent **mengubah bentuk kebutuhan organisasi**.

### Dari proyek AI ke unit operasi digital

Selama agent masih berupa pilot, perusahaan bisa bertahan dengan struktur informal. Seorang product manager membantu sedikit. Seorang data scientist memperbaiki prompt. Seorang operations lead memberi masukan. Seorang architect membantu integrasi. Ini masih bisa berjalan.

Tetapi begitu agent masuk ke proses seperti:
- finance close,
- procurement intake-to-PO,
- customer complaint handling,
- IT incident triage,
- supply chain exception management,
- atau shared services case handling,

agent bukan lagi eksperimen. Ia menjadi **bagian dari sistem kerja**. Dan setiap bagian dari sistem kerja enterprise membutuhkan:
- owner,
- kontrol,
- metrik,
- dan ritme perbaikan.

Jika tidak, tanggung jawab akan jatuh di celah antara bisnis, IT, risk, dan operations.

### Tanda bahwa organisasi belum siap

Ada beberapa sinyal yang cukup jelas bahwa role baru ini belum didefinisikan dengan baik:

- agent dipakai di operasi, tetapi tidak ada satu owner bisnis yang memegang roadmap-nya;
- tim operasi sering mengeluh kualitas output agent, tetapi feedback tidak pernah masuk ke backlog yang jelas;
- perubahan prompt, model, atau tool dilakukan oleh tim teknis tanpa review domain yang memadai;
- risk baru dilibatkan setelah ada insiden atau audit question;
- knowledge base agent penuh dokumen usang, tetapi tidak ada pihak yang merasa bertanggung jawab membersihkannya;
- supervisor manusia diminta “mengawasi AI”, tetapi tidak diberi SOP, dashboard, atau mandat keputusan.

Dalam kondisi seperti ini, perusahaan biasanya masih melihat agent sebagai lapisan teknologi. Padahal yang dibutuhkan adalah **desain operating model**.

### Role baru harus menjadi bagian dari operating model

Kesalahan umum adalah memperlakukan peran-peran ini sebagai tambahan informal:
- “nanti manager operasi saja yang lihat-lihat output agent,”
- “tim AI platform saja yang urus semuanya,”
- “kalau ada isu compliance baru kita panggil legal atau risk.”

Pendekatan ini tidak akan tahan skala.

Peran baru di agentic enterprise harus dirancang seperti peran lain dalam operasi:
- punya mandat,
- punya keputusan yang boleh diambil,
- punya metrik,
- punya forum kerja,
- dan punya hubungan yang jelas dengan fungsi lain.

Ini penting terutama untuk perusahaan yang ingin membawa agent ke shared services, GCC, atau domain function besar. Di sana, skala dan repetisi kerja tinggi. Tanpa role clarity, agent justru menambah kebingungan organisasi.

## Agent Product Owner: Pemilik Nilai, Bukan Sekadar Pemilik Fitur

Peran paling penting biasanya adalah **Agent Product Owner**. Ini adalah orang yang bertanggung jawab memastikan agent menghasilkan nilai bisnis yang nyata, diadopsi pengguna, dan berkembang sesuai prioritas enterprise.

Jika agent diperlakukan seperti produk, maka seseorang harus memegang:
- visi dan tujuan bisnisnya,
- roadmap pengembangannya,
- prioritas backlog,
- metrik keberhasilan,
- dan keputusan trade-off antara kecepatan, kualitas, risiko, dan adopsi.

### Apa yang dimiliki Agent Product Owner

Agent Product Owner bukan sekadar koordinator proyek AI. Ia harus memegang empat hal utama.

#### 1. Value thesis
Ia harus bisa menjawab:
- masalah bisnis apa yang diselesaikan agent,
- outcome apa yang diharapkan,
- dan mengapa use case ini layak diprioritaskan.

Contoh di **finance close**: agent bukan dibangun hanya untuk “membantu controller”, tetapi untuk mengurangi waktu evidence gathering, mempercepat exception triage, dan meningkatkan konsistensi draft commentary.

Contoh di **procurement**: agent bukan sekadar chatbot intake, tetapi alat untuk menurunkan cycle time request, meningkatkan kepatuhan jalur sourcing, dan mengurangi rework buyer.

#### 2. Roadmap dan backlog
Agent akan selalu berubah. Policy berubah, SOP berubah, tool bertambah, data product membaik, dan failure mode baru muncul. Karena itu, agent butuh backlog seperti produk digital lain:
- perbaikan kualitas,
- perluasan scope,
- penyesuaian threshold,
- integrasi tool baru,
- perbaikan UX,
- dan penguatan kontrol.

Tanpa backlog yang jelas, feedback dari operasi hanya akan menjadi keluhan yang berulang.

#### 3. Adoption dan operating fit
Agent yang secara teknis bagus belum tentu dipakai. Product owner harus memastikan agent cocok dengan ritme kerja nyata:
- apakah output-nya usable,
- apakah handoff ke manusia jelas,
- apakah supervisor tidak dibebani review yang berlebihan,
- apakah pengguna percaya pada evidence yang ditampilkan.

Ini sangat penting karena banyak agent gagal bukan karena modelnya buruk, tetapi karena desain kerja hariannya tidak cocok.

#### 4. Lifecycle dan metric ownership
Agent Product Owner harus memperlakukan agent sebagai produk dengan lifecycle:
- pilot,
- limited production,
- scale-up,
- optimization,
- atau retirement.

Ia juga harus memegang metrik yang relevan, misalnya:
- adoption rate,
- acceptance rate,
- correction rate,
- escalation rate,
- cycle time impact,
- dan business outcome per workflow.

### Peran jembatan lintas fungsi

Agent Product Owner berada di persimpangan lima dunia:
- domain bisnis,
- engineering/platform,
- data/knowledge,
- risk/compliance,
- dan pengguna operasional.

Karena itu, role ini jarang cocok jika diisi oleh orang yang hanya kuat di satu sisi. Product owner yang terlalu teknis bisa kehilangan sensitivitas proses. Yang terlalu operasional bisa kesulitan memimpin backlog teknis. Yang terlalu fokus pada compliance bisa membuat agent tidak pernah bergerak.

Dalam praktiknya, role ini paling efektif jika diisi oleh orang yang:
- memahami proses bisnis secara mendalam,
- cukup paham teknologi untuk membuat prioritas yang realistis,
- dan mampu memimpin perubahan lintas fungsi.

### Kapan role ini tidak boleh digabung sembarangan

Di organisasi kecil, Agent Product Owner bisa dirangkap oleh process owner atau digital product manager. Itu masuk akal. Tetapi untuk use case yang:
- lintas fungsi,
- menyentuh sistem inti,
- punya risk tier menengah hingga tinggi,
- atau dipakai pada volume besar,

role ini sebaiknya tidak menjadi pekerjaan sampingan.

Jika product ownership lemah, yang biasanya terjadi adalah:
- roadmap ditentukan oleh apa yang mudah dibangun, bukan apa yang paling bernilai;
- operasi merasa tidak didengar;
- risk masuk terlambat;
- dan agent berkembang tanpa arah yang konsisten.

## Agent Supervisor dan Risk Owner: Produktivitas Tidak Boleh Mengorbankan Trust

Begitu agent mulai bekerja di operasi, perusahaan membutuhkan dua peran yang sering disalahartikan sebagai satu hal yang sama, padahal berbeda: **Agent Supervisor** dan **Agent Risk Owner**.

Keduanya harus bekerja sangat dekat, tetapi mandatnya tidak identik.

## Agent Supervisor: pengawas kerja harian agent

Agent Supervisor adalah peran operasional. Fokusnya bukan desain strategis, melainkan **kinerja agent di lapangan**.

Ia bertanggung jawab untuk:
- memonitor output agent,
- menangani exception,
- mengoreksi hasil yang salah,
- memberi feedback terstruktur,
- dan memastikan agent bekerja sesuai SOP harian.

Jika Agent Product Owner memegang roadmap, maka Agent Supervisor memegang **reality check** dari operasi.

### Contoh konkret peran supervisor

Di **customer operations**, supervisor memeriksa:
- kasus mana yang ditangani agent dengan baik,
- rekomendasi refund mana yang sering ditolak,
- pola pelanggan atau produk apa yang memicu kesalahan,
- dan kapan agent terlalu agresif atau terlalu konservatif.

Di **finance close**, supervisor atau team lead controllership memonitor:
- draft commentary yang paling sering diubah,
- exception yang gagal diklasifikasikan,
- akun atau entitas yang paling sering memicu eskalasi,
- dan apakah agent benar-benar mengurangi beban tim.

Di **IT operations**, supervisor memantau:
- incident yang salah triage,
- runbook recommendation yang tidak relevan,
- alert fatigue yang diciptakan agent,
- dan kapan engineer harus mengambil alih.

### Supervisor bukan reviewer pasif

Kesalahan umum adalah menjadikan supervisor hanya sebagai “manusia yang memeriksa hasil AI”. Itu terlalu sempit dan mahal.

Supervisor yang efektif harus punya alat dan mandat untuk:
- menandai failure mode,
- mengelompokkan pola error,
- mengusulkan perubahan SOP atau threshold,
- dan memberi input ke backlog product owner.

Artinya, supervisor adalah bagian dari **continuous improvement loop**, bukan sekadar pagar pengaman.

### Trade-off yang harus dikelola

Jika terlalu banyak output agent harus diperiksa supervisor, produktivitas akan hilang. Jika terlalu sedikit pengawasan, trust dan kontrol bisa turun.

Karena itu, desain peran supervisor harus disesuaikan dengan:
- risk tier use case,
- tingkat otonomi agent,
- kualitas agent saat ini,
- dan kapasitas tim operasi.

Untuk use case low-risk, sampling review mungkin cukup. Untuk use case medium-risk, review berbasis exception lebih tepat. Untuk use case high-risk, approval atau oversight lebih ketat mungkin tetap diperlukan.

## Agent Risk Owner: pemilik batas kepercayaan

Berbeda dari supervisor, **Agent Risk Owner** memegang mandat governance. Ia bertanggung jawab menetapkan:
- risk tier agent,
- kontrol minimum yang wajib,
- approval threshold,
- batas delegated authority,
- kebutuhan auditability,
- dan persyaratan compliance.

Peran ini sangat penting karena agentic AI bukan hanya soal efisiensi. Ia menyentuh:
- data access,
- keputusan operasional,
- tindakan terhadap pelanggan atau transaksi,
- dan kadang domain yang diatur ketat.

### Apa yang dilakukan Risk Owner

Risk owner harus menjawab pertanyaan seperti:
- apakah agent ini hanya boleh recommend, atau boleh execute dengan approval?
- transaksi atau tindakan seperti apa yang harus selalu masuk human gate?
- data apa yang boleh diakses agent dalam konteks tertentu?
- evidence apa yang harus disimpan untuk audit?
- kapan sebuah insiden agent harus dianggap material?

Contoh di **procurement**:
risk owner menetapkan bahwa agent boleh membuat draft purchase request, tetapi tidak boleh membuat vendor baru atau mem-bypass due diligence.

Contoh di **finance**:
agent boleh menyiapkan draft analisis dan rekomendasi, tetapi treatment akuntansi material tetap harus diputuskan manusia.

Contoh di **HR services**:
agent boleh menjawab policy umum, tetapi tidak boleh mengambil keputusan yang memengaruhi status kerja atau kompensasi tanpa kontrol yang jauh lebih ketat.

### Mengapa supervisor dan risk owner harus dipisah

Jika peran ini digabung tanpa disiplin, dua hal bisa terjadi:
- operasi terlalu dominan dan mendorong produktivitas dengan mengorbankan kontrol, atau
- risk terlalu dominan dan membuat agent tidak pernah cukup otonom untuk memberi nilai.

Pemisahan peran membantu menjaga keseimbangan. Supervisor membawa realitas produktivitas. Risk owner membawa disiplin trust.

Keduanya harus bertemu dalam forum yang teratur, misalnya:
- review mingguan untuk pola exception,
- review bulanan untuk perubahan threshold,
- dan sign-off saat agent naik tingkat otonomi.

## Platform Engineer dan Knowledge Curator: Fondasi Teknis dan Konteks Bisnis

Banyak organisasi terlalu fokus pada model dan prompt, lalu lupa bahwa agent enterprise hanya akan sebaik:
1. platform tempat ia berjalan, dan  
2. konteks bisnis yang ia pahami.

Karena itu, dua peran berikut sangat penting: **Agent Platform Engineer** dan **Knowledge Curator**.

## Agent Platform Engineer: membangun execution layer yang bisa dipercaya

Agent Platform Engineer bertanggung jawab atas fondasi teknis yang membuat agent bisa berjalan aman, terukur, dan dapat dioperasikan.

Mandatnya biasanya mencakup:
- runtime dan orchestration,
- tool registry dan tool execution,
- IAM dan access control,
- observability dan tracing,
- deployment pipeline,
- environment management,
- rollback dan release control,
- serta integrasi ke ERP, CRM, HRIS, ITSM, dan core systems lain.

### Mengapa role ini berbeda dari software engineer biasa

Software engineer aplikasi bisa membangun fitur. Tetapi agentic systems membutuhkan disiplin tambahan:
- model gateway,
- policy enforcement,
- audit trail,
- permission-aware access,
- evaluasi perilaku,
- dan kontrol cost/latency/capacity.

Karena itu, platform engineer untuk agentic enterprise harus memahami persimpangan antara:
- cloud/platform engineering,
- enterprise integration,
- AI runtime,
- dan governance requirements.

### Contoh kontribusi nyata

Di **shared services**, platform engineer memastikan agent AP exception handling:
- hanya bisa memanggil tool yang diizinkan,
- semua tool call tercatat,
- approval workflow terhubung,
- dan perubahan versi agent bisa di-roll back jika kualitas turun.

Di **IT operations**, ia memastikan agent remediation:
- berjalan di sandbox atau environment yang tepat,
- tidak memakai kredensial berlebihan,
- dan semua tindakan sensitif melewati policy check.

Tanpa role ini, perusahaan akan punya agent yang terlihat pintar, tetapi rapuh saat masuk production.

## Knowledge Curator: memastikan agent memahami bisnis dengan benar

Jika platform engineer menjaga “mesin”, maka **Knowledge Curator** menjaga “isi kepala” agent.

Peran ini bertanggung jawab memastikan bahwa:
- dokumen yang dipakai agent relevan,
- SOP dan policy yang masuk ke context layer masih berlaku,
- business rules terdokumentasi dengan baik,
- metadata dan source-of-truth jelas,
- dan knowledge yang usang atau bertentangan dibersihkan.

### Mengapa role ini krusial

Banyak kegagalan agent enterprise bukan karena model lemah, tetapi karena konteksnya buruk:
- policy lama masih ikut terambil,
- SOP tidak konsisten antar-unit,
- dokumen informal bercampur dengan aturan resmi,
- atau definisi bisnis tidak pernah dibakukan.

Dalam kondisi seperti itu, agent akan tetap menjawab dengan percaya diri, tetapi salah secara operasional.

### Contoh peran knowledge curator

Di **procurement**, knowledge curator memastikan:
- policy kategori belanja terbaru tersedia,
- aturan vendor onboarding tidak tercampur dengan panduan lama,
- template dan SOP sourcing diberi metadata yang benar,
- dan dokumen yang sudah superseded tidak lagi menjadi sumber retrieval utama.

Di **finance**, ia memastikan:
- accounting guidance yang berlaku menjadi source of truth,
- close calendar dan SOP exception handling diperbarui,
- template commentary resmi tersedia,
- dan istilah seperti material variance atau final close status tidak ambigu.

Di **customer operations**, ia memastikan:
- refund policy, entitlement rules, dan escalation playbook sinkron,
- bulletin produk yang sudah tidak aktif tidak lagi dipakai,
- dan knowledge article yang paling sering dikoreksi segera diperbaiki.

### Role teknis dan domain harus bertemu

Knowledge curator tidak harus berasal dari tim data. Sering kali role ini lebih cocok diisi oleh domain expert yang:
- paham proses,
- paham mana dokumen resmi dan mana yang hanya referensi informal,
- dan bisa bekerja dekat dengan tim platform atau AI.

Trade-off-nya jelas: jika role ini terlalu teknis, kualitas konteks bisnis akan lemah. Jika terlalu domain-only tanpa disiplin metadata dan lifecycle, knowledge layer akan cepat berantakan.

Dalam organisasi yang lebih matang, knowledge curator sering bekerja bersama:
- process excellence,
- data product owner,
- compliance/policy owner,
- dan platform team.

## Mendesain Organisasi Human-Agent yang Masuk Akal

Setelah memahami role-role di atas, pertanyaan berikutnya adalah: **bagaimana menempatkannya dalam struktur organisasi?**

Tidak ada satu desain yang cocok untuk semua. Tetapi ada beberapa prinsip yang cukup konsisten.

### 1. Ownership nilai harus tetap di bisnis
Agent Product Owner sebaiknya berada dekat dengan fungsi bisnis atau operasi yang menerima nilai. Jika role ini sepenuhnya ditarik ke IT, agent cenderung menjadi proyek teknologi, bukan alat transformasi proses.

### 2. Runtime dan kontrol teknis perlu platform bersama
Agent Platform Engineer biasanya lebih efektif jika berada dalam platform team terpusat atau federated platform model, bukan tersebar liar per use case. Ini penting untuk konsistensi IAM, observability, deployment, dan governance.

### 3. Pengawasan harian harus dekat dengan operasi
Agent Supervisor harus berada di garis operasi, karena ia memahami exception, beban kerja, dan realitas SOP sehari-hari.

### 4. Risk ownership harus formal, bukan advisory semata
Untuk use case yang menyentuh transaksi, pelanggan, data sensitif, atau domain regulated, risk owner tidak boleh hanya menjadi reviewer sesekali. Ia harus punya mandat keputusan.

### 5. Knowledge tidak boleh dianggap pekerjaan sampingan
Jika knowledge curation dibiarkan informal, kualitas agent akan turun diam-diam. Ini salah satu penyebab paling umum agent terlihat bagus di awal lalu memburuk saat skala.

### Kapan belum perlu membentuk role formal penuh

Perusahaan yang masih di tahap awal tidak harus langsung membuat lima jabatan baru. Yang penting adalah fungsi kerjanya ada.

Misalnya pada fase awal:
- process owner bisa merangkap Agent Product Owner,
- team lead operasi bisa menjadi Agent Supervisor,
- control owner yang sudah ada bisa memegang Agent Risk Owner,
- enterprise platform engineer bisa diperluas mandatnya,
- dan subject matter expert bisa menjadi knowledge curator paruh waktu.

Namun begitu agent mulai:
- dipakai lintas unit,
- menyentuh beberapa sistem inti,
- memiliki backlog yang terus tumbuh,
- atau memengaruhi KPI operasi secara material,

maka formalisasi role menjadi penting.

## Checklist Praktis

Berikut keputusan dan checklist yang sebaiknya diambil setelah memahami topik ini.

### Keputusan yang perlu diambil sekarang

1. **Tentukan siapa owner setiap agent yang sudah atau akan masuk production.**  
   Jangan biarkan agent hidup tanpa Agent Product Owner yang jelas.

2. **Pisahkan pengawasan operasional dari kepemilikan risiko.**  
   Tentukan siapa Agent Supervisor dan siapa Agent Risk Owner untuk tiap use case penting.

3. **Putuskan model platform dan knowledge ownership.**  
   Apakah runtime, IAM, observability, dan deployment dikelola platform bersama? Siapa yang mengurasi SOP, policy, dan business rules?

4. **Definisikan metrik per role.**  
   Product owner memegang value dan adoption. Supervisor memegang exception dan feedback quality. Risk owner memegang control adherence. Platform engineer memegang reliability dan operability. Knowledge curator memegang freshness dan trustworthiness konteks.

5. **Tentukan kapan role informal harus diformalisasi.**  
   Misalnya saat agent menyentuh sistem inti, volume transaksi naik, atau tingkat otonomi meningkat.

### Checklist readiness singkat

- [ ] Setiap agent production memiliki owner bisnis yang jelas.
- [ ] Ada backlog dan roadmap formal untuk perbaikan agent.
- [ ] Tim operasi memiliki peran supervisor yang memonitor output dan exception agent.
- [ ] Risk tier, approval threshold, dan control requirement ditetapkan oleh owner yang jelas.
- [ ] Platform runtime, IAM, observability, dan deployment tidak dibangun terpisah-pisah per use case.
- [ ] Ada pihak yang bertanggung jawab atas kualitas SOP, policy, dan knowledge yang dipakai agent.
- [ ] Feedback dari operasi masuk ke backlog produk, bukan berhenti sebagai keluhan.
- [ ] Perubahan model, prompt, tool, atau knowledge tidak dilakukan tanpa governance yang sesuai.
- [ ] Peran-peran baru ini sudah dipetakan ke struktur organisasi yang ada, meski belum semuanya menjadi jabatan formal.
- [ ] CHRO, CIO, dan COO memiliki pandangan bersama bahwa agent menciptakan pekerjaan baru, bukan hanya mengurangi pekerjaan lama.

### Sinyal bahaya bahwa topik ini belum siap di-scale

- Agent dipakai luas, tetapi tidak ada satu nama yang bisa disebut sebagai owner.
- Tim operasi diminta mengawasi agent tanpa dashboard, SOP, atau waktu yang dialokasikan.
- Risk hanya muncul di akhir proyek atau setelah insiden.
- Knowledge base agent penuh dokumen lama dan tidak ada proses kurasi.
- Platform dibangun per use case sehingga kontrol akses, logging, dan deployment tidak konsisten.
- Keberhasilan agent diukur hanya dari demo atau akurasi model, bukan dari outcome operasional dan trust.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

**Jika besok agent menjadi bagian tetap dari tenaga kerja perusahaan Anda, apakah Anda sudah tahu siapa yang memimpin nilainya, siapa yang mengawasi kerjanya, siapa yang memegang risikonya, dan siapa yang menjaga konteks bisnisnya tetap benar?**

Jika jawabannya belum jelas, maka tantangan Anda bukan lagi soal teknologi. Tantangannya adalah **desain organisasi**.
