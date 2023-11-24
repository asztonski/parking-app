"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatePicker = () => {
  const [value, setValue] = useState<Value>(new Date());
  const [numberOfDays, setNumberOfDays] = useState<number>(0);

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
      console.log('Number of days selected:', days);
      // Perform actions with the number of days as needed
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
      <div>
        Number of days: {numberOfDays}
      </div>
    </div>
  );
};
