import styles from './contactsSection.module.scss';

import Social from '../../components/Social/Social';

import animationStyles from '../../styles/fadeIn.module.scss';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';

function ContactsSection({ mode, style }) {
  const [contactsRef, isContactsVisible] = useFadeInOnScroll();

  return (
    <section id="contacts" className={styles.contactsSection}>
      <div className={styles.contactsContainer} ref={contactsRef}>
        <span
          className={`${styles.contactsSupertitle} ${
            animationStyles.contacts
          } ${isContactsVisible ? animationStyles.contactsVisible : ''}`}
        >
          Contact me
        </span>
        <h2
          className={`${styles.contantsHeadline} ${animationStyles.contacts} ${
            isContactsVisible ? animationStyles.contactsVisible : ''
          }`}
          style={{ '--delay': '0.2s' }}
        >
          Let’s Work <span className={styles.accentWord}>Together</span>
        </h2>
        <p
          className={`${styles.contactsDesc}  ${animationStyles.contacts} ${
            isContactsVisible ? animationStyles.contactsVisible : ''
          }`}
          style={{ '--delay': '0.4s' }}
        >
          Ready to create something unique and meaningful? I’m here to help turn
          your vision into a visual, innovative, and impactful reality.
        </p>
        <p
          className={`${styles.email}  ${animationStyles.contacts} ${
            isContactsVisible ? animationStyles.contactsVisible : ''
          }`}
          style={{ '--delay': '0.6s' }}
        >
          <span className={styles.accentWord}>email:</span>{' '}
         <a href='mailto:leonovadeveloper@gmail.com'>leonovadeveloper@gmail.com</a> 
        </p>
        <Social
          variant={mode === 'light' ? 'black' : 'white'}
          styleSocial={`${styles.contactsSocial}  ${animationStyles.contacts} ${
            isContactsVisible ? animationStyles.contactsVisible : ''
          }`}
          style={{ '--delay': '0.8s' }}
        />
      </div>
    </section>
  );
}

export default ContactsSection;
