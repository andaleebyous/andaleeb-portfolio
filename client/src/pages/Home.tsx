import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Cpu,
  ExternalLink,
  FileCode2,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

type SkillGroup = "all" | "security" | "engineering" | "training";

const skills = {
  security: ["Ethical hacking", "Digital forensics", "Phishing detection", "Smart contracts", "Linux & network security"],
  engineering: ["PHP · JavaScript · C++ · Java", "HTML5 · CSS3 · jQuery", "MySQL · SQL · phpMyAdmin", "WordPress · Joomla · cPanel", "Apache · WAMP · Git"],
  training: ["AI tools & automation", "Machine learning & NLP", "IoT & digital transformation", "TOT & curriculum design", "Digital marketing & analytics"],
};

const research = [
  {
    index: "01",
    category: "SECURITY × ML",
    title: "Modeling and simulation for detecting vulnerabilities and security threats of smart contracts using machine learning",
    accent: "cyan",
  },
  {
    index: "02",
    category: "VISION × FORENSICS",
    title: "A novel analysis system for identifying human suspects over the cyber using image processing and machine learning",
    accent: "purple",
  },
  {
    index: "03",
    category: "NLP × THREAT INTELLIGENCE",
    title: "Crawler phishing detection system for social media websites using machine learning and NLP",
    accent: "blue",
  },
];

const experience = [
  {
    year: "2025 — NOW",
    role: "Computer & Digital Skills Trainer",
    company: "Vocational Training Corporation · Jordan",
    body: "Designing practical learning programs, workshops and applied activities for learners across digital skill levels — from AI tools to cybersecurity awareness.",
    tag: "TRAINING / AI",
  },
  {
    year: "2022 — 2023",
    role: "Part-time Lecturer",
    company: "The Hashemite University · Faculty of IT",
    body: "Teaching C++, Java, DBMS, digital forensics and ethical hacking, while mentoring practical labs and student software projects.",
    tag: "ACADEMIA / CYBER",
  },
  {
    year: "2019 — 2020",
    role: "IT Support Officer",
    company: "Khayrat Al-Shamal · Mafraq, Jordan",
    body: "Owning technical support across devices, networks, email and internal systems, with reporting and data workflows that supported decision-making.",
    tag: "SYSTEMS / OPS",
  },
  {
    year: "2013 — 2015",
    role: "PHP Web Developer & Digital Marketer",
    company: "DomainCom & Kandia · Jordan",
    body: "Building client websites and custom software with PHP, MySQL and JavaScript, alongside hosting, CMS and digital campaign operations.",
    tag: "WEB / BUILD",
  },
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="section-label">
      <span className="label-dot" />
      <span>{children}</span>
    </div>
  );
}

function Home() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [skillGroup, setSkillGroup] = useState<SkillGroup>("all");
  const [copied, setCopied] = useState(false);

  const visibleSkills = useMemo(() => {
    if (skillGroup === "all") return Object.values(skills).flat();
    return skills[skillGroup];
  }, [skillGroup]);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("andaleeb.shdaifat@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-overlay" />

      <header className="site-header">
        <a href="#top" className="wordmark" aria-label="Andaleeb Shdaifat home">
          <span className="wordmark-mark">AS</span>
          <span className="wordmark-copy">
            <strong>ANDALEEB</strong>
            <small>SHDAIFAT / 01</small>
          </span>
        </a>
        <nav className={`main-nav ${mobileMenu ? "is-open" : ""}`}>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#research" onClick={() => setMobileMenu(false)}>Research</a>
          <a href="#experience" onClick={() => setMobileMenu(false)}>Experience</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
        </nav>
        <div className="header-actions">
          <a className="availability" href="mailto:andaleeb.shdaifat@gmail.com">
            <span className="status-dot" /> Available for meaningful work
          </a>
          <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">
            {mobileMenu ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> Personal technology portfolio <span className="eyebrow-year">2025 / 26</span></div>
          <h1 className="hero-title reveal delay-1">
            Engineering<br />
            <span className="outline-word">the next</span><br />
            <em>layer.</em>
          </h1>
          <p className="hero-intro reveal delay-2">
            I&apos;m <strong>Eng. Andaleeb Shdaifat</strong> — a software engineer, cybersecurity specialist and digital skills trainer building clarity at the intersection of people, systems and intelligent technology.
          </p>
          <div className="hero-cta reveal delay-3">
            <a className="button button-primary" href="#research">Explore the work <ArrowUpRight size={17} /></a>
            <a className="text-link" href="#contact">Let&apos;s connect <ArrowDownRight size={16} /></a>
          </div>
          <div className="hero-meta reveal delay-4">
            <span><MapPin size={14} /> Mafraq, Jordan</span>
            <span><GraduationCap size={14} /> M.Sc. Cybersecurity</span>
          </div>
        </div>

        <div className="hero-visual reveal delay-2" aria-label="Interactive technology core illustration">
          <div className="visual-caption top-caption"><span>CORE / 01</span><span className="caption-pulse">LIVE SYSTEM</span></div>
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit orbit-c" />
          <div className="core-grid" />
          <div className="tech-core">
            <div className="core-glow" />
            <div className="core-symbol"><ShieldCheck size={52} strokeWidth={1.2} /></div>
            <span>SECURE<br />INTELLIGENCE</span>
          </div>
          <div className="hud-card hud-card-top">
            <div className="hud-card-head"><span>THREAT MAP</span><ScanLine size={14} /></div>
            <div className="signal-bars"><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="hud-card-foot"><span>STABLE</span><span>99.8%</span></div>
          </div>
          <div className="hud-card hud-card-bottom">
            <div className="mini-icon"><BrainCircuit size={15} /></div>
            <div><strong>AI / ML</strong><small>Research node active</small></div>
            <ChevronRight size={15} />
          </div>
          <div className="visual-caption bottom-caption"><span>31° 57&apos; N / 35° 56&apos; E</span><span>AMMAN NODE</span></div>
        </div>
      </section>

      <section className="signal-strip container" aria-label="Career highlights">
        <div className="signal-item"><strong>10<span>+</span></strong><span>years across<br />technology & training</span></div>
        <div className="signal-item"><strong>03</strong><span>published research<br />papers</span></div>
        <div className="signal-item"><strong>12<span>+</span></strong><span>specialist certificates<br />& professional courses</span></div>
        <div className="signal-item signal-item-accent"><span className="mini-label">FOCUS / THIS MONTH</span><strong>AI × CYBER</strong><span>research, education<br />and applied systems</span></div>
      </section>

      <section id="about" className="section container about-section">
        <div className="section-heading">
          <SectionLabel>01 / The operating system</SectionLabel>
          <h2>A technologist with<br /><span>range — and intent.</span></h2>
        </div>
        <div className="about-layout">
          <div className="about-note">
            <p className="large-copy">The best technology is not just powerful. It is understood, trusted and useful.</p>
            <p>From university labs and vocational classrooms to production websites and digital investigations, my work is about making complex systems more human — and more resilient.</p>
            <a className="arrow-link" href="mailto:andaleeb.shdaifat@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
          <div className="capability-grid">
            <article className="capability-card card-security">
              <div className="capability-icon"><ShieldCheck size={21} /></div>
              <div className="capability-number">01</div>
              <h3>Cybersecurity<br />& forensics</h3>
              <p>Threat awareness, ethical hacking, digital forensics and practical security thinking.</p>
              <div className="card-arrow"><ArrowUpRight size={16} /></div>
            </article>
            <article className="capability-card card-engineering">
              <div className="capability-icon"><Code2 size={21} /></div>
              <div className="capability-number">02</div>
              <h3>Software<br />engineering</h3>
              <p>Web experiences, systems and data workflows that turn requirements into reliable tools.</p>
              <div className="card-arrow"><ArrowUpRight size={16} /></div>
            </article>
            <article className="capability-card card-training">
              <div className="capability-icon"><BrainCircuit size={21} /></div>
              <div className="capability-number">03</div>
              <h3>AI & digital<br />skills training</h3>
              <p>Hands-on learning experiences that help people adopt technology with confidence.</p>
              <div className="card-arrow"><ArrowUpRight size={16} /></div>
            </article>
          </div>
        </div>
      </section>

      <section id="research" className="section container research-section">
        <div className="section-heading split-heading">
          <div><SectionLabel>02 / Research atlas</SectionLabel><h2>Questions worth<br /><span>building for.</span></h2></div>
          <p className="heading-aside">Three published lines of inquiry exploring the edge between machine intelligence and cyber resilience.</p>
        </div>
        <div className="research-list">
          {research.map((item) => (
            <article className={`research-row accent-${item.accent}`} key={item.index}>
              <div className="research-index">{item.index}</div>
              <div className="research-category">{item.category}</div>
              <h3>{item.title}</h3>
              <div className="research-action"><ArrowUpRight size={18} /></div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section container experience-section">
        <div className="section-heading split-heading">
          <div><SectionLabel>03 / Field notes</SectionLabel><h2>Experience in<br /><span>motion.</span></h2></div>
          <div className="experience-aside"><Terminal size={17} /><span>From classroom to<br />command line.</span></div>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.year}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="timeline-tag">{item.tag}</div>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section container skills-section">
        <div className="skills-panel">
          <div className="skills-intro">
            <SectionLabel>04 / Capability matrix</SectionLabel>
            <h2>The toolkit<br /><span>behind the work.</span></h2>
            <p>A practical stack shaped by building, teaching and staying curious.</p>
            <div className="skills-tabs" role="tablist" aria-label="Skill categories">
              {(["all", "security", "engineering", "training"] as SkillGroup[]).map((group) => (
                <button className={skillGroup === group ? "active" : ""} onClick={() => setSkillGroup(group)} key={group} role="tab" aria-selected={skillGroup === group}>
                  {group === "all" ? "All systems" : group}
                </button>
              ))}
            </div>
          </div>
          <div className="skill-cloud" key={skillGroup}>
            {visibleSkills.map((skill, index) => <span style={{ animationDelay: `${index * 45}ms` }} key={skill}>{skill}</span>)}
            <div className="skill-orb"><Cpu size={24} /><span>READY<br />TO BUILD</span></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner container">
          <div className="contact-rings" />
          <div className="contact-copy">
            <SectionLabel>05 / Open channel</SectionLabel>
            <h2>Have a meaningful<br /><em>problem to solve?</em></h2>
            <p>Let&apos;s connect around technology, learning, security or the next idea that deserves a thoughtful build.</p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:andaleeb.shdaifat@gmail.com">andaleeb.shdaifat@gmail.com <ArrowUpRight size={20} /></a>
            <button className="copy-button" onClick={copyEmail}>{copied ? <><Check size={15} /> Copied to clipboard</> : <><Copy size={15} /> Copy email</>}</button>
            <div className="contact-details"><span><Mail size={14} /> Email</span><span><Globe2 size={14} /> Jordan / Global</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer container">
        <div><span className="footer-mark">AS</span><span>© 2025 Andaleeb Shdaifat</span></div>
        <div className="footer-note"><Sparkles size={14} /> Built for the curious mind</div>
        <a href="#top" className="back-top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}

export default Home;

// Keep the imported symbols intentionally explicit: they create the visual language of the portfolio.
void Layers3;
void FileCode2;
void Network;
void ExternalLink;
void Menu;
void X;
