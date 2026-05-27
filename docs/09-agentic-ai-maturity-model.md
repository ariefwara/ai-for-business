---
title: "Agentic AI Maturity Model untuk Perusahaan"
sidebar_position: 9
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Agentic AI Maturity Model untuk Perusahaan

<ArticleDiagram src="/img/diagrams/09-agentic-ai-maturity-model.png" alt="Diagram: Agentic AI Maturity Model untuk Perusahaan" />

Bayangkan rapat eksekutif di mana satu orang berkata, "kita sudah pakai AI agents," sementara yang lain membayangkan chatbot knowledge base, yang lain membayangkan copilot yang membantu menulis email, dan yang lain lagi membayangkan sistem yang benar-benar memanggil tool dan mengeksekusi tindakan di sistem enterprise. Semua menggunakan istilah yang sama, tetapi membicarakan hal yang sangat berbeda. Jika semua hal ini disebut "agentic AI", organisasi akan kesulitan menjawab pertanyaan yang jauh lebih penting: sebenarnya kita ada di level mana, fondasi apa yang sudah ada dan apa yang belum, risiko apa yang mulai muncul, dan target dua belas bulan yang realistis itu seperti apa.

Di sinilah maturity model dibutuhkan. Bukan sebagai alat untuk terlihat maju, tetapi sebagai cara untuk menyamakan bahasa, menentukan target yang realistis, dan menghindari klaim transformasi yang terlalu dini.

## Mengapa Perusahaan Membutuhkan Maturity Model

Banyak organisasi melompat ke pilot sebelum memahami level kemampuan yang sedang mereka bangun. Hasilnya sering terlihat familiar: tim bisnis merasa sudah maju karena ada beberapa use case AI, tim teknologi merasa bottleneck ada di data dan integrasi, tim risk khawatir karena kontrol belum jelas, dan eksekutif sulit membedakan mana eksperimen produktivitas dan mana kapabilitas enterprise yang benar-benar bisa diskalakan.

Tanpa maturity model, diskusi menjadi kabur. Chatbot knowledge base bisa disamakan dengan agent procurement. Copilot untuk analis finance bisa disamakan dengan sistem multi-agent yang mengorkestrasi close exception. Padahal kebutuhan fondasi, kontrol, dan dampak organisasinya sangat berbeda.

Maturity model berguna setidaknya untuk empat hal. Pertama, menyamakan bahasa lintas fungsi. COO, CIO, CFO, CHRO, dan risk leader perlu bahasa yang sama. Jika satu pihak membayangkan agent sebagai asisten percakapan, sementara pihak lain membayangkannya sebagai executor semi-otonom, keputusan investasi akan mudah meleset.

Kedua, menentukan target yang realistis. Tidak semua perusahaan harus langsung mengejar otonomi tinggi. Dalam banyak kasus, target yang paling masuk akal untuk dua belas bulan ke depan justru bukan autonomous enterprise, melainkan berpindah dari produktivitas individual ke workflow assistance yang terukur, atau dari workflow assistance ke controlled agentic execution di domain tertentu.

Ketiga, menghubungkan value dengan fondasi. Semakin tinggi level kematangan, semakin besar potensi nilai end-to-end. Tetapi kebutuhan fondasinya juga meningkat: API maturity, data consistency, identity, policy engine, observability, dan human-in-the-loop governance menjadi semakin penting.

Keempat, menghindari transformasi semu. Banyak organisasi terlihat aktif karena punya banyak demo. Namun hambatan utama bukan lagi semata teknologi, melainkan organisasi, cara kerja, dan kepemimpinan. Maturity model membantu membedakan aktivitas AI dari kapabilitas operasional yang benar-benar siap scale.

## Cara Membaca Model Kematangan Ini

Model ini terdiri dari lima level: Individual Augmentation, Workflow Assistance, Controlled Agentic Execution, Multi-Agent Operating Model, dan Agentic Enterprise. Penting untuk dipahami bahwa ini bukan tangga yang harus dilalui secara seragam oleh seluruh perusahaan. Dalam praktiknya, satu organisasi bisa berada di level 1 untuk HR, level 2 untuk finance, dan level 3 untuk customer operations. Karena itu, maturity model ini paling berguna jika dipakai pada dua lapisan sekaligus: level perusahaan secara umum, dan level per value stream atau domain proses. Dengan cara itu, perusahaan bisa menghindari dua kesalahan umum: terlalu optimistis di level enterprise, atau terlalu pesimistis karena melihat satu domain yang tertinggal.

## Level 1: Individual Augmentation

Level pertama adalah ketika AI dipakai terutama sebagai alat bantu individu. Contohnya sudah sangat umum: menulis atau merapikan email, merangkum dokumen, membuat draft presentasi, membantu analisis awal, mencari informasi dari knowledge base, atau membantu coding dan dokumentasi. Pada level ini, nilai biasanya terasa cepat. Karyawan merasa lebih produktif, waktu berpikir awal berkurang, dan beberapa pekerjaan administratif menjadi lebih ringan. Karena adopsinya sering bottom-up, level ini biasanya tumbuh paling cepat.

Namun dari sudut pandang enterprise, ada keterbatasan yang jelas. Masalah utama level 1 adalah nilai bisnisnya sulit diukur secara formal. Produktivitas meningkat, tetapi tersebar di banyak individu dan tidak selalu terhubung ke metrik proses seperti cycle time, error rate, atau cost per transaction. Misalnya di tim finance, analis mungkin memakai AI untuk merangkum variance commentary. Di procurement, buyer memakai AI untuk menyusun email vendor. Di customer operations, supervisor memakai AI untuk merapikan respons eskalasi. Semua berguna, tetapi belum menjadi kapabilitas operasional yang reusable.

Karena penggunaan sering terjadi di level individu, risiko yang paling umum adalah data sensitif dimasukkan ke tool yang tidak disetujui, tidak ada kontrol atas prompt dan output, tidak ada reusable asset yang dibangun, dan organisasi tidak belajar secara sistematis dari penggunaan tersebut. Di level ini, perusahaan sering merasa sudah pakai AI, padahal sebenarnya baru berada pada fase adopsi personal.

Level ini tepat untuk mempercepat literasi AI, membangun kebiasaan penggunaan, dan menemukan area kerja yang paling banyak menyita waktu kognitif. Tetapi level 1 tidak cukup jika tujuan perusahaan adalah transformasi operating model. Jika organisasi berhenti di sini terlalu lama, AI akan tetap menjadi alat bantu personal, bukan lapisan eksekusi perusahaan.

Tanda bahwa Anda masih dominan di level 1 adalah penggunaan AI tinggi tetapi tidak terhubung ke proses formal, tidak ada owner proses yang bertanggung jawab atas outcome AI, metrik sukses masih berupa adopsi tool atau kepuasan pengguna, dan belum ada integrasi yang berarti ke workflow enterprise.

## Level 2: Workflow Assistance

Di level kedua, AI mulai tertanam dalam workflow tertentu, bukan hanya dipakai bebas oleh individu. Manusia masih menjadi executor utama, tetapi AI membantu mengurangi waktu pencarian, penulisan, analisis, dan dokumentasi di proses yang lebih jelas. Contohnya: drafting respons customer service berdasarkan histori kasus, penjelasan variance di finance berdasarkan data close, ringkasan tiket insiden untuk service desk, klasifikasi intake procurement, atau penyiapan dokumen onboarding karyawan. Perbedaan utamanya dengan level 1 adalah AI mulai berada di dalam alur kerja resmi.

Pada level ini, perusahaan sudah bisa mulai mengukur dampak yang lebih konkret, misalnya penurunan cycle time, peningkatan kualitas output, penurunan rework, dan adoption rate di proses tertentu. Contoh di customer operations: AI membantu agen layanan menyusun respons berdasarkan histori pelanggan dan policy yang relevan. Agen manusia tetap memeriksa dan mengirim. Nilai utamanya bukan AI dipakai, tetapi apakah waktu penanganan turun dan kualitas respons lebih konsisten. Contoh di finance: AI menyiapkan draft variance explanation untuk controller. Manusia tetap memvalidasi. Jika dilakukan dengan baik, waktu penyusunan commentary berkurang dan kualitas narasi lebih seragam.

Bagi banyak perusahaan, level 2 adalah target yang sangat sehat untuk gelombang pertama. Alasannya sederhana: nilai bisnis mulai terlihat, tetapi risiko masih relatif terkendali karena manusia tetap menjadi executor utama.

Namun level ini juga punya batas. Jika AI hanya membantu menyiapkan draft, manusia tetap harus memindahkan keputusan ke sistem, menjalankan tindakan, mengejar follow-up, dan menutup loop proses. Artinya, level 2 meningkatkan efisiensi, tetapi belum mengubah economics proses secara mendasar. Untuk proses volume tinggi seperti AP exception, claims triage, atau IT incident handling, nilai terbesar sering baru muncul ketika AI mulai bisa bertindak secara terbatas.

Tanda bahwa Anda berada di level 2 adalah AI tertanam di workflow tertentu, ada metrik proses yang mulai dipakai, manusia tetap memegang hampir semua tindakan, integrasi ke sistem ada tetapi dominan read-only atau draft generation, dan governance mulai muncul tetapi belum seketat sistem action-oriented.

## Level 3: Controlled Agentic Execution

Level ketiga adalah titik perubahan yang paling penting. Di sinilah AI tidak lagi hanya membantu berpikir, tetapi mulai memanggil tools dan melakukan action terbatas dalam batas yang jelas. Contohnya: agent menyiapkan refund dan memprosesnya untuk kasus bernilai rendah yang memenuhi policy, agent membuat ticket remediation di ITSM setelah validasi tertentu, agent mengirim request procurement setelah memeriksa kelengkapan dan policy, atau agent collections mengirim follow-up otomatis berdasarkan aturan yang telah disetujui. Ini adalah level ketika istilah agentic mulai benar-benar relevan secara operasional.

Begitu agent bisa bertindak, fondasi yang sebelumnya terasa opsional menjadi wajib: identity dan access control untuk agent, policy engine untuk membatasi tindakan, observability untuk melacak keputusan dan tool call, audit trail untuk menjelaskan apa yang dilakukan agent, dan human approval workflow untuk kasus tertentu. Tanpa itu, perusahaan sebenarnya belum siap berada di level 3, meskipun demo agent-nya terlihat impresif.

Di procurement, agent menerima intake request, memeriksa kategori belanja, vendor yang diizinkan, dan threshold approval. Jika semua syarat terpenuhi, agent membuat request formal di sistem. Jika ada konflik policy, agent berhenti dan mengeskalasi. Di IT operations, agent menerima event insiden, menarik log, menjalankan runbook diagnostik, lalu membuka ticket remediation dengan enrichment lengkap. Untuk remediasi berisiko rendah, agent bisa mengeksekusi langkah tertentu. Untuk perubahan produksi yang sensitif, agent harus meminta approval. Di customer operations, agent memverifikasi eligibility refund, memeriksa histori pelanggan, lalu memproses refund kecil secara otomatis. Refund besar atau pelanggan VIP tetap masuk ke supervisor.

Level ini memberi nilai yang jauh lebih besar daripada level 2, tetapi juga mengubah profil risiko secara signifikan. Trade-off utamanya: nilai naik karena action mulai otomatis, tetapi kebutuhan kontrol, integrasi, dan ownership juga naik tajam. Ini bukan level yang cocok untuk organisasi yang masih lemah di API maturity, data consistency, atau governance runtime. Jika fondasinya belum siap, memaksa level 3 hanya akan menghasilkan insiden dan hilangnya kepercayaan bisnis.

Tanda bahwa Anda benar-benar di level 3 adalah agent punya identitas formal dan hak akses terbatas, ada pemisahan jelas antara read-only dan action tools, policy runtime menentukan kapan agent boleh bertindak, observability dan logging tersedia, dan manusia masuk melalui approval atau exception handling, bukan lagi sebagai executor default untuk semua langkah.

## Level 4: Multi-Agent Operating Model

Pada level keempat, perusahaan tidak lagi mengelola agent sebagai unit terpisah per tugas. Beberapa agent mulai bekerja bersama di bawah orchestrator untuk menyelesaikan value stream lintas fungsi. Ini bisa terjadi pada proses seperti lead-to-cash, issue-to-resolution di customer operations, source-to-pay exception handling, finance close orchestration, atau supply chain exception management. Di sini, satu agent tidak cukup. Diperlukan kombinasi orchestrator, specialist agent, task agent, dan manusia sebagai pengawas serta penangan exception.

Perubahan paling penting di level 4 adalah pergeseran dari optimasi tugas individual ke orkestrasi outcome end-to-end. Di finance close, satu agent memonitor close calendar, agent lain menganalisis anomali jurnal, agent lain menyiapkan commentary, orchestrator mengurutkan prioritas exception, dan manusia masuk untuk approval material dan penyelesaian kasus kompleks. Di supply chain, agent memonitor event shipment, agent lain mengecek inventory dan customer priority, agent policy menilai opsi mitigasi, dan orchestrator menyusun rekomendasi tindakan lintas fungsi.

Di level 4, perusahaan mulai melihat nilai yang lebih besar karena bottleneck handoff antar-tim berkurang. AI tidak lagi hanya mempercepat satu langkah, tetapi membantu mengorkestrasi keseluruhan alur kerja. Namun justru di sinilah risiko baru muncul. Semakin banyak agent yang bekerja bersama, semakin besar risiko terlalu banyak agent dibangun tanpa katalog dan ownership yang jelas, dua agent memberi keputusan yang bertentangan, orchestrator mengambil jalur yang tidak sesuai policy, dan akuntabilitas menjadi kabur ketika hasil akhir salah.

Karena itu, level 4 membutuhkan disiplin operating model yang jauh lebih kuat: ownership per agent dan per value stream, katalog tool dan agent, standar evaluasi, governance lintas fungsi, dan desain human oversight yang eksplisit. Jika proses dasar masih kacau, data antar-fungsi belum sinkron, dan ownership end-to-end belum ada, memaksakan multi-agent operating model justru berbahaya. Dalam kondisi seperti itu, lebih baik memperkuat level 2 atau 3 di domain yang lebih sempit terlebih dahulu.

## Level 5: Agentic Enterprise

Level kelima bukan sekadar punya banyak agent. Agentic enterprise berarti perusahaan sudah memiliki platform, governance, operating model, workforce model, dan portfolio management yang terintegrasi. Pada level ini, agents bukan lagi eksperimen innovation lab. Mereka menjadi bagian resmi dari execution layer perusahaan.

Perusahaan di level ini biasanya memiliki platform agent enterprise yang menjadi fondasi bersama, governance board lintas bisnis, teknologi, risk, legal, dan HR, portfolio management untuk memilih, menghentikan, dan menskalakan use case, identity, policy, observability, dan auditability yang terstandar, operating model yang jelas untuk human-agent teaming, dan workforce strategy yang menggeser manusia dari transaksi rutin ke oversight, exception handling, dan continuous improvement.

Kesalahan umum adalah menganggap level 5 berarti semua proses berjalan tanpa manusia. Itu keliru. Agentic enterprise bukan tentang menghilangkan manusia dari semua keputusan. Ia tentang menempatkan agent sebagai bagian resmi dari sistem kerja perusahaan, dengan batas kewenangan yang jelas dan model akuntabilitas yang matang. Di beberapa domain, bounded autonomy bisa tinggi. Di domain lain, human-in-the-loop tetap dominan. Yang membedakan level 5 adalah konsistensi platform dan operating discipline, bukan sekadar tingkat otonomi.

Pada level ini, perubahan tenaga kerja tidak lagi bersifat lokal. Perusahaan perlu mendesain ulang peran frontline, peran supervisor, skill untuk exception management, peran baru seperti agent owner, policy designer, dan agent operations lead, serta metrik kinerja untuk human-agent teams. Tanpa ini, perusahaan bisa punya platform agent yang canggih tetapi organisasi manusianya tidak siap.

## Self-Assessment Matrix: Di Mana Posisi Perusahaan Anda?

Gunakan lima dimensi berikut untuk menilai posisi saat ini dan target dua belas bulan ke depan.

Pada dimensi nilai bisnis, level 1 berarti nilai tersebar di produktivitas individu, level 2 berarti nilai terukur di proses spesifik, level 3 berarti nilai datang dari action terbatas dan pengurangan handoff, level 4 berarti nilai muncul di value stream lintas fungsi, dan level 5 berarti nilai dikelola sebagai portofolio enterprise.

Pada dimensi arsitektur dan integrasi, level 1 berarti tool terpisah dan minim integrasi, level 2 berarti integrasi read-only atau drafting dalam workflow, level 3 berarti tool calling dan action terbatas dengan kontrol, level 4 berarti orkestrasi multi-agent lintas sistem, dan level 5 berarti platform agent enterprise dengan standar bersama.

Pada dimensi governance dan risk, level 1 berarti kebijakan penggunaan dasar, level 2 berarti guardrail per workflow mulai muncul, level 3 berarti identity, policy engine, approval, dan observability wajib, level 4 berarti governance lintas agent dan lintas fungsi, dan level 5 berarti governance enterprise terintegrasi dengan audit dan portfolio control.

Pada dimensi operating model, level 1 berarti penggunaan individual, level 2 berarti AI membantu executor manusia, level 3 berarti manusia mengawasi action terbatas, level 4 berarti manusia fokus pada oversight dan exception handling lintas agent, dan level 5 berarti human-agent teaming menjadi bagian resmi operating model perusahaan.

Pada dimensi workforce readiness, level 1 berarti literasi dasar, level 2 berarti adopsi per peran, level 3 berarti pelatihan untuk approval, exception, dan trust in automation, level 4 berarti redesign peran dan kapasitas tim, dan level 5 berarti workforce transformation terhubung ke strategi enterprise.

Jika perusahaan Anda menilai diri berada di level 3 atau lebih, tetapi belum punya identity formal untuk agent, policy runtime, observability, dan ownership lintas fungsi, kemungkinan besar Anda masih berada di level 2 dengan beberapa eksperimen level 3.

## Menentukan Target 12 Bulan yang Masuk Akal

Untuk sebagian besar perusahaan, target dua belas bulan yang sehat biasanya salah satu dari tiga pola berikut.

Pertama, dari level 1 ke level 2. Ini cocok untuk organisasi yang penggunaan AI-nya masih dominan individual. Fokusnya adalah pilih dua hingga tiga workflow prioritas, tanamkan AI ke proses resmi, ukur cycle time, kualitas, dan adoption, dan bangun guardrail dasar.

Kedua, dari level 2 ke level 3. Ini cocok untuk organisasi yang sudah punya workflow assistance dan ingin membuka nilai lebih besar. Fokusnya adalah pilih action yang bounded dan berisiko rendah, bangun identity, policy engine, approval workflow, dan observability, serta pastikan API dan data foundation cukup matang.

Ketiga, dari level 3 ke level 4. Ini cocok untuk organisasi yang sudah punya beberapa agent action-oriented. Fokusnya adalah hindari agent sprawl, bangun orchestrator dan katalog agent atau tool, tetapkan ownership lintas fungsi, dan mulai mengelola value stream, bukan hanya use case terpisah.

Sangat sedikit organisasi yang realistis menargetkan lompatan penuh ke level 5 dalam dua belas bulan, kecuali mereka memang sudah memiliki digital core, governance, dan operating discipline yang sangat matang.

## Menuju Kapabilitas Operasional yang Dapat Dipercaya

Setelah membaca uraian di atas, Anda mungkin mulai bertanya-tanya di mana posisi perusahaan Anda saat ini. Pertanyaan itu sendiri sudah merupakan langkah awal yang penting. Sebelum menentukan target, ada baiknya Anda melakukan diagnosis singkat terhadap situasi yang ada. Apakah istilah agent di perusahaan Anda sudah punya definisi yang konsisten? Apakah Anda bisa membedakan dengan jelas antara copilot, workflow assistant, dan action agent? Apakah nilai AI Anda masih dominan di produktivitas individu, atau sudah terhubung ke metrik proses? Apakah ada workflow prioritas yang sudah punya owner bisnis, owner teknis, dan owner risiko? Apakah agent yang bertindak di sistem sudah punya identitas, hak akses terbatas, dan audit trail? Apakah Anda sudah punya policy runtime untuk menentukan kapan agent boleh bertindak, meminta approval, atau berhenti? Apakah observability agent sudah cukup untuk menjelaskan tool call, keputusan, dan exception? Apakah Anda mengelola agent sebagai portofolio enterprise, atau masih sebagai kumpulan pilot? Apakah dampak ke peran manusia dan kebutuhan reskilling sudah dibahas secara formal?

Jawaban atas pertanyaan-pertanyaan itu akan membantu Anda menentukan langkah berikutnya. Ada beberapa keputusan yang perlu diambil oleh eksekutif. Pertama, tentukan level target per domain, bukan hanya slogan enterprise. Finance, procurement, customer operations, dan IT operations bisa punya target kematangan yang berbeda. Kedua, pilih satu lompatan kematangan yang realistis untuk dua belas bulan. Jangan mencoba melompat dua atau tiga level sekaligus tanpa fondasi. Ketiga, hubungkan target maturity dengan investasi fondasi. Jika ingin masuk level 3, siapkan API, identity, policy engine, dan observability. Jika ingin masuk level 4, siapkan operating model lintas fungsi. Keempat, gunakan value stream sebagai unit prioritas. Hindari terlalu banyak pilot yang tidak terhubung ke outcome bisnis. Kelima, libatkan COO, CIO, CFO, CHRO, dan risk leader sejak awal. Maturity agentic AI adalah agenda operating model perusahaan, bukan proyek teknologi semata.

Ada juga sinyal bahaya yang perlu diwaspadai. Terlalu banyak demo dan terlalu sedikit use case produksi. Klaim autonomous padahal manusia masih melakukan hampir semua tindakan. Agent diberi akses sistem tanpa policy runtime yang jelas. Tidak ada inventaris resmi agent yang aktif. Metrik sukses hanya berupa jumlah pengguna atau jumlah prompt. Workforce impact baru dipikirkan setelah implementasi berjalan. Jika sinyal-sinyal ini muncul, kemungkinan besar perusahaan Anda belum siap untuk melompat ke level berikutnya.

Maturity model yang baik bukan alat untuk terlihat maju. Ia adalah alat untuk jujur tentang posisi saat ini, disiplin tentang target berikutnya, dan jelas tentang fondasi yang harus dibangun. Dalam agentic AI, kecepatan memang penting. Tetapi yang lebih menentukan adalah apakah perusahaan mampu mengubah eksperimen menjadi kapabilitas operasional yang dapat dipercaya dan dapat diskalakan.
