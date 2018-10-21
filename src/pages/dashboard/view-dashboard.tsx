import React, { Component } from "react";
import { Container, Col, Card, Row } from "reactstrap";
import { NavBar, LoadingView } from "shared/components";
import { DataTable, SidePanel, ContractInfo } from "./components";
import { isMobile } from "react-device-detect";
const styles = require("./styles.module.scss");

interface IDispatchProps {
  dashboard: any;
  overViewData: any;
  selectedRow: any;
  fetchEtherBalance: (data: string) => void;
  fetchEtherRates: () => void;
  setCurrency: (currency: string) => void;
  selectRow: (data: any) => void;
}

interface IState {
  tableHeight: any;
}

class DashboardView extends Component<IDispatchProps, IState> {
  state = {
    tableHeight: 500
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this._contentViewHeight);
  }
  async componentDidMount() {
    window.addEventListener("resize", this._contentViewHeight);
    // Fetch required data based off Publioc key Contract ID
    const { selectedContract } = this.props.dashboard;
    await this.props.fetchEtherBalance(selectedContract);
    await this.props.fetchEtherRates();
    this._contentViewHeight();
  }
  render() {
    const { selectedContract, contractData, status } = this.props.dashboard;

    if (status.loading) {
      return <LoadingView />;
    }
    return (
      <Container fluid className={styles.appLayoutWrapper}>
        <NavBar
          handleChangeCurrency={(x: string) => this.props.setCurrency(x)}
        />
        <Container id="content-view" className={styles.contentViewWrapper}>
          <Col lg={{ size: 10, offset: 1 }}>
            <Row>
              <Card style={{ width: "100%", padding: 20 }}>
                <ContractInfo overViewData={this.props.overViewData} />
              </Card>
            </Row>
            <Row className={styles.datagridWrapper}>
              <Card style={{ padding: 20, width: "100%" }}>
                <DataTable
                  height={this.state.tableHeight}
                  selectRow={this.props.selectRow}
                  data={contractData[selectedContract]}
                />
              </Card>
            </Row>
          </Col>
        </Container>
        {this._handleDetailView()}
      </Container>
    );
  }

  _handleDetailView = () => {
    const {
      selectedRow,
      dashboard: { selectedContract }
    } = this.props;
    
    if (isMobile) {
      return <div />;
    }
    return (
      <Container className={styles.sidePanelWrapper}>
        <SidePanel
          currentContract={selectedContract}
          data={selectedRow}
          isOpen={true}
        />
      </Container>
    );
  };

  _contentViewHeight = () => {
    if (document.getElementById("content-view") !== null) {
      this.setState({
        tableHeight: document.getElementById("content-view")!.clientHeight * 0.6
      });
    } else {
      this.setState({ tableHeight: 500 });
    }
  };
}

export default DashboardView;
