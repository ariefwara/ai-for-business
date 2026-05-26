---
title: "Agent Factory: Cara Menskalakan AI Agents Tanpa Agent Sprawl"
sidebar_position: 34
---

# Agent Factory: Cara Menskalakan AI Agents Tanpa Agent Sprawl

Bayangkan situasi ini: tim finance sudah berhasil membuat agent yang membantu proses close bulanan. Tim procurement melihat hasilnya dan ingin agent serupa untuk intake dan policy check. Customer operations ikut tertarik untuk case triage dan response drafting. IT operations mulai merancang agent untuk incident triage. Supply chain ingin exception coordination. Shared services dan GCC melihat peluang untuk menstandardisasi layanan lintas geografi.

Pada titik ini, banyak perusahaan merasa sedang bergerak maju dengan cepat. Tapi justru di sinilah risiko baru mulai terbentuk.

Setiap tim membangun agent dengan caranya sendiri. Masing-masing memilih framework yang berbeda, menghubungkan ke sistem inti dengan cara yang berbeda, mendefinisikan success rate dengan standar yang berbeda, dan membuat approval workflow dari nol. Logging dan audit trail tidak seragam. Tidak ada satu pun catatan resmi tentang agent mana yang aktif, siapa pemiliknya, dan seberapa besar risiko yang dibawanya.

Dalam jangka pendek, semua ini tampak seperti kecepatan. Dalam jangka menengah, ini menjadi beban maintenance yang tidak terlihat sampai sudah terlalu berat. Inilah yang disebut **agent sprawl**.

## Mengapa Pola Ini Berbahaya

Masalah utamanya bukan jumlah agent semata. Masalahnya adalah variasi yang tidak perlu. Ketika lima tim berbeda membangun lima agent untuk lima fungsi yang berbeda, sangat mungkin mereka semua membutuhkan pola yang sama: membaca dokumen, memeriksa kebijakan, mengelompokkan kasus, mengumpulkan bukti, menentukan jalur persetujuan, atau mengorkestrasi langkah penyelesaian. Tanpa koordinasi, pola yang sama dibangun berulang kali oleh tim yang berbeda.

Ada tiga alasan mengapa situasi ini perlu diatasi sebelum menjadi kebiasaan.

Pertama, duplikasi desain dan engineering. Banyak use case enterprise ternyata memakai pola yang mirip. Document intake, policy check, exception triage, approval routing, evidence pack, dan case resolution muncul berulang di banyak fungsi. Tanpa cara untuk berbagi pola, setiap tim memulai dari layar kosong.

Kedua, governance sulit mengikuti skala. Semakin banyak agent yang menyentuh workflow nyata, semakin penting konsistensi pada identity, access control, evaluasi, observability, dan approval threshold. Governance tidak bisa lagi bergantung pada review ad hoc per proyek.

Ketiga, biaya perubahan menjadi tinggi. Agent bukan artefak sekali jadi. Prompt berubah, tool schema berubah, policy berubah, model berubah, dan workflow bisnis ikut berubah. Tanpa cara yang terstruktur, setiap perubahan berarti kerja ulang yang besar.

## Kapan Masalah Ini Mulai Terasa

Pada fase pilot, improvisasi masih bisa ditoleransi. Satu tim kecil bisa membangun satu agent untuk satu workflow sempit, dengan sponsor bisnis yang dekat dan kontrol manual yang masih memadai. Tapi begitu permintaan datang dari banyak domain, improvisasi berubah menjadi utang operasional.

Agent sprawl biasanya mulai terlihat ketika perusahaan sudah melewati tiga sinyal. Pertama, ada lebih dari satu domain yang ingin membangun agent. Kedua, ada kebutuhan reuse lintas use case yang mulai terlihat. Ketiga, governance mulai kesulitan mengikuti variasi implementasi.

Jika perusahaan masih di tahap sangat awal dan belum punya satu pun pilot yang benar-benar membuktikan value, membangun struktur yang terlalu besar terlalu cepat justru berisiko menciptakan overhead. Factory bukan langkah pertama. Ia adalah langkah scale.

## Yang Dibutuhkan: Bukan Sekadar Platform, Tapi Mesin Delivery

Jika perusahaan ingin memiliki banyak agent yang benar-benar dipakai dalam operasi, maka perusahaan tidak cukup hanya punya platform. Perlu ada cara untuk membuat, menguji, merilis, dan mengoperasikan agent secara repeatable—tanpa menjadikannya bottleneck birokratis.

Inilah yang dimaksud dengan agent factory. Bukan sekadar tim engineering pusat. Ia adalah kombinasi dari proses intake, penilaian nilai, library pola, template teknis, evaluasi, pipeline rilis, dan operasi lifecycle.

### Intake Process dan Value Assessment

Tidak semua ide agent layak dibangun. Karena itu, factory perlu mekanisme intake yang memaksa bisnis menjelaskan workflow apa yang ingin diperbaiki, outcome apa yang ditargetkan, volume dan pain point-nya, data dan sistem apa yang terlibat, siapa owner prosesnya, dan risk profile-nya.

Di sini factory berfungsi sebagai filter, bukan penghambat. Tujuannya bukan menolak ide, tetapi mengklasifikasikan mana yang siap dipilotkan, mana yang perlu perbaikan data atau proses dulu, mana yang lebih cocok sebagai fitur platform biasa daripada agent, dan mana yang terlalu berisiko untuk saat ini.

Contohnya, tim procurement mengusulkan agent untuk mengotomasi sourcing. Setelah dinilai, ternyata masalah terbesar justru ada pada intake request yang salah klasifikasi dan dokumen tidak lengkap. Factory dapat mengarahkan backlog ke use case yang lebih bounded: procurement intake dan policy check, bukan langsung strategic sourcing.

### Design Pattern Library

Ini adalah salah satu aset paling penting. Factory harus mengumpulkan pola yang berulang dan menjadikannya library yang bisa dipakai ulang.

Beberapa pattern yang sering muncul di banyak fungsi antara lain document intake, policy check, exception triage, evidence pack, approval routing, dan case resolution. Pattern ini bisa dipakai lintas domain. Evidence pack di finance close, policy check di procurement, exception triage di IT incident, approval routing di HR request, case resolution di customer operations. Semakin banyak pattern reusable, semakin cepat delivery dan semakin konsisten governance.

### Agent Templates dan Reference Implementation

Pattern konseptual perlu diterjemahkan menjadi template teknis. Factory sebaiknya menyediakan template agent card, template tool wrapper, template approval workflow, template observability dashboard, template evaluation suite, dan reference architecture untuk agent low-risk, medium-risk, dan high-risk. Ini penting agar domain squad tidak memulai dari layar kosong.

### Evaluation Harness

Salah satu penyebab agent sprawl adalah setiap tim menguji agent dengan cara sendiri. Factory harus menyediakan evaluation harness yang lebih standar: test case historis, edge case, policy compliance checks, tool failure simulation, dan regression test saat prompt atau model berubah.

Untuk agent yang menyentuh workflow penting, evaluasi tidak boleh berhenti pada "jawabannya terlihat bagus". Harus ada pengujian apakah output usable, konsisten, patuh pada policy, dan aman untuk level otonomi yang diberikan.

### Deployment Pipeline dan Lifecycle Control

Agent juga butuh SDLC-nya sendiri. Factory perlu memastikan perubahan pada prompt, model, tool schema, policy, knowledge source, dan approval logic melewati pipeline yang jelas: dev, test, review, release, monitoring, rollback. Tanpa ini, agent akan berubah diam-diam di produksi dan sulit diaudit.

### Agent Registry

Setiap perusahaan yang serius perlu memiliki agent registry: inventaris resmi semua agent yang ada, termasuk nama dan tujuan agent, owner bisnis, owner teknis, risk tier, status lifecycle, sistem yang diakses, level otonomi, metrik utama, dan status produksi. Registry ini penting untuk dua hal. Pertama, mencegah duplikasi. Kedua, memberi governance board pandangan portofolio yang nyata, bukan sekadar daftar proyek.

## Siapa yang Menjalankan Factory

Agent factory bukan hanya urusan data scientist atau engineer. Ia membutuhkan pool spesialis yang bekerja lintas domain.

Domain analyst menerjemahkan pain point bisnis menjadi workflow yang bisa didesain ulang. Mereka penting agar factory tidak jatuh menjadi mesin teknologi tanpa pemahaman operasi. Agent engineer membangun agent logic, orchestration, tool calling, dan integrasi ke platform agentic. Data engineer menyiapkan akses data, quality checks, dan data product yang dibutuhkan agent. Risk reviewer menilai risk tier, kontrol akses, approval threshold, dan implikasi compliance. Change lead membantu adopsi, training supervisor, perubahan SOP, dan komunikasi ke pengguna.

Dalam perusahaan besar, pool ini bisa berada di pusat tetapi dialokasikan ke domain squad. Dalam shared services atau GCC, model ini sangat relevan karena volume use case tinggi dan kebutuhan standardisasi lebih besar.

## Sentralisasi yang Tepat, Federasi yang Sehat

Kesalahan umum adalah mengira agent factory harus sepenuhnya terpusat. Jika terlalu sentral, factory berubah menjadi bottleneck. Jika terlalu federatif tanpa standar, agent sprawl kembali terjadi. Model yang paling sehat biasanya federated.

Tim pusat memegang platform dan shared services, standards dan reference architecture, design pattern library, evaluation harness, agent registry, identity, observability, dan policy framework, serta coaching untuk domain squad. Mereka tidak harus membangun semua agent sendiri.

Domain squad memegang prioritas use case, pemahaman proses, adopsi pengguna, backlog improvement, dan ownership outcome bisnis. Mereka membangun atau mengonfigurasi agent dengan memanfaatkan komponen factory.

Contohnya, squad finance memakai pattern evidence pack dan approval routing untuk close support. Squad procurement memakai pattern document intake dan policy check. Squad IT memakai exception triage dan case resolution. Squad supply chain memakai exception triage dan coordination workflow.

Dengan model ini, pusat mengontrol cara membangun, sedangkan domain mengontrol apa yang dibangun dan bagaimana dipakai.

## Governance Berbasis Risk Tier

Governance board tidak perlu menyetujui setiap agent kecil. Itu akan memperlambat semuanya. Yang lebih efektif adalah risk-tiered governance.

Low-risk agent cukup review oleh factory standard process. Medium-risk agent perlu review lintas fungsi dengan risk dan security. High-risk agent perlu persetujuan governance board formal.

High-risk biasanya mencakup agent yang menyentuh sistem transaksi inti, memproses data sensitif, dapat memicu keputusan finansial atau kepatuhan, atau memiliki bounded autonomy yang lebih tinggi.

Board juga perlu memonitor portofolio: agent mana yang aktif, mana yang correction rate-nya tinggi, mana yang economics-nya buruk, mana yang perlu dihentikan, dan mana yang layak di-scale.

## Contoh Backlog 6 Bulan Pertama

Agar lebih konkret, berikut contoh backlog enam bulan pertama yang realistis.

Bulan 1–2: bentuk tim inti factory, definisikan intake form dan value assessment, buat agent card template, bangun agent registry awal, tetapkan risk tiering, pilih 2–3 reusable pattern pertama.

Bulan 2–3: siapkan reference architecture, buat template tool wrapper untuk ERP/CRM/ITSM, bangun evaluation harness dasar, definisikan observability minimum, tetapkan deployment workflow.

Bulan 3–4: finance mengerjakan evidence pack untuk close, procurement mengerjakan intake dan policy check, IT operations mengerjakan incident triage, customer operations atau shared services mengerjakan case summarization dan routing.

Bulan 4–5: aktifkan governance board untuk high-risk use case, jalankan review portofolio bulanan, latih domain squad dan supervisor, mulai ukur correction rate, acceptance rate, dan cost per successful outcome.

Bulan 5–6: refactor komponen yang terbukti reusable, hentikan use case yang tidak menunjukkan value, perluas pattern yang berhasil ke domain kedua, dan mulai definisikan model layanan factory untuk GCC atau shared services.

Backlog seperti ini membantu perusahaan menghindari dua ekstrem: terlalu abstrak, atau terlalu cepat mengejar puluhan agent tanpa fondasi.

## Risiko yang Harus Dikelola

Agent factory bukan obat untuk semua hal. Ada trade-off yang harus dikelola.

Jika semua keputusan kecil harus lewat tim pusat, domain akan frustrasi dan kembali membangun sendiri. Factory harus membedakan mana yang wajib distandardisasi dan mana yang boleh fleksibel.

Jika factory hanya diisi engineer, backlog akan dipenuhi use case yang menarik secara teknis tetapi lemah secara operasional. Domain analyst dan change lead harus benar-benar hadir.

Tidak semua domain cocok dipaksa ke pola yang sama. Factory harus menyediakan pattern reusable, bukan memaksa uniformitas buta.

Sebaliknya, jika factory terlalu fokus pada delivery dan lupa registry, evaluation, dan lifecycle control, perusahaan hanya memproduksi agent lebih cepat—tanpa benar-benar mengurangi sprawl.

## Pertanyaan Reflektif

Jika dalam 12 bulan ke depan perusahaan Anda memiliki 30 agent aktif, apakah Anda benar-benar memiliki kapabilitas enterprise untuk membangun dan mengoperasikannya secara repeatable—atau Anda hanya sedang mengakumulasi 30 sumber kompleksitas baru?

Itulah alasan agent factory menjadi penting. Bukan untuk memperlambat inovasi, tetapi untuk memastikan skala tidak berubah menjadi kekacauan.
