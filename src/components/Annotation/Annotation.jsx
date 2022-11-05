import styles from "./styles.module.css";
import { useState } from "react";

export const Annotation = ({ book }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.annotation}>
      <h4>Аннотация</h4>
      <div>{book.annotation}</div>
    </div>
  );
};
