import React from 'react';

const DownloadBtn = () => {
  return (
    <a
      href="/Files/AKResume.pdf"
      download="AKResume.pdf"
      className="flex items-center justify-center"
    >
      {/*added tailwind sizing classes to size for smaller devices (deprecated featuere now) */}
      <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    
        <g id="SVGRepo_iconCarrier">
          <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
    </a>
  );
};

export default DownloadBtn;