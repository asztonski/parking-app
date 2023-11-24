"use client";
import { useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { Container } from "../Container/Container";
import { Form } from "@/app/steps/Form/Form";
import { DatePicker } from "@/app/steps/Date/Date";
import { Checkout } from "@/app/steps/Checkout/Checkout";


export const Main = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;
  const { step } = appContext;

  const getContent = () => {
    switch (step) {
      case "form":
        return <Form />;
      case "date":
        return <DatePicker />;
      case "checkout":
        return <Checkout />;
      default:
        return;
    }
  };

  return (
    <main className="w-full max-w-3xl my-10 px-5 m-auto">
      <Container>{getContent()}</Container>
    </main>
  );
};
