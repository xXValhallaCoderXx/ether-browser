import React, { Component } from "react";
import { Nav, Container, Row } from "reactstrap";

interface IProps {
  isOpen: boolean;
  data: any;
}

export default class SidePanelContainer extends Component<IProps> {
  render() {
    const { data } = this.props;
    return (
      <Nav vertical style={{ marginTop: 50, position: "fixed", width: "100%", backgroundColor: "white", height: "100%" }}>
        <div style={{ padding: 10 }}>{this._handleContent()}</div>
      </Nav>
    );
  }

  _handleContent = () => {
    const { data } = this.props;
    if (data) {
      return (
        <div>
          <h2>SOME INFO</h2>
          HELLO WORLD
        </div>
      );
    }
    return (
      <div>Click on a Tx</div>
    )
  };
}
