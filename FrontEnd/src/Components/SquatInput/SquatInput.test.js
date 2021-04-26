import { render, fireEvent } from "@testing-library/react";
import React from "react";
import SquatInput from "./";

const testProps = {
  onClick: jest.fn(),
};

test("whether the function is called when the button is clicked", () => {
  const { getByTestId } = render(<SquatInput {...testProps} />);
  const actualButton = getByTestId("click-test");
  fireEvent.click(actualButton);
  expect(testProps.onClick).toHaveBeenCalled();
});
