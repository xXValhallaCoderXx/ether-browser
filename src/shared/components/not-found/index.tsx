import React, { Component } from "react";
const styles = require("./styles.module.scss");

export default class LoadingView extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ padding: 10, height: "100%" }}
      >
        <div className={styles.notFoundWrapper}>
          <p className={styles.notFoundText}>
            Uh Oh! Page Not Found...
          </p>
        </div>
      </div>
    );
  }
}
