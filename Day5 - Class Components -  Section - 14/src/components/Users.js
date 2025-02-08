import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsers() {
    this.setState({ showUsers: !this.state.showUsers });
  }

  render() {
    return (
      <div className={classes.users}>
        <button onClick={() => this.toggleUsers()}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && (
          <ul>
            {this.props.users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Users;
