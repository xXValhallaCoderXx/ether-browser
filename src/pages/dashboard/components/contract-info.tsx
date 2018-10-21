import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
const styles = require("./styles.module.scss");

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
    const { contractID, etherBalance, etherFiat, currencySymbol, ertherRate } = this.props.overViewData;
    return (
      <Container>
        <Row>
          <h4 className="text-primary">Overview</h4>
        </Row>
        <Row className="text-secondary">
          <h5>Contract: {contractID}</h5>
        </Row>

        <Row className="text-secondary">
          <Col style={{paddingLeft: 0}}><h6>Balance: {etherBalance}</h6></Col>
          <Col style={{paddingLeft: 0}}><h6>Ether Value: {etherFiat} <span style={{fontSize: 10}}>
            @ {currencySymbol}{ertherRate}</span></h6></Col>
        </Row>
      </Container>
    );
  }
  toggle = () => this.setState({ isOpen: !this.state.isOpen });
}
