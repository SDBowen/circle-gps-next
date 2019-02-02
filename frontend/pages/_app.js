import React from "react";
import App, { Container } from "next/app";

class MyApp extends App {
  render() {
    const { component } = this.props;

    return (
      <Container>
        <div />
      </Container>
    );
  }
}

export default MyApp;
