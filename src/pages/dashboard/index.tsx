import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { Container, Col, Card, CardBody, Row } from "reactstrap";
import { overViewData } from "./selector";
import ContractInfo from "./components/contract-info";
import { NavBar, LoadingView, Sidebar } from "shared/components";
import DataTable from "./components/data-table";
import { fetchEtherBalance, fetchEtherRates } from "./init-data-dux";
import { setCurrency, selectRow } from "./dashboard-dux";
const styles = require("./styles.module.scss");

interface IDispatchProps {
  dashboard: any;
  overViewData: any;
  fetchEtherBalance: (data: string) => void;
  fetchEtherRates: () => void;
  setCurrency: (currency: string) => void;
  selectRow: (data: any) => void;
}

class DashboardContainer extends Component<IDispatchProps> {
  async componentDidMount() {
    // Fetch required data based off Publioc key Contract ID
    const { selectedContract } = this.props.dashboard;
    await this.props.fetchEtherBalance(selectedContract);
    await this.props.fetchEtherRates();
  }
  render() {
    const { selectedContract, contractData, status } = this.props.dashboard;
    if (status.loading) {
      return <LoadingView />;
    }
    console.log("props: ", this.props);
    return (
      <Container fluid>
        <NavBar
          handleChangeCurrency={(x: string) => this.props.setCurrency(x)}
        />
        <Container className={styles.appLayoutWrapper}>
          <Container>
            <Col style={{ marginTop: 50, marginBottom: 50 }}>
              <ContractInfo overViewData={this.props.overViewData} />
            </Col>

            <Col lg={{ size: 11 }}>
              <DataTable selectRow={this.props.selectRow} data={contractData[selectedContract]} />
            </Col>
          </Container>
          <Sidebar isOpen={false} />
        </Container>
      </Container>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    dashboard: state.initDashboard,
    overViewData: overViewData(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEtherBalance, fetchEtherRates, setCurrency, selectRow }
)(DashboardContainer);
