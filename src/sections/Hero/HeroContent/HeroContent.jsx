import styles from './heroContent.module.scss';
import animationStyles from '../../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

function HeroContent() {
  const [ref, isVisible] = useFadeInOnScroll();

  return (
    <div ref={ref}>
      <h1
        className={`${animationStyles.heroTitle} ${
          isVisible ? animationStyles.heroTitleVisible : ''
        }`}
      >
        Creative <span className={styles.activeWord}>Frontend Developer</span>{' '}
        bridging design, technology and{' '}
        <span className={styles.activeWord}> user behavior</span>
        <br />
      </h1>
      <p
        className={`${styles.heroDesc} ${animationStyles.fadeIn} ${
          isVisible ? animationStyles.fadeInVisible : ''
        }`}
        style={{ '--delay': '0.2s' }}
      >
        Hi, I'm Irina Leonova. With experience in both marketing and frontend
        development, I create websites that are visually engaging, technically
        solid, and built with real users in mind.
      </p>
    </div>
  );
}
export default HeroContent;
