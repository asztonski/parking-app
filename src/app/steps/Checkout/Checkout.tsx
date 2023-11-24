import { CheckoutCard } from "./CheckoutCard";
import { Button } from "@/app/components/UI/Button/Button";

export const Checkout = () => {
  return (
    <div className="flex flex-col">
      <CheckoutCard />
      <Button>Print the ticket</Button>
    </div>
  );
};
