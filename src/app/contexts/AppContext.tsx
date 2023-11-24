'use client'
import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type CustomerDataType = {
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  model: string,
  plates: string,
  plan: string;
  selectedDays: {
    firstDay: Date;
    lastDay: Date;
  };
  totalPrice: number;
};

type PageContextType = {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
  customerData: CustomerDataType | undefined;
  setCustomerData: React.Dispatch<React.SetStateAction<CustomerDataType | undefined>>;
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [step, setStep] = useState<string>("form");
  const [customerData, setCustomerData] = useState<CustomerDataType | undefined>(
    undefined
  );

  return (
    <AppContext.Provider
      value={{
        step,
        setStep,
        customerData,
        setCustomerData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
