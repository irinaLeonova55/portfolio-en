import styles from './project.module.scss';

import animationStyles from '../../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../../hooks/useFadeInOnScroll';

function Project({ image, title, desc, tags, previewLink, codeLink }) {
  const [cardRef, isCardVisible] = useFadeInOnScroll();

  return (
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${animationStyles.card} ${
        isCardVisible ? animationStyles.cardVisible : ''
      }`}
    >
      <img className={styles.projectPicture} src={image} alt={title} />
      <ul className={styles.tags}>{tags}</ul>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDesc}>{desc}</p>
      <div className={styles.linksContainer}>
        <a className={styles.projectLinks} href={previewLink}>
          Live Preview
        </a>
        <a className={styles.projectLinks} href={codeLink}>
          View Code
        </a>
      </div>
    </div>
  );
}
export default Project;
