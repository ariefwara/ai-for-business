---
title: "Mengubah Shared Services Menjadi Agentic Services"
sidebar_position: 24
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Mengubah Shared Services Menjadi Agentic Services

<ArticleDiagram src="/img/agentic-enterprise/diagrams/24-agentic-shared-services.png" alt="Diagram: Mengubah Shared Services Menjadi Agentic Services" />

Bayangkan tim finance operations Anda setiap hari menerima puluhan invoice exception. Setiap kasus harus dibuka, dibaca, dicocokkan dengan PO dan goods receipt, lalu diputuskan apakah bisa diproses atau perlu ditolak. Sebagian besar waktu habis untuk mencari data di tiga sistem berbeda, bukan untuk mengambil keputusan. Atau tim HR services yang menjawab pertanyaan cuti dan status onboarding berulang kali, padahal jawabannya sudah ada di knowledge base. Atau IT support yang sibuk mereset password, sementara insiden yang lebih kompleks menunggu lebih lama.

Shared services lahir dari logika yang masuk akal: standarisasi proses, konsolidasi volume, dan efisiensi melalui skala. Finance, HR, procurement, IT, dan customer operations dipusatkan agar transaksi diproses lebih konsisten. Model ini masih bekerja, tetapi mulai menunjukkan batasnya. Volume naik, variasi exception bertambah, dan ekspektasi bisnis bergerak dari sekadar efisiensi ke kecepatan serta kualitas hasil. Tiket menumpuk. Handoff bertambah. SLA terpenuhi secara administratif, tetapi pengalaman tetap buruk. Banyak tim akhirnya sibuk memindahkan pekerjaan, bukan menyelesaikannya.

Di sinilah agentic services muncul sebagai respons, bukan sebagai lapisan chatbot di atas service desk, melainkan sebagai perubahan cara layanan diberikan. Bukan lagi delivery yang terutama bergantung pada tenaga manusia, tetapi layanan berbasis tim yang terdiri dari manusia dan agent. Dalam model ini, agent membaca permintaan, memahami konteks, memanggil sistem, menyiapkan tindakan, dan menyelesaikan kasus sederhana secara langsung. Manusia tidak hilang, perannya bergeser ke penanganan exception, interpretasi kebijakan, pengelolaan stakeholder, dan perbaikan berkelanjutan. Targetnya bukan sekadar mengurangi FTE, karena jika itu tujuan utama, perusahaan biasanya membangun automasi yang rapuh dan kehilangan kepercayaan. Target yang lebih tepat adalah mengubah model layanan itu sendiri.

## Mengapa Shared Services Menjadi Tempat yang Tepat untuk Memulai

Tidak semua fungsi cocok menjadi titik awal transformasi agentic. Shared services justru sering menjadi kandidat yang lebih baik daripada fungsi yang sangat strategis atau sangat tidak terstruktur. Ada tiga alasan utama.

Pertama, volume tinggi dan pola kerja berulang. Shared services menangani pekerjaan dalam jumlah besar: invoice exception, pertanyaan karyawan, intake pembelian, reset password, status pesanan, dispute, tugas onboarding, dan berbagai variasi kasus serupa. Volume tinggi memberi dua keuntungan sekaligus. Ada cukup banyak data historis untuk memahami pola kasus, exception, dan hasilnya. Dan ada cukup banyak pengulangan untuk membuat investasi pada agentic workflow menjadi layak secara ekonomi.

Kedua, prosesnya relatif standar meski tidak sederhana. Banyak proses shared services bukan pekerjaan mudah, tetapi cukup terstruktur untuk dipecah menjadi langkah yang bisa diorkestrasi: baca permintaan, klasifikasikan intent, ambil data dari sistem, periksa kebijakan, tentukan jalur, siapkan tindakan, lalu selesaikan atau eskalasi. Ini berbeda dari pekerjaan yang sangat strategis atau sangat negosiasional, di mana konteks sosial dan penilaian manusia jauh lebih dominan.

Ketiga, data operasionalnya luas. Shared services biasanya sudah berjalan di atas ERP, CRM, HRIS, ITSM, knowledge base, SOP, dan workflow engine. Fondasi untuk agentic service sebenarnya sudah ada, meski sering tersebar dan belum siap dipakai secara terpadu. Finance shared services punya data invoice, PO, goods receipt, vendor master, dan kebijakan pembayaran. HR services punya HRIS, artikel pengetahuan, riwayat kasus, dan kebijakan benefit. Procurement operations punya form intake, kontrak, status vendor, dan matriks approval. IT support punya ticketing, CMDB, runbook, dan telemetry. Customer operations punya CRM, riwayat pesanan, aturan entitlement, dan transkrip interaksi.

Namun penting dipahami: shared services bukan kandidat awal karena mudah diotomasi, melainkan karena cukup kaya untuk didesain ulang. Jika perusahaan hanya mengejar pengurangan tenaga kerja, mereka akan cenderung memilih kasus yang paling sempit dan paling aman, lalu berhenti di automasi parsial. Itu memberi efisiensi lokal, tetapi tidak mengubah model layanan.

## Dari Mengelola Tiket Menjadi Mengorkestrasi Penyelesaian

Perubahan paling mendasar dalam shared services agentic adalah pergeseran dari mengelola antrian kerja menjadi mengorkestrasi penyelesaian. Dalam model lama, service desk menerima tiket, membaca isi permintaan, mencari data di beberapa sistem, memeriksa kebijakan, lalu memutuskan apakah kasus bisa diselesaikan atau harus diteruskan. Banyak waktu habis bukan untuk keputusan bernilai tinggi, tetapi untuk pekerjaan administratif dan pencarian konteks.

Dalam model agentic, sebagian besar langkah awal itu dapat dipindahkan ke agent. Untuk kasus yang cukup jelas dan berisiko rendah sampai menengah, agent dapat membaca email, form, chat, atau tiket, mengklasifikasikan jenis permintaan, mengambil konteks dari knowledge base dan sistem transaksi, memeriksa status, entitlement, atau kebijakan, menyiapkan tindakan seperti draft response atau update status, dan pada kondisi tertentu mengeksekusi penyelesaian.

Contohnya di IT support. Untuk permintaan seperti reset password, akses aplikasi standar, atau status insiden umum, agent dapat membaca permintaan, memverifikasi identitas dan konteks, memanggil tool yang sesuai, lalu menyelesaikan kasus tanpa menunggu analis manusia. Di HR services, untuk pertanyaan tentang cuti, status onboarding, atau dokumen kebijakan, agent dapat mengambil data dari HRIS dan knowledge base, lalu memberi jawaban yang terpersonalisasi. Jika ada tindakan administratif sederhana, agent dapat menyiapkan atau menjalankannya sesuai batas otorisasi. Di procurement operations, untuk intake pembelian standar, agent dapat mengklasifikasikan kebutuhan, memeriksa apakah item tersedia di katalog, mengecek vendor approved, lalu membuat draft purchase request atau mengarahkan requester ke jalur yang benar. Di finance operations, untuk exception invoice sederhana, agent dapat mencocokkan invoice dengan PO dan goods receipt, mengidentifikasi mismatch dasar, lalu merutekan ke jalur yang tepat atau menyiapkan rekomendasi penyelesaian.

Semakin agent mengambil pekerjaan rutin, semakin jelas area di mana manusia justru menjadi lebih penting. Exception yang tidak sesuai pola, konflik antar-kebijakan, kasus yang menyentuh stakeholder sensitif, negosiasi dengan vendor atau pelanggan, keputusan yang berdampak material, dan perbaikan proses berkelanjutan tetap menjadi domain manusia. Peran tim shared services berubah. Mereka tidak lagi terutama menjadi pemroses tiket, tetapi menjadi exception resolver, policy interpreter, service quality manager, dan trainer of the system melalui feedback operasional.

Dalam desain yang matang, service desk tidak lagi identik dengan inbox atau antrian manusia. Ia menjadi lapisan orkestrasi yang mengatur permintaan mana yang bisa diselesaikan otomatis, mana yang butuh approval, mana yang harus langsung ke manusia, dan bagaimana fallback terjadi saat agent gagal. Jika perusahaan hanya menambahkan agent di depan service desk lama tanpa mengubah desain alur, hasilnya biasanya hanya chatbot plus backlog lama. Nilai transformasinya kecil. Autonomous resolution cocok untuk kasus dengan pola yang cukup stabil, data yang tersedia, kebijakan yang relatif jelas, dan dampak yang bisa dibatasi. Ia tidak cocok untuk kasus yang sangat ambigu, sangat emosional, atau sangat material tanpa kontrol tambahan.

## Katalog Layanan Baru untuk Kontrol Operasional

Begitu shared services bergerak ke model human-agent team, kontrol operasional tidak bisa lagi mengandalkan definisi layanan lama. Perusahaan membutuhkan katalog layanan baru yang membedakan setidaknya tiga jenis layanan.

Pertama, human-delivered service, yaitu layanan yang tetap terutama dijalankan manusia karena penilaian, sensitivitas, atau risiko tinggi. Contohnya sengketa pelanggan bernilai besar, keputusan HR yang memengaruhi status kerja, treatment akuntansi material, atau perubahan produksi TI berisiko tinggi.

Kedua, agent-assisted service, di mana agent membantu membaca konteks, menyiapkan draft, atau memberi rekomendasi, tetapi manusia tetap menjadi pengambil keputusan utama. Contohnya draft commentary finance close, rekomendasi jalur sourcing, draft respons customer complaint, atau incident triage untuk engineer.

Ketiga, agent-executed service, di mana agent dapat menyelesaikan layanan secara langsung dalam batas kebijakan yang jelas, dengan fallback ke manusia bila perlu. Contohnya reset password, status order inquiry, update data administratif tertentu, routing purchase request standar, atau penyelesaian query kebijakan yang tidak ambigu.

Pembedaan ini penting karena setiap kategori membutuhkan kontrol yang berbeda. Setiap layanan agentic perlu memiliki SLA yang relevan, bukan hanya waktu respons tetapi juga waktu penyelesaian. SLA harus mencerminkan hasil, bukan sekadar pengakuan. Escalation rules harus eksplisit: kapan agent harus berhenti, kapan kasus harus masuk supervisor, kapan approval wajib. Audit trail harus memungkinkan perusahaan melihat dari mana permintaan masuk, konteks apa yang dipakai, tool apa yang dipanggil, tindakan apa yang dilakukan, dan kapan manusia mengambil alih. Tanpa audit trail, shared services agentic akan sulit dipertanggungjawabkan ke audit internal, compliance, atau pemilik proses. Setiap layanan juga harus punya metrik yang sesuai dengan mode layanannya. Layanan agent-executed tidak bisa diukur dengan cara yang sama seperti layanan human-delivered.

Salah satu kesalahan desain paling umum adalah menganggap fallback ke manusia sebagai sesuatu yang harus dihindari sebisa mungkin. Dalam shared services, itu justru kontrol penting. Fallback dibutuhkan ketika data tidak cukup, kebijakan bertabrakan, confidence rendah, risiko terlalu tinggi, atau pengguna menolak hasil agent. Desain yang sehat bukan yang memaksa agent menyelesaikan semua kasus, tetapi yang tahu kapan harus berhenti dengan aman. Jika fallback tidak dirancang baik, dua hal bisa terjadi: agent terlalu agresif dan membuat kesalahan mahal, atau agent terlalu konservatif sehingga semua kasus tetap jatuh ke manusia dan nilai bisnis hilang. Operating control harus mengatur bukan hanya apa yang boleh dilakukan agent, tetapi juga batas kepercayaan yang layak diberikan.

## Mengukur Nilai dari Efisiensi ke Kualitas Hasil

Shared services agentic sering dijual dengan narasi produktivitas. Itu tidak salah, tetapi terlalu sempit. Nilai yang lebih penting adalah perubahan kualitas layanan. Beberapa metrik yang paling berguna adalah first-contact resolution, yaitu berapa banyak kasus selesai pada interaksi pertama. Touchless processing rate, berapa banyak kasus selesai tanpa sentuhan manusia. Cycle time, berapa lama dari permintaan masuk sampai selesai. Exception backlog, apakah kasus sulit menumpuk atau berkurang. Dan cost per case, berapa biaya nyata untuk menyelesaikan satu kasus. Metrik ini membantu melihat apakah service model benar-benar berubah, bukan hanya apakah agent dipakai.

Efisiensi tanpa kualitas akan merusak kepercayaan. Karena itu, shared services agentic juga harus diukur dengan error rate, compliance finding, user satisfaction, dan trust score atau indikator kepercayaan pengguna terhadap hasil agent. Trust score tidak harus rumit. Bisa dimulai dari acceptance rate, override rate, atau feedback pengguna terhadap rekomendasi agent. Yang penting, perusahaan tidak hanya mengukur berapa banyak yang otomatis, tetapi juga apakah orang percaya dan apakah hasilnya benar.

## Contoh Blueprint: Agentic Finance Shared Service

Finance shared services adalah contoh yang baik karena prosesnya cukup terstruktur, volumenya tinggi, tetapi tetap punya area penilaian yang jelas. Bayangkan sebuah organisasi memulai dari accounts payable dan close support.

Layanan yang bisa menjadi agent-assisted meliputi klasifikasi exception invoice, pengumpulan evidence dari ERP, draft penjelasan variance, dan ringkasan aging issue untuk reviewer. Di sini manusia masih memutuskan langkah akhir, tetapi waktu yang dihabiskan untuk mencari data dan menyiapkan narasi turun signifikan.

Layanan yang bisa menjadi agent-executed meliputi menjawab status invoice atau payment, routing query vendor ke jalur yang tepat, memproses kasus low-risk dengan aturan yang sangat jelas, dan membuka atau memperbarui case secara otomatis.

Layanan yang tetap human-delivered meliputi keputusan treatment akuntansi material, exception yang menyentuh fraud suspicion, dispute vendor yang membutuhkan negosiasi, dan approval pembayaran bernilai tinggi.

Kontrol yang harus ada mencakup service catalog yang membedakan tiga mode layanan, SLA per jenis layanan, threshold nilai dan risk tier, audit trail untuk setiap tool call dan rekomendasi, fallback ke AP analyst atau controller, serta review mingguan atas override dan correction pattern.

Metrik yang relevan meliputi touchless rate untuk vendor inquiry, cycle time untuk invoice exception, first-contact resolution untuk query status, correction rate pada draft commentary, backlog exception yang menunggu manusia, dan compliance issue yang muncul setelah implementasi.

Blueprint seperti ini menunjukkan bahwa agentic finance shared service bukan berarti finance tanpa manusia. Yang berubah adalah siapa mengerjakan apa, kapan manusia masuk, dan bagaimana layanan diukur.

## Kapan Shared Services Belum Siap Diubah

Tidak semua shared services siap langsung di-scale. Beberapa sinyal bahaya perlu diperhatikan. Proses dasarnya sendiri belum stabil atau belum terdokumentasi. Knowledge base penuh dokumen usang dan kebijakan bertentangan. Integrasi ke ERP, CRM, HRIS, atau ITSM masih rapuh. Tidak ada pemilik layanan yang jelas antara operasi, IT, dan risk. Metrik layanan masih hanya berbasis volume tiket, bukan hasil. Exception rate sangat tinggi dan penyebabnya belum dipahami. Organisasi masih melihat agent hanya sebagai alat penghemat tenaga kerja.

Dalam kondisi seperti ini, agentic transformation berisiko menjadi lapisan baru di atas kekacauan lama. Hasilnya biasanya adalah automasi yang tampak canggih tetapi sulit dipercaya dan sulit di-scale.

## Keputusan yang Perlu Diambil Sekarang

Setelah memahami topik ini, ada beberapa keputusan yang sebaiknya diambil. Pertama, pilih domain shared services awal yang paling layak. Prioritaskan area dengan volume tinggi, pola cukup standar, data operasional tersedia, dan owner proses yang jelas. Kedua, tentukan mode layanan per use case secara eksplisit, mana yang human-delivered, agent-assisted, dan agent-executed. Ketiga, rancang fallback dan escalation sejak awal, jangan menunggu agent gagal di production baru memikirkan kapan manusia harus mengambil alih. Keempat, ubah service catalog dan metrik layanan, karena shared services agentic tidak bisa dikelola dengan definisi layanan lama yang hanya berfokus pada tiket dan headcount. Kelima, tetapkan governance lintas fungsi, karena COO, CIO, pemilik proses, risk, dan HR perlu sepakat bahwa ini adalah redesign operating model, bukan proyek tool semata.

Pertanyaan reflektif untuk pimpinan adalah: apakah shared services di perusahaan Anda masih didesain sebagai mesin pemrosesan tiket berbasis manusia, atau sudah mulai dipikirkan sebagai portofolio layanan berbasis hasil yang dijalankan oleh human-agent teams dengan kontrol, metrik, dan akuntabilitas yang baru? Itulah pertanyaan yang akan menentukan apakah agentic AI hanya menjadi lapisan efisiensi tambahan, atau benar-benar mengubah cara perusahaan memberikan layanan internal dan operasionalnya.
