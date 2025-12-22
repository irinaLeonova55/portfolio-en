import { useState, useEffect, useRef } from 'react';

import Button from '../../components/Button/Button';
import Language from './Language/Language';
import Mode from './Mode/Mode';
import Nav from '../../components/Nav/Nav';

import styles from './header.module.scss';
import logo from '../../assets/icons/logo.svg';
import burger from '../../assets/icons/menu-line.svg';

function Header({
  lang,
  setLang,
  mode,
  activeSection,
  chooseLightTheme,
  chooseDarkTheme,
  openBurger,
}) {
  const [isSticky, setIsSticky] = useState(false); //шапка, появяется при скролле
  const heroRef = useRef(null);

  //наблюдатель, появление шапки при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      //первый элемент из списка элементов (hero)
      ([entry]) => {
        // Если элемент видно, ставится false, если вышел из зоны видимости true
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 } // 10% пересечения
    );

    if (heroRef.current) {
      observer.observe(heroRef.current); //начинаем наблюдение за hero
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current); //убираем наблюдение
    };
  }, []);

  return (
    <>
      <div ref={heroRef}></div>
      <header
        className={`${styles.header} ${isSticky ? styles.sticky : ''} ${
          mode === 'light' ? styles.headerLight : styles.headerDark
        }`}
      >
        <div className={styles.headerLogo}>
          <a href="/" className={styles.logoImage}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <Nav listStyle={styles.navList} activeSection={activeSection} />
        <Language lang={lang} setLang={setLang} />
        <Mode
          mode={mode}
          chooseLightTheme={chooseLightTheme}
          chooseDarkTheme={chooseDarkTheme}
        />
        {/*<Button className={styles.btnTransparent} />*/}
        <button className={styles.burgerIcon} onClick={openBurger}>
          <img src={burger} alt="Open menu" />
        </button>
      </header>
    </>
  );
}
export default Header;
