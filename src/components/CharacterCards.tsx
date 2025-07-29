import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useStrangerThings } from './StrangerThingsProvider';

interface Character {
  id: number;
  name: string;
  image: string;
  quote: string;
  growth: string;
  role: string;
  relationships: string[];
}

const characters: Character[] = [
  {
    id: 1,
    name: "Eleven",
    image: "/lovable-uploads/c25d3dbb-ced6-45c2-849d-09864ad84572.png",
    quote: "Friends don't lie.",
    growth: "From a terrified lab experiment to a powerful young woman learning to navigate friendship, love, and her identity.",
    role: "The heart of the supernatural elements",
    relationships: ["Mike Wheeler (boyfriend)", "Hopper (father figure)", "Max (best friend)"]
  },
  {
    id: 2,
    name: "Mike Wheeler",
    image: "/lovable-uploads/dcca2218-b3f2-4838-869d-02a6ae2a4561.png",
    quote: "She's our friend and she's crazy!",
    growth: "From eager D&D player to devoted boyfriend and loyal friend, learning to balance relationships and responsibility.",
    role: "The emotional anchor of the group",
    relationships: ["Eleven (girlfriend)", "Will (best friend)", "Dustin & Lucas (party members)"]
  },
  {
    id: 3,
    name: "Will Byers",
    image: "/lovable-uploads/9b303b6a-eaa1-4f65-8839-7618be626420.png",
    quote: "Now I know you're lying.",
    growth: "Survivor of the Upside Down, dealing with trauma while maintaining his creativity and sensitivity.",
    role: "The catalyst for the series' events",
    relationships: ["Joyce (mother)", "Jonathan (brother)", "The Party (best friends)"]
  },
  {
    id: 4,
    name: "Lucas Sinclair",
    image: "/lovable-uploads/a59c566d-f5cd-4e2b-8c60-2f09cb67f8c6.png",
    quote: "We have a lot of rules in our party, but the most important is friends don't lie.",
    growth: "The practical skeptic who learns to trust others while standing up for what's right.",
    role: "The voice of reason in the group",
    relationships: ["Max (girlfriend)", "The Party (best friends)", "Erica (sister)"]
  },
  {
    id: 5,
    name: "Max Mayfield",
    image: "/lovable-uploads/a23a389c-cc8c-42fb-bd51-91d074a1297d.png",
    quote: "I'm not going anywhere.",
    growth: "Tough exterior hiding deep pain, learning to open up and accept help from friends.",
    role: "The group's fierce protector",
    relationships: ["Lucas (boyfriend)", "Eleven (best friend)", "Billy (step-brother)"]
  },
  {
    id: 6,
    name: "Steve Harrington",
    image: "/lovable-uploads/6e3842eb-e789-4373-818e-00392a99cf86.png",
    quote: "I may be a pretty shitty boyfriend, but turns out I'm actually a pretty damn good babysitter.",
    growth: "From popular jock to beloved protector, finding his true calling in caring for others.",
    role: "The unexpected hero and protector",
    relationships: ["Dustin (surrogate little brother)", "Robin (best friend)", "Nancy (ex-girlfriend)"]
  },
  {
    id: 7,
    name: "Nancy Wheeler",
    image: "/lovable-uploads/5c58fefe-2c57-4a3f-aced-4a143ff58ab6.png",
    quote: "I want to finish what we started. I want to kill it.",
    growth: "From popular student to determined investigative journalist, never backing down from a fight.",
    role: "The determined investigator",
    relationships: ["Jonathan (boyfriend)", "Steve (ex-boyfriend)", "Mike (brother)"]
  },
  {
    id: 8,
    name: "Eddie Munson",
    image: "/lovable-uploads/103f7678-b1f3-4527-b621-67271e3c4a60.png",
    quote: "This year is different. This year is my year.",
    growth: "From misunderstood metalhead outcast to unlikely hero who makes the ultimate sacrifice.",
    role: "The unexpected hero and dungeon master",
    relationships: ["Dustin (mentee)", "Hellfire Club (D&D group)", "Chrissy (friend)"]
  },
  {
    id: 9,
    name: "Jim Hopper",
    image: "/lovable-uploads/8860d53e-b9fe-4b91-9e79-6e28fc83a7ea.png",
    quote: "Mornings are for coffee and contemplation.",
    growth: "From broken, cynical cop to protective father figure willing to sacrifice everything for his loved ones.",
    role: "The protective father figure",
    relationships: ["Eleven (adopted daughter)", "Joyce (love interest)", "Sara (deceased daughter)"]
  }
];

export const CharacterCards: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const handleCardFlip = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-demogorgon-dark/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className={`font-stranger text-3xl md:text-5xl text-center neon-title mb-16 ${upsideDownMode ? 'animate-glitch' : ''}`}>
          HEROES OF HAWKINS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="character-card-container h-96 perspective-1000"
              onClick={() => handleCardFlip(character.id)}
            >
              <div
                className={`character-card relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
                  flippedCards.has(character.id) ? 'rotate-y-180' : ''
                } ${upsideDownMode ? 'animate-flicker' : ''}`}
              >
                {/* Front side - Much larger character focus */}
                <Card className="character-card-front absolute inset-0 w-full h-full backface-hidden bg-card/95 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/30 overflow-hidden">
                  <CardContent className="p-0 h-full flex flex-col relative group">
                    {/* Character image takes up most of the card */}
                    <div className="relative flex-1 overflow-hidden">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                      />
                      {/* Stronger gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-demogorgon-dark via-demogorgon-dark/60 to-transparent"></div>
                      
                      {/* Character name overlay on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="font-retro text-xl text-foreground font-bold mb-2 glow-red">
                          {character.name}
                        </h3>
                        <p className="font-retro text-sm text-accent italic leading-relaxed">
                          "{character.quote}"
                        </p>
                      </div>
                      
                      {/* Hover indicator */}
                      <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs font-pixel opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        FLIP
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Back side */}
                <Card className="character-card-back absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card/95 backdrop-blur-sm border-primary/50">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="font-retro text-lg text-primary font-bold mb-3">
                        {character.name}
                      </h3>
                      
                      <div className="mb-4">
                        <h4 className="font-retro text-xs text-accent mb-2 uppercase tracking-wide">
                          Role:
                        </h4>
                        <p className="font-retro text-xs text-muted-foreground">
                          {character.role}
                        </p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-retro text-xs text-accent mb-2 uppercase tracking-wide">
                          Growth:
                        </h4>
                        <p className="font-retro text-xs text-muted-foreground leading-relaxed">
                          {character.growth}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-retro text-xs text-accent mb-2 uppercase tracking-wide">
                        Key Relationships:
                      </h4>
                      <ul className="space-y-1">
                        {character.relationships.slice(0, 2).map((relationship, index) => (
                          <li key={index} className="font-retro text-xs text-muted-foreground">
                            • {relationship}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="font-retro text-sm text-muted-foreground">
            Click any card to flip and learn more about our heroes
          </p>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};