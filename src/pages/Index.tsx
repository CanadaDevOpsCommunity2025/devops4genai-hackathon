import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Code2, Users, Trophy, Rocket, Sparkles, Zap, Bot, Eye, Activity, Clock, Award, Camera } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import headshotGarima from "@/assets/headshots/Garima_bajpai.png";
import headshotJohn from "@/assets/headshots/John_Willis_Image20260606195016.png";

const galleryImages = Object.values(
  import.meta.glob("@/assets/gallery/*.jpg", { eager: true, import: "default" })
) as string[];

const HACK_URL = "https://www.eventbrite.com/e/devops-for-genai-hackathon-ottawa-2026-tickets-1984872192158";

const VENUE = "Invest Ottawa, 7 Bayview Rd, Ottawa, ON";
const EVENT_DATE = "August 21–22, 2026";

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
          <span className="font-mono text-xs uppercase tracking-widest text-accent">06 / Gallery</span>
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
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
              aria-label="Previous photos"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>

            <div className="flex gap-2">
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
              className="w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 hover:border-accent/40 transition-smooth"
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
            <a href="#timeline" className="hover:text-foreground transition-smooth">Timeline</a>
            <a href="#prizes" className="hover:text-foreground transition-smooth">Prizes</a>
            <a href="#founders" className="hover:text-foreground transition-smooth">Founders</a>
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
            <div className="animate-fade-up">
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

      {/* TIMELINE */}
      <section id="timeline" className="py-24 md:py-32 bg-gradient-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">03 / Timeline</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">24 hours to build.</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-accent">Day 1 — Friday, August 21</h3>
            {[
              { time: "16:00", title: "Kickoff", desc: "Welcome and opening remarks." },
              { time: "16:15", title: "Keynote", desc: "Setting the stage for the weekend ahead." },
              { time: "17:00", title: "Community Connect & Refreshments", desc: "Networking, conversations, and light refreshments." },
              { time: "17:30", title: "Hackathon Starts", desc: "Teams form, problems drop, builds begin. Teams can leave to work on the solution." },
            ].map((item, i) => (
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

            <h3 className="text-2xl font-bold mb-8 mt-12 text-accent">Day 2 — Saturday, August 22</h3>
            {[
              { time: "09:00", title: "Registration & Coffee", desc: "Check in, grab swag, meet fellow builders." },
              { time: "09:30", title: "Keynote", desc: "Inspiration and insights to kick off day two." },
              { time: "10:00", title: "Technical Talks — Cloud & DevOps", desc: "Deep dives from practitioners shipping in production." },
              { time: "12:00", title: "Lunch & Networking", desc: "Conversations that turn into collaborations." },
              { time: "16:00", title: "Hackathon Demos", desc: "Teams present their solutions to the judges." },
              { time: "17:00", title: "Hackathon Ends", desc: "Final submissions and wrap-up." },
              { time: "17:30", title: "Award Ceremony", desc: "Winning teams take the stage." },
              { time: "18:00", title: "Closing Remarks", desc: "Thank you and see you next year!" },
            ].map((item, i) => (
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
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes" className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">04 / Prizes</span>
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
            <span className="font-mono text-xs uppercase tracking-widest text-accent">05 / FAQ</span>
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
              { name: "John Willis", role: "Co-Founder", tag: "DevOps Handbook Co-Author", desc: "Pioneer of the DevOps movement. Co-authored The DevOps Handbook & Beyond The Phoenix Project. Exploring synergy between GenAI and Deming's principles.", linkedin: "https://www.linkedin.com/in/intheclouds", aws: false, photo: headshotJohn },
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
