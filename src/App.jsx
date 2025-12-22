import { useState, useEffect } from 'react';
import './styles/index.scss';

import './App.scss';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import ProjectSection from './sections/Projects/ProjectsSection';
import ContactsSection from './sections/Contacts/contactsSection';
import Footer from './sections/Footer/Footer';
import BurgerMenu from './sections/BurgerMenu/BurgerMenu';

function App() {
  const [lang, setLang] = useState('en'); //переключение языка
  const [mode, setMode] = useState(
    () => localStorage.getItem('mode') || 'light'
  ); //переключение темы
  const [isBurger, setIsBurger] = useState(false); //открытие и закрытие бургер меню
  const [activeSection, setActiveSection] = useState(''); //подсветка активного блока меню

  //тема
  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(mode);
    localStorage.setItem('mode', mode);
  }, [mode]);

  //переключение на светлую тему
  function chooseLightTheme() {
    setMode('light');
    localStorage.setItem('mode', 'light');
  }

  //переключение на темную тему
  function chooseDarkTheme() {
    setMode('dark');
    localStorage.setItem('mode', 'dark');
  }

  //открытие бургер меню
  function openBurger() {
    setIsBurger(true);
  }

  //закрытие бургер меню
  function closeBurger() {
    setIsBurger(false);
  }

  //подсветка активного блока в меню
  useEffect(() => {
    const sections = document.querySelectorAll('section'); //ссылки на все секции
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); //id нужной секции
          }
        });
      },
      { threshold: 0.3 } // секция становится активной, если видно 30%
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="site">
      <div className="App">
        <Header
          setLang={setLang}
          lang={lang}
          mode={mode}
          chooseLightTheme={chooseLightTheme}
          chooseDarkTheme={chooseDarkTheme}
          openBurger={openBurger}
          activeSection={activeSection}
        />
        <main>
          <Hero />
          <Skills id="stack" />
          <ProjectSection id="portfolio" />
          <About id="about" />
          {/*<ContactsSection mode={mode} id="contacts" />*/}
        </main>
        <Footer mode={mode} />
      </div>
      <BurgerMenu mode={mode} isBurger={isBurger} closeBurger={closeBurger} />
    </div>
  );
}

export default App;
