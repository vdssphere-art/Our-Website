import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Minus, Plus } from "lucide-react";

import heroHill from "@/assets/hero-hill.jpg";
import digitalBrainVideo from "@/assets/Screen Recording 2026-08-20 at 3.06.49 PM.mov";
import textureWaves from "@/assets/texture-waves.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VDS — Custom AI Agents, LLMs & Automation" },
      {
        name: "description",
        content:
          "VDS builds custom neural agents, private LLMs and autonomous workflows for enterprises. Deploy AI that ships measurable results.",
      },
      { property: "og:title", content: "VDS — Custom AI Agents, LLMs & Automation" },
      {
        property: "og:description",
        content:
          "VDS builds custom neural agents, private LLMs and autonomous workflows for enterprises. Deploy AI that ships measurable results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#capabilities" },
  { label: "Insights", href: "#insights" },
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#vision" },
];

const CLIENTS = ["NORTHWIND", "AETHER", "CIGMA", "UNITED", "ANTHEMA", "CVX LABS"];

const WORKS = [
  {
    tag: "Healthcare AI",
    title: "Smart Health Systems",
    image: work1,
    stats: [
      ["$45M+", "Funds raised"],
      ["700%", "Efficiency gain"],
      ["41x", "ROI"],
      ["84", "Partnerships"],
    ],
  },
  {
    tag: "Data Ecosystems",
    title: "Unified Data Lakehouse",
    image: work2,
    stats: [
      ["$62M+", "Funds raised"],
      ["450%", "Efficiency gain"],
      ["32x", "ROI"],
      ["91", "Partnerships"],
    ],
  },
  {
    tag: "Cybersecurity",
    title: "Neural Security Protocol",
    image: work3,
    stats: [
      ["$94M+", "Funds raised"],
      ["120%", "Efficiency gain"],
      ["66x", "ROI"],
      ["12", "Partnerships"],
    ],
  },
];

const CAPABILITIES = [
  {
    id: "001",
    title: "Autonomous Agent Architecture",
    body: "Architecting robust server environments and local LLM integrations so your proprietary data stays inside your perimeter.",
  },
  {
    id: "002",
    title: "Agentic Workflow Systems",
    body: "Multi-step agents that plan, call tools and hand off work — replacing manual operations end to end.",
  },
  {
    id: "003",
    title: "Data Pipelines & RAG",
    body: "Semantic vector search, unified data lakes and token-optimized retrieval for hyper-accurate answers.",
  },
  {
    id: "004",
    title: "Fine-Tuning & Evaluation",
    body: "Domain-tuned models with benchmark harnesses so quality is measured, not assumed.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The custom agentic workflows VDS built reduced our manual data entry by 90%, saving hundreds of hours weekly.",
    name: "Marcus Cheng",
    role: "Head of AI, Aetna",
  },
  {
    quote:
      "They didn't just provide tools; they provided a roadmap for AI integration that actually makes sense for ROI.",
    name: "David Rossi",
    role: "Lead Dev, Cigna",
  },
  {
    quote:
      "A game-changer for our R&D. The neural infrastructure is robust, secure and tailored to our niche stack.",
    name: "Sarah Jenkins",
    role: "CTO, Anthem Group",
  },
  {
    quote:
      "Incredible technical depth. They handled our complex RAG implementation with ease, ahead of schedule.",
    name: "Elena Vance",
    role: "VP Engineering, UnitedHealth",
  },
];

const PLANS = [
  {
    name: "Core",
    price: "$495",
    blurb: "Automate your repetitive tasks.",
    features: ["3 automation flows", "Standard RAG support", "1 admin seat", "Discord support"],
  },
  {
    name: "Growth",
    price: "$1,250",
    blurb: "Advanced agentic workflows.",
    features: ["10 automation flows", "Vector DB hosting", "5 admin seats", "Priority email"],
    featured: true,
  },
  {
    name: "Pro",
    price: "$2,900",
    blurb: "Custom neural architecture.",
    features: ["Unlimited flows", "Custom fine-tuning", "15 admin seats", "24/7 Slack Connect"],
  },
  {
    name: "Scale",
    price: "$7,500",
    blurb: "Enterprise infrastructure.",
    features: ["Full neural stack", "On-premise LLMs", "Unlimited seats", "Dedicated engineer"],
  },
];

const FAQS = [
  {
    q: "How do you ensure our data remains secure?",
    a: "We use SOC2-compliant local vector databases and on-premise LLM hosting so your proprietary data never leaves your infrastructure.",
  },
  {
    q: "What is the typical deployment timeline?",
    a: "A scoped pilot ships in 3–4 weeks. Full production rollouts with integrations typically land inside 8–12 weeks.",
  },
  {
    q: "Can we integrate with our existing CRM?",
    a: "Yes. We build against your existing stack — Salesforce, HubSpot, Dynamics or internal APIs — through typed connectors.",
  },
  {
    q: "Do you provide model fine-tuning?",
    a: "We fine-tune open-weight models on your domain data and maintain evaluation suites to track regressions over time.",
  },
  {
    q: "Do we own the custom code you build?",
    a: "Always. You receive full ownership of the repositories, infrastructure definitions and model artefacts.",
  },
];

const ARTICLES = [
  {
    tag: "Transformation",
    title: "The Sovereign Cloud: why on-premise AI is the future of data privacy",
    body: "How federated learning and private hosting let firms innovate without risking security.",
    author: "Frank Joel",
    image: work1,
  },
  {
    tag: "Architecture",
    title: "The architecture of autonomy: scaling AI within legacy frameworks",
    body: "A guide to integrating custom machine learning models into complex enterprise environments.",
    author: "Damilola Manuel",
    image: work3,
  },
  {
    tag: "Practice",
    title: "Human-centric automation: designing AI that empowers your workforce",
    body: "Why the best implementations augment human talent rather than simply replacing it.",
    author: "Deborah Reachie",
    image: work2,
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-mono text-lg font-medium tracking-[-0.06em] lowercase ${className}`}
    >
      vds<span className="text-accent">.</span>
    </span>
  );
}

function InkButton({
  children,
  href = "#contact",
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-ink py-2 pr-6 pl-2 text-sm font-medium text-ink-foreground transition-transform hover:-translate-y-0.5"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-ink-foreground/12 font-mono text-[10px]">
        //
      </span>
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-mono inline-flex items-center gap-2">
      <span className="size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden rounded-full border border-border bg-card py-3 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-8 sm:gap-10 md:gap-14">
        {[...Array(2)].map((_, dup) =>
          [...Array(3)].map((_, repeat) =>
            CLIENTS.map((c) => (
              <span
                key={`${dup}-${repeat}-${c}`}
                className="label-mono whitespace-nowrap text-foreground/50"
              >
                {c}
              </span>
            )),
          ),
        )}
      </div>
    </div>
  );
}

function WorkHeadingMarquee() {
  return (
    <div
      className="relative left-1/2 mt-4 w-screen -translate-x-1/2 overflow-hidden py-2"
      aria-label="Our Works"
    >
      <div className="flex w-max animate-marquee items-center">
        {[...Array(2)].map((_, group) => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
          >
            {[...Array(3)].map((_, repeat) => (
              <span key={repeat} className="flex items-center gap-8 sm:gap-12 lg:gap-16">
                <span className="work-heading-title">Our Works</span>
                <span className="work-heading-star" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState(0);
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50">
        <div className="shell flex items-center justify-between">
          <nav className="flex items-center gap-1 rounded-full border border-border bg-card/85 p-1.5 pr-4 backdrop-blur-xl">
            <span className="flex h-9 items-center rounded-full bg-ink px-4 text-ink-foreground">
              <Logo />
            </span>
            <div className="hidden items-center md:flex">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <InkButton href="#contact">Hire Team</InkButton>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-0">
          <div className="shell relative z-10 pt-16 pb-72">
            <div className="max-w-2xl animate-rise">
              <h1 className="display-xl">
                <span className="text-muted-foreground/70">Scale your ideas.</span>
                <br />
                Build with AI.
              </h1>
              <p className="mt-6 max-w-md text-base text-muted-foreground">
                VDS deploys custom neural agents, private LLMs and automation in one seamless
                flow.
              </p>
              <div className="mt-8">
                <InkButton href="#contact">Start Build</InkButton>
              </div>
            </div>

            <a
              href="#capabilities"
              className="surface-card absolute top-16 right-5 hidden w-80 p-3 transition-transform hover:-translate-y-1 lg:block"
            >
              <video
                src={digitalBrainVideo}
                aria-label="VDS Digital Brain neural model visualisation"
                autoPlay
                muted
                loop
                playsInline
                className="h-44 w-full rounded-2xl object-cover"
              />
              <div className="flex items-end justify-between px-2 pt-4 pb-1">
                <div>
                  <p className="text-sm font-medium">Digital Brain</p>
                  <p className="label-mono mt-1">// Model v4.0.2</p>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground" />
              </div>
            </a>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[42rem]">
            <img
              src={heroHill}
              alt="Glowing television on a sunlit hill"
              width={1920}
              height={1088}
              className="size-full object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-background to-transparent" />
          </div>

          <div className="relative z-10 pb-10">
            <div className="shell">
              <p className="max-w-sm text-sm text-white/90 drop-shadow">
                +2,400 active deployments and 8,200 brands trust our high-performance
                architecture.
              </p>
            </div>
          </div>
        </section>

        <section className="shell -mt-2 pb-24">
          <Ticker />
        </section>

        {/* Stats */}
        <section className="shell pb-28">
          <p className="display-lg max-w-4xl">
            Automate the manual, accelerate the future. Our custom AI solutions deliver
            measurable growth and operational excellence.
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Empowering teams with intelligent tools that turn complex data into actionable
            business outcomes, daily.
          </p>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["$120M", "Revenue generated for clients through AI-led optimizations."],
              ["15,400", "Active agents running in production for our partners."],
              ["3.4x", "Faster speed to market across engineering teams."],
            ].map(([value, label]) => (
              <div key={value} className="surface-card p-8">
                <p className="text-5xl font-medium tracking-[-0.04em]">{value}</p>
                <p className="mt-4 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Works */}
        <section id="works" className="pb-28">
          <div className="shell">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel>Selected work</SectionLabel>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Bespoke neural architectures and autonomous workflows, shipped for global
                enterprises.
              </p>
            </div>
            <WorkHeadingMarquee />
          </div>

          <div className="shell mt-12 space-y-4">
            {WORKS.map((work) => (
              <article
                key={work.title}
                className="surface-card group grid gap-6 p-4 md:grid-cols-[1.1fr_1fr] md:p-5"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-64 w-full rounded-2xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0 md:h-80"
                />
                <div className="flex flex-col justify-between py-4 pr-2">
                  <div>
                    <SectionLabel>{work.tag}</SectionLabel>
                    <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
                      {work.title}
                    </h3>
                  </div>
                  <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {work.stats.map(([v, l]) => (
                      <div key={l}>
                        <dt className="text-xl font-medium">{v}</dt>
                        <dd className="label-mono mt-1">{l}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="shell pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="display-lg mt-4">
                Tailored intelligence for modern enterprises.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                We bridge the gap between abstract machine learning and practical business
                utility through bespoke engineering.
              </p>
              <div className="mt-8">
                <InkButton href="#contact">Start Build</InkButton>
              </div>
            </div>
            <div className="space-y-3">
              {CAPABILITIES.map((cap) => (
                <div
                  key={cap.id}
                  className="surface-card flex gap-6 p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="label-mono pt-1">{cap.id}</span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.02em]">{cap.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cap.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="shell pb-28">
          <div className="surface-card relative overflow-hidden p-8 md:p-14">
            <img
              src={textureWaves}
              alt=""
              aria-hidden="true"
              width={1024}
              height={1024}
              loading="lazy"
              className="pointer-events-none absolute -top-32 -right-32 size-[34rem] scale-125 object-cover opacity-60 [mask-image:radial-gradient(circle_at_center,black_35%,transparent_70%)]"
            />
            <div className="relative max-w-3xl">
              <SectionLabel>Our vision</SectionLabel>
              <p className="display-lg mt-5">
                AI should not just automate tasks — it should amplify the creative and
                strategic potential of every human.
              </p>
              <p className="mt-6 max-w-xl text-muted-foreground">
                By merging technical rigour with intuitive design, VDS builds systems that
                don't just solve problems — they create entirely new opportunities for
                growth.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-full bg-ink font-mono text-sm text-ink-foreground">
                  AV
                </span>
                <div>
                  <p className="text-sm font-medium">Alexander Vacca</p>
                  <p className="label-mono mt-0.5">Founder & lead engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pb-28">
          <div className="shell">
            <SectionLabel>Experiences</SectionLabel>
            <h2 className="display-lg mt-4 max-w-2xl">
              Trusted by teams shipping AI at scale.
            </h2>
          </div>
          <div className="shell mt-12 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="surface-card p-8">
                <blockquote className="text-lg leading-snug tracking-[-0.02em]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary font-mono text-xs">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="label-mono">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="shell pb-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="display-lg mt-4">Transparent plans, no hidden costs.</h2>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
              {[
                ["Monthly", false],
                ["Annually", true],
              ].map(([label, value]) => (
                <button
                  key={String(label)}
                  onClick={() => setAnnual(Boolean(value))}
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    annual === value
                      ? "bg-ink text-ink-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => {
              const monthly = Number(plan.price.replace(/[$,]/g, ""));
              const shown = annual ? monthly : Math.round(monthly * 1.25);
              return (
                <div
                  key={plan.name}
                  className={`surface-card flex flex-col p-7 ${
                    plan.featured ? "bg-ink text-ink-foreground" : ""
                  }`}
                >
                  <p
                    className={`label-mono ${plan.featured ? "text-ink-foreground/60" : ""}`}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-6 text-4xl font-medium tracking-[-0.04em]">
                    ${shown.toLocaleString()}
                    <span
                      className={`ml-1 text-sm font-normal ${
                        plan.featured ? "text-ink-foreground/60" : "text-muted-foreground"
                      }`}
                    >
                      /mo
                    </span>
                  </p>
                  <p
                    className={`mt-1 text-xs ${
                      plan.featured ? "text-ink-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    USD billed {annual ? "annually" : "monthly"}
                  </p>
                  <p
                    className={`mt-6 text-sm ${
                      plan.featured ? "text-ink-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {plan.blurb}
                  </p>
                  <ul className="mt-6 mb-8 space-y-2 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span
                          className={`size-1 rounded-full ${
                            plan.featured ? "bg-accent" : "bg-foreground/40"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-auto inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                      plan.featured
                        ? "bg-ink-foreground text-ink hover:bg-ink-foreground/90"
                        : "border border-border hover:bg-secondary"
                    }`}
                  >
                    Get started
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section className="shell pb-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionLabel>Common queries</SectionLabel>
              <h2 className="display-lg mt-4">Everything you need to know about our AI.</h2>
              <p className="mt-6 max-w-sm text-muted-foreground">
                Technical specifications, deployment timelines and our data security
                protocols.
              </p>
              <div className="mt-8">
                <InkButton href="#contact">Contact support</InkButton>
              </div>
            </div>
            <div className="surface-card divide-y divide-border overflow-hidden">
              {FAQS.map((faq, i) => (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-base font-medium tracking-[-0.02em]">{faq.q}</span>
                    {openFaq === i ? (
                      <Minus className="size-4 shrink-0 text-muted-foreground" />
                    ) : (
                      <Plus className="size-4 shrink-0 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === i && (
                    <p className="px-7 pb-6 text-sm text-muted-foreground">{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="shell pb-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Insights</SectionLabel>
              <h2 className="display-lg mt-4">Field notes</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Technical frameworks, model benchmarks and strategic guides for leaders
              integrating custom neural architectures.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <article key={a.title} className="surface-card group overflow-hidden p-3">
                <img
                  src={a.image}
                  alt={a.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="h-44 w-full rounded-2xl object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <div className="p-5">
                  <SectionLabel>{a.tag}</SectionLabel>
                  <h3 className="mt-3 text-lg leading-snug font-medium tracking-[-0.02em]">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
                  <p className="label-mono mt-6">Written by {a.author}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="shell pb-24">
          <div className="relative overflow-hidden rounded-4xl bg-ink px-8 py-20 text-center text-ink-foreground md:px-16">
            <SectionLabel>
              <span className="text-ink-foreground/60">// VDS</span>
            </SectionLabel>
            <h2 className="display-lg mx-auto mt-6 max-w-3xl">
              Engineering systems that scale with your ambition.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-ink-foreground/70">
              Tell us where the manual work lives. We'll return an architecture, a timeline
              and a measurable target.
            </p>
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Work email"
                className="h-12 flex-1 rounded-full border border-ink-foreground/15 bg-ink-foreground/8 px-5 text-sm text-ink-foreground placeholder:text-ink-foreground/40 focus:border-ink-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-ink-foreground px-6 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Book a call
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="shell pb-12">
        <div className="surface-card grid gap-10 p-8 md:grid-cols-[1.4fr_1fr_1fr] md:p-12">
          <div>
            <Logo className="text-2xl" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              VDS designs, deploys and operates custom AI systems for teams that measure
              outcomes.
            </p>
          </div>
          <div>
            <p className="label-mono">Quick links</p>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a href={n.href} className="text-muted-foreground hover:text-foreground">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono">Company</p>
            <ul className="mt-4 space-y-2 text-sm">
              {["About VDS", "Careers", "Contact", "Privacy policy"].map((l) => (
                <li key={l}>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="label-mono mt-6 text-center">
          © {new Date().getFullYear()} VDS — All rights reserved
        </p>
      </footer>
    </div>
  );
}
