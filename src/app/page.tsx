import ProjCard from "./Components/projCards";

export default function Home() {
  function ArrowIcon() {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <div>
      <main className="md:ml-2 md:mr-2 lg:ml-4 lg:mr-4">
        {/* Hero*/}
        <div id="hero" className="mb-16">
          <h1 className="text-6xl mb-6 font-amarga text-blue-900 dark:text-beige-100">
            Ahmed Khaled
          </h1>
          <div className="font-spmI text-sm lg:text-base">
            <h2>
              computer science student, web dev, chronically online.
              <br />
              you&apos;re currently looking at my website built with{" "}
              <u>Next.js</u> and <u>Tailwind</u>{" "}
            </h2>
            <h2>
              a little bit about me:
              <ul className="lg:ml-10 ml-5 list-disc">
                <li>
                  in my sophomore year of pursuing a B.S in computer science @
                  ain shams university{" "}
                </li>
                <li>
                  currently an Intern at Banque Misr & web development team member at Open Source
                  Community FCIS{" "}
                </li>
                <li>competed in NASA Space Apps Cairo 2023 & competing again this year!</li>
                <li>
                  learning & writing code in a few languages mainly
                  Javascript/TypeScript, Rust, C++, Python{" "}
                </li>
              </ul>
            </h2>
            <ul className="font-sm mt-8 flex flex-row text-neutral-600 dark:text-neutral-300 ">
              <li>
                <a
                  className="lg:flex transition-all items-center hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ahmedkhaled14/"
                >
                  <ArrowIcon />
                  <p className="ml-2 lg:h-7">LinkedIn</p>
                </a>
              </li>{" "}
              &nbsp; &nbsp;
              <li>
                <a
                  className="lg:flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                  rel="noopener noreferrer"
                  href="mailto:63ahmedkhaled@gmail.com"
                >
                  <ArrowIcon />
                  <p className="ml-2 lg:h-7">email me</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div id="Projects" className="mb-0">
          <h1 className="text-6xl mb-8 text-orange-600 dark:text-dr font-amarga">
            projects    
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 xl:grid-cols-3 lg:grid-cols-2 font-spmR">
            <ProjCard
              href="https://github.com/TheGrandMasons/Naveris"
              link="_blank"
              name="Naveris"
              info="A NASA Space Apps 2023 AI Project which predicts natural disasters and provides early warnings"
            />
            <ProjCard
              href="https://github.com/a04k/OSC-Site"
              link="_blank"
              name="OSC Site"
              info="OSC (Open Source Community)'s web app built using the MERN Stack, kitted with a headless CMS"
            />
            <ProjCard
              href="https://github.com/a04k/c207proj"
              link="_blank"
              name="Club DB"
              info="A Club Database Project for my Database systems university course."
            />
            <ProjCard
              href="https://github.com/a04k/ak.dev.nxt"
              link="_blank"
              name="Portfolio"
              info="My Portfolio and blog website built with Next.js Typescript and TailwindCSS (The site you're currently visiting!)"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
