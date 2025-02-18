import { boxIcons, menuItems } from '@/constants/boxIcon';
import styles from './styles.module.scss';
import BoxIcon from './BoxIcon/BoxIcon';
import MenuItem from './MenuItem/MenuItem';
import Logo from '@icons/images/logo_retina.png';
export default function Header() {
  return (
    <header className={styles.containerHeader}>
      <div className={styles.containerBox}>
        <div className={styles.containerBoxIcons}>
          {boxIcons.map((item) => {
            return (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            );
          })}
        </div>
        <div className={styles.containerMenu}>
          {menuItems.slice(0, 3).map((item) => {
            return <MenuItem content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img src={Logo} alt='Logo' className={styles.logo} />
      </div>
      <div className={styles.containerBox}>
        {menuItems.slice(0, 3).map((item) => {
          return <MenuItem content={item.content} href={item.href} />;
        })}
        {boxIcons.map((item) => {
          return <BoxIcon key={item.type} type={item.type} href={item.href} />;
        })}
      </div>
    </header>
  );
}
