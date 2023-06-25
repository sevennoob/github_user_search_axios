import React, { Component } from "react";

export default class Header extends Component {
  userRef = React.createRef();
  searchHandler = () => {
    const { value: searchValue } = this.userRef.current;
    this.props.searchUsers(searchValue);
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={this.userRef}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;<button onClick={this.searchHandler}>Search</button>
        </div>
      </section>
    );
  }
}
