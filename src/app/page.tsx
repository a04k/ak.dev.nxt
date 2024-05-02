import DefCard from "./Components/defaultCards";

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
      <main className="ml-4">
      {/* Hero*/}
      <div id="hero" className="mb-16">
        <h1 className="text-6xl mb-6 font-amarga dark:text-emerald-600 text-emerald-800">Ahmed Khaled</h1>

        <div className="font-spmI text-sm lg:text-base">
          <h2>
            computer science student, web dev, chronically online.
            <br/>you&apos;re currently looking at my website built with{" "}
            <u>Next.js</u> and <u>Tailwind</u>{" "}
          </h2>
          <h2>
            a little bit about me:
            <ul className="lg:ml-10 ml-5 list-disc">
              <li>in my sophomore year of pursuing a B.S in computer science @ ain shams university </li>
              <li>learning & writing code in a few languages mainly Javascript/TypeScript, C++, Python </li>
              <li>sometimes do a bit of design work mainly graphic design but also UI</li>
              <li>currently a backend development team member at Open Source Community FCIS </li>
              <li>competed in NASA Space Apps Cairo Hackathon 2023</li>
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
            </li> &nbsp; &nbsp;
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
        <h1 className="text-6xl mb-6 dark:text-amber-500 text-amber-600 font-amarga">projects</h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 font-spmR">
          <DefCard
            href="https://github.com/TheGrandMasons/Naveris"
            link="_blank"
            name="Naveris"
            info="A NASA Space Apps 2023 AI Project which predicts natural disasters and provides early warnings"
          />
          <DefCard
            href="https://github.com/a04k/c207proj"
            link="_blank"
            name="Club DB"
            info="A Club Database Project for my COMP207 Database systems university course."
          />
          <DefCard
            href="https://github.com/a04k/ak.dev.nxt"
            link="_blank"
            name="Portfolio"
            info="My Portfolio and blog website built with Next.js Typescript and TailwindCSS (The site you're currently visiting!)"
          />
          <DefCard
            href="https://github.com/a04k/"
            link="_blank"
            name="OSC Site"
            info="OSC (Open Source Community)'s web app built using the MERN Stack, kitted with a headless CMS"
          />
        </div>
      </div>
    </main>
    </div>
  );
}
