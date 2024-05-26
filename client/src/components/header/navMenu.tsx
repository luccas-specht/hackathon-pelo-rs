import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';
import { navs } from './nav';
import arrow from '../../../public/Left-arrow.svg';

type Props = {
  handleOpen: (value: boolean) => void;
};

export const NavMenu = ({ handleOpen }: Props) => (
  <div className={styles['nav-styles']}>
    <span>
      <button
        onClick={() => {
          handleOpen(true);
        }}
      >
        <Image src={arrow} alt="Rio grande do sul logo" />
        voltar
      </button>
    </span>
    <div>
      {navs.map((element) => (
        <Link key={element.link} href={`${element.link}`}>
          {element.title}
        </Link>
      ))}
    </div>
  </div>
);
