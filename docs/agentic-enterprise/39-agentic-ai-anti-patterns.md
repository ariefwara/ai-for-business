---
title: "Anti-Patterns Agentic AI di Perusahaan"
sidebar_position: 39
---

# Anti-Patterns Agentic AI di Perusahaan

Bayangkan Anda bekerja di perusahaan yang mulai serius dengan agentic AI. Satu tim di divisi finance membangun agent kecil untuk membantu draft commentary bulanan. Tim procurement membeli agent dari vendor karena demonya meyakinkan. Fungsi customer operations mendorong otonomi lebih tinggi agar terlihat progresif. Sementara itu, HR belum dilibatkan, tidak ada baseline value, dan governance masih berupa dokumen kebijakan yang disimpan di folder bersama.

Dari luar, semua ini tampak seperti kemajuan. Banyak agent, banyak gerakan, banyak inisiatif. Dari dalam, perusahaan sedang membangun fondasi yang rapuh.

Kegagalan program agentic AI jarang terjadi karena satu insiden besar yang dramatis. Lebih sering, kegagalan datang dari serangkaian keputusan yang tampak masuk akal di level tim, tetapi merusak program secara sistemik ketika dibawa ke skala enterprise. Setelah membahas roadmap, agent factory, vendor model, change management, governance board, serta legal dan accountability, langkah berikutnya adalah mengenali pola kegagalan yang berulang. Bukan untuk membuat organisasi terlalu hati-hati, melainkan agar perusahaan bisa bergerak cepat tanpa mengulang kesalahan yang sama.

Ada lima pola kegagalan yang paling sering muncul saat perusahaan mencoba menskalakan agentic AI lintas domain, vendor, dan workforce.

## Ketika Agent Ada di Mana-Mana, Tapi Nilai Tak Jelas

Pola kegagalan pertama adalah yang paling umum. Perusahaan membangun banyak agent kecil tanpa hubungan yang jelas ke value stream, baseline metric, atau prioritas operating model. Gejalanya mudah dikenali. Ada banyak demo, banyak nama agent, banyak eksperimen per fungsi, tetapi eksekutif kesulitan menjawab satu pertanyaan sederhana: nilai bisnis apa yang benar-benar membaik?

Mengapa ini terjadi? Ada tiga penyebab yang saling memperkuat.

Pertama, agentic AI sering terlihat murah untuk dimulai. Satu tim bisa membuat agent untuk summarization, routing, drafting, atau policy lookup dalam waktu relatif singkat. Karena entry barrier rendah, backlog ide tumbuh lebih cepat daripada disiplin portofolio. Setiap orang punya ide untuk agent baru, dan karena biaya awalnya kecil, tidak ada yang merasa perlu bertanya apakah ide itu benar-benar penting.

Kedua, organisasi sering mengukur kemajuan dari jumlah use case, bukan dari outcome. Akibatnya, tim terdorong untuk meluncurkan agent baru, bukan membuktikan bahwa workflow tertentu menjadi lebih cepat, lebih akurat, atau lebih murah dijalankan. Dalam rapat steering committee, slide yang menunjukkan dua belas agent baru selalu terlihat lebih baik daripada slide yang menunjukkan satu agent dengan perbaikan metrik yang solid.

Ketiga, banyak use case dipilih karena mudah didemokan, bukan karena penting bagi operasi. Agent untuk menjawab pertanyaan internal tentang kebijakan cuti mungkin terlihat impresif saat demo, tetapi belum tentu menyentuh bottleneck utama di finance close, procurement intake, customer operations, atau IT incident handling. Yang mudah didemokan belum tentu yang paling bernilai.

Ketika terlalu banyak agent dibangun tanpa baseline, organisasi masuk ke fase yang bisa disebut demo fatigue. Setiap bulan ada showcase baru, tetapi sponsor bisnis mulai skeptis. Tidak ada metrik sebelum-sesudah yang kredibel. Tidak jelas mana agent yang benar-benar dipakai oleh tim operasional. Tidak ada keputusan tegas untuk menghentikan use case yang lemah. Sementara itu, biaya platform, integrasi, serta pengawasan mulai naik. Ini berbahaya karena trust eksekutif biasanya turun lebih cepat daripada kemampuan teknis tim meningkat. Sekali program AI dianggap penuh demo tetapi miskin hasil, pendanaan dan dukungan lintas fungsi akan melemah.

Dalam finance, misalnya, perusahaan bisa memiliki agent untuk draft commentary, agent untuk evidence lookup, agent untuk reconciliation support, dan agent untuk policy Q&A. Namun jika tidak ada baseline pada cycle time close, correction rate, atau beban review controller, maka empat agent itu hanya menjadi katalog eksperimen. Dalam procurement, tim bisa membangun agent intake, agent vendor FAQ, agent contract summarization, dan agent policy checker. Tetapi jika tidak ada ukuran seperti salah routing, waktu pemrosesan request, atau backlog intake, maka sulit membuktikan mana yang benar-benar bernilai. Dalam shared services atau GCC, pola ini lebih berbahaya lagi. Karena volume use case tinggi, organisasi bisa terlihat sangat aktif padahal sebenarnya hanya memproduksi variasi agent tanpa standardisasi dan tanpa economics yang sehat.

Solusinya bukan berhenti bereksperimen, tetapi menerapkan portfolio discipline dan kill criteria. Perusahaan perlu memperlakukan agentic AI sebagai portofolio investasi operasional, bukan kumpulan eksperimen kreatif. Setiap agent harus terkait ke workflow atau value stream yang jelas. Setiap use case harus punya baseline metric. Setiap pilot harus punya success criteria. Dan setiap use case harus punya kill criteria. Kill criteria penting karena banyak organisasi hanya punya mekanisme untuk memulai, bukan untuk menghentikan. Padahal menghentikan use case yang tidak menunjukkan nilai adalah tanda kedewasaan, bukan kegagalan. Pertanyaan yang harus dipakai: outcome apa yang ingin diperbaiki? Metrik apa yang akan berubah? Siapa owner bisnisnya? Jika dalam periode tertentu bukti value tidak muncul, apakah use case akan dihentikan, dipersempit, atau didesain ulang? Jika perusahaan belum bisa menjawab pertanyaan itu, kemungkinan besar agent yang dibangun hanya menambah noise ke dalam operasi.

## Otonomi Terlalu Tinggi, Terlalu Cepat

Pola kegagalan kedua adalah memberi agent izin bertindak sebelum data, policy, identity, dan observability siap. Ini biasanya muncul setelah satu atau dua demo berhasil. Tekanan lalu datang dari dua arah: dari bisnis yang ingin melihat dampak cepat, dan dari vendor atau tim internal yang ingin menunjukkan bahwa agent benar-benar otonom.

Masalahnya, otonomi bukan fitur pemasaran. Otonomi adalah keputusan risk dan operating model. Agent yang diberi hak execute terlalu dini dapat memanggil tool dengan konteks yang salah, menjalankan tindakan pada data yang belum tervalidasi, melanggar threshold approval, atau membuat keputusan yang sulit dijelaskan setelah kejadian. Tanpa observability yang memadai, perusahaan bahkan tidak tahu dengan cepat apa yang salah. Tanpa policy engine yang nyata, guardrail hanya hidup di prompt yang bisa diubah kapan saja. Tanpa identity dan access control yang benar, agent beroperasi dengan hak akses yang terlalu luas atau tidak dapat diaudit.

Dalam enterprise, otonomi sebaiknya dinaikkan bertahap. Tingkat pertama adalah assist, di mana agent membantu mencari konteks atau menyusun informasi. Tingkat kedua adalah draft, di mana agent menyiapkan output awal untuk ditinjau manusia. Tingkat ketiga adalah recommend, di mana agent memberi rekomendasi tindakan, tetapi manusia memutuskan. Tingkat keempat adalah execute with approval, di mana agent menjalankan tindakan setelah ada persetujuan eksplisit. Tingkat kelima adalah execute with monitoring, di mana agent menjalankan tindakan tertentu secara mandiri dalam batas yang sangat jelas, dengan monitoring dan rollback yang siap. Urutan ini penting. Banyak perusahaan ingin melompat dari draft ke execute karena terlihat lebih transformatif. Padahal dalam banyak domain, lompatan itu justru memperbesar risiko tanpa menambah nilai yang sebanding.

Dalam IT operations, agent bisa cukup aman untuk mengumpulkan log, mengklasifikasikan incident, merekomendasikan runbook, atau membuka tiket eskalasi. Tetapi memberi agent hak mengubah konfigurasi produksi terlalu cepat adalah pola yang berbahaya, terutama jika change control dan rollback belum matang. Dalam procurement, agent bisa mengklasifikasikan request, memeriksa policy dasar, dan merutekan kasus standar. Namun memberi agent hak membuat vendor baru, mengubah syarat komersial, atau mengeksekusi tindakan sourcing tanpa kontrol manusia biasanya terlalu dini. Dalam finance, agent cocok untuk evidence gathering, variance triage, dan draft commentary. Tetapi keputusan akuntansi material, posting tertentu, atau sign-off close tetap membutuhkan kontrol manusia yang kuat.

Prinsip utamanya sederhana: kecepatan scaling harus mengikuti bukti reliability. Perusahaan sering salah mengira bahwa keberanian berarti memberi otonomi tinggi lebih cepat. Dalam praktik enterprise, keberanian yang sehat justru berarti menahan diri sampai reliability terbukti. Naikkan otonomi hanya jika ada bukti bahwa kualitas output stabil, exception handling jelas, policy enforcement berjalan di runtime, logging dan audit trail memadai, dan manusia tahu kapan harus override. Jika tekanan hype lebih dominan daripada bukti reliability, organisasi sedang masuk ke pola kegagalan ini.

## Black Box Vendor Agent

Pola kegagalan ketiga muncul ketika perusahaan membeli agent dari vendor yang terlihat canggih, tetapi tidak memberi control surface yang cukup untuk enterprise. Demonya bagus. Integrasinya tampak cepat. Vendor menjanjikan outcome. Namun ketika tim internal mulai bertanya lebih dalam, jawabannya kabur. Bagaimana audit trail tersedia? Bisakah perilaku agent diuji dengan skenario perusahaan sendiri? Bagaimana policy diterapkan? Apa yang terjadi jika model berubah? Bisakah agent dimatikan dengan aman? Siapa yang memegang logika approval dan data boundary? Jika jawaban atas pertanyaan-pertanyaan ini lemah, perusahaan sedang berhadapan dengan black box vendor agent.

Untuk proses kritikal, perusahaan tidak cukup hanya tahu bahwa agent biasanya bekerja. Perusahaan harus bisa menguji, memonitor, menjelaskan, membatasi, dan menonaktifkan agent bila perlu. Tanpa itu, vendor agent mungkin masih cocok untuk use case ringan atau non-material. Tetapi untuk workflow seperti customer resolution, finance operations, procurement compliance, atau IT operations, black box adalah risiko struktural.

Beberapa sinyal yang perlu diwaspadai. Tidak ada log yang cukup detail tentang tool call dan keputusan. Tidak ada cara menguji agent dengan data historis perusahaan. Perubahan model atau perilaku dilakukan vendor tanpa governance yang jelas. Policy hanya dijanjikan di level presentasi, bukan di runtime. Tidak ada mekanisme kill switch atau fallback yang jelas. Dan perusahaan tidak punya akses yang memadai ke konfigurasi, evaluasi, atau evidence operasional.

Di banyak perusahaan, procurement masih mengevaluasi solusi AI dengan pola lama: fitur, harga, SLA, dan integrasi dasar. Untuk agentic AI, itu tidak cukup. Evaluasi vendor harus memasukkan requirement governance seperti auditability, explainability operasional, logging, identity dan access model, policy enforcement, model change governance, incident response, dan exit plan. Ini bukan hanya isu teknologi. Ini isu kontrol perusahaan atas lapisan eksekusi baru yang akan berinteraksi langsung dengan data dan sistem inti.

Bukan berarti semua vendor tertutup harus ditolak. Ada kalanya embedded agent di platform SaaS memberi kecepatan dan integrasi yang sangat berguna. Tetapi trade-off-nya harus disadari. Jika perusahaan menerima black box yang lebih besar, maka scope use case harus lebih sempit, level otonomi harus lebih rendah, dan ketergantungan pada vendor harus dibatasi. Yang berbahaya adalah memakai vendor agent tertutup untuk proses material sambil berasumsi bahwa governance bisa ditambahkan belakangan. Governance tidak bisa ditambahkan setelah agent sudah berjalan di produksi.

## Mengabaikan Realitas Workforce

Pola kegagalan keempat adalah memperlakukan agentic AI murni sebagai proyek teknologi. Ini mungkin pola yang paling sering diremehkan. Padahal banyak hambatan scaling justru bukan datang dari model atau integrasi, melainkan dari manusia yang harus bekerja bersama agent setiap hari.

Program dimulai dari tim teknologi atau inovasi. Use case dipilih. Agent dibangun. Demo berhasil. Lalu organisasi berasumsi bahwa pengguna akan otomatis mengadopsi karena tool-nya jelas membantu. Yang terjadi sering sebaliknya. Pengguna merasa agent dipaksakan. Supervisor tidak tahu kapan harus percaya atau override. KPI lama masih mendorong perilaku manual. Role baru tidak dijelaskan. Dan training hanya fokus pada cara memakai tool, bukan cara bekerja dalam workflow baru. Hasilnya adalah resistance, underuse, atau workaround yang membuat agent tidak pernah dipakai sesuai desain.

Dalam customer operations, agent mungkin bisa merangkum histori kasus dan menyusun respons awal. Tetapi jika agent tidak memahami nuansa eskalasi pelanggan tertentu, staf frontline akan cepat kehilangan kepercayaan dan kembali bekerja di luar sistem. Dalam finance shared services, agent bisa menyiapkan evidence pack. Namun jika reviewer tetap dinilai dari volume touch manual, mereka tidak punya insentif untuk mengubah cara kerja. Dalam GCC atau shared services, perubahan ini lebih besar lagi karena agentic AI dapat menggeser model kerja dari eksekusi repetitif ke oversight, exception handling, dan orkestrasi. Jika role redesign tidak dilakukan, organisasi akan mengalami kebingungan kapasitas dan identitas kerja.

Program agentic AI yang sehat harus mengakui bahwa perubahan workforce adalah bagian inti dari desain, bukan aktivitas komunikasi di akhir. Empat disiplin minimum diperlukan.

Pertama, co-design dengan pengguna operasional. Pengguna harus dilibatkan untuk mendefinisikan exception yang nyata, format output yang usable, titik approval, dan kondisi kapan agent tidak boleh bertindak. Mereka yang paling tahu di mana agent akan membantu dan di mana agent akan menghalangi.

Kedua, training yang role-based. Operator, reviewer, supervisor, manager, dan control function membutuhkan pelatihan yang berbeda. Training generik tentang AI awareness tidak cukup. Operator perlu tahu cara mengecek output agent. Reviewer perlu tahu kapan harus override. Manager perlu tahu cara membaca metrik human-agent teaming.

Ketiga, metric yang transparan. Pengguna perlu melihat bagaimana agent dinilai, bagaimana override dibaca, dan bagaimana performa tim akan berubah. Jika metrik terasa seperti alat pengawasan tersembunyi, trust akan turun. Jika metrik menunjukkan bahwa agent membantu mengurangi beban kerja repetitif, trust akan naik.

Keempat, role redesign. Perusahaan harus jujur bahwa beberapa tugas akan berkurang, sementara tugas lain naik pentingnya: oversight, exception handling, workflow improvement, policy stewardship, dan continuous improvement atas agent. Tanpa redesign peran, organisasi akan mencoba menjalankan model kerja lama dengan lapisan AI baru. Itu hampir selalu menghasilkan friksi yang tidak perlu.

## Governance Theater

Pola kegagalan terakhir adalah yang paling berbahaya karena sering terlihat paling rapi di atas kertas. Perusahaan punya policy AI. Ada prinsip responsible AI. Ada komite. Ada slide tentang human-in-the-loop. Tetapi ketika agent berjalan di runtime, tidak ada enforcement yang nyata. Inilah yang disebut governance theater: governance yang terdengar meyakinkan, tetapi tidak tertanam dalam sistem operasional.

Bentuk governance theater yang paling umum: policy ada, tetapi agent tidak punya identity yang jelas; approval diwajibkan di dokumen, tetapi tidak dipaksa oleh workflow; logging disebut penting, tetapi jejak tool call tidak lengkap; evaluasi dibahas saat go-live, tetapi tidak ada regression testing saat model berubah; incident response ada di kebijakan umum, tetapi tidak ada playbook khusus untuk agent failure; risk review dilakukan sekali, lalu tidak ada monitoring berkelanjutan. Governance seperti ini memberi rasa aman palsu. Saat insiden terjadi, organisasi baru sadar bahwa kontrol sebenarnya tidak pernah hidup di runtime.

Jika governance serius, ia harus terlihat dalam identity, di mana agent punya identitas dan hak akses yang jelas. Ia harus terlihat dalam policy engine, di mana aturan tidak hanya ditulis tetapi ditegakkan. Ia harus terlihat dalam logging, di mana tindakan, tool call, dan keputusan tercatat. Ia harus terlihat dalam approval workflow, di mana threshold dan jalur persetujuan benar-benar berjalan. Ia harus terlihat dalam evaluation, di mana ada pengujian sebelum dan sesudah perubahan. Ia harus terlihat dalam incident response, di mana ada mekanisme deteksi, eskalasi, containment, dan pembelajaran. Dengan kata lain, governance bukan dokumen. Governance adalah mekanisme runtime.

Jika salah satu dari kondisi berikut terjadi, kemungkinan governance perusahaan masih bersifat kosmetik. Tidak ada inventory resmi agent yang aktif. Tidak jelas siapa owner bisnis, owner teknis, dan risk owner tiap agent. Agent bisa mengakses sistem inti dengan kredensial generik. Perubahan prompt, model, atau tool schema masuk produksi tanpa testing formal. Tidak ada kill switch yang jelas untuk use case material. Vendor tidak diwajibkan memberi audit trail yang memadai. Board governance hanya melihat presentasi, bukan evidence operasional. Dan insiden agent diperlakukan sebagai bug biasa tanpa analisis kontrol. Governance theater sangat berbahaya karena membuat organisasi merasa sudah aman padahal belum.

## Menghindari Pola Gagal Sebelum Bicara Scale

Agentic AI memang membuka peluang besar untuk mendesain ulang cara kerja perusahaan. Tetapi seperti banyak transformasi enterprise lainnya, nilai tidak hilang karena teknologinya tidak menarik. Nilai hilang karena organisasi menskalakan pola yang salah.

Lima pola kegagalan di atas sering muncul bersamaan. Terlalu banyak agent tanpa nilai yang jelas. Otonomi dinaikkan sebelum fondasi siap. Vendor dipilih tanpa control surface yang memadai. Workforce diperlakukan sebagai afterthought. Dan governance berhenti di dokumen. Jika perusahaan ingin bergerak dari pilot ke operating model agentic yang sehat, maka disiplin utamanya bukan membangun agent lebih banyak. Disiplin utamanya adalah menghindari pola gagal yang akan berulang di setiap domain.

Gunakan pertanyaan-pertanyaan berikut untuk menilai apakah program agentic AI Anda sedang bergerak sehat atau mulai jatuh ke pola kegagalan.

**Portfolio dan value discipline.** Apakah setiap agent terkait ke workflow atau value stream yang jelas? Apakah ada baseline metric sebelum pilot dimulai? Apakah success criteria disepakati di awal? Apakah ada kill criteria untuk use case yang tidak menunjukkan nilai? Apakah review portofolio membahas outcome, bukan hanya jumlah agent?

**Otonomi dan reliability.** Apakah level otonomi agent ditetapkan eksplisit: assist, draft, recommend, execute-with-approval, atau execute-with-monitoring? Apakah kenaikan otonomi didasarkan pada bukti reliability, bukan tekanan sponsor atau hype vendor? Apakah policy, observability, dan approval workflow sudah siap sebelum agent diberi hak execute? Apakah ada fallback dan rollback untuk tindakan yang material?

**Vendor dan control surface.** Apakah vendor dapat menyediakan audit trail yang memadai? Apakah agent vendor bisa diuji dengan skenario dan data historis perusahaan? Apakah ada kejelasan tentang model change governance, logging, dan incident response? Apakah perusahaan dapat menonaktifkan agent dengan aman jika diperlukan? Apakah procurement memasukkan governance requirement ke evaluasi vendor?

**Workforce dan adopsi.** Apakah pengguna operasional dilibatkan dalam co-design? Apakah training disesuaikan per role, bukan generik? Apakah KPI dan metric kerja diperbarui agar selaras dengan human-agent teaming? Apakah perubahan peran dijelaskan secara jujur? Apakah ada mekanisme feedback dan quick fixes setelah rollout?

**Governance nyata, bukan kosmetik.** Apakah setiap agent punya owner bisnis, owner teknis, dan risk owner? Apakah agent tercatat di registry resmi? Apakah identity, access control, logging, approval, dan evals berjalan di runtime? Apakah perubahan agent melewati testing dan release discipline? Apakah ada incident response khusus untuk agentic workflow? Apakah governance board meninjau evidence operasional, bukan hanya slide?

Jika hari ini Anda menghentikan semua demo dan hanya melihat agent yang benar-benar dipakai di operasi, dengan metrik nilai, kontrol runtime, dan perubahan peran yang jelas, berapa banyak dari program agentic AI Anda yang masih layak disebut transformasi—dan berapa banyak yang sebenarnya baru kumpulan eksperimen yang belum siap menjadi operating model?
