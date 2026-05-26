---
title: "Mengubah Shared Services Menjadi Agentic Services"
sidebar_position: 24
---

# Mengubah Shared Services Menjadi Agentic Services

Pada banyak perusahaan, shared services lahir dari logika yang sangat jelas: standarisasi proses, konsolidasi volume kerja, dan efisiensi biaya melalui skala. Finance operations, HR services, procurement operations, IT support, dan customer operations dipusatkan agar transaksi bisa diproses lebih konsisten daripada jika tersebar di tiap unit bisnis.

Model ini masih relevan. Tetapi ia mulai mencapai batasnya.

Ketika volume naik, variasi exception bertambah, dan ekspektasi bisnis bergerak dari sekadar efisiensi ke kecepatan serta kualitas outcome, shared services berbasis antrian manusia mulai menunjukkan kelemahannya. Tiket menumpuk. Handoff bertambah. SLA dipenuhi secara administratif, tetapi pengalaman internal atau eksternal tetap buruk. Banyak tim akhirnya sibuk memindahkan pekerjaan, bukan menyelesaikannya.

Di sinilah **agentic services** menjadi penting. Bukan sebagai lapisan chatbot di atas service desk, melainkan sebagai perubahan model layanan: dari delivery yang terutama bergantung pada tenaga manusia menjadi **layanan berbasis human-agent teams**. Dalam model ini, agent membaca request, memahami konteks, memanggil sistem, menyiapkan tindakan, dan menyelesaikan kasus sederhana secara langsung. Manusia tidak hilang, tetapi perannya bergeser ke exception handling, policy judgement, stakeholder management, dan continuous improvement.

Perubahan ini penting karena targetnya bukan sekadar “mengurangi FTE”. Jika itu satu-satunya tujuan, perusahaan biasanya akan membangun automasi yang rapuh dan kehilangan trust. Target yang lebih tepat adalah **mengubah service model**:
- dari ticket handling ke resolution orchestration,
- dari throughput manusia ke kombinasi digital labor dan human oversight,
- dari SLA berbasis aktivitas ke outcome berbasis kualitas dan penyelesaian.

Artikel ini membahas bagaimana shared services dapat bergerak ke arah tersebut secara disiplin.

## Mengapa Shared Services Menjadi Kandidat Awal

Tidak semua fungsi cocok menjadi titik awal agentic transformation. Shared services justru sering menjadi kandidat yang lebih baik daripada fungsi yang sangat strategis atau sangat tidak terstruktur, karena tiga alasan.

### 1. Volume tinggi dan pola kerja berulang

Shared services menangani pekerjaan dengan volume besar:
- invoice exception,
- employee query,
- purchase request intake,
- password reset,
- order status inquiry,
- dispute handling,
- onboarding task,
- dan banyak variasi kasus serupa.

Volume tinggi memberi dua keuntungan. Pertama, ada cukup banyak data historis untuk memahami pola kasus, exception, dan outcome. Kedua, ada cukup banyak repetisi untuk membuat investasi pada agentic workflow menjadi layak.

### 2. Proses relatif standar, meski tidak sepenuhnya sederhana

Banyak proses shared services bukan proses “mudah”, tetapi cukup terstruktur untuk dipecah menjadi langkah yang bisa diorkestrasi:
- baca request,
- klasifikasikan intent,
- ambil data dari sistem,
- cek policy,
- tentukan jalur,
- siapkan tindakan,
- lalu selesaikan atau eskalasi.

Ini berbeda dari pekerjaan yang sangat strategis atau sangat negosiasional, di mana konteks sosial dan judgement manusia jauh lebih dominan.

### 3. Data operasionalnya luas

Shared services biasanya sudah hidup di atas ERP, CRM, HRIS, ITSM, knowledge base, SOP, dan workflow engine. Artinya, fondasi untuk agentic service sebenarnya sudah ada, meski sering tersebar dan belum siap dipakai secara terpadu.

Contohnya:
- **finance shared services** punya data invoice, PO, goods receipt, vendor master, dan policy pembayaran;
- **HR services** punya HRIS, knowledge article, case history, dan policy benefit;
- **procurement operations** punya intake form, kontrak, vendor status, dan approval matrix;
- **IT support** punya ticketing, CMDB, runbook, dan telemetry;
- **customer operations** punya CRM, order history, entitlement rules, dan transcript interaksi.

Namun penting untuk menegaskan satu hal: shared services bukan kandidat awal karena “mudah diotomasi”, melainkan karena **cukup kaya untuk didesain ulang**. Jika perusahaan hanya mengejar pengurangan tenaga kerja, mereka akan cenderung memilih kasus yang paling sempit dan paling aman, lalu berhenti di automasi parsial. Itu bisa memberi efisiensi lokal, tetapi tidak mengubah model layanan.

## Dari Ticket Handling ke Autonomous Resolution

Perubahan paling mendasar dalam shared services agentic adalah pergeseran dari **mengelola antrian kerja** ke **mengorkestrasi penyelesaian**.

Dalam model lama, service desk atau operations team menerima tiket, membaca isi permintaan, mencari data di beberapa sistem, memeriksa policy, lalu memutuskan apakah kasus bisa diselesaikan atau harus diteruskan. Banyak waktu habis bukan untuk keputusan yang bernilai tinggi, tetapi untuk pekerjaan administratif dan pencarian konteks.

Dalam model agentic, sebagian besar langkah awal itu dapat dipindahkan ke agent.

### Apa yang bisa dilakukan agent

Untuk kasus yang cukup jelas dan berisiko rendah sampai menengah, agent dapat:
- membaca email, form, chat, atau tiket,
- mengklasifikasikan jenis permintaan,
- mengambil konteks dari knowledge base dan sistem transaksi,
- memeriksa status, entitlement, atau policy,
- menyiapkan tindakan seperti draft response, update status, atau draft transaction,
- dan pada kondisi tertentu mengeksekusi penyelesaian.

Contoh praktis:

#### IT support
Untuk request seperti password reset, akses aplikasi standar, atau status insiden umum, agent dapat membaca permintaan, memverifikasi identitas dan konteks, memanggil tool yang sesuai, lalu menyelesaikan kasus tanpa menunggu analis manusia.

#### HR services
Untuk pertanyaan tentang cuti, status onboarding, atau dokumen kebijakan, agent dapat mengambil data dari HRIS dan knowledge base, lalu memberi jawaban yang terpersonalisasi. Jika ada tindakan administratif sederhana, agent dapat menyiapkan atau menjalankannya sesuai batas otorisasi.

#### Procurement operations
Untuk intake pembelian standar, agent dapat mengklasifikasikan kebutuhan, memeriksa apakah item tersedia di katalog, mengecek vendor approved, lalu membuat draft purchase request atau mengarahkan requester ke jalur yang benar.

#### Finance operations
Untuk exception invoice sederhana, agent dapat mencocokkan invoice dengan PO dan goods receipt, mengidentifikasi mismatch dasar, lalu merutekan ke jalur yang tepat atau menyiapkan rekomendasi penyelesaian.

### Apa yang tetap menjadi domain manusia

Semakin agent mengambil pekerjaan rutin, semakin jelas area di mana manusia justru menjadi lebih penting:
- exception yang tidak sesuai pola,
- konflik antar-policy,
- kasus yang menyentuh stakeholder sensitif,
- negosiasi dengan vendor atau pelanggan,
- keputusan yang berdampak material,
- dan perbaikan proses berkelanjutan.

Ini berarti peran tim shared services berubah. Mereka tidak lagi terutama menjadi “pemroses tiket”, tetapi menjadi:
- **exception resolver**,
- **policy interpreter**,
- **service quality manager**,
- dan **trainer of the system** melalui feedback operasional.

### Service desk menjadi orchestration layer

Dalam desain yang matang, service desk tidak lagi identik dengan inbox atau queue manusia. Ia menjadi **lapisan orkestrasi** yang mengatur:
- request mana yang bisa diselesaikan otomatis,
- request mana yang butuh approval,
- request mana yang harus langsung ke manusia,
- dan bagaimana fallback terjadi saat agent gagal.

Ini perubahan penting. Jika perusahaan hanya menambahkan agent di depan service desk lama tanpa mengubah desain alur, hasilnya biasanya hanya “chatbot plus backlog lama”. Nilai transformasinya kecil.

Trade-off-nya juga harus jelas. Autonomous resolution cocok untuk kasus dengan:
- pola yang cukup stabil,
- data yang tersedia,
- policy yang relatif jelas,
- dan dampak yang bisa dibatasi.

Ia tidak cocok untuk kasus yang sangat ambigu, sangat emosional, atau sangat material tanpa kontrol tambahan.

## Operating Controls: Shared Services Butuh Katalog Layanan Baru

Begitu shared services bergerak ke model human-agent team, kontrol operasional tidak bisa lagi mengandalkan definisi layanan lama. Perusahaan membutuhkan **service catalog baru** yang membedakan setidaknya tiga jenis layanan.

### 1. Human-delivered service
Layanan yang tetap terutama dijalankan manusia karena judgement, sensitivitas, atau risiko tinggi.

Contoh:
- sengketa pelanggan bernilai besar,
- keputusan HR yang memengaruhi status kerja,
- treatment akuntansi material,
- perubahan produksi TI berisiko tinggi.

### 2. Agent-assisted service
Agent membantu membaca konteks, menyiapkan draft, atau memberi rekomendasi, tetapi manusia tetap menjadi pengambil keputusan utama.

Contoh:
- draft commentary finance close,
- rekomendasi jalur sourcing,
- draft respons customer complaint,
- incident triage untuk engineer.

### 3. Agent-executed service
Agent dapat menyelesaikan layanan secara langsung dalam batas policy yang jelas, dengan fallback ke manusia bila perlu.

Contoh:
- password reset,
- status order inquiry,
- update data administratif tertentu,
- routing purchase request standar,
- penyelesaian query kebijakan yang tidak ambigu.

Pembedaan ini penting karena setiap kategori membutuhkan kontrol yang berbeda.

## Setiap layanan harus punya kontrol operasional eksplisit

Minimal, setiap layanan agentic perlu memiliki:

### SLA yang relevan
Bukan hanya waktu respons, tetapi juga waktu penyelesaian. Dalam agentic services, SLA harus mencerminkan outcome, bukan sekadar acknowledgment.

### Escalation rules
Kapan agent harus berhenti? Kapan kasus harus masuk supervisor? Kapan approval wajib? Ini harus eksplisit, bukan diserahkan ke interpretasi runtime semata.

### Audit trail
Perusahaan harus bisa melihat:
- request masuk dari mana,
- konteks apa yang dipakai,
- tool apa yang dipanggil,
- tindakan apa yang dilakukan,
- dan kapan manusia mengambil alih.

Tanpa audit trail, shared services agentic akan sulit dipertanggungjawabkan ke audit internal, compliance, atau pemilik proses.

### Performance metric
Setiap layanan harus punya metrik yang sesuai dengan mode layanannya. Layanan agent-executed tidak bisa diukur dengan cara yang sama seperti layanan human-delivered.

## Fallback ke manusia bukan tanda kegagalan

Salah satu kesalahan desain paling umum adalah menganggap fallback ke manusia sebagai sesuatu yang harus dihindari sebisa mungkin. Dalam shared services, itu justru kontrol penting.

Fallback dibutuhkan ketika:
- data tidak cukup,
- policy bertabrakan,
- confidence rendah,
- risiko terlalu tinggi,
- atau pengguna menolak hasil agent.

Desain yang sehat bukan yang memaksa agent menyelesaikan semua kasus, tetapi yang tahu **kapan harus berhenti dengan aman**. Jika fallback tidak dirancang baik, dua hal bisa terjadi:
1. agent terlalu agresif dan membuat kesalahan mahal, atau  
2. agent terlalu konservatif sehingga semua kasus tetap jatuh ke manusia dan nilai bisnis hilang.

Karena itu, operating control harus mengatur bukan hanya apa yang boleh dilakukan agent, tetapi juga **batas kepercayaan** yang layak diberikan.

## Mengukur Nilai: Dari Efisiensi ke Kualitas Outcome

Shared services agentic sering dijual dengan narasi produktivitas. Itu tidak salah, tetapi terlalu sempit. Nilai yang lebih penting adalah perubahan kualitas layanan.

### Metrik operasional utama

Beberapa metrik yang paling berguna untuk shared services agentic adalah:

- **first-contact resolution**: berapa banyak kasus selesai pada interaksi pertama;
- **touchless processing rate**: berapa banyak kasus selesai tanpa sentuhan manusia;
- **cycle time**: berapa lama dari request masuk sampai selesai;
- **exception backlog**: apakah kasus sulit menumpuk atau berkurang;
- **cost per case**: berapa biaya nyata untuk menyelesaikan satu kasus.

Metrik ini membantu melihat apakah service model benar-benar berubah, bukan hanya apakah agent dipakai.

### Kualitas tetap harus diukur

Efisiensi tanpa kualitas akan merusak trust. Karena itu, shared services agentic juga harus diukur dengan:
- **error rate**,
- **compliance finding**,
- **user satisfaction**,
- dan **trust score** atau indikator kepercayaan pengguna terhadap hasil agent.

Trust score tidak harus rumit. Bisa dimulai dari acceptance rate, override rate, atau feedback pengguna terhadap rekomendasi agent. Yang penting, perusahaan tidak hanya mengukur “berapa banyak yang otomatis”, tetapi juga “apakah orang percaya dan apakah hasilnya benar”.

## Contoh blueprint: agentic finance shared service

Finance shared services adalah contoh yang baik karena prosesnya cukup terstruktur, volumenya tinggi, tetapi tetap punya area judgement yang jelas.

Bayangkan sebuah organisasi memulai dari **accounts payable dan close support**.

### Layanan yang bisa menjadi agent-assisted
- klasifikasi exception invoice,
- pengumpulan evidence dari ERP,
- draft penjelasan variance,
- ringkasan aging issue untuk reviewer.

Di sini manusia masih memutuskan langkah akhir, tetapi waktu yang dihabiskan untuk mencari data dan menyiapkan narasi turun signifikan.

### Layanan yang bisa menjadi agent-executed
- menjawab status invoice atau payment,
- routing query vendor ke jalur yang tepat,
- memproses kasus low-risk dengan aturan yang sangat jelas,
- membuka atau memperbarui case secara otomatis.

### Layanan yang tetap human-delivered
- keputusan treatment akuntansi material,
- exception yang menyentuh fraud suspicion,
- dispute vendor yang membutuhkan negosiasi,
- approval pembayaran bernilai tinggi.

### Kontrol yang harus ada
- service catalog yang membedakan tiga mode layanan tadi,
- SLA per jenis layanan,
- threshold nilai dan risk tier,
- audit trail untuk setiap tool call dan rekomendasi,
- fallback ke AP analyst atau controller,
- review mingguan atas override dan correction pattern.

### Metrik yang relevan
- touchless rate untuk vendor inquiry,
- cycle time untuk invoice exception,
- first-contact resolution untuk query status,
- correction rate pada draft commentary,
- backlog exception yang menunggu manusia,
- dan compliance issue yang muncul setelah implementasi.

Blueprint seperti ini menunjukkan bahwa agentic finance shared service bukan berarti “finance tanpa manusia”. Yang berubah adalah **siapa mengerjakan apa**, **kapan manusia masuk**, dan **bagaimana layanan diukur**.

## Kapan Shared Services Belum Siap Diubah Menjadi Agentic Services

Tidak semua shared services siap langsung di-scale. Beberapa sinyal bahaya yang perlu diperhatikan:

- proses dasarnya sendiri belum stabil atau belum terdokumentasi;
- knowledge base penuh dokumen usang dan policy bertentangan;
- integrasi ke ERP, CRM, HRIS, atau ITSM masih rapuh;
- tidak ada pemilik layanan yang jelas antara operasi, IT, dan risk;
- metrik layanan masih hanya berbasis volume tiket, bukan outcome;
- exception rate sangat tinggi dan penyebabnya belum dipahami;
- organisasi masih melihat agent hanya sebagai alat penghemat tenaga kerja.

Dalam kondisi seperti ini, agentic transformation berisiko menjadi lapisan baru di atas kekacauan lama. Hasilnya biasanya adalah automasi yang tampak canggih tetapi sulit dipercaya dan sulit di-scale.

## Checklist Praktis

Berikut keputusan dan checklist yang sebaiknya diambil setelah memahami topik ini.

### Keputusan yang perlu diambil sekarang

1. **Pilih domain shared services awal yang paling layak.**  
   Prioritaskan area dengan volume tinggi, pola cukup standar, data operasional tersedia, dan owner proses yang jelas.

2. **Tentukan mode layanan per use case.**  
   Bedakan secara eksplisit mana yang human-delivered, agent-assisted, dan agent-executed.

3. **Rancang fallback dan escalation sejak awal.**  
   Jangan menunggu agent gagal di production baru memikirkan kapan manusia harus mengambil alih.

4. **Ubah service catalog dan metrik layanan.**  
   Shared services agentic tidak bisa dikelola dengan definisi layanan lama yang hanya berfokus pada tiket dan headcount.

5. **Tetapkan governance lintas fungsi.**  
   COO, CIO, pemilik proses, risk, dan HR perlu sepakat bahwa ini adalah redesign operating model, bukan proyek tool semata.

### Checklist readiness singkat

- [ ] Ada satu atau dua domain shared services dengan volume tinggi dan pola kerja cukup berulang.
- [ ] Data dan knowledge yang dibutuhkan agent tersedia dan cukup dapat dipercaya.
- [ ] Integrasi ke sistem inti sudah memungkinkan read, draft, atau execute sesuai risk tier.
- [ ] Service catalog dapat dibedakan antara human, agent-assisted, dan agent-executed.
- [ ] SLA, escalation rule, audit trail, dan owner layanan sudah didefinisikan.
- [ ] Fallback ke manusia dirancang sebagai bagian dari layanan, bukan pengecualian ad hoc.
- [ ] Metrik mencakup first-contact resolution, touchless rate, cycle time, backlog, cost per case, dan kualitas.
- [ ] Supervisor operasi siap menangani exception dan memberi feedback ke backlog perbaikan.
- [ ] Risk dan compliance memahami batas otonomi tiap layanan.
- [ ] HR atau transformation lead sudah mulai memetakan perubahan peran tim shared services.

### Sinyal bahaya sebelum scale

- [ ] Agent diposisikan terutama sebagai program pengurangan FTE.
- [ ] Tidak ada pemisahan jelas antara layanan yang boleh dieksekusi agent dan yang harus tetap dikendalikan manusia.
- [ ] Knowledge base belum dibersihkan, tetapi agent sudah diberi otonomi tinggi.
- [ ] Tim operasi tidak punya dashboard untuk melihat override, correction, dan exception pattern.
- [ ] Fallback ke manusia belum jelas, sehingga kasus gagal berisiko “hilang di tengah”.
- [ ] Metrik keberhasilan hanya volume otomatisasi, tanpa ukuran kualitas dan trust.

### Pertanyaan reflektif untuk pimpinan

**Untuk CIO, COO, CHRO, dan transformation leader:**  
Apakah shared services di perusahaan Anda masih didesain sebagai mesin pemrosesan tiket berbasis manusia, atau sudah mulai dipikirkan sebagai portofolio layanan outcome-based yang dijalankan oleh human-agent teams dengan kontrol, metrik, dan akuntabilitas yang baru?

Itulah pertanyaan yang akan menentukan apakah agentic AI hanya menjadi lapisan efisiensi tambahan, atau benar-benar mengubah cara perusahaan memberikan layanan internal dan operasionalnya.
