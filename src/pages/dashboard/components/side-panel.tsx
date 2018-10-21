import React, { Fragment } from "react";
import {
  UncontrolledTooltip,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

interface IProps {
  txData: any;
}

const TxDetails: React.SFC<IProps> = ({ txData }) => {
  return (
    <div style={{ height: 390, width: 330, padding: 10 }}>
      {_handleContent()}
    </div>
  );

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
                placeholder="sm"
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
                placeholder="sm"
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
                placeholder="sm"
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
                placeholder="sm"
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.date}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Type
              </InputGroupAddon>
              <Input
                placeholder="sm"
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
                placeholder="sm"
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
                placeholder="sm"
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={txData.confirmations}
                disabled
              />
            </InputGroup>
            <InputGroup style={{ marginBottom: 10 }}>
              <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
                Source / Dest
              </InputGroupAddon>
              <Input
                placeholder="sm"
                bsSize="sm"
                style={{ backgroundColor: "white" }}
                type="text"
                value={""}
                disabled
              />
            </InputGroup>
          </div>
        </Fragment>
      );
    }
    return (
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height: "100%"}}>
        <h2 className="text-primary" style={{marginBottom: 20}}>Select a Tx</h2>
        <img src={require("shared/images/magnify-glass.png")} style={{height: 100, width: 100}} />
        <h2 className="text-primary" style={{marginTop: 20}}>For more info...</h2>
      </div>
    );
  }
};

export default TxDetails;
