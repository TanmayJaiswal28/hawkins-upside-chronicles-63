import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStrangerThings } from './StrangerThingsProvider';

interface FallenHero {
  id: number;
  name: string;
  nickname?: string;
  season: number;
  sacrifice: string;
  legacy: string;
  quote: string;
  image?: string;
}

const fallenHeroes: FallenHero[] = [
  {
    id: 1,
    name: "Eddie Munson",
    nickname: "The Freak",
    season: 4,
    sacrifice: "Distracted the demobats in the Upside Down, allowing Nancy, Steve, and Robin to reach Vecna.",
    legacy: "Proved that heroes come in all forms. His courage redeemed him in the eyes of Hawkins.",
    quote: "I didn't run this time, right?",
    image: "/lovable-uploads/4fa4c1f9-6658-4895-8f82-5e4eb5311e5c.png"
  },
  {
    id: 2,
    name: "Bob Newby",
    nickname: "Bob the Brain",
    season: 2,
    sacrifice: "Stayed behind at Hawkins Lab to manually reset the security systems, saving Joyce and Hopper.",
    legacy: "Showed that ordinary people can be extraordinary heroes when it matters most.",
    quote: "Sometimes it's better to stop running."
  },
  {
    id: 3,
    name: "Billy Hargrove",
    nickname: "The Lifeguard",
    season: 3,
    sacrifice: "Broke free from the Mind Flayer's control to protect Eleven and the group at Starcourt Mall.",
    legacy: "Found redemption in his final moments, choosing love over hate.",
    quote: "I'm sorry."
  },
  {
    id: 4,
    name: "Dr. Martin Brenner",
    nickname: "Papa",
    season: 4,
    sacrifice: "Died protecting Eleven from military forces, finally showing genuine care for her.",
    legacy: "Complex figure whose final act was one of protection, not control.",
    quote: "You are very special to me, Eleven."
  }
];

export const HeroesWeLost: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-demogorgon-dark/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className={`font-stranger text-3xl md:text-5xl text-center neon-title mb-8 ${upsideDownMode ? 'animate-glitch' : ''}`}>
          HEROES WE LOST
        </h2>
        
        <p className="font-retro text-center text-muted-foreground mb-16 text-sm max-w-2xl mx-auto">
          In memory of those who made the ultimate sacrifice for Hawkins and the ones they loved.
          Their courage echoes through the Upside Down and beyond.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fallenHeroes.map((hero, index) => (
            <Card 
              key={hero.id}
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 ${upsideDownMode ? 'animate-flicker' : ''} group overflow-hidden`}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Memorial flame effect */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-primary rounded-full animate-pulse-red z-10"></div>
                  
                  {hero.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={hero.image}
                        alt={hero.name}
                        className="w-full h-full object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-demogorgon-dark/90 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="font-retro text-xl text-foreground font-bold">
                        {hero.name}
                      </h3>
                      {hero.nickname && (
                        <span className="font-pixel text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                          {hero.nickname}
                        </span>
                      )}
                      <span className="font-pixel text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        Season {hero.season}
                      </span>
                    </div>

                    <blockquote className="font-retro text-sm text-accent italic mb-4 border-l-2 border-accent pl-4">
                      "{hero.quote}"
                    </blockquote>

                    <div className="mb-4">
                      <h4 className="font-retro text-xs text-primary mb-2 uppercase tracking-wide">
                        Their Sacrifice:
                      </h4>
                      <p className="font-retro text-xs text-muted-foreground leading-relaxed">
                        {hero.sacrifice}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-retro text-xs text-primary mb-2 uppercase tracking-wide">
                        Their Legacy:
                      </h4>
                      <p className="font-retro text-xs text-muted-foreground leading-relaxed">
                        {hero.legacy}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Memorial message */}
        <div className="text-center mt-16">
          <div className={`inline-block border border-primary/30 bg-card/50 backdrop-blur-sm rounded-lg p-6 ${upsideDownMode ? 'animate-flicker' : ''}`}>
            <h3 className="font-stranger text-lg stranger-neon mb-3">
              Never Forgotten
            </h3>
            <p className="font-retro text-xs text-muted-foreground max-w-md">
              They faced the darkness so others could live in the light. 
              In Hawkins, heroes aren't born—they're made in moments of impossible choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};