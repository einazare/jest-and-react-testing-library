import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

import Button from "../Button.js";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly 1", () => {
  const { getByTestId } = render(<Button label="Click me please"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click me please");
});

it("renders button correctly 2", () => {
  const { getByTestId } = render(<Button label="Save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Save");
});

it("matches snapshot 1", () => {
  const tree = renderer.create(<Button label="Save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
  const tree = renderer
    .create(<Button label="Click me please"></Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
