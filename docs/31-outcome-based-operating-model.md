---
title: "Outcome-Based Operating Model"
sidebar_position: 31
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Outcome-Based Operating Model

<ArticleDiagram src="/img/diagrams/31-outcome-based-operating-model.png" alt="Diagram: Outcome-Based Operating Model" />

Bayangkan Anda memimpin tim shared services finance. Selama bertahun-tahun, tim Anda diukur dari jumlah invoice yang diproses per analis, waktu rata-rata menangani tiket, dan seberapa penuh jadwal anggota tim. Semua metrik itu masuk akal selama hampir semua pekerjaan dilakukan oleh manusia.

Sekarang, tim Anda mulai menggunakan agent untuk membantu close orchestration, menyiapkan rekonsiliasi, dan menangani triage exception invoice. Tiba-tiba, sebagian besar pekerjaan administratif menghilang. Jika Anda masih memakai metrik lama, yang terlihat hanyalah "aktivitas manusia menurun." Tapi apakah itu berarti kinerja tim memburuk?

Pertanyaan yang lebih relevan justru: apakah invoice diproses lebih benar? Apakah exception terselesaikan lebih cepat? Apakah backlog turun? Apakah first-pass resolution membaik? Apakah tim manusia kini bisa fokus pada kasus yang benar-benar membutuhkan judgement?

Inilah inti permasalahan yang dihadapi banyak perusahaan saat agent mulai masuk ke workflow. Ukuran seperti jam kerja, effort, atau jumlah orang per proses menjadi semakin kurang representatif. Yang lebih penting bukan lagi berapa banyak aktivitas dilakukan, tetapi outcome apa yang benar-benar tercapai.

## Mengapa Cara Lama Mulai Goyah

Ketika agent mulai mengambil alih pekerjaan membaca konteks, merutekan kasus, menyiapkan tindakan, memanggil tool, bahkan menyelesaikan transaksi tertentu, struktur kerja berubah secara fundamental. Di finance, agent bisa membantu close orchestration. Di procurement, agent bisa mengklasifikasikan intake dan memeriksa policy. Di IT operations, agent bisa melakukan incident triage. Di customer operations, agent bisa menyelesaikan kasus sederhana tanpa sentuhan manusia.

Jika manajemen tetap berfokus pada aktivitas, organisasi akan salah membaca nilai. Aktivitas berubah menjadi variabel antara, bukan tujuan utama. Yang lebih penting adalah outcome yang benar-benar berdampak pada bisnis.

Outcome-based operating model lahir dari kebutuhan ini: mengelola perusahaan berdasarkan hasil layanan dan dampak bisnis, bukan terutama berdasarkan aktivitas dan kapasitas tenaga kerja. Ini bukan sekadar perubahan KPI. Ini perubahan cara mendesain layanan, mengalokasikan akuntabilitas, menyusun kontrak internal dan eksternal, serta memutuskan use case mana yang layak di-scale.

## Outcome Lebih Dekat ke Nilai Bisnis

Apa artinya outcome-based secara konkret? Setiap fungsi perlu mendefinisikan hasil yang benar-benar penting. Di finance, outcome-nya bisa berupa close yang lebih cepat dan lebih terkendali, invoice yang diproses benar, atau reconciliation exception yang turun. Di procurement, outcome-nya adalah request yang masuk ke jalur yang benar sejak awal, cycle time pengadaan yang membaik, dan policy compliance yang naik. Di customer operations, kasus selesai pada kontak pertama, repeat contact turun, kepuasan pelanggan membaik. Di IT operations, issue dipulihkan lebih cepat, false escalation turun, change lebih siap sebelum release.

Outcome seperti ini jauh lebih berguna daripada sekadar menghitung berapa task yang diotomasi. Lebih penting lagi, outcome-based thinking memaksa perusahaan bertanya: apakah task ini memang perlu ada?

Banyak proses enterprise penuh aktivitas warisan. Pengecekan berulang yang sebenarnya bisa dihilangkan jika data lebih baik. Handoff yang hanya ada karena struktur organisasi lama. Approval yang tidak lagi proporsional dengan risiko. Pelaporan manual yang tidak dipakai untuk keputusan nyata. Jika perusahaan hanya mengejar automasi aktivitas, mereka akan mempercepat pemborosan. Agentic AI justru membuat risiko ini lebih besar, karena teknologi sekarang mampu mengotomasi lebih banyak hal. Tanpa disiplin outcome, organisasi bisa sangat efisien dalam menjalankan proses yang salah.

Karena itu, sebelum membangun agent, pertanyaan pertama seharusnya bukan "task mana yang bisa diotomasi?", melainkan "outcome apa yang ingin diperbaiki, dan aktivitas mana yang benar-benar berkontribusi pada outcome itu?"

## Dari FTE ke Service Outcome

Pergeseran berikutnya terjadi pada cara perusahaan memandang layanan internal maupun eksternal. Banyak shared services, GCC, dan tech services masih dikelola dengan logika effort-based: berapa orang yang dialokasikan, berapa jam kerja yang dipakai, berapa tiket yang diproses, atau berapa kapasitas tim yang dibutuhkan.

Model ini tidak hilang sepenuhnya, tetapi semakin tidak memadai ketika digital labor menjadi bagian dari delivery. Dalam model agentic, throughput bisa naik tanpa kenaikan linear pada headcount. Struktur biaya juga berubah: ada biaya platform, biaya model dan inferensi, biaya integrasi, biaya observability dan governance, tetapi ada penurunan pada effort manual untuk volume tertentu.

Akibatnya, pricing berbasis FTE atau jam kerja mulai kehilangan relevansi. Jika satu layanan kini diselesaikan oleh kombinasi agent, workflow engine, dan supervisor manusia, maka menagih atau mengalokasikan biaya hanya berdasarkan effort manusia menjadi menyesatkan.

Contohnya nyata. Shared services procurement yang dulu mengenakan chargeback berdasarkan jumlah staf support per business unit, kini lebih masuk akal jika diukur dari outcome seperti request resolved, cycle time, atau compliance rate. IT services yang dulu dihitung dari jumlah tiket yang ditangani level-1, kini bisa bergeser ke metrik seperti incident resolved within target, service restoration time, atau change success readiness. Finance operations yang dulu dibenarkan dengan rasio FTE per volume transaksi, kini perlu melihat cost per correctly processed invoice atau cost per resolved exception.

Pergeseran ini juga menyentuh kontrak vendor. Dalam layanan agentic, perusahaan sebenarnya tidak sedang membeli "alat" atau "tenaga tambahan", tetapi semakin sering membeli outcome layanan. Kontrak managed services dan outsourcing perlu bergerak dari input-based pricing, time and material, atau sekadar headcount leverage, ke model yang lebih dekat ke throughput berkualitas, resolution outcome, compliance outcome, atau business KPI tertentu.

Tentu ini tidak selalu mudah. Tidak semua layanan cocok dikontrak murni berbasis outcome. Jika prosesnya sangat dipengaruhi faktor eksternal atau data klien sendiri masih buruk, vendor akan sulit menerima risiko penuh. Namun arah pergeserannya jelas: semakin agentic delivery matang, semakin lemah logika pricing berbasis effort semata. Dalam situasi di mana outcome belum bisa didefinisikan dengan jelas, baseline kualitas belum ada, faktor eksternal terlalu dominan, atau kontrol atas data dan proses masih tersebar, perusahaan bisa memulai dengan model hibrida: sebagian biaya tetap berbasis kapasitas, sebagian lagi berbasis outcome yang disepakati.

## Siapa Pemegang Keputusan dan Tanggung Jawab

Outcome-based operating model terdengar menarik, tetapi ia menuntut disiplin organisasi yang lebih tinggi. Begitu fokus bergeser ke hasil, perusahaan harus sangat jelas tentang siapa yang berhak memutuskan apa, dan siapa yang bertanggung jawab ketika outcome gagal tercapai.

Dalam agentic enterprise, setidaknya ada tiga peran yang perlu dibedakan.

Pertama, business owner. Ia bertanggung jawab atas outcome layanan atau proses. Ia menentukan target bisnis, prioritas use case, definisi keberhasilan, dan trade-off operasional yang dapat diterima. Contohnya: CFO atau controllership lead untuk close outcome, CPO atau procurement operations lead untuk intake-to-PO outcome, COO customer operations untuk case resolution outcome, CIO atau head of operations untuk incident recovery outcome.

Kedua, agent owner. Ia bertanggung jawab atas desain dan performa agent dalam workflow: bagaimana agent bekerja, tool apa yang dipanggil, evaluasi apa yang dipakai, threshold apa yang diterapkan, dan bagaimana perubahan dirilis. Peran ini sering berada pada product owner, platform owner, atau domain squad lead.

Ketiga, risk owner. Ia memastikan bounded autonomy tetap berada dalam guardrail: policy apa yang berlaku, approval apa yang wajib, data apa yang boleh diakses, dan kapan use case harus ditahan atau dibatasi. Di domain tertentu, risk owner bisa berasal dari compliance, internal control, security, legal, atau fungsi risiko operasional.

Salah satu ujian nyata outcome-based model adalah saat hasil tidak sesuai harapan. Misalnya, invoice salah diproses, incident salah dirutekan, forecast exception tidak tertangani, atau customer case ditutup terlalu cepat tetapi masalah belum selesai. Dalam situasi seperti itu, organisasi harus bisa membedakan apakah akar masalahnya ada pada data yang salah atau tidak lengkap, policy yang ambigu atau tidak diperbarui, tool atau integrasi yang gagal, model atau agent behavior yang buruk, atau process design yang memang keliru. Tanpa pemisahan ini, semua kegagalan akan jatuh ke satu keranjang bernama "AI error", padahal tindakan perbaikannya berbeda-beda.

Ada satu prinsip yang tidak boleh kabur: agent tidak memegang akuntabilitas. Agent dapat menjalankan tindakan, memberi rekomendasi, atau mengorkestrasi workflow, tetapi tanggung jawab tetap berada pada manusia dan struktur organisasi. Secara governance, perusahaan tidak bisa mengalihkan tanggung jawab ke sistem. Jika ada kesalahan material di finance, pelanggaran policy di procurement, atau insiden keamanan di IT, yang dimintai pertanggungjawaban tetap pemilik proses dan organisasi. Secara operasional, kejelasan akuntabilitas mencegah kebingungan. Jika semua orang menganggap "agent yang salah", maka tidak ada yang benar-benar memperbaiki data, policy, atau desain proses.

## Mengelola Inisiatif sebagai Portofolio Outcome

Begitu perusahaan memiliki banyak inisiatif agentic, tantangannya bukan lagi sekadar membangun use case, tetapi mengelola portofolio outcome. Tidak semua use case layak diteruskan, dan tidak semua quick win layak di-scale.

Secara praktis, portofolio agentic biasanya perlu menyeimbangkan empat kategori. Quick wins: use case dengan nilai jelas, risiko terkendali, dan data cukup siap. Misalnya intake classification, invoice triage, atau service desk resolution untuk kasus standar. Strategic bets: use case yang berpotensi mengubah operating model lebih besar, tetapi lebih kompleks. Misalnya close orchestration lintas entitas, supply chain exception coordination, atau multi-agent IT delivery workflow. Platform investments: inisiatif yang mungkin tidak langsung terlihat nilainya pada satu proses, tetapi penting untuk scale, seperti identity, observability, policy engine, integration layer, evaluation harness. Risk reduction initiatives: perbaikan data, control, auditability, dan governance yang memungkinkan use case lain berjalan aman.

Jika perusahaan hanya mengejar quick wins, mereka akan punya banyak pilot tetapi sedikit transformasi. Jika hanya mengejar strategic bets, mereka berisiko terlalu lambat dan kehilangan momentum. Portofolio yang sehat membutuhkan keseimbangan.

Outcome-based model juga menuntut disiplin untuk menghentikan inisiatif yang tidak layak. Setiap use case sebaiknya punya stage gate yang jelas: apakah masalah bisnisnya nyata, apakah baseline tersedia, apakah data dan policy cukup siap, apakah pilot menunjukkan outcome yang membaik, apakah correction rate dan risk profile masih masuk akal, dan apakah economics-nya sehat. Jika jawabannya tidak, use case harus dihentikan, dipersempit, atau didesain ulang. Ini penting karena agentic AI mudah menciptakan bias optimisme. Demo yang bagus sering membuat organisasi enggan mengakui bahwa use case tertentu sebenarnya tidak cukup bernilai atau terlalu berisiko untuk saat ini.

Portfolio review tidak boleh hanya menjadi forum teknologi. Ia harus melibatkan business owner, CIO atau CTO atau platform leader, finance, risk atau compliance atau security, dan bila relevan CHRO atau transformation office. Keputusan scale bukan hanya soal apakah agent bekerja, tetapi apakah outcome bisnisnya nyata, governance-nya memadai, dan organisasi siap menyerap perubahan.

## Langkah Praktis Selanjutnya

Setelah memahami mengapa outcome-based model menjadi penting, ada beberapa keputusan yang perlu diambil sekarang. Pertama, tentukan outcome utama per workflow prioritas. Jangan mulai dari daftar task yang bisa diotomasi. Mulailah dari hasil yang ingin diperbaiki: resolution time, accuracy, compliance, service level, atau quality of decision.

Kedua, tinjau ulang model chargeback, pricing, atau business case. Jika layanan masih diukur terutama dari FTE dan effort, putuskan metrik outcome apa yang akan mulai dipakai untuk shared services, GCC, tech services, atau vendor-managed services.

Ketiga, tetapkan decision rights secara eksplisit. Bedakan business owner, agent owner, dan risk owner. Pastikan jelas siapa yang memegang outcome, siapa yang mengelola performa agent, dan siapa yang menetapkan guardrail.

Keempat, bangun stage gate untuk portofolio agentic. Setiap use case harus punya kriteria lanjut, redesign, atau stop. Jangan biarkan semua pilot hidup terlalu lama tanpa keputusan.

Kelima, ubah forum review dari aktivitas ke outcome. Dalam steering committee atau operating review, kurangi fokus pada jumlah automasi dan jam kerja yang dihemat. Tambah fokus pada quality, resolution, trust, risk, dan economics per outcome.

Beberapa sinyal bahaya perlu diwaspadai. Program AI masih dijustifikasi terutama dari pengurangan headcount atau jam kerja. Use case dipilih karena mudah didemokan, bukan karena outcome bisnisnya penting. Tidak ada owner yang jelas untuk outcome, performa agent, dan risiko. Kegagalan agent selalu dibahas secara umum tanpa analisis akar masalah. Vendor atau tim internal masih diukur hampir sepenuhnya dari effort, bukan hasil layanan. Portfolio penuh pilot, tetapi sedikit keputusan tegas untuk scale, redesign, atau stop. Governance board hanya melihat adopsi teknologi, bukan kualitas outcome dan kontrol. Organisasi belum siap menerima bahwa beberapa aktivitas seharusnya dihilangkan, bukan diotomasi.

Jika besok sebagian besar aktivitas rutin di fungsi Anda diambil alih oleh agent, apakah model manajemen Anda masih akan masuk akal? Atau Anda masih mengelola perusahaan berdasarkan jumlah orang dan jam kerja, bukan berdasarkan outcome layanan yang benar-benar diciptakan?

Itulah pertanyaan inti dari outcome-based operating model. Dalam agentic enterprise, perusahaan yang menang bukan yang paling cepat mengotomasi aktivitas, melainkan yang paling disiplin mengelola hasil.
