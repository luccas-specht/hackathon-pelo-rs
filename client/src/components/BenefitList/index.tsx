import arrow from '../../../public/right-arrow.svg';

import styles from './styles.module.css';

type Benefit = {
  _id: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  benefits: Benefit[];
  title?: string;
};

/*

 {
      _id: '66537cbe07c65a9efca98302',
      title: 'Pagamento de Pix',
      description: 'Cada família afetada receberá R$ 2 mil pelo pix SOS Rio Grande do Sul.',
      link: 'https://www.estado.rs.gov.br/comite-gestor-do-pix-sos-rio-grande-do-sul-define-criterios-para-a-distribuicao-dos-recursos',
      createdAt: '2024-05-26T18:17:34.305Z',
      updatedAt: '2024-05-26T18:17:34.305Z',
      __v: 0
    }

*/

export const BenefitList = ({
  benefits,
  title = 'Todos os benefícios',
}: Props) => {
  const renderBenefits = () =>
    benefits.map((benefit) => (
      <article key={benefit._id}>
        <span>
          Atualização: {new Date(benefit.updatedAt).toLocaleDateString('pt-BR')}
        </span>
        <h4>{benefit.title}</h4>
        <h2>{benefit.description}</h2>
        <a href={`${benefit.link}`}>Saber mais</a>
      </article>
    ));

  return (
    <div className={styles['wrapper-benefits']}>
      <h3>{title}</h3>
      {renderBenefits()}
    </div>
  );
};
