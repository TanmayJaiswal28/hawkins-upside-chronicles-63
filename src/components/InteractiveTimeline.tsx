import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStrangerThings } from './StrangerThingsProvider';

interface TimelineEvent {
  id: number;
  season: number;
  year: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    season: 1,
    year: "1983",
    title: "Will's Disappearance",
    description: "Will Byers vanishes while biking home from a D&D campaign. The Upside Down is discovered, and Eleven escapes Hawkins Lab."
  },
  {
    id: 2,
    season: 1,
    year: "1983",
    title: "The Demogorgon Hunt",
    description: "The boys search for Will while Eleven helps them fight the Demogorgon. Joyce and Hopper uncover the truth about Hawkins Lab."
  },
  {
    id: 3,
    season: 2,
    year: "1984",
    title: "The Mind Flayer Emerges",
    description: "Will's connection to the Upside Down grows stronger. The Mind Flayer infiltrates Hawkins through Will, and the Shadow Monster rises."
  },
  {
    id: 4,
    season: 2,
    year: "1984",
    title: "The Gate Closes",
    description: "Eleven closes the gate to the Upside Down, but not before the Mind Flayer marks Will. The Snow Ball dance brings hope."
  },
  {
    id: 5,
    season: 3,
    year: "1985",
    title: "The Russians Arrive",
    description: "A secret Russian facility beneath Starcourt Mall attempts to reopen the gate. The Mind Flayer possesses Billy and creates an army."
  },
  {
    id: 6,
    season: 3,
    year: "1985",
    title: "The Battle of Starcourt",
    description: "Billy sacrifices himself to save Eleven. Hopper seemingly dies closing the Russian gate. The Byers family leaves Hawkins."
  },
  {
    id: 7,
    season: 4,
    year: "1986",
    title: "Vecna's Curse",
    description: "A new threat emerges as Vecna targets Hawkins teenagers. Max becomes his primary target while Eleven works to regain her powers."
  },
  {
    id: 8,
    season: 4,
    year: "1986",
    title: "The Final Battle",
    description: "The gang splits up to fight Vecna on multiple fronts. Eddie Munson sacrifices himself, and the Upside Down begins to bleed into Hawkins."
  }
];

export const InteractiveTimeline: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();
  const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = parseInt(entry.target.getAttribute('data-event-id') || '0');
            setVisibleEvents(prev => new Set(prev).add(eventId));
          }
        });
      },
      { threshold: 0.3 }
    );

    const eventElements = document.querySelectorAll('[data-event-id]');
    eventElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className={`font-stranger text-3xl md:text-5xl text-center neon-title mb-16 ${upsideDownMode ? 'animate-glitch' : ''}`}>
          THE HAWKINS CHRONICLES
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-60"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              data-event-id={event.id}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-primary bg-background z-10 ${visibleEvents.has(event.id) ? 'animate-pulse-red' : ''}`}></div>

              {/* Content card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card 
                  className={`transition-all duration-700 transform ${
                    visibleEvents.has(event.id) 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  } ${upsideDownMode ? 'animate-flicker' : ''} bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-pixel text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Season {event.season}
                      </span>
                      <span className="font-retro text-sm text-accent">
                        {event.year}
                      </span>
                    </div>
                    
                    <h3 className={`font-retro text-lg md:text-xl text-foreground mb-3 ${upsideDownMode ? 'text-primary' : ''}`}>
                      {event.title}
                    </h3>
                    
                    <p className="font-retro text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};