import React, { Component } from "react";
import { connect } from "react-redux";
import {IAppState} from "store/rootReducer";

class HomePageContainer extends Component {
  render() {
    return <div>Hello Ethereum</div>;
  }
}

const mapStateToProps = (state: IAppState) => {
  return { home: state.home };
};

export default connect(mapStateToProps)(HomePageContainer);
