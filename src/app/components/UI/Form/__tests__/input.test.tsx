import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("TextInput Component", () => {
  const onChangeMock = jest.fn();
  const onBlurMock = jest.fn();
  test("renders a text input element", () => {
    render(
      <Input
        name="testName"
        type="text"
        value=""
        placeholder="Test Placeholder"
        id="TestId"
        error={false}
        touched={false}
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const inputEl = screen.getByTestId("input");
    expect(inputEl).toBeInTheDocument();
  });

  test("handles input change and blur event", () => {
    const onChangeMock = jest.fn();
    render(
      <Input
        name="testName"
        type="text"
        value=""
        placeholder="Test Placeholder"
        id="TestId"
        error={false}
        touched={false}
        onChange={onChangeMock}
        onBlur={onBlurMock}
      />
    );
    const inputEl = screen.getByTestId("input");

    fireEvent.change(inputEl, { target: { value: "Test input" } });
    fireEvent.blur(inputEl);

    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
    expect(onBlurMock).toHaveBeenCalled();
  });
});
