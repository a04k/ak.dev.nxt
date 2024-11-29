"use client";

import { useState, useEffect } from "react";

export default function CityTime() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const timeInCairo = new Date().toLocaleTimeString('en-UK', {
        timeZone: 'Africa/Cairo',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      });
      setCurrentTime(timeInCairo);
    };

    const syncToNextMinute = () => {
      const now = new Date();
      const secondsLeft = 60 - now.getSeconds();
      const msToNextMinute = secondsLeft * 1000;

      const timeoutId = setTimeout(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 60000);
        return () => clearInterval(intervalId);
      }, msToNextMinute);
      
      return () => clearTimeout(timeoutId);
    };

    updateTime();
    syncToNextMinute();
  }, []);

  return (
    <div>
      <p>Cairo {currentTime}</p>
    </div>
  );
}