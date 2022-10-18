import React from "react";
import "./MemeGenerator/MemeGenerator.scss";
import Form from "./FormContainer/FormContainer";
import Meme from "./MemeContainer/MemeContainer";

const catApiUrl = "https://cataas.com/cat/";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [],
      tag: "cute",
      allImages: "https://cataas.com/cat/cute",
      text: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://cataas.com/api/tags")
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

  // Function to handle the submit button
  handleSubmit(event) {
    // Prevent the default behaviour of the form
    event.preventDefault();
    // Check if the text is empty
    if (this.state.text === "") {
      // Search only by tag
      console.log(catApiUrl + this.state.tag);
      this.setState({ allImages: `${catApiUrl}${this.state.tag}` });
    } else if (this.state.tag === "") {
      // Search only by text
      console.log("https://cataas.com/cat/says/" + this.state.text);
      this.setState({
        allImages: `https://cataas.com/cat/says/${this.state.text}`,
      });
    } else {
      // Search by both tag and text
      console.log(catApiUrl + this.state.tag + "/says/" + this.state.text);
      this.setState({
        allImages: `${catApiUrl}${this.state.tag}`,
      });
    }
  }

  // Function to handle the error
  handleError() {
    this.setState({ allImages: catApiUrl });
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
