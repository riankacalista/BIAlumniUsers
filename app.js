const roadmap = [
  {
    year: "2026",
    title: "Portal alumni terintegrasi dan API dasar selesai dibangun",
    detail: "Fondasi sistem dipakai untuk login tunggal, sinkronisasi profil, dan alur data awal.",
  },
  {
    year: "2027",
    title: "AI Chatbot Tracer Study dan Career Platform mulai digunakan",
    detail: "Pengguna mulai berinteraksi lewat chatbot, pencarian kerja, dan layanan karier terarah.",
  },
  {
    year: "2028",
    title: "BI Dashboard dan Data Warehouse aktif digunakan pimpinan",
    detail: "Pimpinan membaca dashboard, scorecard, dan analisis historis dari satu sumber data.",
  },
  {
    year: "2029",
    title: "Predictive Analytics diterapkan untuk evaluasi kurikulum",
    detail: "Pola tracer, employability, dan skill gap dipakai untuk membaca kebutuhan perbaikan kurikulum.",
  },
  {
    year: "2030",
    title: "Smart Alumni Ecosystem berjalan penuh",
    detail: "Portal alumni, karier, BI, akreditasi, dan partner portal hidup sebagai satu ekosistem utuh.",
  },
];

const investments = [
  {
    name: "Heatmap alumni + ranking wilayah",
    value: 92,
    valueText: "Skor 92/100",
    priority: "High",
  },
  {
    name: "Employability scorecard per cohort",
    value: 88,
    valueText: "Skor 88/100",
    priority: "High",
  },
  {
    name: "Skill gap radar untuk kurikulum",
    value: 86,
    valueText: "Skor 86/100",
    priority: "High",
  },
  {
    name: "AI tracer chatbot dan reminder otomatis",
    value: 84,
    valueText: "Skor 84/100",
    priority: "High",
  },
  {
    name: "LAM-PTKes evidence pack generator",
    value: 80,
    valueText: "Skor 80/100",
    priority: "High",
  },
  {
    name: "Data warehouse alumni dan audit trail",
    value: 78,
    valueText: "Skor 78/100",
    priority: "Medium",
  },
  {
    name: "Notification engine untuk follow up alumni",
    value: 74,
    valueText: "Skor 74/100",
    priority: "High",
  },
  {
    name: "Role-based dashboard view",
    value: 72,
    valueText: "Skor 72/100",
    priority: "High",
  },
  {
    name: "Predictive alert untuk cohort berisiko",
    value: 70,
    valueText: "Skor 70/100",
    priority: "Medium",
  },
];

const alignments = [
  {
    title: "Pemantauan cohort per angkatan dan prodi",
    enabler: "Filter geospasial, employability rate, dan tracer response",
    owner: "Pengguna portal / Data steward",
    period: "2026",
  },
  {
    title: "Alumni self-service untuk update profil",
    enabler: "Portal alumni, login tunggal, dan notifikasi personal",
    owner: "Alumni / Helpdesk",
    period: "2026",
  },
  {
    title: "Pimpinan melihat KPI real-time tanpa menunggu laporan panjang",
    enabler: "Dashboard eksekutif, scorecard, dan tren per periode",
    owner: "Pimpinan Fakultas / CIO",
    period: "2027",
  },
  {
    title: "Dosen melihat skill gap untuk revisi materi ajar",
    enabler: "Gap matrix, employer demand, dan analitik kompetensi",
    owner: "Tim Kurikulum / Dosen",
    period: "2027",
  },
  {
    title: "Broadcast tracer study untuk cohort yang belum respons",
    enabler: "Reminder otomatis, status follow up, dan broadcast selektif",
    owner: "Pengguna portal / Data steward",
    period: "2026",
  },
  {
    title: "Employer feedback masuk sebagai indikator BI",
    enabler: "Employer survey, rating lulusan, dan komentar terbuka",
    owner: "Mitra / Employer",
    period: "2028",
  },
  {
    title: "Sistem menjaga kepatuhan, privasi, dan audit akses",
    enabler: "RBAC, consent management, audit trail, dan backup",
    owner: "Data Steward / Auditor Internal",
    period: "2026",
  },
];

const governance = [
  {
    title: "RBAC per role",
    body: "Setiap pengguna hanya melihat panel yang relevan dengan kewenangannya.",
  },
  {
    title: "Consent dan privasi",
    body: "Data profil dan lokasi kerja disimpan dengan persetujuan yang jelas dan jejak perubahan yang dapat diaudit.",
  },
  {
    title: "Audit trail dan quality check",
    body: "Perubahan data, filter, dan ekspor laporan tercatat agar sumber angka mudah ditelusuri.",
  },
  {
    title: "Recovery dan backup",
    body: "Snapshot data dan recovery plan disiapkan untuk menjaga sistem tetap tersedia saat dibutuhkan.",
  },
];

const quickWins = [
  {
    title: "Search alumni by location",
    body: "Cari kota, provinsi, atau negara lalu sistem langsung menyorot distribusi yang cocok.",
  },
  {
    title: "Broadcast tracer reminder",
    body: "Kirim pengingat tersegmentasi ke alumni yang belum mengisi tracer study.",
  },
  {
    title: "Pin cohort prioritas",
    body: "Tandai angkatan atau prodi yang paling butuh intervensi karir.",
  },
  {
    title: "Export PDF / CSV",
    body: "Satu klik untuk laporan rapat, akreditasi, atau bahan presentasi pimpinan.",
  },
  {
    title: "Skill gap alert",
    body: "Panel langsung menyorot kompetensi yang paling tertinggal dari kebutuhan industri.",
  },
  {
    title: "Profile completion nudges",
    body: "Mendorong alumni melengkapi profil sebelum data masuk ke scorecard.",
  },
];

const ecosystemModules = [
  {
    title: "Portal alumni terintegrasi",
    body: "Pengguna login sekali, update profil, dan mengisi tracer study tanpa pindah sistem.",
    value: "2026",
  },
  {
    title: "AI chatbot tracer study",
    body: "Menjawab pertanyaan alumni, memandu pengisian tracer, dan mengirim reminder otomatis.",
    value: "2027",
  },
  {
    title: "Career platform",
    body: "Menampilkan lowongan, riwayat kerja, dan rekomendasi karier yang sesuai profil lulusan.",
    value: "2027",
  },
  {
    title: "BI dashboard + data warehouse",
    body: "Pimpinan membaca sebaran alumni, employability, skill gap, dan alert per cohort dari satu sumber data.",
    value: "2028",
  },
  {
    title: "Partner portal",
    body: "Mitra industri memberi feedback, membuka lowongan, dan melihat ringkasan kebutuhan talenta.",
    value: "2029",
  },
  {
    title: "Smart alumni ecosystem",
    body: "Semua modul saling terhubung: alumni, karier, partner, BI, dan akreditasi berjalan sebagai satu layanan.",
    value: "2030",
  },
];

const donutSegments = [
  {
    label: "Jawa Timur",
    value: 38,
    percent: 44,
    color: "#7ee0c0",
    note: "Konsentrasi alumni terbesar",
  },
  {
    label: "DKI Jakarta / Jabodetabek",
    value: 22,
    percent: 31,
    color: "#ffcc7a",
    note: "Wilayah kerja prioritas kedua, termasuk Jakarta",
  },
  {
    label: "Luar Jawa / Luar negeri",
    value: 14,
    percent: 25,
    color: "#8db3ff",
    note: "Sebaran alumni lintas wilayah",
  },
];

const flowNodes = [
  {
    title: "Data sumber",
    body: "Portal alumni, tracer study, SI akademik, dan employer feed masuk sebagai bahan baku utama.",
  },
  {
    title: "Integrasi & quality gate",
    body: "Data disatukan lewat API, dinormalisasi, lalu dicek sebelum tampil ke panel yang dipilih.",
  },
  {
    title: "Analitik sistem",
    body: "Dashboard menampilkan sebaran alumni, employability, skill gap, dan cohort yang low response.",
  },
  {
    title: "Tindakan pengguna",
    body: "Pengguna memicu reminder, pimpinan membaca scorecard, dan dosen melihat prioritas kurikulum.",
  },
];

const skillGapIndicators = [
  {
    title: "Teknologi kesehatan digital",
    gap: 41,
    note: "Gap terbesar pada tool dan workflow digital",
  },
  {
    title: "Bahasa Inggris medis",
    gap: 35,
    note: "Perlu penguatan untuk kerja nasional dan internasional",
  },
  {
    title: "Komunikasi klinis",
    gap: 28,
    note: "Dibutuhkan untuk pelayanan dan komunikasi pasien",
  },
  {
    title: "Data literacy",
    gap: 24,
    note: "Dibutuhkan untuk membaca dashboard dan evidence-based decision",
  },
  {
    title: "Riset dan publikasi",
    gap: 19,
    note: "Mendukung akademik dan pengembangan profesi",
  },
  {
    title: "Manajemen layanan",
    gap: 16,
    note: "Membantu alur kerja klinik dan rumah sakit",
  },
];

const lamReadinessItems = [
  {
    title: "Tracer response rate",
    score: 82,
    note: "Cukup kuat untuk bukti luaran lulusan",
  },
  {
    title: "Sebaran alumni terpetakan",
    score: 88,
    note: "Cakupan lokasi kerja sudah jelas untuk visualisasi",
  },
  {
    title: "Kesesuaian bidang kerja",
    score: 76,
    note: "Perlu narasi pendukung untuk bidang yang belum sesuai",
  },
  {
    title: "Employer feedback",
    score: 74,
    note: "Masih bisa diperkuat dengan respon industri",
  },
  {
    title: "Dokumentasi luaran",
    score: 69,
    note: "Masih butuh evidence pack yang lebih rapi",
  },
  {
    title: "Audit trail dan privasi",
    score: 91,
    note: "Sudah kuat untuk kepatuhan data dan jejak aktivitas",
  },
];

const heatmapRegions = [
  {
    key: "Jawa Timur",
    label: "Jawa Timur",
    count: 38,
    intensity: 96,
    x: 50,
    y: 53,
    note: "Konsentrasi tertinggi",
  },
  {
    key: "DKI Jakarta / Jabodetabek",
    label: "DKI Jakarta",
    count: 22,
    intensity: 82,
    x: 38,
    y: 41,
    note: "Pusat kerja urban",
  },
  {
    key: "Jawa Tengah",
    label: "Jawa Tengah",
    count: 14,
    intensity: 72,
    x: 42,
    y: 45,
    note: "Area penyangga penting",
  },
  {
    key: "Sumatera",
    label: "Sumatera",
    count: 15,
    intensity: 64,
    x: 20,
    y: 27,
    note: "Sebaran regional awal",
  },
  {
    key: "Kalimantan",
    label: "Kalimantan",
    count: 8,
    intensity: 48,
    x: 56,
    y: 22,
    note: "Sebaran menengah",
  },
  {
    key: "Sulawesi",
    label: "Sulawesi",
    count: 7,
    intensity: 44,
    x: 75,
    y: 29,
    note: "Sebaran lintas pulau",
  },
  {
    key: "Bali-NTT",
    label: "Bali-NTT",
    count: 10,
    intensity: 58,
    x: 59,
    y: 61,
    note: "Koridor timur Jawa",
  },
  {
    key: "Luar negeri",
    label: "Luar negeri",
    count: 3,
    intensity: 28,
    x: 89,
    y: 11,
    note: "Niche global alumni",
  },
];

function buildHeatmapCloud(regions) {
  return regions
    .map(
      (region) => `
        <button class="heat-spot" type="button" style="left:${region.x}%; top:${region.y}%; --heat:${region.intensity};" data-region="${region.label}" title="${region.label} · ${region.count} alumni">
          <span>${region.label}</span>
          <strong>${region.count}</strong>
        </button>
      `
    )
    .join("");
}

const insight = [
  "Dashboard ini ditulis seperti ruang kendali sistem: sebaran alumni bisa dibaca lewat lokasi atau cohort, dan setiap panel mengarah ke tindakan yang jelas.",
  "Target utamanya bukan lagi narasi laporan, tetapi pengalaman operasional yang terasa seperti produk digital sungguhan dengan search, filter, dan visual yang berubah sesuai konteks.",
  "BI di sini bukan keseluruhan sistem, melainkan satu lapisan informasi yang dipakai pimpinan untuk membaca pola, risiko, dan prioritas tindakan.",
];

const pageMeta = {
  overview: {
    title: "Alumni Control Room",
    subtitle: "Lihat peta sistem lalu masuk ke BI untuk membaca informasi yang dibutuhkan pengguna.",
  },
  ecosystem: {
    title: "Ekosistem sistem alumni",
    subtitle: "Portal alumni, chatbot, career platform, BI, dan partner portal tersambung dalam satu alur.",
  },
  visual: {
    title: "BI dashboard sebaran alumni",
    subtitle: "Hotspot, ranking wilayah, dan alur data menampilkan informasi yang dipakai pengguna BI.",
  },
  roadmap: {
    title: "Milestone implementasi",
    subtitle: "Roadmap 2026–2030 menunjukkan ekosistem penuh, bukan BI saja.",
  },
  investment: {
    title: "Kesiapan LAM-PTKes",
    subtitle: "Buat ringkasan readiness dan evidence pack dari indikator utama.",
  },
  alignment: {
    title: "Peran pengguna, alumni, dan pimpinan",
    subtitle: "Ruang kendali berbeda untuk tiap peran dalam ekosistem alumni.",
  },
  governance: {
    title: "Kontrol data dan privasi",
    subtitle: "RBAC, audit trail, consent, dan backup menjaga sistem tetap aman.",
  },
  quickwins: {
    title: "Aksi otomatis",
    subtitle: "Fitur kecil yang langsung membuat sistem terasa hidup.",
  },
  insight: {
    title: "Kenapa ini terasa seperti sistem",
    subtitle: "Ringkasannya fokus ke pengalaman operasional, dengan BI sebagai satu bagian dari ekosistem.",
  },
};

const pageOrder = ["overview", "ecosystem", "visual", "roadmap", "investment", "alignment", "governance", "quickwins", "insight"];

const pageKeywords = {
  overview: ["overview", "ringkasan", "dashboard", "control room", "alumni"],
  ecosystem: ["ecosystem", "ekosistem", "portal", "career platform", "partner", "chatbot", "sistem lengkap"],
  visual: ["visual", "chart", "diagram", "donut", "map", "sebaran"],
  roadmap: ["roadmap", "implementasi", "milestone", "skill gap", "intervention"],
  investment: ["investment", "investasi", "capex", "anggaran", "prioritas", "modul", "lam", "akreditasi", "readiness"],
  alignment: ["alignment", "role", "alumni", "pimpinan", "pengguna"],
  governance: ["governance", "pdp", "keamanan", "data", "privasi"],
  quickwins: ["quick wins", "quickwin", "adopsi", "otomatis"],
  insight: ["insight", "sistem", "relevan", "operasional"],
};

const state = {
  page: "overview",
  search: "",
};

const elements = {
  sidebar: document.getElementById("sidebar"),
  backdrop: document.getElementById("backdrop"),
  openSidebar: document.getElementById("openSidebar"),
  closeSidebar: document.getElementById("closeSidebar"),
  searchInput: document.getElementById("searchInput"),
  searchMeta: document.getElementById("searchMeta"),
  clearSearch: document.getElementById("clearSearch"),
  sidebarNav: document.getElementById("sidebarNav"),
  pageKicker: document.getElementById("pageKicker"),
  pageTitle: document.getElementById("pageTitle"),
  pageSubtitle: document.getElementById("pageSubtitle"),
  resultCount: document.getElementById("resultCount"),
  heroBadges: document.getElementById("heroBadges"),
  focusList: document.getElementById("focusList"),
  metricsGrid: document.getElementById("metricsGrid"),
  ecosystemGrid: document.getElementById("ecosystemGrid"),
  priorityDonut: document.getElementById("priorityDonut"),
  donutLegend: document.getElementById("donutLegend"),
  alumniHeatmap: document.getElementById("alumniHeatmap"),
  heatmapCenter: document.getElementById("heatmapCenter"),
  heatmapNote: document.getElementById("heatmapNote"),
  heatmapRanking: document.getElementById("donutLegend"),
  flowDiagram: document.getElementById("flowDiagram"),
  skillGapChart: document.getElementById("skillGapChart"),
  skillGapSummary: document.getElementById("skillGapSummary"),
  roadmap: document.getElementById("roadmap"),
  investmentChart: document.getElementById("investmentChart"),
  miniSummary: document.getElementById("miniSummary"),
  lamReadinessChart: document.getElementById("lamReadinessChart"),
  lamReport: document.getElementById("lamReport"),
  generateLamReport: document.getElementById("generateLamReport"),
  alignmentGrid: document.getElementById("alignmentGrid"),
  governanceCards: document.getElementById("governanceCards"),
  quickWins: document.getElementById("quickWins"),
  insightCopy: document.getElementById("insightCopy"),
};

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .trim();
}

function matchesText(values, term) {
  if (!term) {
    return true;
  }

  return values.some((value) => normalize(value).includes(term));
}

function shouldShowAllForPage(pageId, term) {
  if (!term) {
    return false;
  }

  return (pageKeywords[pageId] || []).some((keyword) => keyword.includes(term) || term.includes(keyword));
}

function getTerm() {
  return normalize(elements.searchInput.value);
}

function getVisiblePanel() {
  return document.querySelector(`.page-panel[data-page="${state.page}"]`);
}

function setSidebarOpen(isOpen) {
  elements.sidebar.classList.toggle("open", isOpen);
  elements.backdrop.hidden = !isOpen;
  document.body.classList.toggle("sidebar-open", isOpen);
}

function closeSidebar() {
  setSidebarOpen(false);
}

function openSidebar() {
  setSidebarOpen(true);
}

function renderList(container, items, emptyLabel, renderer) {
  if (!container) {
    return;
  }

  if (!items.length) {
    container.innerHTML = `<div class="empty-state card soft"><strong>${emptyLabel}</strong><span>Ubah kata kunci atau pilih halaman lain.</span></div>`;
    return;
  }

  container.innerHTML = items.map(renderer).join("");
}

function renderOverview(term) {
  const showAll = shouldShowAllForPage("overview", term);

  const badges = ["Alumni Dashboard", "Self-service Access", "Search-aware Charts", "BI Layer"].filter((item) => showAll || matchesText([item], term));

  const focusItems = [
    "Pengguna melihat ekosistem sistem terlebih dulu lalu masuk ke BI untuk membaca informasi yang dibutuhkan",
    "Alumni bisa cari panel relevan lalu sistem menyorot hasil yang cocok",
    "Skill gap, employability rate, dan low response cohort tampil sebagai alert",
    "BI dipakai untuk ringkasan, evaluasi kurikulum, dan keputusan pimpinan",
  ].filter((item) => showAll || matchesText([item], term));

  const metricsSource = [
    { label: "Alumni terpetakan", value: "2.184", detail: "profil aktif di peta sebaran", tone: "accent" },
    { label: "Tracer response", value: "62%", detail: "respon survei semester ini", tone: "accent warm" },
    { label: "Employability rate", value: "71%", detail: "lulusan bekerja ≤3 bulan", tone: "accent deep" },
    { label: "Skill gap tinggi", value: "3", detail: "kompetensi yang paling tertinggal", tone: "accent green" },
    { label: "Cohort low response", value: "5", detail: "angkatan yang perlu follow up", tone: "accent slate" },
    { label: "Wilayah dominan", value: "Jatim", detail: "konsentrasi alumni terbesar", tone: "accent amber" },
    { label: "Employer feedback", value: "74%", detail: "rata-rata rating employer (bulan ini)", tone: "" },
    { label: "Feedback count", value: "182", detail: "masukan employer bulan ini", tone: "" },
    { label: "Chatbot usage", value: "1.2k", detail: "percakapan AI tracer bulan ini", tone: "" },
  ];
  const metrics = showAll ? metricsSource : metricsSource.filter((item) => matchesText([item.label, item.value, item.detail], term));

  renderList(elements.heroBadges, badges, "Tidak ada badge yang cocok", (item) => `<span>${item}</span>`);
  renderList(elements.focusList, focusItems, "Tidak ada fokus yang cocok", (item) => `<li>${item}</li>`);

  if (!elements.metricsGrid) {
    return;
  }

  if (!metrics.length) {
    elements.metricsGrid.innerHTML = '<div class="empty-state card soft"><strong>Tidak ada metrik yang cocok</strong><span>Coba kata kunci lain.</span></div>';
    return;
  }

  elements.metricsGrid.innerHTML = metrics
    .map(
      (item) => `
        <article class="metric card ${item.tone}">
          <span class="metric-label">${item.label}</span>
          <strong>${item.value}</strong>
          <small>${item.detail}</small>
        </article>
      `
    )
    .join("");
}

function renderEcosystem(term) {
  const showAll = shouldShowAllForPage("ecosystem", term);
  const filtered = showAll ? ecosystemModules : ecosystemModules.filter((item) => matchesText([item.title, item.body, item.value], term));

  renderList(
    elements.ecosystemGrid,
    filtered,
    "Tidak ada modul ekosistem yang cocok",
    (item) => `
      <article class="info-card ecosystem-card">
        <div class="card-topline">
          <div class="card-index">${item.value}</div>
          <div class="tag">Modul</div>
        </div>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  );
}

function renderVisual(term) {
  const showAll = shouldShowAllForPage("visual", term);
  const filteredRegions = showAll ? heatmapRegions : heatmapRegions.filter((item) => matchesText([item.label, item.note, item.key, item.count], term));
  const filteredNodes = showAll ? flowNodes : flowNodes.filter((item) => matchesText([item.title, item.body], term));

  if (filteredRegions.length) {
    const topRegion = filteredRegions.reduce((current, item) => (item.intensity > current.intensity ? item : current), filteredRegions[0]);
    const totalVisible = filteredRegions.reduce((sum, item) => sum + item.count, 0);

    elements.alumniHeatmap.innerHTML = buildHeatmapCloud(filteredRegions);

    if (elements.heatmapCenter) {
      elements.heatmapCenter.innerHTML = `
        <strong>${totalVisible}</strong>
        <span>${term ? `hasil untuk "${elements.searchInput.value}"` : `alumni terpetakan`}</span>
      `;
    }

    if (elements.heatmapNote) {
      elements.heatmapNote.innerHTML = `
        <div class="heatmap-note-card">
          <strong>Hotspot utama</strong>
          <span>${topRegion.label} dengan ${topRegion.count} alumni</span>
        </div>
        <div class="heatmap-note-card">
          <strong>Intensitas</strong>
          <span>${topRegion.intensity}% pada wilayah paling padat</span>
        </div>
      `;
    }

    elements.heatmapRanking.innerHTML = filteredRegions
      .slice()
      .sort((a, b) => b.count - a.count)
      .map(
        (region) => `
          <div class="legend-item">
            <span class="legend-swatch" style="background:hsl(192, 80%, ${Math.max(32, 80 - region.intensity / 2)}%)"></span>
            <div class="legend-text">
              <strong>${region.label} (${region.count})</strong>
              <span>${region.note}</span>
            </div>
          </div>
        `
      )
      .join("");
  } else {
    elements.alumniHeatmap.innerHTML = '<div class="heatmap-empty">Tidak ada wilayah yang cocok</div>';
    if (elements.heatmapCenter) {
      elements.heatmapCenter.innerHTML = "<strong>0</strong><span>hasil</span>";
    }
    if (elements.heatmapNote) {
      elements.heatmapNote.innerHTML = '<div class="heatmap-note-card"><strong>Tidak ada hasil</strong><span>Coba kata lain.</span></div>';
    }
    elements.heatmapRanking.innerHTML = '<div class="empty-state inline"><strong>Tidak ada wilayah yang cocok</strong><span>Coba kata lain.</span></div>';
  }

  renderList(
    elements.flowDiagram,
    filteredNodes,
    "Tidak ada node diagram yang cocok",
    (item) => `
      <div class="flow-node">
        <strong>${item.title}</strong>
        <span>${item.body}</span>
      </div>
    `
  );
}

function renderSkillGap(term) {
  const showAll = shouldShowAllForPage("roadmap", term);
  const filtered = showAll ? skillGapIndicators : skillGapIndicators.filter((item) => matchesText([item.title, item.note, item.gap], term));

  renderList(
    elements.skillGapChart,
    filtered,
    "Tidak ada skill gap yang cocok",
    (item) => `
      <div class="bar-row">
        <div class="bar-label">
          <strong>${item.title}</strong><br />
          <span class="tag alt">Gap ${item.gap} poin</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="--w:${item.gap}%; background:linear-gradient(90deg, #ffcc7a, #ff8fb3)"></div>
        </div>
        <div class="bar-value">${item.note}</div>
      </div>
    `
  );

  if (elements.skillGapSummary) {
    const topGap = filtered[0] || skillGapIndicators[0];
    const averageGap = Math.round(filtered.reduce((sum, item) => sum + item.gap, 0) / Math.max(filtered.length, 1));

    elements.skillGapSummary.innerHTML = [
      { label: "Gap rata-rata", value: `${averageGap} poin`, detail: "semakin tinggi berarti makin perlu intervensi" },
      { label: "Gap terbesar", value: topGap ? topGap.title : "-", detail: topGap ? `${topGap.gap} poin` : "tidak ada data" },
      { label: "Fokus cepat", value: "komunikasi + digital", detail: "dua area paling sering muncul pada analisis" },
    ]
      .map(
        (item) => `
          <div>
            <span>${item.label}</span>
            <strong>${item.value}</strong>
            <small>${item.detail}</small>
          </div>
        `
      )
      .join("");
  }
}

function buildLamReport(term, filteredItems) {
  const items = filteredItems && filteredItems.length ? filteredItems : lamReadinessItems;
  const readiness = Math.round(items.reduce((sum, item) => sum + item.score, 0) / Math.max(items.length, 1));
  const strengths = items.filter((item) => item.score >= 85).map((item) => item.title);
  const gaps = items.filter((item) => item.score < 75).map((item) => item.title);

  return `
    <article class="info-card">
      <h3>Ringkasan kesiapan LAM-PTKes</h3>
      <p><strong>${readiness}%</strong> readiness berdasarkan ${items.length} indikator. ${term ? `Filter aktif: ${term}.` : ""}</p>
      <p>Yang sudah kuat: ${strengths.length ? strengths.join(", ") : "belum ada indikator yang masuk kategori kuat"}.</p>
      <p>Yang perlu dilengkapi: ${gaps.length ? gaps.join(", ") : "semua indikator berada di atas ambang minimum"}.</p>
      <p>Rekomendasi: rapikan evidence pack, ekspor ringkasan PDF, dan perkuat bukti tracer serta employer feedback.</p>
    </article>
  `;
}

function buildLamReportText(term, filteredItems) {
  const items = filteredItems && filteredItems.length ? filteredItems : lamReadinessItems;
  const readiness = Math.round(items.reduce((sum, item) => sum + item.score, 0) / Math.max(items.length, 1));
  const strengths = items.filter((item) => item.score >= 85).map((item) => item.title);
  const gaps = items.filter((item) => item.score < 75).map((item) => item.title);

  return [
    "Ringkasan Kesiapan LAM-PTKes",
    `Readiness: ${readiness}%`,
    `Filter: ${term || "semua data"}`,
    `Kuat: ${strengths.length ? strengths.join(", ") : "belum ada indikator yang masuk kategori kuat"}`,
    `Perlu dilengkapi: ${gaps.length ? gaps.join(", ") : "semua indikator berada di atas ambang minimum"}`,
    "Rekomendasi: rapikan evidence pack, ekspor ringkasan PDF, dan perkuat bukti tracer serta employer feedback.",
  ].join("\n");
}

function downloadLamReport(term, filteredItems) {
  const reportText = buildLamReportText(term, filteredItems);
  const blob = new Blob([reportText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `lam-ptkes-report-${Date.now()}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderLamReadiness(term) {
  const showAll = shouldShowAllForPage("investment", term);
  const filtered = showAll ? lamReadinessItems : lamReadinessItems.filter((item) => matchesText([item.title, item.note, item.score], term));

  renderList(elements.lamReadinessChart, filtered, "Tidak ada indikator kesiapan yang cocok", (item) => {
    const tone = item.score >= 85 ? "linear-gradient(90deg, #7ee0c0, #8db3ff)" : item.score >= 75 ? "linear-gradient(90deg, #ffcc7a, #ff8fb3)" : "linear-gradient(90deg, #ff8fb3, #d46c8c)";

    return `
        <div class="bar-row">
          <div class="bar-label">
            <strong>${item.title}</strong><br />
            <span class="tag ${item.score >= 75 ? "" : "alt"}">${item.score}% siap</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="--w:${item.score}%; background:${tone}"></div>
          </div>
          <div class="bar-value">${item.note}</div>
        </div>
      `;
  });

  if (elements.lamReport) {
    elements.lamReport.innerHTML = buildLamReport(term, filtered);
  }

  if (elements.generateLamReport) {
    elements.generateLamReport.onclick = () => {
      if (elements.lamReport) {
        elements.lamReport.innerHTML = buildLamReport(term, filtered);
      }
      downloadLamReport(term, filtered);
    };
  }
}

function renderRoadmap(term) {
  const showAll = shouldShowAllForPage("roadmap", term);
  const filtered = showAll ? roadmap : roadmap.filter((item) => matchesText([item.year, item.title, item.detail], term));

  renderList(
    elements.roadmap,
    filtered,
    "Tidak ada milestone yang cocok",
    (item) => `
      <article class="timeline-item">
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
      </article>
    `
  );
}

function renderInvestment(term) {
  return term;
}

function renderAlignment(term) {
  const showAll = shouldShowAllForPage("alignment", term);
  const filtered = showAll ? alignments : alignments.filter((item) => matchesText([item.title, item.enabler, item.owner, item.period], term));

  renderList(
    elements.alignmentGrid,
    filtered,
    "Tidak ada alignment yang cocok",
    (item, index) => `
      <article class="alignment-card">
        <div>
          <div class="card-topline">
            <div class="card-index">${index + 1}</div>
            <div class="tag">${item.period}</div>
          </div>
          <h3>${item.title}</h3>
          <p>${item.enabler}</p>
        </div>
        <p><strong>Owner:</strong> ${item.owner}</p>
      </article>
    `
  );
}

function renderGovernance(term) {
  const showAll = shouldShowAllForPage("governance", term);
  const filtered = showAll ? governance : governance.filter((item) => matchesText([item.title, item.body], term));

  renderList(
    elements.governanceCards,
    filtered,
    "Tidak ada governance yang cocok",
    (item) => `
      <article class="info-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  );
}

function renderQuickWins(term) {
  const showAll = shouldShowAllForPage("quickwins", term);
  const filtered = showAll ? quickWins : quickWins.filter((item) => matchesText([item.title, item.body], term));

  renderList(
    elements.quickWins,
    filtered,
    "Tidak ada quick win yang cocok",
    (item) => `
      <article class="quick-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  );
}

function renderInsight(term) {
  const showAll = shouldShowAllForPage("insight", term);
  const filtered = showAll ? insight : insight.filter((item) => matchesText([item], term));

  renderList(elements.insightCopy, filtered, "Tidak ada insight yang cocok", (item) => `<p>${item}</p>`);
}

function countMatches(pageId, term) {
  if (shouldShowAllForPage(pageId, term)) {
    const counts = {
      overview: 4 + 4 + 6,
      ecosystem: ecosystemModules.length,
      visual: heatmapRegions.length + flowNodes.length,
      roadmap: roadmap.length + skillGapIndicators.length,
      investment: lamReadinessItems.length,
      alignment: alignments.length,
      governance: governance.length,
      quickwins: quickWins.length,
      insight: insight.length,
    };

    return counts[pageId] || 0;
  }

  const matchers = {
    overview: () => {
      const badges = ["Alumni Dashboard", "Self-service Access", "Search-aware Charts", "BI Layer"].filter((item) => matchesText([item], term)).length;
      const focus = [
        "Pengguna melihat ekosistem sistem terlebih dulu lalu masuk ke BI untuk membaca informasi yang dibutuhkan",
        "Alumni bisa cari panel relevan lalu sistem menyorot hasil yang cocok",
        "Skill gap, employability rate, dan low response cohort tampil sebagai alert",
        "BI dipakai untuk ringkasan, evaluasi kurikulum, dan keputusan pimpinan",
      ].filter((item) => matchesText([item], term)).length;
      const metrics = ["Alumni terpetakan", "Tracer response", "Employability rate", "Skill gap tinggi", "Cohort low response", "Wilayah dominan"].filter((item) => matchesText([item], term)).length;

      return badges + focus + metrics;
    },
    ecosystem: () => ecosystemModules.filter((item) => matchesText([item.title, item.body, item.value], term)).length,
    visual: () => heatmapRegions.filter((item) => matchesText([item.label, item.note], term)).length + flowNodes.filter((item) => matchesText([item.title, item.body], term)).length,
    roadmap: () => roadmap.filter((item) => matchesText([item.year, item.title, item.detail], term)).length + skillGapIndicators.filter((item) => matchesText([item.title, item.note, item.gap], term)).length,
    investment: () => lamReadinessItems.filter((item) => matchesText([item.title, item.note, item.score], term)).length,
    alignment: () => alignments.filter((item) => matchesText([item.title, item.enabler, item.owner, item.period], term)).length,
    governance: () => governance.filter((item) => matchesText([item.title, item.body], term)).length,
    quickwins: () => quickWins.filter((item) => matchesText([item.title, item.body], term)).length,
    insight: () => insight.filter((item) => matchesText([item], term)).length,
  };

  return matchers[pageId] ? matchers[pageId]() : 0;
}

function findBestPage(term) {
  if (!term) {
    return state.page;
  }

  const scopes = {
    overview: ["Alumni Dashboard", "Self-service Access", "Search-aware Charts", "BI Layer", "Pengguna melihat ekosistem"],
    ecosystem: ecosystemModules.flatMap((item) => [item.title, item.body, item.value]),
    visual: heatmapRegions.flatMap((item) => [item.label, item.note]).concat(flowNodes.flatMap((item) => [item.title, item.body])),
    roadmap: roadmap.flatMap((item) => [item.year, item.title, item.detail]).concat(skillGapIndicators.flatMap((item) => [item.title, item.note, item.gap])),
    investment: lamReadinessItems.flatMap((item) => [item.title, item.note, item.score]),
    alignment: alignments.flatMap((item) => [item.title, item.enabler, item.owner, item.period]),
    governance: governance.flatMap((item) => [item.title, item.body]),
    quickwins: quickWins.flatMap((item) => [item.title, item.body]),
    insight: insight.slice(),
  };

  return pageOrder.find((pageId) => scopes[pageId].some((item) => normalize(item).includes(term))) || state.page;
}

function updateSidebarNav() {
  elements.sidebarNav.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("active", link.dataset.route === state.page);
  });
}

function updateTopbar(term) {
  const meta = pageMeta[state.page] || pageMeta.overview;
  elements.pageKicker.textContent = term ? "Search mode" : "System dashboard";
  elements.pageTitle.textContent = meta.title;
  elements.pageSubtitle.textContent = term ? `Menampilkan ${countMatches(state.page, term)} hasil pada halaman ini untuk "${elements.searchInput.value}".` : meta.subtitle;
  elements.resultCount.textContent = term ? `${countMatches(state.page, term)} hasil` : `Halaman: ${meta.title}`;
  elements.searchMeta.textContent = term
    ? `Tekan Enter untuk lompat ke halaman paling relevan. Ditemukan ${pageOrder.reduce((sum, pageId) => sum + countMatches(pageId, term), 0)} item total.`
    : "Ketik kata kunci untuk memfilter panel, grafik, dan daftar.";
}

function renderActivePage() {
  const term = getTerm();

  document.querySelectorAll(".page-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.page === state.page);
  });

  renderOverview(term);
  renderEcosystem(term);
  renderVisual(term);
  renderSkillGap(term);
  renderRoadmap(term);
  renderInvestment(term);
  renderLamReadiness(term);
  renderAlignment(term);
  renderGovernance(term);
  renderQuickWins(term);
  renderInsight(term);
  updateSidebarNav();
  updateTopbar(term);

  const visiblePanel = getVisiblePanel();
  if (visiblePanel) {
    visiblePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setPage(pageId, { syncHash = true } = {}) {
  state.page = pageOrder.includes(pageId) ? pageId : "overview";

  if (syncHash) {
    const nextHash = `#${state.page}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
  }

  renderActivePage();
  closeSidebar();
}

function initPageFromHash() {
  const hash = normalize(window.location.hash.replace("#", ""));
  return pageOrder.includes(hash) ? hash : "overview";
}

function handleSearchEnter() {
  const term = getTerm();
  if (!term) {
    renderActivePage();
    return;
  }

  setPage(findBestPage(term));
}

function init() {
  elements.openSidebar.addEventListener("click", openSidebar);
  elements.closeSidebar.addEventListener("click", closeSidebar);
  elements.backdrop.addEventListener("click", closeSidebar);

  elements.searchInput.addEventListener("input", renderActivePage);
  elements.searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchEnter();
    }
  });

  elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    renderActivePage();
    elements.searchInput.focus();
  });

  elements.sidebarNav.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link) {
      return;
    }

    event.preventDefault();
    setPage(link.dataset.route);
  });

  window.addEventListener("hashchange", () => {
    const nextPage = initPageFromHash();
    if (nextPage !== state.page) {
      setPage(nextPage, { syncHash: false });
    }
  });

  setPage(initPageFromHash(), { syncHash: false });
}

init();
