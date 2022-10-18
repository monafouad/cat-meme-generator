import React, { Component } from "react";
import FormComponent from "../FormComponent/FormComponent";

class FormContainer extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormComponent
        data={this.props.data}
        handleChange={this.props.handleChange}
        onSubmit={this.props.handleSubmit}
      />
    );
  }
}

export default FormContainer;
