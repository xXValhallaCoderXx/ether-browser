import React, { Component } from "react";
import {Container} from "reactstrap";
import {NavBar} from "shared/components";

export default class DashboardPageContainer extends Component {
  render() {
    return (
      <Container fluid style={{ padding: 0, height: "100%" }}>
        <NavBar />
        DASHBOARD
      </Container>
    );
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators(
//     {
//       fetchData: fetchWalletData
//     },
//     dispatch
//   );
// }
