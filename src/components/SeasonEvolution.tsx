import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStrangerThings } from './StrangerThingsProvider';

interface Season {
  number: number;
  title: string;
  year: string;
  poster: string;
  changes: string[];
  commentary: string;
  theme: string;
}

const seasons: Season[] = [
  {
    number: 1,
    title: "The Vanishing of Will Byers",
    year: "2016",
    poster: "/lovable-uploads/6034b03a-4a19-46f9-a04f-32b04cb40e42.png",
    changes: [
      "Introduction of main characters",
      "Discovery of the Upside Down",
      "Hawkins Lab revelations",
      "Eleven's escape and powers"
    ],
    commentary: "The foundation season that established the nostalgic 80s aesthetic and supernatural horror elements.",
    theme: "Mystery & Discovery"
  },
  {
    number: 2,
    title: "The Mind Flayer",
    year: "2017",
    poster: "/lovable-uploads/8a57e37c-32ee-4fc2-9a57-25112f620def.png",
    changes: [
      "Will's PTSD and possession",
      "Introduction of Max and Billy",
      "The Shadow Monster/Mind Flayer",
      "Dart and the Demodogs"
    ],
    commentary: "Expanded the mythology while exploring trauma and the cost of heroism.",
    theme: "Corruption & Growth"
  },
  {
    number: 3,
    title: "The Battle of Starcourt",
    year: "2019",
    poster: "/lovable-uploads/59690d84-75c4-41c6-ac87-1c88c5b069b1.png",
    changes: [
      "Cold War tensions with Russians",
      "Starcourt Mall setting",
      "Billy's possession and sacrifice",
      "Hopper's apparent death"
    ],
    commentary: "Shifted to summer vibes while maintaining horror, focusing on growing up and sacrifice.",
    theme: "Coming of Age & Sacrifice"
  },
  {
    number: 4,
    title: "The Upside Down Strikes Back",
    year: "2022",
    poster: "/lovable-uploads/c3ed2138-cd09-41cc-b309-f1f7d540316f.png",
    changes: [
      "Vecna as the main antagonist",
      "Split storylines across multiple locations",
      "Eddie Munson and Hellfire Club",
      "Deeper Upside Down lore"
    ],
    commentary: "The darkest season yet, exploring trauma through Vecna's curse and expanding the supernatural mythology.",
    theme: "Darkness & Truth"
  }
];

export const SeasonEvolution: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-demogorgon-dark/20">
      <div className="container mx-auto max-w-7xl">
        <h2 className={`font-stranger text-3xl md:text-5xl text-center neon-title mb-16 ${upsideDownMode ? 'animate-glitch' : ''}`}>
          SEASON EVOLUTION
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {seasons.map((season, index) => (
            <Card 
              key={season.number}
              className={`bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 ${upsideDownMode ? 'animate-flicker' : ''} group`}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={season.poster}
                    alt={`Season ${season.number} Poster`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-demogorgon-dark/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-pixel text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Season {season.number}
                      </span>
                      <span className="font-retro text-xs text-accent">
                        {season.year}
                      </span>
                    </div>
                    <h3 className="font-retro text-lg text-foreground font-bold">
                      {season.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-retro text-sm text-accent mb-2 uppercase tracking-wide">
                      Theme: {season.theme}
                    </h4>
                    <p className="font-retro text-sm text-muted-foreground leading-relaxed">
                      {season.commentary}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-retro text-sm text-primary mb-3 uppercase tracking-wide">
                      Major Changes:
                    </h4>
                    <ul className="space-y-2">
                      {season.changes.map((change, changeIndex) => (
                        <li 
                          key={changeIndex}
                          className="font-retro text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1">•</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};