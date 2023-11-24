import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const Date = () => {
  return (
    <div className="flex flex-col items-center gap-10">
        <span className="uppercase text-3xl text-center bg-secondary p-4">How long would you like to park your car?</span>
      <Calendar />
    </div>
  );
};
