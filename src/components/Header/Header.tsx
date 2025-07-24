import styles from "./Header.module.scss";

const Header = () => {
  const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    hour: undefined,
    minute: undefined,
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <h1 className={styles.header}>News Portal</h1>
      <div></div>
    </div>
  );
};

export default Header;
