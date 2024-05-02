"use client";

import { useState, useEffect } from "react";

export default function CityTime() {
  const [currentTime, setCurrentTime] = useState('00:00'); // Initial value as string

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeInCairo = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Africa/Cairo',
        hour: 'numeric', 
        minute: 'numeric'
      });
      setCurrentTime(timeInCairo);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentTime]); // Empty dependency array for continuous updates

  return (
    <div>
      <p>Cairo {currentTime}</p>
    </div>
  );
}
