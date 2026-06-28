import { createContext, useContext, useState, type ReactNode } from 'react';

interface ClickPosition {
  x: number;
  y: number;
}

interface ClickPositionContextType {
  position: ClickPosition | null;
  setPosition: (pos: ClickPosition) => void;
}

const ClickPositionContext = createContext<ClickPositionContextType | undefined>(undefined);

export function ClickPositionProvider({ children }: { children: ReactNode }) {
  const [position, setPosition] = useState<ClickPosition | null>(null);

  return (
    <ClickPositionContext.Provider value={{ position, setPosition }}>
      {children}
    </ClickPositionContext.Provider>
  );
}

export function useClickPosition() {
  const context = useContext(ClickPositionContext);
  if (!context) {
    throw new Error('useClickPosition must be used within a ClickPositionProvider');
  }
  return context;
}