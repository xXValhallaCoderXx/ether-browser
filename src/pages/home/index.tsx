import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {IAppState} from "store/rootReducer";
import {fetchWalletData} from "./home-dux";

interface IProps {
  fetchData: () => void;
}

class HomePageContainer extends Component<IProps> {
  componentDidMount(){
    this.props.fetchData();
  }
  render() {
    return <div>Hello Ethereum</div>;
  }
}

const mapStateToProps = (state: IAppState) => {
  return { home: state.home };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      fetchData: fetchWalletData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
