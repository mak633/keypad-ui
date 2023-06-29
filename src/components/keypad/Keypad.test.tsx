import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Keypad } from "./Keypad";

describe("Keypad", () => {
  it("calls onAddHistory with the correct parameters when a button is clicked", () => {
    const onAddHistoryMock = jest.fn();
    const { getByText } = render(<Keypad onAddHistory={onAddHistoryMock} />);

    const button = getByText("1");
    fireEvent.click(button);

    expect(onAddHistoryMock).toHaveBeenCalledWith({
      x: 1,
      y: 1,
      timestamp: expect.any(Number)
    });
  });
});
