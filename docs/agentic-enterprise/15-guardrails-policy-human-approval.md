---
title: "Guardrails, Policy Engine, dan Human Approval Workflow"
sidebar_position: 15
---

# Guardrails, Policy Engine, dan Human Approval Workflow

Pada artikel sebelumnya, kita membahas **observability**: bagaimana perusahaan melacak apa yang dilakukan agent, mengapa ia melakukannya, dan apa dampaknya terhadap operasi. Namun observability pada dasarnya bersifat **melihat dan menjelaskan**. Pertanyaan berikutnya lebih menentukan untuk production:

**bagaimana perusahaan mencegah agent melakukan tindakan yang salah sebelum kerusakan terjadi?**

Di sinilah tiga komponen menjadi inti runtime governance untuk agentic systems:

- **guardrails** untuk membatasi perilaku agent,
- **policy engine** untuk memutuskan apakah tindakan tertentu boleh dilakukan,
- **human approval workflow** untuk memasukkan manusia pada titik risiko yang tepat.

Banyak organisasi masih memikirkan guardrails sebagai filter konten: memblokir jawaban berbahaya, kata-kata sensitif, atau respons yang tidak pantas. Itu perlu, tetapi untuk enterprise, itu baru lapisan paling luar. Risiko terbesar agentic AI sering bukan pada kalimat yang dihasilkan, melainkan pada **tool yang dipanggil, data yang diambil, dan state bisnis yang diubah**.

Agent yang salah menjawab pertanyaan internal memang bermasalah. Tetapi agent yang salah:
- memproses refund,
- membuat vendor,
- memicu perubahan konfigurasi,
- mengubah status order,
- atau mengirim instruksi ke sistem keuangan,

jauh lebih berbahaya.

Karena itu, guardrails dalam agentic enterprise harus dipasang **di runtime**, dekat dengan keputusan dan aksi, bukan hanya ditulis di dokumen policy atau prompt sistem.

## Guardrails Bukan Hanya Filter Output

Cara paling keliru memahami guardrails adalah menganggapnya sebagai lapisan sensor di akhir proses: model menghasilkan jawaban, lalu sistem memeriksa apakah output itu aman. Pendekatan ini mungkin cukup untuk chatbot sederhana. Untuk agentic systems, itu terlambat.

Jika agent sudah:
- mengambil dokumen yang seharusnya tidak boleh diakses,
- memanggil tool yang salah,
- atau mengeksekusi aksi yang mengubah transaksi,

maka memfilter output akhir tidak lagi menyelesaikan masalah utama.

### Lima titik guardrails yang harus dikendalikan

Dalam praktik enterprise, guardrails perlu bekerja setidaknya pada lima titik.

#### 1. Input
Sistem perlu memeriksa apa yang diminta user atau event pemicu. Bukan hanya untuk keamanan konten, tetapi juga untuk memastikan:
- intent sesuai dengan use case agent,
- permintaan tidak mencoba mem-bypass proses resmi,
- dan konteks awal cukup untuk memulai workflow.

Contoh di **procurement**: requester tidak boleh memakai agent untuk “langsung buat PO” jika proses seharusnya dimulai dari intake dan klasifikasi kategori.  
Contoh di **HR operations**: agent tidak boleh menerima instruksi bebas untuk mengubah data karyawan tanpa jalur resmi.

#### 2. Context retrieval
Guardrails harus mengontrol dokumen, data, dan memory apa yang boleh diambil agent. Ini terkait langsung dengan artikel sebelumnya tentang context layer dan identity.

Contoh:
- agent finance boleh mengambil accounting guidance yang relevan, tetapi tidak semua memo sensitif lintas entitas;
- agent customer service boleh melihat histori tiket pelanggan yang sedang ditangani, tetapi tidak boleh menarik data pelanggan lain hanya karena mirip secara semantik;
- agent legal intake boleh mengambil template kontrak yang berlaku, tetapi tidak semua matter yang dibatasi privilege.

#### 3. Tool access
Tidak semua tool yang tersedia boleh dipakai untuk semua situasi. Guardrails harus membatasi:
- tool mana yang boleh dipanggil,
- oleh agent mana,
- dalam workflow apa,
- dan dengan parameter seperti apa.

Contoh di **IT operations**: agent boleh menjalankan tool diagnostik dan membuka tiket, tetapi tidak otomatis boleh menjalankan perubahan produksi.  
Contoh di **customer operations**: agent boleh mengecek entitlement dan menyiapkan refund, tetapi tidak boleh mengeksekusi refund di atas ambang tertentu.

#### 4. Action execution
Ini titik paling kritis. Guardrails harus memeriksa apakah tindakan yang akan mengubah state bisnis memang diizinkan.

Contoh:
- membuat vendor baru,
- memposting jurnal,
- mengubah limit kredit,
- melepaskan blok pembayaran,
- atau menutup insiden sebagai selesai.

Di sinilah perusahaan perlu membedakan dengan tegas antara **read**, **recommend**, **draft**, dan **execute**. Banyak use case terlihat aman sampai agent diberi hak execute tanpa kontrol runtime yang memadai.

#### 5. Output
Baru setelah empat titik di atas, filter output tetap relevan. Ia berguna untuk:
- mencegah kebocoran data sensitif,
- memastikan bahasa yang digunakan sesuai,
- dan memeriksa apakah respons akhir mengandung klaim yang tidak didukung evidence.

Tetapi output filter harus dipahami sebagai **lapisan terakhir**, bukan guardrail utama.

## Guardrails harus hidup di runtime, bukan hanya di policy document

Banyak perusahaan sudah punya SOP, matrix approval, dan kebijakan akses. Masalahnya, agent tidak membaca dokumen governance seperti manusia. Agar kontrol benar-benar bekerja, aturan itu harus diterjemahkan ke mekanisme runtime:
- policy check sebelum tool call,
- parameter validation,
- threshold transaksi,
- approval trigger,
- dan logging keputusan.

Jika guardrails hanya hidup di slide governance atau prompt sistem, maka saat agent menghadapi situasi ambigu, sistem tidak punya cara formal untuk menghentikan atau mengalihkan tindakan.

### Contoh enterprise: finance close

Dalam **finance close**, agent mungkin membantu mengidentifikasi exception, mengumpulkan evidence, dan menyiapkan draft commentary. Guardrails yang sehat akan membolehkan:
- akses baca ke data close tertentu,
- drafting commentary,
- dan routing follow-up.

Tetapi guardrails yang sama harus menolak atau mengeskalasi ketika agent mencoba:
- memposting adjustment material,
- memilih treatment akuntansi tanpa dasar yang cukup,
- atau menutup exception tanpa evidence minimum.

### Kapan guardrails terlalu berat

Ada trade-off yang perlu diakui. Guardrails yang terlalu ketat bisa membuat agent tidak berguna. Jika setiap langkah kecil harus melewati approval atau terlalu banyak validasi, pengguna akan kembali ke proses manual.

Karena itu, desain guardrails harus mengikuti **risk tier**. Untuk use case knowledge assistant internal, guardrails bisa lebih ringan. Untuk use case yang menyentuh transaksi, pelanggan, atau sistem produksi, guardrails harus jauh lebih ketat.

## Policy Engine: Tempat Keputusan Izin Dibuat Secara Konsisten

Jika guardrails adalah lapisan kontrol, maka **policy engine** adalah mesin yang memutuskan apakah suatu tindakan boleh dilakukan pada saat runtime.

Secara sederhana, policy engine menjawab pertanyaan seperti:
- apakah agent ini boleh memanggil tool ini,
- dalam konteks user atau workflow ini,
- untuk objek bisnis ini,
- pada nilai transaksi ini,
- dengan tingkat risiko ini,
- dan apakah perlu approval manusia sebelum lanjut.

Tanpa policy engine, banyak kontrol agentic akan tersebar di prompt, kode aplikasi, konfigurasi tool, dan kebiasaan tim. Hasilnya tidak konsisten dan sulit diaudit.

## Apa yang dievaluasi policy engine

Untuk enterprise, policy decision biasanya perlu mempertimbangkan kombinasi beberapa faktor.

### Role dan delegated authority
Agent bertindak atas nama siapa? Apakah atas instruksi user, workflow resmi, atau event sistem? Apakah mandatnya masih berlaku?

### Context bisnis
Objek apa yang sedang disentuh? Vendor, invoice, order, tiket, kontrak, atau data karyawan? Domain yang berbeda bisa punya aturan berbeda.

### Nilai transaksi atau materiality
Banyak tindakan aman pada nilai rendah, tetapi tidak pada nilai tinggi.

Contoh:
- goodwill credit kecil mungkin boleh dieksekusi otomatis,
- tetapi refund besar harus masuk supervisor;
- purchase request kategori standar mungkin bisa diproses otomatis sampai batas tertentu,
- tetapi belanja strategis harus berhenti untuk approval.

### Risk level
Beberapa tindakan bersifat reversible, yang lain tidak. Beberapa berdampak lokal, yang lain lintas sistem. Policy engine harus memahami perbedaan ini.

### Regulatory atau control requirement
Di domain tertentu, aturan bukan hanya soal preferensi internal, tetapi kewajiban kepatuhan. Misalnya pemisahan tugas, evidence minimum, atau kewajiban review manusia.

## Deterministik, model-based, atau kombinasi?

Tidak semua policy harus dibuat dengan cara yang sama. Secara umum ada tiga pola.

### 1. Aturan deterministik
Ini paling cocok untuk hal-hal yang jelas dan dapat dirumuskan tegas:
- nilai transaksi di atas ambang tertentu,
- kategori vendor tertentu,
- perubahan produksi di jam tertentu,
- atau data sensitif yang tidak boleh diakses.

Keunggulannya:
- mudah diaudit,
- mudah diuji,
- dan mudah dijelaskan.

Kelemahannya:
- cepat menjadi rumit jika konteks bisnis sangat bervariasi.

### 2. Model-based classifier
Untuk situasi yang lebih ambigu, perusahaan bisa memakai classifier untuk menilai:
- sensitivitas permintaan,
- tingkat risiko kasus,
- kemungkinan fraud,
- atau apakah intent user berada di luar scope.

Keunggulannya:
- lebih fleksibel untuk kasus yang tidak mudah ditulis sebagai aturan kaku.

Kelemahannya:
- lebih sulit dijelaskan,
- perlu evaluasi berkala,
- dan tidak cocok menjadi satu-satunya kontrol untuk tindakan berisiko tinggi.

### 3. Kombinasi keduanya
Ini biasanya pola paling sehat. Classifier membantu menilai konteks atau risk signal, lalu aturan deterministik menetapkan keputusan akhir.

Contoh di **customer operations**:
- classifier menilai apakah kasus termasuk sensitif atau berpotensi dispute,
- aturan deterministik memutuskan bahwa semua kasus sensitif atau nilai di atas ambang tertentu harus masuk approval.

## Policy decision harus tercatat, bukan hanya dieksekusi

Salah satu prinsip terpenting: setiap keputusan policy harus meninggalkan jejak yang bisa diaudit.

Perusahaan harus bisa menjelaskan:
- policy apa yang dievaluasi,
- input konteks apa yang dipakai,
- hasilnya allow, deny, escalate, atau require approval,
- dan kapan keputusan itu dibuat.

Ini penting bukan hanya untuk audit formal, tetapi juga untuk operasi sehari-hari. Saat pengguna bertanya mengapa agent menolak tindakan tertentu, tim tidak boleh menjawab, “karena sistem bilang tidak.” Mereka harus bisa menunjukkan logika dan konteksnya.

### Contoh: procurement intake-to-PO

Agent procurement menerima request pembelian. Policy engine mengevaluasi:
- kategori belanja,
- vendor approved atau tidak,
- nilai transaksi,
- keberadaan kontrak,
- dan role requester.

Hasilnya bisa berbeda:
- **allow** untuk request standar bernilai rendah dengan vendor approved,
- **require approval** untuk nilai lebih tinggi,
- **deny** jika vendor belum lolos due diligence,
- **escalate** jika kategori belanja ambigu atau policy bertentangan.

Tanpa pencatatan policy decision, perusahaan akan kesulitan menjelaskan mengapa dua request yang tampak mirip diperlakukan berbeda.

## Human Approval Workflow: Manusia Masuk di Titik yang Tepat

Dalam agentic enterprise, **human-in-the-loop** bukan berarti manusia harus memeriksa semua hal. Itu akan menghancurkan manfaat agentic AI. Yang dibutuhkan adalah **human approval workflow yang selektif dan berbasis risiko**.

Approval manusia biasanya diperlukan ketika tindakan bersifat:
- **bernilai tinggi**,
- **sensitif**,
- **irreversible atau sulit dibalikkan**,
- atau **regulated**.

Ini bukan tanda kegagalan agent. Justru ini tanda bahwa perusahaan memahami batas otonomi secara sehat.

## Kapan approval manusia wajib

Beberapa pola yang hampir selalu layak masuk approval:
- transaksi di atas threshold material,
- perubahan master data kritis,
- keputusan yang menyentuh hak karyawan,
- tindakan pelanggan yang berpotensi sengketa,
- perubahan produksi berisiko tinggi,
- dan keputusan yang memerlukan judgement profesional formal.

Contoh:
- **finance**: adjustment material, release payment block, atau treatment exception yang berdampak signifikan;
- **procurement**: vendor baru, kontrak non-standar, atau pembelian di luar katalog dengan nilai besar;
- **customer operations**: refund besar, goodwill credit untuk pelanggan VIP, atau penyelesaian komplain yang berpotensi legal;
- **IT operations**: perubahan konfigurasi produksi, restart service kritikal, atau rollback deployment pada jam sibuk.

## Approval yang baik harus kaya konteks

Salah satu kesalahan paling umum adalah membuat approval workflow yang hanya mengirim notifikasi: *“Agent merekomendasikan tindakan X. Approve?”* Ini buruk. Reviewer manusia akan:
- bingung,
- butuh membuka banyak sistem,
- atau akhirnya menyetujui secara buta karena kelelahan.

Approval workflow yang sehat harus memberi reviewer konteks minimum yang cukup:
- rekomendasi agent,
- evidence yang dipakai,
- policy yang relevan,
- risiko utama,
- confidence atau alasan eskalasi,
- dan alternatif jika ada.

### Contoh: approval refund pelanggan

Supervisor seharusnya tidak hanya melihat angka refund. Ia perlu melihat:
- histori pelanggan,
- alasan refund,
- entitlement yang berlaku,
- apakah kasus serupa pernah terjadi,
- apakah ada sinyal abuse,
- dan mengapa agent tidak mengeksekusi otomatis.

Dengan konteks seperti ini, approval menjadi keputusan yang bermakna, bukan formalitas.

## Approval terlalu sering akan membunuh adopsi

Namun ada trade-off yang sama pentingnya: jika terlalu banyak kasus masuk approval, maka:
- cycle time memburuk,
- supervisor menjadi bottleneck,
- pengguna kehilangan kepercayaan,
- dan agent hanya menjadi mesin pembuat antrean baru.

Karena itu, threshold approval harus dirancang berdasarkan **risk tier**, bukan rasa aman berlebihan.

Pendekatan yang sehat biasanya:
- **low risk**: execute with monitoring,
- **medium risk**: execute with post-review atau sampling,
- **high risk**: execute with approval,
- **very high risk**: human-led, agent assist only.

Ini jauh lebih efektif daripada memaksa semua tindakan melewati approval.

## Desain operasional approval workflow

Agar approval tidak menjadi hambatan, perusahaan perlu memutuskan beberapa hal secara eksplisit:
- siapa approver utama dan cadangannya,
- SLA approval,
- apa yang terjadi jika approver tidak merespons,
- apakah approval bisa didelegasikan,
- dan bagaimana keputusan approval dicatat untuk pembelajaran berikutnya.

Di banyak organisasi, bottleneck bukan pada model AI, tetapi pada approval queue yang tidak didesain dengan baik.

## Escalation dan Rollback: Agent Harus Tahu Kapan Berhenti

Agent yang baik bukan hanya tahu kapan bertindak, tetapi juga **kapan tidak boleh lanjut**.

Escalation diperlukan ketika agent menghadapi kondisi seperti:
- confidence rendah,
- konflik antar-sumber data,
- policy ambiguity,
- hasil tool yang tidak konsisten,
- atau situasi di luar scope yang telah ditentukan.

Dalam kondisi seperti ini, perilaku yang benar bukan “coba terus sampai berhasil”, melainkan berhenti, menjelaskan alasan, dan mengalihkan ke manusia atau workflow lain.

### Contoh escalation yang sehat

- **Finance close**: agent menemukan dua sumber guidance yang tampak bertentangan untuk treatment exception tertentu.
- **Procurement**: data vendor master tidak konsisten dengan kontrak aktif.
- **Customer operations**: histori pelanggan menunjukkan pola abuse, tetapi entitlement formal masih terlihat valid.
- **IT operations**: runbook diagnostik memberi hasil yang saling bertentangan dan potensi dampak ke produksi meningkat.

Dalam semua kasus ini, bounded autonomy berarti agent tahu batasnya.

## Rollback, compensation, dan manual remediation

Untuk tindakan tertentu, kontrol tidak berhenti pada approval. Perusahaan juga perlu memikirkan **apa yang terjadi jika tindakan agent ternyata salah**.

Ada tiga pola umum.

### 1. Rollback
Jika sistem mendukung pembalikan langsung, ini ideal.

Contoh:
- membatalkan tiket yang salah dibuat,
- mengembalikan konfigurasi non-produksi,
- atau membatalkan status tertentu sebelum proses lanjut.

### 2. Compensation action
Jika tindakan tidak bisa dibalik langsung, sistem perlu aksi kompensasi.

Contoh:
- jika agent salah mengirim notifikasi vendor, perlu follow-up korektif;
- jika agent salah merutekan kasus pelanggan, perlu reassignment dan komunikasi ulang;
- jika agent memicu langkah proses yang salah, perlu tindakan penetral.

### 3. Manual remediation path
Untuk kasus yang lebih kompleks, perusahaan perlu jalur remediasi manual yang jelas:
- siapa yang mengambil alih,
- bagaimana insiden dicatat,
- dan bagaimana pembelajaran dimasukkan kembali ke policy atau guardrails.

Tanpa rollback atau remediation path, organisasi cenderung terlalu takut memberi otonomi, atau sebaliknya terlalu percaya diri tanpa jaring pengaman.

## Matriks Otonomi: Cara Praktis Menentukan Batas Tindakan Agent

Untuk menutup diskusi ini, cara paling praktis adalah memakai **matriks otonomi**. Tidak semua use case harus berada pada tingkat yang sama.

### 1. Assist
Agent hanya membantu mencari konteks, merangkum, atau memberi insight.  
Cocok untuk:
- domain ambigu,
- data belum stabil,
- atau proses yang masih sangat bergantung pada judgement manusia.

### 2. Draft
Agent menyiapkan rekomendasi, dokumen, atau tindakan, tetapi manusia tetap mengeksekusi.  
Cocok untuk:
- fase awal transformasi,
- domain dengan kebutuhan kontrol tinggi,
- atau proses yang ingin dipercepat tanpa memberi hak eksekusi.

### 3. Execute-with-approval
Agent dapat menyiapkan dan menjalankan tindakan setelah approval manusia.  
Cocok untuk:
- tindakan bernilai tinggi,
- regulated workflow,
- atau area yang butuh bukti kontrol formal.

### 4. Execute-with-monitoring
Agent mengeksekusi otomatis dalam batas policy yang jelas, lalu dipantau melalui observability dan sampling.  
Cocok untuk:
- volume tinggi,
- risiko rendah sampai menengah,
- tindakan reversible,
- dan domain dengan policy yang cukup matang.

Matriks ini membantu perusahaan menghindari dua ekstrem:
- terlalu cepat memberi otonomi penuh,
- atau terlalu lama menahan agent di mode assist meski proses sebenarnya sudah siap.

## Checklist Praktis

### Keputusan yang perlu diambil setelah membaca artikel ini

1. **Tentukan titik guardrails di runtime.**  
   Apakah guardrails perusahaan hanya memfilter output, atau sudah mengontrol input, retrieval, tool access, action execution, dan output?

2. **Putuskan arsitektur policy engine.**  
   Aturan apa yang harus deterministik, area mana yang boleh memakai classifier, dan bagaimana policy decision akan dicatat untuk audit?

3. **Definisikan risk tier dan threshold approval.**  
   Tindakan mana yang boleh auto-execute, mana yang perlu monitoring, mana yang wajib approval, dan mana yang harus tetap human-led?

4. **Rancang workflow approval yang benar-benar usable.**  
   Apakah approver akan menerima konteks, evidence, risiko, dan alternatif yang cukup untuk mengambil keputusan cepat dan bertanggung jawab?

5. **Siapkan jalur escalation dan remediation.**  
   Kapan agent harus berhenti, ke siapa ia mengeskalasi, dan bagaimana rollback atau compensation action dilakukan jika hasilnya salah?

### Checklist readiness singkat

- [ ] Guardrails sudah didefinisikan di lebih dari sekadar output filtering.
- [ ] Tool call dan action execution melewati kontrol runtime, bukan hanya prompt.
- [ ] Ada policy engine atau mekanisme setara yang mengevaluasi role, context, nilai transaksi, dan risk level.
- [ ] Setiap policy decision tercatat dan dapat dijelaskan.
- [ ] Threshold approval manusia ditetapkan berdasarkan risk tier, bukan kebiasaan lama.
- [ ] Approval workflow menyajikan rekomendasi agent, evidence, risiko, dan alternatif.
- [ ] Ada SLA dan owner yang jelas untuk approval queue.
- [ ] Agent memiliki kondisi stop/escalate yang eksplisit.
- [ ] Untuk tindakan penting, tersedia rollback, compensation action, atau manual remediation path.
- [ ] Tingkat otonomi agent sudah dipetakan: assist, draft, execute-with-approval, atau execute-with-monitoring.

### Sinyal bahaya bahwa topik ini belum siap di-scale

- Agent sudah bisa memanggil tool produksi, tetapi guardrails masih sebatas prompt dan content filter.
- Approval manusia dipakai untuk hampir semua kasus karena perusahaan belum percaya pada policy runtime.
- Tidak ada catatan formal mengapa tindakan diizinkan, ditolak, atau dieskalasi.
- Reviewer manusia menerima approval request tanpa evidence yang cukup.
- Tidak ada jalur rollback jika agent salah mengubah state bisnis.
- Tim bisnis, teknologi, risk, dan audit memiliki definisi berbeda tentang “aman untuk otomatis”.
- Otonomi agent dinaikkan karena tekanan efisiensi, bukan karena bukti kontrol dan kualitas.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

**Jika besok satu agent di perusahaan Anda salah mengambil tindakan yang berdampak nyata pada pelanggan, karyawan, atau transaksi, apakah Anda bisa menjelaskan dengan cepat: guardrail apa yang seharusnya menghentikannya, policy apa yang mengizinkannya, siapa yang seharusnya menyetujui, dan bagaimana sistem memulihkannya?**

Jika jawabannya belum tegas, maka fokus berikutnya bukan menambah lebih banyak agent, melainkan memperkuat **control and runtime governance** terlebih dahulu.
