"use client";

import { useState, useEffect } from "react";
export default function CityTime() {
  const [currentTime, setCurrentTime] = useState('00:00');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const options = {
        timeZone: 'Africa/Cairo',
        hour: 'numeric',
        minute: 'numeric',
      };
      const timeInCairo = new Date().toLocaleTimeString('en-US', options);
      setCurrentTime(timeInCairo);
    }, 1000); //making this update every minute doesnt give you a value onload, but also if it did you'll have incorrect times unless it loads on the first second of the new minute

    return () => clearInterval(intervalId); 
  }, [currentTime]); 

  return (
    <div>
      <p>Cairo {currentTime}</p>
    </div>
  );
}