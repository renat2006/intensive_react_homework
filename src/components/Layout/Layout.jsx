import { Header } from "../Header/Header";

import styles from "./styles.module.css";

export const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div>{props.children}</div>
    </div>
  );
};
