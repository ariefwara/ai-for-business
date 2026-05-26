---
title: "Build, Buy, Partner, atau Borrow: Strategi Sourcing AI Agents"
sidebar_position: 11
---

# Build, Buy, Partner, atau Borrow: Strategi Sourcing AI Agents

Pada artikel sebelumnya, kita membahas bagaimana memilih **value pool** agentic AI yang layak dikejar. Langkah berikutnya adalah pertanyaan yang jauh lebih operasional, tetapi sering justru lebih menentukan: **dari mana capability agent itu harus datang?**

Apakah perusahaan perlu membangunnya sendiri? Membeli dari vendor SaaS atau platform? Bermitra dengan service provider? Atau meminjam komponen open-source dan accelerator untuk bergerak cepat?

Bagi banyak eksekutif, keputusan ini tampak seperti keputusan teknologi. Padahal sebenarnya ini adalah keputusan **operating model dan strategi kontrol**. Pilihan sourcing akan menentukan:
- seberapa cepat nilai bisa direalisasikan,
- seberapa besar kontrol atas data, workflow, dan IP,
- seberapa mudah agent diintegrasikan ke digital core,
- seberapa kuat governance dapat ditegakkan,
- dan seberapa besar risiko vendor lock-in atau fragmentasi ekosistem agent.

Dalam konteks agentic enterprise, sourcing tidak boleh diputuskan berdasarkan preferensi ideologis—misalnya “semua harus dibangun sendiri” atau “lebih cepat beli saja”. Prinsip yang lebih sehat adalah:

> **strategi sourcing harus mengikuti value pool, tingkat diferensiasi, dan profil risiko.**

Perusahaan besar pada akhirnya hampir pasti akan memiliki campuran agent yang **built, bought, partnered, dan borrowed**. Tantangannya bukan memilih satu kubu, melainkan membangun disiplin untuk menentukan **mana yang cocok untuk apa**.

## Mengapa Keputusan Sourcing Agent Begitu Sulit

Keputusan sourcing untuk AI agents lebih rumit daripada keputusan software enterprise tradisional. Alasannya sederhana: agent bisa muncul dalam banyak bentuk sekaligus.

Satu capability agentic dapat hadir sebagai:
- fitur embedded di SaaS yang sudah dipakai,
- add-on dari vendor platform,
- framework open-source yang dirakit internal,
- solusi custom yang dibangun di atas model dan tool internal,
- managed service dari partner,
- atau kombinasi dari semuanya.

Contohnya di **customer operations**. Sebuah perusahaan bisa:
- membeli agent layanan pelanggan yang sudah tertanam di CRM,
- membangun sendiri orchestration layer untuk menggabungkan CRM, OMS, dan policy engine,
- memakai komponen open-source untuk eksperimen retrieval dan memory,
- lalu menggandeng partner untuk menjalankan operasi awal dan transfer capability.

Semua pilihan itu bisa masuk akal. Masalahnya, jika dipilih tanpa kerangka yang jelas, perusahaan akan cepat jatuh ke tiga jebakan.

### 1. Vendor lock-in yang terlalu dini

Banyak solusi agentic terlihat menarik karena time-to-value cepat. Namun jika perusahaan menyerahkan terlalu banyak logika proses, konteks data, dan observability ke satu vendor, maka biaya keluar di kemudian hari bisa sangat tinggi. Ini terutama berbahaya untuk workflow yang nantinya menjadi bagian inti operating model.

### 2. Fragmented agent ecosystem

Jika setiap fungsi membeli atau membangun agent sendiri-sendiri, perusahaan akan berakhir dengan:
- identitas agent yang tidak konsisten,
- tool integration yang duplikatif,
- standar evaluasi yang berbeda,
- governance yang tidak seragam,
- dan sulitnya mengorkestrasi agent lintas fungsi.

Hasilnya bukan agentic enterprise, melainkan **agent sprawl**.

### 3. Time-to-value yang terlalu lambat

Di sisi lain, obsesi untuk membangun semuanya sendiri sering membuat organisasi terlalu lama berada di fase fondasi. Tim sibuk membangun framework, platform, dan komponen generik, tetapi use case bisnis tidak pernah benar-benar sampai ke produksi. Dalam pasar yang bergerak cepat, ini sama berbahayanya dengan lock-in.

Karena itu, sourcing agent harus diperlakukan sebagai **keputusan portofolio**. Pertanyaan utamanya bukan “opsi mana yang terbaik secara umum”, melainkan:

- capability ini benar-benar membedakan bisnis atau tidak,
- seberapa sensitif data dan keputusan yang disentuh,
- seberapa cepat nilai harus muncul,
- dan seberapa besar kontrol yang dibutuhkan dalam jangka panjang.

## Kapan Perusahaan Sebaiknya Build

Pendekatan **build** paling tepat ketika agent menyentuh capability yang benar-benar menjadi sumber diferensiasi perusahaan, sangat dekat dengan data proprietary, atau membutuhkan kontrol penuh atas perilaku dan lifecycle-nya.

Ini biasanya terjadi pada tiga jenis area.

### Capability yang menjadi inti keunggulan bisnis

Jika agent akan menjalankan logika yang sangat menentukan cara perusahaan bersaing, membelinya mentah-mentah dari pasar sering tidak bijak.

Contoh:
- **underwriting logic** di asuransi,
- **proprietary pricing engine** di distribusi atau retail B2B,
- **domain-specific operational intelligence** di supply chain,
- atau agent yang mengorkestrasi keputusan komersial berbasis data internal yang unik.

Dalam kasus seperti ini, nilai agent bukan hanya pada antarmuka AI-nya, tetapi pada kombinasi:
- data internal,
- aturan keputusan,
- workflow exception,
- dan pembelajaran operasional yang khas perusahaan.

Jika semua itu diserahkan ke vendor, perusahaan berisiko menyerahkan diferensiasi, bukan sekadar membeli software.

### Capability yang sangat dekat dengan data sensitif atau kontrol kritis

Build juga lebih masuk akal ketika agent menyentuh data atau keputusan yang sangat sensitif, misalnya:
- keputusan risiko,
- data pelanggan yang sangat terproteksi,
- logika kontrol finansial,
- atau intelligence operasional yang tidak boleh keluar dari boundary tertentu.

Contoh di **finance**: agent yang membantu analisis close mungkin bisa dibeli. Tetapi agent yang mengorkestrasi treatment exception material, menggabungkan policy internal, judgement controller, dan histori audit, sering lebih aman jika dibangun di atas platform dan governance internal.

### Capability yang membutuhkan observability dan policy control mendalam

Beberapa workflow menuntut perusahaan bisa menjelaskan secara rinci:
- konteks apa yang dipakai agent,
- tool apa yang dipanggil,
- keputusan apa yang diambil,
- dan mengapa agent berhenti, lanjut, atau mengeskalasi.

Jika kebutuhan auditability dan runtime control sangat tinggi, build memberi keleluasaan lebih besar untuk menanamkan:
- policy engine,
- approval workflow,
- observability,
- evaluation harness,
- dan lifecycle management yang sesuai standar internal.

## Tetapi build bukan pilihan “paling canggih”

Banyak organisasi menganggap build sebagai pilihan paling strategis. Ini tidak selalu benar. Build hanya masuk akal jika perusahaan memang punya **maturity** untuk menanggungnya.

Minimal, build membutuhkan:
- engineering capability yang kuat,
- agent platform atau setidaknya platform pattern yang jelas,
- integrasi API yang sehat ke core systems,
- data governance yang matang,
- model risk dan security review,
- serta operating model untuk ownership, support, dan continuous improvement.

Tanpa itu, build akan menghasilkan prototipe yang sulit dioperasikan.

### Contoh enterprise: underwriting dan pricing

Bayangkan perusahaan asuransi ingin membuat agent underwriting untuk segmen tertentu. Jika agent hanya menjawab pertanyaan umum broker, membeli capability embedded dari vendor mungkin cukup. Tetapi jika agent akan:
- membaca submission,
- menggabungkan histori klaim,
- memanggil model risiko internal,
- menerapkan appetite rules proprietary,
- dan menyiapkan rekomendasi keputusan underwriting,

maka build jauh lebih masuk akal. Nilai utamanya ada pada **kombinasi data dan logika internal**, bukan pada model generatif semata.

Contoh lain di **pricing**. Distributor industri mungkin memiliki logika harga yang sangat dipengaruhi oleh histori pelanggan, margin target, kondisi stok, dan strategi account tertentu. Agent yang membantu sales menyiapkan quote bisa menjadi pembeda nyata. Ini bukan area yang bijak untuk sepenuhnya diserahkan ke vendor generik.

### Kapan build tidak tepat

Build biasanya **tidak tepat** jika:
- capability-nya sudah sangat umum di pasar,
- kebutuhan diferensiasinya rendah,
- perusahaan belum punya platform dan tim yang memadai,
- atau bisnis membutuhkan hasil cepat untuk membuktikan nilai.

Dalam kondisi seperti itu, build sering berubah menjadi proyek teknologi yang mahal dan lambat.

## Kapan Buy Lebih Masuk Akal

Pendekatan **buy** cocok untuk capability yang relatif umum, sudah matang di pasar SaaS atau platform enterprise, dan tidak menjadi sumber diferensiasi utama.

Ini sering berlaku untuk area seperti:
- service desk assistant,
- CRM sales agent,
- employee self-service agent,
- knowledge assistant,
- atau workflow agent yang sangat dekat dengan platform SaaS tertentu.

Keunggulan buy jelas: **time-to-value lebih cepat**. Perusahaan tidak perlu membangun semuanya dari nol. Integrasi dasar, UI, dan beberapa guardrail biasanya sudah tersedia. Untuk organisasi yang ingin bergerak cepat, ini sangat menarik.

### Buy cocok untuk “common capability”, bukan “core differentiation”

Contoh di **IT operations**: agent untuk merangkum insiden, menyarankan knowledge article, atau membantu triage tiket di platform ITSM sering lebih efisien jika dibeli dari vendor yang memang sudah tertanam di stack tersebut.

Contoh di **CRM**: sales agent yang membantu menyiapkan follow-up, merangkum account activity, atau menyarankan next-best action sering lebih cepat diadopsi jika dibeli sebagai capability embedded dari platform yang sudah dipakai tim sales.

Contoh di **HR services**: employee service agent untuk menjawab pertanyaan kebijakan umum, status tiket, atau panduan onboarding sering tidak perlu dibangun sendiri kecuali perusahaan punya kebutuhan yang sangat unik.

## Trade-off utama dari buy

Kecepatan datang dengan kompromi.

### Kontrol lebih terbatas

Perusahaan mungkin tidak bisa mengatur secara mendalam:
- bagaimana reasoning dilakukan,
- bagaimana memory dikelola,
- bagaimana observability disajikan,
- atau bagaimana policy runtime diterapkan di luar opsi yang disediakan vendor.

### Customization bisa dangkal

Banyak vendor menjanjikan konfigurasi, tetapi tidak semua benar-benar mendukung custom workflow yang kompleks. Untuk proses enterprise yang penuh exception, batas ini cepat terasa.

### Auditability dan data boundary harus diperiksa serius

Sebelum membeli, perusahaan harus menilai:
- data apa yang keluar ke vendor,
- di mana konteks diproses,
- bagaimana log disimpan,
- apakah keputusan agent dapat dijelaskan,
- dan bagaimana kontrol akses diterapkan.

Untuk domain regulated, pertanyaan ini tidak bisa ditunda sampai setelah kontrak ditandatangani.

### Exit strategy harus jelas

Jika agent yang dibeli menjadi bagian penting dari workflow, perusahaan perlu tahu:
- apakah data interaksi bisa diekspor,
- apakah konfigurasi dan prompt dapat dipindahkan,
- apakah tool integration bergantung pada format proprietary,
- dan apa yang terjadi jika vendor mengubah roadmap atau pricing.

Tanpa exit strategy, buy bisa berubah menjadi ketergantungan struktural.

## Kapan buy tidak tepat

Buy kurang tepat jika:
- workflow sangat unik dan penuh logika proprietary,
- perusahaan membutuhkan kontrol mendalam atas policy dan observability,
- atau agent akan menjadi lapisan orkestrasi lintas banyak sistem yang tidak dikuasai vendor tersebut.

Dalam kasus seperti itu, solusi vendor sering baik untuk titik awal, tetapi buruk sebagai fondasi jangka panjang.

## Kapan Partner atau Borrow Menjadi Pilihan yang Sehat

Di antara build dan buy, ada dua pendekatan yang sering paling realistis untuk perusahaan besar: **partner** dan **borrow**.

Keduanya berguna, tetapi untuk tujuan yang berbeda.

## Partner: ketika perusahaan butuh percepatan dan keahlian eksternal

Pendekatan **partner** cocok ketika perusahaan:
- tahu value pool yang ingin dikejar,
- tetapi belum punya pattern implementasi yang matang,
- atau belum siap mengoperasikan agentic service sendiri pada fase awal.

Partner bisa berperan dalam beberapa bentuk:
- membantu membangun blueprint dan reference architecture,
- mengembangkan agent pertama bersama tim internal,
- mengoperasikan managed service untuk domain tertentu,
- atau mempercepat industrialisasi melalui accelerator dan delivery capability.

Ini sering relevan untuk **shared services**, **GCC**, atau fungsi yang ingin bergerak cepat dari pilot ke operasi.

### Contoh: GCC dan agentic services

Sebuah GCC yang ingin mengubah finance operations menjadi model agentic mungkin tidak perlu langsung membangun semua capability sendiri. Bermitra dengan service provider dapat membantu:
- mendesain operating model,
- membangun agent untuk AP exception dan close support,
- menyiapkan governance dan observability,
- lalu mentransfer capability secara bertahap ke tim internal.

Pendekatan ini masuk akal jika tujuan perusahaan bukan sekadar memiliki software, tetapi **mengubah cara kerja layanan**.

Namun partner bukan berarti menyerahkan akuntabilitas. Kontrak harus jelas soal:
- kepemilikan IP,
- penggunaan data,
- model operasi,
- SLA,
- hak audit,
- dan rencana transfer knowledge.

Jika tidak, perusahaan hanya memindahkan ketergantungan dari vendor software ke vendor jasa.

## Borrow: untuk eksperimen cepat, bukan fondasi permanen

Pendekatan **borrow** biasanya berarti memanfaatkan:
- open-source framework,
- reference architecture,
- starter kit,
- accelerator,
- atau komponen komunitas

untuk belajar cepat sebelum platform resmi dibakukan.

Borrow sangat berguna pada fase awal ketika perusahaan ingin:
- menguji pattern orchestration,
- memahami kebutuhan tool calling,
- mencoba context layer,
- atau membuktikan use case tanpa menunggu keputusan platform enterprise selesai.

### Contoh: procurement pilot

Tim procurement mungkin ingin menguji agent intake yang:
- membaca request,
- mengecek policy,
- memanggil data kontrak,
- dan menyiapkan jalur approval.

Untuk membuktikan pattern ini, tim bisa meminjam komponen open-source dan accelerator internal. Jika hasilnya menjanjikan, barulah capability tersebut dipindahkan ke platform resmi dengan kontrol yang lebih kuat.

Borrow memberi kecepatan belajar. Tetapi ia punya batas yang jelas.

### Risiko borrow

- kualitas dan keamanan komponen bisa bervariasi,
- ownership jangka panjang sering kabur,
- dependency open-source bisa sulit dikelola,
- dan tim bisa terjebak pada prototipe yang tidak pernah di-hardening.

Karena itu, borrow sebaiknya diperlakukan sebagai **jalur eksplorasi**, bukan alasan untuk menunda standardisasi.

## Governance untuk partner dan borrow harus lebih tegas

Baik partner maupun borrow sering dipilih demi kecepatan. Justru karena itu, governance-nya harus lebih disiplin.

Minimal, perusahaan perlu memastikan:
- data boundary jelas,
- hak penggunaan model dan artefak jelas,
- IP hasil pengembangan tidak kabur,
- accountability atas keputusan agent tetap berada pada enterprise,
- dan ada jalur transisi dari eksperimen ke operasi formal.

Jika tidak, perusahaan akan bergerak cepat ke arah yang salah.

## Realitasnya: Perusahaan Akan Memiliki Hybrid Agent Supply Chain

Dalam praktik, perusahaan besar hampir pasti akan berakhir dengan **hybrid agent supply chain**:
- beberapa agent dibangun sendiri,
- beberapa dibeli dari SaaS,
- beberapa dikembangkan bersama partner,
- beberapa dipinjam untuk eksperimen atau komponen tertentu.

Ini bukan masalah. Yang berbahaya adalah jika campuran ini tumbuh tanpa arsitektur dan governance bersama.

## Apa yang dibutuhkan untuk mengelola hybrid model

### 1. Agent registry

Perusahaan perlu katalog yang menjelaskan:
- agent apa saja yang ada,
- siapa owner bisnis dan teknisnya,
- sumbernya built/bought/partnered/borrowed,
- data dan tool apa yang dipakai,
- risk tier-nya,
- dan status lifecycle-nya.

Tanpa registry, tidak ada cara sehat untuk mengelola portofolio agent.

### 2. Interoperability standard

Agent dari sumber berbeda tetap harus bisa hidup dalam ekosistem yang sama. Itu berarti perlu standar untuk:
- identitas,
- tool calling,
- event,
- logging,
- observability,
- dan handoff antar-agent atau ke manusia.

Jika tidak, setiap agent menjadi pulau sendiri.

### 3. Risk tiering

Tidak semua agent perlu kontrol yang sama. Agent knowledge assistant tentu berbeda dengan agent yang bisa memicu tindakan di ERP. Karena itu, perusahaan perlu mengelompokkan agent berdasarkan risiko dan dampak bisnis, lalu menerapkan kontrol yang proporsional.

### 4. Common governance

Apa pun sumbernya, semua agent yang masuk ke operasi harus tunduk pada governance yang sama:
- security review,
- data permissioning,
- evaluation,
- approval threshold,
- observability,
- incident management,
- dan exit/decommissioning process.

Sourcing boleh berbeda. Standar enterprise tidak boleh.

## Decision Tree Sederhana untuk Memilih Strategi Sourcing

Berikut kerangka keputusan yang praktis.

### Pilih **Build** jika:
- capability sangat diferensiatif,
- dekat dengan data proprietary atau kontrol kritis,
- membutuhkan observability dan policy control mendalam,
- dan perusahaan punya maturity engineering serta platform yang memadai.

### Pilih **Buy** jika:
- capability relatif umum,
- sudah matang di platform/SaaS,
- time-to-value sangat penting,
- dan batas data, auditability, serta exit strategy dapat diterima.

### Pilih **Partner** jika:
- perusahaan butuh percepatan implementasi,
- pattern operasional belum matang,
- perlu expertise domain dan delivery eksternal,
- tetapi tetap ingin membangun capability enterprise secara bertahap.

### Pilih **Borrow** jika:
- tujuan utamanya belajar cepat,
- use case masih eksploratif,
- perusahaan ingin menguji pattern sebelum standardisasi,
- dan ada disiplin jelas untuk memindahkan hasilnya ke platform resmi bila lolos.

## Cara berpikir yang lebih sehat: sourcing per layer, bukan per use case saja

Satu use case tidak harus memakai satu strategi sourcing tunggal. Sering kali keputusan terbaik justru berbeda per layer.

Contoh:
- **buy** untuk capability embedded di CRM,
- **build** untuk orchestration dan policy layer,
- **partner** untuk implementasi awal,
- **borrow** untuk eksperimen context component tertentu.

Dengan kata lain, pertanyaan sourcing yang lebih matang adalah:
- layer mana yang menjadi diferensiasi,
- layer mana yang commoditized,
- layer mana yang perlu dipercepat,
- dan layer mana yang masih layak dieksplorasi.

Pendekatan ini jauh lebih realistis daripada memaksakan satu jawaban untuk seluruh stack agentic.

## Checklist Praktis

Gunakan daftar berikut saat menentukan strategi sourcing AI agents.

### Pertanyaan keputusan utama

- [ ] Apakah capability ini benar-benar membedakan bisnis, atau hanya capability umum?
- [ ] Seberapa dekat agent ini dengan data proprietary, kontrol kritis, atau keputusan sensitif?
- [ ] Seberapa cepat nilai harus muncul untuk menjaga momentum bisnis?
- [ ] Apakah perusahaan punya engineering maturity dan platform readiness untuk build?
- [ ] Jika buy, apakah data boundary, auditability, dan exit strategy sudah dinilai?
- [ ] Jika partner, apakah kontrak menjelaskan IP, data usage, SLA, dan transfer capability?
- [ ] Jika borrow, apakah ada batas waktu dan jalur transisi ke platform resmi?

### Checklist governance minimum

- [ ] Semua agent tercatat dalam agent registry.
- [ ] Ada klasifikasi built, bought, partnered, borrowed untuk setiap agent.
- [ ] Risk tier ditetapkan berdasarkan dampak bisnis dan tingkat otonomi.
- [ ] Standar identitas, logging, observability, dan policy berlaku lintas semua sumber agent.
- [ ] Ada owner bisnis dan owner teknis yang jelas.
- [ ] Ada mekanisme review vendor lock-in dan exit plan.
- [ ] Ada proses decommissioning untuk agent yang tidak lagi layak.

### Sinyal bahaya yang perlu diwaspadai

- [ ] Setiap fungsi membeli agent sendiri tanpa arsitektur bersama.
- [ ] Tim platform membangun terlalu lama tanpa use case produksi.
- [ ] Open-source pilot mulai menyentuh produksi tanpa hardening dan governance.
- [ ] Partner mengoperasikan capability penting tanpa transfer knowledge yang jelas.
- [ ] Vendor menjadi pemilik de facto atas logika proses yang seharusnya menjadi diferensiasi perusahaan.

Pada akhirnya, strategi sourcing agent yang baik bukan tentang memilih kubu. Ia tentang **menempatkan kontrol, kecepatan, dan diferensiasi pada tempat yang tepat**. Perusahaan yang matang tidak akan membangun semuanya sendiri, tetapi juga tidak akan membeli masa depannya secara membabi buta. Mereka akan mengelola agent seperti portofolio kapabilitas enterprise—dengan disiplin arsitektur, governance, dan akuntabilitas yang setara dengan pentingnya peran agent dalam operasi bisnis.
