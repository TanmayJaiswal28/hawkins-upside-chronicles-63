import React, { createContext, useContext, useState, useEffect } from 'react';

interface StrangerThingsContextType {
  upsideDownMode: boolean;
  musicEnabled: boolean;
  toggleUpsideDown: () => void;
  toggleMusic: () => void;
}

const StrangerThingsContext = createContext<StrangerThingsContextType | undefined>(undefined);

export const useStrangerThings = () => {
  const context = useContext(StrangerThingsContext);
  if (!context) {
    throw new Error('useStrangerThings must be used within a StrangerThingsProvider');
  }
  return context;
};

export const StrangerThingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [upsideDownMode, setUpsideDownMode] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  const toggleUpsideDown = () => {
    setUpsideDownMode(!upsideDownMode);
  };

  const toggleMusic = () => {
    setMusicEnabled(!musicEnabled);
  };

  useEffect(() => {
    if (upsideDownMode) {
      document.documentElement.setAttribute('data-theme', 'upside-down');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [upsideDownMode]);

  return (
    <StrangerThingsContext.Provider
      value={{
        upsideDownMode,
        musicEnabled,
        toggleUpsideDown,
        toggleMusic,
      }}
    >
      {children}
    </StrangerThingsContext.Provider>
  );
};