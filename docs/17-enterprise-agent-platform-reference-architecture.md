---
title: "Reference Architecture untuk Enterprise Agent Platform"
sidebar_position: 17
image: "/img/diagrams/17-enterprise-agent-platform-reference-architecture.png"
description: "Bayangkan tim finance Anda berhasil membangun agent untuk membantu proses close bulanan. Hasilnya menjanjikan: waktu rekonsiliasi berkurang, exception lebih cepat..."
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Reference Architecture untuk Enterprise Agent Platform

<ArticleDiagram src="/img/diagrams/17-enterprise-agent-platform-reference-architecture.png" alt="Diagram: Reference Architecture untuk Enterprise Agent Platform" />

Bayangkan tim finance Anda berhasil membangun agent untuk membantu proses close bulanan. Hasilnya menjanjikan: waktu rekonsiliasi berkurang, exception lebih cepat terdeteksi, dan tim bisa fokus pada analisis, bukan entry data. Melihat keberhasilan itu, tim procurement mulai membangun agent untuk intake-to-PO. Tim customer service ingin agent untuk complaint resolution. Tim IT operations mulai merancang agent untuk incident triage.

Setiap tim memulai dengan semangat yang sama. Masing-masing membangun dengan caranya sendiri. Tim finance membuat logging sederhana di spreadsheet. Tim procurement memilih model gateway yang berbeda. Tim customer service menyimpan konteks di file lokal. Tim IT operations membuat mekanisme approval sendiri.

Secara lokal, semua keputusan itu masuk akal. Secara enterprise, hasilnya mulai terasa: integrasi tool dikerjakan berulang, kontrol akses tidak konsisten, log dan audit tidak bisa dibandingkan, evaluasi antar-agent sulit dilakukan. Yang tadinya terasa seperti kemajuan, perlahan berubah menjadi fragmentasi.

Inilah titik di mana perusahaan mulai bertanya: apakah kita sedang membangun beberapa aplikasi agent, atau sedang membangun platform enterprise untuk menjalankan agent secara aman dan terukur?

## Mengapa Pola "Setiap Tim Membangun Sendiri" Mulai Bermasalah

Banyak organisasi memulai dengan pendekatan yang benar: pilih satu use case bernilai, bangun pilot cepat, buktikan manfaat. Masalah muncul ketika keberhasilan awal itu direplikasi tanpa disiplin platform. Setiap tim membangun agent dengan stack, logging, dan kontrolnya sendiri. Hasilnya adalah agent sprawl: banyak agent yang berjalan, tetapi tidak ada fondasi bersama yang membuat semuanya dapat dikelola secara konsisten.

Untuk memahami mengapa ini menjadi masalah, kita perlu membedakan dua hal yang sering tercampur.

**Agent application** adalah solusi untuk use case tertentu. Misalnya agent untuk AP exception handling, agent untuk procurement intake-to-PO, atau agent untuk customer complaint resolution. Masing-masing berisi workflow, prompt, tool, konteks, dan UI yang spesifik untuk domain tersebut. Ini adalah lapisan yang langsung terlihat oleh pengguna bisnis.

**Enterprise agent platform** adalah lapisan bersama yang dipakai oleh banyak agent application. Platform ini tidak menyelesaikan proses bisnis tertentu secara langsung. Ia menyediakan capability standar seperti identity dan access control, model gateway, tool registry, context retrieval, observability, evaluation harness, deployment dan rollback, policy enforcement, serta registry dan lifecycle governance.

Tanpa pembedaan ini, perusahaan sering salah arah. Ada yang mengira sedang membangun platform, padahal sebenarnya hanya membuat agent pertama dengan banyak komponen custom yang sulit dipakai ulang. Ada juga yang terlalu lama membangun platform generik tanpa use case nyata, sehingga menjadi proyek infrastruktur yang tidak pernah dipakai.

Platform bersama menjadi penting karena tiga masalah yang muncul saat skala. Pertama, reusability: capability seperti model routing, permission-aware retrieval, audit logging, dan approval orchestration tidak perlu dibangun ulang untuk setiap agent. Kedua, control consistency: jika semua agent melewati policy enforcement, observability, dan identity pattern yang sama, governance menjadi jauh lebih kuat. Ketiga, operating leverage: tim platform dapat mengelola cost, latency, incident, dan lifecycle secara terpusat, sementara domain team fokus pada logic bisnis.

Tentu tidak semua organisasi harus langsung membangun platform penuh. Jika perusahaan masih pada satu atau dua pilot yang belum menyentuh sistem inti, pendekatan ringan bisa cukup. Namun begitu agent mulai memanggil API enterprise, mengakses data sensitif, mengeksekusi tindakan, atau dipakai lintas fungsi, pola platform bersama menjadi kebutuhan, bukan kemewahan.

## Runtime: Tempat Agent Benar-Benar Berjalan

Lapisan pertama dalam arsitektur referensi adalah tempat agent menerima trigger, menalar, mengambil konteks, memanggil tool, dan menghasilkan tindakan. Di sinilah logika eksekusi berada.

Orchestrator adalah komponen yang mengelola alur kerja agent. Ia menerima trigger dari user, event, atau workflow, memecah tugas menjadi langkah-langkah, menentukan kapan model dipanggil, kapan tool digunakan, kapan manusia diminta approval, dan kapan proses dihentikan atau dieskalasi. Pada use case sederhana, orchestrator bisa ringan. Tetapi untuk workflow enterprise seperti finance close atau supply chain exception management, orchestrator menjadi penting karena prosesnya multi-step, penuh handoff, dan sering melibatkan beberapa sistem. Di finance close, orchestrator dapat mengurutkan langkah pengambilan data rekonsiliasi, klasifikasi exception, drafting commentary, lalu routing ke controller. Di IT operations, orchestrator dapat menggabungkan event monitoring, diagnostik, runbook, dan approval engineer.

Model gateway adalah komponen yang sering diremehkan, padahal sangat penting. Fungsinya bukan sekadar menghubungkan ke model, tetapi memilih model yang sesuai untuk task tertentu, mengatur fallback jika model utama gagal, menerapkan logging standar, mengontrol cost dan latency, dan menjaga konsistensi kebijakan penggunaan model. Tanpa model gateway, setiap agent cenderung memanggil model secara langsung dengan pola berbeda-beda. Akibatnya, perusahaan kehilangan kontrol atas biaya, kualitas, dan auditability. Model gateway juga penting untuk strategi multi-model. Task klasifikasi sederhana mungkin cukup memakai model yang lebih ringan, sementara reasoning kompleks atau synthesis lintas dokumen mungkin butuh model yang lebih kuat.

Tool dalam enterprise agent platform tidak boleh diperlakukan sebagai daftar API bebas pakai. Diperlukan dua lapisan berbeda. Tool registry adalah katalog tool yang tersedia, berisi metadata, owner, izin, risk tier, dan kontrak penggunaannya. Tool execution service adalah lapisan runtime yang benar-benar mengeksekusi tool call setelah validasi. Setiap aksi agent harus melewati validasi parameter, permission check, policy evaluation, audit logging, dan jika perlu approval workflow. Ini mencegah agent bertindak langsung ke ERP, CRM, HRIS, atau ITSM tanpa kontrol yang memadai. Agent procurement boleh memanggil tool untuk membuat draft purchase request, tetapi tool execution service dapat menolak eksekusi jika vendor belum approved. Agent customer operations boleh menyiapkan refund, tetapi eksekusi ditahan jika nilai melewati threshold policy.

Agent enterprise jarang bekerja dalam satu interaksi tunggal. Ia perlu menyimpan status workflow, hasil langkah sebelumnya, keputusan sementara, dan kadang memory yang relevan untuk interaksi lanjutan. Karena itu, arsitektur perlu membedakan state store untuk status operasional workflow yang deterministik, dan memory service untuk konteks tambahan yang dapat dipakai agent lintas sesi atau lintas langkah. Banyak implementasi mencampur semuanya sebagai memory, padahal kebutuhan governance-nya berbeda. State workflow biasanya harus lebih ketat, terstruktur, dan mudah diaudit. Memory bisa lebih fleksibel, tetapi tetap harus tunduk pada permission dan retention policy.

Policy enforcement point adalah titik di runtime tempat keputusan policy diterapkan. Ia harus berada dekat dengan tool call, data access, dan action execution. Tanpa enforcement point yang eksplisit, policy hanya menjadi dokumen atau logika tersebar di banyak komponen. Untuk enterprise, ini terlalu rapuh.

## Context dan Knowledge: Kualitas Agent Ditentukan di Sini

Banyak kegagalan agent bukan karena modelnya buruk, tetapi karena konteks yang diberikan salah, tidak lengkap, kadaluarsa, atau melanggar permission boundary. Context layer bukan pelengkap. Ia adalah dependency utama kualitas agent.

Platform perlu ingestion pipeline untuk membawa dokumen, knowledge article, policy, SOP, transcript, dan data referensi ke dalam context layer secara terkelola. Pipeline ini menangani ekstraksi, chunking atau segmentasi, enrichment metadata, klasifikasi sensitivitas, versioning, dan sinkronisasi pembaruan. Tanpa ingestion yang disiplin, retrieval akan mengambil dokumen yang tidak relevan atau usang.

Tiga komponen penyimpanan memiliki peran berbeda. Vector store membantu pencarian semantik atas konten tidak terstruktur. Metadata catalog memberi struktur: sumber dokumen, pemilik, tanggal berlaku, klasifikasi, domain, dan hak akses. Knowledge graph berguna ketika perusahaan perlu memahami relasi antar-entitas: vendor, kontrak, produk, pelanggan, akun, insiden, lokasi, atau kebijakan. Tidak semua use case butuh knowledge graph sejak awal. Untuk knowledge assistant sederhana, vector retrieval plus metadata mungkin cukup. Tetapi untuk use case enterprise yang melibatkan relasi kompleks—misalnya supply chain disruption, customer entitlement, atau finance exception lintas entitas—graph dapat meningkatkan kualitas reasoning dan navigasi konteks.

Permission-aware retrieval adalah salah satu capability paling penting. Agent tidak boleh mengambil konteks hanya karena dokumen itu mirip secara semantik. Retrieval harus sadar izin: siapa user atau principal asal, agent mana yang meminta, domain apa yang sedang diproses, dan data apa yang boleh diakses dalam konteks tersebut. Agent HR tidak boleh menarik dokumen kompensasi yang tidak relevan dengan kasus. Agent customer service tidak boleh mengambil histori pelanggan lain. Agent finance tidak boleh mencampur guidance lintas entitas tanpa hak akses yang sesuai.

Agent enterprise yang baik hampir selalu perlu menggabungkan dua jenis konteks: structured data dari ERP, CRM, HRIS, data warehouse, atau event stream, dan unstructured data dari dokumen, email, SOP, kontrak, knowledge base, atau transcript. Platform sebaiknya memiliki context service yang dapat menyatukan keduanya secara aman. Di AP exception handling, agent perlu invoice, PO, dan goods receipt dari sistem terstruktur, plus policy dan histori kasus dari dokumen. Di customer operations, agent perlu entitlement dan histori order dari CRM/OMS, plus knowledge article dan transcript interaksi. Jika context service lemah, agent akan terdengar pintar tetapi bertindak dengan dasar yang rapuh.

## Governance dan Operations: Agar Agent Bisa Dioperasikan di Production

Platform enterprise tidak selesai di runtime dan context. Ia juga membutuhkan lapisan governance dan operations yang membuat agent dapat diaudit, diuji, dan dikelola sepanjang siklus hidupnya.

Agent registry adalah katalog resmi semua agent yang hidup di enterprise. Minimal berisi nama dan tujuan agent, owner bisnis dan teknis, risk tier, tools dan data source, tingkat otonomi, status lifecycle, dan dependensi utama. Policy registry menyimpan aturan yang dipakai lintas agent: threshold transaksi, aturan approval, pembatasan tool, klasifikasi risiko, dan kebijakan domain tertentu. Tanpa registry, perusahaan tidak punya inventaris yang layak untuk governance.

Tidak semua agent perlu kontrol yang sama. Platform harus mendukung risk tiering. Agent knowledge internal dengan mode assist tentu berbeda dari agent yang bisa mengeksekusi tindakan di ERP. Agent drafting commentary berbeda dari agent yang bisa memicu refund atau remediasi produksi. Risk tiering ini harus terhubung ke approval workflow, observability depth, testing rigor, dan release control.

Semua jejak penting—tool call, policy decision, approval, context retrieval, outcome—perlu masuk ke audit storage yang aman dan dapat ditelusuri. Di samping itu, platform perlu evaluation harness: lingkungan dan alat untuk menguji agent sebelum dan sesudah release. Ini mencakup golden dataset, scenario test, policy compliance test, regression test saat model atau prompt atau tool berubah, dan sampling evaluasi pasca-produksi. Tanpa evaluation harness, perusahaan hanya tahu agent berjalan, tetapi tidak tahu apakah kualitasnya membaik atau memburuk.

Dari sisi operasi, platform perlu menyediakan dashboard runtime health, dashboard kualitas dan outcome, alert untuk incident teknis, policy breach, dan cost spike, mekanisme rollback atau disable cepat, serta cost management untuk model, retrieval, dan tool usage. Agentic systems tidak hanya bisa gagal secara teknis. Mereka juga bisa menjadi terlalu mahal, terlalu lambat, terlalu sering eskalasi, atau diam-diam menurunkan kualitas keputusan.

## Urutan Build yang Masuk Akal

Kesalahan klasik dalam platform strategy adalah mencoba membangun arsitektur lengkap sejak hari pertama. Ini hampir selalu berakhir lambat, mahal, dan jauh dari kebutuhan bisnis. Pendekatan yang lebih sehat adalah membangun minimum viable platform yang lahir dari use case production-grade pertama.

Urutan praktis yang biasanya paling masuk akal dimulai dari model gateway. Mulai dari sini agar semua agent awal punya jalur standar untuk akses model, logging, fallback, dan cost control. Selanjutnya, tool registry dan tool execution. Begitu agent mulai menyentuh sistem enterprise, capability ini menjadi wajib. Tanpa ini, integrasi akan liar dan sulit diaudit. Setelah itu, logging, tracing, dan observability dasar. Sebelum skala, perusahaan harus bisa melihat apa yang dilakukan agent dan berapa biaya serta latency-nya. Permission enforcement dan policy check menyusul saat agent mulai membaca data sensitif atau mengeksekusi tindakan. Evaluation harness diperlukan begitu perubahan model, prompt, atau tool mulai sering terjadi. Memory service dan agent registry yang lebih matang bisa dibangun kemudian, kecuali use case memang membutuhkannya sejak awal.

Prinsip utamanya: capability harus lahir dari use case nyata. Jika perusahaan membangun knowledge graph tanpa use case yang benar-benar memerlukan relasi kompleks, itu berisiko menjadi aset mahal yang jarang dipakai. Jika membangun memory service canggih padahal agent masih bersifat task-based dan stateless, itu juga prematur. Platform yang sehat tumbuh dari kebutuhan nyata, tetapi dengan pola arsitektur yang konsisten.

Bayangkan perusahaan memulai dari dua use case: AP exception handling di shared services dan incident triage di IT operations. Dari dua use case ini, perusahaan mungkin menemukan kebutuhan bersama paling mendesak adalah model gateway, tool registry, observability, permission-aware retrieval, dan approval workflow. Sementara knowledge graph penuh atau memory lintas-agent mungkin belum mendesak. Dengan cara ini, platform tumbuh berdasarkan economics dan risiko nyata, bukan berdasarkan daftar fitur.

Arsitektur referensi yang baik bukan yang paling lengkap di atas kertas, melainkan yang membuat perusahaan bisa menjawab satu pertanyaan sederhana dengan percaya diri: jika besok kita menambah sepuluh agent baru di finance, procurement, customer operations, dan IT, apakah kita punya fondasi bersama untuk menjalankannya dengan aman, terukur, dan tanpa menciptakan agent sprawl?

Jika jawabannya belum, maka prioritas berikutnya bukan menambah agent lagi, melainkan memperkuat platformnya.
