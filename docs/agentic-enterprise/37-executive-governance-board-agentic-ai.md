---
title: "Executive Governance Board untuk Agentic AI"
sidebar_position: 37
---

# Executive Governance Board untuk Agentic AI

Bayangkan situasi ini: tim finance mulai membangun agent untuk membantu proses close bulanan. Di sisi lain, tim procurement juga sedang mengembangkan agent untuk intake dan policy check. Customer operations punya rencana serupa untuk case resolution. IT operations mulai bereksperimen dengan agent untuk incident triage. Masing-masing berjalan dengan logikanya sendiri, dengan vendor yang berbeda, dan dengan standar keamanan yang tidak seragam.

Pada titik ini, perusahaan biasanya mulai merasakan sesuatu yang mengganggu. Bukan karena agent-agen itu tidak bekerja—beberapa bahkan menunjukkan hasil yang menjanjikan. Masalahnya adalah tidak ada satu forum pun yang bisa menjawab pertanyaan-pertanyaan sederhana namun krusial: use case mana yang benar-benar layak diperluas? Siapa yang memutuskan kalau dua domain berebut sumber daya yang sama? Bagaimana cara memastikan agent procurement tidak mengakses data finance tanpa kontrol yang jelas?

Inilah mengapa governance untuk agentic AI tidak bisa lagi ditangani oleh steering committee teknologi biasa atau risk review yang sifatnya ad hoc. Ketika agent mulai menyentuh lebih dari satu fungsi, ketika ia mulai terhubung ke sistem inti, dan ketika keputusan yang diambilnya mulai berdampak material, perusahaan membutuhkan forum eksekutif yang dirancang khusus untuk menjawab tantangan ini.

## Mengapa Satu Fungsi Saja Tidak Cukup

Beberapa organisasi mencoba menempatkan agentic AI di bawah satu fungsi dominan. Ada yang meletakkannya di bawah CIO atau CTO karena teknologinya kompleks. Ada yang menaruhnya di bawah unit digital karena dianggap bagian dari agenda AI. Ada pula yang menempatkannya di bawah risk karena kekhawatiran kontrol, atau di bawah COO karena menyentuh operasi.

Masing-masing pendekatan ini punya logika yang masuk akal. Namun semuanya memiliki keterbatasan yang sama: agentic AI melintasi batas fungsi terlalu jauh untuk dikelola secara efektif oleh satu pemilik tunggal.

Coba perhatikan apa yang terjadi ketika sebuah perusahaan membangun agent untuk finance close orchestration. Keputusan yang muncul bukan hanya soal model AI atau prompt apa yang digunakan. Pertanyaan yang justru lebih strategis adalah: workflow mana yang layak diubah? Level otonomi apa yang bisa diterima? Data dan sistem mana yang boleh diakses? Siapa yang memegang approval? Bagaimana value diukur? Vendor mana yang boleh masuk ke lapisan kritikal? Dan bagaimana peran manusia akan bergeser?

Semua pertanyaan ini tidak bisa dijawab oleh satu fungsi saja. Finance tidak bisa memutuskan sendiri soal akses data tanpa melibatkan IT dan risk. IT tidak bisa menentukan level otonomi tanpa masukan dari bisnis. Risk tidak bisa menetapkan standar tanpa memahami prioritas value dari masing-masing domain. Dan HR tidak bisa dilibatkan setelah perubahan peran kerja sudah terjadi.

Itulah mengapa governance agentic AI harus menghubungkan value, risk, platform, dan workforce dalam satu forum keputusan. Tanpa forum seperti ini, keputusan-keputusan lintas-enterprise—seperti risk appetite untuk bounded autonomy, investment priority antar-domain, standar minimum untuk identity dan observability, pendanaan platform bersama, keputusan vendor strategis, dan eskalasi insiden—akan jatuh ke pola yang buruk. Domain yang paling cepat bergerak akan menang sendiri. Platform team dipaksa mendukung terlalu banyak variasi. Risk dan legal masuk terlambat. HR baru dilibatkan setelah role mulai terganggu. Finance hanya melihat biaya setelah komitmen vendor telanjur dibuat.

## Shadow Agents dan Hilangnya Kontrol Strategis

Salah satu konsekuensi paling nyata dari ketiadaan forum eksekutif adalah munculnya shadow agents. Begitu permintaan bisnis meningkat, fungsi-fungsi akan mencari jalan tercepat. Procurement mungkin membeli agent intake sendiri dari vendor yang berbeda. Customer operations memakai platform case automation yang tidak terintegrasi dengan standar enterprise. IT membangun agent internal dengan akses luas ke tool operasional. Shared services menjalankan pilot dengan partner eksternal tanpa mengikuti pola yang sama.

Hasilnya adalah agent-agent yang aktif tetapi tidak tercatat resmi, integrasi ke sistem inti yang tidak melewati pola standar, penggunaan data sensitif tanpa review yang memadai, dan konflik prioritas antara domain, platform, dan control functions. Masalahnya bukan hanya soal keamanan—meskipun itu juga penting. Masalah yang lebih mendasar adalah perusahaan kehilangan strategic control atas lapisan eksekusi baru yang sedang tumbuh di jantung operasinya.

Board eksekutif yang baik bukan sekadar simbol governance. Ia adalah mekanisme yang memungkinkan perusahaan menjawab pertanyaan-pertanyaan sulit: use case mana yang benar-benar layak di-scale? Mana yang harus dibatasi? Mana yang perlu dihentikan? Kapan platform bersama perlu didanai? Kapan vendor tertentu terlalu berisiko? Kapan workforce impact sudah cukup besar untuk memerlukan intervensi CHRO dan COO?

Tanpa forum seperti ini, organisasi biasanya bergerak dalam dua ekstrem yang sama-sama berbahaya: terlalu lambat karena semua orang menunggu kepastian, atau terlalu cepat dengan governance yang tertinggal.

## Mandat yang Tajam, Bukan Total

Kesalahan umum dalam membentuk governance board adalah membuat mandat yang terlalu luas. Akibatnya, semua agent kecil harus lewat board, semua keputusan menumpuk, dan organisasi mulai melihat governance sebagai penghambat. Board agentic AI harus punya mandat yang tajam, bukan total.

Fokusnya adalah pada keputusan high-risk, high-value, dan cross-enterprise. Mandat inti board sebaiknya mencakup enam area.

Pertama, portfolio approval dan investment priority. Board harus menilai portofolio agentic AI sebagai portofolio enterprise, bukan kumpulan proyek terpisah. Artinya, board meninjau use case mana yang memberi value paling nyata, mana yang membutuhkan redesign proses sebelum AI, mana yang bergantung pada platform bersama, dan mana yang tidak layak diteruskan. Ketika CFO ingin memperluas agent dari close support ke AP exception handling, COO ingin mempercepat customer operations resolution, CIO ingin mendanai observability dan policy layer, dan GCC leader ingin membangun reusable services untuk beberapa fungsi, semuanya valid. Tetapi tidak semuanya bisa dibiayai sekaligus. Board dibutuhkan untuk memutuskan urutan, bukan sekadar menyetujui semua permintaan.

Kedua, risk tiering dan bounded autonomy. Tidak semua agent perlu diperlakukan sama. Board harus menyetujui kerangka risk tiering yang membedakan agent low-risk dengan scope sempit dan tanpa tindakan material, agent medium-risk yang menyentuh workflow operasional penting, dan agent high-risk yang dapat memengaruhi transaksi, kepatuhan, data sensitif, atau keputusan material. Board tidak perlu menilai setiap prompt, tetapi harus menyetujui kategori risiko, level otonomi yang diperbolehkan per kategori, approval threshold, dan kondisi eskalasi. Agent yang hanya merangkum knowledge article internal mungkin cukup lewat delegated governance. Agent yang merutekan purchase request bernilai rendah bisa memakai template standar. Tetapi agent yang menyentuh posting finance, supplier action, customer concession, atau tindakan IT produksi harus masuk review yang lebih tinggi.

Ketiga, platform funding dan standard enterprise. Banyak nilai agentic AI tidak akan muncul jika perusahaan hanya mendanai use case domain tanpa mendanai fondasi bersama. Board harus memutuskan investasi pada identity dan access control untuk agents, observability dan audit trail, evaluation harness, policy engine, integration patterns ke ERP, CRM, HRIS, ITSM, dan core systems, serta agent registry dan lifecycle control. Domain sering melihat platform sebagai biaya tambahan, padahal tanpa platform bersama perusahaan akan jatuh ke agent sprawl.

Keempat, governance standards. Board perlu menetapkan standar minimum yang berlaku lintas domain. Misalnya, setiap agent harus punya owner bisnis, owner teknis, dan risk owner. Setiap agent harus tercatat di registry. Setiap high-risk use case harus punya audit trail dan human approval path. Setiap perubahan material harus melewati testing dan release discipline. Setiap vendor harus memenuhi persyaratan data boundary, logging, dan control posture tertentu. Standar ini tidak harus membuat semua use case identik, tetapi harus cukup kuat untuk menjaga konsistensi enterprise.

Kelima, vendor dan ecosystem decisions. Keputusan vendor tertentu tidak boleh dibiarkan tersebar tanpa koordinasi, terutama jika menyangkut platform agentic utama, model provider strategis, managed agentic services, atau integrator yang akan membangun pola reusable lintas domain. Board harus menilai trade-off seperti kecepatan versus lock-in, embedded agent di SaaS versus orchestration layer independen, managed service versus kapabilitas internal, dan vendor spesialis domain versus platform enterprise yang lebih generik.

Keenam, workforce implications. Ini area yang sering terlambat dibahas. Padahal agentic AI mengubah kapasitas kerja, desain peran, KPI supervisor, kebutuhan reskilling, model layanan shared services, dan dalam beberapa kasus struktur organisasi. Board tidak perlu mengelola training harian, tetapi harus memastikan bahwa keputusan scale selalu disertai jawaban atas pertanyaan: role mana yang berubah, siapa yang perlu dilatih, bagaimana metrik kerja akan disesuaikan, dan apakah perubahan ini memerlukan intervensi change management yang lebih besar.

## Apa yang Tidak Boleh Menjadi Mandat Board

Agar tidak menjadi bottleneck, board tidak boleh menyetujui setiap agent low-risk, meninjau desain prompt satu per satu, menggantikan peran architecture review board atau security review yang sudah ada, atau menjadi forum operasional mingguan untuk semua isu delivery. Board harus fokus pada keputusan yang lintas fungsi, material terhadap value atau risk, dan membutuhkan trade-off eksekutif.

Untuk low-risk agents, perusahaan perlu menerapkan delegated governance. Artinya, low-risk agents bisa disetujui di level domain atau program office selama mereka memakai template standar, berada dalam batas otonomi yang telah ditetapkan, dan tidak menyentuh data atau tindakan material. Contoh delegated governance yang sehat adalah agent FAQ internal HR, summarization untuk knowledge worker, routing awal untuk tiket internal non-sensitif, atau drafting awal untuk komunikasi standar tanpa keputusan material. Dengan model ini, board menjaga arah dan kontrol, tetapi tidak menghambat throughput delivery.

## Siapa yang Harus Duduk di Meja

Board agentic AI yang efektif bukan forum teknologi yang ditambah satu-dua orang bisnis. Ia harus mencerminkan kenyataan bahwa agentic AI adalah agenda enterprise. Komposisi inti yang ideal mencakup sponsor bisnis senior—biasanya COO, CFO, atau eksekutif bisnis yang memegang agenda transformasi lintas fungsi. Tanpa sponsor bisnis yang kuat, board akan jatuh menjadi forum teknologi dan kontrol, bukan forum value realization.

CIO atau CTO mewakili platform, arsitektur, integrasi, dan keputusan teknis strategis. Mereka penting untuk memastikan bahwa keputusan bisnis tidak menciptakan utang arsitektur yang tidak terkendali. COO sangat penting karena banyak use case agentic hidup di operasi: shared services, customer operations, supply chain, IT operations, dan workflow lintas fungsi.

CHRO sering diremehkan, padahal perubahan role, reskilling, job architecture, dan performance model tidak bisa ditangani belakangan. CISO diperlukan karena agent membawa isu identity, access, tool calling, data exposure, dan threat surface baru. CRO, compliance, atau risk leader memastikan bounded autonomy, control design, dan risk appetite tidak diputuskan secara implisit oleh tim delivery. Legal penting untuk data usage, accountability, vendor contract, IP, dan implikasi regulasi. Data leader atau CDO memastikan kualitas data, data product readiness, dan governance konteks tidak tertinggal dari kecepatan use case. Finance bukan hanya mengawasi biaya, tetapi menilai business case, platform funding, dan value realization lintas portofolio.

Board inti tidak harus terlalu besar setiap saat. Praktik yang sehat adalah anggota inti hadir tetap, sementara domain owner hadir ketika use case mereka dibahas. Controller atau finance transformation lead hadir saat membahas close agent. CPO atau procurement operations lead hadir saat membahas intake-to-PO. Customer operations head hadir saat membahas case resolution. CIO operations lead hadir saat membahas IT incident agents. GCC leader hadir saat membahas scaling melalui shared services. Ini menjaga diskusi tetap relevan tanpa membuat board terlalu berat.

## Program Office sebagai Mesin Koordinasi

Board yang baik hampir selalu didukung oleh agentic AI program office atau transformation office khusus. Fungsi ini sangat penting karena board tidak boleh menghabiskan waktu untuk mengumpulkan data dasar. Program office menyiapkan decision paper, scorecard portofolio, risk summary, status incidents, dependency platform, vendor assessment, dan workforce impact note. Tanpa dukungan ini, rapat board akan dipenuhi update verbal, bukan keputusan yang berkualitas.

Secara praktis, program office bertugas mengelola intake use case yang perlu naik ke board, memastikan template business case dan risk assessment konsisten, mengonsolidasikan metrik value, quality, risk, adoption, dan cost, menyiapkan rekomendasi keputusan, melacak action item lintas fungsi, dan menjaga hubungan antara board, domain squad, platform team, risk, HR, dan vendor. Dalam organisasi besar, program office ini bisa berada di bawah transformation office, digital office, enterprise AI office, atau GCC transformation hub. Yang penting bukan nama organisasinya, tetapi kemampuannya menjadi mesin koordinasi eksekutif.

## Ritme Keputusan yang Disiplin

Governance board yang terlalu jarang bertemu akan tertinggal dari kecepatan perubahan. Yang terlalu sering dengan agenda yang buruk akan melelahkan eksekutif tanpa menghasilkan keputusan. Karena itu, ritme harus dibedakan antara portfolio cadence dan launch gate cadence.

Untuk kebanyakan perusahaan, rapat bulanan adalah ritme yang sehat untuk meninjau value realized dari use case yang sudah live, status use case yang sedang pilot, insiden atau policy deviation, kebutuhan investasi platform, risiko vendor, hambatan adopsi, dan prioritas gelombang berikutnya. Rapat bulanan cukup untuk menjaga arah strategis tanpa membuat board tenggelam dalam detail operasional.

Jika perusahaan sedang dalam fase scale yang agresif, terutama ketika beberapa high-risk use case akan go-live, board atau sub-komite yang diberi mandat bisa bertemu mingguan untuk launch gate high-risk agents, review readiness kontrol, menyetujui exception terhadap standar, atau menangani eskalasi insiden material. Forum mingguan ini tidak harus selalu seluruh board inti. Bisa berupa delegated executive gate dengan anggota yang relevan, selama mandatnya jelas.

## Agenda yang Sehat

Board agentic AI sebaiknya tidak terjebak pada demo. Agenda yang sehat biasanya mencakup enam blok. Pertama, value realized: outcome bisnis apa yang benar-benar membaik, use case mana yang menunjukkan adopsi sehat, mana yang economics-nya memburuk, mana yang perlu dihentikan atau dipersempit. Kedua, incidents dan control effectiveness: policy deviation, unauthorized access attempt, tool misuse, audit finding, atau near miss yang perlu tindakan korektif. Ketiga, policy changes: perubahan risk tiering, perubahan approval threshold, pembaruan standar logging, atau keputusan untuk membatasi jenis tindakan tertentu sampai kontrol lebih matang. Keempat, vendor risks dan ecosystem dependency: vendor mana yang menjadi single point of dependency, perubahan kontrak atau pricing, isu data residency, perubahan model yang memengaruhi perilaku agent, atau kebutuhan exit planning. Kelima, adoption blockers dan workforce signals: tim mana yang correction burden-nya terlalu tinggi, role mana yang KPI-nya belum selaras, area mana yang membutuhkan training tambahan, atau domain mana yang resistensinya menunjukkan masalah desain. Keenam, next wave selection: use case mana yang naik ke gelombang berikutnya, mana yang menunggu fondasi, mana yang perlu redesign proses dulu, dan mana yang tidak layak diteruskan.

## Trade-off yang Harus Dikelola

Membentuk board tidak otomatis membuat governance lebih baik. Ada trade-off yang harus dikelola secara sadar. Ada risiko board menjadi forum seremonial jika hanya menerima update tanpa keputusan tegas. Ada risiko menjadi bottleneck jika semua hal harus naik ke board. Ada risiko terlalu risk-heavy jika board didominasi fungsi kontrol tanpa sponsor value yang kuat. Ada risiko terlalu business-heavy jika board hanya mengejar scale dan ROI tanpa disiplin kontrol. Dan ada risiko workforce dibahas terlambat, karena banyak board fokus pada use case dan platform tetapi lupa bahwa perubahan role, KPI, dan kapasitas kerja adalah bagian dari keputusan scale.

Board yang sehat bukan yang paling ketat atau paling cepat. Board yang sehat adalah yang mampu membuat trade-off secara eksplisit.

## Pertanyaan Reflektif

Jika dalam 12 bulan ke depan perusahaan Anda memiliki puluhan agent yang menyentuh finance, procurement, customer operations, IT, dan shared services, siapa sebenarnya yang hari ini berwenang memutuskan trade-off antara value, risk, platform, vendor, dan workforce impact? Jika jawabannya masih kabur, maka board itu belum ada—meskipun rapat-rapatnya mungkin sudah banyak.
