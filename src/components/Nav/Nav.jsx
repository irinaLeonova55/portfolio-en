import styles from './nav.module.scss';

function Nav({ listStyle, onClick, activeSection }) {
  const navLinks = [
    { label: 'Tech Stack', href: 'stack' },
    { label: 'Portfolio', href: 'portfolio' },
    { label: 'About me', href: 'about' },
    { label: 'Contacts', href: 'contacts' },
  ];

  console.log('activeSection', activeSection)

  return (
    <nav className={styles.headerNav}>
      <ul className={listStyle}>
        {navLinks.map((navLink) => (
          <li
            key={navLink.href}
            className={
              activeSection === navLink.href
                ? styles.activeSection
                : ''
            }
          >
            <a href={`#${navLink.href}`} onClick={onClick}>
              {navLink.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
