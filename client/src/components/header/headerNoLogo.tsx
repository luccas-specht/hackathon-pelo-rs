'use client';

import styles from './styles.module.css';
import { NavMenu } from './navMenu';
import { useState } from 'react';
import { NavMenuMobile } from './navMenuMobile';

export const HeaderNoLogo = () => {
  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);

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
          <NavMenu handleOpen={setIsNavMenuMobileOpen} />
        </>
      )}
    </header>
  );
};
