import Link from 'next/link';
import styles from './styles.module.css';
import { navs } from './nav';

import Image from 'next/image';
import logo from '../../../public/logo-rs.png';
import logoRefugioLegal from '../../../public/logo-refugio-legal.svg';

type Props = {
  handleClose: (value: boolean) => void;
};

export const NavMenuMobile = ({ handleClose }: Props) => {
  const backgroundColors = ['#D9A14A', '#850F23', '#52611A'];

  const borderTop = (color: string) => (
    <div style={{ backgroundColor: color }} className={styles['border-top']} />
  );

  return (
    <header className={`${styles['nav-mobile-wrapper']}`}>
      <div className={styles['group-border-top']}>
        {borderTop(backgroundColors[2])} {borderTop(backgroundColors[1])}
        {borderTop(backgroundColors[0])}
      </div>

      <Image src={logoRefugioLegal} alt="Refugio legal logo" />

      <section className={styles['nav-mobile-wrapper-section-links']}>
        {navs.map((element, index) => (
          <Link
            key={element.link}
            onClick={() => handleClose(false)}
            href={`${element.link}`}
            style={{ backgroundColor: backgroundColors[index] }}
          >
            {element.title}
          </Link>
        ))}
      </section>

      <span className={styles['about-it']}>
        Promovendo a conexão entre advogados voluntários e afetados pela
        enchente.
      </span>

      <Image src={logo} alt="Rio grande do sul logo" />
    </header>
  );
};
