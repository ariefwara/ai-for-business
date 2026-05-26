---
title: "Agent Factory: Cara Menskalakan AI Agents Tanpa Agent Sprawl"
sidebar_position: 34
---

# Agent Factory: Cara Menskalakan AI Agents Tanpa Agent Sprawl

Setelah beberapa pilot agentic AI berhasil, pola yang hampir selalu muncul adalah ledakan permintaan dari berbagai fungsi. Finance ingin agent untuk close dan AP exception. Procurement ingin intake dan policy check. Customer operations ingin case triage dan response drafting. IT ingin incident triage dan change readiness. Supply chain ingin exception coordination. Shared services dan GCC melihat peluang untuk menstandardisasi layanan lintas geografi.

Di titik ini, banyak perusahaan merasa sedang maju cepat. Padahal justru di sinilah risiko baru mulai terbentuk: **agent sprawl**.

Agent sprawl terjadi ketika setiap tim membangun agent dengan cara, tool, prompt, integrasi, dan kontrolnya sendiri. Hasilnya terlihat produktif di awal, tetapi dalam beberapa bulan organisasi mulai menghadapi masalah yang familiar:
- use case tumpang tindih,
- komponen dibangun ulang berkali-kali,
- standar evaluasi berbeda-beda,
- akses ke sistem inti tidak konsisten,
- biaya platform dan model sulit dilacak,
- dan governance tertinggal jauh di belakang kecepatan eksperimen.

Dalam artikel sebelumnya kita sudah membahas roadmap 12 bulan menuju operating model agentic. Artikel ini melangkah lebih jauh: **bagaimana membangun agent factory sebagai kapabilitas enterprise** untuk membuat, menguji, merilis, dan mengoperasikan agents secara repeatable—tanpa menjadikannya bottleneck birokratis.

Intinya sederhana: jika perusahaan ingin memiliki banyak agent yang benar-benar dipakai dalam operasi, maka perusahaan tidak cukup hanya punya platform. Perusahaan perlu **mesin delivery** yang menggabungkan method, reusable pattern, specialist pool, governance, dan lifecycle discipline.

## Mengapa Agent Factory Dibutuhkan

Pada fase pilot, improvisasi masih bisa ditoleransi. Satu tim kecil bisa membangun satu agent untuk satu workflow sempit, dengan sponsor bisnis yang dekat dan kontrol manual yang masih memadai. Tetapi begitu permintaan datang dari banyak domain, improvisasi berubah menjadi utang operasional.

Masalah utamanya bukan jumlah agent semata. Masalahnya adalah **variasi yang tidak perlu**.

Bayangkan sebuah perusahaan global yang dalam enam bulan pertama membangun:
- agent close support di finance,
- agent intake di procurement,
- agent service desk di IT,
- agent case summarization di customer operations,
- dan agent exception monitor di supply chain.

Jika masing-masing dibangun oleh tim berbeda tanpa factory, sangat mungkin terjadi hal berikut:
- setiap tim memilih framework agent yang berbeda,
- cara menghubungkan ke ERP, CRM, atau ITSM berbeda,
- definisi success rate dan correction rate berbeda,
- approval workflow dibuat ulang dari nol,
- logging dan audit trail tidak seragam,
- dan tidak ada inventory resmi tentang agent mana yang aktif, siapa owner-nya, dan risk tier-nya.

Dalam jangka pendek, ini tampak seperti kecepatan. Dalam jangka menengah, ini menjadi beban maintenance.

### Tiga alasan utama factory menjadi penting

#### 1. Mengurangi duplikasi desain dan engineering
Banyak use case enterprise ternyata memakai pola yang mirip. Document intake, policy check, exception triage, approval routing, evidence pack, dan case resolution muncul berulang di banyak fungsi. Tanpa factory, pola yang sama dibangun berkali-kali oleh tim berbeda.

#### 2. Menjaga governance tetap sejalan dengan scale
Semakin banyak agent menyentuh workflow nyata, semakin penting konsistensi pada identity, access control, evaluation, observability, dan approval threshold. Governance tidak bisa lagi bergantung pada review ad hoc per proyek.

#### 3. Menurunkan biaya perubahan
Agent bukan artefak sekali jadi. Prompt berubah, tool schema berubah, policy berubah, model berubah, dan workflow bisnis ikut berubah. Factory membuat perubahan ini bisa dikelola melalui template, test harness, dan deployment discipline yang lebih industrial.

### Kapan factory belum perlu dibangun besar-besaran

Meski penting, agent factory tidak harus langsung menjadi organisasi besar. Jika perusahaan masih di tahap sangat awal dan belum punya satu pun pilot yang benar-benar membuktikan value, membangun factory penuh terlalu cepat justru berisiko menciptakan overhead.

Factory paling masuk akal ketika perusahaan sudah melihat tiga sinyal:
- ada lebih dari satu domain yang ingin membangun agent,
- ada kebutuhan reuse lintas use case,
- dan governance mulai kesulitan mengikuti variasi implementasi.

Dengan kata lain, factory bukan langkah pertama. Ia adalah **langkah scale**.

## Komponen Inti Agent Factory

Agent factory yang sehat bukan sekadar tim engineering pusat. Ia adalah kombinasi proses intake, penilaian nilai, library pola, template teknis, evaluasi, pipeline rilis, dan operasi lifecycle.

### 1. Intake process dan value assessment

Tidak semua ide agent layak dibangun. Karena itu, factory perlu mekanisme intake yang memaksa bisnis menjelaskan:
- workflow apa yang ingin diperbaiki,
- outcome apa yang ditargetkan,
- volume dan pain point-nya,
- data dan sistem apa yang terlibat,
- siapa owner prosesnya,
- dan risk profile-nya.

Di sini factory berfungsi sebagai filter, bukan penghambat. Tujuannya bukan menolak ide, tetapi mengklasifikasikan:
- mana yang siap dipilotkan,
- mana yang perlu perbaikan data atau proses dulu,
- mana yang lebih cocok sebagai fitur platform biasa daripada agent,
- dan mana yang terlalu berisiko untuk saat ini.

Contoh:
tim procurement mengusulkan agent untuk “mengotomasi sourcing”. Setelah dinilai, ternyata masalah terbesar justru ada pada intake request yang salah klasifikasi dan dokumen tidak lengkap. Factory dapat mengarahkan backlog ke use case yang lebih bounded: **procurement intake dan policy check**, bukan langsung strategic sourcing.

### 2. Design pattern library

Ini salah satu aset paling penting. Factory harus mengumpulkan pola yang berulang dan menjadikannya library yang bisa dipakai ulang.

Contoh pattern yang sering muncul:
- **document intake**: membaca formulir, email, lampiran, lalu mengekstrak konteks;
- **policy check**: membandingkan request atau tindakan terhadap aturan internal;
- **exception triage**: mengelompokkan kasus, menilai prioritas, dan menentukan jalur eskalasi;
- **evidence pack**: mengumpulkan data, dokumen, dan histori untuk review manusia;
- **approval routing**: menentukan approver, menyiapkan ringkasan, dan memonitor keputusan;
- **case resolution**: mengorkestrasi langkah penyelesaian pada kasus standar.

Pattern ini bisa dipakai lintas domain. Misalnya:
- evidence pack di finance close,
- policy check di procurement,
- exception triage di IT incident,
- approval routing di HR request,
- case resolution di customer operations.

Semakin banyak pattern reusable, semakin cepat delivery dan semakin konsisten governance.

### 3. Agent templates dan reference implementation

Pattern konseptual perlu diterjemahkan menjadi template teknis. Factory sebaiknya menyediakan:
- template agent card,
- template tool wrapper,
- template approval workflow,
- template observability dashboard,
- template evaluation suite,
- dan reference architecture untuk agent low-risk, medium-risk, dan high-risk.

Ini penting agar domain squad tidak memulai dari layar kosong.

### 4. Evaluation harness

Salah satu penyebab agent sprawl adalah setiap tim menguji agent dengan cara sendiri. Factory harus menyediakan **evaluation harness** yang lebih standar:
- test case historis,
- edge case,
- policy compliance checks,
- tool failure simulation,
- regression test saat prompt atau model berubah.

Untuk agent yang menyentuh workflow penting, evaluasi tidak boleh berhenti pada “jawabannya terlihat bagus”. Harus ada pengujian apakah output:
- usable,
- konsisten,
- patuh pada policy,
- dan aman untuk level otonomi yang diberikan.

### 5. Deployment pipeline dan lifecycle control

Agent juga butuh SDLC-nya sendiri. Factory perlu memastikan perubahan pada:
- prompt,
- model,
- tool schema,
- policy,
- knowledge source,
- dan approval logic

melewati pipeline yang jelas: dev, test, review, release, monitoring, rollback.

Tanpa ini, agent akan berubah diam-diam di produksi dan sulit diaudit.

### 6. Agent registry sebagai inventory resmi

Setiap perusahaan yang serius perlu memiliki **agent registry**: inventaris resmi semua agent yang ada, termasuk:
- nama dan tujuan agent,
- owner bisnis,
- owner teknis,
- risk tier,
- status lifecycle,
- sistem yang diakses,
- level otonomi,
- metrik utama,
- dan status produksi.

Registry ini penting untuk dua hal. Pertama, mencegah duplikasi. Kedua, memberi governance board pandangan portofolio yang nyata, bukan sekadar daftar proyek.

## Specialist Pool: Siapa yang Menjalankan Factory

Agent factory bukan hanya urusan data scientist atau engineer. Ia membutuhkan pool spesialis yang bekerja lintas domain.

### Domain analyst
Menerjemahkan pain point bisnis menjadi workflow yang bisa didesain ulang. Mereka penting agar factory tidak jatuh menjadi mesin teknologi tanpa pemahaman operasi.

### Agent engineer
Membangun agent logic, orchestration, tool calling, dan integrasi ke platform agentic.

### Data engineer
Menyiapkan akses data, quality checks, dan data product yang dibutuhkan agent.

### Risk reviewer
Menilai risk tier, kontrol akses, approval threshold, dan implikasi compliance.

### Change lead
Membantu adopsi, training supervisor, perubahan SOP, dan komunikasi ke pengguna.

Dalam perusahaan besar, pool ini bisa berada di pusat tetapi dialokasikan ke domain squad. Dalam shared services atau GCC, model ini sangat relevan karena volume use case tinggi dan kebutuhan standardisasi lebih besar.

## Operating Model Factory: Sentralisasi yang Tepat, Federasi yang Sehat

Kesalahan umum adalah mengira agent factory harus sepenuhnya terpusat. Jika terlalu sentral, factory berubah menjadi bottleneck. Jika terlalu federatif tanpa standar, agent sprawl kembali terjadi.

Model yang paling sehat biasanya **federated**.

## Peran tim pusat

Tim pusat memegang:
- platform dan shared services,
- standards dan reference architecture,
- design pattern library,
- evaluation harness,
- agent registry,
- identity, observability, dan policy framework,
- serta coaching untuk domain squad.

Mereka tidak harus membangun semua agent sendiri.

## Peran domain squad

Domain squad memegang:
- prioritas use case,
- pemahaman proses,
- adopsi pengguna,
- backlog improvement,
- dan ownership outcome bisnis.

Mereka membangun atau mengonfigurasi agent dengan memanfaatkan komponen factory.

Contoh:
- squad finance memakai pattern evidence pack dan approval routing untuk close support;
- squad procurement memakai pattern document intake dan policy check;
- squad IT memakai exception triage dan case resolution;
- squad supply chain memakai exception triage dan coordination workflow.

Dengan model ini, pusat mengontrol **cara membangun**, sedangkan domain mengontrol **apa yang dibangun dan bagaimana dipakai**.

## Governance board: bukan untuk semua agent, tetapi untuk yang material

Governance board tidak perlu menyetujui setiap agent kecil. Itu akan memperlambat semuanya. Yang lebih efektif adalah risk-tiered governance.

Misalnya:
- **low-risk agent**: cukup review oleh factory standard process;
- **medium-risk agent**: perlu review lintas fungsi dengan risk dan security;
- **high-risk agent**: perlu persetujuan governance board formal.

High-risk biasanya mencakup agent yang:
- menyentuh sistem transaksi inti,
- memproses data sensitif,
- dapat memicu keputusan finansial atau kepatuhan,
- atau memiliki bounded autonomy yang lebih tinggi.

Board juga perlu memonitor portofolio:
- agent mana yang aktif,
- mana yang correction rate-nya tinggi,
- mana yang economics-nya buruk,
- mana yang perlu dihentikan,
- dan mana yang layak di-scale.

## Reusable Patterns yang Paling Sering Bernilai

Tidak semua agent harus unik. Justru skala enterprise datang dari pengulangan pola yang sama pada banyak proses.

### Document intake
Cocok untuk procurement request, HR request, customer claim, vendor onboarding, atau invoice exception. Agent membaca input tidak terstruktur, mengekstrak konteks, lalu merutekan ke workflow yang benar.

### Policy check
Cocok untuk travel and expense, procurement compliance, HR policy inquiry, access request, atau customer concession. Agent membandingkan kasus terhadap aturan dan menandai deviasi.

### Exception triage
Cocok untuk finance reconciliation issue, IT incident, supply chain disruption, atau customer complaint backlog. Agent membantu memprioritaskan dan mengelompokkan kasus.

### Evidence pack
Cocok untuk finance close, audit support, dispute resolution, atau change approval. Agent mengumpulkan data dan bukti agar manusia tidak mulai dari nol.

### Approval routing
Cocok untuk purchase request, access approval, exception approval, atau contract deviation. Agent menentukan jalur persetujuan dan menyiapkan konteks keputusan.

### Case resolution
Cocok untuk service desk, customer operations, atau shared services inquiry. Agent mengorkestrasi langkah penyelesaian pada kasus standar.

Pola-pola ini mempercepat delivery karena domain tidak perlu selalu mendesain ulang dari awal. Governance juga lebih mudah karena kontrol bisa ditempelkan pada pattern, bukan hanya pada use case individual.

## Contoh Backlog 6 Bulan Pertama untuk Agent Factory

Agar lebih konkret, berikut contoh backlog enam bulan pertama yang realistis.

### Bulan 1–2: Fondasi minimum
- bentuk tim inti factory,
- definisikan intake form dan value assessment,
- buat agent card template,
- bangun agent registry awal,
- tetapkan risk tiering,
- pilih 2–3 reusable pattern pertama.

### Bulan 2–3: Standardisasi teknis awal
- siapkan reference architecture,
- buat template tool wrapper untuk ERP/CRM/ITSM,
- bangun evaluation harness dasar,
- definisikan observability minimum,
- tetapkan deployment workflow.

### Bulan 3–4: Use case gelombang pertama
- finance: evidence pack untuk close,
- procurement: intake dan policy check,
- IT operations: incident triage,
- customer operations atau shared services: case summarization dan routing.

### Bulan 4–5: Governance dan adoption
- aktifkan governance board untuk high-risk use case,
- jalankan review portofolio bulanan,
- latih domain squad dan supervisor,
- mulai ukur correction rate, acceptance rate, dan cost per successful outcome.

### Bulan 5–6: Reuse dan scale
- refactor komponen yang terbukti reusable,
- hentikan use case yang tidak menunjukkan value,
- perluas pattern yang berhasil ke domain kedua,
- dan mulai definisikan model layanan factory untuk GCC atau shared services.

Backlog seperti ini membantu perusahaan menghindari dua ekstrem: terlalu abstrak, atau terlalu cepat mengejar puluhan agent tanpa fondasi.

## Risiko dan Trade-off yang Harus Diakui

Agent factory bukan obat untuk semua hal. Ada trade-off yang harus dikelola.

### Risiko menjadi bottleneck
Jika semua keputusan kecil harus lewat tim pusat, domain akan frustrasi dan kembali membangun sendiri. Karena itu, factory harus membedakan mana yang wajib distandardisasi dan mana yang boleh fleksibel.

### Risiko terlalu teknis
Jika factory hanya diisi engineer, backlog akan dipenuhi use case yang menarik secara teknis tetapi lemah secara operasional. Domain analyst dan change lead harus benar-benar hadir.

### Risiko over-standardization
Tidak semua domain cocok dipaksa ke pola yang sama. Factory harus menyediakan pattern reusable, bukan memaksa uniformitas buta.

### Risiko governance tertinggal
Sebaliknya, jika factory terlalu fokus pada delivery dan lupa registry, evaluation, dan lifecycle control, perusahaan hanya memproduksi agent lebih cepat—tanpa benar-benar mengurangi sprawl.

## Checklist Praktis

### Keputusan yang perlu diambil sekarang

1. **Tentukan kapan perusahaan membutuhkan agent factory.**  
   Jika sudah ada beberapa pilot, permintaan lintas domain meningkat, dan komponen mulai dibangun ulang, saatnya membentuk factory.

2. **Pilih model operating yang tepat: central, federated, atau hybrid.**  
   Untuk kebanyakan enterprise, model federated dengan platform dan standard pusat serta domain squad sebagai pemilik use case adalah pilihan paling sehat.

3. **Tetapkan komponen minimum factory.**  
   Minimal harus ada intake process, value assessment, pattern library, agent template, evaluation harness, deployment pipeline, dan agent registry.

4. **Bangun specialist pool lintas fungsi.**  
   Jangan hanya mengandalkan engineer. Sertakan domain analyst, data engineer, risk reviewer, dan change lead.

5. **Definisikan governance berbasis risk tier.**  
   Jangan semua agent masuk board. Fokuskan governance formal pada use case medium dan high-risk.

### Checklist readiness singkat

- [ ] Perusahaan sudah memiliki lebih dari satu domain yang ingin membangun agent.
- [ ] Ada kebutuhan reuse yang nyata pada pattern, integrasi, atau kontrol.
- [ ] Agent registry resmi mulai dibangun.
- [ ] Intake dan value assessment sudah didefinisikan.
- [ ] Pattern library awal sudah mengidentifikasi use case berulang seperti intake, policy check, triage, evidence pack, approval routing, dan case resolution.
- [ ] Evaluation harness dan deployment discipline mulai distandardisasi.
- [ ] Tim pusat dan domain squad memiliki pembagian peran yang jelas.
- [ ] Governance board hanya menangani use case yang material, bukan semua eksperimen kecil.
- [ ] Ada backlog 6 bulan pertama yang menyeimbangkan fondasi, use case, governance, dan adopsi.

### Sinyal bahaya bahwa agent sprawl sedang terjadi

- [ ] Setiap tim memakai framework, tool, dan standar evaluasi yang berbeda.
- [ ] Tidak ada inventory resmi agent yang aktif dan siapa owner-nya.
- [ ] Integrasi ke ERP, CRM, HRIS, atau ITSM dibangun berulang oleh tim berbeda.
- [ ] Approval workflow dan audit trail tidak konsisten antar-agent.
- [ ] Governance baru mengetahui use case setelah agent hampir live.
- [ ] Domain merasa tim pusat menghambat, sementara tim pusat merasa domain membangun liar.
- [ ] Banyak agent terlihat aktif, tetapi sedikit komponen yang benar-benar reusable.
- [ ] Tidak ada keputusan tegas untuk menghentikan agent yang correction rate-nya tinggi atau value-nya lemah.

### Pertanyaan reflektif untuk CIO, COO, GCC leader, dan transformation office

**Jika dalam 12 bulan ke depan perusahaan Anda memiliki 30 agent aktif, apakah Anda benar-benar memiliki kapabilitas enterprise untuk membangun dan mengoperasikannya secara repeatable—atau Anda hanya sedang mengakumulasi 30 sumber kompleksitas baru?**

Itulah alasan agent factory menjadi penting. Bukan untuk memperlambat inovasi, tetapi untuk memastikan skala tidak berubah menjadi kekacauan.
