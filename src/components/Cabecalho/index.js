import styles from './cabecalho.module.css';

function Cabecalho({ children }) {
  return (
    <header className={styles.cabecalho}>
      <div className={`${styles.cabecalho__container} container`}>
        <h1 className={styles.cabecalho__logo}>
          <a href="/">Twittelum</a>
        </h1>
        {children}
      </div>
    </header>
  );
}

export default Cabecalho;
