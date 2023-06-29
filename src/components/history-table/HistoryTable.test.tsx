import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { HistoryTable } from "./HistoryTable";
import { History } from "../../models/Common";

describe("HistoryTable", () => {
  it("renders the table headers correctly", () => {
    const { getByText } = render(<HistoryTable history={[]} />);

    expect(getByText("Coordinates")).toBeInTheDocument();
    expect(getByText("Time Stamp")).toBeInTheDocument();
  });

  it("renders the history data correctly", () => {
    const historyData: History[] = [
      { x: 1, y: 2, timestamp: 123 },
      { x: 3, y: 4, timestamp: 1234 }
    ];

    const { getByText } = render(<HistoryTable history={historyData} />);

    expect(getByText("2, 1")).toBeInTheDocument();
    expect(getByText(123)).toBeInTheDocument();
    expect(getByText("4, 3")).toBeInTheDocument();
    expect(getByText(1234)).toBeInTheDocument();
  });
});
