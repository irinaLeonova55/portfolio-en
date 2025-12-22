import Button from '../../components/Button/Button';
import HeroContent from './HeroContent/HeroContent';
import Social from '../../components/Social/Social';

import styles from './hero.module.scss';

import animationStyles from '../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

function Hero() {
  const [heroRef, isHeroVisible] = useFadeInOnScroll();
  const variant = 'purple';

  return (
    <section className={styles.hero}>
      <div ref={heroRef}>
        <HeroContent />
        <div className={styles.heroBtn}>
          {/*<Button
            className={`${styles.btnSolid} ${animationStyles.scaleUp} ${
              isHeroVisible ? animationStyles.scaleUpVisible : ''
            }`}
            style={{ '--delay': '0.3s' }}
          />*/}
          <a
            className={`${styles.linkPortfolio} ${animationStyles.fadeIn} ${
              isHeroVisible ? animationStyles.fadeInVisible : ''
            }`}
            href="#portfolio"
            style={{ '--delay': '0.4s' }}
          >
            View Portfolio
          </a>
        </div>
      </div>

      <Social
        variant="purple"
        styleSocial={styles.heroSocialList}
        heroIcon={`${styles.heroIcon} ${animationStyles.icon} ${
          isHeroVisible ? animationStyles.iconVisible : ''
        }`}
      />
    </section>
  );
}

export default Hero;
