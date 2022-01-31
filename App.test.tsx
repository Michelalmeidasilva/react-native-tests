import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import App from "./App";

describe("Testing react navigation", () => {
  test("page contains 10 items", async () => {
    const component = <App />;
    const { getAllByText } = render(component);

    const items = getAllByText(/Item number/);
    expect(items.length).toBe(10);
  });

  test("page contains header", async () => {
    const component = <App />;
    const { getByText } = render(component);

    const header = getByText("List of numbers from 1 to 20");

    expect(header).toBeTruthy();
  });

  test("clicking on one item takes you to the details screen", () => {
    const component = <App />;

    const { getByText } = render(component);
    const toClick = getByText("Item number 5");

    fireEvent(toClick, "press");
    const newHeader = getByText("Showing details for 5");
    const newBody = getByText("the number you have chosen is 5");

    expect(newHeader).toBeTruthy();
    expect(newBody).toBeTruthy();
  });
});
