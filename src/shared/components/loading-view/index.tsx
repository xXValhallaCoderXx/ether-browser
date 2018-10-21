import React, { Component } from "react";
import { Loader } from "shared/components";
const styles = require("./styles.module.scss");

export default class LoadingView extends Component {
  render() {
    return (
      <div className={styles.loaderViewWrapper}>
        <h3>Crypto Gremlins Hard At Work...</h3>
        <Loader />
      </div>
    );
  }
}
