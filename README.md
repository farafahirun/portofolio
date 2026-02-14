# Portfolio Website - Fara Rahmasari Fahirun

Portfolio personal profesional dengan orientasi **Frontend Engineering** dan **AI Engineering**.

## 🌟 Fitur Utama

### 1️⃣ Home Section
- ✅ Foto profil bulat dengan border gradient
- ✅ Nama lengkap dan deskripsi (Frontend & AI Engineer)
- ✅ Social links (GitHub, LinkedIn, Email, Instagram, Blog)
- ✅ Skill badges (Frontend, AI, Data, UI/UX)
- ✅ Auto-count total proyek
- ✅ Jumlah pengalaman
- ✅ IPK (3.89/4.00)
- ✅ Lokasi: Makassar, Sulawesi Selatan
- ✅ Tombol "View Projects", "Lihat CV", "View Alternative Portfolio"

### 2️⃣ About Section
- ✅ Data pribadi lengkap (nama, tanggal lahir, email, HP, lokasi, pendidikan, IPK, status)
- ✅ Riwayat pendidikan
- ✅ Professional summary (Frontend, AI, Data-driven)
- ✅ Pengalaman (organisasi, kerja tim, kompetisi)

### 3️⃣ Project Section
- ✅ Menampilkan 6 proyek terbaru di homepage
- ✅ Halaman "All Projects" terpisah
- ✅ Halaman "Timeline" terpisah
- ✅ Filter berdasarkan: Tahun, Status, Kategori
- ✅ Setiap proyek memiliki: nama, tahun, status, deskripsi, kategori, GitHub, demo
- ✅ Detail proyek: Overview, Tech Stack, Outcome, Related Projects

### 4️⃣ Skills Section
- ✅ AI & Data Engineering (ML, Data Analysis, Python, etc.)
- ✅ Web & Software Development (JS, React, Laravel, etc.)
- ✅ UI/UX Design (Figma, Responsive, etc.)
- ✅ Data Visualization & Analytics (Tableau, Power BI, MySQL)
- ✅ Tools & Workflow (VS Code, Git, Excel, etc.)
- ✅ Progress bar untuk setiap skill

### 5️⃣ Testimonial Section
- ✅ Card layout (grid 2-3 kolom)
- ✅ Foto profil bulat dengan fallback avatar
- ✅ Nama, role, company, testimonial
- ✅ Hover effect
- ✅ Responsive

### 6️⃣ Footer Section
- ✅ Design minimalis modern
- ✅ Nama lengkap & copyright
- ✅ Quick links (Home, Projects, About, Skills, Testimonials)
- ✅ Social icons
- ✅ Lokasi

### 7️⃣ Design System
**Light Mode:**
- Background: `#E0E5E9`
- Accent: `#004E64`

**Dark Mode:**
- Background: `#121212`
- Accent: `#1DAAB8`

### 8️⃣ Fitur Profesional Tambahan
- ✅ Dark/Light mode toggle (persistent via localStorage)
- ✅ Smooth scroll navigation
- ✅ Scroll reveal animations (AOS library)
- ✅ Responsive mobile-first design
- ✅ SEO meta tags
- ✅ Structured data (Schema.org)
- ✅ Lazy load images
- ✅ Auto count projects & experiences
- ✅ CV preview modal dengan download
- ✅ Scroll to top button
- ✅ Active navigation state
- ✅ Mobile menu

## 📁 Struktur File

```
portofolio/
├── index-new.html          # Homepage utama (gunakan ini)
├── projects.html           # Halaman semua proyek
├── timeline.html           # Timeline proyek
├── styles-new.css          # Stylesheet lengkap (gunakan ini)
├── script-new.js           # JavaScript utama (gunakan ini)
├── data.js                 # Data personal, projects, skills, testimonials
├── assets/
│   ├── img/
│   │   └── foto-profil.jpg # Foto profil Anda
│   └── cv.pdf              # File CV (perlu Anda upload)
└── README.md               # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Setup File
Rename file-file baru menjadi file utama:
```bash
mv index-new.html index.html
mv styles-new.css style.css
mv script-new.js script.js
```

### 2. Update Data Pribadi
Edit file `data.js` dan sesuaikan:
- Informasi pribadi (nama, email, phone, dll)
- Social media links
- Pendidikan
- Pengalaman
- Proyek
- Skills
- Testimonials

### 3. Upload Foto & CV
- Upload foto profil Anda ke `assets/img/foto-profil.jpg`
- Upload CV Anda (PDF) ke `assets/cv.pdf`

### 4. Jalankan Website
Buka `index.html` di browser atau host di:
- GitHub Pages
- Netlify
- Vercel
- Hosting lainnya

## 📝 Kustomisasi

### Mengubah Warna
Edit variabel CSS di `style.css`:
```css
:root {
  --accent: #004E64;        /* Warna utama light mode */
}

[data-theme="dark"] {
  --accent: #1DAAB8;        /* Warna utama dark mode */
}
```

### Menambah Project
Edit `data.js` di bagian `PROJECTS`:
```javascript
{
  id: "project-id",
  title: "Nama Project",
  year: 2025,
  status: "Ongoing", // atau "Finished"
  categories: ["Frontend", "AI"],
  description: "Deskripsi singkat",
  overview: "Overview lengkap",
  techStack: ["React", "Python"],
  outcome: "Hasil/achievement",
  github: "https://github.com/...",
  demo: "https://demo.com" // atau null
}
```

### Menambah Skill
Edit `data.js` di bagian `SKILLS`:
```javascript
"Kategori Skill": [
  { name: "Nama Skill", level: 85 } // level 0-100
]
```

### Menambah Testimonial
Edit `data.js` di bagian `TESTIMONIALS`:
```javascript
{
  name: "Nama Orang",
  role: "Jabatan",
  company: "Perusahaan/Instansi",
  photo: null, // atau "path/to/photo.jpg"
  testimonial: "Isi testimonial..."
}
```

## 🎨 Libraries & Tools

- **Google Fonts**: Inter
- **Icons**: Font Awesome 6.5.1
- **Animations**: AOS (Animate On Scroll)
- **Design**: Custom CSS with CSS Variables
- **JavaScript**: Vanilla JS (No framework)

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 🔧 Troubleshooting

**Dark mode tidak persist:**
- Pastikan browser mendukung localStorage
- Check console untuk errors

**Animasi tidak muncul:**
- Pastikan AOS library terload
- Check internet connection

**Foto tidak muncul:**
- Pastikan path foto benar
- Check file exists di folder assets/img/

**CV tidak bisa dibuka:**
- Upload file cv.pdf ke folder assets/
- Pastikan format PDF valid

## 📄 License

© 2025 Fara Rahmasari Fahirun. All rights reserved.

## 💡 Tips

1. **Optimasi Gambar**: Compress foto profil untuk loading lebih cepat
2. **Update Rutin**: Keep projects dan skills up to date
3. **SEO**: Update meta tags dengan info yang akurat
4. **Analytics**: Tambahkan Google Analytics untuk tracking
5. **Performance**: Test di PageSpeed Insights

## 📞 Contact

Untuk pertanyaan atau support, hubungi:
- Email: farafahirun@example.com
- GitHub: [@farafahirun](https://github.com/farafahirun)
- LinkedIn: [Fara Fahirun](https://linkedin.com/in/farafahirun)

---

**Built with ❤️ by Fara Rahmasari Fahirun**
