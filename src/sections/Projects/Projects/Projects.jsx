import Project from '../Project/Project';
import { projects } from '../../../data/projects';

import styles from './projects.module.scss';

function Projects() {
  return (
    <div className={styles.projectCards}>
      {projects.map((project, i) => (
        <Project
          key={project.id}
          image={project.img}
          title={project.title}
          desc={project.desc}
          previewLink={project.previewLink}
          codeLink={project.codeLink}
          tags={project.tags.map((tag, index) => (
            <li key={index} className={styles.tag}>
              {tag}
            </li>
          ))}
        />
      ))}
    </div>
  );
}

export default Projects;
