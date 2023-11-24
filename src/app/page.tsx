'use client'
import { useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { Form } from "@/app/steps/Form/Form";
import { DatePicker } from "@/app/steps/Date/Date";
import { Checkout } from "@/app/steps/Checkout/Checkout";

export default function Home() {

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
    <div>
      {getContent()}
    </div>
  )
}
