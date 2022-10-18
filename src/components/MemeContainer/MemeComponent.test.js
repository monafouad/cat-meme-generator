import React from "react";
import Enzyme, { shallow } from "enzyme";
import MemeContainer from "./MemeContainer";
import MemeComponent from "../MemeComponent/MemeComponent";

describe("Meme Container exists", () => {
  const wrapper = shallow(<MemeContainer />);
  test("Meme Container exists", () => {
    expect(MemeContainer).toBeDefined();
  });

  it("renders the Meme Component", () => {
    expect(wrapper.find(MemeComponent)).toHaveLength(1);
  });
});
