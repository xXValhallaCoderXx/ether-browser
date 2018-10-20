import React, { Component } from "react";
import { Container, Col, Card, CardBody } from "reactstrap";
import { NavBar } from "shared/components";

import Form from "./components/form";
const styles = require("./styles.module.scss");

export interface IDispatchProps {
  fetchContractData: (data: string) => void;
  home: {
    loading: boolean;
    success: boolean;
    error: boolean;
    msg: string;
  };
}

class HomePageView extends Component<IDispatchProps> {
  render() {
    const { fetchContractData } = this.props;
    return (
      <Container className={styles.bgWrapper} fluid>
        <NavBar />
        <Container fluid className={styles.contentWrapper}>
          <Card className={styles.cardWrapper}>
            <CardBody>
              <h3 style={{ marginBottom: 20, textAlign: "center" }}>
                Ethereum TX Browser
              </h3>
              <Form
                status={this.props.home}
                fetchContractData={fetchContractData}
              />
            </CardBody>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default HomePageView;
