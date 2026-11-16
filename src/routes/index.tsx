import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Code, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Angger Aji Prayogo · Web Developer & Digital Marketing" },
      {
        name: "description",
        content: "CV Angger Aji Prayogo: Web Developer dan Digital Marketing Specialist, CRM, sistem internal, landing page, dan strategi konten media sosial.",
      },
      { property: "og:title", content: "Angger Aji Prayogo · Web Developer & Digital Marketing" },
      {
        property: "og:description",
        content: "CRM, sistem internal, landing page, dan strategi konten media sosial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const techStack = [
  "PHP",
  "HTML & CSS",
  "JavaScript",
  "Database Management",
  "CRM",
  "API Integration",
  "Social Media Management",
  "Content Strategy",
];

const workExperience = [
  {
    period: "Des 2025 s.d. Sekarang",
    role: "PHP Web Developer & SEO Specialist",
    company: "CV Maha Niaga Artha",
    jobDesc: "Bertanggung jawab mengembangkan dan memelihara sistem berbasis web untuk mendukung operasional perusahaan, membangun landing page dan website internal dengan optimasi SEO, serta melakukan integrasi antarplatform untuk meningkatkan efisiensi bisnis.",
    highlights: [
      "Membangun CRM Leads dari alur lead sampai handle customer, lengkap dengan data analisis, dalam 1 bulan.",
      "Membangun sistem inventaris dalam 6 minggu: mengelola 376 item + sub item dan mendukung proses stock opname.",
      "Membangun sistem perencanaan konten dalam 2 minggu dengan flow multi-role & multi-account serta data analisis lengkap.",
      "Membangun HRIS KPI dalam 4 minggu: flow HR, absensi, dan payroll dengan notifikasi email + setup Meta WABA.",
      "Mengembangkan 5+ landing page dan website internal perusahaan dengan optimasi SEO dan fokus konversi.",
    ],
  },
  {
    period: "Nov 2022 s.d. Des 2025",
    role: "Social Media Marketing Specialist",
    company: "CV Maha Niaga Artha",
    jobDesc: "Mengelola strategi konten dan media sosial untuk 13 brand F&B, melakukan riset tren, menulis copywriting, menganalisis performa konten, serta menjalankan strategi organic growth untuk meningkatkan engagement dan brand awareness.",
    highlights: [
      "Menyusun strategi dan perencanaan konten untuk 13 brand F&B yang dikelola.",
      "Mengelola kalender konten dengan rata-rata 60+ konten terjadwal per bulan lintas platform.",
      "Melakukan riset tren media sosial 4+ kali per bulan untuk menjaga relevansi konten dengan audiens.",
      "Menulis 60+ copywriting per bulan untuk caption, promosi, dan komunikasi digital brand.",
      "Menjalankan organic growth yang mencapai 30.000 follower baru dalam satu bulan.",
      "Mencapai peak view hingga 8 juta per bulan pada konten yang dikelola.",
    ],
  },
];

const projects = [
  {
    name: "CRM Leads Management",
    desc: "Sistem manajemen leads dengan alur sampai handle customer.",
    detail: "Alur lengkap dari lead masuk sampai handle customer, lengkap dengan data analisis untuk memantau performa leads.",
    stack: "PHP · Database",
  },
  {
    name: "Sistem Inventaris Internal",
    desc: "Digitalisasi pencatatan dan pengelolaan 376 item inventaris.",
    detail: "Dibangun dalam 6 minggu: mengelola 376 item + sub item dan mendukung proses stock opname perusahaan.",
    stack: "PHP · Database",
  },
  {
    name: "Sistem Perencanaan Konten",
    desc: "Alat internal untuk kalender konten multi-role & multi-account.",
    detail: "Dibangun dalam 2 minggu dengan flow multi-role dan multi-account serta data analisis lengkap untuk memantau performa konten.",
    stack: "PHP · Workflow",
  },
  {
    name: "TernoAE",
    desc: "Platform ride-hailing lokal dengan sistem booking dan pelacakan real-time.",
    detail: "Web app transportasi dengan alur booking yang simpel.",
    stack: "PHP · Web App",
  },
  {
    name: "QRIS Dynamic API",
    desc: "REST API untuk generate QRIS dinamis dari kode statis.",
    detail: "Endpoint POST JSON: kirim QRIS statis + nominal, terima QRIS dinamis siap scan. Digunakan untuk integrasi pembayaran, donasi, atau top-up pada sistem internal.",
    stack: "REST API · JSON",
  },
  {
    name: "Platform Analitik Konten",
    desc: "Web SaaS analitik konten untuk memantau performa postingan.",
    detail: "Dashboard analitik konten: views, engagement, like, komentar lintas platform. Memantau performa konten sebagai dasar strategi organik yang terukur.",
    stack: "Web App · Analytics",
  },
];

const achievements = [
  { metric: "30K+ Follower", desc: "Follower baru dalam 1 bulan" },
  { metric: "8 Juta Views", desc: "Peak views per bulan" },
  { metric: "376 Item", desc: "Item inventaris dikelola" },
  { metric: "60+ Konten", desc: "Konten terjadwal per bulan" },
  { metric: "13 Brand F&B", desc: "Brand yang dikelola" },
  { metric: "4+ Tahun", desc: "Pengalaman profesional" },
];

function ClassicLink({ children, href = "#" }: { children: React.ReactNode; href?: string }) {
  return (
    <a className="classic-link" href={href}>
      {children}
    </a>
  );
}

function Index() {

  return (
    <div className="discogs-page">
      <header className="discogs-header">
        <a className="discogs-brand" href="/" aria-label="Angger Aji Prayogo">
          Angger Aji Prayogo
        </a>
        <p className="discogs-tagline">Web Developer & Digital Marketing Specialist</p>
      </header>

      <nav className="classic-nav" aria-label="Main navigation">
        {["Tentang", "Pengalaman", "Proyek", "Keahlian", "Kontak", "Stats"].map((item, index) => (
          <span key={item}>
            {index > 0 && <span className="px-1 text-xs font-normal">|</span>}
            <ClassicLink>{item}</ClassicLink>
          </span>
        ))}
      </nav>



      <main className="classic-main">
        <aside className="classic-sidebar">
          <div className="col-span-full md:hidden">
            <h1 className="text-sm font-bold">Selamat Datang</h1>
          </div>
          <section className="sidebar-box">
            <h2>Tentang Saya</h2>
            <p>
              <strong>Web Developer & Digital Marketing Specialist</strong> dengan pengalaman dalam pengembangan sistem berbasis web, CRM, sistem internal perusahaan, integrasi antarplatform, serta pengelolaan media sosial dan strategi konten.
            </p>
            <p>
              Berpengalaman mengembangkan solusi digital untuk mendukung kebutuhan operasional dan bisnis perusahaan, sekaligus memiliki pengalaman dalam perencanaan konten, riset tren, copywriting, analisis performa, dan strategi pertumbuhan media sosial.
            </p>
          </section>
          <section className="sidebar-box">
            <h2>Statistik</h2>
            <p>
              4+ Tahun Pengalaman<br />
              6 Proyek Kerjaan<br />
              14 Proyek Pribadi<br />
              13 Brand F&B Dikelola
            </p>
            <p>
              <ClassicLink>30K+ Follower/Bulan</ClassicLink><br />
              <ClassicLink>8 Juta Peak Views</ClassicLink>
            </p>
            <p>
              Updated:<br />
              Nov 16, 2026 10:30 AM
            </p>
          </section>
        </aside>

        <section className="classic-content">
          <div className="welcome-row">
            <div>
              <h1 className="hidden text-sm font-bold md:block">Selamat Datang</h1>
              <p>
                Developer yang memahami bisnis, marketing, dan kebutuhan pengguna. Profesional di bidang Web Development dan Digital Marketing dengan pengalaman dalam pengembangan sistem berbasis web, CRM, sistem internal perusahaan, integrasi antarplatform, serta pengelolaan media sosial dan strategi konten.
              </p>
            </div>
            <div className="share-box">
              <MessageSquare className="float-left mr-1 mt-0.5 size-4 text-primary" aria-hidden="true" />
              <strong>Mari Bekerja Sama!</strong>
              <ClassicLink href="mailto:kingangger16@gmail.com">Hubungi untuk proyek Anda</ClassicLink>.
            </div>
          </div>



          <section className="directory-section">
            <h2><Briefcase className="inline-block mr-1 size-3.5" />Pengalaman Kerja:</h2>
            <div className="mt-2 space-y-4">
              {workExperience.map((exp) => (
                <div key={exp.role} className="mb-4">
                  <div className="font-bold">{exp.period}</div>
                  <div className="mb-1"><ClassicLink>{exp.role}</ClassicLink> - <ClassicLink>{exp.company}</ClassicLink></div>
                  {exp.jobDesc && <p className="text-[11px] mb-1 italic">{exp.jobDesc}</p>}
                  <ul className="classic-list ml-0 mt-1">
                    {exp.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="text-[11px]">{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="directory-section">
            <h2><Code className="inline-block mr-1 size-3.5" />Tech Stack:</h2>
            <div className="alphabet">
              {techStack.map((tech) => <span className="letter-link" key={tech}>{tech}</span>)}
            </div>
          </section>

          <section className="list-section">
            <h2>Proyek Terpilih:</h2>
            <ul className="classic-list">
              {projects.map((proj) => (
                <li key={proj.name}>
                  <ClassicLink>{proj.name}</ClassicLink> - {proj.desc}
                  <p className="mb-1 mt-0.5 text-[11px]">{proj.detail}</p>
                  <p className="mb-1 text-[10px] italic">Stack: {proj.stack}</p>
                </li>
              ))}
            </ul>
            <a className="classic-link more-link" href="#">lihat semua proyek...</a>
          </section>

          <section className="list-section">
            <h2>Pencapaian & Impact:</h2>
            <ul className="classic-list">
              {achievements.map((item) => (
                <li key={item.metric}>
                  <strong>{item.metric}</strong> - {item.desc}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </main>

      <footer className="classic-footer">
        <div><ClassicLink>Tentang</ClassicLink> | <ClassicLink href="mailto:kingangger16@gmail.com">Kontak</ClassicLink> | <ClassicLink href="https://linkedin.com/in/anggeraji">LinkedIn</ClassicLink> | <ClassicLink href="https://github.com/siinmedia">GitHub</ClassicLink></div>
        <div>Angger Aji Prayogo © 2026 · Jepara, Indonesia</div>
      </footer>
    </div>
  );
}
