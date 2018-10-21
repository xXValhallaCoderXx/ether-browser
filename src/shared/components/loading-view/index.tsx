import React, { Component } from "react";
import { Loader } from "shared/components";
const styles = require("./styles.module.scss");

export default class LoadingView extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ padding: 10, height: "100%" }}
      >
        <div className={styles.loadingWrapper}>
          <p className={styles.loadingText}>
            Crypto Gremlins Hard At Work...
          </p>
          <Loader />
        </div>
      </div>
    );
  }
}
