---
title: "Guardrails, Policy Engine, dan Human Approval Workflow"
sidebar_position: 15
description: "Bayangkan tim finance Anda sudah mulai memakai agent untuk membantu proses closing bulanan. Agent bisa mengidentifikasi exception, mengumpulkan bukti dari berbagai..."
image: "/img/social/15-guardrails-policy-human-approval.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Guardrails, Policy Engine, dan Human Approval Workflow

<ArticleDiagram src="/img/diagrams/15-guardrails-policy-human-approval.png" alt="Diagram: Guardrails, Policy Engine, dan Human Approval Workflow" />

Bayangkan tim finance Anda sudah mulai memakai agent untuk membantu proses closing bulanan. Agent bisa mengidentifikasi exception, mengumpulkan bukti dari berbagai sistem, dan menyiapkan draft komentar. Semua berjalan lancar di pilot. Lalu suatu hari, tanpa sengaja, agent memposting adjustment material yang seharusnya tidak boleh dilakukan tanpa review manajer. Angka laporan keuangan berubah. Tim panik.

Kejadian seperti ini bukan soal model AI yang salah. Model bisa saja bekerja sempurna. Masalahnya ada di kontrol: tidak ada mekanisme yang menghentikan agent sebelum ia mengambil tindakan yang mengubah state bisnis secara permanen.

Inilah pertanyaan yang harus dijawab setiap perusahaan sebelum memberi agent akses ke sistem produksi: bagaimana mencegah agent melakukan tindakan yang salah sebelum kerusakan terjadi? Observability, yang sudah dibahas di artikel sebelumnya, hanya bisa melihat dan menjelaskan setelah sesuatu terjadi. Untuk cegah sebelum terjadi, dibutuhkan tiga komponen yang bekerja bersama: guardrails, policy engine, dan human approval workflow.

Banyak organisasi masih menganggap guardrails sebagai filter konten—memblokir jawaban berbahaya, kata-kata sensitif, atau respons yang tidak pantas. Itu penting, tetapi untuk enterprise, itu baru lapisan terluar. Risiko terbesar agentic AI bukan pada kalimat yang dihasilkan, melainkan pada tool yang dipanggil, data yang diambil, dan state bisnis yang diubah. Agent yang salah menjawab pertanyaan internal memang merepotkan. Tapi agent yang salah memproses refund, membuat vendor baru, memicu perubahan konfigurasi, mengubah status order, atau mengirim instruksi ke sistem keuangan—itu jauh lebih berbahaya.

Karena itu, guardrails dalam agentic enterprise harus dipasang di runtime, dekat dengan keputusan dan aksi, bukan hanya ditulis di dokumen policy atau prompt sistem.

## Guardrails Bukan Hanya Filter Output

Cara paling keliru memahami guardrails adalah menganggapnya sebagai lapisan sensor di akhir proses: model menghasilkan jawaban, lalu sistem memeriksa apakah output itu aman. Pendekatan ini mungkin cukup untuk chatbot sederhana. Untuk agentic systems, itu terlambat. Jika agent sudah mengambil dokumen yang seharusnya tidak boleh diakses, memanggil tool yang salah, atau mengeksekusi aksi yang mengubah transaksi, maka memfilter output akhir tidak lagi menyelesaikan masalah utama.

Dalam praktik enterprise, guardrails perlu bekerja setidaknya di lima titik. Pertama, input. Sistem perlu memeriksa apa yang diminta user atau event pemicu. Bukan hanya untuk keamanan konten, tetapi untuk memastikan intent sesuai dengan use case agent, permintaan tidak mencoba mem-bypass proses resmi, dan konteks awal cukup untuk memulai workflow. Di procurement, misalnya, requester tidak boleh memakai agent untuk langsung membuat PO jika proses seharusnya dimulai dari intake dan klasifikasi kategori. Di HR operations, agent tidak boleh menerima instruksi bebas untuk mengubah data karyawan tanpa jalur resmi.

Kedua, context retrieval. Guardrails harus mengontrol dokumen, data, dan memory apa yang boleh diambil agent. Agent finance boleh mengambil accounting guidance yang relevan, tetapi tidak semua memo sensitif lintas entitas. Agent customer service boleh melihat histori tiket pelanggan yang sedang ditangani, tetapi tidak boleh menarik data pelanggan lain hanya karena mirip secara semantik. Agent legal intake boleh mengambil template kontrak yang berlaku, tetapi tidak semua matter yang dibatasi privilege.

Ketiga, tool access. Tidak semua tool yang tersedia boleh dipakai untuk semua situasi. Guardrails harus membatasi tool mana yang boleh dipanggil, oleh agent mana, dalam workflow apa, dan dengan parameter seperti apa. Di IT operations, agent boleh menjalankan tool diagnostik dan membuka tiket, tetapi tidak otomatis boleh menjalankan perubahan produksi. Di customer operations, agent boleh mengecek entitlement dan menyiapkan refund, tetapi tidak boleh mengeksekusi refund di atas ambang tertentu.

Keempat, action execution. Ini titik paling kritis. Guardrails harus memeriksa apakah tindakan yang akan mengubah state bisnis memang diizinkan. Membuat vendor baru, memposting jurnal, mengubah limit kredit, melepaskan blok pembayaran, atau menutup insiden sebagai selesai—semua ini perlu kontrol. Di sinilah perusahaan perlu membedakan dengan tegas antara read, recommend, draft, dan execute. Banyak use case terlihat aman sampai agent diberi hak execute tanpa kontrol runtime yang memadai.

Kelima, output. Baru setelah empat titik di atas, filter output tetap relevan. Ia berguna untuk mencegah kebocoran data sensitif, memastikan bahasa yang digunakan sesuai, dan memeriksa apakah respons akhir mengandung klaim yang tidak didukung evidence. Tetapi output filter harus dipahami sebagai lapisan terakhir, bukan guardrail utama.

## Guardrails Harus Hidup di Runtime

Banyak perusahaan sudah punya SOP, matrix approval, dan kebijakan akses. Masalahnya, agent tidak membaca dokumen governance seperti manusia. Agar kontrol benar-benar bekerja, aturan itu harus diterjemahkan ke mekanisme runtime: policy check sebelum tool call, parameter validation, threshold transaksi, approval trigger, dan logging keputusan. Jika guardrails hanya hidup di slide governance atau prompt sistem, maka saat agent menghadapi situasi ambigu, sistem tidak punya cara formal untuk menghentikan atau mengalihkan tindakan.

Dalam finance close, agent mungkin membantu mengidentifikasi exception, mengumpulkan evidence, dan menyiapkan draft commentary. Guardrails yang sehat akan membolehkan akses baca ke data close tertentu, drafting commentary, dan routing follow-up. Tetapi guardrails yang sama harus menolak atau mengeskalasi ketika agent mencoba memposting adjustment material, memilih treatment akuntansi tanpa dasar yang cukup, atau menutup exception tanpa evidence minimum.

Ada trade-off yang perlu diakui. Guardrails yang terlalu ketat bisa membuat agent tidak berguna. Jika setiap langkah kecil harus melewati approval atau terlalu banyak validasi, pengguna akan kembali ke proses manual. Karena itu, desain guardrails harus mengikuti risk tier. Untuk use case knowledge assistant internal, guardrails bisa lebih ringan. Untuk use case yang menyentuh transaksi, pelanggan, atau sistem produksi, guardrails harus jauh lebih ketat.

## Policy Engine: Tempat Keputusan Izin Dibuat Secara Konsisten

Jika guardrails adalah lapisan kontrol, maka policy engine adalah mesin yang memutuskan apakah suatu tindakan boleh dilakukan pada saat runtime. Secara sederhana, policy engine menjawab pertanyaan seperti: apakah agent ini boleh memanggil tool ini, dalam konteks user atau workflow ini, untuk objek bisnis ini, pada nilai transaksi ini, dengan tingkat risiko ini, dan apakah perlu approval manusia sebelum lanjut.

Tanpa policy engine, banyak kontrol agentic akan tersebar di prompt, kode aplikasi, konfigurasi tool, dan kebiasaan tim. Hasilnya tidak konsisten dan sulit diaudit.

Untuk enterprise, policy decision biasanya perlu mempertimbangkan kombinasi beberapa faktor. Pertama, role dan delegated authority. Agent bertindak atas nama siapa? Apakah atas instruksi user, workflow resmi, atau event sistem? Apakah mandatnya masih berlaku? Kedua, context bisnis. Objek apa yang sedang disentuh? Vendor, invoice, order, tiket, kontrak, atau data karyawan? Domain yang berbeda bisa punya aturan berbeda. Ketiga, nilai transaksi atau materiality. Banyak tindakan aman pada nilai rendah, tetapi tidak pada nilai tinggi. Goodwill credit kecil mungkin boleh dieksekusi otomatis, tetapi refund besar harus masuk supervisor. Purchase request kategori standar mungkin bisa diproses otomatis sampai batas tertentu, tetapi belanja strategis harus berhenti untuk approval. Keempat, risk level. Beberapa tindakan bersifat reversible, yang lain tidak. Beberapa berdampak lokal, yang lain lintas sistem. Policy engine harus memahami perbedaan ini. Kelima, regulatory atau control requirement. Di domain tertentu, aturan bukan hanya soal preferensi internal, tetapi kewajiban kepatuhan—misalnya pemisahan tugas, evidence minimum, atau kewajiban review manusia.

Tidak semua policy harus dibuat dengan cara yang sama. Secara umum ada tiga pola. Aturan deterministik paling cocok untuk hal-hal yang jelas dan dapat dirumuskan tegas: nilai transaksi di atas ambang tertentu, kategori vendor tertentu, perubahan produksi di jam tertentu, atau data sensitif yang tidak boleh diakses. Keunggulannya mudah diaudit, mudah diuji, dan mudah dijelaskan. Kelemahannya cepat menjadi rumit jika konteks bisnis sangat bervariasi.

Untuk situasi yang lebih ambigu, perusahaan bisa memakai model-based classifier untuk menilai sensitivitas permintaan, tingkat risiko kasus, kemungkinan fraud, atau apakah intent user berada di luar scope. Keunggulannya lebih fleksibel untuk kasus yang tidak mudah ditulis sebagai aturan kaku. Kelemahannya lebih sulit dijelaskan, perlu evaluasi berkala, dan tidak cocok menjadi satu-satunya kontrol untuk tindakan berisiko tinggi.

Kombinasi keduanya biasanya pola paling sehat. Classifier membantu menilai konteks atau risk signal, lalu aturan deterministik menetapkan keputusan akhir. Di customer operations, classifier menilai apakah kasus termasuk sensitif atau berpotensi dispute, lalu aturan deterministik memutuskan bahwa semua kasus sensitif atau nilai di atas ambang tertentu harus masuk approval.

Salah satu prinsip terpenting: setiap keputusan policy harus meninggalkan jejak yang bisa diaudit. Perusahaan harus bisa menjelaskan policy apa yang dievaluasi, input konteks apa yang dipakai, hasilnya allow, deny, escalate, atau require approval, dan kapan keputusan itu dibuat. Ini penting bukan hanya untuk audit formal, tetapi juga untuk operasi sehari-hari. Saat pengguna bertanya mengapa agent menolak tindakan tertentu, tim tidak boleh menjawab, "karena sistem bilang tidak." Mereka harus bisa menunjukkan logika dan konteksnya.

Bayangkan agent procurement menerima request pembelian. Policy engine mengevaluasi kategori belanja, vendor approved atau tidak, nilai transaksi, keberadaan kontrak, dan role requester. Hasilnya bisa berbeda: allow untuk request standar bernilai rendah dengan vendor approved, require approval untuk nilai lebih tinggi, deny jika vendor belum lolos due diligence, escalate jika kategori belanja ambigu atau policy bertentangan. Tanpa pencatatan policy decision, perusahaan akan kesulitan menjelaskan mengapa dua request yang tampak mirip diperlakukan berbeda.

## Human Approval Workflow: Manusia Masuk di Titik yang Tepat

Dalam agentic enterprise, human-in-the-loop bukan berarti manusia harus memeriksa semua hal. Itu akan menghancurkan manfaat agentic AI. Yang dibutuhkan adalah human approval workflow yang selektif dan berbasis risiko.

Approval manusia biasanya diperlukan ketika tindakan bersifat bernilai tinggi, sensitif, irreversible atau sulit dibalikkan, atau regulated. Ini bukan tanda kegagalan agent. Justru ini tanda bahwa perusahaan memahami batas otonomi secara sehat.

Beberapa pola yang hampir selalu layak masuk approval: transaksi di atas threshold material, perubahan master data kritis, keputusan yang menyentuh hak karyawan, tindakan pelanggan yang berpotensi sengketa, perubahan produksi berisiko tinggi, dan keputusan yang memerlukan judgement profesional formal. Di finance, adjustment material, release payment block, atau treatment exception yang berdampak signifikan. Di procurement, vendor baru, kontrak non-standar, atau pembelian di luar katalog dengan nilai besar. Di customer operations, refund besar, goodwill credit untuk pelanggan VIP, atau penyelesaian komplain yang berpotensi legal. Di IT operations, perubahan konfigurasi produksi, restart service kritikal, atau rollback deployment pada jam sibuk.

Salah satu kesalahan paling umum adalah membuat approval workflow yang hanya mengirim notifikasi: "Agent merekomendasikan tindakan X. Approve?" Ini buruk. Reviewer manusia akan bingung, butuh membuka banyak sistem, atau akhirnya menyetujui secara buta karena kelelahan. Approval workflow yang sehat harus memberi reviewer konteks minimum yang cukup: rekomendasi agent, evidence yang dipakai, policy yang relevan, risiko utama, confidence atau alasan eskalasi, dan alternatif jika ada.

Supervisor yang menerima approval request untuk refund pelanggan seharusnya tidak hanya melihat angka refund. Ia perlu melihat histori pelanggan, alasan refund, entitlement yang berlaku, apakah kasus serupa pernah terjadi, apakah ada sinyal abuse, dan mengapa agent tidak mengeksekusi otomatis. Dengan konteks seperti ini, approval menjadi keputusan yang bermakna, bukan formalitas.

Namun ada trade-off yang sama pentingnya: jika terlalu banyak kasus masuk approval, cycle time memburuk, supervisor menjadi bottleneck, pengguna kehilangan kepercayaan, dan agent hanya menjadi mesin pembuat antrean baru. Karena itu, threshold approval harus dirancang berdasarkan risk tier, bukan rasa aman berlebihan. Pendekatan yang sehat biasanya: low risk execute with monitoring, medium risk execute with post-review atau sampling, high risk execute with approval, very high risk human-led, agent assist only. Ini jauh lebih efektif daripada memaksa semua tindakan melewati approval.

Agar approval tidak menjadi hambatan, perusahaan perlu memutuskan beberapa hal secara eksplisit: siapa approver utama dan cadangannya, SLA approval, apa yang terjadi jika approver tidak merespons, apakah approval bisa didelegasikan, dan bagaimana keputusan approval dicatat untuk pembelajaran berikutnya. Di banyak organisasi, bottleneck bukan pada model AI, tetapi pada approval queue yang tidak didesain dengan baik.

## Escalation dan Rollback: Agent Harus Tahu Kapan Berhenti

Agent yang baik bukan hanya tahu kapan bertindak, tetapi juga kapan tidak boleh lanjut. Escalation diperlukan ketika agent menghadapi kondisi seperti confidence rendah, konflik antar-sumber data, policy ambiguity, hasil tool yang tidak konsisten, atau situasi di luar scope yang telah ditentukan. Dalam kondisi seperti ini, perilaku yang benar bukan "coba terus sampai berhasil," melainkan berhenti, menjelaskan alasan, dan mengalihkan ke manusia atau workflow lain.

Di finance close, agent menemukan dua sumber guidance yang tampak bertentangan untuk treatment exception tertentu. Di procurement, data vendor master tidak konsisten dengan kontrak aktif. Di customer operations, histori pelanggan menunjukkan pola abuse, tetapi entitlement formal masih terlihat valid. Di IT operations, runbook diagnostik memberi hasil yang saling bertentangan dan potensi dampak ke produksi meningkat. Dalam semua kasus ini, bounded autonomy berarti agent tahu batasnya.

Untuk tindakan tertentu, kontrol tidak berhenti pada approval. Perusahaan juga perlu memikirkan apa yang terjadi jika tindakan agent ternyata salah. Ada tiga pola umum. Pertama, rollback. Jika sistem mendukung pembalikan langsung, ini ideal—membatalkan tiket yang salah dibuat, mengembalikan konfigurasi non-produksi, atau membatalkan status tertentu sebelum proses lanjut. Kedua, compensation action. Jika tindakan tidak bisa dibalik langsung, sistem perlu aksi kompensasi—jika agent salah mengirim notifikasi vendor, perlu follow-up korektif; jika agent salah merutekan kasus pelanggan, perlu reassignment dan komunikasi ulang; jika agent memicu langkah proses yang salah, perlu tindakan penetral. Ketiga, manual remediation path. Untuk kasus yang lebih kompleks, perusahaan perlu jalur remediasi manual yang jelas: siapa yang mengambil alih, bagaimana insiden dicatat, dan bagaimana pembelajaran dimasukkan kembali ke policy atau guardrails.

Tanpa rollback atau remediation path, organisasi cenderung terlalu takut memberi otonomi, atau sebaliknya terlalu percaya diri tanpa jaring pengaman.

## Matriks Otonomi: Cara Praktis Menentukan Batas Tindakan Agent

Cara paling praktis untuk menutup diskusi ini adalah memakai matriks otonomi. Tidak semua use case harus berada pada tingkat yang sama.

Pada tingkat assist, agent hanya membantu mencari konteks, merangkum, atau memberi insight. Cocok untuk domain ambigu, data belum stabil, atau proses yang masih sangat bergantung pada judgement manusia.

Pada tingkat draft, agent menyiapkan rekomendasi, dokumen, atau tindakan, tetapi manusia tetap mengeksekusi. Cocok untuk fase awal transformasi, domain dengan kebutuhan kontrol tinggi, atau proses yang ingin dipercepat tanpa memberi hak eksekusi.

Pada tingkat execute-with-approval, agent dapat menyiapkan dan menjalankan tindakan setelah approval manusia. Cocok untuk tindakan bernilai tinggi, regulated workflow, atau area yang butuh bukti kontrol formal.

Pada tingkat execute-with-monitoring, agent mengeksekusi otomatis dalam batas policy yang jelas, lalu dipantau melalui observability dan sampling. Cocok untuk volume tinggi, risiko rendah sampai menengah, tindakan reversible, dan domain dengan policy yang cukup matang.

Matriks ini membantu perusahaan menghindari dua ekstrem: terlalu cepat memberi otonomi penuh, atau terlalu lama menahan agent di mode assist meski proses sebenarnya sudah siap.

## Implikasi Praktis

Setelah membaca artikel ini, ada beberapa keputusan yang perlu diambil. Pertama, tentukan titik guardrails di runtime. Apakah guardrails perusahaan hanya memfilter output, atau sudah mengontrol input, retrieval, tool access, action execution, dan output? Kedua, putuskan arsitektur policy engine. Aturan apa yang harus deterministik, area mana yang boleh memakai classifier, dan bagaimana policy decision akan dicatat untuk audit? Ketiga, definisikan risk tier dan threshold approval. Tindakan mana yang boleh auto-execute, mana yang perlu monitoring, mana yang wajib approval, dan mana yang harus tetap human-led? Keempat, rancang workflow approval yang benar-benar usable. Apakah approver akan menerima konteks, evidence, risiko, dan alternatif yang cukup untuk mengambil keputusan cepat dan bertanggung jawab? Kelima, siapkan jalur escalation dan remediation. Kapan agent harus berhenti, ke siapa ia mengeskalasi, dan bagaimana rollback atau compensation action dilakukan jika hasilnya salah?

Ada beberapa sinyal bahaya bahwa topik ini belum siap di-scale. Agent sudah bisa memanggil tool produksi, tetapi guardrails masih sebatas prompt dan content filter. Approval manusia dipakai untuk hampir semua kasus karena perusahaan belum percaya pada policy runtime. Tidak ada catatan formal mengapa tindakan diizinkan, ditolak, atau dieskalasi. Reviewer manusia menerima approval request tanpa evidence yang cukup. Tidak ada jalur rollback jika agent salah mengubah state bisnis. Tim bisnis, teknologi, risk, dan audit memiliki definisi berbeda tentang "aman untuk otomatis." Otonomi agent dinaikkan karena tekanan efisiensi, bukan karena bukti kontrol dan kualitas.

Pertanyaan reflektif untuk CIO, COO, CHRO, dan transformation leader: jika besok satu agent di perusahaan Anda salah mengambil tindakan yang berdampak nyata pada pelanggan, karyawan, atau transaksi, apakah Anda bisa menjelaskan dengan cepat guardrail apa yang seharusnya menghentikannya, policy apa yang mengizinkannya, siapa yang seharusnya menyetujui, dan bagaimana sistem memulihkannya? Jika jawabannya belum tegas, maka fokus berikutnya bukan menambah lebih banyak agent, melainkan memperkuat control and runtime governance terlebih dahulu.
