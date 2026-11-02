import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/roboto/latin-400.css";
import "@fontsource/roboto/latin-700.css";
import {
  a,
  assetPath,
  sitePath,
  Button,
  Tag,
  Controls,
  type GalleryItem,
} from "./ui";
import { Projects } from "./Projects";
import "./styles.css";
import "./refinements.css";
import { Contact } from "./Contact";
import { Clients } from "./Clients";
import { companyContact } from "./company-details";

const photos = {
  hero: a("5:446", "imgSignodePage12Image021"),
  heroSecond: assetPath("/assets/profile/hero-cooling-tower.jpg"),
  steel: a("5:520", "imgSignodePage11Image021"),
  tank: a("5:553", "imgSignodePage11Image041"),
  water: a("5:553", "imgSignodeWaterInfrastructure"),
  focus: a("5:641", "imgSignodePage13Image031"),
  piping: a("5:691", "imgSignodePage14Image011"),
  equipment: a("5:691", "imgSignodePage06Image011"),
  factory: a("5:691", "imgSignodePage11Image011"),
  systems: a("5:691", "imgSignodePage14Image031"),
  practice: a("51:406", "imgSignodePage08Image031"),
};
const companyDescription =
  "Signode Engineering Services Ltd provides engineering and project support across structural and building works, roads, water and sanitation. Our work brings practical solutions to industrial and infrastructure needs.";
const capabilities = [
  [
    "Structural and building works",
    "Structural fabrication, steelwork and building services shaped around the requirements of the site.",
  ],
  [
    "Industrial piping and mechanical installations",
    "Fabrication and installation support for piping, equipment and mechanical systems in industrial facilities.",
  ],
  [
    "Roads, water and sanitation",
    "Practical engineering and project support for essential transport, water and sanitation infrastructure.",
  ],
  [
    "Project and technical support",
    "Coordination and on-site support that help translate project requirements into practical work.",
  ],
];
const values = [
  [
    "Engineering",
    "Quality in the detail",
    "Apply technical understanding and careful workmanship to each scope. Pay attention to materials, fabrication details and installation requirements.",
  ],
  [
    "Integrity",
    "Clarity in every commitment",
    "Work openly, communicate requirements and raise issues early. Keep practical project needs at the centre of decisions and relationships.",
  ],
  [
    "Safety",
    "Care at every stage",
    "Consider the people, equipment and surroundings affected by the work. Plan tasks carefully and make safe working practices part of delivery.",
  ],
];
const stages = [
  [
    "Understand the need",
    "Clarify the scope, site conditions and practical requirements before work begins.",
  ],
  [
    "Plan the work",
    "Align the methods, materials and coordination needed for a considered approach.",
  ],
  [
    "Deliver with care",
    "Bring fabrication, installation and site support together with attention to quality and safety.",
  ],
  [
    "Review together",
    "Check the work against the agreed scope and communicate the next steps clearly.",
  ],
];
const projects: GalleryItem[] = [
  {
    image: a("5:553", "imgSignodePage11Image021"),
    title: "Industrial steel structures",
    description: "Fabrication and erection",
  },
  {
    image: photos.tank,
    title: "Tank erection and installation",
    description: "Industrial project works",
  },
  {
    image: photos.water,
    title: "Water and sanitation infrastructure",
    description: "Engineering for essential services",
  },
];
function Header({
  about,
  projectPage,
  contactPage,
}: {
  about: boolean;
  projectPage: boolean;
  contactPage: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const links = [
    ["Services", "/#services"],
    ["Projects", "/projects"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ];
  const results = [
    ["Engineering services", "/#services"],
    ["Our projects", "/projects"],
    ["About Signode", "/about"],
    ["Engineering capabilities", "/#capabilities"],
    ["Contact Us", "/contact"],
  ].filter(([label]) => label.toLowerCase().includes(query.toLowerCase()));
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          setSearchOpen(false);
        }
      }}
    >
      <div className="container header-inner">
        <a className="header-brand" href={sitePath("/")} aria-label="Signode home">
          <img
            src={
              about
                ? a("61:1549", "imgSignodeLogo")
                : a("5:877", "imgSignodeEditableVectorLogo")
            }
            alt="Signode Engineering Services Ltd"
          />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setSearchOpen(false);
          }}
        >
          {menuOpen ? "Close" : "Menu"} <span aria-hidden="true">☰</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={menuOpen ? "open" : ""}
        >
          {links.map(([name, href]) => (
            <a
              key={name}
              href={sitePath(href)}
              aria-current={
                (about && name === "About Us") ||
                (projectPage && name === "Projects") ||
                (contactPage && name === "Contact Us")
                  ? "page"
                  : undefined
              }
              onClick={() => setMenuOpen(false)}
            >
              {name}
              {!about && ["Services", "About Us"].includes(name) && (
                <span
                  className="chevron"
                  aria-hidden="true"
                  style={{ maskImage: `url("${a("5:877", "imgAfter1")}")` }}
                />
              )}
            </a>
          ))}
        </nav>
        {!about && (
          <button
            className="search-toggle"
            aria-label="Search the site"
            aria-expanded={searchOpen}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
          >
            <span
              className="search-icon"
              aria-hidden="true"
              style={{ maskImage: `url("${a("5:877", "imgAfter")}")` }}
            />
          </button>
        )}
      </div>
      {searchOpen && (
        <div className="search-panel">
          <div className="container">
            <label htmlFor="site-search">Search Signode</label>
            <input
              id="site-search"
              autoFocus
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, projects, about us…"
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
            />
            <ul>
              {results.map(([label, href]) => (
                <li key={label}>
                  <a href={sitePath(href)} onClick={() => setSearchOpen(false)}>
                    {label} →
                  </a>
                </li>
              ))}
              {!results.length && (
                <li>No matching pages. Try “services” or “projects”.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
function Home({ openGallery }: { openGallery: (item: GalleryItem) => void }) {
  const [hero, setHero] = useState(0);
  const [manualHero, setManualHero] = useState(false);
  const [service, setService] = useState(0);
  const [project, setProject] = useState(0);
  const [practice, setPractice] = useState(0);
  useEffect(() => {
    if (manualHero || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const timer = setInterval(() => setHero((n) => 1 - n), 5000);
    return () => clearInterval(timer);
  }, [manualHero]);
  const services = [
    [
      "Structural fabrication",
      "Steel structures and fabrication for industrial facilities. Our project photographs show the structures, installations and site work behind our engineering services.",
      photos.steel,
    ],
    ["Water & sanitation", capabilities[2][1], photos.water],
    ["Building services", capabilities[0][1], photos.factory],
    [
      "Roads",
      "Practical engineering and project support for essential transport infrastructure.",
      photos.hero,
    ],
    ["Project management", capabilities[3][1], photos.focus],
    [
      "Technical support",
      "Technical understanding and on-site support for industrial and infrastructure projects.",
      photos.equipment,
    ],
  ];
  const practiceSlides = [
    [
      "Engineering in practice",
      "From structural steelwork to industrial piping and tank installations, explore the engineering work featured in our company profile. We approach projects with a commitment to integrity, quality and safety.",
      photos.practice,
    ],
    ["Structural fabrication", services[0][1], photos.steel],
    ["Industrial installations", capabilities[1][1], photos.focus],
  ];
  const cards = [
    [
      photos.piping,
      "Installation",
      "Industrial piping and installation for operational facilities",
    ],
    [
      photos.equipment,
      "Equipment",
      "Mechanical equipment and industrial installations",
    ],
    [
      photos.factory,
      "Industrial Works",
      "Industrial facilities and project delivery",
    ],
    [
      photos.systems,
      "Piping",
      "Piping and systems installation for industrial facilities",
    ],
  ];
  return (
    <>
      <section
        className={`home-hero hero-slide-${hero}`}
        aria-label="Engineering ideas into reality"
      >
        <div className="hero-images">
          <img
            className={`hero-photo first${hero === 0 ? " visible" : ""}`}
            src={photos.hero}
            alt="Signode engineering team working on an industrial installation"
          />
          <img
            className={`hero-photo second${hero === 1 ? " visible" : ""}`}
            src={photos.heroSecond}
            alt="Cooling tower installation with a crane and engineering crew on site"
          />
        </div>
        <div className="container hero-container">
          <div className="hero-panel">
            <h1>
              <span>Engineering</span>
              <span>ideas into</span>
              <span>reality</span>
            </h1>
            <p>
              Practical engineering, fabrication and project support for
              industrial and infrastructure projects in Uganda.
            </p>
            <Button href="#projects" light>
              Our work
            </Button>
            <Controls
              count={2}
              current={hero}
              onChange={(n) => {
                setManualHero(true);
                setHero(n);
              }}
              hero
              node="5:446"
            />
          </div>
        </div>
      </section>
      <div className="container home-intro">
        <div className="intro-grid">
          <h2>
            Built with expertise.
            <br />
            Delivered with integrity.
          </h2>
          <p>{companyDescription}</p>
        </div>
        <div className="home-values">
          {["Engineering", "Integrity", "Safety"].map((name, i) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>
                {["Technical expertise", "Our commitment", "At every stage"][i]}
              </p>
              <a href={sitePath("/about")}>
                Company Overview <img src={a("5:480", "imgAfter")} alt="" />
              </a>
            </article>
          ))}
        </div>
      </div>
      <section className="container home-services" id="services">
        <div className="section-heading">
          <div>
            <h2>
              Engineering services for
              <br className="desktop-break" /> real-world challenges
            </h2>
            <p>
              From structural fabrication to industrial installations, we bring
              practical
              <br className="wide-break" /> engineering expertise and a
              commitment to quality.
            </p>
          </div>
          <Button href="/about#capabilities">All Services</Button>
        </div>
        <div
          className="service-slide"
          role="tabpanel"
          id="service-panel"
          aria-labelledby={`service-tab-${service}`}
        >
          <div className="service-copy">
            <h3>{services[service][0]}</h3>
            <p>{services[service][1]}</p>
            <a className="text-link" href={sitePath("/about#capabilities")}>
              View solution{" "}
              <span
                className="link-icon"
                aria-hidden="true"
                style={{ maskImage: `url("${a("5:520", "imgAfter")}")` }}
              />
            </a>
          </div>
          <img
            className="service-image"
            src={services[service][2]}
            alt={services[service][0]}
          />
        </div>
        <div
          className="service-tabs"
          role="tablist"
          aria-label="Engineering services"
        >
          {services.map(([name], i) => (
            <button
              key={name}
              id={`service-tab-${i}`}
              role="tab"
              aria-selected={service === i}
              aria-controls="service-panel"
              tabIndex={service === i ? 0 : -1}
              onClick={() => setService(i)}
              onKeyDown={(e) => {
                if (
                  ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                ) {
                  e.preventDefault();
                  const n =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? 5
                        : (service + (e.key === "ArrowRight" ? 1 : 5)) % 6;
                  setService(n);
                  document.getElementById(`service-tab-${n}`)?.focus();
                }
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </section>
      <section className="projects-section navy" id="projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <h2>Projects that deliver impact</h2>
              <p>
                Discover how we bring complex projects to life, delivering
                practical, lasting
                <br className="wide-break" /> outcomes for the communities and
                clients we serve.
              </p>
            </div>
            <Button href="/projects" light>
              All Projects
            </Button>
          </div>
          <div className="project-grid">
            {projects.map((_, index) => {
              const item = projects[(index + project) % projects.length];
              return (
                <button
                  className="project-card"
                  key={item.title}
                  onClick={() => openGallery(item)}
                >
                  <div className="project-photo">
                    <img src={item.image} alt={item.title} />
                    <span>Uganda</span>
                  </div>
                  <div className="project-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <Tag>
                      {
                        ["Structural Works", "Industrial Engineering", "Water"][
                          projects.indexOf(item)
                        ]
                      }
                    </Tag>
                  </div>
                </button>
              );
            })}
          </div>
          <Controls count={3} current={project} onChange={setProject} />
        </div>
      </section>
      <section className="container work-section" id="work">
        <div className="section-heading">
          <div>
            <h2>Our work in focus</h2>
            <p>
              Explore photographs from our company profile: structural
              fabrication,
              <br className="wide-break" /> industrial installations and
              engineering work on site.
            </p>
          </div>
          <Button href="#projects">Our work</Button>
        </div>
        <div className="focus-grid">
          <article>
            <button
              className="image-button"
              aria-label="View industrial fabrication and installation"
              onClick={() =>
                openGallery({
                  image: photos.focus,
                  title: "Industrial fabrication and installation",
                  description: "Fabrication, piping, tanks and work on site.",
                })
              }
            >
              <img
                src={photos.focus}
                alt="Green steelwork and industrial installations"
              />
            </button>
            <Tag>Project Gallery</Tag>
            <h3>Industrial fabrication and installation</h3>
            <p>
              A closer look at the industrial structures and installations
              featured in the Signode company profile. Our project gallery
              brings together photographs of fabrication, piping, tanks and work
              on site.
            </p>
          </article>
          <div className="focus-list">
            {[
              [
                "Engineering",
                "Industrial piping and installation works",
                "Practical engineering for industrial facilities…",
                photos.piping,
              ],
              [
                "Fabrication",
                "Structural steelwork and erection",
                "Explore steel fabrication and structural installation photographs…",
                photos.steel,
              ],
              [
                "On Site",
                "Engineering teams at work",
                "See the people and equipment behind our project delivery…",
                photos.hero,
              ],
            ].map(([tag, title, description, image]) => (
              <button
                key={title}
                onClick={() => openGallery({ image, title, description })}
              >
                <Tag>{tag}</Tag>
                <h3>{title}</h3>
                <p>{description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="container capabilities-section" id="capabilities">
        <div className="section-heading">
          <div>
            <h2>Our engineering capabilities</h2>
            <p>
              Explore the installations, equipment and project work featured
              <br className="wide-break" /> in our company profile.
            </p>
          </div>
          <Button href="/about#capabilities">Explore</Button>
        </div>
        <div className="capability-grid">
          {cards.map(([image, tag, title], i) => (
            <button
              key={title}
              className="capability-card"
              onClick={() =>
                openGallery({
                  image,
                  title,
                  description: "Signode Engineering",
                })
              }
            >
              <img src={image} alt={title} />
              <Tag>{tag}</Tag>
              <h3>{title}</h3>
              {i < 3 && <p>Signode Engineering</p>}
            </button>
          ))}
        </div>
      </section>
      <section
        className="container practice-section"
        aria-label="Engineering in practice"
      >
        <div className="practice-slide">
          <div>
            <h3>{practiceSlides[practice][0]}</h3>
            <p>{practiceSlides[practice][1]}</p>
            <a className="text-link" href={sitePath("/about")}>
              Find out more{" "}
              <span
                className="link-icon"
                aria-hidden="true"
                style={{ maskImage: `url("${a("51:406", "imgAfter")}")` }}
              />
            </a>
          </div>
          <img
            className="practice-image"
            src={practiceSlides[practice][2]}
            alt={practiceSlides[practice][0]}
          />
        </div>
        <Controls
          count={3}
          current={practice}
          onChange={setPractice}
          node="51:406"
        />
      </section>
    </>
  );
}
function About({ openGallery }: { openGallery: (item: GalleryItem) => void }) {
  const work = [
    [
      a("61:1657", "imgEngineeringProject"),
      "Inside industrial facilities",
      "Mechanical installations and project support.",
    ],
    [
      a("61:1657", "imgEngineeringProject1"),
      "Water infrastructure",
      "Engineering for essential infrastructure needs.",
    ],
    [
      a("61:1657", "imgEngineeringProject2"),
      "Equipment and installations",
      "Practical engineering at work on site.",
    ],
  ];
  return (
    <div className="about-page">
      <section className="about-hero navy">
        <div className="container">
          <p className="eyebrow">About Us / Signode Engineering Services Ltd</p>
          <div className="about-hero-story">
            <div>
              <h1>
                Built with expertise.
                <br />
                Delivered with integrity.
              </h1>
              <p>
                Practical engineering, fabrication and project support for
                Uganda’s industrial and infrastructure needs.
              </p>
              <Button href="/projects" light>
                Explore our work
              </Button>
            </div>
            <img
              src={a("61:1549", "imgStructuralFabricationProject")}
              alt="Signode structural fabrication project with green steel framework"
            />
          </div>
          <div className="hero-caption">
            <span>Engineering. Integrity. Safety.</span>
            <span>
              Structural fabrication • From the Signode company profile
            </span>
          </div>
        </div>
      </section>
      <section className="container about-company two-column">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>Engineering grounded in real-world needs.</h2>
        </div>
        <div className="narrative">
          <p>{companyDescription}</p>
          <p>
            Based in Uganda, our focus is on connecting technical understanding
            with practical workmanship. From fabrication to installation and
            on-site support, we approach each scope with care, clear
            communication and a commitment to quality.
          </p>
          <p className="navy-text">
            Practical solutions. Responsible delivery.
          </p>
        </div>
      </section>
      <section className="about-capabilities pale" id="capabilities">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we bring</p>
              <h2>Practical expertise. Connected capabilities.</h2>
            </div>
            <Button href="/#services">Services</Button>
          </div>
          <div className="about-capability-grid">
            <figure>
              <img
                src={a("61:1593", "imgIndustrialInstallation")}
                alt="Signode team carrying out fabrication and installation on site"
              />
              <figcaption>
                Fabrication and installation work from our company profile.
              </figcaption>
            </figure>
            <div>
              {capabilities.map(([title, description]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="about-values navy" id="values">
        <div className="container">
          <div className="two-column">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2>The principles behind our work.</h2>
            </div>
            <p>
              Quality and safety are not separate from delivery. They belong in
              how work is understood, planned and carried out — supported by an
              honest, practical approach.
            </p>
          </div>
          <div className="values-grid">
            {values.map(([title, commitment, description]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{commitment}</p>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container about-approach">
        <p className="eyebrow">How we work</p>
        <h2>A clear path from requirement to delivery.</h2>
        <div className="stages-grid">
          {stages.map(([title, description], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container about-work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Engineering in practice</p>
            <h2>A closer look at our work.</h2>
            <p>
              Photographs from the Signode company profile bring our
              fabrication, installation and infrastructure work into focus.
            </p>
          </div>
          <Button href="/projects">Projects</Button>
        </div>
        <div className="about-work-grid">
          {work.map(([image, title, description]) => (
            <button
              className="about-work-card"
              key={title}
              onClick={() => openGallery({ image, title, description })}
            >
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
function Footer({ about }: { about: boolean }) {
  return (
    <footer className="site-footer navy company-footer" id="contact">
      <div className="container">
        {about && (
          <div className="contact-cta">
            <div>
              <p className="eyebrow">Work with Signode</p>
              <h2>Let’s discuss your engineering needs.</h2>
              <p>
                Talk to us about your scope, site requirements and practical
                project support.
              </p>
            </div>
            <Button href="/contact" light>
              Contact Us
            </Button>
          </div>
        )}
        <div className="company-footer-grid">
          <div className="company-footer-brand">
            <a href={sitePath("/")} aria-label="Signode home">
              <img
                src={a("5:877", "imgSignodeEditableVectorLogo")}
                alt="Signode Engineering Services Ltd"
              />
            </a>
            <p>
              Practical engineering.
              <br />
              Quality workmanship.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <h2>Explore</h2>
            <a href={sitePath("/#services")}>Services</a>
            <a href={sitePath("/projects")}>Projects</a>
            <a href={sitePath("/about")}>About Us</a>
            <a href={sitePath("/about#clients")}>Our clients</a>
            <a href={sitePath("/contact")}>Contact Us</a>
          </nav>
          <div className="footer-contact-details">
            <h2>Let’s talk</h2>
            <a href={`mailto:${companyContact.email}`}>
              {companyContact.email}
            </a>
            <a href={companyContact.phones[0].href}>
              {companyContact.phones[0].label}
            </a>
            <a
              href={companyContact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: {companyContact.whatsapp}
            </a>
            <p>Jinja &amp; Kampala, Uganda</p>
            <a href={sitePath("/contact#offices")}>Our offices →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Signode Engineering Services Ltd.</small>
          <small>Built with expertise. Delivered with integrity.</small>
        </div>
      </div>
    </footer>
  );
}
function Gallery({ item, close }: { item: GalleryItem; close: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);
  return (
    <dialog
      className="gallery-dialog"
      ref={ref}
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      aria-labelledby="gallery-title"
    >
      <button
        className="gallery-close"
        onClick={close}
        aria-label="Close project photograph"
      >
        ×
      </button>
      <img src={item.image} alt={item.title} />
      <div>
        <h2 id="gallery-title">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </dialog>
  );
}
function App() {
  const routePath = window.location.pathname.startsWith(import.meta.env.BASE_URL)
    ? window.location.pathname.slice(import.meta.env.BASE_URL.length - 1)
    : window.location.pathname;
  const about = /^\/about(?:-us)?\/?$/.test(routePath);
  const projectPage = /^\/projects\/?$/.test(routePath);
  const contactPage = /^\/contact(?:s)?\/?$/.test(routePath);
  const [gallery, setGallery] = useState<GalleryItem | null>(null);
  useEffect(() => {
    document.title = `${contactPage ? "Contact Us" : about ? "About Us" : projectPage ? "Projects" : "Engineering ideas into reality"} | Signode Engineering Services Ltd`;
  }, [about, projectPage, contactPage]);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header
        about={about}
        projectPage={projectPage}
        contactPage={contactPage}
      />
      <main id="main">
        {contactPage ? (
          <Contact />
        ) : projectPage ? (
          <Projects openGallery={setGallery} />
        ) : about ? (
          <About openGallery={setGallery} />
        ) : (
          <Home openGallery={setGallery} />
        )}
        {!contactPage && !projectPage && <Clients />}
      </main>
      <Footer about={about} />
      {gallery && <Gallery item={gallery} close={() => setGallery(null)} />}
    </>
  );
}
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
