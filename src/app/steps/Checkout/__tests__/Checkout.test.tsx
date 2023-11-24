import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckoutCard } from "../CheckoutCard";

describe("CheckoutCard component", () => {
  test("should contain data from object", () => {
    render(<CheckoutCard />);
    
    const checkoutCard = screen.queryByTestId("checkoutCard");
    expect(checkoutCard).toBeInTheDocument();
  });
});
