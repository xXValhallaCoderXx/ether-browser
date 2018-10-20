import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IRootState } from "store/rootReducer";
import { fetchContractData } from "./dux-home";

import HomePageView from "./view-home";


const mapStateToProps = (state: IRootState) => {
  return { home: state.home };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchContractData
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageView);
