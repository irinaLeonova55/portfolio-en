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
        <span className={styles.activeWord}>Creative Frontend</span> Developer
        blending
        <span className={styles.activeWord}> design and technology</span>
        <br />
      </h1>
      <p
        className={`${styles.heroDesc} ${animationStyles.fadeIn} ${
          isVisible ? animationStyles.fadeInVisible : ''
        }`}
        style={{ '--delay': '0.2s' }}
      >
        Hi there 🖐 I’m Irina Leonova. I create clean, responsive websites with
        a focus on user experience
      </p>
    </div>
  );
}
export default HeroContent;
