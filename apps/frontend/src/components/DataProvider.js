import React, { Component } from "react";
import PropTypes from "prop-types";

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [    {
              "model": "leads.lead",
              "pk": 1,
              "name": "Armin",
              "email": "something@gmail.com",
              "message": "I am looking for a Javascript mentor",
              "created_at": "2018-02-14 00:00:00"
          },
          {
              "model": "leads.lead",
              "pk": 2,
              "name": "Tom",
              "email": "tomsomething@gmail.com",
              "message": "I want to talk about a Python project",
              "created_at": "2018-01-14 00:00:00"
          }],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          console.log("200 code triggered in dataProvider")
          return this.setState({ placeholder: "Something went wrong" });
        }
        console.log(response)
        return response.json();
      })
      .then((data) => {
        console.log(data)
        this.setState({ data:data, loaded: true });
      })
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
export default DataProvider;
