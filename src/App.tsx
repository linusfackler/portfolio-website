import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Code2,
  Database,
  DatabaseZap,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'

import { SiGithub } from '@icons-pack/react-simple-icons'
import { FaLinkedin } from 'react-icons/fa'

import Header from './components/Header'
import { profile, specialties, stats, experiences, projects } from './data/portfolio'

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
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.company}>
            <div>
              <span className="experience-date">{experience.date}</span>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
            </div>

            <span className="experience-tag">{experience.technologies.join(' · ')}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className={`project-art project-art-${project.theme}`}>
        <img
          src={project.image}
          alt={`${project.title} logo`}
          className="project-logo"
          loading="lazy"
        />
      </div>
    )
  }

  const Icon =
    project.icon === 'brain'
      ? BrainCircuit
      : project.icon === 'finance'
        ? ChartNoAxesCombined
        : DatabaseZap

  return (
    <div className={`project-art project-art-${project.theme}`}>
      <Icon size={52} strokeWidth={1.4} aria-hidden="true" />
    </div>
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
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <ProjectVisual project={project} />

            <div className="project-body">
              <span className="project-category">{project.category}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="projects-note">
        Professional projects are described at a high level to respect client confidentiality.
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
