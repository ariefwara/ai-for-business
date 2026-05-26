---
title: "Identity dan Access Control untuk AI Agents"
sidebar_position: 13
---

# Identity dan Access Control untuk AI Agents

Pada artikel sebelumnya, kita membahas bagaimana menyusun **business case agentic AI** yang layak didanai dan bisa dipertanggungjawabkan. Namun begitu sebuah use case bergerak dari demo ke production, pertanyaan yang segera menjadi kritis bukan lagi hanya *“apa nilainya?”*, melainkan:

**siapa sebenarnya yang bertindak ketika agent menjalankan aksi di sistem enterprise?**

Pertanyaan ini terdengar teknis, tetapi implikasinya sangat operasional. Jika agent membaca invoice, membuka tiket, mengubah status order, memicu workflow procurement, atau menjalankan remediasi di IT operations, perusahaan harus bisa menjawab dengan jelas:

- identitas apa yang dipakai agent,
- atas nama siapa agent bertindak,
- izin apa yang dimiliki,
- dalam konteks workflow apa tindakan itu terjadi,
- dan siapa yang bertanggung jawab jika hasilnya salah.

Di sinilah banyak implementasi agentic AI masih lemah. Organisasi sudah memikirkan model, prompt, tool calling, dan integrasi API, tetapi belum memperlakukan agent sebagai **principal** formal dalam arsitektur keamanan dan kontrol. Akibatnya, agent sering berjalan dengan service account generik, permission terlalu luas, atau log yang tidak cukup untuk menjelaskan asal-usul tindakan.

Untuk enterprise, ini bukan detail kecil. Tanpa model identitas dan akses yang eksplisit, **auditability, accountability, dan runtime governance** akan runtuh tepat ketika agent mulai memberi nilai nyata.

## Agent Bukan Script Anonim, tetapi Principal Baru

Dalam arsitektur enterprise tradisional, kita terbiasa mengenali beberapa jenis actor: manusia, aplikasi, service account, dan proses terjadwal. Agentic AI menambah satu kategori baru: **actor digital yang dapat menalar, memilih tool, dan bertindak lintas langkah**.

Karena itu, agent tidak boleh diperlakukan seperti script anonim yang “kebetulan berjalan di belakang layar”.

Agent harus memiliki identitas yang jelas karena perusahaan perlu mengetahui tiga hal dasar:

1. **siapa yang melakukan tindakan**,  
2. **atas mandat siapa tindakan itu dilakukan**,  
3. **dalam workflow apa tindakan itu terjadi**.

Tanpa tiga hal ini, kontrol enterprise menjadi kabur.

### Mengapa identitas agent harus eksplisit

Bayangkan agent procurement yang menerima intake request, memeriksa kontrak, lalu membuat draft purchase request di ERP. Jika tindakan itu tercatat hanya sebagai aktivitas dari satu service account generik, maka saat terjadi masalah perusahaan tidak bisa membedakan:

- apakah tindakan dipicu oleh user tertentu,
- apakah itu bagian dari workflow terjadwal,
- apakah agent bertindak otonom karena event tertentu,
- atau apakah ada penyalahgunaan akses.

Hal yang sama berlaku di **finance close**, **customer operations**, atau **IT operations**. Ketika agent mulai menyentuh state bisnis, identitasnya harus bisa ditelusuri seperti halnya identitas manusia atau aplikasi lain.

### Identitas agent adalah fondasi akuntabilitas

Dalam model operating lama, akuntabilitas biasanya mengikuti manusia: analis, approver, supervisor, atau system owner. Dalam model agentic, sebagian tindakan berpindah ke digital labor. Itu tidak berarti akuntabilitas hilang. Justru sebaliknya, akuntabilitas harus dibuat lebih eksplisit.

Perusahaan perlu bisa menjawab:

- agent ini milik fungsi apa,
- siapa business owner-nya,
- siapa technical owner-nya,
- tool apa yang boleh dipakai,
- dan batas tindakan apa yang diizinkan.

Jika tidak, organisasi akan menghadapi situasi berbahaya: agent bertindak nyata, tetapi tidak ada model kontrol yang setara dengan dampaknya.

### Identitas juga menentukan trust boundary

Agent yang berinteraksi dengan karyawan internal berbeda dari agent yang melayani pelanggan eksternal. Agent yang hanya membaca knowledge base berbeda dari agent yang bisa mengubah status pembayaran. Agent yang berjalan dalam konteks user terverifikasi berbeda dari agent yang melayani channel publik atau semi-publik.

Karena itu, identitas agent bukan sekadar nama teknis. Ia menentukan **trust boundary**:
- data apa yang boleh diakses,
- tool apa yang boleh dipanggil,
- dan level pengawasan apa yang dibutuhkan.

Jika semua agent diperlakukan sama, perusahaan akan cenderung jatuh ke dua ekstrem: terlalu longgar atau terlalu membatasi. Keduanya buruk.

## Permission Tidak Cukup Berbasis Role Statis

Setelah identitas agent jelas, langkah berikutnya adalah otorisasi. Di sinilah banyak organisasi membuat kesalahan lama dalam bentuk baru: memberi akses berdasarkan role statis, lalu berharap itu cukup aman.

Untuk agentic AI, pendekatan ini terlalu kasar.

Permission agent seharusnya tidak hanya ditentukan oleh “role agent”, tetapi juga oleh **context**:
- siapa user yang diwakili,
- tugas apa yang sedang dijalankan,
- data apa yang sedang diakses,
- sensitivitas informasi,
- dan risiko dari tindakan yang akan dilakukan.

### Dari role-based ke context-aware authorization

Contoh sederhana di **accounts payable**:

- agent boleh membaca invoice, PO, dan goods receipt untuk menganalisis mismatch;
- agent boleh menyusun rekomendasi resolusi;
- tetapi agent **tidak otomatis boleh** mengubah payment status atau melepaskan blok pembayaran.

Mengapa? Karena tindakan terakhir memiliki profil risiko yang jauh lebih tinggi daripada sekadar membaca atau merekomendasikan.

Contoh di **HR operations**:
- agent boleh membaca status onboarding dan kelengkapan dokumen;
- agent boleh membuat draft notifikasi ke hiring manager;
- tetapi agent tidak boleh mengubah data kompensasi atau status employment tanpa approval yang tepat.

Contoh di **customer operations**:
- agent boleh melihat histori tiket dan entitlement pelanggan;
- agent boleh menyiapkan refund bernilai rendah jika policy terpenuhi;
- tetapi refund di atas threshold tertentu harus berhenti untuk review supervisor.

Dalam semua contoh ini, role statis tidak cukup. Yang dibutuhkan adalah **authorization yang mempertimbangkan konteks runtime**.

### Empat dimensi konteks yang perlu diperiksa

Secara praktis, ada empat dimensi yang sebaiknya dievaluasi setiap kali agent memanggil tool atau mengakses data.

#### 1. Konteks user atau principal asal
Apakah agent bertindak atas nama karyawan tertentu, tim tertentu, atau fungsi bisnis tertentu? Jika ya, hak agent tidak boleh melebihi mandat asalnya tanpa alasan yang jelas.

#### 2. Konteks task atau workflow
Apakah agent sedang menjalankan analisis, drafting, eksekusi transaksi, atau approval support? Hak akses untuk tiap tahap harus berbeda.

#### 3. Konteks data
Apakah data yang diakses bersifat umum, internal, rahasia, atau sangat sensitif? Apakah data itu terkait payroll, vendor banking detail, kontrak strategis, atau informasi pelanggan yang dilindungi?

#### 4. Konteks risiko tindakan
Membaca data, membuat draft, mengeksekusi perubahan, dan menyetujui transaksi adalah empat tingkat risiko yang berbeda. Kontrolnya tidak boleh disamakan.

### Mengapa ini penting untuk mencegah over-permissioned agents

Agent yang terlalu banyak izin adalah salah satu risiko paling nyata dalam enterprise. Godaannya besar: agar pilot cepat berhasil, tim sering memberi akses luas ke agent. Dalam jangka pendek, ini mempercepat demo. Dalam jangka panjang, ini menciptakan **over-permissioned agents** yang sulit diaudit dan berbahaya saat diskalakan.

Prinsip yang lebih sehat tetap sama seperti pada keamanan manusia dan aplikasi: **least privilege**. Bedanya, pada agentic AI, least privilege harus diterapkan secara lebih dinamis karena agent bekerja lintas konteks.

## Delegated Authority: Agent Bertindak Atas Nama Siapa?

Banyak tindakan agent tidak benar-benar “milik agent”. Agent sering bertindak **atas nama** seseorang atau suatu fungsi. Karena itu, perusahaan perlu membedakan dengan tegas antara identitas agent dan sumber otoritasnya.

Ini adalah inti dari **delegated authority**.

### Tiga sumber mandat yang paling umum

Dalam praktik enterprise, tindakan agent biasanya berasal dari salah satu dari tiga sumber berikut.

#### 1. Instruksi user
Misalnya seorang buyer meminta agent procurement memeriksa kontrak dan membuat draft purchase request. Dalam kasus ini, agent bertindak atas instruksi eksplisit user.

#### 2. Workflow terjadwal atau proses bisnis resmi
Misalnya agent finance close setiap malam memeriksa exception yang belum selesai dan mengirim follow-up. Di sini, mandatnya berasal dari workflow yang telah disetujui organisasi.

#### 3. Autonomous trigger berbasis event
Misalnya agent IT operations menerima event bahwa service tertentu gagal, lalu menjalankan diagnostik dan membuka incident. Atau agent supply chain menerima event keterlambatan shipment dan menyiapkan opsi mitigasi. Dalam kasus ini, tindakan dipicu oleh event, bukan perintah manusia langsung.

Ketiga sumber mandat ini harus dibedakan dalam sistem. Jika tidak, audit trail akan kehilangan konteks yang sangat penting.

### Delegasi tidak boleh permanen dan tak terbatas

Delegated authority yang sehat harus memiliki batas. Minimal, delegasi perlu bisa:

- **dicabut** kapan saja,
- **dibatasi waktu**,
- **dibatasi ruang lingkup tugas**,
- dan jika relevan, **dibatasi nilai transaksi**.

Contoh di **procurement**:
agent boleh membuat draft request untuk kategori belanja standar selama nilai di bawah batas tertentu. Di atas itu, agent hanya boleh merekomendasikan.

Contoh di **customer service**:
agent boleh memproses goodwill credit sampai nilai tertentu untuk pelanggan dengan kriteria tertentu. Di luar itu, agent harus berhenti.

Contoh di **IT operations**:
agent boleh menjalankan runbook remediasi berisiko rendah pada lingkungan non-produksi atau service tertentu, tetapi tidak boleh melakukan perubahan produksi material tanpa approval.

### Delegasi harus tercermin di log dan policy

Salah satu kelemahan umum adalah delegasi hanya dipahami secara bisnis, tetapi tidak diterjemahkan ke kontrol teknis. Padahal sistem harus bisa mencatat dengan jelas:

- siapa pemberi mandat,
- agent mana yang menjalankan,
- kapan mandat berlaku,
- tool apa yang dipakai,
- dan apakah tindakan itu sesuai policy.

Tanpa ini, perusahaan akan kesulitan membedakan antara tindakan yang sah, tindakan di luar mandat, dan tindakan yang seharusnya sudah tidak berlaku lagi.

## Pola Implementasi yang Layak untuk Enterprise

Agar identity dan access control untuk agent tidak berhenti sebagai prinsip, perusahaan perlu menerjemahkannya ke pola implementasi yang operasional.

### 1. Beri setiap agent service identity yang formal

Setiap agent yang masuk production sebaiknya memiliki **service identity** sendiri, bukan berbagi akun generik. Identitas ini harus terdaftar, punya owner, dan terhubung ke katalog agent enterprise.

Minimal, metadata yang perlu ada:
- nama dan tujuan agent,
- business owner,
- technical owner,
- domain proses,
- tool yang diizinkan,
- risk tier,
- dan status lifecycle.

Ini penting agar agent diperlakukan sebagai aset operasional, bukan eksperimen yang dibiarkan hidup sendiri.

### 2. Bind setiap tool call ke policy engine

Agent tidak boleh bebas memanggil tool hanya karena tool tersedia. Setiap tool call sebaiknya melewati **policy engine** yang mengevaluasi:

- identitas agent,
- identitas user atau sumber mandat,
- jenis tindakan,
- objek data atau transaksi,
- konteks workflow,
- dan aturan approval yang berlaku.

Dengan pola ini, kontrol tidak hanya terjadi saat login, tetapi **di runtime**, tepat ketika agent hendak bertindak.

Ini sangat penting karena agentic AI bersifat dinamis. Satu sesi yang sama bisa mencakup beberapa langkah dengan tingkat risiko berbeda. Otorisasi harus mengikuti langkah tersebut, bukan hanya identitas awal.

### 3. Pisahkan permission berdasarkan jenis tindakan

Salah satu desain paling berguna adalah memisahkan hak akses ke dalam lapisan tindakan berikut:

- **read**
- **recommend**
- **draft**
- **execute**
- **approve**

Pemisahan ini jauh lebih relevan untuk agent daripada model akses aplikasi tradisional.

Contoh di **finance**:
- read: melihat jurnal, rekonsiliasi, dan evidence;
- recommend: menyarankan treatment exception;
- draft: menyiapkan commentary atau draft adjustment;
- execute: memposting tindakan tertentu yang telah diizinkan;
- approve: hampir selalu tetap pada manusia untuk item material.

Contoh di **procurement**:
- read: melihat kontrak, vendor, dan policy;
- draft: membuat purchase request;
- execute: mengirim request ke workflow;
- approve: tetap pada approver manusia.

Dengan pemisahan ini, perusahaan bisa menaikkan otonomi agent secara bertahap tanpa langsung membuka semua hak sekaligus.

### 4. Gunakan just-in-time dan scoped access bila memungkinkan

Untuk tindakan yang lebih sensitif, akses sebaiknya tidak aktif permanen. Lebih aman jika agent memperoleh akses **sementara**, hanya untuk task tertentu, lalu akses itu berakhir setelah tugas selesai.

Pendekatan ini membantu mengurangi blast radius jika terjadi kesalahan konfigurasi atau penyalahgunaan.

### 5. Simpan audit log yang benar-benar menjelaskan tindakan

Audit log untuk agent tidak cukup hanya mencatat bahwa “API dipanggil”. Log yang layak untuk enterprise harus menghubungkan:

- user atau sumber mandat,
- identitas agent,
- keputusan policy,
- tool call yang dilakukan,
- input yang dipakai,
- output yang dihasilkan,
- approval yang terjadi atau dilewati,
- dan perubahan state akhir di sistem.

Inilah jejak minimum untuk menjawab pertanyaan audit, investigasi insiden, atau evaluasi kualitas agent.

Jika perusahaan tidak bisa merekonstruksi rantai ini, maka agent sebenarnya belum siap untuk skala production.

## Contoh Enterprise: Bagaimana Pola Ini Bekerja

### Finance close
Agent close orchestration memiliki service identity sendiri. Ia boleh membaca status rekonsiliasi, jurnal terbuka, dan evidence. Ia boleh membuat draft commentary dan follow-up. Tetapi untuk adjustment material, policy engine memaksa human approval. Log mencatat controller yang memberi mandat, agent yang menyiapkan draft, policy yang diterapkan, dan status akhir jurnal.

### Procurement intake-to-PO
Agent procurement bertindak atas nama requester atau buyer tergantung tahap proses. Ia boleh membaca kontrak, vendor master, dan policy kategori. Ia boleh membuat draft request untuk kategori standar. Jika nilai transaksi melewati batas atau vendor belum approved, tool call untuk eksekusi ditolak atau dialihkan ke approval workflow.

### Customer operations
Agent service memiliki identitas sendiri dan berjalan dalam konteks pelanggan yang telah diverifikasi. Ia boleh membaca histori tiket dan entitlement. Ia boleh mengeksekusi goodwill credit kecil jika policy terpenuhi. Untuk pelanggan VIP, kasus berulang, atau nilai di atas batas, agent hanya memberi rekomendasi dan menunggu supervisor.

### IT operations
Agent incident response menerima event dari observability platform. Ia boleh menjalankan diagnostik dan remediasi berisiko rendah pada service tertentu. Untuk tindakan yang menyentuh produksi kritikal, policy engine meminta approval engineer on-call. Semua langkah tercatat: event asal, agent yang bertindak, runbook yang dipanggil, hasilnya, dan perubahan state sistem.

## Kapan Pola Ini Belum Tepat atau Belum Siap

Tidak semua organisasi siap langsung menerapkan model yang matang. Namun ada beberapa kondisi yang jelas menunjukkan bahwa agent belum layak di-scale.

### Sinyal bahaya yang paling umum

- Agent masih memakai **shared service account** tanpa identitas unik.
- Permission diberikan terlalu luas “agar use case jalan dulu”.
- Tidak ada pemisahan antara hak membaca, menyusun draft, dan mengeksekusi.
- Delegated authority tidak tercatat secara eksplisit.
- Tool call tidak melewati policy engine atau kontrol runtime.
- Audit log hanya mencatat output akhir, bukan rantai keputusan.
- Tidak ada cara cepat untuk mencabut akses agent jika terjadi insiden.
- Business owner tidak tahu persis tool dan data apa yang dipakai agent.

Jika beberapa gejala ini masih ada, scaling agentic AI akan memperbesar risiko lebih cepat daripada nilai.

### Kapan bounded autonomy belum tepat

Agent dengan otonomi eksekusi belum tepat untuk domain yang:
- menyentuh transaksi material tanpa rollback yang jelas,
- belum punya definisi policy yang bisa diterjemahkan ke aturan runtime,
- datanya belum stabil,
- atau ownership prosesnya masih kabur.

Dalam kondisi seperti itu, lebih aman memulai dari **read, recommend, dan draft** sambil memperkuat identity, policy, dan logging terlebih dahulu.

## Checklist Praktis

Berikut keputusan dan checklist yang sebaiknya diambil setelah memahami topik ini.

### Keputusan yang perlu diambil sekarang

1. **Tentukan model identitas agent di perusahaan Anda.**  
   Apakah setiap agent akan memiliki service identity formal, owner bisnis, owner teknis, dan risk tier yang jelas?

2. **Putuskan model otorisasi yang akan dipakai.**  
   Apakah perusahaan akan tetap mengandalkan role statis, atau beralih ke authorization berbasis konteks untuk setiap tool call?

3. **Definisikan model delegated authority.**  
   Kapan agent bertindak atas nama user, atas nama workflow, atau karena event otonom? Bagaimana delegasi dibatasi, dicabut, dan diaudit?

4. **Pisahkan level permission agent.**  
   Apakah hak akses sudah dibedakan antara read, recommend, draft, execute, dan approve?

5. **Tentukan standar auditability minimum.**  
   Apakah perusahaan mampu menghubungkan user, agent, policy decision, tool call, input, output, dan perubahan state akhir?

### Checklist readiness singkat

- [ ] Setiap agent production memiliki identitas formal yang unik.
- [ ] Ada business owner dan technical owner untuk setiap agent.
- [ ] Tool dan data yang boleh diakses agent terdokumentasi.
- [ ] Permission agent dibedakan menurut jenis tindakan, bukan hanya role umum.
- [ ] Otorisasi dievaluasi pada saat tool call, bukan hanya saat login awal.
- [ ] Delegated authority tercatat: atas nama siapa, untuk tugas apa, dan sampai kapan.
- [ ] Ada mekanisme revoke atau suspend akses agent dengan cepat.
- [ ] Audit log cukup detail untuk investigasi dan compliance review.
- [ ] Approval workflow tersedia untuk tindakan berisiko lebih tinggi.
- [ ] Business, security, dan risk memiliki pandangan yang sama tentang scope kewenangan agent.

### Sinyal bahwa topik ini belum siap di-scale

- Agent masih diperlakukan seperti bot atau script biasa.
- Service account generik dipakai lintas beberapa agent.
- Tim proyek tidak bisa menjelaskan siapa yang bertanggung jawab atas tindakan agent.
- Tidak ada policy runtime yang memeriksa konteks user, task, data, dan risk.
- Log tidak cukup untuk menjawab pertanyaan audit dasar.
- Organisasi ingin menaikkan otonomi agent sebelum model identitas dan aksesnya matang.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

**Jika besok auditor, regulator, atau komite risiko bertanya “siapa yang melakukan tindakan ini, atas mandat siapa, dan mengapa sistem mengizinkannya?”, apakah perusahaan Anda sudah bisa menjawab dengan bukti yang lengkap—bukan hanya penjelasan lisan?**

Jika jawabannya belum tegas, maka sebelum menambah lebih banyak agent, prioritas berikutnya bukan fitur baru. Prioritasnya adalah **membangun identitas, otorisasi, dan delegasi yang membuat agent layak dipercaya sebagai actor enterprise.**
