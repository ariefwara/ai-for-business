---
title: "Roadmap 90 Hari Membangun Agentic Enterprise Pilot"
sidebar_position: 32
---

# Roadmap 90 Hari Membangun Agentic Enterprise Pilot

Banyak perusahaan sudah melewati fase rasa ingin tahu terhadap AI. Tool sudah dicoba, copilot sudah dipakai, beberapa proof of concept sudah dipresentasikan. Namun pertanyaan yang kini lebih penting bukan lagi *“apakah agentic AI menarik?”* melainkan: bagaimana membangun pilot yang cukup nyata untuk membuktikan nilai, cukup aman untuk dijalankan, dan cukup disiplin untuk menjadi dasar scale?

Di sinilah banyak organisasi tersandung. Mereka terlalu cepat membangun demo tanpa baseline. Atau sebaliknya, terlalu lama menyusun strategi sampai tidak pernah masuk ke workflow nyata. Padahal agentic transformation tidak akan lahir dari presentasi. Ia lahir dari pilot operasional yang dibatasi dengan baik, diukur dengan benar, dan ditinjau dengan jujur.

Artikel ini menutup rangkaian pembahasan tentang operating model, workforce, metrics, dan governance dengan satu tujuan praktis: memberi rencana 90 hari untuk membangun pilot agentic enterprise yang terukur dan aman.

Prinsip dasarnya sederhana: mulai dari satu domain yang bernilai, batasi scope agar risiko terkendali, desain agent dan kontrol secara eksplisit, uji pada workflow nyata bukan hanya prompt, lalu ambil keputusan scale, redesign, atau stop berdasarkan bukti.

Roadmap ini bukan resep universal. Ia paling cocok untuk perusahaan yang sudah memiliki proses dasar yang cukup stabil, sponsor bisnis yang jelas, dan kesiapan minimum pada data, integrasi, serta governance. Jika fondasi itu belum ada, 90 hari tetap berguna—tetapi hasilnya mungkin bukan pilot live, melainkan keputusan sadar bahwa perusahaan perlu memperbaiki fondasi dulu.

## Mengapa 90 hari adalah horizon yang tepat

Untuk pilot agentic enterprise, 90 hari biasanya cukup panjang untuk menghasilkan bukti operasional, tetapi cukup pendek untuk menjaga fokus eksekusi. Terlalu singkat, tim hanya sempat membuat demo. Terlalu panjang, pilot berubah menjadi program transformasi mini yang kehilangan disiplin.

Dalam 90 hari, perusahaan seharusnya bisa menjawab lima pertanyaan inti. Pertama, apakah workflow yang dipilih memang punya value pool yang nyata. Kedua, apakah agent dapat bekerja dalam batas otonomi yang aman. Ketiga, apakah pengguna benar-benar terbantu, bukan hanya terkesan. Keempat, apakah kontrol, audit trail, dan monitoring cukup untuk production terbatas. Kelima, apakah economics dan operating fit cukup kuat untuk scale.

Jika lima pertanyaan ini belum bisa dijawab, organisasi belum punya dasar yang sehat untuk memperluas agentic model ke domain lain.

---

## Hari 1–15: Pilih Domain yang Tepat dan Bangun Baseline

Fase pertama bukan soal teknologi. Ini soal memilih medan tempur yang benar. Kesalahan paling umum di awal adalah memilih use case yang terlalu mudah tetapi tidak penting, atau terlalu ambisius sehingga gagal sebelum memberi pembelajaran. Pilot pertama sebaiknya berada di titik tengah: nilai bisnis tinggi, data cukup tersedia, sponsor kuat, dan risiko masih bisa dibatasi.

Domain yang baik untuk pilot biasanya memiliki ciri berikut: workflow cukup sering terjadi, ada bottleneck atau backlog yang nyata, banyak handoff manual atau exception handling, sistem sumber dan data relatif dapat diakses, owner proses jelas, dan kegagalan pilot tidak langsung menciptakan risiko material yang tak terkendali.

Contoh yang sering masuk akal antara lain finance close support untuk evidence gathering, variance triage, dan draft commentary; procurement intake untuk klasifikasi request, policy check, dan routing; customer operations untuk case summarization, response drafting, dan escalation triage; IT operations untuk incident triage, runbook recommendation, dan change readiness check; supply chain exception handling untuk deteksi exception, context assembly, dan rekomendasi mitigasi awal; serta shared services atau GCC yang memiliki volume tinggi, proses relatif standar, dan governance lebih mudah dipusatkan.

Sebaliknya, hindari dulu domain yang proses dasarnya masih kacau, policy belum terdokumentasi, data tersebar tanpa owner, atau menyentuh keputusan material yang belum punya guardrail jelas.

Begitu domain dipilih, tim harus memetakan workflow nyata dari awal sampai akhir. Bukan hanya di mana AI bisa dipasang, tetapi langkah proses utama, handoff antar-tim, exception yang paling sering, sistem yang dipakai, dokumen atau knowledge yang dirujuk, titik approval, dan pain point yang paling mahal atau paling lambat.

Pada procurement intake, misalnya, request masuk dari business user, diklasifikasikan, dicek terhadap policy, diverifikasi vendor atau kategori, lalu dirutekan ke jalur katalog, sourcing, atau approval khusus. Di banyak perusahaan, bottleneck bukan pada satu langkah tunggal, tetapi pada kombinasi klasifikasi yang salah, dokumen tidak lengkap, dan handoff yang berulang.

Pada finance close, angka sudah ada di ERP atau consolidation tool, tetapi tim masih harus mengejar input, mengumpulkan evidence, menandai variance, dan menyusun draft penjelasan. Agent mungkin tidak perlu menutup buku, tetapi bisa sangat berguna pada orkestrasi dan triage.

Tanpa baseline, pilot akan berakhir pada opini. Minimal, tetapkan metrik awal seperti cycle time, cost per case atau cost per transaction, error atau correction rate, backlog atau queue size, escalation rate, dan user satisfaction atau internal stakeholder satisfaction. Tidak semua metrik harus sempurna, tetapi harus cukup untuk membandingkan kondisi sebelum dan sesudah pilot.

Di fase ini, satu keputusan penting juga harus dibuat: apa definisi keberhasilan pilot? Misalnya, cycle time turun pada subset kasus tertentu, correction rate agent berada di bawah ambang yang disepakati, user menerima output agent pada proporsi tertentu, tidak ada pelanggaran policy material, dan biaya per outcome masih masuk akal. Jika definisi keberhasilan tidak disepakati di awal, pilot akan sulit ditutup secara objektif.

---

## Hari 16–35: Desain Agent, Batas Otonomi, dan Kontrol

Setelah domain dan baseline jelas, barulah perusahaan masuk ke desain agent. Fokus fase ini bukan membuat agent pintar, tetapi membuatnya jelas, terbatas, dan dapat diaudit.

Setiap pilot sebaiknya memiliki agent card—dokumen ringkas yang menjelaskan identitas operasional agent. Isinya minimal mencakup tujuan atau outcome yang ingin dicapai, scope atau kasus apa yang boleh dan tidak boleh ditangani, tools berupa API, sistem, atau workflow engine yang boleh dipanggil, data source seperti knowledge base, ERP, CRM, ticketing, atau dokumen kebijakan, owner yang mencakup business owner, product atau agent owner, dan risk owner, risk tier yang rendah, sedang, atau tinggi sesuai dampak, serta success criteria berupa metrik value, quality, adoption, dan risk.

Agent card memaksa organisasi berhenti berbicara abstrak. Ia mengubah ide menjadi objek operasional yang bisa ditinjau bersama bisnis, IT, security, dan risk.

Salah satu keputusan terpenting dalam 90 hari pertama adalah seberapa jauh agent boleh bertindak. Urutan yang sehat biasanya dimulai dari read atau monitor di mana agent hanya membaca data dan memberi insight. Selanjutnya draft atau recommend di mana agent menyiapkan ringkasan, rekomendasi, atau tindakan usulan. Kemudian execute with approval di mana agent menjalankan tindakan setelah persetujuan manusia. Terakhir execute with monitoring yang hanya untuk tindakan low-risk yang sangat jelas batasnya.

Untuk pilot pertama, kebanyakan perusahaan sebaiknya berhenti di level draft atau recommend, kecuali use case benar-benar rendah risiko. Pada IT incident triage, misalnya, agent boleh mengumpulkan log, mengusulkan runbook, dan menyiapkan eskalasi, tetapi tidak otomatis mengubah konfigurasi produksi. Pada procurement intake, agent boleh mengklasifikasikan dan merutekan request standar, tetapi tidak membuat vendor baru. Pada finance, agent boleh menyiapkan evidence pack dan draft commentary, tetapi tidak mengambil keputusan akuntansi material.

Agentic pilot yang sehat selalu punya jawaban jelas untuk tiga pertanyaan: kapan manusia harus menyetujui, kapan kasus harus dieskalasi, dan apa yang harus terekam untuk audit. Approval threshold bisa berbasis nilai transaksi, confidence agent, jenis kasus, sensitivitas data, atau dampak operasional. Escalation path harus menunjuk role nyata, bukan kotak organisasi abstrak, misalnya supervisor AP, controller regional, procurement operations lead, incident manager, atau supply chain planner on duty. Audit requirement minimal biasanya mencakup data sumber yang dipakai, tool atau API yang dipanggil, policy atau knowledge yang dirujuk, output agent, keputusan manusia, dan hasil akhir.

Banyak pilot gagal bukan karena model buruk, tetapi karena fondasi operasional belum siap. Empat komponen minimum yang perlu ada adalah knowledge base, API access, tool registry, dan sandbox environment.

Knowledge base berisi dokumen SOP, policy, FAQ, runbook, atau histori kasus yang sudah dibersihkan secukupnya. Jangan berharap retrieval bekerja baik jika knowledge masih berantakan. API access ke sistem inti harus dibatasi dan sesuai kebutuhan. Pilot tidak perlu semua integrasi, cukup yang benar-benar menentukan outcome. Tool registry adalah daftar tool yang boleh dipanggil agent, lengkap dengan hak akses dan batas penggunaannya. Ini penting untuk mencegah tool sprawl dan risiko akses liar. Sandbox environment adalah lingkungan uji yang cukup realistis untuk mencoba workflow tanpa menyentuh produksi secara sembrono.

Trade-off di fase ini jelas: semakin cepat tim ingin live, semakin besar godaan untuk memotong desain kontrol. Itu hampir selalu menjadi utang yang mahal di minggu-minggu berikutnya.

---

## Hari 36–65: Build MVP dan Uji Secara Serius

Fase ketiga adalah saat banyak organisasi terlalu cepat merasa sudah jadi. Padahal MVP agentic bukan chatbot yang bisa menjawab. MVP adalah workflow sempit yang benar-benar bekerja pada kasus nyata.

Pilih subset kasus yang cukup representatif tetapi masih terkendali. Misalnya hanya invoice exception kategori tertentu, hanya entitas close tertentu, hanya incident severity rendah sampai sedang, hanya request procurement non-strategis, atau hanya exception supply chain pada satu wilayah. Tujuannya bukan menunjukkan semua kemungkinan, tetapi membuktikan bahwa agent bisa bekerja dalam satu alur nyata dari awal sampai akhir.

Sebelum pilot live, agent harus diuji pada kasus historis. Ini penting karena data historis menunjukkan realitas exception, noise, dan ambiguitas yang tidak muncul di demo. Gunakan beberapa jenis pengujian. Historical case testing untuk melihat apakah agent memberi output yang usable pada kasus yang benar-benar pernah terjadi. Adversarial scenarios untuk melihat apa yang terjadi jika dokumen tidak lengkap, data bertentangan, prompt ambigu, atau user mencoba memaksa agent keluar dari scope. Policy checks untuk memastikan agent tetap patuh pada threshold, approval rule, dan batas akses. Human review untuk menilai apakah output agent benar-benar membantu reviewer atau justru menambah pekerjaan.

Dalam praktik, iterasi pilot biasanya berputar pada empat area. Pertama, prompt dan instruction design: apakah agent memahami tujuan, format output, dan batas tindakannya. Kedua, retrieval: apakah knowledge yang diambil relevan, mutakhir, dan cukup spesifik. Ketiga, tool schema: apakah parameter API, struktur input-output, dan error handling cukup jelas. Keempat, guardrails: apakah agent tahu kapan harus berhenti, meminta approval, atau mengeskalasi.

Pada customer operations, misalnya, agent mungkin bisa membuat draft respons yang baik, tetapi retrieval mengambil policy lama. Masalahnya bukan pada model, melainkan pada knowledge governance. Pada IT operations, agent mungkin memahami alert, tetapi tool schema untuk log retrieval tidak konsisten. Hasilnya triage tampak cerdas tetapi tidak dapat diandalkan.

Pilot enterprise tidak perlu menunggu agent sempurna. Yang lebih penting adalah apakah output agent cukup benar untuk dipakai, cukup jelas untuk ditinjau, cukup aman untuk dijalankan dalam batas tertentu, dan cukup konsisten untuk diukur. Jika tim terlalu lama mengejar kesempurnaan model, pilot akan macet. Jika terlalu cepat live tanpa usability, trust akan runtuh.

---

## Hari 66–90: Jalankan Pilot Terbatas, Monitor Ketat, dan Ambil Keputusan

Fase terakhir adalah momen pembuktian. Bukan lagi di lab, tetapi di operasi terbatas.

Pilot sebaiknya dibatasi secara eksplisit: satu tim, satu entitas, satu kategori transaksi, satu region, atau satu jenis kasus. Pembatasan ini penting agar monitoring ketat bisa dilakukan dan rollback tetap mungkin jika ada masalah. Close agent hanya dipakai pada dua entitas regional. Procurement agent hanya menangani request indirect spend bernilai rendah. Incident agent hanya aktif pada service tertentu dan hanya memberi rekomendasi. Supply chain agent hanya memonitor exception inbound untuk satu product line.

Selama pilot live, ukur setidaknya lima dimensi berikut. Value: apakah cycle time, backlog, atau throughput membaik dibanding baseline. Quality: berapa correction rate, acceptance rate, dan kualitas output yang benar-benar usable. Risk: apakah ada policy deviation, akses yang tidak semestinya, atau keputusan yang seharusnya tidak diambil agent. Adoption: apakah user benar-benar memakai agent dan merasa terbantu. Cost: berapa biaya per successful outcome dan apakah economics-nya masuk akal untuk scale.

Di sinilah artikel sebelumnya tentang metrics dan outcome-based operating model menjadi sangat relevan: pilot tidak boleh dinilai hanya dari agent bekerja atau user suka. Ia harus dinilai sebagai bagian dari operating model.

Pilot yang sehat memiliki ritme review singkat tetapi disiplin: apa yang berhasil, apa yang salah, override apa yang paling sering, kasus apa yang seharusnya tidak masuk, dan perubahan apa yang perlu dilakukan minggu berikutnya. Review ini idealnya melibatkan business owner, agent atau product owner, operations lead, platform atau integration lead, dan risk atau control representative.

Di hari ke-90, organisasi harus mengambil keputusan. Bukan memperpanjang pilot tanpa arah. Ada tiga kemungkinan hasil. Scale jika pilot menunjukkan value nyata, kualitas cukup baik, risiko terkendali, dan user adoption sehat. Scope bisa diperluas secara bertahap. Redesign jika value ada, tetapi desain agent, data, workflow, atau kontrol belum cukup matang. Use case tetap layak, tetapi perlu iterasi struktural. Stop jika use case ternyata tidak cukup bernilai, terlalu berisiko, atau fondasinya belum siap. Menghentikan pilot lebih baik daripada memaksakan scale. Keputusan stop bukan kegagalan jika diambil berdasarkan bukti. Justru itu tanda governance bekerja.

---

## Apa yang Sering Membuat Pilot 90 Hari Gagal

Sebelum menutup, ada baiknya menyoroti beberapa pola kegagalan yang paling umum.

Pertama, memulai dari teknologi bukan workflow. Tim terlalu fokus pada model dan antarmuka, tetapi tidak memahami proses nyata yang ingin diubah. Kedua, tidak punya baseline. Akhirnya semua orang merasa pilot bagus, tetapi tidak ada bukti bahwa outcome membaik. Ketiga, scope terlalu lebar. Pilot mencoba menyentuh terlalu banyak sistem, terlalu banyak kasus, atau terlalu banyak fungsi sekaligus. Keempat, governance datang terlambat. Approval threshold, audit trail, dan access control baru dipikirkan setelah agent hampir live. Kelima, tidak ada sponsor bisnis yang aktif. Pilot menjadi proyek teknologi, bukan perubahan operating model. Keenam, tidak ada keputusan akhir. Pilot diperpanjang terus, tetapi tidak pernah benar-benar di-scale atau dihentikan.

Perusahaan yang bergerak paling efektif biasanya bukan yang paling agresif, tetapi yang paling disiplin menghubungkan workflow, kontrol, metrics, dan keputusan.

---

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

Pilih satu domain pilot yang benar-benar penting. Jangan mulai dari use case yang hanya mudah didemokan. Pilih workflow dengan value nyata, owner jelas, dan risiko yang masih bisa dibatasi.

Sepakati batas otonomi agent sejak awal. Putuskan apakah agent hanya membaca, menyiapkan draft, memberi rekomendasi, atau boleh mengeksekusi tindakan tertentu dengan approval.

Tetapkan baseline dan success criteria sebelum build. Minimal ukur cycle time, backlog, error atau correction rate, user satisfaction, dan indikator risiko yang relevan.

Bangun kontrol sebagai bagian dari desain, bukan tambahan belakangan. Approval threshold, escalation path, audit trail, tool access, dan sandbox harus siap sebelum pilot live.

Tentukan stage-gate hari ke-90. Dari awal, sepakati bahwa pilot harus berakhir dengan keputusan: scale, redesign, atau stop.

### Checklist readiness singkat

- Ada sponsor bisnis yang aktif, bukan hanya sponsor teknologi.
- Workflow end-to-end sudah dipetakan, termasuk handoff dan exception utama.
- Baseline metrik operasional tersedia.
- Agent card sudah didefinisikan dengan tujuan, scope, tools, data source, owner, risk tier, dan success criteria.
- Knowledge base minimum sudah siap dan cukup bersih.
- Akses API dan tool registry sudah dibatasi sesuai kebutuhan pilot.
- Sandbox atau environment uji tersedia.
- Human approval threshold dan escalation path sudah jelas.
- Ada dashboard monitoring untuk value, quality, risk, adoption, dan cost.
- Forum review mingguan sudah ditetapkan.

### Sinyal bahaya bahwa pilot belum siap di-scale

- Pilot masih dinilai dari kualitas demo, bukan outcome operasional.
- Tidak ada baseline yang kredibel.
- User harus mengoreksi sebagian besar output agent.
- Agent sering keluar dari scope atau memanggil tool yang tidak semestinya.
- Knowledge base belum dipercaya oleh pengguna bisnis.
- Sponsor bisnis pasif dan keputusan harian hanya diambil tim teknologi.
- Tidak ada audit trail yang cukup untuk menjelaskan tindakan agent.
- Biaya inferensi dan integrasi naik, tetapi tidak dikaitkan dengan successful outcome.
- Pilot terus diperpanjang tanpa keputusan scale, redesign, atau stop.

### Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader

Jika dalam 90 hari Anda hanya boleh membuktikan satu hal tentang agentic AI di perusahaan Anda, apakah Anda akan memilih demo yang mengesankan—atau workflow nyata yang lebih cepat, lebih aman, dan lebih terukur?

Jawaban atas pertanyaan itu biasanya menentukan apakah perusahaan sedang membangun eksperimen AI, atau benar-benar memulai agentic transformation.
