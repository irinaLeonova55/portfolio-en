import styles from './footer.module.scss';

import Social from '../../components/Social/Social';

function Footer({ mode }) {
  return (
    <footer
      className={mode === 'light' ? styles.footerLight : styles.footerDark}
    >
      <span>© 2026 All Rights Reserved</span>
      <Social
        variant={mode === 'light' ? 'black' : 'white'}
        styleSocial={styles.footerSocial}
      />
    </footer>
  );
}

export default Footer;
