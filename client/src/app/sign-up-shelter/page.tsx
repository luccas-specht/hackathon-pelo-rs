'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/logo-refugio-legal.svg';
import emailIcon from '../../../public/email.svg';
import senhaIcon from '../../../public/senha.svg';
import usersIcon from '../../../public/users.svg';
import umbrellaIcon from '../../../public/umbrella.svg';
import smartphoneIcon from '../../../public/smartphone.svg';
import homeIcon from '../../../public/home.svg';

import { HeaderNoLogo } from '@/components/header/headerNoLogo';
import styles from './styles.module.css';

export default function LoginVolunteer() {
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
            <div>
              <Image src={smartphoneIcon} alt="icone de telefone" />
              <input type="text" placeholder="Número telefone" />
            </div>
            <div>
              <Image src={umbrellaIcon} alt="icone de guarda-chuva" />
              <input type="text" placeholder="Nome abrigo" />
            </div>
            <div>
              <Image src={usersIcon} alt="icone de usuários" />
              <input type="number" placeholder="Número de abrigados" />
            </div>
            <span className={styles['container-text']}>
              <Image src={homeIcon} alt="icone de casa" />
              Endereço do abrigo
            </span>
            <div className={styles['wrapper-inputs']}>
              <input type="text" placeholder="Rua" />
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="Mais Informações (opcional)" />
            </div>
          </form>
          <section className={styles['tip']}>
            <h6>
              Para confirmar a criação de sua conta, um responsável entrará em
              contato para aprovar o cadastro do abrigo.
            </h6>
          </section>
          <section>
            <button>Fazer Login</button>
            <Link href={'/sign-up-volunteer'}>Criar conta</Link>
          </section>
        </main>
      </div>
    </>
  );
}
