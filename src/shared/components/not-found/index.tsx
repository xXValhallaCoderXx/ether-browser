import React, { Component } from "react";
const styles = require("./styles.module.scss");

interface IProps {
  msg?: string;
}

export default class LoadingView extends Component<IProps> {
  render() {
    const {msg} = this.props;
    return (
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ padding: 10, height: "100%" }}
      >
        <div className={styles.notFoundWrapper}>
          <p className={styles.notFoundText}>
            {msg || "Uh Oh! Page Not Found..."}
          </p>
        </div>
      </div>
    );
  }
}
