import React, { Component } from "react";

import MemeComponent from "../MemeComponent/MemeComponent";

class MemeContainer extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return <MemeComponent data={this.props.data} />;
  }
}

export default MemeContainer;
