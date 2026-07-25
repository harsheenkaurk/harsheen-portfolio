import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Mail,
  Linkedin,
  Github,
  Sparkles,
  Mic,
  BookOpen,
  Target,
  TrendingUp,
  Users,
  PenLine,
  Rocket,
  LineChart,
  Megaphone,
  Lightbulb,
  Compass,
  FileSpreadsheet,
  Palette,
  Presentation,
  MessageSquare,
  Search,
  Handshake,
  Swords,
} from "lucide-react";
import portrait from "@/assets/harsheen-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "leadership", label: "Leadership" },
  { id: "languages", label: "Languages" },
  { id: "contact", label: "Contact" },
];

function Index() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen warm-bg">
      {/* Top nav */}
      <header className="fixed inset-x-0 top-0 z-50 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight sm:text-xl">
            HARSHEEN KAUR KAINTH
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.slice(0, -1).map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Contact Me
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative px-4 pt-24 sm:px-6 sm:pt-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-elegant)]">
          <img
            src={portrait}
            alt="Portrait of Harsheen Kaur"
            className="h-[70vh] min-h-[560px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-transparent to-background/40" />

          {/* Left glass card */}
          <div className="reveal glass-dark absolute inset-x-4 bottom-4 max-w-xl rounded-3xl p-8 text-white sm:inset-x-8 sm:bottom-8 sm:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
              Curiosity in motion. Discipline in practice.
            </p>
            <h1 className="font-display mt-5 text-5xl leading-[0.95] italic sm:text-6xl md:text-7xl">
              Harsheen Kaur<br />Kainth
            </h1>
            <p className="mt-6 text-sm text-white/80 sm:text-base">
              BBA(DBE) Student at IIM Bangalore
            </p>
            <a
              href="https://drive.google.com/file/d/1ybSBbU9fbqvr3Q7cgOhJPd1AloQhbkgp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>

          {/* Right quote card */}
          <div
            className="reveal glass absolute right-4 top-6 hidden max-w-sm rounded-3xl p-6 text-sm italic text-foreground sm:right-8 sm:top-auto sm:bottom-14 md:block lg:right-16"
            style={{ animationDelay: "180ms" }}
          >
            <p className="font-display text-base leading-relaxed sm:text-lg">
              "Driven by curiosity and a bias for learning, I want to build a
              career that blends finance, marketing, and strategy into
              meaningful, long-term impact."
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <NumberedSection id="about" label="About">
        <div className="space-y-6 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
          <p>
            I'm Harsheen Kaur, currently pursuing my BBA in Digital Business
            and Entrepreneurship at IIM Bangalore, driven by ambition,
            curiosity, and a strong bias for continuous learning. My journey
            has been shaped by disciplined academics, leadership experiences,
            and a genuine fascination with how businesses grow.
          </p>
          <p>
            I'm interested in every corner of the business world, including
            finance, marketing, sales, strategy, and digital growth. Rather
            than picking one lane early, I'm building fluency across all of
            them so I can think clearly at the intersections.
          </p>
          <p>
            For me, this portfolio isn't a resume, it's a reflection of a
            mindset shaped by growth, ambition, and a quiet commitment to
            creating meaningful, measurable impact.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { icon: Compass, title: "Curious learner", body: "Exploring how ideas across disciplines compound." },
              { icon: Rocket, title: "Growth mindset", body: "Every challenge is a chance to refine the craft." },
              { icon: Target, title: "Disciplined execution", body: "Turning intention into measurable outcomes." },
              { icon: Handshake, title: "Real-world ready", body: "Actively seeking internships to learn by building." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="surface-card surface-card-hover p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </NumberedSection>

      {/* Education */}
      <NumberedSection id="education" label="Education">
        <div className="space-y-5">
          {[
            {
              org: "Indian Institute of Management, Bangalore (2025 – 2028)",
              title: "BBA in Digital Business & Entrepreneurship",
              body: "Currently pursuing a rigorous program focused on building strong foundations in business strategy, digital ecosystems and entrepreneurship with emphasis on problem solving and value creation. Alongside academics, I actively engage in collaborative learning, academic collaboration and practical exposure to business challenges developing a mindset centered on execution, adaptability and long term value creation.",
            },
            {
              org: "Indian Institute of Management, Rohtak (2026 – 2031)",
              title: "Integrated Programme in Management (IPM)",
              body: "A five-year programme blending management foundations with analytical training, spanning economics, statistics, finance, marketing, and strategy.",
            },
            {
              org: "DAV Public School, Ludhiana (Completed 2025)",
              title: "Class XII (Commerce)",
              body: "Scored 97% reflecting consistent academic excellence and discipline. Built a strong foundation in core commerce subjects including Accountancy, Business Studies, and Economics while also developing analytical thinking and structured problem-solving abilities.",
            },
            {
              org: "Narsee Monjee College of Commerce and Economics (2024)",
              title: "Class XI",
              body: "Pursued Class XI in the Commerce stream while actively participating in the Debate & Literary Society. Contributed to editorial initiatives and the college newsletter, strengthening my communication, critical thinking, and collaborative skills alongside academics.",
            },
            {
              org: "Rajhans Vidyalaya (Completed 2023)",
              title: "Class X",
              body: "Scored 95.4% reflecting strong academic performance that shaped my work ethic, time management and attention to detail from an early age.",
            },
          ].map((e) => (
            <article key={e.title} className="surface-card surface-card-hover p-7">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{e.org}</p>
              <h3 className="font-display mt-2 text-2xl italic sm:text-[1.65rem]">{e.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{e.body}</p>
            </article>
          ))}
        </div>
      </NumberedSection>

      {/* Skills */}
      <NumberedSection id="skills" label="Skills">
        <div className="flex flex-wrap gap-3">
          {[
            { icon: Target, name: "Business Strategy" },
            { icon: LineChart, name: "Finance" },
            { icon: Megaphone, name: "Marketing" },
            { icon: TrendingUp, name: "Digital Growth" },
            { icon: Search, name: "Research & Analysis" },
            { icon: MessageSquare, name: "Business Communication" },
            { icon: Mic, name: "Public Speaking" },
            { icon: PenLine, name: "Content Writing" },
            { icon: Users, name: "Collaboration" },
            { icon: Sparkles, name: "Leadership" },
            { icon: FileSpreadsheet, name: "Microsoft Excel" },
            { icon: Palette, name: "Canva" },
            { icon: Presentation, name: "Presentation Design" },
            { icon: Lightbulb, name: "Problem Solving" },
            { icon: BookOpen, name: "Continuous Learning" },
          ].map(({ icon: Icon, name }) => (
            <span key={name} className="skill-pill">
              <Icon className="h-3.5 w-3.5 text-primary" />
              {name}
            </span>
          ))}
        </div>
      </NumberedSection>

      {/* Leadership */}
      <NumberedSection id="leadership" label="Leadership & Activities">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              icon: Mic,
              tag: "Society",
              title: "Debate & Literary Society",
              body: "Active participant in debates and discussions, developing public speaking, critical thinking, persuasive communication, and the confidence to hold a room.",
            },
            {
              icon: PenLine,
              tag: "Editorial",
              title: "College Newsletter · Editorial Team",
              body: "Contributed to writing, editing, and organizing content, strengthening teamwork, editorial judgment, and the discipline of shipping consistently.",
            },
            {
              icon: Swords,
              tag: "Martial Arts",
              title: "Taekwondo Black Belt",
              body: "Demonstrated years of disciplined training, perseverance, and technical proficiency. Developed resilience, focus, and leadership through competitive and structured practice.",
            },
          ].map(({ icon: Icon, tag, title, body }) => (
            <article key={title} className="surface-card surface-card-hover p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {tag}
                </span>
              </div>
              <h3 className="font-display mt-4 text-2xl italic">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{body}</p>
            </article>
          ))}
        </div>
      </NumberedSection>

      {/* Languages */}
      <NumberedSection id="languages" label="Languages">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "English", level: "Highly Proficient" },
            { name: "Hindi", level: "Proficient" },
            { name: "Punjabi", level: "Proficient" },
          ].map((lang) => (
            <div key={lang.name} className="surface-card surface-card-hover p-6">
              <p className="font-display text-2xl leading-tight">{lang.name}</p>
              <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground">
                {lang.level}
              </p>
            </div>
          ))}
        </div>
      </NumberedSection>

      {/* Contact */}
      <NumberedSection id="contact" label="Contact">
        <div className="surface-card overflow-hidden p-8 sm:p-12">
          <p className="font-display text-3xl leading-tight sm:text-5xl">
            Let's build something <span className="italic gradient-text">worth learning from.</span>
          </p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Reach out for internships, collaborations, or a good conversation
            about business, books, or building things.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Mail, label: "Email", value: "harsheenkaurk@gmail.com", href: "mailto:harsheenkaurk@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "/in/harsheenkaur", href: "#" },
              { icon: Github, label: "GitHub", value: "@harsheenkaur", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="surface-card surface-card-hover group flex items-center justify-between p-5"
              >
                <span className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </span>
                    <span className="block text-sm font-medium">{value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </NumberedSection>

      {/* Thank You */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="font-display text-6xl italic leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              THANKS<br />FOR BEING<br />HERE
            </h2>
            <p className="font-display max-w-xs text-2xl italic leading-snug text-primary sm:text-3xl md:text-right">
              Let's make<br />something<br />great
            </p>
          </div>
        </div>
      </section>



      <footer className="px-6 pb-12 pt-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-display text-lg italic text-foreground/80">
            "Stay curious. Keep learning. Create impact."
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harsheen Kaur
          </p>
        </div>
      </footer>
    </div>
  );
}

function NumberedSection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-border pt-14 md:grid-cols-[220px_1fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            {label}
          </p>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
