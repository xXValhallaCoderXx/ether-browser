import React, { Fragment } from "react";
import { UncontrolledTooltip } from "reactstrap";

interface IProps {
  txData: any;
}

const TxDetails: React.SFC<IProps> = ({ txData }) => {
  return (
    <div style={{height: 300, width: 330, padding: 10}}>{_handleContent()}</div>
  );

  function _handleContent() {
    if (txData) {
      let shortTx = txData.txHash.substring(0, 20);
      return (
        <Fragment>
          <h4 className="text-primary">Transaction Info</h4>
          <div style={{ padding: 10 }}>
            <h6>Type: {txData.type}</h6>
            <h6>Status: {txData.status}</h6>
            <h6>Date: {txData.date}</h6>
            <h6>Block Confirmations: {txData.confirmations}</h6>
            <h6>Source / Destination Wallet:</h6>
            <h6>Ether Amount: {txData.value}</h6>
            <h6>Fiat Value: {txData.fiat}</h6>
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
              {txData.txHash}
            </UncontrolledTooltip>
          </div>
        </Fragment>
      );
    }
    return <Fragment><h4>Select A Tx</h4><img src={require("shared/images/magnify-glass.png")} height="100" /></Fragment>;
  }
};

export default TxDetails;
