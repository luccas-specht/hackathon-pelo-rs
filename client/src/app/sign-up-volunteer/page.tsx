import Image from 'next/image';
import logo from '../../../public/logo-refugio-legal.svg';
import emailIcon from '../../../public/email.svg';
import senhaIcon from '../../../public/senha.svg';

import { HeaderNoLogo } from '@/components/header/headerNoLogo';
import styles from './styles.module.css';

export default function signUpVolunteer() {
  return (
    <>
      <HeaderNoLogo />
      <div className={styles['container']}>
        <Image src={logo} alt="Logo Refugio Legal" />
        <span>Login</span>
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
            <button>Criar Conta</button>
          </section>
        </main>
      </div>
    </>
  );
}
