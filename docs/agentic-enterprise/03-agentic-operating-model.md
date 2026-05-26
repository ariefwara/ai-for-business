---
title: "Apa Itu Agentic Operating Model"
sidebar_position: 3
---

# Apa Itu Agentic Operating Model

Pada dua artikel sebelumnya, kita sudah membangun dua fondasi penting. Pertama, **agentic transformation** adalah perubahan struktural tentang bagaimana kerja dieksekusi, bukan sekadar gelombang baru chatbot. Kedua, **agentic enterprise architecture** menjelaskan lapisan teknis yang memungkinkan agent memahami konteks, memanggil tools, dan bertindak di atas digital core perusahaan.

Namun arsitektur saja tidak cukup.

Begitu AI agents mulai ikut menjalankan pekerjaan nyata—membuka tiket, menindaklanjuti exception, menyiapkan jurnal, memproses klaim, mengorkestrasi approval, atau menjalankan runbook—pertanyaan yang paling penting justru menjadi pertanyaan operasional:

- Siapa yang memberi mandat kepada agent?
- Dalam batas apa agent boleh bertindak?
- Kapan agent harus meminta persetujuan?
- Siapa yang bertanggung jawab jika hasilnya salah?
- Bagaimana kinerja agent diukur?
- Apa yang berubah pada desain tim dan peran manusia?

Jawaban atas pertanyaan-pertanyaan itu adalah inti dari **agentic operating model**.

Secara sederhana, agentic operating model adalah cara perusahaan mendesain **hak keputusan, akuntabilitas, kontrol, metrik, dan tenaga kerja** ketika AI agents menjadi bagian dari mesin eksekusi perusahaan. Jika arsitektur menjawab *bagaimana sistem dibangun*, operating model menjawab *bagaimana perusahaan dijalankan*.

## Operating model lama tidak lagi cukup

Operating model tradisional dibangun di atas asumsi yang relatif stabil: **manusia adalah executor utama**, sedangkan software adalah alat bantu, sistem pencatatan, atau workflow pendukung. ERP mencatat transaksi. CRM membantu mengelola interaksi pelanggan. Workflow engine mengarahkan approval. Dashboard memberi visibilitas. Tetapi pada akhirnya, manusialah yang memulai, menilai, memutuskan, dan menutup sebagian besar pekerjaan.

Agentic AI mulai menggeser asumsi ini.

Dalam model baru, software tidak lagi hanya membantu manusia bekerja lebih cepat. Software mulai:
- menjalankan tugas multi-langkah,
- mengoordinasikan pekerjaan lintas sistem,
- menangani exception awal,
- memutuskan tindakan berisiko rendah,
- dan hanya mengeskalasi ke manusia ketika confidence rendah, dampak tinggi, atau policy mengharuskannya.

Perubahan ini tampak kecil jika dilihat per use case, tetapi dampaknya besar jika dilihat pada level perusahaan. Begitu agent menjadi bagian dari eksekusi, operating model lama mulai menunjukkan keterbatasannya.

### Mengapa model lama cepat menjadi rapuh

Dalam operating model lama, akuntabilitas biasanya melekat pada jabatan manusia: supervisor AP, controller, procurement manager, service desk lead, atau incident manager. Ketika agent mulai mengambil alih sebagian pekerjaan, organisasi sering tetap memakai struktur lama tanpa mendefinisikan ulang siapa yang mengelola “digital labor” tersebut.

Akibatnya, muncul tiga masalah umum.

#### 1. Otomasi terjadi secara sporadis, bukan sebagai sistem operasi perusahaan

Satu fungsi membeli tool agentic untuk customer service. Fungsi lain membangun agent untuk finance close. Tim IT membuat agent untuk incident triage. Shared services menambah agent untuk HR case management. Masing-masing terlihat produktif, tetapi tidak ada model bersama untuk ownership, approval, logging, atau evaluasi.

Hasilnya bukan operating model baru, melainkan kumpulan otomasi yang tumbuh liar.

#### 2. Akuntabilitas menjadi kabur

Ketika agent salah mengklasifikasikan invoice, siapa yang bertanggung jawab? Tim data science? Pemilik proses AP? Vendor platform? Shared services lead? Jika tidak ada definisi operating model yang jelas, setiap insiden akan berubah menjadi debat lintas fungsi.

#### 3. Skala justru memperbesar risiko

Pilot kecil sering terlihat aman karena diawasi ketat oleh tim proyek. Tetapi saat agent dipakai lintas unit, lintas negara, atau lintas proses, kelemahan operating model langsung terlihat: approval tidak konsisten, risk threshold berbeda-beda, workforce tidak siap, dan metrik sukses tidak seragam.

Karena itu, agentic AI tidak bisa dikelola hanya sebagai proyek teknologi. Ia harus diperlakukan sebagai **lapisan eksekusi baru** yang membutuhkan operating discipline baru.

## Apa saja elemen agentic operating model

Agentic operating model yang sehat tidak harus rumit, tetapi harus eksplisit. Minimal ada enam elemen yang perlu didefinisikan sejak awal: **decision rights, ownership, escalation path, risk controls, performance metrics, dan workforce design**.

## 1. Decision rights: siapa boleh memutuskan apa

Ini adalah elemen paling mendasar. Setiap agent harus memiliki batas kewenangan yang jelas.

Bukan cukup mengatakan “agent membantu proses procurement” atau “agent mendukung finance close.” Yang dibutuhkan adalah definisi yang lebih operasional:
- tindakan apa yang boleh dilakukan agent tanpa persetujuan,
- tindakan apa yang memerlukan human approval,
- tindakan apa yang hanya boleh berupa rekomendasi,
- dan kondisi apa yang memaksa agent berhenti.

Contoh di **procurement**:
- agent boleh mengklasifikasikan intake request dan menyarankan jalur pembelian,
- boleh memvalidasi kelengkapan vendor onboarding,
- boleh menangani mismatch invoice sederhana dalam batas toleransi policy,
- tetapi tidak boleh menyetujui supplier baru berisiko tinggi atau mengubah vendor master tanpa approval.

Contoh di **IT operations**:
- agent boleh menjalankan diagnosis awal dan remediasi berisiko rendah sesuai runbook,
- tetapi tidak boleh melakukan perubahan konfigurasi produksi yang berdampak luas tanpa persetujuan incident manager.

Tanpa decision rights yang jelas, agent akan terlalu dibatasi sehingga tidak bernilai, atau terlalu bebas sehingga tidak aman.

## 2. Ownership: setiap agent harus punya tiga pemilik

Salah satu prinsip paling penting dalam operating model agentic adalah: **setiap agent harus punya business owner, technical owner, dan risk owner**.

### Business owner
Biasanya pemilik outcome proses. Ia menentukan tujuan bisnis agent, SLA, prioritas use case, dan trade-off antara kecepatan, kualitas, dan pengalaman pengguna.

Misalnya:
- Head of AP untuk agent invoice exception,
- Controller untuk agent close orchestration,
- Customer operations lead untuk agent complaint resolution.

### Technical owner
Bertanggung jawab atas integrasi, reliability, observability, model behavior, dan lifecycle teknis agent. Ini bisa berada di CIO organization, platform team, atau AI engineering function.

### Risk owner
Menentukan guardrails, approval threshold, kontrol kepatuhan, dan kondisi penghentian. Dalam beberapa domain, risk owner bisa berasal dari compliance, internal control, legal, security, atau model risk function.

Tanpa tiga ownership ini, agent akan terlihat “dimiliki bersama” tetapi pada praktiknya tidak benar-benar dimiliki siapa pun.

## 3. Escalation path: kapan agent naik tangan ke manusia

Operating model yang matang tidak mengejar otonomi maksimum. Ia mengejar **otonomi yang tepat**.

Karena itu, setiap agent harus punya escalation path yang jelas:
- jika confidence rendah,
- jika data tidak lengkap,
- jika policy conflict,
- jika exception di luar pola normal,
- jika nilai transaksi melewati threshold,
- atau jika dampak reputasi/regulasi terlalu tinggi.

Contoh di **customer operations**:
agent dapat menyelesaikan permintaan perubahan alamat atau status order secara mandiri, tetapi harus mengeskalasi ke manusia untuk refund bernilai besar, pelanggan VIP, atau kasus yang berpotensi menjadi sengketa.

Contoh di **record-to-report**:
agent dapat menyiapkan draft jurnal dan evidence, tetapi harus mengeskalasi jurnal material, akun sensitif, atau anomali yang tidak punya pola historis yang cukup.

Escalation path yang baik bukan hanya “lempar ke manusia.” Ia harus menentukan **siapa** yang menerima, **dalam SLA berapa lama**, dan **dengan konteks apa** agar manusia tidak harus mengulang pekerjaan dari nol.

## 4. Risk controls: kapan agent boleh bertindak, meminta approval, atau berhenti

Di sinilah operating model bertemu governance.

Perusahaan perlu menetapkan tiga mode operasi yang sederhana namun tegas:

### Recommendation only
Agent menganalisis, merangkum, atau menyarankan tindakan, tetapi manusia tetap mengeksekusi.

Cocok untuk domain yang:
- masih baru,
- berisiko tinggi,
- atau belum punya data dan kontrol yang cukup matang.

### Human-in-the-loop
Agent menyiapkan tindakan dan dapat menjalankan sebagian langkah, tetapi keputusan final atau titik kontrol tertentu tetap membutuhkan approval manusia.

Ini sering menjadi mode paling realistis untuk gelombang pertama di finance, procurement, HR, dan customer operations.

### Bounded autonomy
Agent boleh bertindak mandiri dalam ruang lingkup yang telah ditentukan, dengan guardrails, logging, dan fallback yang jelas.

Cocok untuk pekerjaan volume tinggi, aturan relatif jelas, dan risiko dapat dibatasi—misalnya triage tiket, follow-up collection standar, atau remediasi IT berisiko rendah.

Yang penting: mode ini tidak boleh ditentukan oleh tim teknologi sendirian. Ia harus disepakati oleh bisnis, risk, dan operasi.

## 5. Performance metrics: ukur outcome, bukan sekadar aktivitas

Operating model lama sering terlalu fokus pada aktivitas dan kapasitas manusia:
- jumlah tiket yang ditangani,
- jumlah FTE,
- jumlah transaksi per tim,
- atau backlog per supervisor.

Dalam model agentic, fokus harus bergeser ke **outcome sistem kerja**. Metrik yang lebih relevan antara lain:
- cycle time,
- exception rate,
- automation rate,
- cost per transaction,
- kualitas keputusan,
- tingkat rework,
- SLA attainment,
- dan trust score atau indikator kepercayaan operasional terhadap hasil agent.

Misalnya di **finance close**, pertanyaan utamanya bukan lagi berapa banyak analis yang bekerja lembur, tetapi:
- apakah close lebih cepat,
- apakah exception lebih cepat terselesaikan,
- apakah kualitas evidence membaik,
- dan apakah auditor internal lebih percaya pada jejak kontrolnya.

Di **shared services**, ukuran sukses bukan sekadar pengurangan tiket manual, tetapi apakah service level membaik tanpa menaikkan error rate atau menurunkan pengalaman pengguna.

## 6. Workforce design: manusia bergeser dari transaksi ke exception dan perbaikan

Ini bagian yang paling sering diremehkan.

Agentic operating model bukan hanya menambahkan agent ke tim lama. Ia mengubah desain kerja. Dalam banyak proses, manusia akan bergeser dari:
- melakukan transaksi,
- memindahkan data,
- mengejar follow-up,
- dan mengoordinasikan handoff,

menjadi:
- menangani exception,
- mengawasi kualitas keputusan,
- memperbaiki workflow,
- mengelola policy,
- dan melatih sistem melalui feedback operasional.

Contoh di **accounts payable**:
tim tidak lagi menghabiskan sebagian besar waktunya untuk memeriksa invoice standar satu per satu. Fokus bergeser ke exception kompleks, vendor dispute, policy tuning, dan continuous improvement pada aturan toleransi.

Contoh di **GCC atau shared services**:
peran frontline case processor bisa berkurang, sementara kebutuhan untuk process controller, knowledge curator, agent supervisor, dan service performance manager meningkat.

Trade-off-nya jelas: perusahaan bisa mendapatkan kapasitas dan kecepatan lebih tinggi, tetapi hanya jika mau mendesain ulang peran, skill, dan struktur tim. Jika tidak, agent hanya akan ditumpuk di atas organisasi lama.

## Dari role-based ke outcome-based

Salah satu implikasi terbesar dari agentic operating model adalah pergeseran dari **role-based management** ke **outcome-based management**.

Dalam model lama, organisasi cenderung mengelola pekerjaan berdasarkan kotak organisasi:
- siapa melakukan apa,
- berapa banyak orang di tiap tim,
- berapa volume kerja per role,
- dan bagaimana handoff antar-role terjadi.

Pendekatan ini masuk akal ketika manusia adalah executor utama. Tetapi ketika agent ikut mengeksekusi, unit analisis yang lebih penting bukan lagi role, melainkan **outcome end-to-end**.

### Mengapa outcome menjadi pusat desain

Agent tidak peduli batas jabatan seperti organisasi manusia. Ia bisa menarik data dari CRM, memeriksa policy di knowledge base, membuat tiket di ITSM, dan memperbarui ERP dalam satu alur—selama diizinkan oleh arsitektur dan governance.

Karena itu, perusahaan perlu mulai bertanya:
- outcome apa yang ingin dicapai,
- langkah mana yang benar-benar perlu manusia,
- titik keputusan mana yang harus dijaga,
- dan bagian mana yang sebaiknya dijalankan oleh digital labor.

Contoh di **lead-to-cash**:
daripada mengoptimalkan produktivitas terpisah antara sales ops, order management, billing, dan collections, perusahaan bisa mendesain ulang outcome “order valid dan tertagih cepat” dengan agent yang mengorkestrasi validasi order, pengecekan kontrak, exception billing, dan follow-up collection awal.

Contoh di **hire-to-retire**:
alih-alih hanya mempercepat tiap subproses HR, perusahaan bisa mendesain outcome “karyawan aktif dan produktif lebih cepat” dengan agent yang mengorkestrasi onboarding, akses sistem, dokumen, training wajib, dan follow-up exception.

### Apa yang berubah pada peran manusia

Dalam model outcome-based, manusia tidak hilang. Tetapi perannya menjadi lebih bernilai:
- lebih sedikit transaksi rutin,
- lebih banyak judgment,
- lebih banyak exception handling,
- lebih banyak quality assurance,
- dan lebih banyak redesign proses.

Ini juga berarti ukuran kinerja individu dan tim harus berubah. Jika tidak, organisasi akan mengirim sinyal yang salah. Misalnya, tim masih dinilai dari volume transaksi manual, padahal target perusahaan adalah menurunkan transaksi manual dan meningkatkan straight-through execution.

### Kapan pendekatan ini belum tepat

Tidak semua area siap langsung dikelola secara outcome-based. Jika proses masih sangat kacau, data tidak standar, dan ownership end-to-end belum ada, memaksakan model outcome-based justru bisa menambah kebingungan.

Dalam kondisi seperti itu, langkah awal yang lebih realistis adalah:
1. menstabilkan proses,
2. memperjelas ownership,
3. menetapkan metrik dasar,
4. lalu memperkenalkan agent secara bertahap.

Agentic operating model bukan alasan untuk melompati disiplin operasi dasar.

## Implikasi organisasi: siapa yang harus memimpin

Begitu perusahaan serius menjadikan agent sebagai bagian dari eksekusi, struktur pengelolaannya harus ikut berubah.

## 1. Bentuk forum governance lintas fungsi

Perusahaan biasanya membutuhkan **agent governance board** atau forum setara yang melibatkan bisnis, teknologi, risk, security, legal, dan HR. Tujuannya bukan menambah birokrasi, tetapi memastikan keputusan penting tidak diambil secara terpisah-pisah.

Forum ini sebaiknya membahas:
- prioritas use case,
- tingkat otonomi per domain,
- standar kontrol minimum,
- kebijakan identity dan access,
- metrik performa,
- insiden dan pembelajaran,
- serta dampak tenaga kerja.

Tanpa forum lintas fungsi, perusahaan akan sulit menjaga konsistensi saat jumlah agent bertambah.

## 2. Kelola portofolio agent seperti produk, bukan proyek eksperimen

Transformation office atau AI office perlu mengelola use case agentic sebagai **portofolio produk operasional**, bukan kumpulan pilot. Artinya:
- ada roadmap,
- ada owner jangka panjang,
- ada target outcome,
- ada lifecycle management,
- dan ada keputusan jelas kapan use case dihentikan, diperluas, atau diubah mode otonominya.

Ini penting karena agent yang masuk produksi akan terus berubah: policy berubah, proses berubah, model berubah, dan risiko berubah. Pendekatan proyek satu kali tidak cukup.

## 3. Libatkan COO dan CHRO sejak awal

Banyak program AI masih terlalu dipimpin oleh CIO atau tim data. Untuk agentic operating model, itu tidak cukup.

### COO
COO perlu terlibat karena perubahan utamanya terjadi pada desain proses, SLA, control point, dan economics operasi.

### CHRO
CHRO perlu terlibat karena dampaknya langsung ke job design, skill, kapasitas, performance management, dan change adoption. Jika HR baru masuk setelah agent diluncurkan, organisasi akan tertinggal dalam reskilling dan komunikasi perubahan.

### CFO dan risk leaders
Dalam domain seperti finance, procurement, atau regulated operations, CFO dan risk leaders juga perlu aktif karena agent menyentuh kontrol, auditability, dan akuntabilitas.

Singkatnya, agentic operating model adalah agenda **enterprise leadership**, bukan agenda teknologi semata.

## Tanda bahwa perusahaan belum siap scale

Sebelum menutup, penting untuk jujur: tidak semua organisasi siap menskalakan agentic operating model. Beberapa sinyal bahaya yang sering muncul antara lain:

- setiap fungsi membangun agent sendiri tanpa standar ownership dan kontrol;
- tidak ada daftar resmi agent yang aktif di produksi;
- business owner tidak jelas, atau hanya ada sponsor teknologi;
- approval threshold berbeda-beda tanpa dasar risk policy;
- tim operasi tidak tahu kapan agent bertindak dan kapan manusia harus mengambil alih;
- metrik sukses hanya berupa adopsi tool atau jumlah prompt;
- HR belum punya pandangan tentang perubahan peran dan skill;
- insiden agent tidak masuk ke mekanisme governance operasional yang formal.

Jika beberapa gejala ini sudah terlihat, prioritasnya bukan menambah use case baru, melainkan memperkuat operating discipline terlebih dahulu.

# Checklist Praktis

Berikut keputusan dan checklist yang bisa langsung dipakai oleh CIO, COO, CHRO, atau transformation leader.

## Lima keputusan yang perlu diambil sekarang

1. **Tentukan unit analisis utama:** apakah perusahaan masih mengelola AI sebagai tool produktivitas individu, atau sudah siap mengelolanya sebagai bagian dari operating model.
2. **Tetapkan model ownership:** setiap agent produksi harus punya business owner, technical owner, dan risk owner.
3. **Definisikan mode otonomi per domain:** recommendation only, human-in-the-loop, atau bounded autonomy.
4. **Pilih metrik outcome:** minimal cycle time, exception rate, automation rate, cost per transaction, dan indikator trust/quality.
5. **Putuskan forum governance:** siapa yang menyetujui use case, memantau insiden, dan mengelola dampak organisasi.

## Checklist readiness singkat

Gunakan daftar berikut untuk menilai kesiapan perusahaan:

- [ ] Kami sudah mengidentifikasi proses end-to-end yang akan menjadi prioritas agentic.
- [ ] Untuk setiap use case, decision rights agent sudah didefinisikan dengan jelas.
- [ ] Setiap agent produksi memiliki business owner, technical owner, dan risk owner.
- [ ] Escalation path ke manusia sudah terdokumentasi dan punya SLA.
- [ ] Kami memiliki definisi kapan agent boleh bertindak, kapan harus meminta approval, dan kapan harus berhenti.
- [ ] Metrik performa agent dihubungkan ke outcome bisnis, bukan hanya aktivitas teknis.
- [ ] Tim HR dan operasi sudah dilibatkan untuk mendesain ulang peran dan skill.
- [ ] Ada forum governance lintas fungsi untuk memutuskan prioritas, kontrol, dan scale-up.

## Sinyal bahaya yang perlu diwaspadai

- [ ] Agent dibangun cepat, tetapi ownership-nya tidak jelas.
- [ ] Use case dipilih karena demo menarik, bukan karena value pool yang nyata.
- [ ] Tim bisnis menganggap agent “milik IT”.
- [ ] Tim teknologi menganggap perubahan tenaga kerja “urusan nanti”.
- [ ] Tidak ada mekanisme formal untuk menghentikan agent yang performanya menurun.
- [ ] Organisasi masih mengukur sukses dari headcount atau aktivitas manual semata.

## Pertanyaan reflektif untuk pimpinan

### Untuk CIO
Apakah Anda sedang membangun platform agent, atau baru menambah lapisan tool tanpa operating discipline yang jelas?

### Untuk COO
Jika agent mengambil alih transaksi rutin, apakah proses, SLA, dan control point Anda sudah didesain ulang—atau hanya ditumpuk di atas model lama?

### Untuk CHRO
Peran mana yang akan bergeser paling cepat dari eksekusi ke oversight, dan apakah organisasi sudah menyiapkan reskilling-nya?

### Untuk transformation leader
Apakah portofolio agentic Anda dikelola sebagai kumpulan eksperimen, atau sebagai desain ulang sistem kerja perusahaan?

Agentic operating model pada akhirnya bukan soal membuat AI lebih aktif. Ini soal memastikan ketika software mulai ikut bekerja, **perusahaan tetap tahu siapa yang memutuskan, siapa yang bertanggung jawab, bagaimana risiko dikendalikan, dan bagaimana manusia serta agent menghasilkan outcome bersama**. Itu yang membedakan demo yang menarik dari transformasi yang benar-benar bisa diskalakan.
