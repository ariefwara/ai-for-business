---
title: "Outcome-Based Operating Model"
sidebar_position: 31
---

# Outcome-Based Operating Model

Pada banyak perusahaan, operating model masih dibangun di atas logika yang sangat familiar: pekerjaan dipecah menjadi aktivitas, aktivitas dialokasikan ke tim, lalu kinerja diukur dari volume, SLA, utilization, dan jumlah FTE yang dibutuhkan untuk menyelesaikannya.

Model ini masuk akal ketika hampir seluruh eksekusi bergantung pada tenaga manusia.

Namun dalam **agentic enterprise**, logika itu mulai goyah. Ketika agent mengambil sebagian pekerjaan membaca konteks, merutekan kasus, menyiapkan tindakan, memanggil tool, bahkan menyelesaikan transaksi tertentu, maka ukuran seperti jam kerja, effort, atau jumlah orang per proses menjadi semakin kurang representatif. Yang lebih penting bukan lagi **berapa banyak aktivitas dilakukan**, tetapi **outcome apa yang benar-benar tercapai**.

Itulah inti dari **outcome-based operating model**: mengelola perusahaan berdasarkan hasil layanan dan dampak bisnis, bukan terutama berdasarkan aktivitas dan kapasitas tenaga kerja.

Ini bukan sekadar perubahan KPI. Ini perubahan cara mendesain layanan, mengalokasikan akuntabilitas, menyusun kontrak internal dan eksternal, serta memutuskan use case mana yang layak di-scale. Dalam konteks agentic AI, pergeseran ini menjadi sangat penting karena tanpa itu perusahaan mudah jatuh ke jebakan klasik: mengotomasi task yang sebenarnya tidak penting, mempercepat proses yang salah, atau mengukur keberhasilan AI dari pengurangan effort tanpa melihat kualitas hasil.

Artikel ini membahas mengapa outcome-based model menjadi fondasi penting bagi agentic enterprise, bagaimana pergeseran dari FTE ke service outcome terjadi, apa implikasinya terhadap decision rights dan accountability, dan bagaimana mengelola portofolio inisiatif agentic secara disiplin.

## Mengapa Outcome-Based Menjadi Penting

Begitu agent masuk ke workflow, struktur kerja berubah. Dalam finance, agent dapat membantu close orchestration, reconciliation preparation, atau invoice exception triage. Dalam procurement, agent dapat mengklasifikasikan intake, memeriksa policy, dan merutekan request. Dalam IT operations, agent dapat melakukan incident triage dan change readiness check. Dalam customer operations, agent dapat menyelesaikan kasus sederhana tanpa sentuhan manusia.

Jika manajemen tetap berfokus pada aktivitas, organisasi akan salah membaca nilai.

Misalnya, sebuah tim shared services finance sebelumnya diukur dari:
- jumlah invoice yang disentuh per analis,
- waktu rata-rata memproses tiket,
- dan utilization tim.

Setelah agent diterapkan, sebagian besar pekerjaan administratif bisa hilang. Jika perusahaan tetap memakai kacamata lama, mereka mungkin hanya melihat bahwa “aktivitas manusia menurun”. Padahal pertanyaan yang lebih relevan adalah:
- apakah invoice diproses lebih benar,
- apakah exception terselesaikan lebih cepat,
- apakah backlog turun,
- apakah first-pass resolution membaik,
- dan apakah tim manusia kini fokus pada kasus yang memang membutuhkan judgement.

Dengan kata lain, **aktivitas menjadi variabel antara, bukan tujuan utama**.

### Outcome lebih dekat ke nilai bisnis

Outcome-based model memaksa organisasi mendefinisikan hasil yang benar-benar penting. Contohnya:

- di **finance**: close lebih cepat dan lebih terkendali, invoice diproses benar, reconciliation exception turun;
- di **procurement**: request masuk ke jalur yang benar sejak awal, cycle time pengadaan membaik, policy compliance naik;
- di **customer operations**: kasus selesai pada kontak pertama, repeat contact turun, kepuasan pelanggan membaik;
- di **IT operations**: issue dipulihkan lebih cepat, false escalation turun, change lebih siap sebelum release;
- di **supply chain**: exception ditangani lebih cepat, service level membaik, biaya expedite berkurang.

Outcome seperti ini jauh lebih berguna daripada sekadar menghitung berapa task yang diotomasi.

### Menghindari otomasi task yang tidak penting

Salah satu manfaat terbesar dari outcome-based thinking adalah ia memaksa perusahaan bertanya: **apakah task ini memang perlu ada?**

Banyak proses enterprise penuh aktivitas warisan:
- pengecekan berulang yang sebenarnya bisa dihilangkan jika data lebih baik,
- handoff yang hanya ada karena struktur organisasi lama,
- approval yang tidak lagi proporsional dengan risiko,
- atau pelaporan manual yang tidak dipakai untuk keputusan nyata.

Jika perusahaan hanya mengejar automasi aktivitas, mereka akan mempercepat pemborosan. Agentic AI justru membuat risiko ini lebih besar, karena teknologi sekarang mampu mengotomasi lebih banyak hal. Tanpa disiplin outcome, organisasi bisa sangat efisien dalam menjalankan proses yang salah.

Karena itu, sebelum membangun agent, pertanyaan pertama seharusnya bukan “task mana yang bisa diotomasi?”, melainkan “outcome apa yang ingin diperbaiki, dan aktivitas mana yang benar-benar berkontribusi pada outcome itu?”

## Dari FTE ke Service Outcome

Pergeseran berikutnya terjadi pada cara perusahaan memandang layanan internal maupun eksternal. Banyak shared services, GCC, dan tech services masih dikelola dengan logika **effort-based**:
- berapa orang yang dialokasikan,
- berapa jam kerja yang dipakai,
- berapa tiket yang diproses,
- atau berapa kapasitas tim yang dibutuhkan.

Model ini tidak hilang sepenuhnya, tetapi semakin tidak memadai ketika digital labor menjadi bagian dari delivery.

### Mengapa pricing dan chargeback perlu berubah

Dalam model agentic, throughput bisa naik tanpa kenaikan linear pada headcount. Struktur biaya juga berubah:
- ada biaya platform,
- biaya model dan inferensi,
- biaya integrasi,
- biaya observability dan governance,
- tetapi ada penurunan pada effort manual untuk volume tertentu.

Akibatnya, pricing berbasis FTE atau jam kerja mulai kehilangan relevansi. Jika satu layanan kini diselesaikan oleh kombinasi agent, workflow engine, dan supervisor manusia, maka menagih atau mengalokasikan biaya hanya berdasarkan effort manusia menjadi menyesatkan.

Contoh internal:
- **shared services procurement** yang dulu mengenakan chargeback berdasarkan jumlah staf support per business unit, kini lebih masuk akal jika diukur dari outcome seperti request resolved, cycle time, atau compliance rate.
- **IT services** yang dulu dihitung dari jumlah tiket yang ditangani level-1, kini bisa bergeser ke metrik seperti incident resolved within target, service restoration time, atau change success readiness.
- **finance operations** yang dulu dibenarkan dengan rasio FTE per volume transaksi, kini perlu melihat cost per correctly processed invoice atau cost per resolved exception.

### Implikasi untuk vendor dan managed services

Pergeseran ini juga menyentuh kontrak vendor. Dalam layanan agentic, perusahaan sebenarnya tidak sedang membeli “alat” atau “tenaga tambahan”, tetapi semakin sering membeli **outcome layanan**.

Itu berarti kontrak managed services dan outsourcing perlu bergerak dari:
- input-based pricing,
- time and material,
- atau sekadar headcount leverage,

ke model yang lebih dekat ke:
- throughput berkualitas,
- resolution outcome,
- compliance outcome,
- atau business KPI tertentu.

Tentu ini tidak selalu mudah. Tidak semua layanan cocok dikontrak murni berbasis outcome. Jika prosesnya sangat dipengaruhi faktor eksternal atau data klien sendiri masih buruk, vendor akan sulit menerima risiko penuh. Namun arah pergeserannya jelas: **semakin agentic delivery matang, semakin lemah logika pricing berbasis effort semata**.

### Kapan model ini belum tepat

Outcome-based pricing tidak cocok diterapkan secara naif pada semua area. Beberapa kondisi yang membuatnya belum layak antara lain:
- outcome belum bisa didefinisikan dengan jelas,
- baseline kualitas belum ada,
- faktor eksternal terlalu dominan,
- atau kontrol atas data dan proses masih tersebar.

Dalam situasi seperti itu, perusahaan bisa memulai dengan model hibrida: sebagian biaya tetap berbasis kapasitas, sebagian lagi berbasis outcome yang disepakati.

## Decision Rights dan Accountability Harus Jelas

Outcome-based operating model terdengar menarik, tetapi ia menuntut disiplin organisasi yang lebih tinggi. Begitu fokus bergeser ke hasil, perusahaan harus sangat jelas tentang **siapa yang berhak memutuskan apa**, dan **siapa yang bertanggung jawab ketika outcome gagal tercapai**.

Dalam agentic enterprise, setidaknya ada tiga peran yang perlu dibedakan.

### 1. Business owner

Business owner bertanggung jawab atas outcome layanan atau proses. Ia menentukan:
- target bisnis,
- prioritas use case,
- definisi keberhasilan,
- dan trade-off operasional yang dapat diterima.

Contoh:
- CFO atau controllership lead untuk close outcome,
- CPO atau procurement operations lead untuk intake-to-PO outcome,
- COO customer operations untuk case resolution outcome,
- CIO atau head of operations untuk incident recovery outcome.

### 2. Agent owner

Agent owner bertanggung jawab atas desain dan performa agent dalam workflow:
- bagaimana agent bekerja,
- tool apa yang dipanggil,
- evaluasi apa yang dipakai,
- threshold apa yang diterapkan,
- dan bagaimana perubahan dirilis.

Peran ini sering berada pada product owner, platform owner, atau domain squad lead.

### 3. Risk owner

Risk owner memastikan bounded autonomy tetap berada dalam guardrail:
- policy apa yang berlaku,
- approval apa yang wajib,
- data apa yang boleh diakses,
- dan kapan use case harus ditahan atau dibatasi.

Di domain tertentu, risk owner bisa berasal dari compliance, internal control, security, legal, atau fungsi risiko operasional.

### Ketika agent gagal, organisasi harus tahu sumber masalahnya

Salah satu ujian nyata outcome-based model adalah saat hasil tidak sesuai harapan. Misalnya:
- invoice salah diproses,
- incident salah dirutekan,
- forecast exception tidak tertangani,
- atau customer case ditutup terlalu cepat tetapi masalah belum selesai.

Dalam situasi seperti itu, organisasi harus bisa membedakan apakah akar masalahnya ada pada:
- **data** yang salah atau tidak lengkap,
- **policy** yang ambigu atau tidak diperbarui,
- **tool/integration** yang gagal,
- **model/agent behavior** yang buruk,
- atau **process design** yang memang keliru.

Tanpa pemisahan ini, semua kegagalan akan jatuh ke satu keranjang bernama “AI error”, padahal tindakan perbaikannya berbeda-beda.

### Akuntabilitas tetap pada manusia dan organisasi

Ini prinsip yang tidak boleh kabur: **agent tidak memegang akuntabilitas**. Agent dapat menjalankan tindakan, memberi rekomendasi, atau mengorkestrasi workflow, tetapi tanggung jawab tetap berada pada manusia dan struktur organisasi.

Ini penting untuk dua alasan.

Pertama, secara governance, perusahaan tidak bisa mengalihkan tanggung jawab ke sistem. Jika ada kesalahan material di finance, pelanggaran policy di procurement, atau insiden keamanan di IT, yang dimintai pertanggungjawaban tetap pemilik proses dan organisasi.

Kedua, secara operasional, kejelasan akuntabilitas mencegah kebingungan. Jika semua orang menganggap “agent yang salah”, maka tidak ada yang benar-benar memperbaiki data, policy, atau desain proses.

## Mengelola Inisiatif sebagai Portfolio Outcome

Begitu perusahaan memiliki banyak inisiatif agentic, tantangannya bukan lagi sekadar membangun use case, tetapi **mengelola portofolio outcome**. Ini penting karena tidak semua use case layak diteruskan, dan tidak semua quick win layak di-scale.

### Portofolio harus dibagi dengan sadar

Secara praktis, portofolio agentic biasanya perlu menyeimbangkan empat kategori:

1. **Quick wins**  
   Use case dengan nilai jelas, risiko terkendali, dan data cukup siap. Misalnya intake classification, invoice triage, atau service desk resolution untuk kasus standar.

2. **Strategic bets**  
   Use case yang berpotensi mengubah operating model lebih besar, tetapi lebih kompleks. Misalnya close orchestration lintas entitas, supply chain exception coordination, atau multi-agent IT delivery workflow.

3. **Platform investments**  
   Inisiatif yang mungkin tidak langsung terlihat nilainya pada satu proses, tetapi penting untuk scale: identity, observability, policy engine, integration layer, evaluation harness.

4. **Risk reduction initiatives**  
   Perbaikan data, control, auditability, dan governance yang memungkinkan use case lain berjalan aman.

Jika perusahaan hanya mengejar quick wins, mereka akan punya banyak pilot tetapi sedikit transformasi. Jika hanya mengejar strategic bets, mereka berisiko terlalu lambat dan kehilangan momentum. Portofolio yang sehat membutuhkan keseimbangan.

### Gunakan stage gate dan kill criteria

Outcome-based model juga menuntut disiplin untuk menghentikan inisiatif yang tidak layak. Setiap use case sebaiknya punya **stage gate** yang jelas:
- apakah masalah bisnisnya nyata,
- apakah baseline tersedia,
- apakah data dan policy cukup siap,
- apakah pilot menunjukkan outcome yang membaik,
- apakah correction rate dan risk profile masih masuk akal,
- dan apakah economics-nya sehat.

Jika jawabannya tidak, use case harus:
- dihentikan,
- dipersempit,
- atau didesain ulang.

Ini penting karena agentic AI mudah menciptakan bias optimisme. Demo yang bagus sering membuat organisasi enggan mengakui bahwa use case tertentu sebenarnya tidak cukup bernilai atau terlalu berisiko untuk saat ini.

### Review portofolio harus lintas fungsi

Portfolio review tidak boleh hanya menjadi forum teknologi. Ia harus melibatkan:
- business owner,
- CIO/CTO atau platform leader,
- finance,
- risk/compliance/security,
- dan bila relevan CHRO atau transformation office.

Alasannya sederhana: keputusan scale bukan hanya soal apakah agent bekerja, tetapi apakah outcome bisnisnya nyata, governance-nya memadai, dan organisasi siap menyerap perubahan.

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

1. **Tentukan outcome utama per workflow prioritas.**  
   Jangan mulai dari daftar task yang bisa diotomasi. Mulailah dari hasil yang ingin diperbaiki: resolution time, accuracy, compliance, service level, atau quality of decision.

2. **Tinjau ulang model chargeback, pricing, atau business case.**  
   Jika layanan masih diukur terutama dari FTE dan effort, putuskan metrik outcome apa yang akan mulai dipakai untuk shared services, GCC, tech services, atau vendor-managed services.

3. **Tetapkan decision rights secara eksplisit.**  
   Bedakan business owner, agent owner, dan risk owner. Pastikan jelas siapa yang memegang outcome, siapa yang mengelola performa agent, dan siapa yang menetapkan guardrail.

4. **Bangun stage gate untuk portofolio agentic.**  
   Setiap use case harus punya kriteria lanjut, redesign, atau stop. Jangan biarkan semua pilot hidup terlalu lama tanpa keputusan.

5. **Ubah forum review dari aktivitas ke outcome.**  
   Dalam steering committee atau operating review, kurangi fokus pada jumlah automasi dan jam kerja yang dihemat. Tambah fokus pada quality, resolution, trust, risk, dan economics per outcome.

### Checklist readiness singkat

- [ ] Perusahaan sudah bisa mendefinisikan outcome yang jelas untuk use case prioritas.
- [ ] Baseline proses saat ini tersedia, termasuk kualitas dan cycle time.
- [ ] Shared services atau fungsi operasi mulai siap bergerak dari effort metric ke service outcome metric.
- [ ] Decision rights antara business, technology, dan risk sudah cukup jelas.
- [ ] Ada mekanisme untuk membedakan kegagalan data, policy, tool, model, dan process design.
- [ ] Portfolio review melibatkan fungsi bisnis, IT, finance, dan risk secara bersama.
- [ ] Ada kill criteria untuk use case yang tidak menunjukkan value atau terlalu berisiko.
- [ ] Metrik keberhasilan tidak lagi hanya berbasis FTE, utilization, atau volume aktivitas.

### Sinyal bahaya bahwa topik ini belum siap di-scale

- [ ] Program AI masih dijustifikasi terutama dari pengurangan headcount atau jam kerja.
- [ ] Use case dipilih karena mudah didemokan, bukan karena outcome bisnisnya penting.
- [ ] Tidak ada owner yang jelas untuk outcome, performa agent, dan risiko.
- [ ] Kegagalan agent selalu dibahas secara umum tanpa analisis akar masalah.
- [ ] Vendor atau tim internal masih diukur hampir sepenuhnya dari effort, bukan hasil layanan.
- [ ] Portfolio penuh pilot, tetapi sedikit keputusan tegas untuk scale, redesign, atau stop.
- [ ] Governance board hanya melihat adopsi teknologi, bukan kualitas outcome dan kontrol.
- [ ] Organisasi belum siap menerima bahwa beberapa aktivitas seharusnya dihilangkan, bukan diotomasi.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

**Jika besok sebagian besar aktivitas rutin di fungsi Anda diambil alih oleh agent, apakah model manajemen Anda masih akan masuk akal—atau Anda masih mengelola perusahaan berdasarkan jumlah orang dan jam kerja, bukan berdasarkan outcome layanan yang benar-benar diciptakan?**

Itulah pertanyaan inti dari outcome-based operating model. Dalam agentic enterprise, perusahaan yang menang bukan yang paling cepat mengotomasi aktivitas, melainkan yang paling disiplin mengelola hasil.
