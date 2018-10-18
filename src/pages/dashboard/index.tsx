import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { Container, Col, Card, CardBody, Row } from "reactstrap";
import { parsedData } from "./selector";
import ContractInfo from "./contract-info";
import { NavBar, LoadingView, Sidebar } from "shared/components";
import DataTable from "./data-table";
import dashboardDux, { fetchEtherBalance } from "./dashboard-dux";
const styles = require("./styles.module.scss");

interface IDispatchProps {
  dashboard: any;
  fetchEtherBalance: (data: string) => void;
}

class DashboardContainer extends Component<IDispatchProps> {
  componentDidMount() {
    // Fetch required data based off Publioc key Contract ID
    const { selectedContract, status } = this.props.dashboard;
    this.props.fetchEtherBalance(selectedContract);
  }
  render() {
    console.log("WHAT PROPS: ", this.props);
    const { selectedContract, contractData, status, etherBalance } = this.props.dashboard;
    if (status.loading) {
      return <LoadingView />;
    }
    return (
      <Container fluid>
        <NavBar />
        <Container className={styles.appLayoutWrapper}>
          <Container>
            <Col style={{ marginTop: 50, marginBottom: 50 }}>
              <ContractInfo etherBalance={etherBalance} selectedContract={selectedContract} />
            </Col>

            <Col lg={{ size: 10, offset: 1 }}>
              <DataTable data={contractData[selectedContract]} />
            </Col>
          </Container>
          <Sidebar isOpen={false}/>
        </Container>
        
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    dashboard: state.dashboard
    // parsedData: parsedData(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEtherBalance }
)(DashboardContainer);
