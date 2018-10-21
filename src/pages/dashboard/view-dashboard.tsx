import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { Container, Col, Card, CardBody, Row } from "reactstrap";
import { overViewData } from "./selector";
import ContractInfo from "./components/contract-info";
import { NavBar, LoadingView } from "shared/components";
import DataTable from "./components/data-table";
import Sidebar from "./components/side-panel";
import { fetchEtherBalance, fetchEtherRates } from "./dux-init-data";
import { setCurrency, selectRow } from "./dux-dashboard";
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
  }


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
    const {selectedRow} = this.props;
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
        <Container className={styles.sidePanelWrapper}>
          <Sidebar data={selectedRow} isOpen={true}/>
        </Container>
      </Container>
    );
  }

  _contentViewHeight = () => {
    if(document.getElementById('content-view') !== null){
      this.setState({ tableHeight: document.getElementById('content-view')!.clientHeight * .6})
    }else {
      this.setState({tableHeight: 500})
    }
    
  };
}

export default DashboardView;

// if (isMobile) {
//   alert("OPEN MODAL")
// }else {
//   console.log("DESKTOP: ")
//   this.props.selectRow(rowInfo.original);
// }