'use client'
import React, { createContext, useState, ReactNode } from "react";

type PageContextType = {
  step: string,
  setStep: React.Dispatch<React.SetStateAction<string>>,
  customerData: object[],
  setCustomerData: React.Dispatch<React.SetStateAction<object[]>>,
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<string>("form");
  const [customerData, setCustomerData] = useState<object[]>([]);

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        customerData,
        setCustomerData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
