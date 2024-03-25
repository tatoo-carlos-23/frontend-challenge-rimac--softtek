import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RmButton from "./RmButton";

describe("RmButton component", () => {
  it("renders button with label", () => {
    const { getByText } = render(
      <RmButton label="Click me" changeButton={() => console.warn("click")} />
    );
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("calls changeButton function on click if not disabled", () => {
    const mockChangeButton = jest.fn();
    const { getByText } = render(
      <RmButton label="Click me" changeButton={mockChangeButton} />
    );

    const button = getByText("Click me");
    fireEvent.click(button);

    expect(mockChangeButton).toHaveBeenCalled();
  });

  it("does not call changeButton function on click if disabled", () => {
    const mockChangeButton = jest.fn();
    const { getByText } = render(
      <RmButton label="Click me" changeButton={mockChangeButton} disabled />
    );

    const button = getByText("Click me");
    fireEvent.click(button);

    expect(mockChangeButton).not.toHaveBeenCalled();
  });
});
