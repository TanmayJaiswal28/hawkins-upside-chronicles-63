import React from 'react';
import { useStrangerThings } from './StrangerThingsProvider';

export const FloatingCharacters: React.FC = () => {
  const { upsideDownMode } = useStrangerThings();

  const characterFaces = [
    { src: '/lovable-uploads/a13933b9-7996-431c-b22f-eeaba285002d.png', name: 'Mike' },
    { src: '/lovable-uploads/415865cd-4bdb-49a8-9049-020ddb133753.png', name: 'Eleven' },
    { src: '/lovable-uploads/581b3460-e234-4a00-a77c-f1d5513f9782.png', name: 'Lucas' },
    { src: '/lovable-uploads/67c9abe3-444b-459e-b5c6-98f9e1e147e6.png', name: 'Will' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating character faces */}
      {characterFaces.map((character, index) => (
        <div
          key={`${character.name}-${index}`}
          className={`absolute opacity-10 ${upsideDownMode ? 'opacity-20 animate-glitch' : ''}`}
          style={{
            left: `${(index * 25) + 10}%`,
            top: `${(index * 20) + 15}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        >
          <img
            src={character.src}
            alt={character.name}
            className={`w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 ${
              upsideDownMode 
                ? 'border-upside-down-red/30 animate-pulse-red' 
                : 'border-primary/20'
            } animate-float`}
            style={{
              animationDuration: `${4 + index}s`,
              animationDelay: `${index * 0.8}s`
            }}
          />
        </div>
      ))}

      {/* Additional smaller floating faces */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`extra-${i}`}
          className={`absolute opacity-5 ${upsideDownMode ? 'opacity-15' : ''}`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <img
            src={characterFaces[i % characterFaces.length].src}
            alt={`Character ${i}`}
            className={`w-20 h-20 md:w-28 md:h-28 object-cover rounded-full border-2 ${
              upsideDownMode 
                ? 'border-upside-down-red/20' 
                : 'border-accent/20'
            } animate-float`}
            style={{
              animationDuration: `${6 + (i * 0.5)}s`,
              animationDelay: `${i * 1.2}s`
            }}
          />
        </div>
      ))}
    </div>
  );
};