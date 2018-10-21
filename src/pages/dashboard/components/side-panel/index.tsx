import React, { Component, Fragment } from "react";
import { Nav, UncontrolledTooltip, Container, Row } from "reactstrap";
import { convertUnix } from "shared/utils";
import unit from "ethjs-unit";

interface IProps {
  isOpen: boolean;
  data: any;
  currentContract: string;
}

export default class SidePanelContainer extends Component<IProps> {
  render() {
    const { data } = this.props;
    return (
      <Nav
        vertical
        style={{
          marginTop: 50,
          position: "fixed",
          width: "100%",
          backgroundColor: "white",
          height: "100%"
        }}
      >
        <div className="d-flex flex-column" style={{ padding: 10 }}>
          <div className="flex-grow-2">{this._handleContent()}</div>
          <div className="flex-grow-1" style={{ height: 300 }}>
            <h4>C</h4>
          </div>
        </div>
      </Nav>
    );
  }

  _handleContent = () => {
    const { currentContract, data } = this.props;
    if (data) {
      console.log("SIDE: ", this.props);
      let shortTx = data.hash.substring(0, 20);
      return (
        <div style={{ padding: 20 }}>
          <h4 className="text-primary">Transaction Info</h4>
          <div style={{ padding: 10 }}>
            <h6>Type: {currentContract.toLowerCase() == data.to.toLowerCase() ? "Recieved" : "Sent"}</h6>
            <h6>Status:</h6>
            <h6>Date: {convertUnix(data.timeStamp)}</h6>
            <h6>Block Confirmations: {data.confirmations}</h6>
            <h6>Source / Destination Wallet:</h6>
            <h6>Ether Amount: {unit.fromWei(data.gasUsed * data.gasPrice, "ether")}</h6>
            <h6>Fiat Value:</h6>
            <h6>
              <span style={{ fontSize: 18 }} id="tx-hash">
                Tx ID: {shortTx}
                ...
              </span>
            </h6>
            <UncontrolledTooltip
              style={{ width: 200 }}
              autohide={false}
              placement="top"
              target="tx-hash"
            >
              {data.hash}
            </UncontrolledTooltip>
          </div>
        </div>
      );
    }
    return <div style={{minHeight: 300, display: "flex", justifyContent: "center", flexDirection: "column"}}><span style={{marginLeft: 100}}>Click on a Tx</span></div>;
  };
}
