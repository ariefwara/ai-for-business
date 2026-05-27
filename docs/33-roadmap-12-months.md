---
title: "Roadmap 12 Bulan Menuju Agentic Operating Model"
sidebar_position: 33
image: "/img/diagrams/33-roadmap-12-months.png"
description: "Bayangkan Anda baru saja menyelesaikan pilot 90 hari. Satu agent berjalan, hasilnya menjanjikan, dan tim mulai bertanya: \"Kapan kita scale?\" Pertanyaan itu wajar,..."
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Roadmap 12 Bulan Menuju Agentic Operating Model

<ArticleDiagram src="/img/diagrams/33-roadmap-12-months.png" alt="Diagram: Roadmap 12 Bulan Menuju Agentic Operating Model" />

Bayangkan Anda baru saja menyelesaikan pilot 90 hari. Satu agent berjalan, hasilnya menjanjikan, dan tim mulai bertanya: "Kapan kita scale?" Pertanyaan itu wajar, tetapi sering kali menjebak. Banyak perusahaan mampu membangun satu agent yang terlihat bagus. Jauh lebih sedikit yang mampu mengubah keberhasilan itu menjadi kapabilitas yang bisa diandalkan di seluruh organisasi.

Pada titik ini, masalahnya bukan lagi use case apa yang bisa didemokan atau model apa yang paling menarik. Masalahnya mulai bergeser ke pertanyaan yang lebih mendasar: bagaimana perusahaan bergerak dari satu pilot menuju cara kerja baru yang resmi, terukur, dan bisa diperluas ke berbagai fungsi tanpa kehilangan kontrol?

Inilah yang coba dijawab oleh roadmap 12 bulan. Bukan sekadar rencana menambah jumlah agent, tetapi peta untuk membangun empat hal secara paralel: bukti nilai yang kredibel, platform dan pola yang bisa dipakai ulang, tata kelola dan disiplin operasional, serta perubahan pada tenaga kerja dan model layanan.

Mengapa keempatnya harus berjalan bersamaan? Karena agentic transformation bukan proyek teknologi. Ia adalah perubahan pada cara perusahaan menjalankan operasi sehari-hari. Nilai terbesar tidak datang dari menempelkan AI ke proses lama, tetapi dari mendesain ulang bagaimana manusia dan agent bekerja sama, bagaimana platform mendukungnya, dan bagaimana risiko dikelola. Karena itu, roadmap ini harus dibaca sebagai peta jalan menuju operating model baru, bukan sekadar jadwal eksperimen.

Kita akan membaginya dalam empat kuartal. Bukan karena semua perusahaan bergerak dengan ritme yang sama, tetapi karena urutan ini membantu menjaga logika yang sehat: buktikan nilai, bangun fondasi, perluas ke domain lain, lalu jadikan bagian dari mekanisme perusahaan.

## Kuartal Pertama: Buktikan Nilai di Satu Domain

Kuartal pertama bukan saatnya mengejar banyak use case. Fokusnya justru sempit: membuktikan bahwa agent bisa memperbaiki outcome nyata di satu domain, sambil membangun tata kelola minimum yang cukup untuk belajar dengan aman.

Domain awal perlu dipilih dengan disiplin. Yang paling cocok biasanya adalah pekerjaan dengan volume tinggi, banyak pengecualian, pemilik proses yang jelas, dan risiko yang masih bisa dibatasi. Misalnya finance close support, procurement intake, customer operations triage, IT incident triage, atau supply chain exception coordination dalam lingkup terbatas.

Tujuan kuartal pertama bukan meluncurkan AI. Tujuannya menghasilkan bukti bahwa agent dapat memperbaiki sesuatu yang terukur.

### Apa yang harus sudah ada di akhir kuartal pertama

Lima hal ini sebaiknya sudah selesai.

Pertama, pilot agent yang benar-benar dipakai pada workflow nyata. Bukan chatbot generik, tetapi agent dengan ruang lingkup jelas, akses tool terbatas, dan review manusia yang eksplisit. Contohnya agent yang mengumpulkan bukti dan menyiapkan draf komentar untuk proses tutup buku, agent yang mengklasifikasikan permintaan pengadaan dan merutekannya ke jalur yang benar, atau agent yang mengumpulkan log dan rekomendasi untuk insiden TI.

Kedua, metrik dasar sebelum pilot berjalan. Perusahaan harus punya data tentang waktu siklus, tingkat koreksi, backlog, eskalasi, atau metrik lain yang relevan. Tanpa data awal, hasil pilot hanya akan menjadi opini.

Ketiga, template agent card. Setiap agent perlu diperlakukan sebagai objek operasional. Kartu agent minimal menjelaskan tujuan bisnis, ruang lingkup kasus, sumber data, alat yang boleh dipanggil, pemilik bisnis, pemilik teknis, tingkat risiko, dan kriteria keberhasilan. Ini terlihat administratif, tetapi sangat penting ketika jumlah agent mulai bertambah. Tanpa template sejak awal, setiap tim akan mendefinisikan agent dengan cara berbeda.

Keempat, registri alat awal. Kuartal pertama belum perlu platform besar, tetapi perusahaan perlu mulai mencatat alat dan API apa yang boleh dipakai agent, dengan hak akses dan batas penggunaan yang jelas. Ini mencegah agent berkembang liar melalui koneksi dadakan ke sistem ERP, CRM, atau knowledge base.

Kelima, proses review risiko minimum. Belum perlu dewan besar, tetapi harus ada proses review sederhana yang melibatkan bisnis, teknologi, keamanan, dan pengendalian risiko. Proses ini menilai data sensitif, tingkat otonomi, ambang batas persetujuan, jejak audit, dan rencana cadangan jika agent gagal.

### Cara mengukur keberhasilan

Ini disiplin yang paling sering dilanggar. Keberhasilan kuartal pertama tidak diukur dari berapa banyak prompt yang berhasil, berapa banyak pemangku kepentingan yang terkesan, atau berapa banyak use case yang masuk daftar tunggu. Keberhasilan diukur dari pertanyaan seperti: apakah waktu siklus membaik pada kasus yang dipilih? Apakah output agent cukup berguna untuk mengurangi beban manual? Apakah tingkat koreksi masih masuk akal? Apakah pengguna benar-benar memakainya? Apakah kontrol minimum bekerja?

Jika jawabannya belum jelas, perusahaan belum siap melangkah ke fase berikutnya.

### Kompromi yang perlu diterima

Kuartal pertama menuntut konservatisme. Banyak organisasi ingin langsung memberi agent hak eksekusi. Itu biasanya terlalu cepat. Untuk sebagian besar perusahaan, kuartal pertama sebaiknya berhenti di level monitor, draf, atau rekomendasi. Pola ini cocok untuk domain seperti keuangan, pengadaan, dan operasi TI, di mana otonomi terbatas lebih sehat daripada otomasi penuh. Jika proses dasar masih kacau, data belum stabil, atau kebijakan belum terdokumentasi, kuartal pertama mungkin justru berakhir dengan keputusan yang benar: perbaiki fondasi dulu sebelum memperluas.

## Kuartal Kedua: Bangun Platform dan Pola yang Bisa Dipakai Ulang

Jika kuartal pertama membuktikan bahwa satu use case punya nilai, kuartal kedua adalah saat menghindari jebakan paling umum: membangun agent kedua, ketiga, dan keempat dengan cara yang sama sekali berbeda. Di sinilah perusahaan mulai bergerak dari pilot menuju platform bersama.

Nilai skala muncul ketika strategi AI, platform, dan bisnis mulai selaras. Tanpa itu, organisasi hanya mengumpulkan pilot yang mahal dan sulit diaudit.

### Kapabilitas platform yang perlu dibangun

Kuartal kedua bukan berarti semua harus sempurna, tetapi beberapa kapabilitas bersama harus mulai nyata.

Pertama, identitas dan kontrol akses. Agent tidak boleh memakai kredensial generik atau akses pinjaman dari manusia. Perusahaan perlu mulai menerapkan identitas agent, akses berbasis peran, dan pembatasan panggilan alat sesuai kebijakan.

Kedua, observabilitas. Setiap kali agent berjalan, perlu terlihat input konteks, alat yang dipanggil, hasil yang diberikan, kesalahan yang terjadi, dan kapan manusia melakukan intervensi. Tanpa observabilitas, skala akan menghasilkan kebingungan, bukan pembelajaran.

Ketiga, kerangka evaluasi. Pilot yang baik tidak cukup diuji sekali. Kuartal kedua perlu mulai membangun evaluasi yang lebih sistematis: kasus uji historis, skenario batas, pemeriksaan kepatuhan kebijakan, dan pengukuran kualitas output.

Keempat, lapisan kebijakan dan persetujuan. Perusahaan perlu mulai memisahkan logika kebijakan dari perintah atau kode agent. Misalnya transaksi di atas ambang tertentu wajib persetujuan, data tertentu tidak boleh diakses, atau tindakan tertentu hanya boleh dijalankan pada tingkat risiko rendah.

Kelima, jalur penerapan. Agent juga butuh disiplin siklus hidup. Perubahan pada perintah, skema alat, kebijakan, atau model tidak boleh langsung masuk produksi tanpa pengujian dan persetujuan yang sesuai.

### Ubah komponen pilot menjadi pola yang bisa dipakai ulang

Kuartal kedua adalah fase standardisasi awal. Tim harus mulai bertanya: bagian mana dari pilot yang bisa dipakai ulang, apa yang sebaiknya dijadikan template, dan apa yang harus dilarang. Contoh pola yang bisa dipakai ulang termasuk template agent card, pola alur kerja persetujuan manusia, struktur paket bukti, desain pembungkus alat untuk sistem ERP atau CRM, evaluasi untuk klasifikasi atau penyusunan draf, dan dasbor observabilitas standar.

Ini sangat penting untuk tim layanan bersama, pusat layanan global, atau tim platform perusahaan. Tanpa pola yang bisa dipakai ulang, setiap domain akan membangun platform mini-nya sendiri.

### Dewan tata kelola formal mulai dibentuk

Di kuartal kedua, tata kelola tidak bisa lagi bersifat informal. Perusahaan perlu membentuk dewan tata kelola atau forum setara yang mengelola tiga hal: prioritas portofolio use case mana yang layak lanjut, mana yang ditunda, mana yang dihentikan; penetapan tingkat risiko karena tidak semua agent diperlakukan sama; dan standar minimum untuk identitas, pencatatan, evaluasi, persetujuan, dan rilis.

Dewan ini idealnya lintas fungsi: kepala teknologi informasi, pemilik bisnis, risiko/kepatuhan/keamanan, arsitektur, dan bila perlu keuangan atau audit internal.

### Kapan kuartal kedua belum tepat

Jika kuartal pertama belum menghasilkan bukti yang cukup, kuartal kedua sebaiknya tidak dipaksa menjadi program platform besar. Membangun platform tanpa use case yang terbukti hanya akan menciptakan biaya tetap tanpa adopsi.

## Kuartal Ketiga: Perluas ke Beberapa Domain dan Mulai Jalankan Agent Factory

Setelah platform dasar dan pola yang bisa dipakai ulang mulai terbentuk, kuartal ketiga adalah saat memperluas pekerjaan agentic ke dua hingga tiga domain tambahan. Tetapi perlu ditekankan: memperluas bukan berarti membuka keran ide seluas-luasnya. Memperluas berarti menambah secara selektif ke domain yang punya sponsor bisnis jelas dan kesiapan operasional memadai.

Contoh kombinasi yang masuk akal: dari finance close ke penanganan pengecualian hutang dagang, dari procurement intake ke operasi pertanyaan vendor, dari triase insiden TI ke kesiapan perubahan, dari operasi pelanggan ke klaim atau permintaan layanan, dari pemantauan pengecualian rantai pasok ke alur kerja koordinasi.

### Sponsor bisnis harus nyata

Setiap domain tambahan harus punya sponsor yang bersedia memegang target outcome, perubahan proses, keputusan kompromi, dan adopsi tim. Tanpa sponsor bisnis yang aktif, perluasan akan kembali menjadi proyek teknologi.

### Agent factory mulai beroperasi

Di kuartal ketiga, perusahaan sebaiknya mulai menjalankan agent factory. Bukan pabrik dalam arti harfiah, tetapi model pengiriman yang membuat pembangunan agent menjadi lebih industrial dan terkendali.

Komponen utamanya meliputi playbook: panduan standar untuk memilih use case, mendesain agent, menentukan tingkat otonomi, menyiapkan evaluasi, dan menjalankan peluncuran terbatas. Juga arsitektur acuan yang menjelaskan bagaimana agent terhubung ke model, lapisan konteks, lapisan alat, mesin kebijakan, observabilitas, dan sistem perusahaan. Lalu kumpulan pengujian yang bisa dipakai ulang untuk kualitas output, kegagalan alat, kepatuhan kebijakan, pemeriksaan keamanan, dan pengujian regresi saat ada perubahan. Serta program pelatihan untuk pemilik bisnis, supervisor, insinyur, pengulas risiko, dan pimpinan operasi agar mereka bisa bekerja dalam model tim manusia-agent.

Agent factory penting untuk mencegah penyebaran agent yang tidak terkendali. Tanpa itu, perusahaan akan punya banyak agent, tetapi sedikit standar, sedikit penggunaan ulang, dan sedikit kontrol.

### SDM dan operasi mulai mengubah peran, KPI, dan rencana tenaga kerja

Kuartal ketiga juga menjadi titik ketika perubahan tenaga kerja tidak bisa lagi ditunda. Begitu beberapa domain mulai berjalan, SDM dan operasi harus mulai memperbarui deskripsi peran, harapan keterampilan, KPI supervisor, model kapasitas, dan rencana tenaga kerja.

Contoh perubahannya: analis keuangan tidak lagi diukur terutama dari volume sentuhan manual, tetapi dari kualitas review, penyelesaian pengecualian, dan perbaikan akar masalah. Pimpinan service desk mulai diukur dari kualitas penyelesaian tim manusia-agent, bukan hanya jumlah tiket per agen manusia. Perencana rantai pasok mulai memegang KPI pada penyelesaian pengecualian dan kualitas keputusan, bukan hanya pemantauan dasbor.

Ini juga saat yang tepat untuk memperjelas peran baru seperti pemilik produk agent, perancang alur kerja, pimpinan operasi agent, pimpinan evaluasi atau pengujian, dan pengelola kebijakan.

### Kompromi di kuartal ketiga

Kuartal ketiga sering menjadi fase paling berbahaya. Nilai awal sudah terlihat, sehingga organisasi tergoda mempercepat terlalu banyak domain sekaligus. Risikonya: platform belum cukup matang, dewan tata kelola kewalahan, pelatihan tertinggal, dan kualitas agent turun karena tim mengejar volume. Karena itu, lebih baik memperluas ke dua hingga tiga domain dengan disiplin daripada sepuluh domain dengan kekacauan.

## Kuartal Keempat: Integrasikan ke Operating Model Resmi

Jika kuartal pertama adalah pembuktian, kuartal kedua adalah standardisasi, dan kuartal ketiga adalah perluasan terkontrol, maka kuartal keempat adalah fase yang membedakan perusahaan serius dari sekadar pertunjukan inovasi. Di kuartal keempat, agentic AI harus mulai masuk ke mekanisme manajemen perusahaan, bukan hanya ke daftar eksperimen.

### Integrasikan ke perencanaan dan penganggaran

Perusahaan perlu mulai memasukkan inisiatif agentic ke perencanaan tahunan, alokasi investasi platform, business case fungsi, dan target produktivitas atau outcome layanan. Ini penting karena selama agent masih dibiayai seperti eksperimen, ia akan selalu rentan dipotong atau dipinggirkan.

### Integrasikan ke manajemen risiko

Manajemen risiko harus bergerak dari review dadakan ke model yang lebih formal: taksonomi risiko untuk agent, pengujian kontrol, respons insiden untuk kegagalan agent, review berkala atas penyimpangan kebijakan, dan pelibatan audit internal.

### Integrasikan ke manajemen vendor

Banyak perusahaan akan memakai kombinasi platform vendor, penyedia model, integrator sistem, dan mitra layanan terkelola. Kuartal keempat adalah saat untuk menata siapa bertanggung jawab atas apa, standar apa yang wajib dipenuhi vendor, bagaimana data dan risiko model dikelola, dan bagaimana outcome diukur dalam kontrak. Ini sangat relevan untuk layanan bersama dan pusat layanan global yang mulai bergerak ke model layanan agentic. Pada akhirnya, layanan agentic bukan soal membeli alat, tetapi membeli dan mengelola outcome.

### Integrasikan ke review kinerja

Jika operating model berubah, sistem penilaian kinerja juga harus berubah. Perusahaan perlu mulai menilai kualitas kerja sama manusia-agent, kemampuan pengawasan, kontribusi pada perancangan ulang alur kerja, dan perbaikan berkelanjutan atas kinerja agent. Jika KPI tetap berbasis aktivitas lama, organisasi akan melawan transformasi secara diam-diam.

### Dari laboratorium inovasi ke operating model resmi

Tanda paling jelas keberhasilan kuartal keempat adalah ini: agent tidak lagi dipandang sebagai eksperimen tim inovasi, tetapi sebagai bagian dari cara perusahaan menjalankan operasi. Artinya ada pemilik yang jelas, ada anggaran, ada standar, ada review berkala, ada metrik outcome, dan ada akuntabilitas.

### Fokus tahun berikutnya

Setelah 12 bulan, perusahaan seharusnya tidak lagi hanya berpikir dalam bahasa use case. Fokus tahun berikutnya harus mulai bergeser ke taruhan strategis, misalnya merancang ulang value stream secara menyeluruh, membangun layanan bersama agentic, mentransformasi pusat layanan global menjadi hub pengiriman berbasis AI, atau mengubah platform perusahaan menjadi lapisan orkestrasi yang lebih adaptif. Di sinilah transformasi agentic benar-benar menjadi agenda operating model perusahaan.

## Apa yang Perlu Diputuskan Sekarang

Beberapa keputusan perlu diambil segera. Pertama, pilih satu domain untuk kuartal pertama yang cukup penting untuk membuktikan nilai, tetapi cukup aman untuk dibatasi. Jangan mulai dari domain yang hanya mudah didemokan atau sebaliknya terlalu material untuk eksperimen awal.

Kedua, putuskan kapan perusahaan akan berinvestasi pada platform bersama. Terlalu cepat membangun platform akan mahal. Terlalu lambat akan menciptakan penyebaran agent yang tidak terkendali. Gunakan bukti dari kuartal pertama sebagai dasar keputusan kuartal kedua.

Ketiga, bentuk dewan tata kelola sebelum memperluas ke lintas domain. Jika lebih dari satu domain mulai berjalan, portofolio, tingkat risiko, dan standar tidak bisa lagi dikelola secara informal.

Keempat, tentukan model agent factory perusahaan. Putuskan apakah akan dipusatkan di tim platform, pabrik digital, pusat layanan global, atau model gabungan dengan standar pusat.

Kelima, mulai sinkronkan SDM, keuangan, dan operasi dengan peta jalan agentic. Jika peran, KPI, penganggaran, dan model vendor tidak ikut berubah, agent akan tetap menjadi proyek samping.

## Tanda Bahaya yang Perlu Diwaspadai

Beberapa sinyal menunjukkan bahwa perusahaan belum siap memperluas. Jika keberhasilan masih diukur dari jumlah demo atau jumlah agent, bukan outcome. Jika setiap domain membangun agent dengan alat, standar, dan akses yang berbeda-beda. Jika tidak ada pemisahan jelas antara pemilik bisnis, pemilik agent, dan pemilik risiko. Jika tata kelola baru dibahas setelah agent mulai menyentuh sistem inti. Jika SDM belum dilibatkan meski alur kerja manusia sudah berubah. Jika tim platform diminta memperluas, tetapi belum punya observabilitas, evaluasi, atau disiplin penerapan. Jika sponsor bisnis pasif dan menganggap ini agenda teknologi semata. Jika tidak ada keputusan tegas untuk menghentikan use case yang tidak menunjukkan nilai.

## Pertanyaan untuk Direfleksikan

Jika 12 bulan dari sekarang perusahaan Anda memiliki 20 agent aktif, apakah itu berarti operating model Anda sudah berubah? Atau Anda hanya memiliki 20 eksperimen baru yang masing-masing bergantung pada kerja keras tim kecil, tanpa platform, tata kelola, dan model tenaga kerja yang siap menopangnya?

Itulah pertanyaan yang membedakan adopsi agentic yang dangkal dari agentic operating model yang benar-benar siap untuk perusahaan.
