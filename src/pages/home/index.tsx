import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { Container, Col, Card, CardBody } from "reactstrap";
import { NavBar } from "shared/components";
import { fetchContractData } from "./home-dux";

import Form from "./form";
const styles = require("./styles.module.scss");

interface IDispatchProps {
  fetchContractData: (data: string) => void;
  home: {
    loading: boolean;
    success: boolean;
    error: boolean;
    msg: string;
  }
}

class HomePageContainer extends Component<IDispatchProps> {
  render() {
    const { fetchContractData } = this.props;
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <NavBar handleChangeCurrency={() => null}/>
        <Container fluid className={styles.contentWrapper}>
          <Col
            xs={{ size: 12 }}
            sm={{ size: 8, offset: 2 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <Card className={styles.cardWrapper}>
              <CardBody>
                <h3 style={{ marginBottom: 20, textAlign: "center" }}>
                  Ethereum TX Browser
                </h3>
                <Form status={this.props.home} fetchContractData={fetchContractData} />
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return { home: state.home };
};

export default connect(
  mapStateToProps,
  {
    fetchContractData
  }
)(HomePageContainer);
