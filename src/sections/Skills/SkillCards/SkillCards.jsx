import SkillCard from '../SkillCard/SkillCard';
import { skills } from '../../../data/stackList.js';

import styles from './skillCards.module.scss';

function SkillCards() {
  return (
    <div className={styles.skillCards}>
      {skills.map((skill, i) => (
        <SkillCard
          key={skill.id}
          icon={skill.icon}
          title={skill.title}
          desc={skill.desc}
        />
      ))}
    </div>
  );
}
export default SkillCards;
