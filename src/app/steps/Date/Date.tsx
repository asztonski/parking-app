"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "@/app/contexts/AppContext";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatePicker = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [numberOfDays, setNumberOfDays] = useState<number>(0);
  const { customerData, setCustomerData } = useContext(AppContext);

  const maxSelectableDate = new Date();
  maxSelectableDate.setDate(maxSelectableDate.getDate() + 30);

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
      <div className="uppercase flex flex-col w-full gap-8 text-2xl">
        <div className="flex flex-col md:flex-row gap-2 items-center md:w-full">
          <span className="w-1/2 min-w-[250px] text-center bg-primary text-secondary p-4">
            Number of days:
          </span>
          <span className="w-1/2 min-w-[250px] text-center bg-primary text-secondary p-4">
            {numberOfDays}
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-2 items-center md:w-full">
          <span className="w-1/2 min-w-[250px] text-center bg-primary text-secondary p-4">
            You will pay:
          </span>
          <span className="w-1/2 min-w-[250px] text-center bg-primary text-secondary p-4">
            {numberOfDays * 40}$
          </span>
        </div>
      </div>
    </div>
  );
};
