import React, { Fragment } from "react";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";
import { ITxData } from "shared/types";
const styles = require("./styles.module.scss");

interface IProps {
  txData: any;
}

const TxDetails: React.SFC<IProps> = ({ txData }) => {
  return (
    <div className={handleClassname()}>
      {_handleContent()}
    </div>
  );

  function handleClassname(){
    if(txData) return `${styles.txDetailsClicked} ${styles.txDetails}`
    return styles.txDetails
  }

  function _handleContent() {
    if (txData) {
      return (
        <Fragment>
          <h4 className="text-primary">Transaction Info</h4>
          <div style={{ padding: 10 }}>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Tx ID
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.txHash}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Ether
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.value}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Value
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.txEtherFiat.parsed}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Fee
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.fiat}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Date
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.date.parsed}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Type
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.type}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Status
              </InputGroupAddon>
              <Input
                invalid={txData.status !== "Complete" ? true : false}
                valid={txData.status === "Complete" ? true : false}
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.status}
                disabled
              />
            </InputGroup>

            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Blocks
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.confirmations}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                {txData.source === null ? "Destination" : "Source"}
              </InputGroupAddon>
              <Input
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={
                  txData.source === null ? txData.destination : txData.source
                }
                disabled
              />
            </InputGroup>
          </div>
        </Fragment>
      );
    }
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "100%" }}
      >
        <h2 className="text-primary">
          Select a Tx
        </h2>
        <h2 className="text-primary" style={{ marginTop: 20 }}>
          For more info...
        </h2>
      </div>
    );
  }
};

export default TxDetails;
