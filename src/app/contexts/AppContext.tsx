'use client'
import React, { createContext, useState, ReactNode } from "react";

type PageContextType = {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<string>("form");
//   const [playersDetails, setPlayersDetails] = useState<object[]>([
//     { name: null, unit: null, score: 0 },
//     { name: null, unit: null, score: 0 }
//   ]);

  return (
    <AppContext.Provider
      value={{
        step,
        setStep
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
