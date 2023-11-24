"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";
import { Button } from "@/app/components/UI/Button/Button";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type SummaryCardProps = {
  children: React.ReactNode;
};

export const DatePicker = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const { setStep, setCustomerData } = useContext(AppContext);

  const maxiumumDays = 30;
  const priceMultipler = selectedPlan === "standard" ? 30 : 50;

  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + maxiumumDays);

  const calculateNumberOfDays = (startDate: Date, endDate: Date): number => {
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();
    const difference = Math.abs(endMillis - startMillis);
    const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  useEffect(() => {
    if (Array.isArray(value)) {
      const [startDate, endDate] = value;
      const days = calculateNumberOfDays(startDate, endDate);
      setNumberOfDays(days);
    }
  }, [value]);

  useEffect(() => {
    setTotalPrice(numberOfDays * priceMultipler);
  }, [priceMultipler, numberOfDays]);

  useEffect(() => {
    if (numberOfDays > 0) {
      setIsReady(true);
    }
  }, [numberOfDays]);

  const handleSelectChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const buttonHandler = () => {
    setCustomerData((prevCustomerData) => ({
      ...prevCustomerData,
      plan: selectedPlan,
      totalPrice: totalPrice,
    }));
    setStep('checkout')
  };

  const SummaryCard: React.FC<SummaryCardProps> = ({ children }) => {
    return (
      <span className="w-1/2 min-w-[250px] text-center bg-primary text-secondary p-4">
        {children}
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <span className="uppercase text-3xl text-center bg-secondary p-4">
        How long would you like to park your car?
      </span>
      <Calendar
        value={value}
        onChange={setValue}
        selectRange
        maxDate={maxSelectableDate}
      />
      <div className="w-full bg-secondary text-primary text-2xl p-4">
        <select
          className="w-full bg-transparent"
          value={selectedPlan}
          onChange={handleSelectChange}
        >
          <option value="standard">Standard - 30$ per day</option>
          <option value="premium">Premium - 50$ per day</option>
        </select>
      </div>
      <div className="uppercase flex flex-col w-full gap-8 text-2xl">
        <div className="flex flex-col md:flex-row gap-2 items-center md:w-full">
          <SummaryCard>Number of days:</SummaryCard>
          <SummaryCard>{numberOfDays}</SummaryCard>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center md:w-full">
          <SummaryCard>You will pay:</SummaryCard>
          <SummaryCard>{totalPrice}$</SummaryCard>
        </div>
      </div>

      <Button onClick={buttonHandler} disabled={!isReady}>
        Go to checkout
      </Button>
    </div>
  );
};
