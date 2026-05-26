---
title: "Finance Function di Era Agentic AI"
sidebar_position: 26
---

# Finance Function di Era Agentic AI

Bayangkan tim finance Anda sedang menjalani proses month-end close. Angka-angka sudah ada di ERP, tetapi masih ada entitas yang belum mengirim data, akun-akun dengan variance yang belum dijelaskan, dan email menumpuk untuk mengejar status dari berbagai controller. Ini adalah pemandangan yang akrab di banyak perusahaan. Prosesnya berulang, deadline-nya ketat, kontrolnya formal, dan dampaknya langsung terasa pada kualitas operasi. Selama ini, solusinya adalah automasi parsial: workflow engine, RPA, dashboard, dan sedikit copilot untuk drafting. Itu membantu, tetapi belum mengubah cara kerja finance secara mendasar.

Sekarang, pertanyaannya mulai bergeser. Bukan lagi "bagaimana mempercepat tugas finance?", melainkan "bagaimana mendesain ulang operasi finance agar digital labor bisa ikut menjalankan close, reconciliation, invoice handling, dan reporting tanpa merusak kontrol?" Ini penting karena finance bukan domain yang cocok untuk eksperimen liar. Agent di finance tidak boleh menjadi "asisten pintar" yang menghasilkan jawaban meyakinkan tetapi tidak bisa diaudit. Jika dipakai di fungsi ini, agent harus bekerja sebagai bagian dari operating model yang disiplin: terhubung ke ERP dan sistem pendukung, tunduk pada policy dan threshold, menghasilkan evidence pack, dan tetap menempatkan manusia pada titik judgement yang tepat.

## Mengapa Finance Menjadi Kandidat Kuat

Finance adalah salah satu domain enterprise yang paling cocok untuk pendekatan agentic, justru karena sifatnya yang terstruktur tetapi tidak sepenuhnya sederhana. Di satu sisi, finance memiliki banyak pekerjaan berulang: mencocokkan transaksi, memeriksa kelengkapan dokumen, menelusuri penyebab mismatch, menyusun penjelasan variance, mengingatkan owner proses, dan merutekan exception ke pihak yang tepat. Di sisi lain, finance juga penuh kontrol: ada approval matrix, segregation of duties, materiality threshold, audit trail, dan kebutuhan dokumentasi yang jauh lebih tinggi dibanding banyak fungsi lain.

Kombinasi ini membuat finance menarik. Banyak aktivitasnya cukup jelas untuk dibantu agent, tetapi tidak harus langsung diotomasi penuh. Inilah yang disebut **bounded autonomy**: agent dapat membaca, membandingkan, menyiapkan rekomendasi, dan mengorkestrasi tindak lanjut, sementara manusia tetap memegang judgement, approval, dan akuntabilitas akhir.

Jika kita lihat lebih dekat, banyak pekerjaan finance sebenarnya bukan "menghitung angka", melainkan **mengelola exception dan konteks**. Pada proses close, angka sudah ada di sistem, tetapi tim masih harus mengecek input yang belum masuk, mencari entitas yang terlambat, memahami akun mana yang menyimpang, meminta penjelasan dari business controller, lalu menyusun narasi yang cukup kuat untuk review. Pada reconciliation, sistem bisa menunjukkan mismatch, tetapi seseorang tetap harus menelusuri penyebabnya, membandingkan sumber transaksi, memeriksa timing difference, dan menyiapkan usulan jurnal atau tindak lanjut. Pada invoice processing, OCR dan workflow lama mungkin sudah menangani sebagian, tetapi exception tetap tinggi ketika ada mismatch PO, goods receipt, tax issue, vendor anomaly, atau policy deviation.

Semua ini adalah area di mana agentic AI lebih berguna daripada automasi statis. Agent dapat mengambil data dari beberapa sistem, membaca policy dan histori kasus, menalar penyebab exception, menyiapkan draft tindakan, dan mengeskalasi hanya ketika perlu.

### Mengapa finance tidak harus menunggu "full autonomy"

Banyak pemimpin finance ragu karena menganggap agentic AI berarti menyerahkan keputusan ke mesin. Itu framing yang keliru. Untuk finance, nilai awal terbesar justru datang dari model yang lebih konservatif: agent sebagai monitor close, agent sebagai investigator mismatch, agent sebagai preparer evidence dan draft, bukan langsung sebagai pengambil keputusan final. Pendekatan ini lebih cocok dengan realitas fungsi finance. Kontrol manusia tidak hilang, tetapi beban kerja manual yang repetitif berkurang. Tim finance bisa bergeser dari pekerjaan administratif dan follow-up berulang ke analisis, control judgement, root-cause resolution, dan business partnering.

Meski menjanjikan, tidak semua area finance layak menjadi titik awal. Agentic pattern kurang cocok jika proses dasarnya sendiri belum stabil, chart of accounts dan definisi data masih kacau, policy akuntansi belum terdokumentasi dengan baik, atau organisasi belum punya disiplin approval dan audit trail yang konsisten. Dalam kondisi seperti itu, agent hanya akan mempercepat kebingungan yang sudah ada. Finance perlu fondasi proses dan data yang cukup matang sebelum memberi agent peran operasional.

## Tiga Use Case Utama: Close, Reconciliation, dan Invoice

Untuk banyak perusahaan, tiga use case paling masuk akal sebagai titik awal adalah **close agent**, **reconciliation agent**, dan **invoice agent**. Ketiganya punya volume kerja nyata, nilai bisnis jelas, dan ruang bounded autonomy yang cukup sehat.

### 1. Close agent: dari close calendar ke close orchestration

Pada banyak organisasi, month-end close masih sangat bergantung pada koordinasi manual: spreadsheet tracker, email follow-up, status meeting, dan pengejaran input dari berbagai entitas atau fungsi. Close agent dapat berperan sebagai **orchestrator operasional** untuk proses ini.

Secara praktis, close agent dapat memonitor task close dan due date, mengecek input yang belum masuk dari ERP, subledger, atau consolidation tool, menandai akun atau entitas dengan variance tidak biasa, mengingatkan owner proses yang terlambat, mengumpulkan evidence pendukung, dan menyiapkan draft commentary untuk reviewer. Sebagai contoh, sebuah grup multientitas memiliki proses close yang melibatkan AP, AR, inventory, payroll, dan accrual. Close agent memeriksa apakah seluruh feed sudah masuk, mendeteksi bahwa satu entitas belum menyelesaikan intercompany elimination, lalu mengeskalasi bottleneck ke controller regional. Pada saat yang sama, agent menyiapkan daftar akun dengan variance terbesar dan menarik histori commentary bulan sebelumnya sebagai konteks awal.

Nilai utama close agent bukan sekadar "membuat close otomatis", melainkan mengurangi waktu yang hilang untuk chasing, menurunkan blind spot pada bottleneck, meningkatkan kualitas penjelasan variance, dan membuat review lebih fokus pada judgement, bukan pengumpulan data. Namun, close agent cocok untuk monitoring, evidence assembly, dan drafting. Ia tidak cocok menjadi penentu treatment akuntansi material secara otonom. Jika ada isu seperti revenue recognition, impairment, reserve judgement, atau accounting interpretation yang signifikan, manusia tetap harus menjadi pemegang keputusan.

### 2. Reconciliation agent: dari mismatch detection ke root-cause preparation

Reconciliation adalah area klasik yang sering penuh pekerjaan manual. Sistem bisa menunjukkan bahwa dua sumber tidak cocok, tetapi mencari penyebab mismatch tetap memakan waktu. Di sinilah reconciliation agent memberi nilai.

Agent ini dapat membandingkan transaksi antar-sumber, mengelompokkan mismatch berdasarkan pola, membedakan timing difference dari error nyata, mencari kemungkinan penyebab seperti missing posting, duplicate entry, currency issue, atau mapping problem, lalu menyiapkan usulan jurnal atau tindakan korektif untuk ditinjau manusia. Pada bank reconciliation, agent membandingkan cash movement di ERP dengan statement bank, menemukan beberapa item yang belum clear, lalu mengelompokkan mana yang kemungkinan outstanding timing difference dan mana yang tampak seperti posting error. Untuk item tertentu, agent menyiapkan journal proposal lengkap dengan referensi transaksi sumber. Contoh lain di intercompany reconciliation: agent membandingkan AR/AP antar-entitas, menandai mismatch karena perbedaan cut-off, lalu menyiapkan daftar exception yang benar-benar perlu dibahas oleh tim controllership.

Reconciliation bukan hanya soal matching. Ia juga soal membaca pola, menelusuri histori, menghubungkan beberapa sumber, dan menyiapkan hipotesis penyebab. Automasi statis sering berhenti di "match / no match". Agentic pattern bisa melangkah lebih jauh ke **exception investigation**. Semakin besar otonomi agent dalam menyiapkan journal proposal, semakin penting kontrol atas source data yang dipakai, confidence level, materiality, dan approval path. Untuk mismatch bernilai rendah dan pola yang sangat jelas, agent mungkin cukup aman untuk menyiapkan draft koreksi. Untuk item material atau pola yang ambigu, agent sebaiknya berhenti di rekomendasi dan evidence.

### 3. Invoice agent: dari capture ke policy-aware processing

Banyak organisasi sudah memakai OCR atau invoice workflow. Namun exception tetap menjadi sumber beban besar, terutama pada AP. Invoice agent dapat melampaui sekadar ekstraksi dokumen.

Agent ini dapat membaca invoice, mengekstrak field penting, mencocokkan invoice dengan PO dan goods receipt, memvalidasi vendor, tax, dan policy pembayaran, memeriksa apakah ada deviasi dari kontrak atau threshold, lalu menyiapkan approval atau eskalasi yang sesuai. Sebagai contoh, invoice dari vendor masuk tanpa referensi PO yang jelas. Agent memeriksa histori vendor, kontrak aktif, dan kategori belanja, lalu menyimpulkan bahwa invoice kemungkinan terkait recurring service yang seharusnya memakai kontrak tertentu. Agent menandai policy deviation, menyiapkan ringkasan kasus, dan merutekan ke approver yang tepat. Pada kasus lain, invoice cocok dengan PO dan goods receipt, nilainya rendah, vendor berisiko rendah, dan tidak ada anomali. Dalam desain yang lebih matang, agent dapat menyiapkan jalur straight-through dengan kontrol yang sudah ditetapkan.

Jika vendor master buruk, PO discipline rendah, atau banyak pembelian dilakukan di luar proses resmi, invoice agent akan terus berhadapan dengan exception struktural. Dalam situasi seperti itu, agent tetap berguna untuk triage, tetapi jangan berharap touchless processing tinggi sebelum disiplin proses procurement dan AP diperbaiki.

## Control dan Audit: Syarat Utama, Bukan Tambahan

Di finance, kualitas agent tidak cukup diukur dari seberapa sering ia "benar". Yang lebih penting adalah apakah setiap rekomendasi atau tindakan **dapat dipertanggungjawabkan**. Karena itu, finance agents harus dibangun dengan kontrol dan auditability sebagai desain inti.

### Evidence pack untuk setiap rekomendasi

Setiap kali agent memberi rekomendasi atau menyiapkan action, ia seharusnya menghasilkan **evidence pack** yang cukup untuk ditinjau manusia atau auditor internal. Isi evidence pack biasanya mencakup source data yang dipakai, dokumen atau transaksi referensi, policy atau rule yang diperiksa, ringkasan alasan rekomendasi, confidence atau tingkat kepastian, dan status approval yang dibutuhkan. Pada reconciliation, jika agent mengusulkan journal proposal, reviewer harus bisa melihat transaksi sumber, logika mismatch, akun yang terdampak, dan alasan mengapa proposal itu muncul. Pada invoice, jika agent menandai invoice sebagai layak diproses, approver harus bisa melihat hasil three-way match, status vendor, policy check, dan alasan mengapa kasus dianggap low-risk atau exception. Tanpa evidence pack, agent hanya menjadi generator saran. Itu tidak cukup untuk finance.

### Approval threshold harus berbasis risiko

Approval untuk finance agent tidak boleh hanya ditentukan oleh "boleh atau tidak boleh". Yang lebih tepat adalah threshold bertingkat berdasarkan beberapa faktor: nilai transaksi, confidence agent, vendor risk, materiality, jenis akun atau proses, dan apakah pola kasus sudah dikenal atau masih baru. Contoh desain yang sehat: invoice bernilai rendah, vendor tepercaya, three-way match lengkap, dan confidence tinggi dapat masuk jalur approval ringan; invoice bernilai tinggi atau vendor baru tetap harus masuk review manusia penuh; journal proposal untuk akun non-material bisa cukup direview analyst; usulan yang menyentuh akun material atau area judgement harus naik ke controller. Pendekatan ini lebih realistis daripada memaksa semua kasus diperlakukan sama.

### Audit trail harus menghubungkan seluruh rantai keputusan

Audit trail untuk finance agent tidak cukup hanya menyimpan output akhir. Ia harus menghubungkan data sumber, langkah tool/API yang dipanggil, policy check yang dilakukan, ringkasan reasoning, approval atau override manusia, dan hasil akhir yang masuk ke sistem. Ini penting untuk tiga alasan. Pertama, **kontrol internal**: tim finance harus bisa menelusuri mengapa suatu tindakan terjadi. Kedua, **auditability**: internal audit atau external auditor perlu melihat bahwa agent bekerja dalam batas yang dapat diuji. Ketiga, **continuous improvement**: jika agent salah, organisasi harus bisa memahami apakah masalahnya ada pada data, policy, integrasi, atau desain workflow.

Kesalahan umum adalah memulai dari ambisi "touchless finance" tanpa menyiapkan delegated authority, segregation of duties, policy engine, dan observability yang memadai. Untuk finance, urutan yang lebih sehat adalah mulai dari read, monitor, dan draft, naik ke recommend dengan evidence, lalu hanya pada area tertentu bergerak ke execute with approval atau execute with monitoring. Jika urutannya dibalik, trust akan runtuh cepat.

## Outcome yang Realistis: Bukan Finance Tanpa Manusia

Narasi yang paling tidak membantu untuk fungsi finance adalah bahwa agentic AI akan "menggantikan finance team". Yang lebih realistis dan lebih berguna adalah melihat perubahan outcome dan perubahan peran.

Target yang masuk akal untuk pilot finance agent biasanya meliputi cycle time close yang lebih cepat, backlog exception yang menurun, follow-up manual yang berkurang, kualitas variance explanation yang lebih baik, dan review yang lebih fokus pada item material. Ini adalah outcome yang bisa dirasakan langsung oleh controllership, shared services, dan business finance. Pada close, controller tidak lagi menghabiskan banyak waktu mengejar status dan mengumpulkan evidence, tetapi lebih fokus pada akun yang benar-benar membutuhkan judgement. Pada AP, analyst tidak lagi tenggelam dalam invoice exception sederhana, tetapi menangani kasus yang memang perlu interpretasi policy atau koordinasi dengan procurement dan vendor. Pada reconciliation, tim tidak lagi memulai dari daftar mismatch mentah, tetapi dari exception yang sudah dikelompokkan dan diberi hipotesis penyebab.

Jika agent dipakai dengan benar, peran manusia di finance bergeser ke tiga area utama. Pertama, **analysis**: lebih banyak waktu untuk memahami driver bisnis, bukan hanya menyiapkan data. Kedua, **control judgement**: lebih fokus pada keputusan yang memang membutuhkan pertimbangan profesional. Ketiga, **business partnering**: lebih banyak kapasitas untuk berdialog dengan unit bisnis tentang implikasi angka, risiko, dan tindakan perbaikan. Ini sejalan dengan arah transformasi finance yang sudah lama diinginkan banyak CFO: mengurangi beban transaksional dan meningkatkan kontribusi analitis. Agentic AI memberi cara baru untuk mencapainya, tetapi hanya jika kontrol tetap kuat.

## Roadmap 90 Hari untuk Pilot Finance Agent

Pendekatan terbaik untuk finance bukan memulai dari platform besar, melainkan dari pilot yang sempit tetapi operasional.

Pada hari 1–30, pilih satu use case dengan kombinasi nilai dan risiko yang sehat, misalnya close task monitoring, AP invoice exception triage, atau reconciliation preparation. Petakan sistem sumber, data dan dokumen yang dibutuhkan, policy yang relevan, approval threshold, dan titik di mana manusia harus tetap memegang keputusan. Output fase ini seharusnya bukan demo, tetapi desain workflow dan control model.

Pada hari 31–60, bangun agent dalam mode draft atau recommend. Hubungkan agent ke data dan tools yang diperlukan, tetapi batasi otonomi. Fokus pada evidence pack, audit trail, dashboard exception, dan review bersama user finance harian atau mingguan. Pada fase ini, keberhasilan bukan diukur dari otomatisasi penuh, tetapi dari apakah output agent benar-benar usable oleh tim finance.

Pada hari 61–90, jalankan pilot terbatas pada subset entitas, vendor, akun, atau jenis kasus tertentu. Ukur waktu yang dihemat, acceptance rate rekomendasi, correction rate, exception backlog, dan kualitas evidence. Di akhir 90 hari, keputusan yang harus diambil bukan "apakah AI bagus", tetapi apakah use case layak diperluas, apakah tingkat otonomi bisa dinaikkan, atau apakah fondasi data/proses perlu diperbaiki dulu.

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

1. **Pilih use case finance awal yang tepat.** Mulailah dari close monitoring, reconciliation preparation, atau invoice exception handling—bukan dari keputusan akuntansi material.
2. **Tentukan batas otonomi agent.** Putuskan secara eksplisit apakah agent hanya membaca, menyiapkan draft, memberi rekomendasi, atau boleh mengeksekusi tindakan tertentu dengan approval.
3. **Rancang evidence pack dan audit trail sejak awal.** Jangan menunggu audit atau kontrol internal bertanya baru memikirkan dokumentasi.
4. **Tetapkan approval threshold berbasis risiko.** Gunakan kombinasi nilai transaksi, confidence, vendor risk, dan materiality, bukan satu aturan seragam.
5. **Siapkan perubahan peran tim finance.** Pastikan pilot tidak hanya mengejar efisiensi, tetapi juga menggeser kapasitas tim ke analysis, control judgement, dan business partnering.

### Checklist readiness singkat

- [ ] Proses finance yang dipilih cukup stabil dan terdokumentasi.
- [ ] Data sumber dari ERP, subledger, atau sistem pendukung cukup dapat dipercaya.
- [ ] Policy dan SOP yang relevan tersedia dan bisa dijadikan source of truth.
- [ ] Approval matrix dan delegated authority sudah jelas.
- [ ] Tim finance bersedia meninjau output agent dan memberi feedback terstruktur.
- [ ] Ada owner bisnis dan owner teknis untuk use case pilot.
- [ ] Audit trail, logging, dan evidence pack dirancang sebelum production.
- [ ] Scope pilot dibatasi pada entitas, akun, vendor, atau jenis kasus tertentu.
- [ ] Metrik keberhasilan mencakup cycle time, backlog, acceptance rate, correction rate, dan kualitas explanation.
- [ ] Internal control, risk, atau audit internal dilibatkan sejak awal.

### Sinyal bahaya sebelum scale

- [ ] Organisasi ingin langsung memberi agent hak eksekusi luas di finance.
- [ ] Data master, policy, atau chart of accounts masih tidak konsisten.
- [ ] Tidak ada kejelasan siapa yang menyetujui rekomendasi agent.
- [ ] Agent menghasilkan saran, tetapi tidak ada evidence yang cukup untuk review.
- [ ] Pilot dinilai hanya dari jumlah otomatisasi, bukan kualitas kontrol dan outcome.
- [ ] Tim finance melihat agent semata-mata sebagai ancaman pengurangan peran, bukan alat redesign kerja.

### Pertanyaan reflektif untuk CIO, COO, CFO, dan transformation leader

Jika finance di perusahaan Anda masih menghabiskan terlalu banyak waktu untuk chasing, matching, follow-up, dan menyiapkan penjelasan dari nol, apakah masalahnya benar-benar kekurangan tool—atau karena operating model finance belum didesain untuk memanfaatkan digital labor secara terkontrol? Itulah pertanyaan yang perlu dijawab sebelum agentic AI dibawa lebih jauh ke fungsi finance.
