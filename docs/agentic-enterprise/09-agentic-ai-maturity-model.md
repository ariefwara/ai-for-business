---
title: "Agentic AI Maturity Model untuk Perusahaan"
sidebar_position: 9
---

# Agentic AI Maturity Model untuk Perusahaan

Dalam banyak rapat eksekutif hari ini, kalimat seperti *“kita sudah pakai AI agents”* terdengar semakin umum. Masalahnya, istilah itu sering dipakai untuk menggambarkan hal yang sangat berbeda: chatbot internal, copilot untuk menulis email, asisten workflow yang menyiapkan draft, sampai agent yang benar-benar memanggil tool dan mengeksekusi tindakan di sistem enterprise.

Jika semua itu disebut “agentic AI”, organisasi akan kesulitan menjawab pertanyaan yang jauh lebih penting:

- sebenarnya kita ada di level mana,
- fondasi apa yang sudah ada dan apa yang belum,
- risiko apa yang mulai muncul,
- dan target 12 bulan yang realistis itu seperti apa.

Di sinilah **maturity model** dibutuhkan.

Dalam seri ini, kita sudah membahas bahwa agentic enterprise bukan sekadar model yang lebih pintar. Ia adalah perubahan dari AI sebagai alat bantu menjadi AI sebagai bagian dari lapisan eksekusi perusahaan. Karena itu, kematangan agentic AI tidak bisa dinilai hanya dari kualitas model atau jumlah pilot. Ia harus dilihat sebagai kombinasi dari **nilai bisnis, arsitektur, governance, operating model, dan kesiapan tenaga kerja**.

Artikel ini menawarkan model kematangan lima level yang bisa dipakai eksekutif untuk menyamakan bahasa, menghindari klaim transformasi yang terlalu dini, dan menentukan langkah berikutnya dengan lebih disiplin.

## Mengapa Perusahaan Membutuhkan Maturity Model

Banyak organisasi melompat ke pilot sebelum memahami level kemampuan yang sedang mereka bangun. Hasilnya sering terlihat familiar:

- tim bisnis merasa sudah “maju” karena ada beberapa use case AI,
- tim teknologi merasa bottleneck ada di data dan integrasi,
- tim risk khawatir karena kontrol belum jelas,
- dan eksekutif sulit membedakan mana eksperimen produktivitas, mana kapabilitas enterprise yang benar-benar bisa diskalakan.

Tanpa maturity model, diskusi menjadi kabur. Chatbot knowledge base bisa disamakan dengan agent procurement. Copilot untuk analis finance bisa disamakan dengan sistem multi-agent yang mengorkestrasi close exception. Padahal kebutuhan fondasi, kontrol, dan dampak organisasinya sangat berbeda.

Maturity model berguna setidaknya untuk empat hal.

### 1. Menyamakan bahasa lintas fungsi

COO, CIO, CFO, CHRO, dan risk leader perlu bahasa yang sama. Jika satu pihak membayangkan “agent” sebagai asisten percakapan, sementara pihak lain membayangkannya sebagai executor semi-otonom, keputusan investasi akan mudah meleset.

### 2. Menentukan target yang realistis

Tidak semua perusahaan harus langsung mengejar otonomi tinggi. Dalam banyak kasus, target yang paling masuk akal untuk 12 bulan ke depan justru bukan “autonomous enterprise”, melainkan berpindah dari produktivitas individual ke workflow assistance yang terukur, atau dari workflow assistance ke controlled agentic execution di domain tertentu.

### 3. Menghubungkan value dengan fondasi

Semakin tinggi level kematangan, semakin besar potensi nilai end-to-end. Tetapi kebutuhan fondasinya juga meningkat: API maturity, data consistency, identity, policy engine, observability, dan human-in-the-loop governance menjadi semakin penting.

### 4. Menghindari transformasi semu

Banyak organisasi terlihat aktif karena punya banyak demo. Namun seperti yang sering terlihat di pasar, hambatan utama bukan lagi semata teknologi, melainkan organisasi, cara kerja, dan kepemimpinan. Maturity model membantu membedakan **aktivitas AI** dari **kapabilitas operasional yang benar-benar siap scale**.

## Cara Membaca Model Kematangan Ini

Model ini terdiri dari lima level:

1. **Individual Augmentation**
2. **Workflow Assistance**
3. **Controlled Agentic Execution**
4. **Multi-Agent Operating Model**
5. **Agentic Enterprise**

Penting untuk dipahami: ini bukan tangga yang harus dilalui secara seragam oleh seluruh perusahaan. Dalam praktiknya, satu organisasi bisa berada di level 1 untuk HR, level 2 untuk finance, dan level 3 untuk customer operations. Karena itu, maturity model ini paling berguna jika dipakai pada dua lapisan sekaligus:

- **level perusahaan secara umum**, dan
- **level per value stream atau domain proses**.

Dengan cara itu, perusahaan bisa menghindari dua kesalahan umum: terlalu optimistis di level enterprise, atau terlalu pesimistis karena melihat satu domain yang tertinggal.

---

## Level 1: Individual Augmentation

Level pertama adalah ketika AI dipakai terutama sebagai **alat bantu individu**. Contohnya sudah sangat umum:

- menulis atau merapikan email,
- merangkum dokumen,
- membuat draft presentasi,
- membantu analisis awal,
- mencari informasi dari knowledge base,
- atau membantu coding dan dokumentasi.

Pada level ini, nilai biasanya terasa cepat. Karyawan merasa lebih produktif, waktu berpikir awal berkurang, dan beberapa pekerjaan administratif menjadi lebih ringan. Karena adopsinya sering bottom-up, level ini biasanya tumbuh paling cepat.

Namun dari sudut pandang enterprise, ada keterbatasan yang jelas.

### Nilainya nyata, tetapi tersebar

Masalah utama level 1 adalah nilai bisnisnya sulit diukur secara formal. Produktivitas meningkat, tetapi tersebar di banyak individu dan tidak selalu terhubung ke metrik proses seperti cycle time, error rate, atau cost per transaction.

Misalnya di tim finance, analis mungkin memakai AI untuk merangkum variance commentary. Di procurement, buyer memakai AI untuk menyusun email vendor. Di customer operations, supervisor memakai AI untuk merapikan respons eskalasi. Semua berguna, tetapi belum menjadi kapabilitas operasional yang reusable.

### Risiko utamanya: shadow AI dan data leakage

Karena penggunaan sering terjadi di level individu, risiko yang paling umum adalah:

- data sensitif dimasukkan ke tool yang tidak disetujui,
- tidak ada kontrol atas prompt dan output,
- tidak ada reusable asset yang dibangun,
- dan organisasi tidak belajar secara sistematis dari penggunaan tersebut.

Di level ini, perusahaan sering merasa “sudah pakai AI”, padahal sebenarnya baru berada pada fase adopsi personal.

### Kapan level 1 tepat

Level ini tepat untuk:
- mempercepat literasi AI,
- membangun kebiasaan penggunaan,
- dan menemukan area kerja yang paling banyak menyita waktu kognitif.

Tetapi level 1 **tidak cukup** jika tujuan perusahaan adalah transformasi operating model. Jika organisasi berhenti di sini terlalu lama, AI akan tetap menjadi alat bantu personal, bukan lapisan eksekusi perusahaan.

### Tanda bahwa Anda masih dominan di level 1

- penggunaan AI tinggi, tetapi tidak terhubung ke proses formal,
- tidak ada owner proses yang bertanggung jawab atas outcome AI,
- metrik sukses masih berupa adopsi tool atau kepuasan pengguna,
- dan belum ada integrasi yang berarti ke workflow enterprise.

---

## Level 2: Workflow Assistance

Di level kedua, AI mulai tertanam dalam **workflow tertentu**, bukan hanya dipakai bebas oleh individu. Manusia masih menjadi executor utama, tetapi AI membantu mengurangi waktu pencarian, penulisan, analisis, dan dokumentasi di proses yang lebih jelas.

Contohnya:

- drafting respons customer service berdasarkan histori kasus,
- penjelasan variance di finance berdasarkan data close,
- ringkasan tiket insiden untuk service desk,
- klasifikasi intake procurement,
- atau penyiapan dokumen onboarding karyawan.

Perbedaan utamanya dengan level 1 adalah **AI mulai berada di dalam alur kerja resmi**.

### Nilai mulai bisa diukur

Pada level ini, perusahaan sudah bisa mulai mengukur dampak yang lebih konkret, misalnya:

- penurunan cycle time,
- peningkatan kualitas output,
- penurunan rework,
- dan adoption rate di proses tertentu.

Contoh di **customer operations**: AI membantu agen layanan menyusun respons berdasarkan histori pelanggan dan policy yang relevan. Agen manusia tetap memeriksa dan mengirim. Nilai utamanya bukan “AI dipakai”, tetapi apakah waktu penanganan turun dan kualitas respons lebih konsisten.

Contoh di **finance**: AI menyiapkan draft variance explanation untuk controller. Manusia tetap memvalidasi. Jika dilakukan dengan baik, waktu penyusunan commentary berkurang dan kualitas narasi lebih seragam.

### Ini sering menjadi sweet spot awal

Bagi banyak perusahaan, level 2 adalah target yang sangat sehat untuk gelombang pertama. Alasannya sederhana: nilai bisnis mulai terlihat, tetapi risiko masih relatif terkendali karena manusia tetap menjadi executor utama.

### Trade-off level 2

Namun level ini juga punya batas.

Jika AI hanya membantu menyiapkan draft, manusia tetap harus:
- memindahkan keputusan ke sistem,
- menjalankan tindakan,
- mengejar follow-up,
- dan menutup loop proses.

Artinya, level 2 meningkatkan efisiensi, tetapi belum mengubah economics proses secara mendasar. Untuk proses volume tinggi seperti AP exception, claims triage, atau IT incident handling, nilai terbesar sering baru muncul ketika AI mulai bisa bertindak secara terbatas.

### Tanda bahwa Anda berada di level 2

- AI tertanam di workflow tertentu,
- ada metrik proses yang mulai dipakai,
- manusia tetap memegang hampir semua tindakan,
- integrasi ke sistem ada, tetapi dominan read-only atau draft generation,
- governance mulai muncul, tetapi belum seketat sistem action-oriented.

---

## Level 3: Controlled Agentic Execution

Level ketiga adalah titik perubahan yang paling penting. Di sinilah AI tidak lagi hanya membantu berpikir, tetapi mulai **memanggil tools dan melakukan action terbatas** dalam batas yang jelas.

Contohnya:

- agent menyiapkan refund dan memprosesnya untuk kasus bernilai rendah yang memenuhi policy,
- agent membuat ticket remediation di ITSM setelah validasi tertentu,
- agent mengirim request procurement setelah memeriksa kelengkapan dan policy,
- agent collections mengirim follow-up otomatis berdasarkan aturan yang telah disetujui.

Ini adalah level ketika istilah “agentic” mulai benar-benar relevan secara operasional.

### Arsitektur dan governance menjadi wajib

Begitu agent bisa bertindak, fondasi yang sebelumnya terasa opsional menjadi wajib:

- **identity dan access control** untuk agent,
- **policy engine** untuk membatasi tindakan,
- **observability** untuk melacak keputusan dan tool call,
- **audit trail** untuk menjelaskan apa yang dilakukan agent,
- dan **human approval workflow** untuk kasus tertentu.

Tanpa itu, perusahaan sebenarnya belum siap berada di level 3, meskipun demo agent-nya terlihat impresif.

### Contoh enterprise

**Procurement**  
Agent menerima intake request, memeriksa kategori belanja, vendor yang diizinkan, dan threshold approval. Jika semua syarat terpenuhi, agent membuat request formal di sistem. Jika ada konflik policy, agent berhenti dan mengeskalasi.

**IT operations**  
Agent menerima event insiden, menarik log, menjalankan runbook diagnostik, lalu membuka ticket remediation dengan enrichment lengkap. Untuk remediasi berisiko rendah, agent bisa mengeksekusi langkah tertentu. Untuk perubahan produksi yang sensitif, agent harus meminta approval.

**Customer operations**  
Agent memverifikasi eligibility refund, memeriksa histori pelanggan, lalu memproses refund kecil secara otomatis. Refund besar atau pelanggan VIP tetap masuk ke supervisor.

### Trade-off level 3

Level ini memberi nilai yang jauh lebih besar daripada level 2, tetapi juga mengubah profil risiko secara signifikan.

Trade-off utamanya:
- nilai naik karena action mulai otomatis,
- tetapi kebutuhan kontrol, integrasi, dan ownership juga naik tajam.

Ini bukan level yang cocok untuk organisasi yang masih lemah di API maturity, data consistency, atau governance runtime. Jika fondasinya belum siap, memaksa level 3 hanya akan menghasilkan insiden dan hilangnya kepercayaan bisnis.

### Tanda bahwa Anda benar-benar di level 3

- agent punya identitas formal dan hak akses terbatas,
- ada pemisahan jelas antara read-only dan action tools,
- policy runtime menentukan kapan agent boleh bertindak,
- observability dan logging tersedia,
- dan manusia masuk melalui approval atau exception handling, bukan lagi sebagai executor default untuk semua langkah.

---

## Level 4: Multi-Agent Operating Model

Pada level keempat, perusahaan tidak lagi mengelola agent sebagai unit terpisah per tugas. Beberapa agent mulai bekerja bersama di bawah **orchestrator** untuk menyelesaikan value stream lintas fungsi.

Ini bisa terjadi pada proses seperti:

- lead-to-cash,
- issue-to-resolution di customer operations,
- source-to-pay exception handling,
- finance close orchestration,
- atau supply chain exception management.

Di sini, satu agent tidak cukup. Diperlukan kombinasi orchestrator, specialist agent, task agent, dan manusia sebagai pengawas serta penangan exception.

### Fokus bergeser dari task ke value stream

Perubahan paling penting di level 4 adalah pergeseran dari optimasi tugas individual ke **orkestrasi outcome end-to-end**.

Contoh di **finance close**:
- satu agent memonitor close calendar,
- agent lain menganalisis anomali jurnal,
- agent lain menyiapkan commentary,
- orchestrator mengurutkan prioritas exception,
- manusia masuk untuk approval material dan penyelesaian kasus kompleks.

Contoh di **supply chain**:
- agent memonitor event shipment,
- agent lain mengecek inventory dan customer priority,
- agent policy menilai opsi mitigasi,
- orchestrator menyusun rekomendasi tindakan lintas fungsi.

### Nilai terbesar mulai muncul di sini

Di level 4, perusahaan mulai melihat nilai yang lebih besar karena bottleneck handoff antar-tim berkurang. AI tidak lagi hanya mempercepat satu langkah, tetapi membantu mengorkestrasi keseluruhan alur kerja.

Namun justru di sinilah risiko baru muncul.

### Risiko utama: agent sprawl, konflik keputusan, accountability gap

Semakin banyak agent yang bekerja bersama, semakin besar risiko:

- terlalu banyak agent dibangun tanpa katalog dan ownership yang jelas,
- dua agent memberi keputusan yang bertentangan,
- orchestrator mengambil jalur yang tidak sesuai policy,
- dan akuntabilitas menjadi kabur ketika hasil akhir salah.

Karena itu, level 4 membutuhkan disiplin operating model yang jauh lebih kuat:
- ownership per agent dan per value stream,
- katalog tool dan agent,
- standar evaluasi,
- governance lintas fungsi,
- dan desain human oversight yang eksplisit.

### Kapan level 4 belum tepat

Jika proses dasar masih kacau, data antar-fungsi belum sinkron, dan ownership end-to-end belum ada, memaksakan multi-agent operating model justru berbahaya. Dalam kondisi seperti itu, lebih baik memperkuat level 2 atau 3 di domain yang lebih sempit terlebih dahulu.

---

## Level 5: Agentic Enterprise

Level kelima bukan sekadar punya banyak agent. **Agentic enterprise** berarti perusahaan sudah memiliki platform, governance, operating model, workforce model, dan portfolio management yang terintegrasi.

Pada level ini, agents bukan lagi eksperimen innovation lab. Mereka menjadi bagian resmi dari execution layer perusahaan.

### Ciri utamanya

Perusahaan di level ini biasanya memiliki:

- **platform agent enterprise** yang menjadi fondasi bersama,
- **governance board** lintas bisnis, teknologi, risk, legal, dan HR,
- **portfolio management** untuk memilih, menghentikan, dan menskalakan use case,
- **identity, policy, observability, dan auditability** yang terstandar,
- **operating model** yang jelas untuk human-agent teaming,
- dan **workforce strategy** yang menggeser manusia dari transaksi rutin ke oversight, exception handling, dan continuous improvement.

### Ini bukan soal otonomi maksimum

Kesalahan umum adalah menganggap level 5 berarti semua proses berjalan tanpa manusia. Itu keliru.

Agentic enterprise bukan tentang menghilangkan manusia dari semua keputusan. Ia tentang menempatkan agent sebagai bagian resmi dari sistem kerja perusahaan, dengan batas kewenangan yang jelas dan model akuntabilitas yang matang.

Di beberapa domain, bounded autonomy bisa tinggi. Di domain lain, human-in-the-loop tetap dominan. Yang membedakan level 5 adalah **konsistensi platform dan operating discipline**, bukan sekadar tingkat otonomi.

### Implikasi workforce sangat besar

Pada level ini, perubahan tenaga kerja tidak lagi bersifat lokal. Perusahaan perlu mendesain ulang:

- peran frontline,
- peran supervisor,
- skill untuk exception management,
- peran baru seperti agent owner, policy designer, dan agent operations lead,
- serta metrik kinerja untuk human-agent teams.

Tanpa ini, perusahaan bisa punya platform agent yang canggih tetapi organisasi manusianya tidak siap.

---

## Self-Assessment Matrix: Di Mana Posisi Perusahaan Anda?

Gunakan lima dimensi berikut untuk menilai posisi saat ini dan target 12 bulan ke depan.

## 1. Nilai bisnis
- **Level 1:** nilai tersebar di produktivitas individu
- **Level 2:** nilai terukur di proses spesifik
- **Level 3:** nilai datang dari action terbatas dan pengurangan handoff
- **Level 4:** nilai muncul di value stream lintas fungsi
- **Level 5:** nilai dikelola sebagai portofolio enterprise

## 2. Arsitektur dan integrasi
- **Level 1:** tool terpisah, minim integrasi
- **Level 2:** integrasi read-only atau drafting dalam workflow
- **Level 3:** tool calling dan action terbatas dengan kontrol
- **Level 4:** orkestrasi multi-agent lintas sistem
- **Level 5:** platform agent enterprise dengan standar bersama

## 3. Governance dan risk
- **Level 1:** kebijakan penggunaan dasar
- **Level 2:** guardrail per workflow mulai muncul
- **Level 3:** identity, policy engine, approval, observability wajib
- **Level 4:** governance lintas agent dan lintas fungsi
- **Level 5:** governance enterprise terintegrasi dengan audit dan portfolio control

## 4. Operating model
- **Level 1:** penggunaan individual
- **Level 2:** AI membantu executor manusia
- **Level 3:** manusia mengawasi action terbatas
- **Level 4:** manusia fokus pada oversight dan exception handling lintas agent
- **Level 5:** human-agent teaming menjadi bagian resmi operating model perusahaan

## 5. Workforce readiness
- **Level 1:** literasi dasar
- **Level 2:** adopsi per peran
- **Level 3:** pelatihan untuk approval, exception, dan trust in automation
- **Level 4:** redesign peran dan kapasitas tim
- **Level 5:** workforce transformation terhubung ke strategi enterprise

Jika perusahaan Anda menilai diri berada di level 3 atau lebih, tetapi belum punya identity formal untuk agent, policy runtime, observability, dan ownership lintas fungsi, kemungkinan besar Anda masih berada di level 2 dengan beberapa eksperimen level 3.

---

## Menentukan Target 12 Bulan yang Masuk Akal

Untuk sebagian besar perusahaan, target 12 bulan yang sehat biasanya salah satu dari tiga pola berikut:

### Dari Level 1 ke Level 2
Cocok untuk organisasi yang penggunaan AI-nya masih dominan individual. Fokusnya:
- pilih 2–3 workflow prioritas,
- tanamkan AI ke proses resmi,
- ukur cycle time, kualitas, dan adoption,
- dan bangun guardrail dasar.

### Dari Level 2 ke Level 3
Cocok untuk organisasi yang sudah punya workflow assistance dan ingin membuka nilai lebih besar. Fokusnya:
- pilih action yang bounded dan berisiko rendah,
- bangun identity, policy engine, approval workflow, dan observability,
- serta pastikan API dan data foundation cukup matang.

### Dari Level 3 ke Level 4
Cocok untuk organisasi yang sudah punya beberapa agent action-oriented. Fokusnya:
- hindari agent sprawl,
- bangun orchestrator dan katalog agent/tool,
- tetapkan ownership lintas fungsi,
- dan mulai mengelola value stream, bukan hanya use case terpisah.

Sangat sedikit organisasi yang realistis menargetkan lompatan penuh ke level 5 dalam 12 bulan, kecuali mereka memang sudah memiliki digital core, governance, dan operating discipline yang sangat matang.

# Checklist Praktis

## Pertanyaan diagnosis cepat

- [ ] Apakah istilah “agent” di perusahaan kami sudah punya definisi yang konsisten?
- [ ] Apakah kami bisa membedakan dengan jelas antara copilot, workflow assistant, dan action agent?
- [ ] Apakah nilai AI kami masih dominan di produktivitas individu, atau sudah terhubung ke metrik proses?
- [ ] Apakah ada workflow prioritas yang sudah punya owner bisnis, owner teknis, dan owner risiko?
- [ ] Apakah agent yang bertindak di sistem sudah punya identitas, hak akses terbatas, dan audit trail?
- [ ] Apakah kami sudah punya policy runtime untuk menentukan kapan agent boleh bertindak, meminta approval, atau berhenti?
- [ ] Apakah observability agent sudah cukup untuk menjelaskan tool call, keputusan, dan exception?
- [ ] Apakah kami mengelola agent sebagai portofolio enterprise, atau masih sebagai kumpulan pilot?
- [ ] Apakah dampak ke peran manusia dan kebutuhan reskilling sudah dibahas secara formal?

## Keputusan yang perlu diambil eksekutif

1. **Tentukan level target per domain, bukan hanya slogan enterprise.**  
   Finance, procurement, customer operations, dan IT operations bisa punya target kematangan yang berbeda.

2. **Pilih satu lompatan kematangan yang realistis untuk 12 bulan.**  
   Jangan mencoba melompat dua atau tiga level sekaligus tanpa fondasi.

3. **Hubungkan target maturity dengan investasi fondasi.**  
   Jika ingin masuk level 3, siapkan API, identity, policy engine, dan observability. Jika ingin masuk level 4, siapkan operating model lintas fungsi.

4. **Gunakan value stream sebagai unit prioritas.**  
   Hindari terlalu banyak pilot yang tidak terhubung ke outcome bisnis.

5. **Libatkan COO, CIO, CFO, CHRO, dan risk leader sejak awal.**  
   Maturity agentic AI adalah agenda operating model perusahaan, bukan proyek teknologi semata.

## Sinyal bahaya yang perlu diwaspadai

- terlalu banyak demo, terlalu sedikit use case produksi,
- klaim “autonomous” padahal manusia masih melakukan hampir semua tindakan,
- agent diberi akses sistem tanpa policy runtime yang jelas,
- tidak ada inventaris resmi agent yang aktif,
- metrik sukses hanya berupa jumlah pengguna atau jumlah prompt,
- dan workforce impact baru dipikirkan setelah implementasi berjalan.

Maturity model yang baik bukan alat untuk terlihat maju. Ia adalah alat untuk **jujur tentang posisi saat ini, disiplin tentang target berikutnya, dan jelas tentang fondasi yang harus dibangun**. Dalam agentic AI, kecepatan memang penting. Tetapi yang lebih menentukan adalah apakah perusahaan mampu mengubah eksperimen menjadi kapabilitas operasional yang dapat dipercaya dan dapat diskalakan.
