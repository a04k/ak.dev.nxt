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
      <main>
        {/* Hero*/}
        <div id="hero" className="mb-16">
          <h1 className="text-7xl mb-5 font-amarga text-blue-900 dark:text-white">
            Ahmed Khaled
          </h1>
          <div className="font-spmI text-sm lg:text-base">
            <h2>computer science student, chronically online.</h2>
            <h2>
              a little bit about me:
              <ul className="lg:ml-10 ml-5 list-disc lg:py-2">
                <li>
                  In my Junior year of pursuing a B.S in computer science @ ain
                  shams university{" "}
                </li>
                <li>
                  Interned at Banque Misr & CIB Summer 2024, Current web
                  development team member at Open Source Community{" "}
                </li>
                <li>
                  Finalist at Google GDG AI Finance Hackathon Cairo on team
                  Masons
                </li>
                <li>Competed in NASA Space Apps Cairo 2024 & 2023</li>
                <li>Enjoy Writing (sometimes terrible) code </li>
              </ul>
            </h2>
            <ul className="font-base mt-8 flex flex-row text-neutral-600 dark:text-neutral-300 ">
              <li>
                <a
                  className="lg:flex transition-all items-center dark:text-red-600 md:dark:text-white hover:text-neutral-800 dark:hover:text-red-800 md:dark:hover:text-red-600"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/a04k/"
                >
                  <ArrowIcon />
                  <p className="ml-2 lg:h-7">LinkedIn</p>
                </a>
              </li>{" "}
              &nbsp; &nbsp;
              <li>
                <a
                  className="lg:flex items-center transition-all dark:text-red-600 md:dark:text-white hover:text-neutral-800 dark:hover:text-red-800 md:dark:hover:text-red-600"
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
          <h1 className="text-7xl mb-9 md:mb-8 text-orange-600 dark:text-petronas-400 font-amarga">
            projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 xl:grid-cols-3 lg:grid-cols-2 font-spmR">
            <ProjCard
              href="https://github.com/TheGrandMasons/repai"
              link="_blank"
              name="Repai - Finalist Google GDG Hackathon"
              info="an AI-powered recycling platform that incentivizes eco-friendly behavior through
                cashback rewards on a digital wallet. The app uses real-time object detection to identify recyclables,
                calculate value, and facilitate convenient collection or redemption."
            />
            <ProjCard
              href="https://github.com/TheGrandMasons/orbit"
              link="_blank"
              name="Orbit"
              info="Orbit is a NASA Space Apps 2024 3D Solar System Orrery for the web built using Three.JS, Next.js and Gemini, bringing space exploration to both classrooms and hobbyists while making it fun with an interactive learning experience including achievements and medals"
            />
            <ProjCard
              href="https://github.com/TheGrandMasons/Naveris"
              link="_blank"
              name="Naveris"
              info="A NASA Space Apps 2023 AI Project built on a custom fine tuned model using NASA provided data which can predict natural disasters (Hurricanes, Tropical Storms, Snowstorms, Tornadoes) and provide early warnings to possibly affected regions"
            />
            <ProjCard
              href="https://github.com/a04k/wisewallet"
              link="_blank"
              name="WiseWallet"
              info="A Simple Personal Finances Assistant application built using Flutter with AI Powered Statistics, Tips and a personal AI chatbot assistant"
            />
            <ProjCard
              href="https://github.com/a04k/OSC-Site"
              link="_blank"
              name="OSC Site"
              info="OSC (Open Source Community)'s web app built using the MERN Stack, kitted with a headless CMS to ease the management of content"
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
