import styles from './language.module.scss';

function Language({ lang, setLang }) {
  return (
    <div className={styles.headerLanguage}>
      <a
        href="https://irinaLeonova55.github.io/portfolio-en/"
        onClick={() => setLang('en')}
        className={lang === 'en' ? styles.activeWord : styles.noActiveWord}
      >
        EN
      </a>{' '}
      |{' '}
      <a
        href="https://irinaLeonova55.github.io/portfolio-ru/"
        onClick={() => setLang('ru')}
        className={lang === 'ru' ? styles.activeWord : styles.noActiveWord}
      >
        RU
      </a>
    </div>
  );
}
export default Language;
