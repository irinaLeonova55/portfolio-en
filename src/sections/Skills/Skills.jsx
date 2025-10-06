import styles from './skills.module.scss';
import Headline from '../../components/Headline/Headline';
import SkillCards from './SkillCards/SkillCards';

function Skills({ supertitle, headline, subtitle }) {
  return (
    <section id="stack" className={styles.skillsSection}>
      <Headline
        supertitle="Tech Stack"
        headline={
          <>
            <span className={styles.accentWord}>Skills</span> and{' '}
            <span className={styles.accentWord}>Tools</span>
          </>
        }
        subtitle="Technologies I work with to build modern and efficient websites."
      />
      <SkillCards />
    </section>
  );
}
export default Skills;
