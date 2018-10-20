import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { IRootState } from "store/rootReducer";
import { fetchContractData } from "./home-dux";

import HomePageView from "./home-view";


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
