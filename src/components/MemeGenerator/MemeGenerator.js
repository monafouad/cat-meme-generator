import React from "react";
import Form from "../FormContainer/FormContainer";
import Meme from "../MemeContainer/MemeContainer";
import {
  CAT_REQUEST_URL_SAYS,
  CAT_REQUEST_URL_TAGS,
  CAT_REQUEST_URL_MAIN,
  CAT_REQUEST_URL_CUTE,
} from "../../constants/catConstants";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      tag: "",
      allImages: CAT_REQUEST_URL_CUTE,
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // fetch the cat images
  componentDidMount() {
    fetch(CAT_REQUEST_URL_TAGS)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ tags: response });
      });
  }

  // Function to handle the change in the input field
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // Function to handle the submit button with options to search by tag, only by text, or both
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.text === "") {
      this.setState({ allImages: `${CAT_REQUEST_URL_MAIN}${this.state.tag}` });
    } else if (this.state.tag === "") {
      this.setState({
        allImages: `${CAT_REQUEST_URL_SAYS}${this.state.text}`,
      });
    } else {
      this.setState({
        memeImg: `${CAT_REQUEST_URL_MAIN}${this.state.tag}/says/${this.state.text}`,
      });
    }
  }

  // Function to handle the error
  handleError() {
    this.setState({ allImages: CAT_REQUEST_URL_MAIN });
  }

  render() {
    return (
      <div>
        <Form
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Meme data={this.state} />
      </div>
    );
  }
}

export default MemeGenerator;
