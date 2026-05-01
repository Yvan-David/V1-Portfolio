"use client";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const experience = [
  {
    period: "Sep 2025 – Present",
    company: "UNIPOD Innovation Hub",
    role: "Mechanical Engineering Intern",
    bullets: [
      "Diagnosed and repaired non-functional hybrid car training equipment",
      "Creating detailed technical manual for hybrid car diagnostics and maintenance",
      "Advanced manufacturing: laser cutting, CNC operations, and 3D printing",
    ],
  },
  {
    period: "Sep – Nov 2025",
    company: "Akagera Motors",
    role: "Automotive Engineering Intern",
    bullets: [
      "Diagnosed and repaired vehicles including Mahindra, Mercedes-Benz, and others",
      "Hands-on experience in automotive systems, troubleshooting & maintenance",
      "Applied theoretical mechanical engineering to real-world automotive challenges",
    ],
  },
  {
    period: "Mar – Jul 2025",
    company: "Lia-Shop (Freelance)",
    role: "Technical Consultant",
    bullets: [
      "Optimized Microsoft Access database for improved business operations",
      "Redesigned WordPress website to enhance UX and functionality",
      "Migrated inventory to new stock management system and trained IT team",
    ],
  },
  {
    period: "Sep – Dec 2024",
    company: "Possinnove (Freelance)",
    role: "Frontend Developer",
    bullets: [
      "Built and optimized database systems for improved business workflows",
      "Redesigned client-facing website for better UX and conversion",
      "Streamlined product inventory via new stock management system",
    ],
  },
];

const skillBars = [
  { name: "Robot Kinematics & Dynamics", pct: 88 },
  { name: "Control Systems & Dynamic Modeling", pct: 90 },
  { name: "SolidWorks / ANSYS / MATLAB", pct: 82 },
  { name: "Hybrid Vehicle Diagnostics", pct: 78 },
  { name: "CNC / Laser Cutting / 3D Printing", pct: 85 },
  { name: "Python & C", pct: 87 },
  { name: "JavaScript / TypeScript", pct: 85 },
  { name: "React / Next.js / Node.js", pct: 83 },
  { name: "MongoDB / PostgreSQL / Redis", pct: 78 },
  { name: "REST API / GraphQL", pct: 80 },
];

const skillTags = [
  "React","Redux","Next.js","Node.js","PostgreSQL","MongoDB",
  "MATLAB","SolidWorks","ANSYS","CoppeliaSim","Python","C",
  "GraphQL","HTML/CSS","SQL","Nginx","Shell Scripting","Redis",
];

const projects = [
  { icon: "⚙️", name: "Inverted Pendulum & Self-Balancing Robot", year: "2025", tags: ["Control Systems","MATLAB","PID"], desc: "Closed-loop feedback control stabilizing two unstable mechanical systems." },
  { icon: "🦾", name: "6-DOF Robotic Arm", year: "2025", tags: ["Kinematics","CoppeliaSim","Python"], desc: "Forward/inverse kinematics and workspace analysis using Modern Robotics." },
  { icon: "🏗️", name: "Multilevel Parking System", year: "2025", tags: ["SolidWorks","Mechanical Design"], desc: "Space-optimized mechanical system with motion mechanisms and system integration." },
  { icon: "☀️", name: "Solar-Powered Irrigation System", year: "2025", tags: ["Renewable Energy","Fluid Mechanics"], desc: "Energy-efficient irrigation integrating solar power and mechanical pumping." },
  { icon: "🛒", name: "Local Product Search App", year: "2025", tags: ["React","Node.js","PostgreSQL"], desc: "Platform to search and compare products across local markets in Rwanda." },
  { icon: "🏠", name: "Airbnb-Style Web Platform", year: "2023", tags: ["Full-Stack","Auth","Cloud"], desc: "Full-stack app with authentication, role-based access, and cloud deployment." },
  { icon: "🧠", name: "Mental Health Web Platform", year: "2023", tags: ["Accessibility","UX"], desc: "User-centered web app emphasizing accessibility and system reliability." },
  { icon: "💻", name: "Simple Unix Shell (C)", year: "2022", tags: ["C","OS","Systems"], desc: "Unix-like shell with process management, piping, and system calls." },
];

const certs = [
  { name: "ANSYS Mechanical Badge", issuer: "ANSYS · 2025" },
  { name: "Introduction to Robotics", issuer: "Coursera · 2025" },
  { name: "ALX Software Engineering", issuer: "ALX Africa · 2023" },
  { name: "ALX AI Essentials", issuer: "ALX Africa · 2025" },
  { name: "Andela Technical Leadership", issuer: "Andela · 2025" },
  { name: "Kepler Entrepreneurship Hub", issuer: "Kepler College · 2025" },
  { name: "ToastMasters Speech Contest", issuer: "2024 & 2025" },
];

const leadership = [
  { name: "Founder — THETECHERS Ltd", sub: "$1,500 funding · Kepler Incubation" },
  { name: "Co-Founder — ME Club", sub: "Student-led robotics & engineering club" },
  { name: "Founder — College Chess Competition", sub: "Recurring university-wide tournament" },
  { name: "Public Speaking & Debate", sub: "Toastmasters · 3+ years active" },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function Page() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  /* ── custom cursor ── */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    let raf: number;
    const loop = () => {
      rx.current += (mx.current - rx.current) * 0.1;
      ry.current += (my.current - ry.current) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx.current}px`;
        ringRef.current.style.top  = `${ry.current}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  /* cursor scale on interactive elements */
  useEffect(() => {
    const grow = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(2.2)";
      if (ringRef.current)   ringRef.current.style.transform   = "translate(-50%,-50%) scale(1.6)";
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current)   ringRef.current.style.transform   = "translate(-50%,-50%) scale(1)";
    };
    const targets = document.querySelectorAll("a,button,[data-hover]");
    targets.forEach(el => { el.addEventListener("mouseenter", grow); el.addEventListener("mouseleave", shrink); });
    return () => targets.forEach(el => { el.removeEventListener("mouseenter", grow); el.removeEventListener("mouseleave", shrink); });
  });

  /* ── nav scroll opacity ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── scroll reveal (data-reveal) ── */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseFloat(el.dataset.delay ?? "0");
          setTimeout(() => el.classList.add("is-visible"), delay * 1000);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  /* ── skill bar fill on scroll ── */
  useEffect(() => {
    const bars = document.querySelectorAll<HTMLElement>("[data-bar]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => { el.style.width = el.dataset.bar + "%"; }, 150);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
    bars.forEach(b => io.observe(b));
    return () => io.disconnect();
  }, []);

  /* ── active nav highlight ── */
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll<HTMLElement>("[data-navlink]");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.remove("nav-active"));
          document.querySelector(`[data-navlink="${e.target.id}"]`)?.classList.add("nav-active");
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* ──────────── GLOBAL STYLES ──────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --accent:        #00e5a0;
          --accent2:       #00bfff;
          --accent-dim:    rgba(0,229,160,0.10);
          --accent-border: rgba(0,229,160,0.25);
          --bg:            #07080c;
          --surface:       #0e1118;
          --card:          #131722;
          --text:          #eef0f4;
          --muted:         #7a849a;
          --muted2:        #3a4255;
          --border:        rgba(255,255,255,0.07);
          --border2:       rgba(255,255,255,0.13);
        }

        html  { scroll-behavior: smooth; }
        body  { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        ::selection { background: var(--accent); color: #07080c; }

        ::-webkit-scrollbar       { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--muted2); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--accent); }

        /* ── cursor ── */
        .cursor {
          position: fixed; width: 10px; height: 10px; border-radius: 50%;
          background: var(--accent); pointer-events: none; z-index: 9999;
          transform: translate(-50%,-50%);
          transition: transform 0.18s cubic-bezier(0.4,0,0.2,1);
          mix-blend-mode: difference;
        }
        .cursor-ring {
          position: fixed; width: 34px; height: 34px; border-radius: 50%;
          border: 1px solid rgba(0,229,160,0.4); pointer-events: none; z-index: 9998;
          transform: translate(-50%,-50%);
          transition: transform 0.22s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── hero entrance keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-eyebrow { animation: fadeUp 0.6s  0.10s both; }
        .hero-title   { animation: fadeUp 0.75s 0.24s both; }
        .hero-sub     { animation: fadeUp 0.65s 0.40s both; }
        .hero-tags    { animation: fadeUp 0.65s 0.54s both; }
        .hero-actions { animation: fadeUp 0.65s 0.68s both; }
        .hero-scroll  { animation: fadeIn 1.0s  1.00s both; }

        /* ── floating glow orbs ── */
        @keyframes floatGlow {
          0%,100% { transform: translateY(0)    scale(1);    opacity: 0.6; }
          50%     { transform: translateY(-22px) scale(1.06); opacity: 1;   }
        }
        .glow-orb  { animation: floatGlow  8s ease-in-out infinite; }
        .glow-orb2 { animation: floatGlow 11s 2.5s ease-in-out infinite; }

        /* ── pulse dot (scroll indicator) ── */
        @keyframes pulseDot {
          0%,100% { opacity: 1; transform: scale(1);   }
          50%     { opacity: 0.35; transform: scale(0.65); }
        }
        .pulse-dot { animation: pulseDot 2s ease infinite; }

        /* ── scroll arrow bounce ── */
        @keyframes bounceX {
          0%,100% { transform: translateX(0); }
          50%     { transform: translateX(6px); }
        }
        .bounce-arrow { animation: bounceX 2.2s ease infinite; }

        /* ── grid bg ── */
        .grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,229,160,.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,160,.04) 1px, transparent 1px);
          background-size: 60px 60px;
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 100%);
          mask-image:         radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 100%);
        }

        /* ── scroll reveal ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.72s cubic-bezier(0.4,0,0.2,1),
                      transform 0.72s cubic-bezier(0.4,0,0.2,1);
        }
        [data-reveal][data-dir="left"]  { transform: translateX(-30px); }
        [data-reveal][data-dir="right"] { transform: translateX(30px); }
        [data-reveal].is-visible {
          opacity: 1 !important;
          transform: translate(0,0) !important;
        }

        /* ── skill bars ── */
        [data-bar] {
          width: 0;
          transition: width 1.25s cubic-bezier(0.4,0,0.2,1);
        }

        /* ── nav links ── */
        .nav-link {
          color: var(--muted); text-decoration: none;
          font-size: 0.85rem; font-weight: 500;
          position: relative; transition: color 0.2s;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 1px; background: var(--accent);
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover        { color: var(--text); }
        .nav-link:hover::after { width: 100%; }
        .nav-active            { color: var(--text) !important; }
        .nav-active::after     { width: 100% !important; }

        .nav-cta {
          padding: 0.45rem 1.15rem;
          border: 1px solid var(--accent-border);
          color: var(--accent); border-radius: 100px;
          font-size: 0.83rem; font-weight: 500; text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .nav-cta:hover { background: var(--accent); color: #07080c; }

        /* ── buttons ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.82rem 1.9rem; background: var(--accent);
          color: #07080c; font-weight: 600; font-size: 0.92rem;
          border-radius: 100px; text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(0,229,160,0.3);
        }
        .btn-secondary {
          display: inline-flex; align-items: center; gap: 0.4rem;
          padding: 0.82rem 1.9rem; border: 1px solid var(--border2);
          color: var(--text); font-weight: 500; font-size: 0.92rem;
          border-radius: 100px; text-decoration: none;
          transition: background 0.2s, transform 0.25s;
        }
        .btn-secondary:hover { background: var(--surface); transform: translateY(-3px); }

        /* ── stat cards ── */
        .stat-card {
          padding: 1.5rem 1rem; background: var(--surface);
          border: 1px solid var(--border); border-radius: 12px; text-align: center;
          transition: transform 0.3s, border-color 0.3s;
        }
        .stat-card:hover { transform: translateY(-6px); border-color: var(--accent-border); }

        /* ── experience row ── */
        .exp-row {
          display: grid; grid-template-columns: 160px 1fr;
          gap: 2rem; padding: 1.5rem 1rem;
          border-bottom: 1px solid var(--border);
          border-radius: 12px;
          transition: background 0.2s;
        }
        .exp-row:hover { background: rgba(255,255,255,0.022); }

        /* ── project cards ── */
        .proj-card {
          background: var(--card); border: 1px solid var(--border);
          border-radius: 16px; padding: 1.6rem;
          position: relative; overflow: hidden; cursor: default;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.3s, box-shadow 0.35s;
        }
        .proj-card::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,229,160,.06) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.35s;
        }
        .proj-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-border);
          box-shadow: 0 24px 60px rgba(0,229,160,0.09);
        }
        .proj-card:hover::before { opacity: 1; }

        /* ── cert / leadership items ── */
        .cert-item {
          padding: 0.9rem 1.1rem; background: var(--surface);
          border: 1px solid var(--border); border-radius: 10px;
          display: flex; gap: 0.7rem; align-items: flex-start;
          transition: border-color 0.2s, transform 0.25s;
        }
        .cert-item:hover { border-color: var(--accent-border); transform: translateX(5px); }

        /* ── skill tags ── */
        .skill-tag {
          display: inline-block;
          padding: 0.4rem 0.9rem; background: var(--surface);
          border: 1px solid var(--border); border-radius: 8px;
          font-size: 0.85rem; color: var(--muted); cursor: default;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .skill-tag:hover { border-color: var(--accent-border); color: var(--accent); transform: translateY(-3px); }

        /* ── education featured card ── */
        .edu-featured {
          padding: 2rem; background: var(--surface);
          border: 1px solid var(--accent-border); border-radius: 16px;
          margin-bottom: 2.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .edu-featured:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,229,160,0.07);
        }

        /* ── contact links ── */
        .contact-link {
          padding: 0.75rem 1.5rem; background: var(--surface);
          border: 1px solid var(--border); border-radius: 100px;
          color: var(--text); font-size: 0.88rem; font-weight: 500;
          text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s, transform 0.25s;
        }
        .contact-link:hover { border-color: var(--accent-border); color: var(--accent); transform: translateY(-4px); }

        /* ── section padding helper ── */
        .sp { padding: 6rem clamp(1.5rem, 8vw, 6rem); }

        /* ── section title ── */
        .stitle {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.5rem);
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .hide-mob    { display: none !important; }
          .cursor, .cursor-ring { display: none; }
          .exp-row     { grid-template-columns: 1fr; gap: 0.5rem; }
          .two-col     { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── CURSOR ── */}
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className="cursor-ring" />

      {/* ──────────── NAV ──────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 clamp(1.5rem,6vw,5rem)", height: 60,
        background: scrolled ? "rgba(7,8,12,0.95)" : "rgba(7,8,12,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)"}`,
        transition: "background 0.4s, border-color 0.4s",
      }}>
        <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>
          Yvan<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <div className="hide-mob" style={{ display: "flex", gap: "1.75rem" }}>
          {["about","experience","skills","projects","education"].map(s => (
            <a key={s} href={`#${s}`} data-navlink={s} className="nav-link"
              style={{ textTransform: "capitalize" }}>{s}</a>
          ))}
        </div>
        <a href="mailto:irankundayvan2020@gmail.com" className="nav-cta">Contact</a>
      </nav>

      {/* ──────────── HERO ──────────── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "6rem clamp(1.5rem,8vw,6rem) 4rem", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" />
        <div className="glow-orb"  style={{ position:"absolute", top:"-8%",  right:"-6%", width:560, height:560, background:"radial-gradient(circle,rgba(0,229,160,.08) 0%,transparent 70%)", pointerEvents:"none" }} />
        <div className="glow-orb2" style={{ position:"absolute", bottom:"-6%",left:"-4%",  width:400, height:400, background:"radial-gradient(circle,rgba(0,191,255,.06) 0%,transparent 70%)", pointerEvents:"none" }} />

        <p className="hero-eyebrow" style={{ color:"var(--accent)", fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"1.25rem", display:"flex", alignItems:"center", gap:"0.5rem" }}>
          <span style={{ display:"inline-block", width:24, height:1, background:"var(--accent)" }} />
          Mechanical Engineer & Developer
        </p>

        <h1 className="hero-title" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(3rem,8vw,6.5rem)", lineHeight:1.0, letterSpacing:"-0.04em", marginBottom:"1.5rem" }}>
          Irankunda<br />
          Yvan{" "}
          <span style={{ color:"transparent", WebkitTextStroke:"1px rgba(0,229,160,0.55)" }}>David</span>
        </h1>

        <p className="hero-sub" style={{ color:"var(--muted)", fontSize:"clamp(1rem,1.8vw,1.15rem)", maxWidth:560, lineHeight:1.75, marginBottom:"2rem" }}>
          Engineering at the intersection of robotics, control systems,
          and full-stack development. Based in Kigali, Rwanda — building systems that matter.
        </p>

        <div className="hero-tags" style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem", marginBottom:"2.25rem" }}>
          {["Robotics & Control Systems","Mechanical Design","Full-Stack Dev","Hybrid Vehicles","3D Printing & CNC"].map(t => (
            <span key={t} style={{ padding:"0.3rem 0.85rem", background:"var(--accent-dim)", border:"1px solid var(--accent-border)", borderRadius:100, fontSize:"0.78rem", fontWeight:500, color:"var(--accent)" }}>{t}</span>
          ))}
        </div>

        <div className="hero-actions" style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
          <a href="#projects" className="btn-primary">View My Work ↓</a>
          <a href="mailto:irankundayvan2020@gmail.com" className="btn-secondary">Get In Touch</a>
        </div>

        <div className="hero-scroll" style={{ position:"absolute", bottom:"2.5rem", left:"clamp(1.5rem,8vw,6rem)", display:"flex", alignItems:"center", gap:"0.75rem", color:"var(--muted)", fontSize:"0.8rem" }}>
          <span className="bounce-arrow" style={{ display:"inline-block", fontSize:"1rem", color:"var(--accent)" }}>→</span>
          <span className="pulse-dot" style={{ display:"inline-block", width:6, height:6, borderRadius:"50%", background:"var(--accent)" }} />
          <span>Scroll to explore</span>
        </div>
      </section>

      {/* ──────────── ABOUT ──────────── */}
      <section id="about" className="sp">
        <Label num="01" text="About" />
        <h2 className="stitle" data-reveal>
          Engineer & builder,<br />
          <em style={{ color:"var(--accent)", fontStyle:"normal" }}>through and through</em>
        </h2>
        <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3.5rem", alignItems:"start" }}>
          <div data-reveal data-dir="left" style={{ color:"var(--muted)", fontSize:"1rem", lineHeight:1.8 }}>
            <p style={{ marginBottom:"1rem" }}>I'm a <strong style={{ color:"var(--text)", fontWeight:500 }}>4th-year Mechanical Engineering student</strong> at the University of Rwanda, specializing in robotics, control systems, and dynamic system analysis.</p>
            <p style={{ marginBottom:"1rem" }}>I bridge physical engineering and digital technology — from diagnosing hybrid vehicles to building full-stack web applications. Currently interning at <strong style={{ color:"var(--text)", fontWeight:500 }}>UNIPOD Innovation Hub</strong>.</p>
            <p>Co-founded <strong style={{ color:"var(--text)", fontWeight:500 }}>THETECHERS Ltd</strong>, a tech startup delivering digital solutions for SMEs — secured $1,500 in startup funding and participated in the Kepler Incubation Program.</p>
          </div>
          <div data-reveal data-dir="right" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
            {[["3+","Years Exp."],["8","Projects"],["4","Certs"]].map(([n,l]) => (
              <div key={l} className="stat-card" data-hover>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"2.2rem", color:"var(--accent)", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:"0.75rem", color:"var(--muted)", marginTop:"0.4rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── EXPERIENCE ──────────── */}
      <section id="experience" className="sp" style={{ paddingTop:"4rem" }}>
        <Label num="02" text="Experience" />
        <h2 className="stitle" data-reveal>
          Where I've <em style={{ color:"var(--accent)", fontStyle:"normal" }}>made impact</em>
        </h2>
        <div>
          {experience.map((e, i) => (
            <div key={i} className="exp-row" data-reveal data-delay={String(i * 0.1)}>
              <div>
                <div style={{ fontSize:"0.78rem", color:"var(--muted)" }}>{e.period}</div>
                <div style={{ fontSize:"0.73rem", fontWeight:600, color:"var(--accent)", letterSpacing:"0.06em", textTransform:"uppercase", marginTop:"0.3rem" }}>{e.company}</div>
              </div>
              <div>
                <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.1rem", marginBottom:"0.75rem", letterSpacing:"-0.01em" }}>{e.role}</div>
                <ul style={{ listStyle:"none", padding:0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ color:"var(--muted)", fontSize:"0.9rem", lineHeight:1.6, padding:"0.25rem 0 0.25rem 1.1rem", position:"relative" }}>
                      <span style={{ position:"absolute", left:0, color:"var(--accent)", fontSize:"0.7rem", top:"0.44rem" }}>▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── SKILLS ──────────── */}
      <section id="skills" className="sp" style={{ paddingTop:"4rem" }}>
        <Label num="03" text="Skills" />
        <h2 className="stitle" data-reveal>
          Tools of my <em style={{ color:"var(--accent)", fontStyle:"normal" }}>craft</em>
        </h2>

        <div data-reveal className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"2rem 4rem", marginBottom:"3rem" }}>
          {skillBars.map((s) => (
            <div key={s.name}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"0.45rem" }}>
                <span style={{ fontSize:"0.88rem", color:"var(--text)", fontWeight:500 }}>{s.name}</span>
                <span style={{ fontSize:"0.78rem", color:"var(--accent)" }}>{s.pct}%</span>
              </div>
              <div style={{ height:3, background:"var(--surface)", borderRadius:100, overflow:"hidden" }}>
                <div data-bar={String(s.pct)} style={{ height:"100%", borderRadius:100, background:"linear-gradient(90deg,var(--accent),var(--accent2))" }} />
              </div>
            </div>
          ))}
        </div>

        <div data-reveal style={{ display:"flex", flexWrap:"wrap", gap:"0.55rem" }}>
          {skillTags.map((s) => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
      </section>

      {/* ──────────── PROJECTS ──────────── */}
      <section id="projects" className="sp" style={{ paddingTop:"4rem" }}>
        <Label num="04" text="Projects" />
        <h2 className="stitle" data-reveal>
          Selected <em style={{ color:"var(--accent)", fontStyle:"normal" }}>builds</em>
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem" }}>
          {projects.map((p, i) => (
            <div key={i} className="proj-card" data-reveal data-delay={String(i * 0.07)} data-hover>
              <span style={{ position:"absolute", top:"1.25rem", right:"1.25rem", fontSize:"0.73rem", color:"var(--muted)" }}>{p.year}</span>
              <div style={{ fontSize:"1.3rem", marginBottom:"1rem" }}>{p.icon}</div>
              <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", marginBottom:"0.5rem", letterSpacing:"-0.01em" }}>{p.name}</div>
              <div style={{ fontSize:"0.85rem", color:"var(--muted)", lineHeight:1.6, marginBottom:"1rem" }}>{p.desc}</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                {p.tags.map(t => (
                  <span key={t} style={{ padding:"0.2rem 0.6rem", background:"rgba(255,255,255,0.05)", borderRadius:6, fontSize:"0.73rem", color:"var(--muted)" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── EDUCATION ──────────── */}
      <section id="education" className="sp" style={{ paddingTop:"4rem" }}>
        <Label num="05" text="Education & Certs" />
        <h2 className="stitle" data-reveal>
          Learning never <em style={{ color:"var(--accent)", fontStyle:"normal" }}>stops</em>
        </h2>

        <div className="edu-featured" data-reveal data-hover>
          <div style={{ fontSize:"1.4rem", marginBottom:"0.75rem" }}>🎓</div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1.15rem", marginBottom:"0.25rem" }}>BSc Mechanical Engineering</div>
          <div style={{ fontSize:"0.9rem", color:"var(--accent)", fontWeight:500 }}>University of Rwanda</div>
          <div style={{ fontSize:"0.8rem", color:"var(--muted)", margin:"0.2rem 0 0.75rem" }}>November 2022 – 2026</div>
          <div style={{ fontSize:"0.88rem", color:"var(--muted)", lineHeight:1.65 }}>Emphasized in control systems, dynamics, and engineering mathematics. Strong foundations in dynamic system modeling, feedback control, design and analysis with hands-on project experience.</div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"0.9rem", marginBottom:"3rem" }}>
          {certs.map((c, i) => (
            <div key={i} className="cert-item" data-reveal data-delay={String(i * 0.06)} data-hover>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"var(--accent)", marginTop:"0.45rem", flexShrink:0 }} />
              <div>
                <div style={{ fontSize:"0.88rem", fontWeight:500 }}>{c.name}</div>
                <div style={{ fontSize:"0.76rem", color:"var(--muted)", marginTop:"0.15rem" }}>{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>

        <Label num="★" text="Leadership" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:"0.9rem", marginTop:"1.25rem" }}>
          {leadership.map((l, i) => (
            <div key={i} className="cert-item" data-reveal data-delay={String(i * 0.06)} data-hover>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"var(--accent2)", marginTop:"0.45rem", flexShrink:0 }} />
              <div>
                <div style={{ fontSize:"0.88rem", fontWeight:500 }}>{l.name}</div>
                <div style={{ fontSize:"0.76rem", color:"var(--muted)", marginTop:"0.15rem" }}>{l.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ──────────── CONTACT ──────────── */}
      <section id="contact" className="sp" style={{ textAlign:"center" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <Label num="06" text="Contact" center />
          <h2 className="stitle" data-reveal style={{ textAlign:"center" }}>
            Let's build<br />
            <em style={{ color:"var(--accent)", fontStyle:"normal" }}>something great</em>
          </h2>
          <p data-reveal style={{ color:"var(--muted)", fontSize:"1rem", lineHeight:1.75, marginBottom:"2.5rem" }}>
            Open to engineering roles, robotics collaborations, or building something together. Let's talk.
          </p>
          <a href="mailto:irankundayvan2020@gmail.com" data-reveal
            style={{ display:"block", fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"clamp(1.2rem,3vw,2rem)", color:"var(--accent)", letterSpacing:"-0.02em", textDecoration:"none", marginBottom:"2.5rem", transition:"opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            irankundayvan2020@gmail.com
          </a>
          <div data-reveal style={{ display:"flex", justifyContent:"center", gap:"1rem", flexWrap:"wrap" }}>
            <a href="tel:+250790663142" className="contact-link">📞 +250 790 663 142</a>
            <a href="https://www.linkedin.com/in/yvan-david" target="_blank" rel="noreferrer" className="contact-link">💼 LinkedIn</a>
            <a href="mailto:irankundayvan2020@gmail.com" className="contact-link">✉️ Email Me</a>
          </div>
        </div>
      </section>

      {/* ──────────── FOOTER ──────────── */}
      <footer style={{ padding:"1.75rem clamp(1.5rem,8vw,6rem)", borderTop:"1px solid var(--border)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"0.75rem" }}>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"0.9rem" }}>Irankunda Yvan David</span>
        <span style={{ fontSize:"0.8rem", color:"var(--muted)" }}>© {new Date().getFullYear()} · Kigali, Rwanda</span>
      </footer>
    </>
  );
}

/* ── Section label helper ── */
function Label({ num, text, center }: { num: string; text: string; center?: boolean }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", justifyContent: center ? "center" : "flex-start", marginBottom:"1rem" }}>
      <span style={{ fontFamily:"monospace", fontSize:"0.9rem", color:"var(--accent)", fontWeight:700 }}>{num}</span>
      <span style={{ fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--muted2)" }}>{text}</span>
    </div>
  );
}
