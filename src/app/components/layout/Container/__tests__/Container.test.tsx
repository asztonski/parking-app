import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "../Container";

describe("Container Component", () => {
  test("should not be empty", () => {
    render(<Container />);
    
    const containerComponent = screen.queryByTestId("container");
    expect(containerComponent).toBeInTheDocument();
  });
});
