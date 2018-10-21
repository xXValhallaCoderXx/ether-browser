import React, { Component } from "react";
import { Col, Card, Row } from "reactstrap";
import { NavBar, LoadingView } from "shared/components";
import { DataTable, SidePanel, ContractInfo, TxModal } from "./components";
import { isMobile } from "react-device-detect";
const styles = require("./styles.module.scss");

interface IDispatchProps {
  dashboard: any;
  overViewData: any;
  selectedRow: any;
  tableData: any;
  fetchEtherBalance: (data: string) => void;
  fetchEtherRates: () => void;
  setCurrency: (currency: string) => void;
  selectRow: (data: any) => void;
}

interface IState {
  tableHeight: number;
  isOpen: boolean;
}

class DashboardView extends Component<IDispatchProps, IState> {
  state = {
    tableHeight: 500,
    isOpen: false
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
      <div className={`d-flex flex-row justify-content-center ${styles.appLayoutWrapper}`}>
        <NavBar
          handleChangeCurrency={(x: string) => this.props.setCurrency(x)}
        />
        <div id="content-view" className={`flex-grow-1 ${styles.contentViewWrapper}`} style={{maxWidth: 1000}}>
          <Col xs={{size: 10, offset: 1}}>
            <Row>
              <Card style={{width: "100%"}}>
                <ContractInfo overViewData={this.props.overViewData} />
              </Card>
            </Row>
            <Row className={styles.datagridWrapper}>
              <Card style={{ padding: 10, width: "100%" }}>
                <DataTable
                  toggle={this._handleToggle}
                  height={this.state.tableHeight}
                  selectRow={this.props.selectRow}
                  data={this.props.tableData}
                />
              </Card>
            </Row>
          </Col>
        </div>
        {this._handleDetailView()}
      </div>
    );
  }

  _handleDetailView = () => {
    const { selectedRow } = this.props;
    if (isMobile) {
      return (
        <TxModal
          toggle={this._handleToggle}
          txData={selectedRow}
          isOpen={this.state.isOpen}
        />
      );
    }
    return (
      <div className="d-flex align-content-center flex-wrap">
        <Card className={`align-self-center ${styles.sidePanelWrapper}`}>
          <SidePanel txData={selectedRow} />
        </Card>
      </div>
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

  _handleToggle = () => this.setState({ isOpen: !this.state.isOpen });
}

export default DashboardView;
