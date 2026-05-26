---
title: "Memilih Value Pool Agentic AI yang Layak Dikejar"
sidebar_position: 10
---

# Memilih Value Pool Agentic AI yang Layak Dikejar

Pada artikel sebelumnya, kita membahas **maturity model** untuk memahami posisi perusahaan dalam perjalanan menuju agentic enterprise. Langkah berikutnya lebih strategis dan sering lebih sulit: **memilih value pool mana yang benar-benar layak dikejar**.

Ini penting karena banyak program AI gagal bukan saat demo, melainkan saat harus dibawa ke produksi dan dipertanggungjawabkan di depan CFO, COO, CIO, risk, dan pemilik proses. Secara teknis, pilot bisa terlihat berhasil. Model menjawab dengan baik, agent mampu memanggil tool, dan pengguna awal merasa terbantu. Namun ketika ditanya lebih jauh—*nilai bisnisnya apa, seberapa besar, seberapa cepat, dan apakah layak diberi prioritas dibanding inisiatif lain*—jawabannya sering kabur.

Untuk agentic AI, masalah ini lebih tajam daripada pada copilot biasa. Alasannya sederhana: **agentic AI membutuhkan integrasi, kontrol, observability, dan governance yang lebih berat**. Jika use case yang dipilih terlalu kecil, terlalu lokal, atau terlalu ambigu, biaya organisasi untuk membangunnya sering lebih besar daripada nilai yang dihasilkan.

Karena itu, pemilihan use case tidak boleh dimulai dari pertanyaan, *“model ini bisa dipakai untuk apa?”* Pertanyaan yang lebih tepat adalah:

- pain bisnis mana yang cukup besar untuk dibenahi,
- workflow mana yang cukup penting untuk didesain ulang,
- domain mana yang cukup siap untuk dieksekusi agent,
- dan capability apa yang bisa dipakai ulang di banyak area.

Artikel ini menawarkan kerangka praktis untuk menjawab pertanyaan tersebut.

## Keluar dari Pilot Purgatory

Banyak organisasi terjebak dalam kondisi yang bisa disebut **pilot purgatory**: ada banyak eksperimen, ada beberapa demo yang mengesankan, bahkan ada use case yang “berhasil” secara teknis, tetapi tidak ada yang benar-benar menjadi kapabilitas operasional berskala.

Penyebabnya jarang semata-mata teknologi. Hambatan utamanya biasanya ada pada tiga hal.

### 1. Use case terlalu kecil untuk menanggung biaya enterprise

Sebuah agent yang membantu merangkum email internal atau menyiapkan draft respons mungkin berguna. Tetapi jika nilai bisnisnya hanya menghemat beberapa menit kerja di area yang tidak kritikal, maka sulit membenarkan investasi pada:
- integrasi ke sistem inti,
- kontrol akses,
- policy engine,
- logging dan audit trail,
- evaluasi,
- serta perubahan operating model.

Untuk copilot individual, ini mungkin masih masuk akal. Untuk agentic execution, sering tidak.

### 2. Use case tidak terhubung ke value pool yang diakui eksekutif

Banyak pilot dipilih karena mudah didemokan, bukan karena penting bagi bisnis. Akibatnya, ketika program harus naik kelas ke produksi, sponsor eksekutif melemah. Tidak ada pemilik P&L yang merasa ini cukup material. Tidak ada domain owner yang mau mengubah proses. Dan tidak ada alasan kuat untuk memprioritaskan integrasi atau governance.

### 3. Fokus pada kemampuan model, bukan pada pain bisnis

Organisasi sering memulai dari kemampuan teknis: document understanding, summarization, reasoning, workflow automation, atau multi-agent orchestration. Semua itu penting, tetapi bukan titik awal pemilihan value pool.

Titik awal yang lebih sehat adalah:
- di mana perusahaan kehilangan waktu,
- di mana working capital tertahan,
- di mana exception menumpuk,
- di mana keputusan lambat,
- di mana risiko kontrol tinggi,
- dan di mana pengalaman pelanggan atau karyawan rusak karena handoff yang buruk.

Dengan kata lain, **agentic AI harus diposisikan sebagai alat untuk memperbaiki economics dan control profile dari workflow penting**, bukan sebagai eksperimen teknologi yang mencari masalah.

## Mulai dari Pain Bisnis, Bukan dari Demo yang Menarik

Value pool yang layak biasanya muncul pada workflow yang memiliki kombinasi berikut:
- volume cukup besar,
- banyak handoff atau exception,
- ketergantungan pada beberapa sistem,
- kebutuhan keputusan berulang,
- dan dampak nyata pada biaya, pendapatan, risiko, atau kecepatan.

Contohnya:
- **finance close**: exception rekonsiliasi, jurnal, commentary, dan evidence pack;
- **procurement**: intake-to-PO, vendor onboarding, invoice exception, approval routing;
- **customer operations**: complaint resolution, refund eligibility, order exception handling;
- **IT operations**: incident triage, runbook execution, change risk assessment;
- **supply chain**: shipment exception, allocation issue, supplier disruption response;
- **shared services/GCC**: case management lintas HR, finance, procurement, dan IT.

Sebaliknya, workflow yang sangat kecil, tidak kritikal, atau hanya menyentuh produktivitas personal biasanya lebih cocok untuk pendekatan copilot, bukan agentic transformation.

## Dimensi Pertama: Value yang Benar-Benar Ingin Dikejar

Setelah area pain teridentifikasi, langkah berikutnya adalah mendefinisikan **jenis nilai** yang ingin ditangkap. Ini terdengar sederhana, tetapi banyak business case AI gagal karena semua nilai dicampur menjadi narasi umum tentang “efisiensi” atau “produktivitas”.

Padahal, value pool agentic AI biasanya datang dari beberapa kategori yang berbeda.

## Nilai finansial: lebih dari sekadar cost reduction

Kategori pertama tentu adalah **nilai finansial**. Namun cost reduction hanyalah salah satu bentuknya.

### Cost reduction
Ini paling mudah dipahami, terutama pada proses volume tinggi dan berulang. Misalnya:
- pengurangan effort manual pada AP exception handling,
- penurunan beban service desk level 1,
- pengurangan rework pada customer case management,
- atau penurunan effort koordinasi saat finance close.

Tetapi cost reduction sering menjadi jebakan jika dipakai terlalu dini. Banyak organisasi mengklaim penghematan FTE sebelum proses benar-benar didesain ulang. Yang lebih sehat adalah mulai dari pengurangan effort, cycle time, atau backlog, lalu melihat implikasi kapasitas secara realistis.

### Working capital improvement
Ini sering lebih menarik bagi CFO daripada sekadar efisiensi tenaga kerja.

Contoh:
- agent collections mempercepat follow-up dan dispute resolution;
- agent AP membantu mengurangi invoice tertahan;
- agent procurement mempercepat intake dan PO issuance sehingga mengurangi pembelian darurat;
- agent supply chain membantu mengurangi stok pengaman berlebih karena exception ditangani lebih cepat.

Dalam banyak perusahaan, value pool working capital justru lebih material daripada penghematan biaya langsung.

### Revenue uplift
Tidak semua value pool agentic AI ada di back office.

Di customer operations atau sales support, agent dapat:
- mempercepat respons pelanggan,
- meningkatkan conversion pada lead handling,
- mengurangi churn akibat service failure,
- atau mempercepat penyelesaian order exception yang sebelumnya menghambat penagihan.

Namun revenue uplift harus diperlakukan hati-hati. Hubungannya sering tidak langsung, sehingga baseline dan attribution harus lebih disiplin.

### Risk reduction
Untuk domain regulated, ini bisa menjadi value pool utama.

Contoh:
- agent policy checking di procurement atau finance,
- evidence pack generation untuk audit,
- deteksi deviasi proses,
- atau triage kasus yang berpotensi fraud atau compliance breach.

Nilai risk reduction sering sulit diterjemahkan menjadi angka tunggal, tetapi tetap sah sebagai value pool—asal baseline dan indikatornya jelas.

### Faster cycle time
Dalam banyak workflow, kecepatan sendiri adalah sumber nilai.

Contoh:
- close lebih cepat,
- onboarding vendor lebih cepat,
- incident resolution lebih cepat,
- customer complaint lebih cepat selesai,
- atau perubahan order lebih cepat diproses.

Cycle time yang lebih cepat bisa berdampak ke biaya, pengalaman pelanggan, working capital, dan ketahanan operasi sekaligus.

## Nilai strategis: tidak selalu langsung terlihat di P&L

Selain nilai finansial, ada **nilai strategis** yang sering menentukan prioritas eksekutif.

### Customer experience
Jika agentic AI memperbaiki kualitas dan konsistensi layanan pada momen yang penting, nilainya bisa sangat besar meski tidak langsung terlihat sebagai penghematan biaya.

### Speed-to-market
Di fungsi seperti product operations, IT delivery, atau supply chain planning, agentic capability dapat mempercepat siklus perubahan dan respons terhadap pasar.

### Regulatory confidence
Untuk industri yang heavily regulated, kemampuan menghasilkan jejak kontrol, evidence, dan policy adherence yang lebih baik bisa menjadi alasan utama investasi.

### Competitive differentiation
Beberapa value pool layak dikejar bukan karena menghemat biaya, tetapi karena mengubah cara perusahaan bersaing. Misalnya pengalaman layanan yang jauh lebih responsif, atau operating model GCC/shared services yang lebih scalable.

## Baseline adalah syarat, bukan formalitas

Apa pun jenis nilainya, setiap value pool harus punya **baseline**. Tanpa baseline, ROI akan berubah menjadi cerita yang sulit diuji.

Minimal, sebelum memilih use case, perusahaan perlu tahu:
- berapa cycle time saat ini,
- berapa volume transaksi atau kasus,
- berapa exception rate,
- berapa backlog,
- berapa tingkat rework,
- berapa SLA miss,
- dan di mana biaya atau risiko benar-benar muncul.

Contoh di **finance close**:
jangan mulai dari klaim “agent akan mempercepat close”. Mulailah dari baseline seperti:
- langkah mana yang paling banyak menimbulkan keterlambatan,
- exception apa yang paling sering berulang,
- berapa lama waktu yang habis untuk evidence gathering,
- dan berapa banyak effort senior staff tersedot ke koordinasi.

Contoh di **customer operations**:
jangan hanya berkata “agent akan meningkatkan CX”. Ukur dulu:
- average handling time,
- first-contact resolution,
- jumlah eskalasi,
- dan jenis kasus yang paling sering macet.

Tanpa baseline, organisasi akan sulit membedakan nilai nyata dari antusiasme awal pengguna.

## Dimensi Kedua: Feasibility yang Realistis

Value tinggi saja tidak cukup. Banyak workflow bernilai besar justru belum siap untuk agentic execution. Karena itu, dimensi kedua adalah **feasibility**.

Secara praktis, feasibility ditentukan oleh lima pertanyaan.

## 1. Apakah data dan konteksnya cukup tersedia?

Jika data tersebar, definisi bisnis tidak konsisten, atau knowledge corpus belum terkurasi, agent akan sering salah konteks. Workflow yang sangat bergantung pada pengetahuan tacit dan dokumen yang tidak terstruktur mungkin bernilai tinggi, tetapi belum siap untuk fase awal.

## 2. Apakah sistem dan API cukup siap?

Jika use case membutuhkan interaksi dengan ERP, CRM, HRIS, atau core systems, perusahaan harus menilai apakah:
- akses read tersedia,
- action bisa dilakukan lewat API yang governable,
- event tersedia,
- dan kontrol akses bisa diterapkan dengan baik.

Jika semua masih bergantung pada UI automation rapuh, feasibility turun.

## 3. Apakah prosesnya cukup stabil?

Ini poin yang sering diabaikan. Workflow yang sangat kacau, penuh variasi lokal, dan tidak terdokumentasi memang tampak menarik untuk “dibantu AI”. Tetapi justru karena terlalu ambigu, ia sering buruk sebagai kandidat awal untuk agentic execution.

Agentic AI bukan pengganti disiplin proses dasar. Jika proses belum punya definisi outcome, jalur exception, dan ownership yang jelas, agent hanya akan mempercepat kekacauan.

## 4. Apakah domain owner benar-benar berkomitmen?

Banyak use case gagal bukan karena model, tetapi karena pemilik proses tidak siap mengubah cara kerja. Agentic AI hampir selalu menuntut:
- redesign handoff,
- redefinisi approval,
- perubahan peran manusia,
- dan pengukuran baru.

Jika domain owner hanya ingin “tambahkan AI” tanpa mengubah proses, feasibility praktis rendah.

## 5. Apakah risiko bisa dikendalikan?

Beberapa workflow terlalu sensitif untuk dijadikan gelombang pertama, misalnya:
- posting jurnal material,
- perubahan vendor master berisiko tinggi,
- keputusan kompensasi,
- persetujuan kredit,
- atau tindakan pelanggan bernilai besar tanpa kontrol.

Bukan berarti area ini tidak layak selamanya. Hanya saja, untuk fase awal, bounded autonomy mungkin belum tepat.

## Scoring sederhana: value, feasibility, risk, reusability

Agar diskusi tidak terlalu subjektif, perusahaan bisa memakai scoring sederhana per use case, misalnya skala **1 sampai 5** untuk empat dimensi:

- **Value**: seberapa besar dampak bisnis jika berhasil?
- **Feasibility**: seberapa siap data, proses, integrasi, dan owner?
- **Risk**: seberapa besar dampak jika agent salah?
- **Reusability**: seberapa banyak capability yang bisa dipakai ulang?

Contoh sederhana:

| Use case | Value | Feasibility | Risk | Reusability |
|---|---:|---:|---:|---:|
| AP invoice exception triage | 4 | 4 | 2 | 5 |
| Finance journal posting | 5 | 2 | 5 | 3 |
| Customer refund eligibility | 4 | 3 | 3 | 4 |
| Vendor onboarding document check | 4 | 4 | 3 | 5 |
| IT incident enrichment & triage | 4 | 4 | 2 | 4 |

Skor ini bukan rumus otomatis. Fungsinya adalah memaksa percakapan lintas bisnis, teknologi, dan risk menjadi lebih konkret.

## Dimensi Ketiga: Reusability, Pembeda antara Use Case dan Platform Asset

Salah satu kesalahan paling mahal adalah memilih use case yang hanya menyelesaikan satu masalah sempit tanpa membangun capability yang bisa dipakai ulang.

Dalam agentic enterprise, use case terbaik biasanya melakukan dua hal sekaligus:
1. menyelesaikan pain bisnis yang nyata, dan
2. membangun **reusable capability** untuk domain lain.

## Capability reusable yang paling sering bernilai

Beberapa capability yang sering muncul lintas fungsi antara lain:

### Document understanding
Berguna untuk:
- invoice,
- kontrak,
- formulir onboarding,
- dokumen klaim,
- evidence audit,
- dan korespondensi pelanggan.

### Exception triage
Berguna di:
- AP,
- collections,
- customer complaints,
- IT incidents,
- shipment exceptions,
- dan HR case management.

### Approval routing
Berguna untuk:
- procurement,
- HR requests,
- finance approvals,
- IT change,
- dan exception handling lintas fungsi.

### Evidence pack generation
Sangat relevan untuk:
- finance close,
- audit support,
- compliance review,
- vendor due diligence,
- dan regulated operations.

### Policy checking
Bisa dipakai di:
- procurement policy,
- HR policy,
- finance controls,
- customer entitlement,
- dan IT change governance.

Jika perusahaan memilih use case yang membangun capability seperti ini, maka biaya per agent akan turun seiring portofolio berkembang. Sebaliknya, jika setiap use case dibangun sebagai solusi unik, organisasi akan cepat jatuh ke **agent sprawl**.

## Contoh: dari satu use case ke capability lintas domain

Misalnya perusahaan memulai dari **vendor onboarding document check**. Jika dibangun dengan benar, capability yang tercipta bukan hanya “agent vendor onboarding”, tetapi:
- document extraction,
- completeness checking,
- policy validation,
- approval routing,
- dan evidence logging.

Capability yang sama kemudian bisa dipakai untuk:
- customer onboarding,
- employee onboarding,
- contract intake,
- atau compliance review.

Inilah alasan mengapa reusability harus menjadi dimensi eksplisit dalam pemilihan value pool, bukan bonus yang diharapkan muncul belakangan.

## Trade-off: jangan mengejar reusability sampai kehilangan nilai awal

Meski penting, reusability juga punya jebakan. Jika terlalu dini mengejar platform yang “bisa untuk semua”, perusahaan bisa kehilangan momentum bisnis. Use case pertama menjadi terlalu abstrak, terlalu generik, dan tidak pernah benar-benar menyelesaikan masalah nyata.

Prinsip yang lebih sehat:
- **mulai dari pain bisnis yang konkret,**
- tetapi desain capability-nya agar tidak sepenuhnya sekali pakai.

## Menyeimbangkan Portofolio: Quick Wins, Strategic Bets, Platform, dan Risk-Control

Setelah menilai value, feasibility, dan reusability, perusahaan perlu melihat portofolio secara keseluruhan. Ini penting karena transformasi agentic tidak akan berhasil jika semua investasi diarahkan ke satu jenis use case saja.

Portofolio yang sehat biasanya menyeimbangkan empat kategori.

## 1. Quick wins
Use case dengan feasibility tinggi, risiko relatif rendah, dan nilai yang cukup cepat terlihat.

Contoh:
- AP exception triage,
- IT incident enrichment,
- vendor onboarding document check,
- customer case summarization plus routing.

Perannya penting untuk membangun kepercayaan, membuktikan operating model, dan melatih organisasi.

## 2. Strategic bets
Use case dengan nilai besar dan dampak transformasional, tetapi lebih kompleks atau lebih berat secara perubahan.

Contoh:
- finance close orchestration,
- supply chain exception control tower,
- end-to-end customer issue resolution,
- GCC/shared services redesign berbasis agentic services.

Perannya adalah membuka value pool yang benar-benar material. Namun jika portofolio hanya berisi strategic bets, organisasi akan cepat lelah.

## 3. Platform investments
Ini bukan use case bisnis tunggal, tetapi capability yang memungkinkan banyak use case berjalan lebih murah dan lebih aman.

Contoh:
- tool registry,
- policy engine,
- observability,
- identity untuk agents,
- reusable document understanding service,
- enterprise memory dan context layer.

Tanpa investasi ini, quick wins akan sulit diskalakan.

## 4. Risk-control initiatives
Beberapa inisiatif tidak langsung menghasilkan nilai bisnis besar, tetapi penting untuk memungkinkan skala.

Contoh:
- approval workflow,
- audit logging,
- model evaluation,
- access control,
- data permissioning,
- dan incident response untuk agent behavior.

Sering kali kategori ini diabaikan karena tidak “menjual” di slide bisnis. Padahal tanpa ini, strategic bets tidak akan lolos ke produksi.

## Bahaya portofolio yang tidak seimbang

Ada dua pola ekstrem yang sering muncul.

### Terlalu banyak quick wins
Hasilnya organisasi tampak aktif, tetapi transformasinya dangkal. Banyak use case kecil hidup sendiri-sendiri, tidak membangun capability reusable, dan tidak mengubah economics proses inti.

### Terlalu banyak strategic bets
Hasilnya organisasi kelelahan. Integrasi berat, perubahan proses besar, governance belum matang, dan sponsor bisnis kehilangan kesabaran sebelum nilai terlihat.

Portofolio yang sehat biasanya membutuhkan kombinasi:
- beberapa quick wins untuk momentum,
- satu atau dua strategic bets untuk arah transformasi,
- investasi platform yang disengaja,
- dan risk-control yang dibangun sejak awal.

## Template Portfolio Board untuk Executive Review

Agar keputusan tidak tersebar per fungsi, perusahaan sebaiknya memiliki **portfolio board** untuk meninjau kandidat value pool secara berkala. Bukan komite yang hanya membahas teknologi, tetapi forum lintas bisnis, teknologi, risk, dan operasi.

Template review yang praktis bisa memuat kolom berikut:

| Kandidat value pool | Pain bisnis | Jenis nilai | Baseline tersedia? | Feasibility | Risk posture | Reusability | Sponsor bisnis | Keputusan |
|---|---|---|---|---|---|---|---|---|
| AP exception triage | Backlog tinggi, invoice tertahan | Cost, cycle time, working capital | Ya | Tinggi | Rendah-sedang | Tinggi | Head of AP | Lanjut pilot produksi |
| Finance close orchestration | Close lambat, koordinasi manual | Cycle time, control, audit readiness | Sebagian | Sedang | Sedang-tinggi | Tinggi | Controller | Discovery lebih dalam |
| Customer refund agent | Eskalasi tinggi, SLA buruk | CX, cycle time, cost | Ya | Sedang | Sedang | Sedang | Customer Ops Lead | Pilot terbatas |
| Journal posting agent | Effort tinggi | Cost, speed | Lemah | Rendah | Tinggi | Sedang | CFO org | Tunda |

Forum seperti ini memaksa organisasi menjawab pertanyaan yang benar:
- apakah ini cukup penting,
- apakah cukup siap,
- apakah cukup aman,
- dan apakah membangun asset yang bisa dipakai ulang.

# Checklist Praktis

Gunakan checklist berikut saat memilih value pool agentic AI.

## 1. Mulai dari pain bisnis
- [ ] Use case berangkat dari bottleneck bisnis yang nyata, bukan dari demo model.
- [ ] Ada pemilik proses yang mengakui masalah tersebut sebagai prioritas.
- [ ] Workflow yang dipilih cukup material bagi operasi atau P&L.

## 2. Definisikan jenis nilai dengan jelas
- [ ] Nilai utama diklasifikasikan: cost, working capital, revenue, risk, atau cycle time.
- [ ] Nilai strategis juga dinyatakan eksplisit: CX, speed-to-market, regulatory confidence, atau differentiation.
- [ ] Ada baseline operasional sebelum pilot dimulai.

## 3. Uji feasibility secara jujur
- [ ] Data dan knowledge yang dibutuhkan cukup tersedia dan dapat dipercaya.
- [ ] API atau jalur integrasi ke sistem inti cukup siap.
- [ ] Proses cukup stabil untuk di-agent-kan.
- [ ] Domain owner siap mengubah workflow, bukan hanya menambahkan AI.
- [ ] Risk owner setuju bahwa bounded autonomy atau human-in-the-loop dapat dirancang dengan aman.

## 4. Nilai reusability, bukan hanya hasil lokal
- [ ] Use case membangun capability reusable seperti document understanding, triage, routing, evidence, atau policy checking.
- [ ] Desain awal tidak sepenuhnya sekali pakai.
- [ ] Ada pandangan jelas bagaimana capability ini bisa dipakai di domain lain.

## 5. Seimbangkan portofolio
- [ ] Portofolio memiliki quick wins untuk momentum.
- [ ] Ada strategic bet yang cukup besar untuk mengubah economics proses inti.
- [ ] Ada investasi platform yang disengaja.
- [ ] Ada inisiatif risk-control yang berjalan paralel.

## 6. Gunakan scoring sederhana untuk prioritisasi
- [ ] Setiap kandidat dinilai pada value, feasibility, risk, dan reusability.
- [ ] Skor dibahas lintas bisnis, teknologi, dan risk.
- [ ] Keputusan dibuat di forum portofolio, bukan per tim secara terpisah.

## 7. Waspadai sinyal bahaya
Tunda atau turunkan prioritas jika:
- [ ] use case hanya menghemat waktu kecil pada aktivitas non-kritikal,
- [ ] baseline tidak tersedia,
- [ ] proses sangat ambigu dan belum punya owner yang kuat,
- [ ] integrasi ke sistem inti masih rapuh,
- [ ] risiko tinggi tetapi guardrail belum jelas,
- [ ] atau capability yang dibangun tidak punya potensi reuse.

Jika harus diringkas dalam satu prinsip, maka prinsipnya adalah ini:

> **Pilih value pool yang cukup besar untuk membenarkan integrasi dan governance, cukup siap untuk dieksekusi, dan cukup reusable untuk menjadi fondasi portofolio—bukan sekadar pilot yang terlihat pintar.**

Itulah titik awal agar agentic AI tidak berhenti sebagai eksperimen, tetapi benar-benar menjadi lapisan eksekusi perusahaan.
