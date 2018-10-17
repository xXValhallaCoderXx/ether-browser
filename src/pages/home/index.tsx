import React, { Component } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/rootReducer";
import { Container, Col, Card, CardBody } from "reactstrap";
import { NavBar } from "shared/components";

import Form from "./form";
const styles = require("./styles.module.scss");

interface IProps {
  fetchData: () => void;
}

class HomePageContainer extends Component<IProps> {
  render() {
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <NavBar />
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
                <Form fetchData={this.props.fetchData}/>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return { home: state.home };
};

// const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, {}, Actions>) => {
//   return bindActionCreators(
//     {
//       fetchData: fetchContractData
//     },
//     dispatch
//   );
// }

// const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, {}, Actions>) => ({
//   fetchData: () => dispatch(fetchContractData("")),
// });

export default connect(mapStateToProps, null)(HomePageContainer);
