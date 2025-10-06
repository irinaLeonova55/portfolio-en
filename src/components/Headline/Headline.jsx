import styles from './headline.module.scss';
import animationStyles from '../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

function Headline({ supertitle, headline, subtitle }) {
  const [titleRef, isTitleVisible] = useFadeInOnScroll();

  return (
    <div className={styles.headlineContainer} ref={titleRef}>
      <span
        className={`${styles.superTitle} ${animationStyles.slideDown} ${
          isTitleVisible ? animationStyles.slideDownVisible : ''
        }`}
      >
        {supertitle}
      </span>
      <h2
        className={`${animationStyles.fadeIn} ${
          isTitleVisible ? animationStyles.fadeInVisible : ''
        }`}
        style={{ '--delay': '0.2s' }}
      >
        {headline}
      </h2>
      <p
        className={`${styles.subtitle} ${animationStyles.fadeIn} ${
          isTitleVisible ? animationStyles.fadeInVisible : ''
        }`}
        style={{ '--delay': '0.4s' }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default Headline;
