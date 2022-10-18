import React from "react";
import Enzyme, { shallow } from "enzyme";
import FormContainer from "./FormContainer";
import FormComponent from "../FormComponent/FormComponent";

describe("Form Container exists", () => {
  const wrapper = shallow(<FormContainer />);
  test("Form Container exists", () => {
    expect(FormContainer).toBeDefined();
  });
  it("renders the Form Component", () => {
    expect(wrapper.find(FormComponent)).toHaveLength(1);
  });
});
