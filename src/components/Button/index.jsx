import Link from "next/link";
import styles from "./styles.module.scss";

export const Button = ({ children, link = "/", dark = false, ...props }) => {
  return (
    <>
      {!dark ? (
        <Link href={link}>
          <a className={styles.button} {...props}>
            {children}
          </a>
        </Link>
      ) : (
        <Link href={link}>
          <a className={`${styles.button} ${styles.buttonDark}`} {...props}>
            {children}
          </a>
        </Link>
      )}
    </>
  );
};
