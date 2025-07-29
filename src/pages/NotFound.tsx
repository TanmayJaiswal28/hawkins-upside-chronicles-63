import React, { useEffect, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Glitch effect for the 404 text
    const glitchChars = "!@#$%^&*()404";
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < 3; i++) {
        result += glitchChars[Math.floor(Math.random() * glitchChars.length)];
      }
      setGlitchText(result);
      
      setTimeout(() => setGlitchText("404"), 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-hawkins-blue via-background to-demogorgon-dark relative overflow-hidden">
      {/* Upside Down particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-upside-down-red rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Static noise overlay */}
      <div className="absolute inset-0 opacity-10 vhs-overlay"></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        {/* Flickering lights effect */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-8 bg-upside-down-red rounded-full ${
                  Math.random() > 0.5 ? 'animate-flicker' : 'opacity-30'
                }`}
                style={{
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        <h1 className="font-stranger text-6xl md:text-8xl text-upside-down-red mb-6 glow-red animate-glitch">
          {glitchText}
        </h1>
        
        <h2 className="font-retro text-2xl md:text-3xl text-primary mb-6 animate-flicker">
          LOST IN THE UPSIDE DOWN
        </h2>
        
        <div className="font-retro text-lg text-muted-foreground mb-8 space-y-2">
          <p className="animate-pulse">The page you're looking for has vanished...</p>
          <p className="text-sm opacity-75">Just like Will Byers in 1983</p>
        </div>

        <div className="mb-8 p-6 border border-upside-down-red/30 bg-card/20 backdrop-blur-sm rounded-lg">
          <p className="font-pixel text-xs text-accent mb-4">
            ERROR_LOG_ENTRY_001:
          </p>
          <p className="font-retro text-sm text-muted-foreground">
            Route: <span className="text-upside-down-red">{location.pathname}</span><br/>
            Status: <span className="text-upside-down-red animate-flicker">MISSING</span><br/>
            Last Seen: <span className="text-accent">UNKNOWN</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            variant="outline"
            className="font-pixel text-xs px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-pulse-red"
          >
            <Link to="/">RETURN TO HAWKINS</Link>
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => window.history.back()}
            className="font-pixel text-xs px-6 py-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            ESCAPE THE UPSIDE DOWN
          </Button>
        </div>

        {/* Creepy message */}
        <div className="mt-12 text-center">
          <p className="font-stranger text-sm text-upside-down-red animate-flicker opacity-60">
            The walls between worlds are thin here...
          </p>
        </div>
      </div>

      {/* Background distortion effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-upside-down-red/5 to-transparent animate-pulse pointer-events-none"></div>
    </div>
  );
};

export default NotFound;