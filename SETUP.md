# 🚀 PANDUAN IMPLEMENTASI PORTFOLIO

Ikuti langkah-langkah berikut untuk mengaktifkan portfolio baru Anda:

## ✅ LANGKAH 1: Backup File Lama (Opsional)
Jika ingin menyimpan file lama:
```bash
mkdir backup
mv index.html backup/index-old.html
mv style.css backup/style-old.css
mv script.js backup/script-old.js
```

## ✅ LANGKAH 2: Aktivasi File Baru
Jalankan perintah berikut di terminal:

```bash
cd "/home/farafahirun/Kuliah/Github Repository/portofolio"

# Rename file baru menjadi file utama
mv index-new.html index.html
mv styles-new.css style.css
mv script-new.js script.js
```

## ✅ LANGKAH 3: Update Data Pribadi

### 1. Edit file `data.js`
Buka file `data.js` dan ubah informasi berikut sesuai data Anda:

**Personal Info:**
```javascript
email: "email_anda@example.com",        // Ganti dengan email Anda
phone: "+62 812-xxxx-xxxx",             // Ganti dengan nomor HP Anda
birthDate: "2003-05-15",                // Ganti dengan tanggal lahir Anda
```

**Social Links:**
```javascript
github: "https://github.com/username_anda",
linkedin: "https://linkedin.com/in/username_anda",
instagram: "https://instagram.com/username_anda",
blog: "https://username_anda.github.io"
```

**External Links:**
```javascript
alternativePortfolio: "https://www.canva.com/design/link_portfolio_canva_anda"
```

### 2. Update Foto Profil
- Pastikan foto profil sudah ada di `assets/img/foto-profil.jpg`
- Jika belum, upload foto Anda ke folder tersebut
- Format yang didukung: JPG, PNG (rekomendasi: 500x500px, max 200KB)

### 3. Upload CV
- Upload file CV Anda (format PDF) ke `assets/cv.pdf`
- Pastikan nama file adalah `cv.pdf`

## ✅ LANGKAH 4: Kustomisasi Content

### A. Edit Projects
Sesuaikan data proyek di `data.js` bagian `PROJECTS`:
- Hapus atau ubah proyek yang sudah ada
- Tambahkan proyek Anda yang sebenarnya
- Update tahun, status, deskripsi, link GitHub & demo

### B. Edit Skills
Sesuaikan skill levels di `data.js` bagian `SKILLS`:
- Ubah level skill sesuai kemampuan Anda (0-100)
- Tambah/hapus skill sesuai kebutuhan

### C. Edit Testimonials
Ubah testimonial di `data.js` bagian `TESTIMONIALS`:
- Ganti dengan testimonial asli dari dosen/klien/rekan kerja
- Jika punya foto testimoni, tambahkan path foto

### D. Edit Education & Experience
Update bagian `EDUCATION_HISTORY` dan `EXPERIENCES`:
- Sesuaikan dengan riwayat pendidikan Anda
- Tambahkan pengalaman organisasi/proyek yang sebenarnya

## ✅ LANGKAH 5: Test Website

### 1. Buka di Browser
```bash
# Jika menggunakan VS Code, klik kanan index.html > Open with Live Server
# Atau buka langsung file index.html di browser
```

### 2. Test Fitur-Fitur:
- ✅ Dark/Light mode toggle berfungsi
- ✅ Smooth scroll ke setiap section
- ✅ Filter projects berfungsi
- ✅ Klik "View Projects" membuka projects.html
- ✅ Klik "Timeline" membuka timeline.html
- ✅ Tombol "Lihat CV" membuka modal CV
- ✅ Semua social links benar
- ✅ Responsive di mobile (test dengan device toolbar)

### 3. Test di Mobile
- Buka DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test di berbagai ukuran layar

## ✅ LANGKAH 6: Deploy ke GitHub Pages

### 1. Commit & Push ke GitHub
```bash
git add .
git commit -m "Update portfolio with new professional design"
git push origin main
```

### 2. Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Settings > Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save
6. Tunggu beberapa menit, website akan live di:
   `https://farafahirun.github.io/portofolio/`

## ✅ LANGKAH 7: Optimasi (Opsional)

### A. Optimasi Gambar
```bash
# Compress foto profil untuk loading lebih cepat
# Gunakan tools: TinyPNG, ImageOptim, atau Squoosh
```

### B. SEO Meta Tags
Update meta tags di `index.html` (line 7-20) dengan info akurat:
- Description
- Keywords
- OG image (untuk social media sharing)

### C. Google Analytics (Opsional)
Tambahkan tracking code sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎨 CUSTOMIZATION LANJUTAN

### Mengubah Warna Tema
Edit `style.css` di bagian `:root`:
```css
:root {
  --accent: #004E64;  /* Warna utama light mode */
}

[data-theme="dark"] {
  --accent: #1DAAB8;  /* Warna utama dark mode */
}
```

### Mengubah Font
Edit link Google Fonts di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@400;600;700&display=swap" rel="stylesheet">
```

Lalu update di `style.css`:
```css
body {
  font-family: 'NamaFont', sans-serif;
}
```

## 📋 CHECKLIST FINAL

Sebelum publish, pastikan:

- [ ] Semua data pribadi sudah benar
- [ ] Foto profil sudah terupload
- [ ] CV sudah terupload
- [ ] Semua social links sudah benar
- [ ] Projects data sudah diupdate
- [ ] Skills sudah disesuaikan
- [ ] Testimonials sudah disesuaikan
- [ ] Test di desktop browser
- [ ] Test di mobile
- [ ] Dark mode berfungsi
- [ ] Semua link eksternal berfungsi
- [ ] Tidak ada console errors
- [ ] Ready untuk dipublish!

## 🆘 TROUBLESHOOTING

**Problem: File tidak bisa di-rename**
```bash
# Gunakan command ini:
cp index-new.html index.html
cp styles-new.css style.css
cp script-new.js script.js
```

**Problem: Dark mode tidak persist**
- Clear browser cache
- Check localStorage enabled
- Test di incognito mode

**Problem: Images tidak muncul**
- Check path foto: `assets/img/foto-profil.jpg`
- Check file extension (jpg bukan jpeg)
- Check case-sensitive (Linux)

**Problem: CV modal kosong**
- Upload cv.pdf ke folder `assets/`
- Check browser support untuk PDF preview
- Try download button

**Problem: Projects tidak muncul**
- Check console untuk JavaScript errors
- Pastikan `data.js` loaded sebelum `script.js`
- Check PROJECTS array tidak kosong

## 📞 SUPPORT

Jika ada masalah:
1. Check console browser (F12) untuk error messages
2. Validasi JavaScript syntax di data.js
3. Clear cache dan reload
4. Test di browser lain

---

**Selamat! Portfolio profesional Anda siap digunakan! 🎉**

Jangan lupa:
- Update portfolio secara berkala
- Tambahkan project baru yang Anda kerjakan
- Perbarui skills seiring Anda belajar hal baru
- Minta testimonial dari dosen/klien untuk kredibilitas

**Good luck! 🚀**
