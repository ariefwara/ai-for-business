---
title: "Data Products untuk AI Agents"
sidebar_position: 20
---

# Data Products untuk AI Agents

Pada artikel sebelumnya, kita membahas **security threat model** untuk agentic AI: bagaimana ancaman muncul dari prompt, retrieval, tool usage, hingga multi-agent coordination. Namun ada satu akar masalah yang sering lebih mendasar daripada model atau keamanan itu sendiri:

**agent sering gagal bukan karena tidak punya akses ke data, tetapi karena data enterprise belum dikemas dalam bentuk yang bisa dipakai agent secara aman, konsisten, dan dapat dipercaya.**

Banyak perusahaan merasa sudah “siap AI” karena memiliki data lake, warehouse, dashboard BI, atau indeks dokumen yang besar. Untuk analytics tradisional, itu mungkin cukup membantu. Untuk agentic systems, belum tentu. Agent tidak membutuhkan semua data mentah. Agent membutuhkan **data products** dan **knowledge products** yang:
- jelas maknanya,
- punya owner,
- punya kualitas terukur,
- punya aturan akses yang bisa dievaluasi saat runtime,
- dan cukup stabil untuk dipakai mengambil tindakan.

Inilah pergeseran penting dari **data availability** ke **agent usability**.

Data yang tersedia belum tentu layak dipakai agent. Sebuah tabel bisa lengkap secara teknis, tetapi tidak jelas definisi field-nya. Sebuah indeks dokumen bisa kaya konten, tetapi tidak punya metadata tentang versi, tanggal berlaku, atau status superseded. Sebuah API bisa terbuka, tetapi tidak membawa konteks permission yang benar. Dalam kondisi seperti ini, agent akan tetap “bekerja”, tetapi dengan fondasi yang rapuh.

Untuk enterprise, itu berbahaya. Agent yang membaca data salah, basi, atau ambigu dapat:
- mengklasifikasikan exception dengan keliru,
- memberi rekomendasi yang tidak sesuai policy,
- mengambil tindakan pada objek yang salah,
- atau lebih buruk lagi, menyampaikan jawaban yang terdengar meyakinkan tetapi tidak dapat dipertanggungjawabkan.

Karena itu, jika perusahaan ingin menjalankan agent di production secara aman dan terukur, mereka perlu mulai memperlakukan data sebagai **produk untuk agent**, bukan sekadar aset yang “tersedia di platform”.

## Dari Data Lake ke Agent-Ready Data Product

Dalam banyak program data modern, fokus utama adalah mengumpulkan, menyimpan, dan membuka akses ke data. Pendekatan ini masuk akal untuk reporting, analytics, dan eksplorasi. Tetapi untuk agentic AI, kebutuhan berubah.

Agent tidak bekerja seperti analis manusia yang bisa menoleransi ambiguitas, membuka beberapa dashboard, lalu menafsirkan konteks sendiri. Agent membutuhkan input yang lebih eksplisit. Ia perlu tahu:
- data ini mewakili apa,
- seberapa baru datanya,
- kapan boleh dipakai,
- untuk tujuan apa,
- dan siapa yang bertanggung jawab jika definisinya berubah.

Di sinilah konsep **agent-ready data product** menjadi penting.

### Apa yang membedakan data product dari sekadar dataset

Sebuah dataset menjadi data product ketika ia tidak hanya berisi data, tetapi juga kontrak operasional yang membuatnya layak dipakai lintas konsumen. Untuk agent, kontrak ini harus lebih ketat lagi.

Minimal, data product untuk agent sebaiknya memiliki:

- **schema** yang jelas dan stabil,
- **semantics** yang terdokumentasi,
- **owner** bisnis dan teknis,
- **freshness expectation**,
- **quality SLA atau threshold kualitas**,
- **lineage dasar**,
- **access policy**,
- dan jika relevan, **allowed actions atau allowed usage**.

Tanpa elemen-elemen ini, agent hanya melihat sekumpulan field. Dan field tanpa makna bisnis yang jelas adalah sumber kesalahan yang sangat mahal.

### Data availability tidak sama dengan agent usability

Ini pembedaan yang perlu ditegaskan.

Sebuah tabel invoice mungkin tersedia di warehouse. Sebuah API customer mungkin aktif. Sebuah folder SOP mungkin sudah diindeks untuk RAG. Secara teknis, data tersedia. Tetapi apakah agent bisa memakainya dengan aman dan benar? Belum tentu.

Contoh di **finance close**:
- data trial balance tersedia,
- jurnal adjustment tersedia,
- commentary historis tersedia.

Namun jika agent tidak tahu mana angka preliminary dan mana final, mana entitas legal yang sedang diproses, atau kapan close window dianggap resmi, maka availability itu tidak otomatis menjadi usability.

Contoh di **procurement**:
- data vendor, kontrak, dan purchase request tersedia.
Tetapi jika definisi “approved vendor” berbeda antara sistem sourcing dan ERP, agent bisa salah merutekan permintaan.

Contoh di **customer operations**:
- histori tiket, order, dan entitlement tersedia.
Tetapi jika “active customer” atau “eligible refund” tidak punya definisi yang konsisten, agent akan mudah salah memberi rekomendasi.

### Bentuk praktis data product untuk agent

Untuk workflow agentic, data product biasanya lebih berguna jika dikemas sebagai salah satu dari tiga bentuk berikut:

#### 1. Domain API atau service yang sudah dibatasi
Misalnya:
- `customer_entitlement_summary`
- `open_ap_exceptions`
- `approved_vendor_profile`
- `employee_onboarding_status`

Bentuk ini cocok ketika agent perlu data operasional yang relatif terstruktur dan sering dipakai.

#### 2. Curated analytical view
Misalnya:
- view aging invoice dengan definisi overdue yang sudah dibakukan,
- margin by product dengan rule alokasi biaya yang terdokumentasi,
- close exception dashboard feed yang sudah dibersihkan dari status ambigu.

Bentuk ini cocok ketika agent perlu reasoning atas metrik atau status bisnis.

#### 3. Event-backed product
Misalnya:
- shipment delay event,
- failed payment event,
- incident severity update,
- contract renewal due event.

Bentuk ini cocok untuk agent yang bekerja secara event-driven dan membutuhkan respons cepat.

Trade-off-nya jelas: semakin terkurasi data product, semakin tinggi usability dan governance, tetapi fleksibilitas eksplorasi menurun. Untuk agent production, trade-off ini biasanya layak diambil. Agent tidak membutuhkan kebebasan eksplorasi sebesar analis manusia; agent membutuhkan **kejelasan dan keandalan**.

## Semantic Contracts: Menyamakan Arti, Bukan Hanya Format

Banyak organisasi sudah punya schema registry atau dokumentasi API. Itu penting, tetapi belum cukup. Agent tidak hanya perlu tahu bahwa ada field bernama `revenue`, `margin`, `customer_status`, atau `invoice_due_date`. Agent perlu tahu **apa arti bisnisnya**.

Di sinilah **semantic contract** menjadi pembeda.

### Apa itu semantic contract

Semantic contract adalah lapisan yang menjelaskan:
- arti setiap field atau objek,
- business rule yang melandasinya,
- allowed usage,
- asumsi dan keterbatasan,
- serta kondisi ketika data tidak boleh dipakai untuk keputusan tertentu.

Dengan kata lain, semantic contract menjawab pertanyaan yang biasanya hidup di kepala domain expert, bukan di schema teknis.

### Mengapa ini penting untuk agent

Tanpa semantic contract, agent mudah salah menafsirkan istilah yang tampak sederhana.

Contoh:
- **revenue** bisa berarti booked revenue, billed revenue, recognized revenue, atau net revenue.
- **margin** bisa berarti gross margin, contribution margin, atau margin setelah alokasi tertentu.
- **active customer** bisa berarti pernah transaksi dalam periode tertentu, masih punya kontrak aktif, atau belum churn secara formal.
- **overdue invoice** bisa berarti melewati due date kalender, melewati grace period, atau hanya berlaku jika dispute status tidak aktif.

Analis manusia berpengalaman biasanya tahu perbedaan ini dari konteks organisasi. Agent tidak. Jika semantic contract tidak eksplisit, agent akan mengisi kekosongan itu dengan inferensi. Dan inferensi seperti ini sering terlihat masuk akal, tetapi salah secara operasional.

### Semantic layer sebagai bahasa bersama

Dalam enterprise, semantic contract idealnya tidak berdiri sendiri. Ia menjadi bagian dari **semantic layer** yang menyamakan bahasa antara:
- BI dan analytics,
- aplikasi operasional,
- AI agents,
- dan pengguna bisnis.

Ini penting karena banyak konflik data sebenarnya bukan masalah kualitas teknis, melainkan masalah definisi.

Contoh di **shared services finance**:
tim controllership, tim FP&A, dan agent close assistant bisa memakai istilah “material variance” dengan arti berbeda jika semantic layer tidak dibakukan.

Contoh di **supply chain**:
“available inventory” bisa berarti on-hand, available-to-promise, atau stock setelah safety reserve. Jika agent replenishment tidak tahu definisi yang benar, rekomendasinya akan salah.

### Kapan semantic contract harus sangat ketat

Semantic contract perlu paling ketat pada data product yang:
- dipakai untuk keputusan lintas fungsi,
- menyentuh transaksi atau approval,
- dipakai agent untuk mengeksekusi tindakan,
- atau berada di domain regulated seperti HR, finance, legal, dan customer data.

Untuk use case eksploratif atau assistant internal berisiko rendah, semantic contract bisa lebih ringan. Tetapi begitu agent mulai memengaruhi workflow nyata, kontrak semantik harus diperlakukan sebagai bagian dari kontrol, bukan dokumentasi opsional.

## Permission-Aware Retrieval: Akses Harus Mengikuti Konteks

Dalam artikel tentang identity, access control, dan guardrails, kita sudah membahas bahwa agent tidak boleh bertindak hanya karena tool tersedia. Prinsip yang sama berlaku pada data.

**Agent tidak boleh mengambil data hanya karena data ada di index, lake, atau vector store.**

Akses harus mengikuti:
- siapa user atau principal asal,
- role dan delegated authority,
- workflow yang sedang berjalan,
- tujuan penggunaan,
- dan sensitivitas data.

Inilah inti dari **permission-aware retrieval**.

### Mengapa retrieval biasa tidak cukup

Banyak implementasi RAG atau search internal dimulai dengan pola sederhana: indeks semua dokumen, lalu ambil yang paling relevan secara semantik. Untuk enterprise, ini berbahaya.

Dokumen yang paling relevan belum tentu dokumen yang paling boleh diakses.

Contoh di **HR operations**:
agent onboarding mungkin mencari policy cuti atau benefit. Jika retrieval hanya berbasis kemiripan semantik, agent bisa menarik dokumen kompensasi atau kasus karyawan lain yang seharusnya tidak terlihat.

Contoh di **legal**:
agent contract assistant bisa menemukan kontrak yang sangat relevan secara isi, tetapi berada di yurisdiksi lain, business unit lain, atau matter yang dibatasi privilege.

Contoh di **customer service**:
agent bisa menarik histori pelanggan lain yang mirip secara pola, padahal konteks user hanya berhak melihat satu account tertentu.

### Permission harus ikut saat runtime, bukan hanya saat indexing

Kesalahan umum adalah menerapkan kontrol akses hanya saat data diindeks. Padahal hak akses bisa berubah tergantung:
- user yang memanggil agent,
- channel yang dipakai,
- tahap workflow,
- atau tujuan penggunaan.

Karena itu, permission-aware retrieval harus dievaluasi **saat runtime**.

Secara praktis, ini berarti data product atau knowledge product perlu membawa metadata seperti:
- klasifikasi sensitivitas,
- owner,
- business unit,
- jurisdiction,
- audience yang diizinkan,
- dan aturan penggunaan.

Lalu runtime agent harus mengevaluasi apakah konteks saat ini memenuhi syarat untuk mengambil data tersebut.

### Purpose-based access semakin penting

Untuk agentic systems, role-based access saja sering terlalu kasar. Dua orang dengan role sama belum tentu boleh memakai data untuk tujuan yang sama.

Contoh:
- seorang manager boleh melihat data timnya untuk review kinerja, tetapi tidak otomatis untuk investigasi kompensasi.
- agent finance boleh membaca detail invoice untuk exception handling, tetapi tidak untuk menyusun ringkasan vendor lintas entitas tanpa mandat yang tepat.
- agent legal boleh mengambil template kontrak untuk drafting, tetapi tidak semua arsip matter untuk tujuan umum.

Ini berarti permission-aware retrieval idealnya mempertimbangkan **purpose** selain role dan identity.

### Trade-off implementasi

Permission-aware retrieval menambah kompleksitas:
- metadata harus lebih kaya,
- integrasi IAM dan policy engine harus lebih rapat,
- latency bisa bertambah,
- dan desain indeks menjadi lebih rumit.

Tetapi untuk domain seperti HR, finance, legal, customer data, dan regulated operations, trade-off ini bukan pilihan tambahan. Ini syarat minimum agar agent tidak menjadi jalur baru kebocoran data atau pelanggaran kontrol.

## Quality dan Freshness: Agent Harus Tahu Kapan Data Tidak Layak Dipakai

Salah satu risiko paling praktis dalam agentic AI bukanlah model “berhalusinasi”, melainkan agent bertindak berdasarkan data yang:
- basi,
- tidak lengkap,
- tidak sinkron,
- atau sedang berada di status transisi.

Untuk workflow enterprise, ini bisa sangat merusak.

### Mengapa freshness penting secara operasional

Contoh di **procurement**:
agent membuat rekomendasi vendor berdasarkan status approved yang belum tersinkron dari sistem due diligence.

Contoh di **finance**:
agent close assistant menyusun commentary dari angka preliminary, padahal angka final sudah berubah.

Contoh di **customer operations**:
agent menjanjikan refund atau replacement berdasarkan status order yang belum diperbarui.

Contoh di **IT operations**:
agent incident triage memakai CMDB atau service dependency yang sudah tidak akurat, lalu mengarahkan remediasi ke sistem yang salah.

Dalam semua kasus ini, masalahnya bukan model. Masalahnya adalah data product tidak membawa sinyal kualitas dan freshness yang cukup.

### Apa yang harus ada pada data product

Data product untuk agent sebaiknya memiliki setidaknya empat mekanisme:

#### 1. Quality checks
Validasi dasar seperti:
- field wajib terisi,
- schema sesuai,
- referential integrity minimum,
- distribusi nilai tidak menyimpang ekstrem.

#### 2. Freshness indicator
Agent perlu tahu:
- kapan data terakhir diperbarui,
- expected refresh cycle,
- dan apakah data masih dalam jendela layak pakai.

#### 3. Anomaly detection
Jika ada lonjakan atau pola yang tidak biasa, agent sebaiknya tidak langsung menganggap data valid.

#### 4. Fallback behavior
Jika kualitas atau freshness tidak memenuhi threshold, agent harus tahu apa yang dilakukan:
- berhenti,
- meminta data tambahan,
- memakai sumber alternatif,
- atau mengeskalasi ke manusia.

### Agent harus bisa mengatakan “data tidak cukup”

Ini kemampuan yang sering diabaikan. Banyak tim terlalu fokus membuat agent selalu menjawab. Padahal dalam enterprise, perilaku yang benar sering kali adalah:

**“Saya tidak punya data yang cukup andal untuk melanjutkan.”**

Contoh:
- agent AP exception tidak boleh mengklasifikasikan mismatch jika goods receipt belum masuk.
- agent HR tidak boleh menjawab status benefit jika data eligibility belum final.
- agent supply chain tidak boleh merekomendasikan rerouting jika feed shipment belum diperbarui.

Secara governance, ini penting. Agent yang tahu kapan berhenti lebih berharga daripada agent yang selalu terlihat percaya diri.

### Trade-off bisnisnya

Semakin ketat threshold kualitas dan freshness, semakin aman keputusan agent, tetapi semakin banyak kasus yang akan jatuh ke jalur manual atau eskalasi. Sebaliknya, threshold yang terlalu longgar meningkatkan automation rate, tetapi juga meningkatkan risiko keputusan salah.

Karena itu, threshold harus ditentukan per use case:
- **knowledge assistant internal** bisa menoleransi freshness yang lebih longgar,
- **refund, payment, HR action, atau production remediation** membutuhkan threshold yang jauh lebih ketat.

## Knowledge Product untuk Unstructured Data

Tidak semua konteks agent berasal dari tabel dan API. Dalam banyak workflow enterprise, justru sumber paling penting datang dari:
- SOP,
- policy document,
- kontrak,
- email archive,
- knowledge article,
- runbook,
- dan memo internal.

Masalahnya, banyak organisasi memperlakukan semua ini sebagai “dokumen untuk diindeks”. Untuk agentic systems, itu tidak cukup. Dokumen-dokumen ini perlu diperlakukan sebagai **knowledge products**.

### Apa itu knowledge product

Knowledge product adalah kumpulan konten tidak terstruktur yang dikurasi agar bisa dipakai agent secara aman dan andal, lengkap dengan metadata, ownership, dan aturan penggunaan.

Jika data product menjawab pertanyaan “apa angka atau statusnya”, knowledge product membantu menjawab “aturan, prosedur, atau konteks apa yang berlaku”.

### Metadata yang wajib untuk knowledge product

Untuk agent, metadata pada dokumen sering sama pentingnya dengan isi dokumen itu sendiri. Beberapa metadata yang sangat penting:

- **effective date**
- **owner**
- **business unit**
- **jurisdiction**
- **document type**
- **classification atau sensitivity**
- **superseded status**
- **approval status**
- **source of truth**

Tanpa metadata ini, retrieval bisa mengambil dokumen yang benar secara topik tetapi salah secara konteks.

Contoh di **legal dan procurement**:
template kontrak yang relevan secara isi belum tentu berlaku untuk negara atau unit bisnis yang sedang diproses.

Contoh di **HR**:
policy benefit lama bisa sangat mirip dengan policy baru, tetapi sudah superseded.

Contoh di **IT operations**:
runbook lama mungkin masih relevan secara teknis, tetapi tidak lagi sesuai arsitektur produksi saat ini.

### Jangan indeks semua email dan berharap hasilnya baik

Ini anti-pattern yang cukup umum. Organisasi mengindeks email archive, shared drive, dan dokumen lama, lalu berharap agent akan “menemukan jawaban terbaik”. Hasilnya sering buruk:
- retrieval penuh noise,
- dokumen usang ikut muncul,
- konteks saling bertentangan,
- dan agent sulit membedakan policy resmi dari diskusi informal.

Untuk enterprise, knowledge product harus dikurasi. Tidak semua dokumen layak menjadi konteks agent. Kadang keputusan terbaik justru adalah **tidak memasukkan** sebagian besar arsip ke retrieval layer.

### Contoh praktis

Di **finance close**, knowledge product yang baik bisa berisi:
- accounting policy yang berlaku,
- close calendar,
- SOP exception handling,
- template commentary resmi,
- dan FAQ internal yang sudah divalidasi.

Di **customer operations**, knowledge product bisa berisi:
- refund policy,
- entitlement rules,
- escalation playbook,
- approved response guidance,
- dan product issue bulletin yang masih aktif.

Di **IT operations**, knowledge product bisa berisi:
- runbook resmi,
- postmortem yang sudah dikurasi,
- service dependency notes yang masih berlaku,
- dan change policy yang relevan.

## Implikasi Arsitektur dan Governance

Begitu data dan knowledge diperlakukan sebagai produk untuk agent, beberapa implikasi langsung muncul.

### Pertama, ownership harus jelas

Setiap data product dan knowledge product perlu owner:
- **business owner** untuk definisi dan allowed usage,
- **technical owner** untuk delivery, schema, dan kualitas,
- dan jika perlu **risk/compliance owner** untuk domain sensitif.

Tanpa owner, agent akan memakai data yang “tersedia”, tetapi tidak ada yang benar-benar bertanggung jawab saat definisi berubah atau kualitas turun.

### Kedua, katalog harus menjadi bagian dari control plane

Perusahaan perlu katalog yang tidak hanya mencatat keberadaan data product, tetapi juga:
- semantic contract,
- freshness expectation,
- quality status,
- access policy,
- dan risk tier.

Dengan begitu, agent platform dapat memperlakukan data product sebagai dependency yang governable, bukan koneksi ad hoc.

### Ketiga, evaluasi agent harus menguji data product juga

Jika agent gagal, jangan selalu menyalahkan model. Sering kali akar masalahnya ada pada:
- semantic ambiguity,
- metadata yang kurang,
- freshness yang buruk,
- atau permission yang tidak ikut saat runtime.

Karena itu, evaluation untuk agent sebaiknya mencakup pertanyaan:
- apakah data product yang dipakai memang tepat,
- apakah semantic contract cukup jelas,
- apakah fallback berjalan saat kualitas turun,
- dan apakah retrieval mematuhi policy.

## Checklist Praktis

Gunakan checklist berikut saat membangun **data product pertama untuk agentic workflow**.

### Menentukan kandidat pertama
- [ ] Pilih workflow yang jelas, sempit, dan bernilai, misalnya AP exception handling, procurement intake, customer refund triage, atau incident enrichment.
- [ ] Identifikasi keputusan apa yang akan dibantu agent, bukan semua data yang mungkin berguna.
- [ ] Bedakan data yang benar-benar dibutuhkan agent dari data mentah yang hanya “menarik untuk punya”.

### Mendesain data product
- [ ] Definisikan schema yang stabil dan mudah dikonsumsi agent.
- [ ] Dokumentasikan semantic contract untuk field dan metric penting.
- [ ] Tetapkan owner bisnis dan owner teknis.
- [ ] Tentukan freshness expectation dan quality threshold.
- [ ] Cantumkan allowed usage dan limitation secara eksplisit.

### Mendesain knowledge product
- [ ] Kurasi hanya dokumen yang memang layak menjadi konteks agent.
- [ ] Tambahkan metadata minimal: effective date, owner, business unit, jurisdiction, dan superseded status.
- [ ] Pisahkan policy resmi dari diskusi informal atau arsip yang tidak lagi berlaku.
- [ ] Pastikan source of truth jelas.

### Permission dan governance
- [ ] Terapkan permission-aware retrieval, bukan retrieval berbasis relevansi semantik saja.
- [ ] Pastikan access policy mengikuti user, role, workflow, dan purpose.
- [ ] Integrasikan metadata akses dengan policy engine atau control plane agent.
- [ ] Uji apakah agent menolak atau mengeskalasi saat data tidak boleh diakses.

### Quality dan operasi
- [ ] Pasang quality checks dan freshness indicator pada data product.
- [ ] Definisikan fallback behavior jika kualitas atau freshness tidak memenuhi threshold.
- [ ] Pastikan agent dapat menyatakan “data tidak cukup” secara eksplisit.
- [ ] Monitor drift kualitas data product, bukan hanya performa model.

### Sinyal bahaya
- [ ] Agent mengambil data langsung dari lake atau indeks dokumen tanpa semantic contract.
- [ ] Tidak ada owner yang jelas untuk definisi metric atau status bisnis.
- [ ] Dokumen lama, superseded, atau lintas yurisdiksi bercampur dalam retrieval.
- [ ] Permission hanya diperiksa saat indexing, bukan saat runtime.
- [ ] Agent tetap menjawab atau bertindak meski data basi atau tidak lengkap.

Pada akhirnya, membangun agentic enterprise bukan hanya soal model, orchestration, atau tool calling. Ia juga soal **mengemas data enterprise menjadi produk yang bisa dipakai agent dengan disiplin yang sama seperti kita mengemas API, workflow, dan kontrol keamanan**. Perusahaan yang memahami ini akan lebih cepat bergerak dari demo yang impresif ke operasi yang benar-benar dapat dipercaya.
