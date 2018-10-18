import React, { Component, Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
const styles = require("./styles.module.scss");
interface IProps {
  selectedContract: string;
  etherBalance: string;
}
export default class ContractInfo extends Component<IProps> {
  render() {
    const { selectedContract, etherBalance } = this.props;
    return (
      <Container>
        <Row>Contract ID: {selectedContract}</Row>
        <Row>Overview</Row>
        <Row>
          <Col>Total Ether: {etherBalance}</Col>
        </Row>
      </Container>
    );
  }
}
