import React, { Component, Fragment } from "react";
import {
  Container,
  Col,
  Row
} from "reactstrap";
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
  }
  render() {
    const { contractID, etherBalance, etherFiat } = this.props.overViewData;
    return (
      <Container className={styles.contractInfoWrapper}>
        <Row>Contract ID: {contractID}</Row>
        <Row>Overview</Row>
        <Row>
          <Col>
            <div>Total Ether: {etherBalance}</div>
            <div>Ether Value: {etherFiat}</div>
          </Col>
        </Row>
      </Container>
    );
  }
  toggle = () => this.setState({isOpen: !this.state.isOpen})
}
