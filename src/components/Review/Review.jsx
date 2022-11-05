import styles from "./styles.module.css";
import { useState } from "react";

export const Review = ({ review }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.review}>
      <div className={styles.center__position}>
        <h4>{review.user.name}</h4>
        <div>
          Рейтинг <i>{review.rate}</i>
        </div>
      </div>
      <p>{review.text}</p>
    </div>
  );
};
