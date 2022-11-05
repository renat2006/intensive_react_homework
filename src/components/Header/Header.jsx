import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.nav}>
        <div className={styles.nav__content}>
          <div className={styles.nav__links}>
            <>Магазин</>
          </div>
        </div>
      </div>
    </header>
  );
};
