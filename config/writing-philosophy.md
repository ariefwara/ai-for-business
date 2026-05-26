# Filosofi Penulisan Seri Agentic Enterprise

Dokumen ini menjadi pegangan gaya untuk menulis artikel panjang tentang agentic AI di perusahaan. Tujuannya bukan membuat tulisan terdengar seperti laporan konsultan, tetapi membimbing pembaca dari situasi bisnis yang nyata menuju konsep, keputusan arsitektur, tata kelola, dan implikasi operasional.

## Mulai Dari Keadaan Pembaca

Jangan menganggap pembaca sudah memiliki strategi AI yang matang, platform agent, operating model baru, atau governance yang lengkap. Banyak pembaca mungkin baru berada di tahap:

- tim mencoba chatbot atau copilot di beberapa fungsi;
- ada pilot AI yang menarik tetapi belum jelas nilai bisnisnya;
- fungsi bisnis ingin otomasi, tetapi takut kehilangan kontrol;
- IT dan risk team belum sepakat soal akses data, approval, dan audit trail;
- manajemen ingin skala, tetapi belum tahu apa yang perlu distandardisasi.

Tulisan harus mulai dari keadaan seperti itu. Pembaca perlu merasa, "ini memang masalah yang sedang saya lihat", sebelum dikenalkan pada istilah, framework, atau arsitektur.

## Bimbing, Jangan Berpidato

Jangan membuka tulisan dengan klaim besar seperti "agentic AI akan mendisrupsi perusahaan" atau "enterprise harus segera mengadopsi autonomy-first operating model". Mulai dari pertanyaan yang wajar:

- pekerjaan apa yang mulai terlalu kompleks untuk dibantu oleh automation biasa?
- keputusan mana yang tetap harus dipegang manusia?
- data apa yang boleh dilihat agent, dan tindakan apa yang boleh ia ambil?
- bagaimana perusahaan tahu agent membantu, bukan menambah risiko?
- apa yang perlu berubah di struktur kerja, bukan hanya di tool?

Tulisan yang baik terasa seperti pembaca sedang dituntun menyusun pemahaman, bukan sedang menerima pidato abstrak.

## Kebutuhan Dulu, Istilah Belakangan

Jangan mulai dari istilah. Mulai dari kebutuhan atau masalah, lalu beri nama konsepnya.

Contoh pola:

- perusahaan ingin agent membantu proses kerja lintas sistem;
- agent butuh konteks, akses data, dan batas tindakan;
- tindakan agent perlu diawasi, diuji, dan bisa dijelaskan;
- baru setelah itu istilah seperti context layer, tool calling, guardrails, observability, lifecycle management, atau operating model diperkenalkan.

Istilah harus muncul sebagai jawaban atas masalah, bukan sebagai beban di awal paragraf.

## Gunakan Bahasa Umum yang Tetap Tajam

Gunakan bahasa Indonesia yang natural untuk pembaca bisnis dan teknologi. Campur istilah Inggris jika memang lebih umum dipakai oleh praktisi, misalnya agent, workflow, use case, approval, governance, risk, platform, context, runtime, tool calling, audit trail, dan operating model.

Hindari bahasa yang terlalu slogan, terlalu akademik, atau terlalu promosi. Kalimat harus konkret dan memiliki subjek yang jelas: tim, agent, user, manajer, platform, sistem, data, fungsi bisnis, risk team, atau perusahaan.

Lebih baik menulis:

- "tim risk perlu tahu tindakan apa yang bisa dilakukan agent"
- "agent tidak boleh mendapat akses luas hanya karena pilot terlihat berhasil"
- "workflow perlu didesain ulang agar manusia menangani exception, bukan semua langkah rutin"

Daripada:

- "governance perlu diorkestrasi secara holistik"
- "perusahaan harus mengakselerasi transformasi otonom"
- "AI menjadi enabler strategis untuk operating model masa depan"

## Jangan Tool-Centric

Model, platform, framework, vendor, dan library adalah jawaban atas kebutuhan, bukan titik awal tulisan. Jangan memulai artikel dari nama tool atau teknologi tertentu kecuali artikel memang sedang membahas keputusan teknis tersebut.

Pembaca harus lebih dulu memahami:

- mengapa agent membutuhkan konteks bisnis yang dapat dipercaya;
- mengapa akses ke sistem enterprise harus dibatasi;
- mengapa approval dan audit trail berbeda untuk tiap tingkat risiko;
- mengapa pilot yang berhasil belum tentu siap diskalakan;
- mengapa nilai bisnis harus diukur dari outcome, bukan hanya jumlah tugas yang diotomasi.

Setelah kebutuhan itu jelas, barulah pilihan arsitektur, platform, vendor, atau proses dijelaskan.

## Fondasi Sebelum Skala

Agentic AI bukan dimulai dari skala. Ia dimulai dari pekerjaan nyata yang ingin diperbaiki, lalu berkembang menjadi sistem kerja yang lebih luas.

Urutan berpikir yang sehat:

1. ada pekerjaan bisnis yang lambat, mahal, berulang, atau penuh handoff;
2. AI dapat membantu sebagian pekerjaan, tetapi belum tentu boleh bertindak sendiri;
3. agent membutuhkan data, konteks, tool, aturan, dan batas otonomi;
4. pilot menunjukkan potensi, tetapi juga membuka risiko baru;
5. perusahaan perlu governance, observability, lifecycle, ownership, dan operating model;
6. setelah itu barulah scaling menjadi masuk akal.

Tulisan tidak boleh melompat langsung ke skala tanpa membangun fondasi ini.

## Tulis Dengan Pola Naratif yang Konsisten

Gunakan pola berikut untuk mayoritas bagian:

```text
situasi nyata -> masalah yang terasa -> mengapa cara lama tidak cukup -> konsep yang menjelaskan masalah -> implikasi praktis
```

Contoh situasi nyata:

- tim finance ingin agent membantu close process, tetapi data tersebar di ERP, spreadsheet, dan email;
- customer operations ingin mempercepat respons, tetapi agent bisa salah memberi komitmen ke pelanggan;
- procurement ingin agent membantu vendor triage, tetapi perubahan supplier memiliki risiko compliance;
- IT operations ingin agent membantu incident triage, tetapi tindakan otomatis bisa memperparah gangguan;
- HR ingin agent menjawab policy, tetapi keputusan terkait karyawan harus tetap melalui kontrol manusia.

## Utamakan Narasi dan Pemaparan

Artikel harus terasa seperti penjelasan yang mengalir, bukan kumpulan poin presentasi. Gunakan paragraf naratif untuk membangun konteks, menjelaskan sebab-akibat, menunjukkan trade-off, dan menghubungkan satu ide ke ide berikutnya.

Isi utama artikel harus dipaparkan dalam paragraf. Jangan memakai bullet point untuk menjelaskan konsep, membangun argumen, membandingkan opsi, atau menguraikan alur kerja. Jika sebuah ide membutuhkan penjelasan, tulis sebagai narasi dengan contoh dan transisi yang jelas.

Bullet point hanya boleh dipakai untuk recap atau penyimpulan kembali setelah sebuah bagian sudah dijelaskan secara naratif. Fungsinya adalah merapikan ingatan pembaca, bukan menggantikan pemaparan.

Pembaca harus merasa sedang mengikuti argumentasi yang matang, bukan membaca slide deck yang dipanjangkan.

## Satu Unit, Satu Ide Utama

Setiap subbagian harus punya satu ide utama. Jangan menumpuk terlalu banyak konsep dalam satu bagian. Jika sebuah bagian membahas value pool, jangan sekaligus membahas arsitektur runtime secara dalam. Jika bagian membahas guardrails, jangan berubah menjadi pembahasan panjang tentang workforce.

Hubungkan antarartikel secukupnya, tetapi jangan mengulang penjelasan yang sama. Jika konsep pernah dijelaskan, artikel berikutnya harus memajukan pembahasan: memberi contoh baru, risiko baru, keputusan implementasi, atau implikasi governance yang lebih dalam.

## Referensi Sebagai Fondasi, Bukan Pajangan

Gunakan whitepaper dan referensi sebagai bahan sintesis. Jangan menyalin panjang. Jangan memenuhi tulisan dengan nama konsultan atau kutipan. Ambil pola yang kuat, bandingkan sudut pandang, lalu jadikan artikel baru yang berdiri sendiri.

Klaim numerik hanya boleh dipakai jika jelas berasal dari referensi. Jika angka hanya contoh, beri konteks bahwa itu contoh, bukan fakta umum.

## Akhiri Dengan Implikasi Praktis

Setiap artikel harus membantu pembaca mengambil keputusan berikutnya. Akhiri dengan penutup naratif yang merangkum inti argumen, menjelaskan konsekuensi praktis, dan menunjukkan pertanyaan atau keputusan yang sebaiknya dibawa pembaca setelah selesai membaca.

Pembaca seharusnya selesai membaca dengan pemahaman yang lebih jelas tentang:

- apa masalahnya;
- mengapa masalah itu penting;
- pilihan apa yang tersedia;
- risiko apa yang harus dikendalikan;
- langkah apa yang masuk akal untuk dilakukan berikutnya.
