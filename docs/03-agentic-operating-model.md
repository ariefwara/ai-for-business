---
title: "Apa Itu Agentic Operating Model"
sidebar_position: 3
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Apa Itu Agentic Operating Model

<ArticleDiagram src="/img/agentic-enterprise/diagrams/03-agentic-operating-model.png" alt="Diagram: Apa Itu Agentic Operating Model" />

Bayangkan sebuah tim finance yang mulai menggunakan agent untuk membantu proses penutupan buku bulanan. Agent bisa mengambil data dari ERP, mencocokkan invoice, menyiapkan draft jurnal, dan menindaklanjuti exception. Di sisi lain, tim customer operations juga punya agent yang merespons pertanyaan pelanggan, mengubah alamat, atau mengecek status pesanan. Sementara itu, tim IT membuat agent untuk diagnosis awal insiden.

Masing-masing terlihat berjalan baik. Tapi kemudian muncul pertanyaan yang tidak nyaman: siapa yang sebenarnya bertanggung jawab kalau agent salah mengklasifikasikan invoice? Siapa yang memutuskan sejauh mana agent boleh bertindak sendiri? Kapan agent harus bertanya dulu ke manusia? Dan bagaimana perusahaan tahu apakah agent benar-benar membantu atau malah menambah risiko?

Pertanyaan-pertanyaan ini tidak bisa dijawab oleh arsitektur teknis. Arsitektur memang penting—ia menjawab bagaimana sistem dibangun, bagaimana agent mendapat konteks, dan bagaimana ia memanggil tool. Tapi begitu agent mulai benar-benar bekerja, perusahaan butuh sesuatu yang lebih: cara menjalankan perusahaan ketika software tidak lagi hanya menjadi alat bantu, tetapi ikut mengeksekusi pekerjaan.

Di sinilah konsep **agentic operating model** menjadi relevan.

## Ketika asumsi lama mulai goyah

Selama puluhan tahun, operating model perusahaan dibangun di atas satu asumsi sederhana: manusia adalah pelaksana utama pekerjaan. Software ada untuk membantu—mencatat transaksi di ERP, mengelola interaksi di CRM, mengarahkan approval lewat workflow, atau menampilkan data di dashboard. Tapi pada akhirnya, manusialah yang memulai, menilai, memutuskan, dan menutup pekerjaan.

Agentic AI mulai mengubah asumsi ini.

Sekarang, software tidak lagi sekadar membantu manusia bekerja lebih cepat. Ia mulai menjalankan tugas multi-langkah, mengoordinasikan pekerjaan lintas sistem, menangani exception awal, memutuskan tindakan berisiko rendah, dan hanya mengeskalasi ke manusia ketika confidence rendah atau policy mengharuskannya. Perubahan ini mungkin terlihat kecil jika dilihat per use case. Tapi ketika agent mulai dipakai di beberapa fungsi sekaligus, operating model lama mulai menunjukkan kerapuhannya.

Masalah pertama adalah otomasi yang terjadi secara sporadis. Satu fungsi membeli tool agentic untuk customer service. Fungsi lain membangun agent untuk finance. Tim IT membuat agent untuk incident triage. Masing-masing terlihat produktif, tapi tidak ada model bersama untuk siapa yang memiliki agent, bagaimana approval bekerja, atau bagaimana hasilnya dievaluasi. Hasilnya bukan operating model baru, melainkan kumpulan otomasi yang tumbuh liar.

Masalah kedua adalah akuntabilitas yang kabur. Ketika agent salah mengklasifikasikan invoice, siapa yang bertanggung jawab? Tim data science? Pemilik proses AP? Vendor platform? Tanpa definisi yang jelas, setiap insiden berubah menjadi debat lintas fungsi.

Masalah ketiga adalah skala yang justru memperbesar risiko. Pilot kecil sering terlihat aman karena diawasi ketat oleh tim proyek. Tapi saat agent dipakai lintas unit atau lintas negara, kelemahan operating model langsung terlihat: approval tidak konsisten, threshold risiko berbeda-beda, dan metrik sukses tidak seragam.

Karena itu, agentic AI tidak bisa dikelola hanya sebagai proyek teknologi. Ia adalah lapisan eksekusi baru yang membutuhkan disiplin operasi baru.

## Enam elemen yang perlu didefinisikan sejak awal

Agentic operating model yang sehat tidak harus rumit, tapi harus eksplisit. Setidaknya ada enam elemen yang perlu didefinisikan sejak awal.

### 1. Batas kewenangan yang jelas

Setiap agent harus tahu persis tindakan apa yang boleh dilakukan tanpa persetujuan, tindakan apa yang memerlukan approval manusia, dan tindakan apa yang hanya boleh berupa rekomendasi. Ini bukan sekadar mengatakan "agent membantu proses procurement." Yang dibutuhkan adalah definisi operasional.

Di procurement, misalnya, agent boleh mengklasifikasikan intake request dan menyarankan jalur pembelian. Ia boleh memvalidasi kelengkapan vendor onboarding. Ia boleh menangani mismatch invoice sederhana dalam batas toleransi policy. Tapi ia tidak boleh menyetujui supplier baru berisiko tinggi atau mengubah vendor master tanpa approval.

Di IT operations, agent boleh menjalankan diagnosis awal dan remediasi berisiko rendah sesuai runbook. Tapi ia tidak boleh melakukan perubahan konfigurasi produksi yang berdampak luas tanpa persetujuan incident manager.

Tanpa batas kewenangan yang jelas, agent akan terlalu dibatasi sehingga tidak bernilai, atau terlalu bebas sehingga tidak aman.

### 2. Tiga pemilik untuk setiap agent

Salah satu prinsip paling penting dalam operating model agentic adalah bahwa setiap agent harus memiliki tiga pemilik.

Pertama, **business owner**. Biasanya pemilik outcome proses. Ia menentukan tujuan bisnis agent, SLA, prioritas use case, dan trade-off antara kecepatan, kualitas, dan pengalaman pengguna. Misalnya, Head of AP untuk agent invoice exception, atau Controller untuk agent close orchestration.

Kedua, **technical owner**. Bertanggung jawab atas integrasi, reliability, observability, dan lifecycle teknis agent. Ini bisa berada di tim platform atau AI engineering.

Ketiga, **risk owner**. Menentukan guardrails, approval threshold, kontrol kepatuhan, dan kondisi penghentian. Dalam beberapa domain, risk owner bisa berasal dari compliance, internal control, atau legal.

Tanpa tiga ownership ini, agent akan terlihat dimiliki bersama, tapi pada praktiknya tidak benar-benar dimiliki siapa pun.

### 3. Jalur eskalasi yang jelas

Operating model yang matang tidak mengejar otonomi maksimum. Ia mengejar otonomi yang tepat. Karena itu, setiap agent harus punya escalation path yang jelas: kapan ia harus naik tangan ke manusia.

Ini bisa terjadi ketika confidence rendah, data tidak lengkap, policy conflict, exception di luar pola normal, nilai transaksi melewati threshold, atau dampak reputasi terlalu tinggi.

Di customer operations, agent dapat menyelesaikan permintaan perubahan alamat secara mandiri, tapi harus mengeskalasi refund bernilai besar atau kasus yang berpotensi menjadi sengketa. Di record-to-report, agent dapat menyiapkan draft jurnal, tapi harus mengeskalasi jurnal material atau akun sensitif.

Escalation path yang baik bukan sekadar "lempar ke manusia." Ia harus menentukan siapa yang menerima, dalam SLA berapa lama, dan dengan konteks apa agar manusia tidak harus mengulang pekerjaan dari nol.

### 4. Tiga mode operasi

Perusahaan perlu menetapkan tiga mode operasi yang sederhana namun tegas.

Mode pertama adalah **recommendation only**. Agent menganalisis, merangkum, atau menyarankan tindakan, tapi manusia tetap mengeksekusi. Cocok untuk domain yang masih baru, berisiko tinggi, atau belum punya data dan kontrol yang cukup matang.

Mode kedua adalah **human-in-the-loop**. Agent menyiapkan tindakan dan dapat menjalankan sebagian langkah, tapi keputusan final tetap membutuhkan approval manusia. Ini sering menjadi mode paling realistis untuk gelombang pertama di finance, procurement, HR, dan customer operations.

Mode ketiga adalah **bounded autonomy**. Agent boleh bertindak mandiri dalam ruang lingkup yang telah ditentukan, dengan guardrails, logging, dan fallback yang jelas. Cocok untuk pekerjaan volume tinggi dengan aturan relatif jelas, seperti triage tiket atau remediasi IT berisiko rendah.

Yang penting: mode ini tidak boleh ditentukan oleh tim teknologi sendirian. Ia harus disepakati oleh bisnis, risk, dan operasi.

### 5. Ukur outcome, bukan aktivitas

Operating model lama sering terlalu fokus pada aktivitas dan kapasitas manusia: jumlah tiket yang ditangani, jumlah FTE, atau backlog per supervisor. Dalam model agentic, fokus harus bergeser ke outcome sistem kerja.

Metrik yang lebih relevan antara lain cycle time, exception rate, automation rate, cost per transaction, kualitas keputusan, tingkat rework, dan SLA attainment. Di finance close, pertanyaan utamanya bukan lagi berapa banyak analis yang bekerja lembur, tapi apakah close lebih cepat, apakah exception lebih cepat terselesaikan, dan apakah auditor internal lebih percaya pada jejak kontrolnya.

### 6. Desain ulang peran manusia

Ini bagian yang paling sering diremehkan. Agentic operating model bukan hanya menambahkan agent ke tim lama. Ia mengubah desain kerja.

Dalam banyak proses, manusia akan bergeser dari melakukan transaksi, memindahkan data, dan mengejar follow-up, menjadi menangani exception, mengawasi kualitas keputusan, memperbaiki workflow, mengelola policy, dan melatih sistem melalui feedback operasional.

Di accounts payable, tim tidak lagi menghabiskan sebagian besar waktunya untuk memeriksa invoice standar satu per satu. Fokus bergeser ke exception kompleks, vendor dispute, dan policy tuning. Di shared services, peran frontline case processor bisa berkurang, sementara kebutuhan untuk process controller, knowledge curator, dan agent supervisor meningkat.

Perusahaan bisa mendapatkan kapasitas dan kecepatan lebih tinggi, tapi hanya jika mau mendesain ulang peran, skill, dan struktur tim. Jika tidak, agent hanya akan ditumpuk di atas organisasi lama.

## Dari role-based ke outcome-based

Salah satu implikasi terbesar dari agentic operating model adalah pergeseran dari pengelolaan berbasis peran ke pengelolaan berbasis outcome.

Dalam model lama, organisasi cenderung mengelola pekerjaan berdasarkan kotak organisasi: siapa melakukan apa, berapa banyak orang di tiap tim, dan bagaimana handoff antar-role terjadi. Pendekatan ini masuk akal ketika manusia adalah executor utama. Tapi ketika agent ikut mengeksekusi, unit analisis yang lebih penting bukan lagi peran, melainkan outcome end-to-end.

Agent tidak peduli batas jabatan seperti organisasi manusia. Ia bisa menarik data dari CRM, memeriksa policy di knowledge base, membuat tiket di ITSM, dan memperbarui ERP dalam satu alur. Karena itu, perusahaan perlu mulai bertanya: outcome apa yang ingin dicapai, langkah mana yang benar-benar perlu manusia, titik keputusan mana yang harus dijaga, dan bagian mana yang sebaiknya dijalankan oleh digital labor.

Di lead-to-cash, misalnya, daripada mengoptimalkan produktivitas terpisah antara sales ops, order management, billing, dan collections, perusahaan bisa mendesain ulang outcome "order valid dan tertagih cepat" dengan agent yang mengorkestrasi validasi order, pengecekan kontrak, dan follow-up collection awal.

Tidak semua area siap langsung dikelola secara outcome-based. Jika proses masih sangat kacau, data tidak standar, dan ownership end-to-end belum ada, memaksakan model ini justru bisa menambah kebingungan. Langkah awal yang lebih realistis adalah menstabilkan proses, memperjelas ownership, menetapkan metrik dasar, lalu memperkenalkan agent secara bertahap.

## Siapa yang harus memimpin

Begitu perusahaan serius menjadikan agent sebagai bagian dari eksekusi, struktur pengelolaannya harus ikut berubah.

Perusahaan biasanya membutuhkan forum governance lintas fungsi yang melibatkan bisnis, teknologi, risk, security, legal, dan HR. Tujuannya bukan menambah birokrasi, tapi memastikan keputusan penting tidak diambil secara terpisah-pisah. Forum ini membahas prioritas use case, tingkat otonomi per domain, standar kontrol minimum, metrik performa, insiden, dan dampak tenaga kerja.

Transformation office atau AI office perlu mengelola use case agentic sebagai portofolio produk operasional, bukan kumpulan pilot. Artinya, ada roadmap, ada owner jangka panjang, ada target outcome, dan ada keputusan jelas kapan use case dihentikan atau diperluas.

Yang paling penting, agentic operating model bukan agenda teknologi semata. COO perlu terlibat karena perubahan utamanya terjadi pada desain proses dan economics operasi. CHRO perlu terlibat karena dampaknya langsung ke job design, skill, dan performance management. CFO dan risk leaders juga perlu aktif karena agent menyentuh kontrol, auditability, dan akuntabilitas.

## Tanda bahwa perusahaan belum siap

Tidak semua organisasi siap menskalakan agentic operating model. Beberapa sinyal bahaya yang sering muncul: setiap fungsi membangun agent sendiri tanpa standar ownership; tidak ada daftar resmi agent yang aktif di produksi; business owner tidak jelas; approval threshold berbeda-beda tanpa dasar risk policy; tim operasi tidak tahu kapan agent bertindak; metrik sukses hanya berupa adopsi tool; HR belum punya pandangan tentang perubahan peran; dan insiden agent tidak masuk ke mekanisme governance formal.

Jika beberapa gejala ini sudah terlihat, prioritasnya bukan menambah use case baru, melainkan memperkuat disiplin operasi terlebih dahulu.

Agentic operating model pada akhirnya bukan soal membuat AI lebih aktif. Ini soal memastikan ketika software mulai ikut bekerja, perusahaan tetap tahu siapa yang memutuskan, siapa yang bertanggung jawab, bagaimana risiko dikendalikan, dan bagaimana manusia serta agent menghasilkan outcome bersama. Itu yang membedakan demo yang menarik dari transformasi yang benar-benar bisa diskalakan.
