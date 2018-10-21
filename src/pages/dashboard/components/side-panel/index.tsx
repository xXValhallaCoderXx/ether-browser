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
      <div className="d-flex flex-column flex-grow-1">
        <TxDetails txData={data} />
      </div>
    );
  }
}
