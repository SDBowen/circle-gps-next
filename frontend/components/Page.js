import React, { Component } from "react";
import Nav from "./nav/Nav";
import Meta from "./Meta";

import "../style/style.scss";

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
