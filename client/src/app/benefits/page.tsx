'use client';

import { Header } from '@/components/header';
import styles from './styles.module.css';

export default function Benefits() {
  const callApi = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/oab/check/luccas/123312'
      );
      const data = await response.json();
      console.log({ data });
    } catch (error) {
      console.log(error);
    }
  };
  callApi();
  return (
    <>
      <Header />
      <div className={styles['container']}></div>
    </>
  );
}
