const assets = "/assets";

function Arrow({ src }: { src: string }) {
  return <img aria-hidden="true" className="arrow" src={`${assets}/${src}`} />;
}

function ProjectAction({
  children,
  href,
  tone,
}: {
  children: React.ReactNode;
  href?: string;
  tone: "yellow" | "red" | "violet";
}) {
  const className = `project-action project-action--${tone}`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <span className={className}>{children}</span>;
}

export default function App() {
  return (
    <main className="page">
      <div className="canvas">
        <header className="topbar">
          <img className="topbar__texture" src={`${assets}/0aa8c.png`} alt="" />
          <a className="signature signature--header" href="#home">
            Yadhu
          </a>
          <nav aria-label="Primary navigation">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#work">WORK</a>
            <a href="#projects">PROJECTS</a>
          </nav>
          <div className="socials">
            <a
              href="https://www.instagram.com/mr_yadhu/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img src={`${assets}/3aeb2.png`} alt="" />
            </a>
            <span aria-label="Facebook">
              <img src={`${assets}/c295e.png`} alt="" />
            </span>
            <span aria-label="X">
              <img src={`${assets}/2a0d6.png`} alt="" />
            </span>
          </div>
        </header>

        <section className="hero" id="home">
          <p className="hero__eyebrow">Hey i’m</p>
          <h1>YADHU</h1>
          <p className="hero__intro">
            A UI/UX designer who builds website and app interfaces Above all,
            UI/UX designers prioritize the user experience, ensuring that
            designs are intuitive, accessible, and enjoyable for users. I
            prioritize user needs in preparing UI designs
          </p>
        </section>

        <section className="goal" id="about" aria-label="Design goal">
          <p className="goal__number">1</p>
          <p className="goal__label">Goal</p>
          <p className="goal__statement">
            Designing
            <br />
            useful
            <br />
            products
          </p>
        </section>

        <section className="timeline" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading">Until now.....</h2>
          <div className="timeline__row timeline__row--internship">
            <div className="timeline__card timeline__card--dark">
              <p>
                UI ENGINEERING
                <br />
                INTERNSHIP AT
              </p>
              <div className="logo-crop logo-crop--imiot">
                <img src={`${assets}/ad5d6.png`} alt="Imiot" />
              </div>
            </div>
            <p className="timeline__date">
              June 2023
              <br />
              to
              <br />
              November 2023
            </p>
          </div>
          <div className="timeline__row timeline__row--qa">
            <p className="timeline__date">
              July 2026
              <br />
              to
              <br />
              October 2026
            </p>
            <div className="timeline__card timeline__card--light">
              <p>QUALITY ASSURANCE TRAINEE AT</p>
              <div className="logo-crop logo-crop--ls">
                <img src={`${assets}/b6411.png`} alt="LS Automotive" />
              </div>
            </div>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Designs in action</h2>

          <article className="project project--sports">
            <div className="project__art project__art--sports-left">
              <img src={`${assets}/214ae.png`} alt="Sports website screens" />
            </div>
            <div className="project__art project__art--sports-right">
              <img src={`${assets}/e4a7c.png`} alt="Sports player cards" />
            </div>
            <h3>sPORTS WEBSITE</h3>
            <ProjectAction tone="yellow">UI DESIGN</ProjectAction>
            <ProjectAction tone="yellow" href="#projects">
              FIGMA LINK <Arrow src="ee129.svg" />
            </ProjectAction>
          </article>

          <article className="project project--posters">
            <div className="poster-grid">
              <img src={`${assets}/a8337.png`} alt="Red sports poster" />
              <img src={`${assets}/7d83f.png`} alt="Fight-night poster" />
              <img src={`${assets}/82e36.png`} alt="Blue sports poster" />
            </div>
            <h3>POSTER DESIGNS</h3>
            <ProjectAction tone="red">GRAPHIC DESIGN</ProjectAction>
            <ProjectAction tone="red" href="#projects">
              FIGMA LINK <Arrow src="9c03e.svg" />
            </ProjectAction>
          </article>

          <article className="project project--brochures" id="projects">
            <div className="brochure-grid">
              <img src={`${assets}/0170e.png`} alt="EPL brochure front" />
              <img src={`${assets}/14b46.png`} alt="EPL brochure back" />
            </div>
            <h3>BROCHURE DESIGNS</h3>
            <ProjectAction tone="violet">TYPOGRAPHIC DESIGN</ProjectAction>
            <ProjectAction tone="violet" href="#home">
              FIGMA LINK <Arrow src="f1d3e.svg" />
            </ProjectAction>
          </article>
        </section>

        <footer>
          <h2>YADHU KRISHNA®</h2>
          <p className="footer__tagline">
            TURNING IDEAS INTO
            <br />
            INTUITIVE EXPERIENCES.
          </p>
          <a className="footer__email" href="mailto:yadhu2003krishna@gmail.com">
            YADHU2003KRISHNA@GMAIL.COM
          </a>
          <a
            className="footer__instagram"
            href="https://www.instagram.com/mr_yadhu/"
            target="_blank"
            rel="noreferrer"
          >
            INSTAGRAM <Arrow src="01c44.svg" />
          </a>
          <p className="signature signature--footer">Yadhu</p>
          <p className="footer__copyright">©2026 ALL RIGNTS RESERVED</p>
        </footer>
      </div>
    </main>
  );
}
