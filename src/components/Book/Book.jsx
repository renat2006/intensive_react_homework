import styles from "./styles.module.css";
import { useState } from "react";

export const Book = ({ book }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.book}>
      <h3>{book.name}</h3>
      <div>{book.author}</div>
      <div className={styles.center__elements}>
        <div>{book.genre}</div>
        <div className={styles.amount__buttons}>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>
            -
          </button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      <div>
        Рейтинг <i>{book.rate}</i>
      </div>
      <h2>{book.price} ₽</h2>
    </div>
  );
};
