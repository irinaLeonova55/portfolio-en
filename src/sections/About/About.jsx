import styles from './about.module.scss';
import Headline from '../../components/Headline/Headline';

import foto from '../../assets/images/foto.png';
import Button from '../../components/Button/Button';

import animationStyles from '../../styles/fadein.module.scss';
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
          I enjoy turning ideas into responsive and visually appealing websites
          that combine design and code. I value clean, well-structured solutions
          and have experience with responsive layout, React, SCSS, and Git.
        </p>
        <p
          className={`${styles.secondDesc} ${animationStyles.fadeIn} ${
            isAboutVisible ? animationStyles.fadeInVisible : ''
          }`}
          style={{ '--delay': '0.6s' }}
        >
          Interested in web design, I aim to blend technical precision with
          aesthetic interfaces while focusing on frontend projects for my
          portfolio and growing into a Middle-level developer.
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
