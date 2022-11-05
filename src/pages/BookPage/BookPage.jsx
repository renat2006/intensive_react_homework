import styles from "./styles.module.css";
import { BookPageBook } from "../../components/BookPageBook/BookPageBook";
import { Annotation } from "../../components/Annotation/Annotation";
import { ReviewList } from "../../components/ReviewList/ReviewList";

export const BookPage = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__2columns}>
        <BookPageBook book={props.book}></BookPageBook>
        <Annotation book={props.book}></Annotation>
      </div>
      <ReviewList book={props.book}></ReviewList>
    </div>
  );
};
