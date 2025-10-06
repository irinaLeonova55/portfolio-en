import styles from './mode.module.scss';

function Mode({ mode, chooseLightTheme, chooseDarkTheme }) {
  return (
    <div className={styles.headerMode}>
      <button
        onClick={() => chooseLightTheme()}
        className={mode === 'light' ? styles.activeWord : styles.noActiveWord}
      >
        Light
      </button>{' '}
      |{' '}
      <button
        onClick={() => chooseDarkTheme()}
        className={mode === 'dark' ? styles.activeWord : styles.noActiveWord}
      >
        Dark
      </button>
    </div>
  );
}

export default Mode;
