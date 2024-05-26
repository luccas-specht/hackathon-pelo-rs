import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

import arrow from '../../../public/Left-arrow.svg';

export const NavMenu = () => {
  const navs = [
    {
      title: 'Sou abrigo',
      link: '/login',
    },
    {
      title: 'Sou voluntário',
      link: '/login',
    },
    {
      title: 'Fui afetado pelas enchentes',
      link: '/benefits',
    },
  ];

  return (
    <div className={styles['nav-styles']}>
      <span>
        <button>
          <Image src={arrow} alt="Rio grande do sul logo" />
          voltar
        </button>
      </span>
      {navs.map((element) => (
        <Link key={element.link} href={`${element.link}`}>
          {element.title}
        </Link>
      ))}
    </div>
  );
};
