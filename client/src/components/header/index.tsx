'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import logo from '../../../public/logo-rs.png';
import { NavMenu } from './navMenu';
import { useState } from 'react';
import { NavMenuMobile } from './navMenuMobile';

export const Header = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(true);

  const borderTop = (color: string) => (
    <div style={{ backgroundColor: color }} className={styles['border-top']} />
  );

  return (
    <header className={styles['wrapper-header']}>
      <div className={styles['group-border-top']}>
        {borderTop('#52611A')} {borderTop('#850F23')} {borderTop('#D9A14A')}
      </div>
      {isNavMenuMobileOpen ? (
        <NavMenuMobile handleClose={setIsNavMenuMobileOpen} />
      ) : (
        <>
          <Image src={logo} alt="Rio grande do sul logo" />
          <NavMenu handleOpen={setIsNavMenuMobileOpen} />
        </>
      )}
    </header>
  );
};
