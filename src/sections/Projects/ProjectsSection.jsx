import Headline from '../../components/Headline/Headline';
import Projects from './Projects/Projects';

import styles from './projectsSection.module.scss';

function ProjectSection() {
  return (
    <section id="portfolio" className={styles.projectSection}>
      <Headline
        supertitle="Portfolio"
        headline={
          <>
            Showcase of My <span className={styles.accentWord}>Projects</span>
          </>
        }
        subtitle="Practical examples of my work with modern web technologies"
      />
      <Projects />
    </section>
  );
}

export default ProjectSection;
