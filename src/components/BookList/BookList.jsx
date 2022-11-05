import styles from "./styles.module.css";
import {Book} from "../Book/Book";


export const BookList = ({ activeGenre }) => {
  return (
    <div className={styles.book__list}>
      {activeGenre.books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
