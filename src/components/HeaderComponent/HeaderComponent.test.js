import React from "react";
import Enzyme, { shallow } from "enzyme";
import HeaderComponent from "./HeaderComponent";

describe("Header exists", () => {
  test("Headert exists", () => {
    expect(HeaderComponent).toBeDefined();
  });
});
