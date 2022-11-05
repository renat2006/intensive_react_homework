import { GenreList } from "../../components/GenreList/GenreList";
import { BookList } from "../../components/BookList/BookList";
import styles from "./styles.module.css";
import { useState } from "react";

export const GenrePage = (props) => {
  const [activeGenre, setActiveGenre] = useState(props.genres[0]);
  return (
    <div className={styles.container}>
      <GenreList
        genres={props.genres}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
      ></GenreList>
      <BookList activeGenre={activeGenre}></BookList>
    </div>
  );
};
