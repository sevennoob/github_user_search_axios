import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: "",
  };

  searchUsers = (searchValue) => {
    this.setState({ isFirst: false, isLoading: true });
    axios.get(`https://api.github.com/search/users?q=${searchValue}`).then(
      (response) => {
        this.setState({
          isLoading: false,
          users: response.data.items,
        });
      },
      (error) => {
        this.setState({ isLoading: false, err: error.message });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <Header searchUsers={this.searchUsers} />
        <List {...this.state} />
      </div>
    );
  }
}
