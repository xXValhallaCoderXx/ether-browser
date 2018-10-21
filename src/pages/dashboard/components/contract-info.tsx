import React, { Component } from "react";
import { Col } from "reactstrap";
import { Input, InputGroup, InputGroupAddon } from "reactstrap";

interface IProps {
  overViewData: any;
}

interface IState {
  isOpen: boolean;
}
export default class ContractInfo extends Component<IProps, IState> {
  state = {
    isOpen: false
  };
  render() {
    const { contractID, etherBalance, etherFiat } = this.props.overViewData;

    return (
      <div style={{ padding: 10 }}>
        <div>
          <Col style={{ marginLeft: -15 }}>
            <h4 className="text-primary">Contract Overview</h4>
          </Col>
        </div>
        <InputGroup style={{ marginBottom: 10 }}>
          <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
            ID
          </InputGroupAddon>
          <Input
            placeholder="sm"
            bsSize="sm"
            style={{ backgroundColor: "white" }}
            type="text"
            value={contractID}
            disabled
          />
        </InputGroup>
        <div className="text-secondary">
          <InputGroup style={{ marginBottom: 10 }}>
            <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
              Ether
            </InputGroupAddon>
            <Input
              placeholder="sm"
              bsSize="sm"
              style={{ backgroundColor: "white" }}
              type="text"
              value={etherBalance}
              disabled
            />
          </InputGroup>

          <InputGroup>
            <InputGroupAddon addonType="prepend" style={{ height: 31 }}>
              Value
            </InputGroupAddon>
            <Input
              placeholder="sm"
              bsSize="sm"
              style={{ backgroundColor: "white" }}
              type="text"
              value={etherFiat}
              disabled
            />
          </InputGroup>
        </div>
      </div>
    );
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
}
