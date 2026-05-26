---
title: "Performance Metrics untuk Human-Agent Teams"
sidebar_position: 30
---

# Performance Metrics untuk Human-Agent Teams

Pada tahap awal adopsi AI, banyak perusahaan masih merasa cukup dengan metrik lama: produktivitas per FTE, utilization, volume transaksi, SLA dasar, atau penghematan jam kerja. Metrik itu masih berguna, tetapi tidak lagi memadai ketika pekerjaan mulai dijalankan oleh **kombinasi manusia dan agent**.

Begitu agent masuk ke workflow enterprise—misalnya finance close, procurement intake, customer operations, IT incident triage, atau supply chain exception handling—pertanyaan pengukuran berubah secara mendasar. Bukan lagi hanya:

- berapa banyak pekerjaan selesai,
- berapa orang yang terlibat,
- atau berapa biaya yang turun,

melainkan juga:

- **berapa banyak outcome yang benar-benar tercapai,**
- **seberapa otonom agent bekerja tanpa menurunkan kualitas,**
- **berapa banyak exception yang tetap harus ditangani manusia,**
- **apakah pengguna percaya pada output agent,**
- **dan apakah kontrol bekerja efektif ketika agent diberi ruang bertindak.**

Ini penting karena agentic transformation mudah terjebak di antara dua ilusi. Ilusi pertama adalah **demo effect**: sistem terlihat canggih, responsnya cepat, dan antarmukanya meyakinkan, tetapi dampak operasionalnya kecil. Ilusi kedua adalah **automation vanity**: perusahaan bangga pada jumlah task yang “diotomasi”, padahal biaya, risiko, atau beban review manusia justru naik.

Dalam artikel sebelumnya kita membahas human-AI teaming, peran baru, reskilling, dan perubahan operating model. Artikel ini melengkapi semuanya dengan satu disiplin yang sering terlambat dibangun: **bagaimana mengukur kinerja human-agent teams secara serius**.

## Mengapa Metrik Lama Tidak Lagi Cukup

Metrik tradisional lahir dari model operasi yang relatif jelas: manusia mengerjakan tugas, sistem mendukung, dan output diukur dari volume, waktu, dan biaya. Dalam model itu, FTE utilization, throughput, backlog, dan SLA cukup representatif.

Namun dalam human-agent teams, struktur kerja berubah.

Agent dapat:
- membaca konteks,
- memanggil tool,
- menyiapkan draft,
- merutekan kasus,
- menjalankan tindakan terbatas,
- dan mengeskalasi ke manusia hanya saat perlu.

Akibatnya, satu outcome bisnis tidak lagi dihasilkan oleh satu jenis tenaga kerja. Ia dihasilkan oleh kombinasi:
- digital labor,
- human oversight,
- workflow orchestration,
- data quality,
- dan guardrail operasional.

Jika perusahaan tetap memakai metrik lama secara tunggal, beberapa distorsi akan muncul.

### 1. FTE utilization tidak menangkap nilai sebenarnya

Misalnya di finance close, utilization tim controllership bisa turun karena agent mengambil alih evidence gathering dan draft commentary. Jika dilihat dengan kacamata lama, ini bisa tampak seperti “kapasitas manusia menganggur”. Padahal yang sebenarnya terjadi adalah kapasitas manusia berpindah ke review material, root-cause analysis, dan business partnering.

Dengan kata lain, **penurunan aktivitas manual tidak selalu berarti penurunan nilai**. Kadang justru itu tanda bahwa operating model membaik.

### 2. Throughput saja tidak cukup

Di customer operations, agent mungkin meningkatkan jumlah tiket yang diproses per hari. Tetapi jika banyak kasus harus dikoreksi supervisor, atau pelanggan harus menghubungi ulang karena masalah belum benar-benar selesai, throughput tinggi justru menyesatkan.

### 3. SLA bisa tercapai secara administratif, tetapi outcome gagal

Di shared services, agent dapat merespons cepat hampir semua request. Namun jika respons itu hanya acknowledgment atau jawaban generik, SLA tampak hijau sementara resolution quality buruk.

### 4. Penghematan biaya bisa menutupi risiko yang naik

Di procurement atau IT operations, agent mungkin mengurangi beban kerja level-1. Tetapi jika unauthorized tool call, policy deviation, atau kesalahan routing meningkat, biaya yang “dihemat” bisa dibayar mahal di belakang.

Karena itu, perusahaan perlu menambah dimensi pengukuran baru. Minimal ada lima yang harus masuk ke scorecard:

- **outcome bisnis,**
- **tingkat otonomi,**
- **exception dan escalation,**
- **trust dan adopsi,**
- **serta efektivitas kontrol.**

Tanpa itu, pilot agentic AI sulit dibedakan antara eksperimen menarik dan kapabilitas yang benar-benar layak di-scale.

## Business Metrics: Mulai dari Outcome, Bukan Aktivitas

Lapisan pertama tetap harus bisnis. Agent bukan tujuan. Agent adalah cara baru untuk menghasilkan outcome.

Karena itu, metrik utama harus tetap menjawab: **apakah proses bisnis membaik setelah agent diterapkan?**

Beberapa metrik yang paling relevan biasanya meliputi:

- **cycle time**,
- **cost per transaction atau cost per case**,
- **throughput**,
- **SLA achievement**,
- **customer satisfaction atau internal user satisfaction**,
- **revenue leakage atau loss avoidance** untuk use case tertentu.

### Contoh per domain

#### Finance close
Ukur:
- waktu close,
- waktu penyelesaian exception,
- jumlah akun yang terlambat direview,
- kualitas draft commentary,
- dan backlog issue yang terbawa ke periode berikutnya.

Jika close agent hanya mempercepat drafting tetapi tidak mengurangi bottleneck review, maka nilai bisnisnya masih terbatas.

#### Procurement operations
Ukur:
- cycle time dari intake ke PO,
- persentase request yang masuk jalur yang benar sejak awal,
- rework rate,
- kepatuhan terhadap policy sourcing,
- dan kepuasan requester internal.

Agent yang cepat tetapi sering salah klasifikasi akan menambah beban buyer, bukan mengurangi.

#### Customer operations
Ukur:
- first-contact resolution,
- average resolution time,
- repeat contact rate,
- customer satisfaction,
- dan nilai refund atau concession yang tidak perlu.

#### IT operations
Ukur:
- mean time to triage,
- mean time to resolve,
- incident backlog,
- change failure impact,
- dan kualitas handoff dari agent ke engineer.

#### Supply chain
Ukur:
- exception resolution time,
- service level,
- inventory availability,
- expedite cost,
- dan dampak terhadap order fulfillment.

### Baseline sebelum implementasi wajib ada

Ini disiplin yang sering diabaikan. Banyak tim langsung meluncurkan agent lalu membandingkan hasilnya dengan persepsi, bukan baseline nyata.

Padahal tanpa baseline, perusahaan tidak bisa menjawab:
- apakah cycle time benar-benar membaik,
- apakah biaya per outcome turun,
- atau apakah perbaikan sebenarnya berasal dari faktor lain seperti perubahan policy, perbaikan data, atau redesign proses manual.

Minimal, sebelum agent live, perusahaan perlu mendokumentasikan:
- volume kasus,
- waktu penyelesaian,
- error atau rework rate,
- biaya operasional,
- dan kualitas outcome saat ini.

### Hati-hati dengan value attribution

Tidak semua perbaikan setelah implementasi agent berasal dari agent.

Contoh:
- cycle time procurement bisa turun karena approval matrix disederhanakan, bukan semata karena agent intake;
- kualitas close bisa membaik karena data mapping diperbaiki;
- customer satisfaction bisa naik karena knowledge base dibersihkan.

Ini bukan masalah. Justru sering kali nilai datang dari kombinasi redesign proses, data cleanup, dan agent. Tetapi perusahaan harus jujur dalam **value attribution**. Jika semua perbaikan diklaim sebagai hasil AI, business case akan rapuh dan governance kehilangan kredibilitas.

## Agent Performance Metrics: Mengukur Kualitas Digital Labor

Setelah outcome bisnis, lapisan kedua adalah kinerja agent itu sendiri. Ini penting karena business metric yang baik belum tentu berarti agent sehat. Bisa saja hasil bisnis membaik sementara biaya komputasi melonjak, correction rate tinggi, atau supervisor diam-diam menanggung beban besar.

Beberapa metrik inti yang perlu dipantau:

- **success rate**,
- **escalation rate**,
- **tool failure rate**,
- **correction rate**,
- **hallucination rate**,
- **confidence calibration**.

### 1. Success rate

Ini bukan sekadar “agent memberi jawaban”. Definisikan success sebagai **outcome yang selesai sesuai tujuan dan tidak perlu koreksi material**.

Contoh:
- di service desk, success berarti request selesai benar, bukan hanya tiket ditutup;
- di finance, success berarti draft atau rekomendasi dapat dipakai reviewer dengan koreksi minimal;
- di procurement, success berarti request dirutekan benar dan tidak memicu rework.

### 2. Escalation rate

Escalation rate menunjukkan berapa banyak kasus yang harus naik ke manusia. Ini metrik penting, tetapi harus dibaca dengan konteks.

- Terlalu tinggi: agent terlalu konservatif atau belum cukup matang.
- Terlalu rendah: agent mungkin terlalu agresif dan berisiko melewati kasus yang seharusnya dieskalasi.

Jadi targetnya bukan selalu “serendah mungkin”, melainkan **sesuai risk tier dan desain workflow**.

### 3. Tool failure rate

Banyak kegagalan agent bukan karena reasoning, tetapi karena integrasi:
- API gagal,
- data tidak tersedia,
- permission salah,
- atau tool timeout.

Jika tool failure tinggi, masalahnya ada pada arsitektur dan platform, bukan semata model.

### 4. Correction rate

Ini salah satu metrik paling jujur. Berapa sering manusia harus memperbaiki output agent?

Correction rate sangat berguna di:
- draft commentary finance,
- rekomendasi respons customer,
- klasifikasi procurement intake,
- incident triage,
- atau ringkasan exception supply chain.

Jika correction rate tinggi, produktivitas semu sedang terjadi: agent tampak aktif, tetapi manusia tetap mengulang pekerjaan.

### 5. Hallucination rate

Untuk workflow yang melibatkan reasoning berbasis dokumen, knowledge, atau data enterprise, perusahaan perlu melacak seberapa sering agent:
- mengutip policy yang tidak ada,
- menyimpulkan fakta yang tidak didukung evidence,
- atau memberi jawaban meyakinkan tetapi salah.

Tidak semua organisasi bisa mengukur ini secara sempurna, tetapi sampling review dan audit kasus bisa memberi indikator awal.

### 6. Confidence calibration

Agent yang baik bukan hanya sering benar, tetapi juga tahu kapan ia tidak yakin.

Jika confidence tinggi justru muncul pada kasus yang sering salah, calibration buruk. Ini berbahaya karena pengguna akan lebih mudah tertipu oleh output yang terdengar pasti.

### Workflow multi-agent butuh metrik tambahan

Jika perusahaan memakai orchestrator dan beberapa task agent, tambahkan dua metrik penting:

- **handoff quality**: apakah konteks berpindah dengan benar antar-agent atau ke manusia?
- **orchestration failure**: berapa sering workflow gagal karena urutan langkah, dependency, atau routing yang salah?

Dalam IT delivery, misalnya, requirement agent, coding agent, QA agent, dan reviewer agent bisa masing-masing tampak baik, tetapi keseluruhan workflow tetap gagal jika handoff buruk.

### Jangan lupakan cost per successful outcome

Ini metrik yang semakin penting seiring skala naik. Token, compute, retrieval, dan tool invocation bisa naik diam-diam.

Karena itu, jangan hanya ukur cost per run atau cost per prompt. Ukur **cost per successful outcome**.

Ini membantu menjawab pertanyaan yang lebih strategis:
- apakah agent benar-benar lebih ekonomis daripada model kerja lama,
- apakah otonomi tambahan sepadan dengan biaya,
- dan apakah ada use case yang secara teknis berhasil tetapi secara ekonomi tidak sehat.

## Trust dan Risk Metrics: Karena Adopsi Tanpa Kepercayaan Tidak Akan Bertahan

Human-agent teams tidak akan stabil jika pengguna tidak percaya pada sistem, atau jika risk function merasa kontrolnya kabur. Karena itu, perusahaan perlu mengukur dua hal sekaligus: **trust** dan **risk**.

## Trust metrics

Beberapa indikator yang paling berguna:

- **user acceptance rate**,
- **override rate**,
- **explanation usefulness**,
- **repeat usage**.

### User acceptance rate
Berapa sering pengguna menerima rekomendasi atau output agent tanpa perlu mengganti total?

Ini penting untuk melihat apakah agent benar-benar usable dalam operasi nyata.

### Override rate
Berapa sering manusia menolak atau mengganti keputusan agent?

Override rate tinggi bisa berarti kualitas rendah, trust rendah, atau policy yang belum selaras. Tetapi override rate nol juga tidak otomatis baik. Bisa jadi pengguna pasif atau tidak cukup kritis.

### Explanation usefulness
Apakah penjelasan agent membantu pengguna memahami alasan di balik rekomendasi?

Di domain seperti finance, procurement, dan IT operations, explanation yang berguna sering lebih penting daripada jawaban cepat. Tanpa itu, trust sulit tumbuh.

### Repeat usage
Apakah pengguna kembali memakai agent ketika tidak diwajibkan?

Repeat usage adalah indikator sederhana tetapi kuat. Jika orang hanya memakai agent karena diminta, adopsi masih dangkal.

## Risk metrics

Lapisan ini harus dibaca bersama risk, compliance, security, dan audit internal. Beberapa metrik inti:

- **policy violations**,
- **data exposure incidents**,
- **unauthorized tool calls**,
- **audit findings**.

### Policy violations
Misalnya:
- agent memberi rekomendasi di luar delegated authority,
- melanggar threshold approval,
- atau merutekan kasus ke jalur yang tidak sesuai policy.

### Data exposure incidents
Apakah agent menampilkan data yang tidak seharusnya diakses pengguna atau tool tertentu?

Ini sangat penting untuk workflow yang menyentuh ERP, HRIS, CRM, atau data pelanggan.

### Unauthorized tool calls
Apakah agent mencoba atau berhasil memanggil tool yang tidak diizinkan?

Metrik ini penting terutama pada agent yang terhubung ke sistem transaksi atau workflow execution.

### Audit findings
Apa temuan audit internal atau compliance review terhadap operasi agent?

Jika audit trail lemah, evidence tidak lengkap, atau approval path tidak jelas, skala harus ditahan meski business metric tampak bagus.

## Scorecard gabungan: value, quality, risk, adoption

Pada akhirnya, perusahaan perlu satu scorecard yang tidak berat sebelah. Struktur sederhananya bisa seperti ini:

| Dimensi | Contoh Metrik |
|---|---|
| Value | cycle time, cost per transaction, throughput, SLA, customer/internal satisfaction |
| Quality | success rate, correction rate, hallucination rate, handoff quality |
| Adoption & Trust | acceptance rate, override rate, repeat usage, explanation usefulness |
| Risk & Control | policy violations, unauthorized tool calls, data exposure incidents, audit findings |
| Efficiency of Digital Labor | cost per successful outcome, tool failure rate, escalation rate |

Scorecard seperti ini membantu eksekutif menghindari dua kesalahan:
1. hanya melihat value tanpa melihat risiko, atau  
2. terlalu fokus pada risiko sampai tidak pernah mengukur outcome nyata.

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

1. **Tentukan unit of measurement utama.**  
   Apakah Anda akan mengukur per task, per case, per transaction, atau per successful outcome? Untuk human-agent teams, ukuran terakhir biasanya paling berguna.

2. **Sepakati baseline sebelum scale.**  
   Jangan meluncurkan agent tanpa data pembanding untuk cycle time, cost, quality, dan exception rate.

3. **Bangun scorecard lintas fungsi.**  
   CIO, COO, risk, dan pemilik proses harus menyepakati kombinasi metrik value, quality, adoption, dan risk—bukan masing-masing memakai dashboard sendiri.

4. **Definisikan siapa pemilik tiap metrik.**  
   Business owner memegang outcome bisnis, platform team memegang reliability dan cost, supervisor memegang correction dan escalation pattern, risk owner memegang control metrics.

5. **Tentukan ambang untuk scale, pause, atau rollback.**  
   Misalnya: kapan correction rate terlalu tinggi, kapan policy violation membuat use case harus ditahan, atau kapan cost per successful outcome tidak lagi masuk akal.

### Checklist readiness singkat

- [ ] Ada baseline proses sebelum agent diterapkan.
- [ ] Outcome bisnis utama sudah didefinisikan jelas.
- [ ] Success untuk agent didefinisikan sebagai outcome yang usable, bukan sekadar output.
- [ ] Correction rate, escalation rate, dan tool failure dipantau rutin.
- [ ] Ada mekanisme sampling atau audit untuk mendeteksi hallucination dan policy deviation.
- [ ] Trust metrics seperti acceptance, override, dan repeat usage sudah masuk dashboard.
- [ ] Risk metrics dibahas bersama fungsi kontrol, bukan hanya tim teknologi.
- [ ] Cost per successful outcome dipantau, bukan hanya total biaya model.
- [ ] Ada forum review berkala untuk memutuskan scale, redesign, atau rollback.

### Sinyal bahaya bahwa topik ini belum siap di-scale

- [ ] Keberhasilan masih diukur terutama dari jumlah automasi atau pengurangan jam kerja.
- [ ] Tidak ada baseline yang kredibel sebelum implementasi.
- [ ] Tim bisnis, IT, dan risk memakai definisi “success” yang berbeda-beda.
- [ ] Override dan correction tinggi, tetapi tidak masuk backlog perbaikan.
- [ ] Token dan compute cost naik, tetapi tidak dikaitkan dengan outcome.
- [ ] Audit trail belum cukup untuk menjelaskan mengapa agent mengambil tindakan tertentu.
- [ ] Pengguna memakai agent karena diwajibkan, bukan karena membantu pekerjaan.
- [ ] Policy violation dianggap “noise kecil” selama business metric tampak membaik.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

**Jika besok Anda diminta membuktikan bahwa human-agent team di perusahaan benar-benar menciptakan nilai, apakah Anda hanya bisa menunjukkan demo dan tingkat penggunaan—atau sudah bisa menunjukkan scorecard yang seimbang antara outcome, kualitas, adopsi, biaya, dan kontrol?**

Itulah perbedaan antara eksperimen AI yang menarik dan operating model agentic yang siap di-scale.
