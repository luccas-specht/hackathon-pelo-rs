import { Header } from '@/components/header';
import styles from './styles.module.css';
import { getAllBenefits } from '@/server/getAllBenefits';
import { BenefitList } from '@/components/BenefitList';

async function getData() {
  return getAllBenefits();
}

export default async function Benefits() {
  const benefits = await getData();

  /*

  const callApi = async () => {
    try {
      const response = await fetch(
        'http://localhost:8080/oab/check/VALMIR RODRIGUES DA SILVA/103028'
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



*/

  return (
    <>
      <Header />
      <div className={styles['container']}>
        <section className={styles['details']}>
          <span>Afetados da enchente no Rio Grande do Sul:</span>
          <strong>Benefícios e direitos</strong>
        </section>
        <div className={styles['wrapper-button']}>
          <button>Saber meus benefícios</button>
        </div>
        <section className={styles['benefits']}>
          <BenefitList benefits={benefits} />
        </section>
      </div>
    </>
  );
}
