import React, { Component } from "react";
import { Nav } from "reactstrap";

interface IProps {
  isOpen: boolean;
}

export default class SidePanelContainer extends Component<IProps> {
  render() {
    if (this.props.isOpen) {
      return (
        <Nav vertical>
          <h2>SOME INFO</h2>
          HELLO WORLD
        </Nav>
      );
    } else {
      return null;
    }
  }
}
