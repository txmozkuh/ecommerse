import styles from '../styles.module.scss';
import facebookIcon from '@icons/svgs/facebook.svg';
import instagramIcon from '@icons/svgs/instagram.svg';
import youtubeIcon from '@icons/svgs/youtube.svg';

interface BoxIconProps {
  type: string;
  href: string;
}

export default function BoxIcon({ type, href }: BoxIconProps) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type: string) => {
    switch (type) {
      case 'facebook':
        return facebookIcon;
      case 'instagram':
        return instagramIcon;
      case 'youtube':
        return youtubeIcon;
    }
  };
  return (
    <a href={href} className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={href} />
    </a>
  );
}
