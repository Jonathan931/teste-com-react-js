import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

import TechList from "../../components/TechListRedux";

jest.mock("react-redux");

describe("TechList component Redux", () => {
  it("should render tech list", () => {
    useSelector.mockImplementation((cb) =>
      cb({
        techs: ["Node.js", "ReactJS"],
      })
    );

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));

    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });
});
