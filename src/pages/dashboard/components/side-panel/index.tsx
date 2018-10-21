import React, { Component, Fragment } from "react";
import { Nav } from "reactstrap";
import TxDetails from "./tx-details";

interface IProps {
  isOpen: boolean;
  data: any;
}

export default class SidePanelContainer extends Component<IProps> {
  render() {
    const { data } = this.props;
    return (
      <Nav vertical style={{backgroundColor: "white"}}>
        <div className="d-flex flex-column" style={{ padding: 10 }}>
          <div className="flex-grow-2">
            <TxDetails txData={data} />
          </div>
        </div>
      </Nav>
    );
  }
}
