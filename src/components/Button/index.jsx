import Link from "next/link";
import styles from "./styles.module.scss";

export const Button = ({ children, link = "/", dark = false }) => {
  return (
    <>
      {!dark ? (
        <Link href={link}>
          <a className={styles.button}>{children}</a>
        </Link>
      ) : (
        <Link href={link}>
          <a className={`${styles.button} ${styles.buttonDark}`}>{children}</a>
        </Link>
      )}
    </>
  );
};
