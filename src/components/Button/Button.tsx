import styles from './style.module.scss';

export default function Button() {
  return (
    <div>
      <button className={styles.btn1}>S</button>
      <button className={styles.btn1}>M</button>
      <button className={styles.btn2}>X</button>
    </div>
  );
}
