import React, { Component } from "react";
import { connect } from "react-redux";
import { IRootState } from "store/rootReducer";
import { overViewData, selectedRow } from "./selector";
import { fetchEtherBalance, fetchEtherRates } from "./dux-init-data";
import { setCurrency, selectRow } from "./dux-dashboard";

import DashboardView from "./view-dashboard";

const mapStateToProps = (state: IRootState) => {
  return {
    dashboard: state.initDashboard,
    overViewData: overViewData(state),
    selectedRow: selectedRow(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEtherBalance, fetchEtherRates, setCurrency, selectRow }
)(DashboardView);
