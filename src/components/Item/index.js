import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  render() {
    const {user} = this.props;
    return (
      <div className="card">
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <img
            src={user.avatar_url}
            style={{ width: "100px" }}
            alt="avatar-img"
          />
        </a>
        <p className="card-text">{user.login}</p>
      </div>
    );
  }
}
