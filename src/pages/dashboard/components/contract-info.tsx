import React, { Component, Fragment } from "react";
import { Col } from "reactstrap";
import { UncontrolledTooltip } from "reactstrap";
import { isMobile } from "react-device-detect";

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
    const {
      contractID,
      etherBalance,
      etherFiat,
      currencySymbol,
      ertherRate
    } = this.props.overViewData;

    return (
      <div style={{padding: 10}}>
        <div>
          <Col xs={{ size: 6, offset: 3 }} sm={{ size: 12, offset: 0 }}>
            <h4 className="text-primary">Overview</h4>
          </Col>
        </div>
        {this._handleContractID()}
        <div className="text-secondary">
          <Col xs="12" sm={{ size: 6 }}>
            <h6>Balance: {etherBalance}</h6>
          </Col>
          <Col xs="12" sm={{ size: 6 }}>
            <h6>
              Ether Value: {etherFiat}{" "}
              <span style={{ fontSize: 13 }}>
                @ {currencySymbol}
                {ertherRate}
              </span>
            </h6>
          </Col>
        </div>
      </div>
    );
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  _handleContractID = () => {
    const { contractID } = this.props.overViewData;
    if (isMobile) {
      let shortContractID = contractID.substring(0, 15);
      return (
        <Fragment>
          <Col className="text-secondary">
            <h6 id="contract-hash">
              Contract: {shortContractID}
              ...
            </h6>
          </Col>
          <UncontrolledTooltip
            autohide={false}
            placement="top"
            target="contract-hash"
          >
            {contractID}
          </UncontrolledTooltip>
        </Fragment>
      );
    }
    return (
      <Col className="text-secondary">
        <h6>
          Contract: {contractID}
        </h6>
      </Col>
    );
  };
}
