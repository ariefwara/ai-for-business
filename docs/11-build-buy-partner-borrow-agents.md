---
title: "Build, Buy, Partner, atau Borrow: Strategi Sourcing AI Agents"
sidebar_position: 11
description: "Bayangkan Anda berada di posisi seorang kepala teknologi atau kepala fungsi bisnis. Tim Anda sudah mulai melihat potensi agentic AI. Mungkin ada pilot chatbot di..."
image: "/img/social/11-build-buy-partner-borrow-agents.jpg"
---

import ArticleDiagram from '@site/src/components/ArticleDiagram';

# Build, Buy, Partner, atau Borrow: Strategi Sourcing AI Agents

<ArticleDiagram src="/img/diagrams/11-build-buy-partner-borrow-agents.png" alt="Diagram: Build, Buy, Partner, atau Borrow: Strategi Sourcing AI Agents" />

Bayangkan Anda berada di posisi seorang kepala teknologi atau kepala fungsi bisnis. Tim Anda sudah mulai melihat potensi agentic AI. Mungkin ada pilot chatbot di customer service yang cukup menjanjikan, atau tim finance mulai bereksperimen dengan agent untuk membantu proses closing bulanan. Pertanyaan yang segera muncul bukan lagi "apakah kita perlu agent?", melainkan "dari mana kita harus mendapatkan capability agent ini?"

Apakah tim Anda harus membangun semuanya dari nol? Cukup membeli solusi yang sudah jadi dari vendor? Atau mungkin bekerja sama dengan partner eksternal? Atau sekadar meminjam komponen open-source untuk bergerak cepat?

Ini adalah pertanyaan yang terlihat seperti keputusan teknologi, tetapi sebenarnya jauh lebih dalam. Pilihan sourcing akan menentukan seberapa cepat nilai bisnis bisa diraih, seberapa besar kendali perusahaan atas data dan proses, serta seberapa mudah agent-agent ini bisa diintegrasikan dan dikelola di masa depan. Tanpa kerangka yang jelas, perusahaan bisa terjebak dalam ketergantungan pada satu vendor, atau sebaliknya, memiliki ekosistem agent yang berantakan dan sulit diatur.

## Mengapa Keputusan Ini Begitu Rumit

Keputusan sourcing untuk AI agents berbeda dengan keputusan software biasa. Sebuah capability agentic bisa muncul dalam banyak wujud sekaligus. Ia bisa menjadi fitur yang sudah tertanam di SaaS yang Anda pakai, add-on dari platform tertentu, framework open-source yang dirakit tim internal, atau solusi custom yang dibangun di atas model dan data perusahaan.

Ambil contoh di customer operations. Sebuah perusahaan bisa membeli agent layanan pelanggan yang sudah jadi dari vendor CRM. Di saat yang sama, tim internal membangun lapisan orkestrasi untuk menghubungkan CRM dengan sistem order dan kebijakan perusahaan. Mereka juga meminjam komponen open-source untuk bereksperimen dengan memori dan pencarian data. Lalu mereka menggandeng partner untuk membantu menjalankan operasi awal sambil mentransfer pengetahuan ke tim internal.

Semua pilihan itu bisa masuk akal. Masalahnya, tanpa kerangka keputusan yang jelas, perusahaan cepat jatuh ke dalam tiga jebakan umum.

Pertama, vendor lock-in yang terlalu dini. Banyak solusi agentic menawarkan time-to-value yang cepat, tetapi jika perusahaan menyerahkan terlalu banyak logika proses, data konteks, dan pengawasan ke satu vendor, biaya untuk keluar di kemudian hari bisa sangat mahal. Ini sangat berbahaya untuk workflow yang nantinya menjadi bagian inti dari cara perusahaan beroperasi.

Kedua, ekosistem agent yang terfragmentasi. Jika setiap fungsi bisnis membeli atau membangun agent sendiri-sendiri, perusahaan akan berakhir dengan identitas agent yang tidak konsisten, integrasi alat yang tumpang tindih, standar evaluasi yang berbeda, dan tata kelola yang tidak seragam. Hasilnya bukanlah perusahaan yang digerakkan oleh agent secara terpadu, melainkan kekacauan agent yang sulit dikendalikan.

Ketiga, time-to-value yang terlalu lambat. Di sisi lain, obsesi untuk membangun semuanya sendiri sering membuat organisasi terlalu lama berada di fase fondasi. Tim sibuk membangun framework dan platform generik, tetapi use case bisnis tidak pernah benar-benar sampai ke produksi. Dalam pasar yang bergerak cepat, ini sama berbahayanya dengan ketergantungan pada vendor.

Karena itu, sourcing agent harus diperlakukan sebagai keputusan portofolio. Pertanyaan utamanya bukan "opsi mana yang terbaik secara umum", melainkan: apakah capability ini benar-benar membedakan bisnis kita? Seberapa sensitif data dan keputusan yang disentuh? Seberapa cepat nilai harus muncul? Dan seberapa besar kontrol yang kita butuhkan dalam jangka panjang?

## Kapan Membangun Sendiri Menjadi Pilihan Tepat

Pendekatan build paling masuk akal ketika agent menyentuh capability yang menjadi sumber diferensiasi perusahaan, sangat dekat dengan data proprietary, atau membutuhkan kontrol penuh atas perilaku dan siklus hidupnya. Ini biasanya terjadi pada tiga jenis area.

Pertama, capability yang menjadi inti keunggulan bisnis. Jika agent akan menjalankan logika yang sangat menentukan cara perusahaan bersaing, membelinya mentah-mentah dari pasar sering tidak bijak. Contohnya adalah logika underwriting di asuransi, mesin penetapan harga proprietary di distribusi atau retail B2B, atau kecerdasan operasional spesifik domain di rantai pasok. Dalam kasus seperti ini, nilai agent bukan hanya pada antarmuka AI-nya, tetapi pada kombinasi data internal, aturan keputusan, pengecualian workflow, dan pembelajaran operasional yang khas perusahaan. Jika semua itu diserahkan ke vendor, perusahaan berisiko menyerahkan diferensiasinya.

Kedua, capability yang sangat dekat dengan data sensitif atau kontrol kritis. Build lebih masuk akal ketika agent menyentuh keputusan risiko, data pelanggan yang sangat terproteksi, logika kontrol finansial, atau kecerdasan operasional yang tidak boleh keluar dari batas tertentu. Di fungsi finance, misalnya, agent yang membantu analisis closing mungkin bisa dibeli. Tetapi agent yang mengorkestrasi penanganan pengecualian material, menggabungkan kebijakan internal, pertimbangan pengendali, dan riwayat audit, sering lebih aman jika dibangun di atas platform dan tata kelola internal.

Ketiga, capability yang membutuhkan observability dan kontrol kebijakan yang mendalam. Beberapa workflow menuntut perusahaan bisa menjelaskan secara rinci konteks apa yang dipakai agent, alat apa yang dipanggil, keputusan apa yang diambil, dan mengapa agent berhenti, melanjutkan, atau mengeskalasi. Jika kebutuhan auditability dan kontrol runtime sangat tinggi, build memberi keleluasaan lebih besar untuk menanamkan policy engine, approval workflow, observability, evaluation harness, dan manajemen siklus hidup yang sesuai standar internal.

Namun, build bukanlah pilihan yang paling canggih atau paling strategis secara otomatis. Build hanya masuk akal jika perusahaan memang memiliki kematangan untuk menanggungnya. Minimal, build membutuhkan kemampuan engineering yang kuat, platform agent atau setidaknya pola platform yang jelas, integrasi API yang sehat ke sistem inti, tata kelola data yang matang, review model risk dan keamanan, serta model operasi untuk kepemilikan, dukungan, dan perbaikan berkelanjutan. Tanpa itu, build hanya akan menghasilkan prototipe yang sulit dioperasikan.

Bayangkan perusahaan asuransi yang ingin membuat agent underwriting untuk segmen tertentu. Jika agent hanya menjawab pertanyaan umum broker, membeli capability dari vendor mungkin cukup. Tetapi jika agent akan membaca submission, menggabungkan riwayat klaim, memanggil model risiko internal, menerapkan aturan appetite proprietary, dan menyiapkan rekomendasi keputusan underwriting, maka build jauh lebih masuk akal. Nilai utamanya ada pada kombinasi data dan logika internal, bukan pada model generatif semata.

Build biasanya tidak tepat jika capability-nya sudah sangat umum di pasar, kebutuhan diferensiasinya rendah, perusahaan belum punya platform dan tim yang memadai, atau bisnis membutuhkan hasil cepat untuk membuktikan nilai. Dalam kondisi seperti itu, build sering berubah menjadi proyek teknologi yang mahal dan lambat.

## Kapan Membeli Lebih Masuk Akal

Pendekatan buy cocok untuk capability yang relatif umum, sudah matang di pasar SaaS atau platform enterprise, dan tidak menjadi sumber diferensiasi utama. Ini sering berlaku untuk area seperti service desk assistant, CRM sales agent, employee self-service agent, knowledge assistant, atau workflow agent yang sangat dekat dengan platform SaaS tertentu.

Keunggulan buy jelas: time-to-value lebih cepat. Perusahaan tidak perlu membangun semuanya dari nol. Integrasi dasar, antarmuka pengguna, dan beberapa guardrail biasanya sudah tersedia. Untuk organisasi yang ingin bergerak cepat, ini sangat menarik.

Di IT operations, agent untuk merangkum insiden, menyarankan knowledge article, atau membantu triage tiket di platform ITSM sering lebih efisien jika dibeli dari vendor yang sudah tertanam di stack tersebut. Di CRM, sales agent yang membantu menyiapkan follow-up, merangkum aktivitas akun, atau menyarankan next-best action sering lebih cepat diadopsi jika dibeli sebagai capability embedded dari platform yang sudah dipakai tim sales. Di HR services, employee service agent untuk menjawab pertanyaan kebijakan umum sering tidak perlu dibangun sendiri kecuali perusahaan punya kebutuhan yang sangat unik.

Namun, kecepatan datang dengan kompromi. Kontrol yang dimiliki perusahaan lebih terbatas. Perusahaan mungkin tidak bisa mengatur secara mendalam bagaimana reasoning dilakukan, bagaimana memori dikelola, bagaimana observability disajikan, atau bagaimana policy runtime diterapkan di luar opsi yang disediakan vendor. Banyak vendor menjanjikan konfigurasi, tetapi tidak semua benar-benar mendukung custom workflow yang kompleks. Untuk proses enterprise yang penuh pengecualian, batas ini cepat terasa.

Auditability dan data boundary harus diperiksa dengan serius sebelum membeli. Perusahaan perlu menilai data apa yang keluar ke vendor, di mana konteks diproses, bagaimana log disimpan, apakah keputusan agent dapat dijelaskan, dan bagaimana kontrol akses diterapkan. Untuk domain yang diatur oleh regulasi, pertanyaan ini tidak bisa ditunda sampai setelah kontrak ditandatangani.

Exit strategy juga harus jelas. Jika agent yang dibeli menjadi bagian penting dari workflow, perusahaan perlu tahu apakah data interaksi bisa diekspor, apakah konfigurasi dan prompt dapat dipindahkan, apakah integrasi alat bergantung pada format proprietary, dan apa yang terjadi jika vendor mengubah roadmap atau harga. Tanpa exit strategy, buy bisa berubah menjadi ketergantungan struktural.

Buy kurang tepat jika workflow sangat unik dan penuh logika proprietary, perusahaan membutuhkan kontrol mendalam atas policy dan observability, atau agent akan menjadi lapisan orkestrasi lintas banyak sistem yang tidak dikuasai vendor tersebut. Dalam kasus seperti itu, solusi vendor sering baik untuk titik awal, tetapi buruk sebagai fondasi jangka panjang.

## Kapan Bermitra atau Meminjam Menjadi Pilihan yang Sehat

Di antara build dan buy, ada dua pendekatan yang sering paling realistis untuk perusahaan besar: partner dan borrow. Keduanya berguna, tetapi untuk tujuan yang berbeda.

Pendekatan partner cocok ketika perusahaan tahu value pool yang ingin dikejar, tetapi belum punya pola implementasi yang matang, atau belum siap mengoperasikan agentic service sendiri pada fase awal. Partner bisa berperan dalam beberapa bentuk: membantu membangun blueprint dan reference architecture, mengembangkan agent pertama bersama tim internal, mengoperasikan managed service untuk domain tertentu, atau mempercepat industrialisasi melalui accelerator dan delivery capability.

Ini sering relevan untuk shared services, global capability center, atau fungsi yang ingin bergerak cepat dari pilot ke operasi. Sebuah GCC yang ingin mengubah finance operations menjadi model agentic mungkin tidak perlu langsung membangun semua capability sendiri. Bermitra dengan service provider dapat membantu mendesain operating model, membangun agent untuk pengecualian AP dan dukungan closing, menyiapkan governance dan observability, lalu mentransfer capability secara bertahap ke tim internal. Pendekatan ini masuk akal jika tujuan perusahaan bukan sekadar memiliki software, tetapi mengubah cara kerja layanan.

Namun, partner bukan berarti menyerahkan akuntabilitas. Kontrak harus jelas soal kepemilikan IP, penggunaan data, model operasi, SLA, hak audit, dan rencana transfer pengetahuan. Jika tidak, perusahaan hanya memindahkan ketergantungan dari vendor software ke vendor jasa.

Pendekatan borrow biasanya berarti memanfaatkan open-source framework, reference architecture, starter kit, accelerator, atau komponen komunitas untuk belajar cepat sebelum platform resmi dibakukan. Borrow sangat berguna pada fase awal ketika perusahaan ingin menguji pola orkestrasi, memahami kebutuhan tool calling, mencoba context layer, atau membuktikan use case tanpa menunggu keputusan platform enterprise selesai.

Tim procurement, misalnya, mungkin ingin menguji agent intake yang membaca request, mengecek policy, memanggil data kontrak, dan menyiapkan jalur approval. Untuk membuktikan pola ini, tim bisa meminjam komponen open-source dan accelerator internal. Jika hasilnya menjanjikan, barulah capability tersebut dipindahkan ke platform resmi dengan kontrol yang lebih kuat.

Borrow memberi kecepatan belajar, tetapi ia punya batas yang jelas. Kualitas dan keamanan komponen bisa bervariasi, kepemilikan jangka panjang sering kabur, dependency open-source bisa sulit dikelola, dan tim bisa terjebak pada prototipe yang tidak pernah di-hardening. Karena itu, borrow sebaiknya diperlakukan sebagai jalur eksplorasi, bukan alasan untuk menunda standardisasi.

Baik partner maupun borrow sering dipilih demi kecepatan. Justru karena itu, governance-nya harus lebih disiplin. Perusahaan perlu memastikan data boundary jelas, hak penggunaan model dan artefak jelas, IP hasil pengembangan tidak kabur, akuntabilitas atas keputusan agent tetap berada pada enterprise, dan ada jalur transisi dari eksperimen ke operasi formal. Jika tidak, perusahaan akan bergerak cepat ke arah yang salah.

## Realitas Hybrid: Mengelola Campuran Sumber Agent

Dalam praktik, perusahaan besar hampir pasti akan berakhir dengan rantai pasok agent yang hybrid. Beberapa agent dibangun sendiri, beberapa dibeli dari SaaS, beberapa dikembangkan bersama partner, dan beberapa dipinjam untuk eksperimen atau komponen tertentu. Ini bukan masalah. Yang berbahaya adalah jika campuran ini tumbuh tanpa arsitektur dan governance bersama.

Untuk mengelola model hybrid ini, perusahaan membutuhkan beberapa hal. Pertama, agent registry, yaitu katalog yang menjelaskan agent apa saja yang ada, siapa pemilik bisnis dan teknisnya, sumbernya dari mana, data dan alat apa yang dipakai, tingkat risikonya, dan status siklus hidupnya. Tanpa registry, tidak ada cara sehat untuk mengelola portofolio agent.

Kedua, standar interoperabilitas. Agent dari sumber berbeda tetap harus bisa hidup dalam ekosistem yang sama. Itu berarti perlu standar untuk identitas, tool calling, event, logging, observability, dan handoff antar-agent atau ke manusia. Jika tidak, setiap agent menjadi pulau sendiri.

Ketiga, pengelompokan risiko. Tidak semua agent perlu kontrol yang sama. Agent knowledge assistant tentu berbeda dengan agent yang bisa memicu tindakan di ERP. Perusahaan perlu mengelompokkan agent berdasarkan risiko dan dampak bisnis, lalu menerapkan kontrol yang proporsional.

Keempat, governance bersama. Apa pun sumbernya, semua agent yang masuk ke operasi harus tunduk pada governance yang sama: security review, data permissioning, evaluation, approval threshold, observability, incident management, dan proses decommissioning. Sourcing boleh berbeda, tetapi standar enterprise tidak boleh.

## Cara Berpikir yang Lebih Sehat: Sourcing per Lapisan

Satu use case tidak harus memakai satu strategi sourcing tunggal. Sering kali keputusan terbaik justru berbeda per lapisan. Sebagai contoh, buy untuk capability embedded di CRM, build untuk lapisan orkestrasi dan policy, partner untuk implementasi awal, dan borrow untuk eksperimen komponen konteks tertentu.

Pertanyaan sourcing yang lebih matang adalah: lapisan mana yang menjadi diferensiasi? Lapisan mana yang sudah menjadi komoditas? Lapisan mana yang perlu dipercepat? Dan lapisan mana yang masih layak dieksplorasi? Pendekatan ini jauh lebih realistis daripada memaksakan satu jawaban untuk seluruh stack agentic.

Pada akhirnya, strategi sourcing agent yang baik bukan tentang memilih satu kubu. Ia tentang menempatkan kontrol, kecepatan, dan diferensiasi pada tempat yang tepat. Perusahaan yang matang tidak akan membangun semuanya sendiri, tetapi juga tidak akan membeli masa depannya secara membabi buta. Mereka akan mengelola agent seperti portofolio kapabilitas enterprise, dengan disiplin arsitektur, governance, dan akuntabilitas yang setara dengan pentingnya peran agent dalam operasi bisnis.
