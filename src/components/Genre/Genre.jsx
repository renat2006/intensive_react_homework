import { useState } from "react";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Genre = ({ genre, setActiveGenre, className }) => {
  console.log(genre);
  return (
    <div
      className={classnames(styles.genre, className)}
      onClick={() => setActiveGenre(genre)}
    >
      {genre.name}
    </div>
  );
};
