"use client";
import { useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { Form } from "@/app/steps/Form/Form";
import { DatePicker } from "@/app/steps/Date/Date";
import { Container } from "../Container/Container";

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
      //   case "select unit":
      //     return <SelectUnit />;
      //   case "result":
      //     return <Battleground />;
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
