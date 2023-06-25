import React, { Component } from "react";
import Item from "../Item";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;

    return (
      <div className="row">
        {isFirst ? (
          <h2>Welcome，input keyword and click search</h2>
        ) : isLoading ? (
          <h2>Loading......</h2>
        ) : err ? (
          <h2 style={{ color: "red" }}>{err}</h2>
        ) : (
          users.map((user) => <Item user={user} key={user.id} />)
        )}
      </div>
    );
  }
}
