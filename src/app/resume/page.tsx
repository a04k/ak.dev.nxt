"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import DownloadBtn from "../Components/downloadBtn";
export default function Resume() {

  /* Old Download Icon Image Theme Functions (pre-svg)
  const { currTheme } = useTheme();
  // // from here to line 17 adds security to prevent this from running
  // // without the component being mounted yet, (svelte wouldve simplified this.)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // // this is absolutely awful and needs optimization, cant just fix a problem
  // // by throwing files at it.
  const imageSrc = currTheme === 'dark' ? '/Images/downloadIcon.png' : '/Images/downloadIconLight.png';
  */
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    console.log(isMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <main>
      <div className="font-amarga mb-10 dark:text-beige-100 text-blue-900 flex flex-row justify-between items-start" id="intro">
        <div className="flex-column mb-4 md:mb-0 max-w-[80%]">
          <h1 className="text-6xl mb-2">Ahmed Khaled</h1>
          <h2 className="lg:text-2xl md:text-xl text-base break-keep">
            Sophomore Computer Science Student, Junior Web Developer
          </h2>
        </div>
        <div className="hidden md:block md:mt-4 cursor-pointer">
          <DownloadBtn />
        </div>
      </div>
      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Education</h2>
        <hr />
        <div className="resumeItem">
          <h3 className="resumeContentTitle">
            {" "}
            Ain Shams University{" "}
            <span className="md:float-right md:flex hidden">Cairo, Egypt</span>
          </h3>
          <p className="resumeContent">
            Pursuing a Bachelor of Science in Computer Science{" "}
          </p>
          <p className="resumeContent font-spmR">
            Current GPA: <u>3.2</u>{" "}
          </p>
        </div>
      </div>
      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Technical Skills</h2>
        <hr />
        <div className="resumeItem">
          <p className="resumeContent">
            <span className="resumePoint">Programming Languages:</span>{" "}
              Javascript, Typescript incl. Front-end frameworks (React.js, Next.js, Svelte) & Back-end (Node, Express), CSS incl. (SASS &
              Tailwind), Python, C++, Rust{" "}
          </p>
          <p className="resumeContent">
            <span className="resumePoint">Developer Tools:</span>{" "}
            Git, Linux, VS Code, Visual Studio, Zed, Docker, Cargo, NPM, Bun, Postman{" "}
          </p>
          <p className="resumeContent">
            <span className="resumePoint">Design:</span> Adobe Photoshop, Adobe
            Illustrator, Figma{" "}
          </p>
          <p className="resumeContent">
            <span className="resumePoint">Microsoft Office:</span> Word, Excel,
            Powerpoint
          </p>
        </div>
      </div>
      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Experience</h2>
        <hr />
        <div className="resumeItem">
          <p className="resumeContentTitle">
            OSC FCIS
            <span className="md:float-right md:flex hidden">2024 Season</span>
          </p>
          <p className="resumeContent">Web Development Team Member </p>
          <p className="resumeContentTitle">
            Freelance Graphic Designer{" "}
            <span className="md:float-right md:flex hidden">2018-Current</span>
          </p>
          <p className="resumeContent">
            Mostly Gaming Community Related Designs
          </p>
        </div>
      </div>
      <div className="resumeSection">
        <h2 className="resumeSectionTitle">Projects</h2>
        <hr />
        <div className="resumeItem">
          <p className="resumeContentTitle">
            NAVERIS
            <span className="lg:float-right lg:flex hidden">
              NASA SPACE APPS 2023
            </span>
          </p>
          <p className="resumeContent">
            a NASA Space Apps 2023 AI project that predicts natural disasters' intensity and possible path using the latest
            satellite data and gives early warnings to potentially affected regions{" "}
          </p>
          <p className="resumeContent">
            contributed in designing the interface, gathering and mapping data
            obtained from the model&apos;s output, recieved a galactic problem
            solver certificate as recognition for the effort{" "}
          </p>
        </div>
      </div>
      <div className="resumeSection">
        <div className="resumeItem">
          <h2 className="resumeSectionTitle">Hobbies</h2>
          <hr />
          <p className="resumeContent mt-3">
            <span className="resumePoint">Programming:</span> i mostly do fun
            projects to challenge myself and learn
          </p>
          <p className="resumeContent">
            <span className="resumePoint">Motorsport:</span> passionate about
            everything motorsports especially formula 1
          </p>
          <p className="resumeContent">
            <span className="resumePoint">Gaming:</span> a bit of competitive
            fun (sometimes rage){" "}
          </p>
        </div>
        {/* download link for mobile*/}
        <div className="md:hidden mt-12 mb-0 text-center">
          <a href="/Files/AKResume.pdf" download="AKResume.pdf" className="text-orange-600 dark:text-beige-100 underline">
            Download Resume
          </a>
        </div>
      </div>
    </main>
  );
}
