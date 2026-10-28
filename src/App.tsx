import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { FaLinkedin } from 'react-icons/fa'

import Header from './components/Header'
import { profile, specialties, stats } from './data/portfolio'

import lightMountain from './assets/mountains.jpg'
import darkMountain from './assets/sunset.jpg'

const specialtyIcons = {
  brain: BrainCircuit,
  database: Database,
  code: Code2,
}

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />
            SOFTWARE ENGINEER
          </span>

          <h1>
            Curious.
            <br />
            Practical.
            <br />
            <span className="accent-text">Focused on Impact.</span>
          </h1>

          <p className="hero-description">{profile.introduction}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#experience">
              Explore My Experience
              <ArrowRight size={17} aria-hidden="true" />
            </a>

            <a className="btn btn-secondary" href="#contact">
              Let's Connect
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <span className="visual-note">
            <span>
              Based in Houston, TX
              <small className="visual-note-subtitle">
                (this isn't Houston, but I wish it was)
              </small>
            </span>
            <ArrowDown size={18} />
          </span>

          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="hero-blob" clipPathUnits="objectBoundingBox">
                <path
                  d="
        M 0.09 0.38
        C 0.18 0.24, 0.25 0.05, 0.43 0.06
        C 0.59 0.06, 0.65 0.18, 0.79 0.19
        C 0.94 0.20, 0.99 0.30, 0.96 0.49
        C 0.94 0.68, 0.79 0.86, 0.60 0.93
        C 0.45 1.00, 0.37 0.83, 0.23 0.86
        C 0.08 0.90, 0.00 0.72, 0.04 0.55
        C 0.05 0.47, 0.06 0.43, 0.09 0.38
        Z
      "
                />
              </clipPath>
            </defs>
          </svg>

          <div
            className="landscape-shape"
            role="img"
            aria-label="Mountain landscape"
            style={
              {
                '--mountain-light': `url(${lightMountain})`,
                '--mountain-dark': `url(${darkMountain})`,
              } as React.CSSProperties
            }
          />

          <span className="visual-decoration" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>

      <div className="specialty-grid">
        {specialties.map((specialty) => {
          const Icon = specialtyIcons[specialty.icon]

          return (
            <a href="#projects" className="specialty-card" key={specialty.title}>
              <span className={`specialty-icon ${specialty.color}`}>
                <Icon size={24} strokeWidth={1.8} />
              </span>

              <div className="specialty-copy">
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </div>

              <ArrowRight className="specialty-arrow" size={18} aria-hidden="true" />
            </a>
          )
        })}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="content-section container" id="about">
      <div className="section-heading">
        <span className="section-label">01 / ABOUT</span>
        <h2>A little about me.</h2>
      </div>

      <div className="about-grid">
        <p className="section-lead">
          I'm a software engineer who enjoys understanding how things work, figuring out what can be
          improved, and building practical solutions.
        </p>

        <div className="about-details">
          <p>
            My experience spans enterprise software development, AI/ML engineering, data pipelines,
            and cloud infrastructure. I've worked on applications used in financial services and the
            automotive industry.
          </p>

          <span className="location-line">
            <MapPin size={16} aria-hidden="true" />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="content-section container" id="experience">
      <div className="section-heading">
        <span className="section-label">02 / EXPERIENCE</span>
        <h2>Where I've worked.</h2>
      </div>

      <div className="experience-list">
        <article className="experience-item">
          <div>
            <span className="experience-date">2025 — 2026</span>
            <h3>Crash Champions</h3>
            <p>AI / Machine Learning Engineering</p>
          </div>
          <span className="experience-tag">Python · Azure · AI/ML</span>
        </article>

        <article className="experience-item">
          <div>
            <span className="experience-date">2024 — 2026</span>
            <h3>Nasdaq Solovis</h3>
            <p>Full-Stack Software Engineering</p>
          </div>
          <span className="experience-tag">C# · .NET · JavaScript · APIs</span>
        </article>

        <article className="experience-item">
          <div>
            <span className="experience-date">2020 — 2023</span>
            <h3>Fackler IT</h3>
            <p>Technical Consulting</p>
          </div>
          <span className="experience-tag">Web · Databases · Infrastructure</span>
        </article>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="content-section container" id="projects">
      <div className="section-heading">
        <span className="section-label">03 / PROJECTS</span>
        <h2>Things I've worked on.</h2>
        <p className="section-subtitle">A selection of software, data, and AI engineering work.</p>
      </div>

      <div className="project-grid">
        <article className="project-card">
          <div className="project-art project-art-ai">
            <BrainCircuit size={48} strokeWidth={1.3} />
          </div>
          <div className="project-body">
            <span className="project-category">AI / MACHINE LEARNING</span>
            <h3>Insurance Prediction Workflows</h3>
            <p>AI workflows and data pipelines supporting insurance change-request predictions.</p>
            <div className="tag-list">
              <span>Python</span>
              <span>Azure</span>
              <span>Microsoft Fabric</span>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-art project-art-web">
            <Code2 size={48} strokeWidth={1.3} />
          </div>
          <div className="project-body">
            <span className="project-category">FULL-STACK DEVELOPMENT</span>
            <h3>Investment Platform Engineering</h3>
            <p>
              Enterprise application development and modernization for financial portfolio
              management.
            </p>
            <div className="tag-list">
              <span>JavaScript</span>
              <span>REST APIs</span>
              <span>.NET</span>
            </div>
          </div>
        </article>

        <article className="project-card">
          <div className="project-art project-art-data">
            <Database size={48} strokeWidth={1.3} />
          </div>
          <div className="project-body">
            <span className="project-category">DATA ENGINEERING</span>
            <h3>Cloud Data Pipelines</h3>
            <p>
              Data ingestion, transformation, integration, and monitoring for production cloud
              workflows.
            </p>
            <div className="tag-list">
              <span>Python</span>
              <span>Fabric</span>
              <span>Azure Functions</span>
            </div>
          </div>
        </article>
      </div>

      <p className="projects-note">
        Project details are based on professional work; proprietary implementation details are not
        published.
      </p>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section container" id="contact">
      <div>
        <span className="section-label">04 / CONTACT</span>
        <h2>Have something in mind?</h2>
        <p>
          I'm always interested in interesting engineering challenges, new opportunities, and
          meeting people who enjoy building things.
        </p>

        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          Get in Touch
          <Mail size={17} aria-hidden="true" />
        </a>
      </div>

      <Sparkles className="contact-decoration" size={110} />
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer container">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>

      <div className="footer-links">
        <a
          href={profile.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <FaLinkedin size={19} />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <SiGithub size={19} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Send email">
          <Mail size={19} />
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
