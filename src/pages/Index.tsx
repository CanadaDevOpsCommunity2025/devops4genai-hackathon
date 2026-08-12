import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Zap, Bot, Eye, Activity, Clock, Award, Camera } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import headshotGarima from "@/assets/headshots/Garima_bajpai.png";
import headshotJohn from "@/assets/headshots/John_Willis_Image20260606195016.png";
import headshotAlexander from "@/assets/headshots/IMG_4822 - Alexander Rey.jpeg";
import headshotAlbert from "@/assets/headshots/Alber_zhao.jpeg";
import headshotNicholas from "@/assets/headshots/52885328476_d88de56268_o_Original - Nicholas Morey.jpg";
import headshotDaniel from "@/assets/headshots/Summit - Daniel Clement.jpg";
import awsLogo from "@/assets/aws-logo.svg";
import logoCrowdbyte from "@/assets/logos/logo new_version1.0_logo-main - white.png";
import logoAlgonquin from "@/assets/logos/Algonquin_logo_AC_WORDMARK_1C_GRN.png";
import logoWct from "@/assets/logos/wct-logo_dark.png";
import logoInvest from "@/assets/logos/io-logo-svg.svg";
import logoPackt from "@/assets/logos/packt-Dz-8EKdV.svg";
import logoLiatrio from "@/assets/logos/liatrio-logo-dark.svg";
import logoTEK from "@/assets/logos/teksystems-logo.svg";
import logoKodeKloud from "@/assets/logos/Kode_cloud_Screenshot 2026-06-06 220755.png";
import logoOreilly from "@/assets/logos/Oriely_download.png";
import logoNewFound from "@/assets/logos/NewFound_soultions_Screenshot 2026-06-11 000345.png";
import logoOpaque from "@/assets/logos/Opaque_Screenshot 2026-06-11 000302.png";
import logoTech2Step from "@/assets/logos/T2S logo variation_1 color P2.png";
import logoCycode from "@/assets/logos/Cycode_Logo.jpg";
import logoGovernmentCanada from "@/assets/logos/Government-of-Canada-logo-1536x864.png";
import logoRedHat from "@/assets/logos/Logo-Red_Hat-C-Standard-RGB.Large_logo.jpeg";
import logoDryRun from "@/assets/logos/Dry_run_images.png";

const galleryImages = Object.values(
  import.meta.glob("@/assets/gallery/*.jpg", { eager: true, import: "default" })
) as string[];

const HACK_URL = "https://www.eventbrite.com/e/devops-for-genai-hackathon-ottawa-2026-tickets-1984872192158";

const VENUE = "Invest Ottawa, 7 Bayview Rd, Ottawa, ON";
const EVENT_DATE = "August 21–22, 2026";
const FULL_STACK_URL = "https://www.youtube.com/watch_videos?video_ids=8aHXhAlylQc&type=0&title=The+Full+Stack+%E2%80%94%C2%A0it%27s+about+more+than+frontend+%26+backend+%E2%80%A2+Season+1";

const HACKATHON_DAY_ONE = [
  { time: "4:00–4:10 PM", title: "Opening Talk", desc: "Welcome to AWS Community Day and the DevOps for GenAI Hackathon." },
  { time: "4:10–4:30 PM", title: "Community Day Keynote", desc: "Leading in the Age of AI with Dr. Mary Gunaratnam." },
  { time: "4:30–5:00 PM", title: "Community Day Talk", desc: "Building an AI-forward Enterprise Platform Engineering Organization with Gautham Pallapa." },
  { time: "5:00–5:50 PM", title: "Hackathon Team Formation & Kickoff", desc: "Coffee, networking, team formation, challenge orientation, and the start of the build." },
  { time: "5:50–6:00 PM", title: "Day 1 Closing", desc: "Closing remarks and Tech2Step walkthrough with Garima Bajpai." },
];

const HACKATHON_DAY_TWO = [
  { time: "10:00–10:30 AM", title: "Introduction to the Judges", desc: "Meet the hackathon judges in L203 with Garima Bajpai." },
  { time: "10:00–10:30 AM", title: "From Agentic Development to Production on OpenShift", desc: "Nicholas Morey explores spec-driven development with Kiro, secure and reproducible workspaces in OpenShift Dev Spaces, and scalable deployment on Red Hat OpenShift Service." },
  { time: "10:00–10:30 AM", title: "Selecting the Right Use Case for GenAI", desc: "Rupal Bhatt presents in L203 while Albert Zhao leads the Strands Agents workshop in the Rogers Room." },
  { time: "10:30–11:30 AM", title: "Watch Party & Parallel Workshop", desc: "The Full Stack developer reality series plays in L203 while the Strands Agents workshop continues in the Rogers Room." },
  { time: "10:30–11:30 AM", title: "Judge & Mentor Space", desc: "Meet and mingle with judges and mentors in L203." },
  { time: "11:30 AM–12:00 PM", title: "Parallel Technical Talks", desc: "Rohini Gaonkar presents Agents Are the New Microservices Problem in the Big Room; Ahmad Alkfri, Senior Software Developer at Cavtera, presents Revolutionizing Construction with AI in the Foundry; Daniel Clement presents online in L203; and Alexander Rey presents in the Rogers Room." },
  { time: "12:00–1:00 PM", title: "Lunch", desc: "Lunch and networking across the event." },
  { time: "1:00–4:00 PM", title: "Masterclass: DevOps, AI and Agents", desc: "A separate-ticket masterclass with John Willis in the Rogers Room." },
  { time: "4:00–5:00 PM", title: "Hackathon Presentations", desc: "Teams present their solutions in the Foundry." },
  { time: "5:00–5:30 PM", title: "Closed-door Judging", desc: "Judges deliberate in L203." },
  { time: "5:30–6:00 PM", title: "Closing Remarks & Awards", desc: "Awards and closing remarks with Garima Bajpai and Aliza Newman." },
];

const FEATURED_SESSIONS = [
  {
    name: "Albert Zhao",
    role: "Developer Advocate, Amazon Web Services",
    title: "Developer-led Workshop: Strands Agents",
    linkedin: "https://www.linkedin.com/in/albert-zhao-49b62a129/",
    photo: headshotAlbert,
    logo: awsLogo,
    logoClass: "brightness-0 invert",
    aws: true,
  },
  {
    name: "Nicholas Morey",
    role: "Red Hat",
    title: "From Agentic Development to Production on OpenShift",
    linkedin: "https://www.linkedin.com/in/nicholas-morey/",
    photo: headshotNicholas,
    logo: logoRedHat,
    logoClass: "w-full !object-center",
    logoContainerClass: "flex !h-14 w-20 items-center justify-center rounded-sm bg-white p-1",
    aws: false,
  },
  {
    name: "Alexander Rey",
    role: "Research Council Officer, National Research Council Canada · Creator, Pirate Weather",
    title: "Compute for the Rest of Us: Leveraging AWS as a Civil Engineer",
    linkedin: "https://ca.linkedin.com/in/alexander-rey",
    photo: headshotAlexander,
    logo: logoGovernmentCanada,
    logoClass: "w-full object-cover",
    logoContainerClass: "rounded-sm bg-white px-2",
    aws: true,
  },
  {
    name: "Daniel Clement",
    role: "AWS Community Builder",
    title: "From Threat to Guardian: Building Agentic AI on AWS to Combat Online Exploitation",
    linkedin: "https://www.linkedin.com/in/danielclement1/",
    photo: headshotDaniel,
    logo: awsLogo,
    logoClass: "brightness-0 invert",
    aws: true,
  },
];

const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = galleryImages.length;
  const visibleCount = 3;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) => (current + offset) % total;

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">09 / Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">Moments from past events.</h2>
          <p className="text-lg text-muted-foreground mt-4">A look back at the energy, collaboration, and community spirit from our previous gatherings.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-hidden">
            {Array.from({ length: visibleCount }).map((_, offset) => (
              <div
                key={getIndex(offset)}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border group"
              >
                <img
                  src={galleryImages[getIndex(offset)]}
                  alt={`Community event photo ${getIndex(offset) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 shrink-0 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Previous photos"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <div className="hidden gap-2 sm:flex">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-accent w-6" : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 shrink-0 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Next photos"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <a href="#top" className="font-mono text-sm tracking-tight">
            <span className="text-gradient font-bold">devops4genai</span>
            <span className="text-muted-foreground">/hackathon</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-smooth">About</a>
            <a href="#challenge" className="hover:text-foreground transition-smooth">Challenge</a>
            <a href="#masterclass" className="hover:text-accent transition-smooth text-accent/80 font-medium">Masterclass</a>
            <a href="#timeline" className="hover:text-foreground transition-smooth">Program</a>
            <a href="#prizes" className="hover:text-foreground transition-smooth">Prizes</a>
            <a href="#founders" className="hover:text-foreground transition-smooth">Founders</a>
            <a href="#sponsors" className="hover:text-foreground transition-smooth">Sponsors</a>
            <a href="#gallery" className="hover:text-foreground transition-smooth">Gallery</a>
            <a href="#faq" className="hover:text-foreground transition-smooth">FAQ</a>
          </div>
          <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90 border-0">
            <a href={HACK_URL} target="_blank" rel="noopener noreferrer">Register</a>
          </Button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-accent-glow" />

        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="min-w-0 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground">Ottawa · Aug 21–22, 2026</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-2">
                DevOps for GenAI
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-accent leading-tight mb-4">
                HACKATHON
              </h2>
              <p className="text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground mb-6">
                Ottawa 2026
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 leading-relaxed">
                Build innovative GenAI-powered DevOps solutions in 24 hours. Form teams, hack with cloud services, demo to judges, and win prizes.
              </p>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-muted-foreground mb-10">
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-accent" /> {EVENT_DATE}</span>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {VENUE}</span>
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-accent" /> Teams of 2–5</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow">
                  <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                    Register Your Team <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>

              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button asChild size="lg" className="h-14 max-w-full px-5 text-sm sm:px-8 sm:text-base bg-accent/10 backdrop-blur-sm border border-accent/40 hover:bg-accent/20 hover:border-accent/70 hover:shadow-[0_0_25px_rgba(146,119,255,0.25)] transition-all duration-300">
                  <a href="https://www.eventbrite.com/e/masterclass-devops-ai-and-agents-with-john-willis-tickets-1993440231394" target="_blank" rel="noopener noreferrer">
                    <Sparkles className="mr-2 h-5 w-5 shrink-0 text-accent" />
                    <span className="sm:hidden">John Willis Masterclass</span>
                    <span className="hidden sm:inline">Masterclass - DevOps, AI, and Agents with John Willis</span>
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right — Visual */}
            <div className="hidden md:flex items-center justify-center relative">
              <div className="relative w-80 h-96 lg:w-[26rem] lg:h-[30rem]">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />

                {/* Center: GenAI Platform */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute -inset-6 rounded-full border border-accent/15 animate-[pulse_3s_ease-in-out_infinite]" />
                    <div className="absolute -inset-3 rounded-full border border-primary/25 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" />
                    <div className="w-[5.5rem] h-[5.5rem] rounded-2xl bg-gradient-primary flex items-center justify-center shadow-[0_0_30px_rgba(146,119,255,0.3)] animate-[pulse_3s_ease-in-out_infinite]">
                      <Code2 className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-accent/80 whitespace-nowrap">Hack</span>
                  </div>
                </div>

                {/* Surrounding nodes */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Bot className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Agents</span>
                </div>

                <div className="absolute top-[20%] right-2 animate-[float_5s_ease-in-out_infinite_0.8s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Inference</span>
                </div>

                <div className="absolute top-[45%] right-0 animate-[float_7s_ease-in-out_infinite_1.5s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Deploy</span>
                </div>

                <div className="absolute bottom-[20%] right-4 animate-[float_6.5s_ease-in-out_infinite_0.5s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Observe</span>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-[float_5.5s_ease-in-out_infinite_1s]">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <span className="block font-mono text-[9px] text-primary/60 mt-1.5 text-center">Scale</span>
                </div>

                <div className="absolute bottom-[20%] left-4 animate-[float_6s_ease-in-out_infinite_2s]">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-accent" />
                  </div>
                  <span className="block font-mono text-[9px] text-accent/60 mt-1.5 text-center">Win</span>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                  <line x1="50%" y1="15%" x2="50%" y2="40%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite]" />
                  <line x1="78%" y1="27%" x2="58%" y2="43%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.8s_linear_infinite_0.3s]" />
                  <line x1="82%" y1="50%" x2="60%" y2="50%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_2s_linear_infinite_0.6s]" />
                  <line x1="78%" y1="73%" x2="58%" y2="57%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.7s_linear_infinite_0.9s]" />
                  <line x1="50%" y1="85%" x2="50%" y2="60%" stroke="rgba(99,102,241,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.5s_linear_infinite_1.2s]" />
                  <line x1="22%" y1="73%" x2="42%" y2="57%" stroke="rgba(146,119,255,0.2)" strokeWidth="1" strokeDasharray="4 3" className="animate-[dash_1.9s_linear_infinite_1.5s]" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">01 / About</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4">Build the future of AI-powered DevOps.</h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The <span className="text-foreground font-medium">DevOps for GenAI Hackathon</span> challenges teams to build innovative solutions that combine DevOps practices with Generative AI. Think AI-powered CI/CD pipelines, intelligent observability, automated incident response, or GenAI-driven infrastructure management.
              </p>
              <p>
                Whether you're an experienced cloud architect or just getting started with AI, this hackathon is your chance to experiment, collaborate with mentors, and push the boundaries of what's possible when DevOps meets GenAI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">02 / Challenge</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">What you'll build.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Bot, title: "AI Agents for DevOps", desc: "Build autonomous agents that handle deployments, rollbacks, incident triage, or infrastructure provisioning." },
              { icon: Eye, title: "Intelligent Observability", desc: "Create GenAI-powered monitoring that predicts failures, auto-generates runbooks, or summarizes incidents." },
              { icon: Rocket, title: "AI-Driven Pipelines", desc: "Design CI/CD pipelines enhanced with LLMs for code review, test generation, security scanning, or release decisions." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-accent/40 transition-smooth group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-card border border-accent/20">
            <h3 className="text-xl font-bold mb-3">Open Theme</h3>
            <p className="text-muted-foreground leading-relaxed">
              Don't fit neatly into a category? That's fine. Any project that meaningfully combines DevOps workflows with GenAI capabilities is welcome. Surprise us.
            </p>
          </div>
        </div>
      </section>

      {/* MASTERCLASS */}
      <section id="masterclass" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">03 / Masterclass</p>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">Exclusive · Limited Seats</span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">Masterclass</h2>
              <p className="text-lg text-muted-foreground mt-4">DevOps, AI & Agents with John Willis · 1:00–4:00 PM</p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-accent/40 bg-background/50 backdrop-blur-sm shadow-[0_0_60px_rgba(146,119,255,0.1)]">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl border-2 border-accent/50 overflow-hidden shadow-[0_0_30px_rgba(146,119,255,0.2)]">
                    <img src={headshotJohn} alt="John Willis" className="w-full h-full object-cover object-top" />
                  </div>
                  <p className="text-center font-bold text-sm mt-3">John Willis</p>
                  <p className="text-center text-muted-foreground text-[10px]">Co-Author, The DevOps Handbook</p>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    An exclusive deep-dive masterclass by John Willis — co-author of The DevOps Handbook and pioneer of the DevOps movement. Explore the synergy between Generative AI, Agentic workflows, and Deming's principles of transformation.
                  </p>
                  <p className="text-sm text-muted-foreground/70 mb-6">
                    ⚠️ This is a separate ticket — not included with the AWS Community Day or Hackathon registration.
                  </p>
                  <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 h-14 px-8 shadow-glow animate-pulse-glow">
                    <a href="https://www.eventbrite.com/e/masterclass-devops-ai-and-agents-with-john-willis-tickets-1993440231394" target="_blank" rel="noopener noreferrer">
                      Get Masterclass Ticket <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">04 / Program</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Build, learn, present.</h2>
            <p className="text-lg text-muted-foreground mt-4">The hackathon program, reconciled with the AWS Community Day multi-room agenda.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-accent">Day 1 — Friday, August 21</h3>
            {HACKATHON_DAY_ONE.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 group">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-sm text-accent pt-1">{item.time}</div>
                  <div className="w-px flex-1 bg-border mt-4 group-last:hidden" />
                </div>
                <div className="flex-1 pb-10 group-last:pb-0">
                  <div className="relative pl-6 border-l border-border -ml-px pl-10">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                    {item.title === "Watch Party & Parallel Workshop" && (
                      <a href={FULL_STACK_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                        Watch on CodeTV <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <h3 className="text-2xl font-bold mb-8 mt-12 text-accent">Day 2 — Saturday, August 22</h3>
            {HACKATHON_DAY_TWO.map((item, i) => (
              <div key={i} className="flex gap-6 md:gap-10 group">
                <div className="flex flex-col items-center">
                  <div className="font-mono text-sm text-accent pt-1">{item.time}</div>
                  <div className="w-px flex-1 bg-border mt-4 group-last:hidden" />
                </div>
                <div className="flex-1 pb-10 group-last:pb-0">
                  <div className="relative pl-6 border-l border-border -ml-px pl-10">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-primary -translate-x-1/2 ring-4 ring-background" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="sessions" className="mt-20">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">Featured workshops & talks</span>
              <h3 className="text-3xl font-bold mt-3">Learn while you build.</h3>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_SESSIONS.map((session) => (
                <a
                  key={session.name}
                  href={session.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-w-0 flex-col rounded-lg border border-border bg-gradient-card p-5 transition-smooth hover:border-accent/40 hover:shadow-elevated"
                >
                  {session.aws && (
                    <span className="absolute right-3 top-3 rounded border border-[#FF9900]/40 bg-[#FF9900]/20 px-1.5 py-0.5 font-mono text-[8px] font-bold text-[#FF9900]">
                      AWS
                    </span>
                  )}
                  <div className="mb-4 h-20 w-20 overflow-hidden rounded-full border-2 border-[#FF9900]/30">
                    <img src={session.photo} alt={session.name} className="h-full w-full object-cover object-top" />
                  </div>
                  <h4 className="text-base font-bold group-hover:text-accent transition-smooth">{session.name}</h4>
                  <p className="mt-1 text-[10px] leading-relaxed text-muted-foreground">{session.role}</p>
                  <p className="mt-3 flex-1 text-xs font-medium leading-relaxed">{session.title}</p>
                  <div className={`mt-4 h-6 max-w-[12rem] overflow-hidden ${session.logoContainerClass || ""}`}>
                    <img src={session.logo} alt="" className={`h-full max-w-full object-contain object-left ${session.logoClass}`} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">05 / Prizes</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Build. Demo. Win.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { place: "1st Place", icon: Trophy, desc: "Top prize for the most innovative and impactful solution.", highlight: true },
              { place: "2nd Place", icon: Award, desc: "Runner-up for exceptional technical execution and creativity.", highlight: false },
              { place: "3rd Place", icon: Sparkles, desc: "Recognition for outstanding effort and potential.", highlight: false },
            ].map(({ place, icon: Icon, desc, highlight }) => (
              <div key={place} className={`p-8 rounded-2xl border transition-smooth group ${highlight ? "bg-gradient-primary border-accent/40 shadow-glow" : "bg-gradient-card border-border hover:border-accent/40"}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? "bg-white/20" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/20"} transition-smooth`}>
                  <Icon className={`w-6 h-6 ${highlight ? "text-white" : "text-accent"}`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${highlight ? "text-white" : ""}`}>{place}</h3>
                <p className={`leading-relaxed ${highlight ? "text-white/80" : "text-muted-foreground"}`}>{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-8 font-mono text-sm">
            Prize details to be announced. Stay tuned.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">06 / FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Common questions.</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "Who can participate?", a: "Anyone! Developers, DevOps engineers, data scientists, designers — all skill levels welcome. You can register solo and we'll help you find a team." },
              { q: "What's the team size?", a: "Teams of 2–5 people. You can form your own team or join one at the event." },
              { q: "What tools can we use?", a: "Any cloud services, GenAI APIs, open-source tools, or frameworks. AWS credits will be provided to participating teams." },

              { q: "Is there a cost?", a: "Check the registration page for current pricing. Early bird discounts may be available." },
            ].map(({ q, a }, i) => (
              <div key={i} className="p-6 rounded-xl bg-gradient-card border border-border">
                <h4 className="font-bold text-lg mb-2">{q}</h4>
                <p className="text-muted-foreground leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section id="founders" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">07 / Founders</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">The minds behind the movement.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Garima Bajpai", role: "Co-Founder", tag: "DevOps Executive of the Year", desc: "Senior Leader recognized at DevOps Dozen Awards. AWS User Group Ottawa lead. Author on Technology Leadership. Bridges DevOps and emerging AI communities.", linkedin: "https://www.linkedin.com/in/garimabajpai", aws: true, photo: headshotGarima },
              { name: "John Willis", role: "Co-Founder", tag: "DevOps Handbook Co-Author", desc: "Pioneer of the DevOps movement. Co-authored The DevOps Handbook & Beyond The Phoenix Project. Exploring synergy between GenAI and Deming's principles.", linkedin: "https://www.linkedin.com/in/johnwillisatlanta/", aws: false, photo: headshotJohn },
            ].map(({ name, role, tag, desc, linkedin, aws, photo }) => (
              <a key={name} href={linkedin} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-5 p-6 rounded-2xl bg-gradient-card border border-accent/30 hover:shadow-glow transition-smooth">
                {aws && (
                  <span className="absolute top-3 right-3 px-1.5 py-0.5 rounded bg-[#FF9900]/20 border border-[#FF9900]/40 text-[#FF9900] font-mono text-[8px] font-bold">AWS</span>
                )}
                <div className={`w-20 h-20 rounded-full border-2 overflow-hidden shrink-0 transition-smooth ${aws ? "border-[#FF9900]/40 group-hover:border-[#FF9900]" : "border-accent/40 group-hover:border-accent"}`}>
                  <img src={photo} alt={name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold group-hover:text-accent transition-smooth">{name}</h4>
                  <p className="text-muted-foreground text-sm">{role}</p>
                  <p className="text-muted-foreground/70 text-xs mt-1 leading-relaxed">{desc}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-[10px]">{tag}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">08 / Sponsors</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Our sponsors & partners.</h2>
            </div>

            {/* Title Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Title Sponsor</p>
                <div className="flex justify-center">
                  <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="p-6 hover:opacity-80 transition-smooth">
                    <img src={awsLogo} alt="AWS" className="h-12 invert brightness-0 invert" />
                  </a>
                </div>
            </div>

            {/* Gold Sponsor */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Gold Sponsor</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <a href="https://www.redhat.com" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-7 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoRedHat} alt="Red Hat" className="h-24 w-48 object-contain" />
                  </a>
                  <a href="https://www.dryrun.security/" target="_blank" rel="noopener noreferrer" className="rounded bg-white px-5 py-4 hover:opacity-80 transition-smooth">
                    <img src={logoDryRun} alt="DryRun Security" className="h-20 w-48 object-contain" />
                  </a>
                </div>
            </div>

            {/* Silver Partner */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Silver Partner</p>
                <div className="flex justify-center">
                  <a href="https://cycode.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoCycode} alt="Cycode" className="h-10 object-contain" />
                  </a>
                </div>
            </div>

            {/* Organizing Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Organizing Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.meetup.com/aws-ottawa/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="font-bold text-sm">AWS User Group Ottawa</span>
                  </a>
                  <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-14 object-contain" />
                  </a>
                </div>
            </div>

            {/* Community Partners */}
            <div className="mb-10">
                <p className="text-center font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Community Partners</p>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <span className="flex h-12 w-40 items-center justify-center overflow-hidden">
                      <img src={logoAlgonquin} alt="Algonquin College" className="w-64 max-w-none brightness-0 invert" />
                    </span>
                  </a>
                  <a href="https://www.wct-fct.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoWct} alt="WCT" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.investottawa.ca" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoInvest} alt="Invest Ottawa" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoPackt} alt="Packt" className="h-9 object-contain invert" />
                  </a>
                  <a href="https://ca.linkedin.com/company/tech2step" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth">
                    <img src={logoTech2Step} alt="Tech 2 Step" className="h-16 object-contain" />
                  </a>
                </div>
            </div>

            {/* Previous Sponsors */}
            <div className="mb-16">
              <h3 className="text-center text-lg font-bold mb-6">Previous Sponsors</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <a href="https://www.liatrio.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoLiatrio} alt="Liatrio" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.teksystems.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoTEK} alt="TEKsystems" className="h-8 object-contain invert" />
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={awsLogo} alt="AWS" className="h-6 invert brightness-0 invert" />
                </a>
                <a href="https://kodekloud.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoKodeKloud} alt="KodeKloud" className="h-8 object-contain" />
                </a>
                <a href="https://www.oreilly.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOreilly} alt="O'Reilly" className="h-8 object-contain invert" />
                </a>
                <a href="https://www.packtpub.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoPackt} alt="Packt" className="h-7 object-contain invert" />
                </a>
                <a href="https://crowdbytesolutions.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoCrowdbyte} alt="Crowdbyte Solutions" className="h-10 object-contain" />
                </a>
                <a href="https://www.algonquincollege.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoAlgonquin} alt="Algonquin College" className="h-12 object-contain brightness-[3]" />
                </a>
                <a href="https://newfoundrecruiting.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoNewFound} alt="NewFound Recruiting" className="h-8 object-contain" />
                </a>
                <a href="https://opaque.co" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-smooth">
                  <img src={logoOpaque} alt="Opaque" className="h-8 object-contain invert" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <GalleryCarousel />

      {/* FINAL CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-glow" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Code2 className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              24 hours. One challenge.<br /><span className="text-gradient">Infinite possibilities.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Spots are limited. Register your team and get ready to build something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 border-0 text-base h-14 px-8 shadow-glow animate-pulse-glow">
                <a href={HACK_URL} target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="font-mono">
            <span className="text-gradient font-bold">devops4genai</span>/hackathon — Ottawa 2026
          </div>
          <div>Organized by DevOps + AI Community of Practice · {VENUE}</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
