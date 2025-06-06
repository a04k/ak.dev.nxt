"use client";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Image from "next/image";
import DownloadBtn from "../Components/downloadBtn";

  // Old Download Icon Image Theme Functions (pre-svg)
  // const { resolvedTheme } = useTheme();
  // // from here to line 17 adds security to prevent this from running
  // // without the component being mounted yet, (svelte wouldve simplified this.)
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return null;

  // // this is absolutely awful and needs optimization, cant just fix a problem
  // // by throwing files at it.
  // const imageSrc = currTheme === 'dark' ? '/Images/downloadIcon.png' : '/Images/downloadIconLight.png';
  // */
  
  // const [isMobile, setIsMobile] = useState(false);

export default function Resume() {
  return (
    <main>
      <div
        className="font-amarga mb-10 flex flex-col lg:flex-row justify-between"
        id="intro"
      >
        <div className="flex-1">
          <h1 className="text-[3rem] md:text-5xl lg:text-8xl whitespace-nowrap mb-0 dark:text-white">Ahmed Khaled</h1>
          <h2 className="lg:text-[1.3rem] md:text-xl text-[1.15rem] dark:text-petronas-300 text-orange-800">
            Junior Computer Science Student, Software Engineer
          </h2>
        </div>
        <div className="hidden lg:block lg:ml-10 mt-4 w-14 cursor-pointer text-orange-700 dark:text-red-800">
          <DownloadBtn />
        </div>
      </div>

      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Education</h2>
        <hr />
        <div className="resumeItem">
          <h3 className="resumeContentTitle">
            Ain Shams University
            <span className="lg:float-right lg:flex hidden">Cairo, Egypt</span>
          </h3>
          <p className="resumeContent mb-2">
            Pursuing a Bachelors Degree in Computer Science
          </p>
          <p className="resumeContent">
            Expected Graduation: 2026
          </p>

        </div>
      </div>

      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Experience</h2>
        <hr />
        <div className="resumeItem">

        <p className="resumeContentTitle">
            Banque Misr | Intern Software QA/QC Engineer 
            <span className="lg:float-right lg:flex hidden">Summer &apos;24</span>
          </p>
          <ul className="resumeContent">
            <p className="mb-4">
              Developed strong skills in automated & manual testing, learned about
              Agile methodologies, and various testing techniques. Contributed to
              ensuring software quality and efficiency through hands-on experience
              with industry-standard tools and processes.
            </p>
            <li>• Collaborated within an Agile framework to enhance software quality</li>
            <li>• Automated testing processes using Cypress</li>
            <li>• Managed testing workflows using Jira and Zephyr Scale</li>
            <li>• Learned about both manual testing & automation</li>
          </ul>
          <p className="resumeContentTitle">
            CIB | Internship Trainee
            <span className="lg:float-right lg:flex hidden">Summer &apos;24</span>
          </p>
          <ul className="resumeContent">
            <li>• Explored Topics such as Data Literacy, Data Analytics & Cybersecurity</li> 
            <li>• Learned About the Digital Transformation at CIB</li>
            <li>• Gained knowledge around fintech and banking sector operations</li>
          </ul>
          <p className="resumeContentTitle">
            Open Source Community FCIS | Web Dev. Team Member
          </p>
          <ul className="resumeContent">
            <li>• Delivered multiple sessions and lectures on various web development topics</li>
            <li>
              • Contributed to the development of a community web app using the MERN
              Stack
            </li>
            <li>
              • Worked closely with developers from various teams to ensure project
              success
            </li>
          </ul>
          <p className="resumeContentTitle">
            Freelance Graphic Design
          </p>
          <p className="resumeContent">
            Worked on creating many designs for multiple clients (Mostly gaming community-related)
          </p>
        </div>
      </div>

      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Projects</h2>
        <hr />
        <div className="resumeItem">
          <p className="resumeContentTitle">
            Repai
            <span className="lg:float-right lg:flex hidden">  
             Finalist @ Google GDG Finance AI Hackathon
            </span>
          </p>
          <p className="resumeContent">
            an AI-powered recycling platform that incentivizes eco-friendly behavior through
            cashback rewards on a digital wallet. The app uses real-time object detection to identify recyclables,
            calculate value, and facilitate convenient collection or redemption.
          </p>
          <p className="resumeContent mb-2">
           •  Used Image Detection & Google Gemini for object detection of recyclable materials
          </p>
          <p className="resumeContent mb-2">
          • Assigned real-time, market-based value to scanned items based on materials, size & more
          </p>
          <p className="resumeContent mb-2">
          • Enabled cashback accumulation and redemption through eco-partner locations or collector pickups
          </p>
          <p className="resumeContent mb-2">
          •  Promoted sustainable habits through AI-driven automation and user rewards
          </p>
        </div>
        <div className="resumeItem">
          <p className="resumeContentTitle">
            Orbit
            <span className="lg:float-right lg:flex hidden">  
              NASA SPACE APPS 2024
            </span>
          </p>
          <p className="resumeContent">
            A NASA Space Apps 2024 3D Web App (Built using Next.js + The powerful Three.js library) which brings
            space exploration to the masses, made with the classroom in mind, Orbit provides a unique interactive
            experience for students and hobbyists to explore the solar system with its planets, moons and asteroids
            while also having quests, achievements and medals for users to unlock and an AI powered chat buddy to
            interact with and answer questions to boost and enhance the learning experience.{" "}
          </p>
          <p className="resumeContent">
            Built an AI chatbot app using Gemini 2.0 Flash, Contributed to mapping the planets & their orbits using complex equations, rendering them using Three.JS, adding description screens and labels to the celestial bodies and scene controls.
          </p>
          <p className="resumeContent">
            Received a Galactic Problem Solver certificate as recognition for the effort.
          </p>
        </div>
        <div className="resumeItem">
          <p className="resumeContentTitle">
            NAVERIS
            <span className="lg:float-right lg:flex hidden">
              NASA SPACE APPS 2023
            </span>
          </p>
          <p className="resumeContent">
            a NASA Space Apps 2023 AI project that predicts natural disasters intensity and possible path using the latest
            satellite data and gives early warnings to potentially affected regions{" "}
          </p>
          <p className="resumeContent">
            Contributed to designing the interface, gathering and mapping data
            obtained from the model&apos;s output.
          </p>
          <p className="resumeContent">
            Received a Galactic Problem Solver certificate as recognition for the effort.
          </p>
        </div>
      </div>

      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Skills & Abilities</h2>
        <hr />
        <div className="resumeItem">
            <p className="skill">
              <span className="resumePoint">Programming:</span> Proficient in JavaScript, TypeScript, React.js, Next.js, Angular, Tailwind CSS, Bootstrap, Node.js, MongoDB, SQL, Python, C, C++, PHP, Go, Java
            </p>
            <p className="skill">
              <span className="resumePoint">Software Testing:</span>  Cypress, Selenium (basics), Manual (HLS, Test Cases..), Zephyr 
            </p>
            <p className="skill">
              <span className="resumePoint">Version Control:</span> Git, GitHub, GitLab
            </p>
            <p className="skill">
              <span className="resumePoint">Agile Methodology:</span> Knowledgeable in Agile practices and work environments
            </p>
            <p className="skill">
              <span className="resumePoint">Graphic Design/UI:</span> Adobe Photoshop, Adobe Illustrator & Figma
            </p>
            <p>
              <span className="resumePoint">Soft Skills:</span> Quick learner with strong adaptability, problem-solving abilities, and effective communication skills
            </p>
        </div>
      </div>

      <div className="resumeSection">
        <div className="resumeItem">
          <h2 className="resumeSectionTitle">Hobbies</h2>
          <hr />
          <p className="skill mt-3">
            <span className="resumePoint">Programming:</span> I mostly do fun
            projects to challenge myself and learn.
          </p>
          <p className="skill">
            <span className="resumePoint">Motorsport:</span> Passionate about
            everything motorsports, especially Formula 1.
          </p>
          <p className="skillt">
            <span className="resumePoint">Gaming:</span> A bit of competitive
            fun.
          </p>
        </div>
        {/* download link for mobile*/}
        <div className="md:hidden mt-12 mb-0 text-center">
          <a href="/Files/AKResume.pdf" download="AKResume.pdf" className="text-orange-600 dark:text-petronas-400 underline">
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
