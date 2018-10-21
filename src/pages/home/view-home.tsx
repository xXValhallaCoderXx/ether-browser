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
          <Card className={`${styles.cardWrapper} ${this._handleClass()}`}>
            <CardBody className="d-flex flex-column">
              <div className="d-flex justify-content-center align-items-center" style={{marginBottom: 20}}>
                <img
                  className={styles.imgLogo}
                  src={require("shared/images/ether-logo.png")}
                />
                <h3 className={styles.etherLogoTitle} style={{marginTop: 10}}>Ethereum TX Browser</h3>
              </div>

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

  _handleClass = () => this.props.home.error ? styles.cardWrapperError : null;
}

export default HomePageView;
