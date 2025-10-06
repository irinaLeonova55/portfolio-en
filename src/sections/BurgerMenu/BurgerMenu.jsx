import styles from './burgerMenu.module.scss';
import plusIcon from '../../assets/icons/plus.svg';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Button/Button';

function BurgerMenu({ mode, isBurger, closeBurger, onClick }) {
  return (
    <div
      className={`${styles.burger} ${
        mode === 'light' ? styles.burgerLight : styles.burgerDark
      } ${isBurger ? styles.burgerVisible : ''}`}
    >
      <div className={styles.menuHeader}>
        <span className={styles.menuTitle}>Menu</span>
        <button
          className={styles.closeBtn}
          onClick={closeBurger}
          aria-label="Закрыть меню"
        >
          <img src={plusIcon} />
        </button>
      </div>

      <Nav listStyle={styles.burgerList} onClick={closeBurger} />
      <Button className={styles.btnTransparent} onClick={closeBurger} />
    </div>
  );
}

export default BurgerMenu;
