import styles from "./styles.module.scss";

export const HeaderPage = ({ subtitle, title }) => {
  return (
    <section className={styles.headerPage}>
      <div className="mainContainer">
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </div>
    </section>
  );
};
