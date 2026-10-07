import { lazy, Suspense } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Fingerprint,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { siteConfig } from "./data/site";
import { Navbar } from "./components/Navbar";
import { MagneticButton } from "./components/MagneticButton";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { StatCounter } from "./components/StatCounter";
import "./App.css";

const HeroScene = lazy(() => import("./components/three/HeroScene"));
const capabilityIcons = [Code2, Cloud, Cpu, ShieldCheck, Layers3, Braces];
const principles = [
  {
    number: "01",
    title: "Senior talent",
    text: "Experienced engineers and technology specialists, not generic staffing profiles.",
  },
  {
    number: "02",
    title: "Fast deployment",
    text: "Get the expertise you need without waiting through a traditional hiring cycle.",
  },
  {
    number: "03",
    title: "Flexible engagements",
    text: "Scale teams up or down as priorities change and new challenges emerge.",
  },
  {
    number: "04",
    title: "Outcome focused",
    text: "We measure success by the work delivered, not simply hours billed.",
  },
];
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      className="section-heading"
      variants={rise}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <span className="eyebrow">
        <span className="eyebrow-mark" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-scene" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-content page-width">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div className="hero-kicker" variants={rise}>
            <span className="status-dot" /> An extension of your engineering
            team
          </motion.div>
          <motion.h1 id="hero-title" variants={rise}>
            Build Your Team.
            <br />
            <span>Ship What Matters.</span>
          </motion.h1>
          <motion.p className="hero-copy" variants={rise}>
            Elite technology consultants, engineers, and specialists who
            integrate directly into your team and accelerate critical
            initiatives.
          </motion.p>
          <motion.div className="hero-actions" variants={rise}>
            <MagneticButton href="#contact" className="button button--primary">
              Talk to an Expert <ArrowUpRight size={17} />
            </MagneticButton>
            <a className="text-link" href="#capabilities">
              Explore Capabilities <ArrowDown size={15} />
            </a>
          </motion.div>
        </motion.div>
        <div className="hero-meta">
          <span>
            <i /> Senior specialists
          </span>
          <span>
            <i /> Built around your roadmap
          </span>
          <span>
            <i /> Ready when you are
          </span>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-rule" />
          <span>06</span>
        </div>
      </div>
      <div className="hero-side-note" aria-hidden="true">
        PEOPLE / PRODUCT / PROGRESS
      </div>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section className="section capabilities" id="capabilities">
      <div className="page-width">
        <div className="capabilities-intro">
          <SectionHeading
            eyebrow="What we do"
            title="Technology expertise, on demand."
            description="Bring the right minds into the room, from a single specialist to a complete delivery team."
          />
          <a className="arrow-link" href="#contact">
            Find your expertise <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="capability-grid">
          {siteConfig.capabilities.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
              <motion.article
                className="capability-item"
                key={capability.title}
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
              >
                <div className="capability-top">
                  <span className="capability-icon">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <span className="capability-number">0{index + 1}</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <a href="#contact" aria-label={`Discuss ${capability.title}`}>
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ModelSection() {
  return (
    <section className="section model-section" id="model">
      <div className="page-width model-layout">
        <div className="model-copy">
          <SectionHeading
            eyebrow="A better way to scale"
            title="Add expertise without adding friction."
            description="Need a specialized engineer for three months? An entire development squad for a year? Or senior architects to help navigate a complex transformation? Our engagement model adapts to your needs."
          />
          <a className="arrow-link" href="#engagements">
            Explore engagement models <ArrowUpRight size={16} />
          </a>
          <div className="model-stamp">
            <Network size={18} />
            <span>
              Designed to work
              <br />
              with your team
            </span>
          </div>
        </div>
        <div className="process-list">
          {siteConfig.process.map((step, index) => (
            <motion.div
              className="process-step"
              key={step.number}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="process-rail">
                <span>{step.number}</span>
                <i />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <section className="section expertise-section" id="expertise">
      <div className="page-width expertise-layout">
        <div className="expertise-intro">
          <SectionHeading
            eyebrow="The right kind of fluent"
            title="Deep experience. Modern by nature."
            description="From proven enterprise platforms to the tools reshaping what's possible, our specialists bring practical depth across the stack."
          />
        </div>
        <div className="tech-cloud" aria-label="Technology expertise">
          {siteConfig.technologies.map((technology, index) => (
            <motion.span
              className={`tech-chip tech-chip--${index % 4}`}
              key={technology}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.025 }}
              whileHover={{ y: -5, scale: 1.04 }}
            >
              {index % 5 === 0 && (
                <span className="tech-spark" aria-hidden="true" />
              )}
              {technology}
            </motion.span>
          ))}
          <div className="cloud-caption">
            <span className="cloud-caption-line" /> Expertise that connects
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="section why-section" id="why-us">
      <div className="page-width">
        <div className="why-heading">
          <SectionHeading
            eyebrow="Why Synergy"
            title="Consultants who become part of the team."
          />
          <span className="why-aside">
            Good work happens when
            <br />
            great people work as one.
          </span>
        </div>
        <div className="principles-grid">
          {principles.map((item, index) => (
            <motion.article
              className="principle"
              key={item.number}
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07 }}
            >
              <span className="principle-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section className="section engagement-section" id="engagements">
      <div className="page-width">
        <SectionHeading
          eyebrow="Ways to work together"
          title="A model for the work ahead."
          description="Start with what you need now. Build the right shape around what comes next."
        />
        <div className="engagement-grid">
          {siteConfig.engagements.map((item, index) => (
            <motion.article
              className="engagement-item"
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={rise}
              transition={{ delay: index * 0.1 }}
            >
              <span className="engagement-index">
                0{index + 1} <span> / 03</span>
              </span>
              <div className="engagement-icon">
                {index === 0 ? (
                  <Fingerprint />
                ) : index === 1 ? (
                  <Blocks />
                ) : (
                  <Sparkles />
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#contact" aria-label={`Ask about ${item.title}`}>
                <ArrowUpRight size={17} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-section" aria-label="Company at a glance">
      <div className="stats-topline page-width">
        <span className="eyebrow">
          <span className="eyebrow-mark" /> A record built together
        </span>
        <span className="placeholder-note">
          Illustrative figures · replace with verified company data
        </span>
      </div>
      <div className="stats-grid page-width">
        {siteConfig.stats.map((stat, index) => (
          <StatCounter key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [...siteConfig.industries, ...siteConfig.industries];
  return (
    <section className="industries-section" aria-label="Industries served">
      <div className="page-width industries-heading">
        <span className="eyebrow">
          <span className="eyebrow-mark" /> Across complex industries
        </span>
        <span>Built for work that matters.</span>
      </div>
      <div className="industry-track" aria-hidden="true">
        <div className="industry-marquee">
          {industries.map((industry, index) => (
            <span key={`${industry}-${index}`}>
              {industry}
              <i />
            </span>
          ))}
        </div>
      </div>
      <div className="sr-only">{siteConfig.industries.join(", ")}</div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="page-width testimonial-layout">
        <div className="testimonial-mark" aria-hidden="true">
          “
        </div>
        <div className="testimonial-content">
          <span className="eyebrow">
            <span className="eyebrow-mark" /> Illustrative client perspective
          </span>
          <blockquote>{siteConfig.testimonial.quote}</blockquote>
          <div className="testimonial-attribution">
            <span className="attribution-line" />
            <div>
              <strong>{siteConfig.testimonial.attribution}</strong>
              <span>{siteConfig.testimonial.role}</span>
            </div>
          </div>
        </div>
        <div className="testimonial-side">
          A more capable
          <br />
          <span>team, together.</span>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-mesh" aria-hidden="true" />
      <div className="page-width contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">
            <span className="eyebrow-mark" /> Let's make progress
          </span>
          <h2>Your next technical challenge needs the right team.</h2>
          <p>
            Tell us what you're building. We'll help you find the expertise to
            move it forward.
          </p>
          <div className="contact-direct">
            <span>Prefer a direct line?</span>
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email} <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CapabilitySection />
        <ModelSection />
        <ExpertiseSection />
        <WhyUsSection />
        <EngagementSection />
        <StatsSection />
        <IndustriesSection />
        <TestimonialSection />
        <section
          className="closing-cta page-width"
          aria-label="Start a conversation"
        >
          <div className="closing-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="eyebrow">
            <span className="eyebrow-mark" /> The next move is yours
          </span>
          <h2>
            Your next technical
            <br />
            <span>challenge needs the right team.</span>
          </h2>
          <p>
            Tell us what you're building. We'll help you find the expertise to
            move it forward.
          </p>
          <MagneticButton href="#contact" className="button button--light">
            Start a Conversation <ArrowRight size={17} />
          </MagneticButton>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
