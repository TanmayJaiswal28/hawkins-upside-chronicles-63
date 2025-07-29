import React from 'react';
import { Button } from '@/components/ui/button';
import { useStrangerThings } from './StrangerThingsProvider';

export const HeroSection: React.FC = () => {
  const { upsideDownMode, musicEnabled, toggleUpsideDown, toggleMusic } = useStrangerThings();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden vhs-overlay">
      {/* Background with character faces */}
      <div className="absolute inset-0 bg-gradient-to-br from-hawkins-blue via-background to-demogorgon-dark">
        {/* Large character faces in background */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/lovable-uploads/a13933b9-7996-431c-b22f-eeaba285002d.png" 
            alt="Mike" 
            className="absolute top-10 left-10 w-32 h-32 object-cover rounded-full border-2 border-primary/30 animate-float"
            style={{ animationDelay: '0s' }}
          />
          <img 
            src="/lovable-uploads/415865cd-4bdb-49a8-9049-020ddb133753.png" 
            alt="Eleven" 
            className="absolute top-20 right-20 w-40 h-40 object-cover rounded-full border-2 border-accent/30 animate-float"
            style={{ animationDelay: '1s' }}
          />
          <img 
            src="/lovable-uploads/581b3460-e234-4a00-a77c-f1d5513f9782.png" 
            alt="Lucas" 
            className="absolute bottom-32 left-16 w-36 h-36 object-cover rounded-full border-2 border-primary/30 animate-float"
            style={{ animationDelay: '2s' }}
          />
          <img 
            src="/lovable-uploads/67c9abe3-444b-459e-b5c6-98f9e1e147e6.png" 
            alt="Will" 
            className="absolute bottom-20 right-32 w-28 h-28 object-cover rounded-full border-2 border-accent/30 animate-float"
            style={{ animationDelay: '0.5s' }}
          />
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-glow rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Official Stranger Things Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/ff6d7bfc-5872-44d1-a065-e4e5e0da670f.png"
            alt="Stranger Things Logo"
            className={`mx-auto max-w-full h-auto max-h-40 md:max-h-60 ${upsideDownMode ? 'animate-glitch' : 'animate-pulse-red'}`}
          />
        </div>
        
        <p className={`font-retro text-lg md:text-xl text-accent mb-8 ${upsideDownMode ? 'animate-flicker' : ''}`}>
          Welcome to Hawkins Memorial
        </p>
        
        <p className="font-retro text-sm md:text-base text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          A tribute to the heroes, the lost, and the adventures that defined a generation. 
          From the depths of Hawkins Lab to the horrors of the Upside Down.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline"
            onClick={toggleUpsideDown}
            className={`font-pixel text-xs px-6 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${upsideDownMode ? 'animate-glitch' : ''}`}
          >
            {upsideDownMode ? 'RETURN TO HAWKINS' : 'ENTER UPSIDE DOWN'}
          </Button>
          
          <Button 
            variant="outline"
            onClick={toggleMusic}
            className={`font-pixel text-xs px-6 py-3 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ${musicEnabled ? 'animate-pulse-red' : ''}`}
          >
            {musicEnabled ? 'MUSIC: ON' : 'MUSIC: OFF'}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};