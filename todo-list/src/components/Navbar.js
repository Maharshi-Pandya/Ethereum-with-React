import React, {Component} from "react";

class NavBar extends Component {
    render() {
        return (
          <div>
              <nav className="navbar navbar-dark bg-dark p-0">
              <a className="navbar-brand nav-title">Ethereum with React</a>
              </nav>
          </div>
        )
    }
}

export default NavBar;