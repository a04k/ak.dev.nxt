export default function Resume(){
  return (
    <main className="mb-16">
      <div className="font-amarga mb-10 dark:text-emerald-600 text-emerald-800" id="intro">
        <h1 className="lg:text-5xl text-4xl" >Ahmed Khaled</h1>
        <h2 className="lg:text-2xl text-base">Sophomore Computer Science Student , Junior Web Developer </h2> 
      </div>
      <div className="resumeSection">
        <h2 className='resumeSectionTitle'>Education</h2><hr/>
          <div className="resumeItem">
            <h3 className="resumeContentTitle"> Ain Shams University <span className="lg:float-right lg:flex hidden">Cairo, Egypt</span></h3>
            <p className="resumeContent">Pursuing a Bachelor of Science in Computer Science </p>
            <p className="resumeContent">Current GPA: <u>3.3</u> </p>
          </div>
      </div>
      <div className="resumeSection">
        <h2 className='resumeSectionTitle'>Technical Skills</h2><hr/>
        <div className="resumeItem">
            <p className="resumeContent"><span className="resumePoint">Programming Languages:</span> Javascript + frameworks (React.js, Next.js) + CSS incl. (SASS & Tailwind), Python, C++ </p>
            <p className="resumeContent"><span className="resumePoint">Design:</span> Adobe Photoshop, Adobe Illustrator, Figma </p>
            <p className="resumeContent"><span className="resumePoint">Microsoft Office:</span> Word, Excel, Powerpoint</p>
          </div>
        </div>
      <div className="resumeSection">
      <h2 className='resumeSectionTitle'>Experience</h2><hr/>
      <div className="resumeItem">
        <p className="resumeContentTitle">OSC FCIS<span className="lg:float-right lg:flex hidden">2024 Season</span></p>
          <p className="resumeContent">Back End Web Development Team Member </p>      
        <p className="resumeContentTitle">Freelance Graphic Designer <span className="lg:float-right lg:flex hidden">2018-Current</span></p>
          <p className="resumeContent">Mostly Gaming Community Related Designs</p>
        </div>
      </div>
      <div className="resumeSection">
      <h2 className='resumeSectionTitle'>Projects</h2><hr/>
      <div className="resumeItem">
      <p className="resumeContentTitle">NAVERIS<span className="lg:float-right lg:flex hidden">NASA SPACE APPS 2023</span></p>
        <p className="resumeContent">an app that predicts natural disasters using AI continously fed by data and gives early warnings to potential affected areas </p>  
        <p className="resumeContent">contributed in designing the interface, gathering and mapping data obtained from the model&apos;s output, recieved a galactic problem solver certificate as recognition for the effort </p>  
      </div>
      </div>
      <div className="resumeSection">
      <div className="resumeItem">
        <h2 className='resumeSectionTitle'>Hobbies</h2><hr/>
            <p className="resumeContent mt-3"><span className="resumePoint">Programming:</span> i mostly do fun projects to challenge myself and learn</p>
            <p className="resumeContent"><span className="resumePoint">Motorsport:</span> passionate about everything motorsports especially formula 1</p>
            <p className="resumeContent"><span className="resumePoint">Gaming:</span> a bit of competitive fun (sometimes rage) </p>
        </div>
      </div>
    </main>
  );
}

