---
title: "Anti-Patterns Agentic AI di Perusahaan"
sidebar_position: 39
---

# Anti-Patterns Agentic AI di Perusahaan

Dalam banyak perusahaan, kegagalan program agentic AI jarang terjadi karena satu alasan besar yang dramatis. Lebih sering, kegagalan datang dari serangkaian keputusan yang tampak masuk akal secara lokal, tetapi merusak program secara sistemik ketika dibawa ke skala enterprise.

Satu tim membangun agent kecil untuk satu tugas. Tim lain membeli agent dari vendor karena demonya meyakinkan. Fungsi ketiga mendorong otonomi lebih tinggi agar terlihat progresif. Sementara itu, HR belum dilibatkan, baseline value belum ada, dan governance masih berhenti di dokumen kebijakan.

Dari luar, semua ini tampak seperti kemajuan. Dari dalam, perusahaan sedang membangun fondasi yang rapuh.

Itulah mengapa pembahasan tentang anti-pattern penting. Setelah membahas roadmap, agent factory, vendor model, change management, governance board, serta legal dan accountability, langkah berikutnya adalah mengenali **pola kegagalan yang berulang**. Tujuannya bukan membuat organisasi terlalu hati-hati. Tujuannya justru agar perusahaan bisa bergerak cepat **tanpa mengulang kesalahan yang sama**.

Artikel ini membahas lima anti-pattern yang paling sering muncul saat perusahaan mencoba menskalakan agentic AI lintas domain, vendor, dan workforce.

## 1. Agent di Mana-Mana, Nilai di Mana?

Anti-pattern pertama adalah yang paling umum: perusahaan membangun banyak agent kecil tanpa hubungan yang jelas ke value stream, baseline metric, atau prioritas operating model.

Gejalanya mudah dikenali:
- ada banyak demo,
- ada banyak nama agent,
- ada banyak eksperimen per fungsi,
- tetapi eksekutif kesulitan menjawab satu pertanyaan sederhana: **nilai bisnis apa yang benar-benar membaik?**

### Mengapa ini terjadi

Ada tiga penyebab utama.

Pertama, agentic AI sering terlihat murah untuk dimulai. Satu tim bisa membuat agent untuk summarization, routing, drafting, atau policy lookup dalam waktu relatif singkat. Karena entry barrier rendah, backlog ide tumbuh lebih cepat daripada disiplin portofolio.

Kedua, organisasi sering mengukur kemajuan dari jumlah use case, bukan dari outcome. Akibatnya, tim terdorong untuk “meluncurkan” agent baru, bukan membuktikan bahwa workflow tertentu menjadi lebih cepat, lebih akurat, atau lebih murah dijalankan.

Ketiga, banyak use case dipilih karena mudah didemokan, bukan karena penting bagi operasi. Agent untuk menjawab pertanyaan internal mungkin terlihat impresif, tetapi belum tentu menyentuh bottleneck utama di finance close, procurement intake, customer operations, atau IT incident handling.

### Dampaknya: demo fatigue dan turunnya trust eksekutif

Ketika terlalu banyak agent dibangun tanpa baseline, organisasi masuk ke fase **demo fatigue**. Setiap bulan ada showcase baru, tetapi sponsor bisnis mulai skeptis karena:
- tidak ada metrik sebelum-sesudah yang kredibel,
- tidak jelas mana yang benar-benar dipakai,
- tidak ada keputusan tegas untuk menghentikan use case yang lemah,
- dan biaya platform, integrasi, serta pengawasan mulai naik.

Ini berbahaya karena trust eksekutif biasanya turun lebih cepat daripada kemampuan teknis tim meningkat. Sekali program AI dianggap penuh demo tetapi miskin hasil, pendanaan dan dukungan lintas fungsi akan melemah.

### Contoh enterprise

Dalam **finance**, perusahaan bisa memiliki agent untuk draft commentary, agent untuk evidence lookup, agent untuk reconciliation support, dan agent untuk policy Q&A. Namun jika tidak ada baseline pada cycle time close, correction rate, atau beban review controller, maka empat agent itu hanya menjadi katalog eksperimen.

Dalam **procurement**, tim bisa membangun agent intake, agent vendor FAQ, agent contract summarization, dan agent policy checker. Tetapi jika tidak ada ukuran seperti salah routing, waktu pemrosesan request, atau backlog intake, maka sulit membuktikan mana yang benar-benar bernilai.

Dalam **shared services** atau **GCC**, anti-pattern ini lebih berbahaya lagi. Karena volume use case tinggi, organisasi bisa terlihat sangat aktif padahal sebenarnya hanya memproduksi variasi agent tanpa standardisasi dan tanpa economics yang sehat.

### Solusi: portfolio discipline dan kill criteria

Perusahaan perlu memperlakukan agentic AI sebagai **portofolio investasi operasional**, bukan kumpulan eksperimen kreatif.

Prinsip minimumnya:
- setiap agent harus terkait ke workflow atau value stream yang jelas,
- setiap use case harus punya baseline metric,
- setiap pilot harus punya success criteria,
- dan setiap use case harus punya **kill criteria**.

Kill criteria penting karena banyak organisasi hanya punya mekanisme untuk memulai, bukan untuk menghentikan. Padahal menghentikan use case yang tidak menunjukkan nilai adalah tanda kedewasaan, bukan kegagalan.

Pertanyaan yang harus dipakai:
- outcome apa yang ingin diperbaiki?
- metrik apa yang akan berubah?
- siapa owner bisnisnya?
- jika dalam periode tertentu bukti value tidak muncul, apakah use case akan dihentikan, dipersempit, atau didesain ulang?

Jika perusahaan belum bisa menjawab pertanyaan itu, kemungkinan besar agent yang dibangun hanya menambah noise.

## 2. Otonomi Terlalu Tinggi, Terlalu Cepat

Anti-pattern kedua adalah memberi agent izin bertindak sebelum data, policy, identity, dan observability siap.

Ini biasanya muncul setelah satu atau dua demo berhasil. Tekanan lalu datang dari dua arah:
- dari bisnis, yang ingin melihat dampak cepat;
- dari vendor atau tim internal, yang ingin menunjukkan bahwa agent benar-benar “otonom”.

Masalahnya, otonomi bukan fitur pemasaran. Otonomi adalah **keputusan risk dan operating model**.

### Mengapa ini berbahaya

Agent yang diberi hak execute terlalu dini dapat:
- memanggil tool dengan konteks yang salah,
- menjalankan tindakan pada data yang belum tervalidasi,
- melanggar threshold approval,
- atau membuat keputusan yang sulit dijelaskan setelah kejadian.

Tanpa observability yang memadai, perusahaan bahkan tidak tahu dengan cepat apa yang salah. Tanpa policy engine yang nyata, guardrail hanya hidup di prompt. Tanpa identity dan access control yang benar, agent beroperasi dengan hak akses yang terlalu luas atau tidak dapat diaudit.

### Spektrum otonomi yang sehat

Dalam enterprise, otonomi sebaiknya dinaikkan bertahap:

1. **Assist**  
   Agent membantu mencari konteks atau menyusun informasi.

2. **Draft**  
   Agent menyiapkan output awal untuk ditinjau manusia.

3. **Recommend**  
   Agent memberi rekomendasi tindakan, tetapi manusia memutuskan.

4. **Execute with approval**  
   Agent menjalankan tindakan setelah ada persetujuan eksplisit.

5. **Execute with monitoring**  
   Agent menjalankan tindakan tertentu secara mandiri dalam batas yang sangat jelas, dengan monitoring dan rollback yang siap.

Urutan ini penting. Banyak perusahaan ingin melompat dari draft ke execute karena terlihat lebih transformatif. Padahal dalam banyak domain, lompatan itu justru memperbesar risiko tanpa menambah nilai yang sebanding.

### Contoh kapan bounded autonomy tepat, dan kapan tidak

Dalam **IT operations**, agent bisa cukup aman untuk:
- mengumpulkan log,
- mengklasifikasikan incident,
- merekomendasikan runbook,
- atau membuka tiket eskalasi.

Tetapi memberi agent hak mengubah konfigurasi produksi terlalu cepat adalah pola yang berbahaya, terutama jika change control dan rollback belum matang.

Dalam **procurement**, agent bisa mengklasifikasikan request, memeriksa policy dasar, dan merutekan kasus standar. Namun memberi agent hak membuat vendor baru, mengubah syarat komersial, atau mengeksekusi tindakan sourcing tanpa kontrol manusia biasanya terlalu dini.

Dalam **finance**, agent cocok untuk evidence gathering, variance triage, dan draft commentary. Tetapi keputusan akuntansi material, posting tertentu, atau sign-off close tetap membutuhkan kontrol manusia yang kuat.

### Prinsip utamanya: kecepatan scaling harus mengikuti bukti reliability

Perusahaan sering salah mengira bahwa keberanian berarti memberi otonomi tinggi lebih cepat. Dalam praktik enterprise, keberanian yang sehat justru berarti **menahan diri sampai reliability terbukti**.

Naikkan otonomi hanya jika ada bukti bahwa:
- kualitas output stabil,
- exception handling jelas,
- policy enforcement berjalan di runtime,
- logging dan audit trail memadai,
- dan manusia tahu kapan harus override.

Jika tekanan hype lebih dominan daripada bukti reliability, organisasi sedang masuk ke anti-pattern ini.

## 3. Black Box Vendor Agent

Anti-pattern ketiga muncul ketika perusahaan membeli agent dari vendor yang terlihat canggih, tetapi tidak memberi control surface yang cukup untuk enterprise.

Demonya bagus. Integrasinya tampak cepat. Vendor menjanjikan outcome. Namun ketika ditanya lebih dalam, jawabannya kabur:
- bagaimana audit trail tersedia?
- bisakah perilaku agent diuji dengan skenario perusahaan sendiri?
- bagaimana policy diterapkan?
- apa yang terjadi jika model berubah?
- bisakah agent dimatikan dengan aman?
- siapa yang memegang logika approval dan data boundary?

Jika jawaban atas pertanyaan-pertanyaan ini lemah, perusahaan sedang berhadapan dengan **black box vendor agent**.

### Mengapa ini sulit dipakai di proses kritikal

Untuk proses kritikal, perusahaan tidak cukup hanya tahu bahwa agent “biasanya bekerja”. Perusahaan harus bisa:
- menguji,
- memonitor,
- menjelaskan,
- membatasi,
- dan menonaktifkan agent bila perlu.

Tanpa itu, vendor agent mungkin masih cocok untuk use case ringan atau non-material. Tetapi untuk workflow seperti customer resolution, finance operations, procurement compliance, atau IT operations, black box adalah risiko struktural.

### Tanda-tanda vendor agent terlalu tertutup

Beberapa sinyal yang perlu diwaspadai:
- tidak ada log yang cukup detail tentang tool call dan keputusan,
- tidak ada cara menguji agent dengan data historis perusahaan,
- perubahan model atau perilaku dilakukan vendor tanpa governance yang jelas,
- policy hanya dijanjikan di level presentasi, bukan di runtime,
- tidak ada mekanisme kill switch atau fallback yang jelas,
- dan perusahaan tidak punya akses yang memadai ke konfigurasi, evaluasi, atau evidence operasional.

### Implikasi untuk procurement dan vendor management

Di banyak perusahaan, procurement masih mengevaluasi solusi AI dengan pola lama: fitur, harga, SLA, dan integrasi dasar. Untuk agentic AI, itu tidak cukup.

Evaluasi vendor harus memasukkan requirement governance seperti:
- auditability,
- explainability operasional,
- logging,
- identity dan access model,
- policy enforcement,
- model change governance,
- incident response,
- dan exit plan.

Ini bukan hanya isu teknologi. Ini isu kontrol perusahaan atas lapisan eksekusi baru.

### Trade-off yang perlu diakui

Bukan berarti semua vendor tertutup harus ditolak. Ada kalanya embedded agent di platform SaaS memberi kecepatan dan integrasi yang sangat berguna. Tetapi trade-off-nya harus disadari.

Jika perusahaan menerima black box lebih besar, maka:
- scope use case harus lebih sempit,
- level otonomi harus lebih rendah,
- dan ketergantungan pada vendor harus dibatasi.

Yang berbahaya adalah memakai vendor agent tertutup untuk proses material sambil berasumsi bahwa governance bisa ditambahkan belakangan.

## 4. Mengabaikan Realitas Workforce

Anti-pattern keempat adalah memperlakukan agentic AI murni sebagai proyek teknologi.

Ini mungkin anti-pattern yang paling sering diremehkan. Padahal banyak hambatan scaling justru bukan datang dari model atau integrasi, melainkan dari manusia yang harus bekerja bersama agent setiap hari.

### Bagaimana anti-pattern ini muncul

Program dimulai dari tim teknologi atau inovasi. Use case dipilih. Agent dibangun. Demo berhasil. Lalu organisasi berasumsi bahwa pengguna akan otomatis mengadopsi karena tool-nya “jelas membantu”.

Yang terjadi sering sebaliknya:
- pengguna merasa agent dipaksakan,
- supervisor tidak tahu kapan harus percaya atau override,
- KPI lama masih mendorong perilaku manual,
- role baru tidak dijelaskan,
- dan training hanya fokus pada cara memakai tool, bukan cara bekerja dalam workflow baru.

Hasilnya adalah resistance, underuse, atau workaround.

### Contoh nyata di operasi

Dalam **customer operations**, agent mungkin bisa merangkum histori kasus dan menyusun respons awal. Tetapi jika agent tidak memahami nuansa eskalasi pelanggan tertentu, staf frontline akan cepat kehilangan kepercayaan dan kembali bekerja di luar sistem.

Dalam **finance shared services**, agent bisa menyiapkan evidence pack. Namun jika reviewer tetap dinilai dari volume touch manual, mereka tidak punya insentif untuk mengubah cara kerja.

Dalam **GCC** atau shared services, perubahan ini lebih besar lagi karena agentic AI dapat menggeser model kerja dari eksekusi repetitif ke oversight, exception handling, dan orkestrasi. Jika role redesign tidak dilakukan, organisasi akan mengalami kebingungan kapasitas dan identitas kerja.

### Solusi: co-design, training, metric transparan, dan role redesign

Program agentic AI yang sehat harus mengakui bahwa perubahan workforce adalah bagian inti dari desain, bukan aktivitas komunikasi di akhir.

Empat disiplin minimum diperlukan.

#### Co-design dengan pengguna operasional
Pengguna harus dilibatkan untuk mendefinisikan:
- exception yang nyata,
- format output yang usable,
- titik approval,
- dan kondisi kapan agent tidak boleh bertindak.

#### Training yang role-based
Operator, reviewer, supervisor, manager, dan control function membutuhkan pelatihan yang berbeda. Training generik tentang “AI awareness” tidak cukup.

#### Metric yang transparan
Pengguna perlu melihat bagaimana agent dinilai, bagaimana override dibaca, dan bagaimana performa tim akan berubah. Jika metrik terasa seperti alat pengawasan tersembunyi, trust akan turun.

#### Role redesign
Perusahaan harus jujur bahwa beberapa tugas akan berkurang, sementara tugas lain naik pentingnya:
- oversight,
- exception handling,
- workflow improvement,
- policy stewardship,
- dan continuous improvement atas agent.

Tanpa redesign peran, organisasi akan mencoba menjalankan model kerja lama dengan lapisan AI baru. Itu hampir selalu menghasilkan friksi.

## 5. Governance Theater

Anti-pattern terakhir adalah yang paling berbahaya karena sering terlihat paling rapi di atas kertas.

Perusahaan punya policy AI.
Ada prinsip responsible AI.
Ada komite.
Ada slide tentang human-in-the-loop.

Tetapi ketika agent berjalan di runtime, tidak ada enforcement yang nyata.

Inilah yang disebut **governance theater**: governance yang terdengar meyakinkan, tetapi tidak tertanam dalam sistem operasional.

### Bentuk governance theater yang paling umum

- policy ada, tetapi agent tidak punya identity yang jelas;
- approval diwajibkan di dokumen, tetapi tidak dipaksa oleh workflow;
- logging disebut penting, tetapi jejak tool call tidak lengkap;
- evaluasi dibahas saat go-live, tetapi tidak ada regression testing saat model berubah;
- incident response ada di kebijakan umum, tetapi tidak ada playbook khusus untuk agent failure;
- risk review dilakukan sekali, lalu tidak ada monitoring berkelanjutan.

Governance seperti ini memberi rasa aman palsu. Saat insiden terjadi, organisasi baru sadar bahwa kontrol sebenarnya tidak pernah hidup di runtime.

### Governance agentic harus muncul di lapisan operasional

Jika governance serius, ia harus terlihat dalam:
- **identity**: agent punya identitas dan hak akses yang jelas;
- **policy engine**: aturan tidak hanya ditulis, tetapi ditegakkan;
- **logging**: tindakan, tool call, dan keputusan tercatat;
- **approval workflow**: threshold dan jalur persetujuan benar-benar berjalan;
- **evaluation**: ada pengujian sebelum dan sesudah perubahan;
- **incident response**: ada mekanisme deteksi, eskalasi, containment, dan pembelajaran.

Dengan kata lain, governance bukan dokumen. Governance adalah **mekanisme runtime**.

### Tanda bahwa governance masih kosmetik

Jika salah satu dari kondisi berikut terjadi, kemungkinan governance perusahaan masih bersifat kosmetik:
- tidak ada inventory resmi agent yang aktif;
- tidak jelas siapa owner bisnis, owner teknis, dan risk owner tiap agent;
- agent bisa mengakses sistem inti dengan kredensial generik;
- perubahan prompt, model, atau tool schema masuk produksi tanpa testing formal;
- tidak ada kill switch yang jelas untuk use case material;
- vendor tidak diwajibkan memberi audit trail yang memadai;
- board governance hanya melihat presentasi, bukan evidence operasional;
- dan insiden agent diperlakukan sebagai bug biasa tanpa analisis kontrol.

Governance theater sangat berbahaya karena membuat organisasi merasa sudah aman padahal belum.

## Penutup: Hindari Pola Gagal Sebelum Bicara Scale

Agentic AI memang membuka peluang besar untuk mendesain ulang cara kerja perusahaan. Tetapi seperti banyak transformasi enterprise lainnya, nilai tidak hilang karena teknologinya tidak menarik. Nilai hilang karena organisasi menskalakan pola yang salah.

Lima anti-pattern di atas sering muncul bersamaan:
- terlalu banyak agent tanpa nilai yang jelas,
- otonomi dinaikkan sebelum fondasi siap,
- vendor dipilih tanpa control surface yang memadai,
- workforce diperlakukan sebagai afterthought,
- dan governance berhenti di dokumen.

Jika perusahaan ingin bergerak dari pilot ke operating model agentic yang sehat, maka disiplin utamanya bukan “membangun agent lebih banyak”. Disiplin utamanya adalah **menghindari pola gagal yang akan berulang di setiap domain**.

# Checklist Praktis

Gunakan checklist ini untuk menilai apakah program agentic AI Anda sedang bergerak sehat atau mulai jatuh ke anti-pattern.

## 1. Portfolio dan value discipline
- [ ] Setiap agent terkait ke workflow atau value stream yang jelas.
- [ ] Ada baseline metric sebelum pilot dimulai.
- [ ] Success criteria disepakati di awal.
- [ ] Ada kill criteria untuk use case yang tidak menunjukkan nilai.
- [ ] Review portofolio membahas outcome, bukan hanya jumlah agent.

## 2. Otonomi dan reliability
- [ ] Level otonomi agent ditetapkan eksplisit: assist, draft, recommend, execute-with-approval, atau execute-with-monitoring.
- [ ] Kenaikan otonomi didasarkan pada bukti reliability, bukan tekanan sponsor atau hype vendor.
- [ ] Policy, observability, dan approval workflow sudah siap sebelum agent diberi hak execute.
- [ ] Ada fallback dan rollback untuk tindakan yang material.

## 3. Vendor dan control surface
- [ ] Vendor dapat menyediakan audit trail yang memadai.
- [ ] Agent vendor bisa diuji dengan skenario dan data historis perusahaan.
- [ ] Ada kejelasan tentang model change governance, logging, dan incident response.
- [ ] Perusahaan dapat menonaktifkan agent dengan aman jika diperlukan.
- [ ] Procurement memasukkan governance requirement ke evaluasi vendor.

## 4. Workforce dan adopsi
- [ ] Pengguna operasional dilibatkan dalam co-design.
- [ ] Training disesuaikan per role, bukan generik.
- [ ] KPI dan metric kerja diperbarui agar selaras dengan human-agent teaming.
- [ ] Perubahan peran dijelaskan secara jujur.
- [ ] Ada mekanisme feedback dan quick fixes setelah rollout.

## 5. Governance nyata, bukan kosmetik
- [ ] Setiap agent punya owner bisnis, owner teknis, dan risk owner.
- [ ] Agent tercatat di registry resmi.
- [ ] Identity, access control, logging, approval, dan evals berjalan di runtime.
- [ ] Perubahan agent melewati testing dan release discipline.
- [ ] Ada incident response khusus untuk agentic workflow.
- [ ] Governance board meninjau evidence operasional, bukan hanya slide.

## Pertanyaan penutup untuk eksekutif

**Jika hari ini Anda menghentikan semua demo dan hanya melihat agent yang benar-benar dipakai di operasi, dengan metrik nilai, kontrol runtime, dan perubahan peran yang jelas, berapa banyak dari program agentic AI Anda yang masih layak disebut transformasi—dan berapa banyak yang sebenarnya baru kumpulan eksperimen yang belum siap menjadi operating model?**
