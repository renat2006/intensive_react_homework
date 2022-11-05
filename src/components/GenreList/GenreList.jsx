import { Genre } from "../Genre/Genre";
import styles from "./styles.module.css";
import { useState } from "react";
import classnames from "classnames";

export const GenreList = ({ genres, setActiveGenre, activeGenre }) => {
  return (
    <div className={styles.genre__list}>
      {genres.map((genre) => (
        <Genre
          key={genre.id}
          genre={genre}
          setActiveGenre={setActiveGenre}
          className={classnames(styles.tab, {
            [styles.activeTab]: activeGenre.id === genre.id,
          })}
        />
      ))}
    </div>
  );
};
