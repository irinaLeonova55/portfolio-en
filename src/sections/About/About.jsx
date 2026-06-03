import styles from './about.module.scss';
import Headline from '../../components/Headline/Headline';

import foto from '../../assets/images/foto.png';
import Button from '../../components/Button/Button';

import animationStyles from '../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

function About({ supertitle, headline, subtitle, className }) {
  const [aboutRef, isAboutVisible] = useFadeInOnScroll();

  return (
    <section id="about" className={styles.aboutSection} ref={aboutRef}>
      <img
        src={foto}
        alt="My photo"
        className={`${animationStyles.scaleUp} ${
          isAboutVisible ? animationStyles.scaleUpVisible : ''
        }`}
      ></img>
      <div className={styles.textContainers}>
        <Headline
          supertitle="About me"
          headline={
            <>
              Who <span className={styles.accentWord}>Am I</span>
            </>
          }
        />
        <p
          className={`${styles.firstDesc} ${animationStyles.fadeIn} ${
            isAboutVisible ? animationStyles.fadeInVisible : ''
          }`}
          style={{ '--delay': '0.5s' }}
        >
          I started my career in digital marketing, where I learned how design,
          content, and user behavior shape the success of a product. That
          experience continues to influence the way I build websites today —
          with equal attention to aesthetics, usability, and purpose.
        </p>
        <p
          className={`${styles.secondDesc} ${animationStyles.fadeIn} ${
            isAboutVisible ? animationStyles.fadeInVisible : ''
          }`}
          style={{ '--delay': '0.6s' }}
        >
          As a frontend developer, I enjoy bringing visual ideas to life through
          code. I'm particularly interested in creative development, interactive
          experiences, and the intersection of design and technology. My goal is
          to create digital experiences that are not only functional, but also
          leave a lasting impression.
        </p>
        {/*<Button
          className={`${styles.btnTransparent} ${animationStyles.scaleUp} ${
            isAboutVisible ? animationStyles.scaleUpVisible : ''
          }`}
        style={{ '--delay': '0.6s' }}
        />*/}
      </div>
    </section>
  );
}

export default About;
