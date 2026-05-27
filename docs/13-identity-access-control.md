---
title: "Identity dan Access Control untuk AI Agents"
sidebar_position: 13
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Identity dan Access Control untuk AI Agents

<ArticleDiagram src="/img/agentic-enterprise/diagrams/13-identity-access-control.png" alt="Diagram: Identity dan Access Control untuk AI Agents" />

Bayangkan tim finance Anda sedang menyiapkan agent untuk membantu proses tutup buku bulanan. Agent ini bisa membaca jurnal terbuka, memeriksa rekonsiliasi, dan menyusun draft komentar untuk item yang belum selesai. Semua berjalan lancar di demo. Tapi ketika agent mulai benar-benar mengirim draft adjustment ke ERP, tiba-tiba muncul pertanyaan yang membuat tim berhenti: siapa sebenarnya yang melakukan tindakan ini? Apakah agent bertindak atas nama controller tertentu? Atau sebagai sistem mandiri? Dan kalau hasilnya salah, siapa yang bertanggung jawab?

Pertanyaan ini bukan sekadar teknis. Ia menyentuh inti bagaimana perusahaan memandang agent: sebagai alat bantu anonim, atau sebagai aktor digital yang perlu diperlakukan setara dengan manusia dan aplikasi lain dalam hal kontrol dan akuntabilitas.

Banyak organisasi saat ini sudah cukup maju dalam memikirkan model, prompt, dan integrasi API untuk agent mereka. Tapi ketika use case mulai bergerak dari demo ke production, satu hal sering terlewat: agent tidak memiliki identitas yang jelas. Ia berjalan dengan service account generik, permission yang terlalu luas, dan log yang tidak cukup untuk menjelaskan asal-usul tindakannya. Akibatnya, ketika agent mulai membaca invoice, membuka tiket, mengubah status order, atau memicu workflow procurement, perusahaan tidak bisa menjawab pertanyaan dasar: identitas apa yang dipakai agent, atas nama siapa ia bertindak, izin apa yang dimilikinya, dan dalam konteks workflow apa tindakan itu terjadi.

Untuk enterprise, ini bukan detail kecil. Tanpa model identitas dan akses yang eksplisit, auditability, accountability, dan runtime governance akan runtuh tepat ketika agent mulai memberi nilai nyata.

## Agent Bukan Script Anonim

Dalam arsitektur enterprise tradisional, kita terbiasa mengenali beberapa jenis aktor: manusia, aplikasi, service account, dan proses terjadwal. Agentic AI menambah satu kategori baru: aktor digital yang dapat menalar, memilih tool, dan bertindak lintas langkah. Karena itu, agent tidak boleh diperlakukan seperti script anonim yang kebetulan berjalan di belakang layar.

Agent harus memiliki identitas yang jelas karena perusahaan perlu mengetahui tiga hal dasar: siapa yang melakukan tindakan, atas mandat siapa tindakan itu dilakukan, dan dalam workflow apa tindakan itu terjadi. Tanpa tiga hal ini, kontrol enterprise menjadi kabur.

Coba bayangkan agent procurement yang menerima intake request, memeriksa kontrak, lalu membuat draft purchase request di ERP. Jika tindakan itu tercatat hanya sebagai aktivitas dari satu service account generik, maka saat terjadi masalah perusahaan tidak bisa membedakan apakah tindakan dipicu oleh user tertentu, apakah itu bagian dari workflow terjadwal, apakah agent bertindak otonom karena event tertentu, atau apakah ada penyalahgunaan akses. Hal yang sama berlaku di finance close, customer operations, atau IT operations. Ketika agent mulai menyentuh state bisnis, identitasnya harus bisa ditelusuri seperti halnya identitas manusia atau aplikasi lain.

Identitas agent juga menjadi fondasi akuntabilitas. Dalam model operating lama, akuntabilitas biasanya mengikuti manusia: analis, approver, supervisor, atau system owner. Dalam model agentic, sebagian tindakan berpindah ke digital labor. Itu tidak berarti akuntabilitas hilang. Justru sebaliknya, akuntabilitas harus dibuat lebih eksplisit. Perusahaan perlu bisa menjawab: agent ini milik fungsi apa, siapa business owner-nya, siapa technical owner-nya, tool apa yang boleh dipakai, dan batas tindakan apa yang diizinkan. Jika tidak, organisasi akan menghadapi situasi berbahaya: agent bertindak nyata, tetapi tidak ada model kontrol yang setara dengan dampaknya.

Lebih dari itu, identitas juga menentukan trust boundary. Agent yang berinteraksi dengan karyawan internal berbeda dari agent yang melayani pelanggan eksternal. Agent yang hanya membaca knowledge base berbeda dari agent yang bisa mengubah status pembayaran. Agent yang berjalan dalam konteks user terverifikasi berbeda dari agent yang melayani channel publik atau semi-publik. Karena itu, identitas agent bukan sekadar nama teknis. Ia menentukan data apa yang boleh diakses, tool apa yang boleh dipanggil, dan level pengawasan apa yang dibutuhkan. Jika semua agent diperlakukan sama, perusahaan akan cenderung jatuh ke dua ekstrem: terlalu longgar atau terlalu membatasi. Keduanya buruk.

## Permission Tidak Cukup Berbasis Role Statis

Setelah identitas agent jelas, langkah berikutnya adalah otorisasi. Di sinilah banyak organisasi membuat kesalahan lama dalam bentuk baru: memberi akses berdasarkan role statis, lalu berharap itu cukup aman. Untuk agentic AI, pendekatan ini terlalu kasar.

Permission agent seharusnya tidak hanya ditentukan oleh role agent, tetapi juga oleh konteks: siapa user yang diwakili, tugas apa yang sedang dijalankan, data apa yang sedang diakses, sensitivitas informasi, dan risiko dari tindakan yang akan dilakukan. Pendekatan ini dikenal sebagai context-aware authorization.

Ambil contoh sederhana di accounts payable. Agent boleh membaca invoice, PO, dan goods receipt untuk menganalisis mismatch. Agent boleh menyusun rekomendasi resolusi. Tetapi agent tidak otomatis boleh mengubah payment status atau melepaskan blok pembayaran. Mengapa? Karena tindakan terakhir memiliki profil risiko yang jauh lebih tinggi daripada sekadar membaca atau merekomendasikan.

Contoh di HR operations: agent boleh membaca status onboarding dan kelengkapan dokumen, serta membuat draft notifikasi ke hiring manager. Tetapi agent tidak boleh mengubah data kompensasi atau status employment tanpa approval yang tepat. Contoh di customer operations: agent boleh melihat histori tiket dan entitlement pelanggan, serta menyiapkan refund bernilai rendah jika policy terpenuhi. Tetapi refund di atas threshold tertentu harus berhenti untuk review supervisor.

Dalam semua contoh ini, role statis tidak cukup. Yang dibutuhkan adalah authorization yang mempertimbangkan konteks runtime.

Secara praktis, ada empat dimensi konteks yang sebaiknya dievaluasi setiap kali agent memanggil tool atau mengakses data. Pertama, konteks user atau principal asal: apakah agent bertindak atas nama karyawan tertentu, tim tertentu, atau fungsi bisnis tertentu? Jika ya, hak agent tidak boleh melebihi mandat asalnya tanpa alasan yang jelas. Kedua, konteks task atau workflow: apakah agent sedang menjalankan analisis, drafting, eksekusi transaksi, atau approval support? Hak akses untuk tiap tahap harus berbeda. Ketiga, konteks data: apakah data yang diakses bersifat umum, internal, rahasia, atau sangat sensitif? Apakah data itu terkait payroll, vendor banking detail, kontrak strategis, atau informasi pelanggan yang dilindungi? Keempat, konteks risiko tindakan: membaca data, membuat draft, mengeksekusi perubahan, dan menyetujui transaksi adalah empat tingkat risiko yang berbeda. Kontrolnya tidak boleh disamakan.

Mengapa ini penting? Karena agent yang terlalu banyak izin adalah salah satu risiko paling nyata dalam enterprise. Godaannya besar: agar pilot cepat berhasil, tim sering memberi akses luas ke agent. Dalam jangka pendek, ini mempercepat demo. Dalam jangka panjang, ini menciptakan over-permissioned agents yang sulit diaudit dan berbahaya saat diskalakan. Prinsip yang lebih sehat tetap sama seperti pada keamanan manusia dan aplikasi: least privilege. Bedanya, pada agentic AI, least privilege harus diterapkan secara lebih dinamis karena agent bekerja lintas konteks.

## Delegated Authority: Atas Nama Siapa Agent Bertindak?

Banyak tindakan agent tidak benar-benar milik agent. Agent sering bertindak atas nama seseorang atau suatu fungsi. Karena itu, perusahaan perlu membedakan dengan tegas antara identitas agent dan sumber otoritasnya. Inilah inti dari delegated authority.

Dalam praktik enterprise, tindakan agent biasanya berasal dari salah satu dari tiga sumber. Pertama, instruksi user: misalnya seorang buyer meminta agent procurement memeriksa kontrak dan membuat draft purchase request. Dalam kasus ini, agent bertindak atas instruksi eksplisit user. Kedua, workflow terjadwal atau proses bisnis resmi: misalnya agent finance close setiap malam memeriksa exception yang belum selesai dan mengirim follow-up. Di sini, mandatnya berasal dari workflow yang telah disetujui organisasi. Ketiga, autonomous trigger berbasis event: misalnya agent IT operations menerima event bahwa service tertentu gagal, lalu menjalankan diagnostik dan membuka incident. Atau agent supply chain menerima event keterlambatan shipment dan menyiapkan opsi mitigasi. Dalam kasus ini, tindakan dipicu oleh event, bukan perintah manusia langsung.

Ketiga sumber mandat ini harus dibedakan dalam sistem. Jika tidak, audit trail akan kehilangan konteks yang sangat penting.

Delegated authority yang sehat harus memiliki batas. Minimal, delegasi perlu bisa dicabut kapan saja, dibatasi waktu, dibatasi ruang lingkup tugas, dan jika relevan, dibatasi nilai transaksi. Contoh di procurement: agent boleh membuat draft request untuk kategori belanja standar selama nilai di bawah batas tertentu. Di atas itu, agent hanya boleh merekomendasikan. Contoh di customer service: agent boleh memproses goodwill credit sampai nilai tertentu untuk pelanggan dengan kriteria tertentu. Di luar itu, agent harus berhenti. Contoh di IT operations: agent boleh menjalankan runbook remediasi berisiko rendah pada lingkungan non-produksi atau service tertentu, tetapi tidak boleh melakukan perubahan produksi material tanpa approval.

Salah satu kelemahan umum adalah delegasi hanya dipahami secara bisnis, tetapi tidak diterjemahkan ke kontrol teknis. Padahal sistem harus bisa mencatat dengan jelas siapa pemberi mandat, agent mana yang menjalankan, kapan mandat berlaku, tool apa yang dipakai, dan apakah tindakan itu sesuai policy. Tanpa ini, perusahaan akan kesulitan membedakan antara tindakan yang sah, tindakan di luar mandat, dan tindakan yang seharusnya sudah tidak berlaku lagi.

## Pola Implementasi untuk Enterprise

Agar identity dan access control untuk agent tidak berhenti sebagai prinsip, perusahaan perlu menerjemahkannya ke pola implementasi yang operasional.

Pertama, beri setiap agent service identity yang formal. Setiap agent yang masuk production sebaiknya memiliki service identity sendiri, bukan berbagi akun generik. Identitas ini harus terdaftar, punya owner, dan terhubung ke katalog agent enterprise. Minimal, metadata yang perlu ada: nama dan tujuan agent, business owner, technical owner, domain proses, tool yang diizinkan, risk tier, dan status lifecycle. Ini penting agar agent diperlakukan sebagai aset operasional, bukan eksperimen yang dibiarkan hidup sendiri.

Kedua, bind setiap tool call ke policy engine. Agent tidak boleh bebas memanggil tool hanya karena tool tersedia. Setiap tool call sebaiknya melewati policy engine yang mengevaluasi identitas agent, identitas user atau sumber mandat, jenis tindakan, objek data atau transaksi, konteks workflow, dan aturan approval yang berlaku. Dengan pola ini, kontrol tidak hanya terjadi saat login, tetapi di runtime, tepat ketika agent hendak bertindak. Ini sangat penting karena agentic AI bersifat dinamis. Satu sesi yang sama bisa mencakup beberapa langkah dengan tingkat risiko berbeda. Otorisasi harus mengikuti langkah tersebut, bukan hanya identitas awal.

Ketiga, pisahkan permission berdasarkan jenis tindakan. Salah satu desain paling berguna adalah memisahkan hak akses ke dalam lapisan tindakan: read, recommend, draft, execute, dan approve. Pemisahan ini jauh lebih relevan untuk agent daripada model akses aplikasi tradisional. Contoh di finance: read untuk melihat jurnal, rekonsiliasi, dan evidence; recommend untuk menyarankan treatment exception; draft untuk menyiapkan commentary atau draft adjustment; execute untuk memposting tindakan tertentu yang telah diizinkan; approve yang hampir selalu tetap pada manusia untuk item material. Contoh di procurement: read untuk melihat kontrak, vendor, dan policy; draft untuk membuat purchase request; execute untuk mengirim request ke workflow; approve yang tetap pada approver manusia. Dengan pemisahan ini, perusahaan bisa menaikkan otonomi agent secara bertahap tanpa langsung membuka semua hak sekaligus.

Keempat, gunakan just-in-time dan scoped access bila memungkinkan. Untuk tindakan yang lebih sensitif, akses sebaiknya tidak aktif permanen. Lebih aman jika agent memperoleh akses sementara, hanya untuk task tertentu, lalu akses itu berakhir setelah tugas selesai. Pendekatan ini membantu mengurangi blast radius jika terjadi kesalahan konfigurasi atau penyalahgunaan.

Kelima, simpan audit log yang benar-benar menjelaskan tindakan. Audit log untuk agent tidak cukup hanya mencatat bahwa API dipanggil. Log yang layak untuk enterprise harus menghubungkan user atau sumber mandat, identitas agent, keputusan policy, tool call yang dilakukan, input yang dipakai, output yang dihasilkan, approval yang terjadi atau dilewati, dan perubahan state akhir di sistem. Inilah jejak minimum untuk menjawab pertanyaan audit, investigasi insiden, atau evaluasi kualitas agent. Jika perusahaan tidak bisa merekonstruksi rantai ini, maka agent sebenarnya belum siap untuk skala production.

## Bagaimana Pola Ini Bekerja di Praktik

Di finance close, agent close orchestration memiliki service identity sendiri. Ia boleh membaca status rekonsiliasi, jurnal terbuka, dan evidence. Ia boleh membuat draft commentary dan follow-up. Tetapi untuk adjustment material, policy engine memaksa human approval. Log mencatat controller yang memberi mandat, agent yang menyiapkan draft, policy yang diterapkan, dan status akhir jurnal.

Di procurement intake-to-PO, agent procurement bertindak atas nama requester atau buyer tergantung tahap proses. Ia boleh membaca kontrak, vendor master, dan policy kategori. Ia boleh membuat draft request untuk kategori standar. Jika nilai transaksi melewati batas atau vendor belum approved, tool call untuk eksekusi ditolak atau dialihkan ke approval workflow.

Di customer operations, agent service memiliki identitas sendiri dan berjalan dalam konteks pelanggan yang telah diverifikasi. Ia boleh membaca histori tiket dan entitlement. Ia boleh mengeksekusi goodwill credit kecil jika policy terpenuhi. Untuk pelanggan VIP, kasus berulang, atau nilai di atas batas, agent hanya memberi rekomendasi dan menunggu supervisor.

Di IT operations, agent incident response menerima event dari observability platform. Ia boleh menjalankan diagnostik dan remediasi berisiko rendah pada service tertentu. Untuk tindakan yang menyentuh produksi kritikal, policy engine meminta approval engineer on-call. Semua langkah tercatat: event asal, agent yang bertindak, runbook yang dipanggil, hasilnya, dan perubahan state sistem.

## Kapan Pola Ini Belum Tepat

Tidak semua organisasi siap langsung menerapkan model yang matang. Ada beberapa sinyal bahaya yang menunjukkan bahwa agent belum layak di-scale. Agent masih memakai shared service account tanpa identitas unik. Permission diberikan terlalu luas agar use case jalan dulu. Tidak ada pemisahan antara hak membaca, menyusun draft, dan mengeksekusi. Delegated authority tidak tercatat secara eksplisit. Tool call tidak melewati policy engine atau kontrol runtime. Audit log hanya mencatat output akhir, bukan rantai keputusan. Tidak ada cara cepat untuk mencabut akses agent jika terjadi insiden. Business owner tidak tahu persis tool dan data apa yang dipakai agent.

Jika beberapa gejala ini masih ada, scaling agentic AI akan memperbesar risiko lebih cepat daripada nilai.

Agent dengan otonomi eksekusi juga belum tepat untuk domain yang menyentuh transaksi material tanpa rollback yang jelas, belum punya definisi policy yang bisa diterjemahkan ke aturan runtime, datanya belum stabil, atau ownership prosesnya masih kabur. Dalam kondisi seperti itu, lebih aman memulai dari read, recommend, dan draft sambil memperkuat identity, policy, dan logging terlebih dahulu.

## Pertanyaan untuk Dibawa Pulang

Setelah memahami topik ini, ada beberapa keputusan yang sebaiknya diambil sekarang. Pertama, tentukan model identitas agent di perusahaan Anda: apakah setiap agent akan memiliki service identity formal, owner bisnis, owner teknis, dan risk tier yang jelas? Kedua, putuskan model otorisasi yang akan dipakai: apakah perusahaan akan tetap mengandalkan role statis, atau beralih ke authorization berbasis konteks untuk setiap tool call? Ketiga, definisikan model delegated authority: kapan agent bertindak atas nama user, atas nama workflow, atau karena event otonom? Bagaimana delegasi dibatasi, dicabut, dan diaudit? Keempat, pisahkan level permission agent: apakah hak akses sudah dibedakan antara read, recommend, draft, execute, dan approve? Kelima, tentukan standar auditability minimum: apakah perusahaan mampu menghubungkan user, agent, policy decision, tool call, input, output, dan perubahan state akhir?

Jika besok auditor, regulator, atau komite risiko bertanya "siapa yang melakukan tindakan ini, atas mandat siapa, dan mengapa sistem mengizinkannya?", apakah perusahaan Anda sudah bisa menjawab dengan bukti yang lengkap—bukan hanya penjelasan lisan? Jika jawabannya belum tegas, maka sebelum menambah lebih banyak agent, prioritas berikutnya bukan fitur baru. Prioritasnya adalah membangun identitas, otorisasi, dan delegasi yang membuat agent layak dipercaya sebagai aktor enterprise.
