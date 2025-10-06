import styles from './skillCard.module.scss';
import animationStyle from '../../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

function SkillCard({ icon, title, desc }) {
  const [skillRef, isSkillVision] = useFadeInOnScroll();

  return (
    <div
      ref={skillRef}
      className={`${styles.skillcard} ${animationStyle.skill} ${
        isSkillVision ? animationStyle.skillVisible : ''
      }`}
    >
      <img src={icon} className={styles.cardIcon} alt={title} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
}

export default SkillCard;
