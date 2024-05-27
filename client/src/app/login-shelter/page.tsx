'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo-refugio-legal.svg';
import emailIcon from '../../../public/email.svg';
import senhaIcon from '../../../public/senha.svg';
import { HeaderNoLogo } from '@/components/header/headerNoLogo';
import styles from './styles.module.css';

export default function LoginShelter() {
  return (
    <>
      <HeaderNoLogo />
      <div className={styles['container']}>
        <Image src={logo} alt="Logo Refugio Legal" />
        <span>Criar conta</span>
        <main>
          <form>
            <div>
              <Image src={emailIcon} alt="icone de email" />
              <input type="text" placeholder="E-mail" />
            </div>
            <div>
              <Image src={senhaIcon} alt="icone de senha" />
              <input type="password" placeholder="Senha" />
            </div>
          </form>
          <section>
            <button>Fazer Login</button>
            <Link href={'/sign-up-shelter'}>Criar conta</Link>
          </section>
        </main>
      </div>
    </>
  );
}
