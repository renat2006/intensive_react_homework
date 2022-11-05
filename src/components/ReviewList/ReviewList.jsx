import styles from "./styles.module.css";
import { Book } from "../Book/Book";
import { Review } from "../Review/Review";

export const ReviewList = ({ book }) => {
  return (
    <div className={styles.review__list}>
      {book.reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
