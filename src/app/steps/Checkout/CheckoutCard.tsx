"use client";
import { useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { Button } from "@/app/components/UI/Button/Button";

export const CheckoutCard = () => {
  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const { customerData } = appContext;

  const firstDay = customerData.selectedDays.firstDay.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  const lastDay = customerData.selectedDays.lastDay.toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }
  );

  return (
    <div data-testid="checkoutCard" className="w-full flex flex-col gap-6 text-xl uppercase items-center">
      <h2 className="text-4xl m-auto my-4 text-secondary font-black">
        Summary
      </h2>
      <div className="flex flex-col gap-6 my-8 bg-secondary p-6 rounded-lg">
        <span>First name: {customerData.firstName}</span>
        <span>Last name: {customerData.lastName}</span>
        <span>Car model: {customerData.model}</span>
        <span>Car plates: {customerData.plates}</span>
        <span>Email address: {customerData.email}</span>
        <span>Phone number: {customerData.phone}</span>
        <span>Selected plan: {customerData.plan}</span>
        <span>
          Dates from: {firstDay} to: {lastDay}
        </span>
        <span>Total price: {customerData.totalPrice}$</span>
      </div>
      <Button>Print the ticket</Button>
    </div>
  );
};
