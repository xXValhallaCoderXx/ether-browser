import React from "react";
const styles = require("./styles.module.scss");
interface IProps {
  size?: any;
}

const Loader: React.SFC<IProps> = () => {
  return <div className={styles.loader} />;
};

export default Loader;
