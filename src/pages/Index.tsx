import React from 'react';
import { StrangerThingsProvider } from '@/components/StrangerThingsProvider';
import { CountdownTimer } from '@/components/CountdownTimer';
import { HeroSection } from '@/components/HeroSection';
import { InteractiveTimeline } from '@/components/InteractiveTimeline';
import { SeasonEvolution } from '@/components/SeasonEvolution';
import { CharacterCards } from '@/components/CharacterCards';
import { HeroesWeLost } from '@/components/HeroesWeLost';
import { FloatingCharacters } from '@/components/FloatingCharacters';

const Index = () => {
  return (
    <StrangerThingsProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <FloatingCharacters />
        <CountdownTimer />
        
        {/* Add padding top to account for fixed countdown timer */}
        <div className="pt-20">
          <HeroSection />
          <InteractiveTimeline />
          <SeasonEvolution />
          <CharacterCards />
          <HeroesWeLost />
          
          {/* Footer */}
          <footer className="py-12 px-4 border-t border-border/30 bg-card/20 backdrop-blur-sm">
            <div className="container mx-auto max-w-4xl text-center">
              <h3 className="font-stranger text-xl stranger-neon mb-4">
                Hawkins Memorial
              </h3>
              <p className="font-retro text-sm text-muted-foreground mb-4">
                A tribute to Stranger Things and the heroes who saved our world from the Upside Down
              </p>
              <p className="font-pixel text-xs text-accent">
                Friends don't lie. Heroes never die.
              </p>
              
              {/* Easter egg */}
              <div className="mt-8 opacity-30">
                <p className="font-retro text-xs text-muted-foreground">
                  "In the vast darkness of space, we are not alone..."
                </p>
              </div>
            </div>
          </footer>
        </div>

        {/* Background music element (placeholder for future implementation) */}
        <audio 
          id="stranger-things-theme" 
          loop 
          preload="none"
          style={{ display: 'none' }}
        >
          {/* Audio source would go here */}
        </audio>
      </div>
    </StrangerThingsProvider>
  );
};

export default Index;