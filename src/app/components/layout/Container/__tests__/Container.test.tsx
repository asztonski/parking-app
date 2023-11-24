import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "../Container";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({ stage: "game mode" }),
}));

describe("Container Component", () => {
  test("should not be empty", () => {
    render(<Container />);
    
    const selectModeComponent = screen.queryByTestId("container");
    expect(selectModeComponent).toBeInTheDocument();
  });

  test("should have a getContent function based on stage value", () => {
    const getContent = Content().type;
    expect(getContent).toBeDefined();
  });
});
