import React, {Component} from "react";

class Header extends Component {
  render() {
      return (
        <div>
          <h2>
            Todo List Smart Contract!
          </h2>
          <p>
            Task Count: {this.props.taskCount}
          </p>
        </div>
      )
  }
}

export default Header;