import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { overViewData, selectedRow, tableData, loadingState } from "./selector";
import { fetchEtherBalance, fetchEtherRates } from "./dux-init-data";
import { setCurrency, selectRow } from "./dux-dashboard";
import { fetchContractData } from "pages/home/dux-home";

import DashboardView from "./view-dashboard";

const mapStateToProps = (state: IRootState) => {
  return {
    dashboard: state.initDashboard,
    overViewData: overViewData(state),
    selectedRow: selectedRow(state),
    tableData: tableData(state),
    fetchingState: loadingState(state)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchEtherBalance,
    fetchEtherRates,
    setCurrency,
    selectRow,
    fetchContractData
  }
)(DashboardView);
