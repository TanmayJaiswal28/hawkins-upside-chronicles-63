import React, { useState, useEffect } from 'react';
import { useStrangerThings } from './StrangerThingsProvider';

export const CountdownTimer: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // 119 days from now
    const targetDate = new Date(Date.now() + (119 * 24 * 60 * 60 * 1000)).getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border ${upsideDownMode ? 'animate-flicker' : ''}`}>
      <div className="container mx-auto px-4 py-2">
        <div className="text-center">
          <h2 className={`font-stranger text-lg md:text-xl neon-title ${upsideDownMode ? 'animate-glitch' : ''}`}>
            Stranger Things Finale Countdown
          </h2>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className={`font-pixel text-xl md:text-2xl text-accent ${upsideDownMode ? 'animate-glitch' : ''}`}>
                  {String(value).padStart(2, '0')}
                </div>
                <div className="font-retro text-xs text-muted-foreground uppercase">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};