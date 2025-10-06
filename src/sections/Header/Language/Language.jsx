import styles from './language.module.scss';

function Language({ lang, setLang }) {
  return (
    <div className={styles.headerLanguage}>
      <button
        onClick={() => setLang('en')}
        className={lang === 'en' ? styles.activeWord : styles.noActiveWord}
      >
        EN
      </button>{' '}
      |{' '}
      <button
        onClick={() => setLang('ru')}
        className={lang === 'ru' ? styles.activeWord : styles.noActiveWord}
      >
        RU
      </button>
    </div>
  );
}
export default Language;
