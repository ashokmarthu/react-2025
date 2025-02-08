import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.user.name}</li>;
  }
}

export default User;
