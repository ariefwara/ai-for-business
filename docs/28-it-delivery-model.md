---
title: "IT Delivery Model dengan AI Software Agents"
sidebar_position: 28
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# IT Delivery Model dengan AI Software Agents

<ArticleDiagram src="/img/diagrams/28-it-delivery-model.png" alt="Diagram: IT Delivery Model dengan AI Software Agents" />

Banyak tim teknologi memulai perjalanan AI dari tempat yang paling nyaman: coding assistant. Developer memakai AI untuk menulis boilerplate, membuat unit test, atau merangkum dokumentasi. Hasilnya terasa langsung—pekerjaan individu jadi lebih cepat. Tapi jika kita berhenti di situ, kita hanya menyentuh permukaan.

Pertanyaan yang lebih mendasar mulai muncul ketika tim menyadari bahwa bottleneck software delivery bukan di kecepatan mengetik. Requirement masih ambigu. Review menumpuk. Testing terlambat. Incident butuh waktu lama untuk dipahami. Dan handoff antar-peran tetap menjadi sumber keterlambatan yang tidak tersentuh oleh coding assistant mana pun.

Di sinilah perusahaan mulai bergerak dari sekadar memberi developer alat bantu, menuju mendesain ulang cara kerja tim teknologi secara keseluruhan. Bukan lagi soal seberapa cepat satu orang menulis kode, tetapi bagaimana AI bisa mengambil bagian dalam alur kerja pengiriman perangkat lunak dan operasi TI dari ujung ke ujung.

## Apa yang Berubah Saat AI Mulai Bekerja dalam Workflow

Selama ini, copilot bekerja dalam pola yang sederhana: developer meminta bantuan, AI memberi saran, manusia memilih dan mengeksekusi. Model ini mempercepat tugas individual, tetapi tidak mengubah struktur delivery. Masalah-masalah sistemik—seperti test coverage yang tidak konsisten, security finding yang terlambat ditemukan, atau deployment readiness yang tidak jelas—tetap ada.

Software agent bekerja secara berbeda. Ia tidak hanya menjawab permintaan satu per satu. Ia bisa mengambil bagian dalam rangkaian kerja yang lebih panjang: memecah requirement menjadi user story, membuat implementasi awal, menghasilkan test, melakukan review awal, memeriksa dependency, hingga membantu triage insiden produksi. Dengan kata lain, copilot meningkatkan produktivitas tugas, sementara software agent berpotensi mengubah alur delivery itu sendiri.

Perbedaan ini penting karena jika tidak dipahami, dua kesalahan umum akan muncul. Pertama, organisasi melihat peningkatan kecepatan coding lalu mengira seluruh siklus pengiriman ikut membaik. Padahal jika review, testing, dan release tetap lambat, throughput sistem tidak berubah banyak. Kedua, ada organisasi yang terlalu cepat memberi otonomi besar pada agent—memberinya hak merge otomatis atau deploy tanpa guardrail yang matang. Ini berbahaya, terutama di lingkungan dengan sistem inti, technical debt tinggi, dan kewajiban audit.

Software agent paling berguna pada pekerjaan yang berulang tetapi tetap membutuhkan konteks teknis, memiliki artefak yang bisa ditelusuri, dapat diuji secara otomatis, dan punya batas risiko yang jelas. Misalnya breakdown requirement untuk enhancement kecil, pembuatan test regresi, review awal pull request, atau triage incident berbasis runbook. Sebaliknya, agent kurang tepat jika dipaksa mengambil alih keputusan arsitektur besar, redesign sistem inti yang penuh trade-off, atau perubahan produksi berisiko tinggi tanpa pengawasan manusia.

## Bukan Satu Agent untuk Semua

Cara paling sehat memikirkan software agents di siklus pengiriman bukan sebagai satu entitas yang mengerjakan semuanya, melainkan sebagai sekumpulan agent dengan peran terbatas. Pola ini lebih cocok untuk enterprise karena tanggung jawab lebih jelas, evaluasi lebih mudah, kontrol lebih presisi, dan kegagalan satu agent tidak langsung merusak seluruh alur.

Analyst agent dapat membantu menerjemahkan requirement. Banyak masalah delivery berawal dari ticket yang berisi tujuan umum tetapi tidak cukup jelas untuk diimplementasikan. Agent ini bisa mengubah requirement bisnis menjadi user story, menyusun acceptance criteria, mengidentifikasi dependency awal, dan menandai area yang masih ambigu. Namun penting untuk diingat: product manager, business analyst, atau lead engineer tetap harus memvalidasi apakah breakdown tersebut benar secara bisnis dan teknis.

Developer agent dapat membuat implementasi awal setelah requirement cukup jelas. Ia bisa membuat skeleton code, menulis fungsi awal, memperbarui konfigurasi, atau menghasilkan draft migration script untuk perubahan yang terbatas. Nilai utamanya bukan menggantikan engineer, tetapi mengurangi waktu mulai dari nol. Engineer manusia lalu meninjau apakah desainnya sesuai pattern arsitektur, apakah error handling memadai, dan apakah perubahan ini aman terhadap sistem lain.

QA agent dapat membantu mengatasi masalah klasik: code selesai lebih cepat daripada test. Agent ini bisa membuat unit test, menyusun integration test, menghasilkan test data sintetis, dan menurunkan acceptance criteria menjadi skenario uji. Ini sangat berguna karena test sering menjadi bottleneck yang kurang glamor tetapi sangat menentukan kualitas delivery.

Security agent dapat dimasukkan lebih awal untuk memeriksa dependency berisiko, menandai pola coding yang rawan, mengecek secret exposure, dan menghubungkan perubahan dengan kebijakan secure coding. Ketika developer agent menambahkan library baru, security agent dapat langsung menandai bahwa library tersebut memiliki isu yang perlu ditinjau.

Reviewer agent dapat melakukan review awal terhadap pull request: apakah perubahan sesuai requirement, apakah ada test yang hilang, apakah struktur konsisten, dan apakah dokumentasi perlu diperbarui. Ini bukan pengganti code review manusia, tetapi dapat mengurangi beban review dengan menyaring masalah dasar sebelum senior engineer masuk.

Dalam pola multi-agent yang sehat, manusia tetap memegang tiga tanggung jawab utama. Keputusan tentang batas sistem, trade-off performa, dan integrasi lintas domain tetap harus dipimpin engineer manusia. Untuk perubahan yang akan masuk branch utama atau production path, manusia tetap menjadi penanggung jawab akhir. Dan tidak ada agent yang boleh menjadi pemilik risiko produksi—akuntabilitas tetap berada pada engineering manager, tech lead, atau change owner yang ditunjuk.

Bayangkan tim membangun enhancement pada modul customer service di CRM internal. Analyst agent memecah requirement menjadi user story. Developer agent membuat draft implementasi. QA agent menghasilkan unit test dan skenario regresi. Security agent memeriksa dependency baru dan pola akses data pelanggan. Reviewer agent memberi komentar awal pada pull request. Human engineer meninjau desain, memperbaiki edge case, dan memutuskan apakah perubahan layak di-merge. Pipeline CI/CD menjalankan kontrol otomatis sebelum perubahan bisa maju. Pola seperti ini lebih realistis daripada narasi "AI menulis seluruh aplikasi."

## IT Operations: Dari Alert ke Tindakan yang Lebih Cepat

Jika software agents hanya dipakai di fase development, perusahaan baru menangkap sebagian nilai. Area lain yang sangat relevan adalah IT operations. Banyak tim operasi masih menghabiskan waktu besar untuk membaca alert, mencari runbook, membuka log dari beberapa alat, mengumpulkan konteks konfigurasi, dan menyiapkan eskalasi. Pekerjaan ini penting, tetapi sering repetitif dan memakan waktu saat tekanan sedang tinggi.

Incident agent dapat membaca alert dari monitoring tools, menghubungkannya dengan service map, mencari runbook yang relevan, memeriksa log dan perubahan terbaru, lalu menyiapkan hipotesis penyebab dan proposal remediation. Misalnya setelah deploy aplikasi pembayaran muncul lonjakan error rate, incident agent dapat melihat bahwa ada deployment baru 20 menit sebelumnya, menarik log error utama, mencocokkan dengan runbook rollback, dan menyiapkan rekomendasi. Nilai utamanya adalah mempercepat pemahaman situasi, bukan langsung mengeksekusi tindakan berisiko tinggi.

Service desk agent dapat menangani request standar seperti reset akses, menjawab FAQ teknis, membantu onboarding tool, atau membuka tiket dengan klasifikasi yang benar. Ini sangat relevan untuk shared services TI yang menangani volume tinggi. Namun batasnya harus jelas: jika request menyentuh privilege tinggi, data sensitif, atau perubahan konfigurasi penting, agent harus berhenti di verifikasi dan eskalasi.

Change management agent dapat memeriksa readiness sebelum release. Banyak masalah produksi bukan karena code salah total, tetapi karena change tidak cukup siap. Agent ini dapat memeriksa dependency antar-service, memastikan test dan scan sudah lengkap, menilai apakah ada open incident terkait, memeriksa jadwal release window, dan menyiapkan ringkasan risiko untuk approver. Ini membuat proses change lebih berbasis evidence, bukan sekadar checklist manual.

## Kontrol yang Tidak Bisa Ditawar

Semakin dekat agent ke codebase, pipeline, dan production, semakin penting kontrolnya. Di fungsi IT, guardrail bukan tambahan belakangan. Ia adalah syarat desain.

Bahkan jika agent menghasilkan code yang baik, ia tidak boleh otomatis merge ke branch utama, mengubah konfigurasi produksi, atau menjalankan deployment kecuali ada policy yang sangat jelas dan approval yang sesuai dengan risk tier. Untuk perubahan low-risk di environment non-production, otonomi bisa lebih longgar. Tetapi untuk production path, perusahaan harus konservatif.

Setiap perubahan yang dibuat atau dibantu agent perlu melewati test otomatis, static analysis, security scan, trace ke requirement atau ticket, dan review manusia sesuai tingkat risiko. Ini penting bukan hanya untuk kualitas, tetapi juga untuk auditability. Jika suatu saat terjadi insiden, organisasi harus bisa menjawab: perubahan ini berasal dari requirement mana, agent apa yang terlibat, kontrol apa yang sudah dijalankan, dan siapa yang menyetujui langkah akhirnya.

Keberhasilan engineering agents tidak boleh diukur hanya dari berapa banyak kode yang dihasilkan. Metrik yang lebih relevan adalah lead time, defect leakage, incident MTTR, developer satisfaction, dan review burden. Trade-off di sini harus dibaca jujur. Jika lead time turun tetapi defect leakage naik, modelnya belum sehat. Jika coding lebih cepat tetapi review burden melonjak, perusahaan hanya memindahkan bottleneck.

## Kapan Pola Ini Belum Tepat

Tidak semua organisasi siap mengadopsi model ini. Beberapa kondisi yang membuat scale-up sebaiknya ditahan: codebase sangat berantakan dan tidak punya test baseline, CI/CD pipeline belum disiplin, requirement management lemah, akses ke production masih terlalu longgar, observability minim, atau engineering culture belum siap menerima review berbasis evidence. Dalam kondisi seperti itu, agent cenderung mempercepat output tanpa memperkuat sistem kontrol. Hasilnya adalah delivery yang tampak cepat tetapi makin rapuh.

Organisasi yang paling siap biasanya sudah memiliki pipeline engineering yang cukup matang, standar coding dan testing yang jelas, ITSM dan observability yang terhubung, serta ownership yang tegas antara engineering, platform, security, dan operations.

Platform engineering akan menjadi fungsi kunci dalam model ini. Bukan hanya karena mereka membangun developer platform, tetapi karena mereka harus menyediakan tool registry yang aman, akses ke CI/CD dan observability secara terkendali, policy enforcement, audit trail, dan environment yang memisahkan draft, test, dan production action. Tanpa platform discipline, software agents akan cepat berubah menjadi kumpulan automasi liar yang sulit diaudit.

## Pertanyaan untuk Dibawa Pulang

Keputusan yang perlu diambil sekarang bukan soal memilih tool AI terbaik. Pertanyaannya lebih mendasar: apakah fungsi IT di perusahaan Anda masih melihat AI terutama sebagai alat bantu coding untuk individu, atau sudah mulai mendesain ulang software delivery, IT operations, dan platform engineering sebagai sistem kerja human-agent yang terukur, terkendali, dan layak di-scale?

Jika jawabannya masih yang pertama, mulailah dengan membedakan agenda copilot dan software agent. Pilih workflow awal yang bounded—seperti requirement breakdown, test generation, atau incident triage—bukan langsung merge dan deploy otomatis. Tetapkan batas otonomi per agent: mana yang hanya draft, recommend, execute with approval, dan mana yang sama sekali tidak boleh dilakukan. Bangun kontrol di pipeline, bukan di presentasi. Dan tentukan metrik outcome, bukan vanity metric.

Jika jawabannya sudah yang kedua, maka tantangan berikutnya adalah memastikan bahwa setiap agent memiliki batas yang jelas, setiap perubahan memiliki jejak kontrol, dan setiap keputusan arsitektur serta risiko produksi tetap di tangan manusia. Karena pada akhirnya, transformasi delivery model bukan tentang seberapa banyak kode yang bisa dihasilkan AI, tetapi tentang bagaimana manusia dan agent bisa bekerja bersama secara terukur dan bertanggung jawab.
