import bookStyles from "../Book/styles.module.css";
import styles from "./styles.module.css";
import { useState } from "react";
import classnames from "classnames";

export const BookPageBook = ({ book }) => {
  const [count, setCount] = useState(0);
  return (
    <div className={classnames(bookStyles.book, styles.book)}>
      <h3>{book.name}</h3>
      <div>{book.author}</div>
      <div>{book.genre}</div>
      <div>
        Рейтинг <i>{book.rate}</i>
      </div>
      <div className={styles.right__elements}>
        <div>
          <h2>{book.price} ₽</h2>
        </div>
        <div className={bookStyles.amount__buttons}>
          <button onClick={() => setCount(count - 1)} disabled={count === 0}>
            -
          </button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};
