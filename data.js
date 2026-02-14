/* =====================================================
   PERSONAL DATA
   ===================================================== */

const PERSONAL_INFO = {
  fullName: "Fara Rahmasari Fahirun",
  shortName: "Fara Fahirun",
  title: "Frontend Engineer & AI Engineer",
  description: "Passionate about building innovative web solutions and AI-driven applications. Focused on creating user-centered designs with data-driven insights.",
  email: "farafahirun@example.com",
  phone: "+62 812-3456-7890",
  location: "Makassar, Sulawesi Selatan",
  birthDate: "2003-05-15",
  photo: "assets/img/foto-profil.jpg",
  
  education: {
    current: "Sistem Informasi - Universitas Hasanuddin",
    gpa: "3.89",
    maxGpa: "4.00",
    status: "Mahasiswa Aktif"
  },

  socialLinks: {
    github: "https://github.com/farafahirun",
    linkedin: "https://linkedin.com/in/farafahirun",
    email: "mailto:farafahirun@example.com",
    instagram: "https://instagram.com/farafahirun",
    blog: "https://farafahirun.github.io"
  },

  externalLinks: {
    cv: "assets/cv.pdf",
    alternativePortfolio: "https://www.canva.com/design/your-portfolio-link"
  },

  professionalSummary: "Frontend Engineer with strong orientation in AI Engineering and data-driven solutions. Experienced in building responsive web applications, implementing machine learning models, and creating intuitive user interfaces. Committed to continuous learning and staying updated with the latest technologies in web development and artificial intelligence."
};

/* =====================================================
   EDUCATION HISTORY
   ===================================================== */

const EDUCATION_HISTORY = [
  {
    institution: "Universitas Hasanuddin",
    degree: "S1 Sistem Informasi",
    period: "2021 - Sekarang",
    gpa: "3.89/4.00"
  },
  {
    institution: "SMA Negeri 1 Makassar",
    degree: "IPA",
    period: "2018 - 2021",
    gpa: "90.5/100"
  }
];

/* =====================================================
   EXPERIENCE DATA
   ===================================================== */

const EXPERIENCES = [
  {
    type: "organization",
    title: "Ketua Divisi IT",
    organization: "Himpunan Mahasiswa Sistem Informasi",
    period: "2023 - 2024",
    description: "Memimpin tim dalam pengembangan sistem informasi internal dan website organisasi"
  },
  {
    type: "organization",
    title: "Staff IT",
    organization: "BEM Fakultas",
    period: "2022 - 2023",
    description: "Mengembangkan dan memelihara infrastruktur IT organisasi"
  },
  {
    type: "project",
    title: "Team Leader - AgriForesight",
    organization: "Project AI Development",
    period: "2024 - Sekarang",
    description: "Memimpin pengembangan sistem AI untuk prediksi pertanian"
  },
  {
    type: "competition",
    title: "Finalis Gemastik XVI",
    organization: "Data Mining",
    period: "2024",
    description: "Kompetisi data mining tingkat nasional"
  },
  {
    type: "competition",
    title: "Juara 2 Hackathon Regional",
    organization: "Smart City Solutions",
    period: "2023",
    description: "Mengembangkan solusi smart city berbasis AI"
  }
];

/* =====================================================
   PROJECTS DATA
   ===================================================== */

const PROJECTS = [
  {
    id: "agriforesight",
    title: "AgriForesight",
    year: 2025,
    status: "Ongoing",
    categories: ["AI", "Frontend", "Data"],
    description: "AI-powered agricultural forecasting system untuk prediksi hasil panen dan rekomendasi penanaman.",
    overview: "Sistem prediksi berbasis machine learning yang membantu petani dalam mengambil keputusan tentang waktu tanam, jenis tanaman, dan estimasi hasil panen.",
    techStack: ["Python", "Flask", "TensorFlow", "React", "MySQL", "Scikit-learn"],
    outcome: "Akurasi prediksi 87%, telah diujicoba oleh 50+ petani di Sulawesi Selatan",
    github: "https://github.com/farafahirun/agriforesight",
    demo: null,
    relatedProjects: ["calfood", "data-viz-dashboard"]
  },
  {
    id: "calfood",
    title: "CalFood",
    year: 2024,
    status: "Finished",
    categories: ["AI", "Data"],
    description: "Aplikasi estimasi kalori makanan menggunakan computer vision dan deep learning.",
    overview: "Mobile dan web application yang dapat mendeteksi jenis makanan dan mengestimasi kandungan kalorinya melalui foto.",
    techStack: ["Python", "FastAPI", "PyTorch", "React", "OpenCV", "Firebase"],
    outcome: "Akurasi deteksi 85%, database 500+ jenis makanan Indonesia",
    github: "https://github.com/farafahirun/calfood",
    demo: "https://calfood-demo.vercel.app",
    relatedProjects: ["agriforesight"]
  },
  {
    id: "flashfield",
    title: "FlashField",
    year: 2024,
    status: "Finished",
    categories: ["Frontend", "UI/UX"],
    description: "Platform manajemen kegiatan lapangan dengan real-time tracking dan reporting.",
    overview: "Web application untuk memudahkan koordinasi tim lapangan dengan fitur GPS tracking, task management, dan automated reporting.",
    techStack: ["React", "Node.js", "PostgreSQL", "Google Maps API", "Socket.io"],
    outcome: "Digunakan oleh 3 perusahaan, 200+ pengguna aktif",
    github: "https://github.com/farafahirun/flashfield",
    demo: "https://flashfield.vercel.app",
    relatedProjects: ["event-management"]
  },
  {
    id: "data-viz-dashboard",
    title: "Data Visualization Dashboard",
    year: 2024,
    status: "Finished",
    categories: ["Data", "Frontend"],
    description: "Interactive dashboard untuk visualisasi data bisnis dengan multiple data sources.",
    overview: "Dashboard analytics yang dapat mengintegrasikan berbagai sumber data dan menampilkannya dalam visualisasi interaktif.",
    techStack: ["React", "D3.js", "Tableau", "Python", "Pandas", "PostgreSQL"],
    outcome: "Meningkatkan efisiensi analisis data hingga 60%",
    github: "https://github.com/farafahirun/data-viz",
    demo: "https://dataviz-demo.vercel.app",
    relatedProjects: ["agriforesight"]
  },
  {
    id: "ecommerce-laravel",
    title: "E-Commerce Platform",
    year: 2023,
    status: "Finished",
    categories: ["Frontend", "Data"],
    description: "Full-stack e-commerce platform dengan fitur payment gateway dan inventory management.",
    overview: "Platform e-commerce lengkap dengan sistem manajemen produk, keranjang belanja, payment integration, dan admin dashboard.",
    techStack: ["Laravel", "MySQL", "JavaScript", "Bootstrap", "Midtrans API"],
    outcome: "Menangani 1000+ transaksi, 50+ merchant",
    github: "https://github.com/farafahirun/ecommerce-laravel",
    demo: null,
    relatedProjects: ["flashfield"]
  },
  {
    id: "event-management",
    title: "Event Management System",
    year: 2023,
    status: "Finished",
    categories: ["Frontend", "UI/UX"],
    description: "Sistem manajemen event dengan fitur registrasi online dan QR code ticketing.",
    overview: "Platform untuk mengelola event mulai dari registrasi peserta, payment, hingga check-in menggunakan QR code.",
    techStack: ["React", "Firebase", "Tailwind CSS", "QR Code API"],
    outcome: "Digunakan untuk 15+ event dengan total 3000+ peserta",
    github: "https://github.com/farafahirun/event-management",
    demo: "https://event-demo.vercel.app",
    relatedProjects: ["flashfield"]
  },
  {
    id: "portfolio-generator",
    title: "AI Portfolio Generator",
    year: 2024,
    status: "Ongoing",
    categories: ["AI", "Frontend"],
    description: "Generator portfolio otomatis menggunakan AI untuk menyesuaikan dengan preferensi user.",
    overview: "Tool yang menggunakan AI untuk generate portfolio website sesuai dengan data dan preferensi pengguna.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"],
    outcome: "Beta testing dengan 30+ users",
    github: "https://github.com/farafahirun/portfolio-generator",
    demo: null,
    relatedProjects: []
  },
  {
    id: "sentiment-analysis",
    title: "Social Media Sentiment Analysis",
    year: 2024,
    status: "Finished",
    categories: ["AI", "Data"],
    description: "Tool analisis sentiment untuk monitoring brand reputation di social media.",
    overview: "Aplikasi yang menganalisis sentiment komentar dan mentions di social media menggunakan NLP.",
    techStack: ["Python", "NLTK", "Transformers", "Flask", "SQLite"],
    outcome: "Akurasi 82%, dapat memproses 10k+ komentar/hari",
    github: "https://github.com/farafahirun/sentiment-analysis",
    demo: null,
    relatedProjects: ["data-viz-dashboard"]
  }
];

/* =====================================================
   SKILLS DATA
   ===================================================== */

const SKILLS = {
  "AI & Data Engineering": [
    { name: "Machine Learning", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "Python", level: 90 },
    { name: "Model Evaluation", level: 85 },
    { name: "Data Preprocessing", level: 88 },
    { name: "TensorFlow", level: 80 },
    { name: "Scikit-learn", level: 85 }
  ],
  "Web & Software Development": [
    { name: "JavaScript", level: 88 },
    { name: "Java", level: 75 },
    { name: "PHP", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "Laravel", level: 82 },
    { name: "Flask", level: 85 },
    { name: "FastAPI", level: 80 },
    { name: "React", level: 88 },
    { name: "Firebase", level: 85 }
  ],
  "UI/UX Design": [
    { name: "User-Centered Design", level: 85 },
    { name: "Responsive Layout", level: 92 },
    { name: "Figma", level: 88 },
    { name: "Graphic Design", level: 80 }
  ],
  "Data Visualization & Analytics": [
    { name: "Tableau", level: 85 },
    { name: "Power BI", level: 80 },
    { name: "MySQL", level: 88 },
    { name: "SQLite", level: 85 },
    { name: "D3.js", level: 78 }
  ],
  "Tools & Workflow": [
    { name: "Visual Studio Code", level: 95 },
    { name: "Android Studio", level: 75 },
    { name: "Git & GitHub", level: 90 },
    { name: "Excel", level: 85 },
    { name: "Microsoft Word", level: 90 },
    { name: "Google Spreadsheet", level: 88 }
  ]
};

/* =====================================================
   TESTIMONIALS DATA
   ===================================================== */

const TESTIMONIALS = [
  {
    name: "Dr. Ahmad Syarif",
    role: "Dosen Pembimbing",
    company: "Universitas Hasanuddin",
    photo: null,
    testimonial: "Fara adalah mahasiswa yang sangat tekun dan memiliki pemahaman yang baik tentang AI dan data science. Proyeknya selalu menunjukkan kualitas tinggi dan inovasi."
  },
  {
    name: "Budi Santoso",
    role: "Project Manager",
    company: "Tech Startup XYZ",
    photo: null,
    testimonial: "Bekerja sama dengan Fara dalam project FlashField sangat menyenangkan. Kemampuan frontend dan problem-solving nya sangat membantu tim mencapai target."
  },
  {
    name: "Sarah Wijaya",
    role: "UI/UX Designer",
    company: "Digital Agency ABC",
    photo: null,
    testimonial: "Fara memiliki eye for design yang baik. Implementasi frontend nya selalu pixel-perfect dan responsive di semua device."
  },
  {
    name: "Prof. Dr. Indra Gunawan",
    role: "Ketua Jurusan",
    company: "Universitas Hasanuddin",
    photo: null,
    testimonial: "Salah satu mahasiswa terbaik dengan IPK cemerlang. Aktif di organisasi dan memiliki portfolio project yang impressive."
  },
  {
    name: "Rina Permata",
    role: "Data Scientist",
    company: "Analytics Corp",
    photo: null,
    testimonial: "Collaboration di project analisis data bersama Fara sangat produktif. Kemampuan analisis dan visualisasi datanya sangat baik."
  },
  {
    name: "Andi Pratama",
    role: "CEO",
    company: "AgriTech Solutions",
    photo: null,
    testimonial: "AgriForesight yang dikembangkan Fara memberikan impact nyata untuk petani. Sistemnya user-friendly dan akurat."
  }
];

/* =====================================================
   BADGE SKILLS
   ===================================================== */

const BADGE_SKILLS = ["Frontend", "AI", "Data", "UI/UX"];
