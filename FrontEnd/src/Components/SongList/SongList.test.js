import { render } from "@testing-library/react";
import React from "react";
import SongList from "./";

const testProps = {
  data: "Fleetwood Mac",
};

test("see if the title of the <h3> element is the value of the data prop", () => {
  const { getByTestId } = render(<SongList {...testProps} />);
  const actual = getByTestId("Fleetwood Mac");
  expect(actual).toBeInTheDocument();
});
