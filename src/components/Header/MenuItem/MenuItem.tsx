import styles from './styles.module.scss';

interface MenuItemProps {
  content: string;
  href: string;
}

export default function MenuItem({ content, href }: MenuItemProps) {
  return <span>{content}</span>;
}
