import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { Container, Col, Card, CardBody } from "reactstrap";
import { NavBar } from "shared/components";

interface IDispatchProps {
  contractID: any;
}

class DashboardContainer extends Component<IDispatchProps> {
  render() {
    console.log("CHECKING PROPS: ", this.props);
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <NavBar />
        <Container fluid>Dashboard</Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return { dashboard: state.dashboard };
};

export default connect(
  mapStateToProps,
  null
)(DashboardContainer);
