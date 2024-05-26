import { redirect } from 'next/navigation';

const direitos = [
  {
    title: 'Saque Calamidade do FGTS',
    shortDescription: 'Veja como fazer a solicitação:',
    link: 'https://www.fgts.gov.br/Pages/sou-trabalhador/saque-calamidade.aspx',
  },
  {
    title:
      'Restituições do imposto de renda para contribuintes do Rio Grande do Sul são priorizadas',
    shortDescription:
      'Pagamento que seria realizado durante o ano será feito em junho.',
    link: 'https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/restituicao/lotes/2024',
  },
  {
    title: 'Seguro-Desemprego',
    shortDescription:
      'Liberação de mais duas parcelas adicionais do Seguro-Desemprego as trabalhadoras e aos trabalhadores dos municípios em situação de calamidade pública reconhecida pelo governo federal:',
    link: 'https://portalfat.mte.gov.br/governo-federal-adota-medidas-de-apoio-para-facilitar-acesso-a-beneficios-aos-trabalhadores-gauchos/#:~:text=Para%20receber%20as%20parcelas%20adicionais,necessidade%20de%20a%C3%A7%C3%A3o%20do%20trabalhador.',
  },
  {
    title: 'Antecipação de Benefícios do INSS',
    shortDescription:
      'O Ministério da Previdência Social e o INSS promoveram a antecipação de benefícios previdenciários. Confira a tabela:',
    link: 'https://www.gov.br/inss/pt-br/centrais-de-conteudo/publicacoes/outras/Calendariopagamentodebeneficios2024colorido.pdf',
  },
  {
    title: 'Seguro Habitacional',
    shortDescription:
      'A resolução 3.811/09 do Conselho Monetário Nacional exige que os bancos ofereçam apólices de seguro de pelo menos duas seguradoras para quem faz um financiamento habitacional. Esses seguros, como o DFI (Danos Físicos ao Imóvel), cobrem situações como inundações e alagamentos. Os valores dos seguros estão incluídos nas parcelas do financiamento. Em caso de sinistro, deve-se contatar imediatamente o Banco e a Caixa Seguradora.',
    link: 'https://www.ucpel.edu.br/wp-content/uploads/2024/05/Resolucao-3811-09.pdf',
  },
  {
    title: 'Pausa no pagamento das prestações de empréstimos',
    shortDescription:
      'Pausa, de até seis meses, no pagamento das parcelas de empréstimos e prestações de Financiamento Habitacional.',
    link: 'https://www.caixa.gov.br/calamidadepublica/rs/Paginas/default.aspx',
  },
  {
    title:
      'Isenção da cobrança das tarifas de mensalidade de contas correntes na CAIXA',
    shortDescription: 'A isenção da tarifa será realizada de forma automática.',
    link: 'https://www.caixa.gov.br/calamidadepublica/rs/Paginas/default.aspx#:~:text=A%20CAIXA%20vai%20conceder%20a,necess%C3%A1rio%20comparecer%20a%20uma%20ag%C3%AAncia.',
  },
  {
    title: 'Auxílio Reconstrução',
    shortDescription:
      'Famílias desalojadas ou desabrigadas em decorrência da calamidade pública terão direito ao valor de R$ 5,1 mil para ajudar na recuperação de bens perdidos nas enchentes no Rio Grande do Sul.',
    link: 'https://www.gov.br/secom/pt-br/assuntos/noticias/2024/05/auxilio-reconstrucao-tire-todas-as-suas-duvidas#:~:text=O%20Aux%C3%ADlio%20Reconstru%C3%A7%C3%A3o%20%C3%A9%20destinado,nesta%20situa%C3%A7%C3%A3o%2C%20tem%20o%20direito.',
  },
  {
    title: 'Antecipação do abono salarial',
    shortDescription:
      'O Ministério do Trabalho e Emprego antecipou o pagamento dos trabalhadores com direito ao Abono Salarial para as regiões atingidas no Estado nascidos de julho a dezembro. Serão 756.121 trabalhadores que terão o Abono antecipado, auxiliando assim quem tem direito ao benefício no enfrentamento da situação de calamidade.',
    link: 'https://portalfat.mte.gov.br/mte-comeca-a-pagar-nesta-quarta-feira-15-o-4o-lote-do-abono-salarial-2024-e-a-antecipacao-de-parcelas-ao-rio-grande-do-sul/#:~:text=Os%20trabalhadores%2C%20que%20pelo%20calend%C3%A1rio,disp%C3%AAndio%20aproximado%20de%20R%24792.610',
  },
  {
    title: 'Isenção de tarifas de água para afetados pelas enchentes - CORSAN',
    shortDescription:
      'A CORSAN lançou um programa de isenção de tarifas para os afetados pelas enchentes.',
    link: 'https://www.corsan.com.br/corsan-lanca-programa-de-isencao-de-tarifas-para-afetados-pelas-enchentes',
  },
  {
    title: 'Projeto Social Meu lar de volta',
    shortDescription:
      'Projeto social destinado a auxiliar famílias na recuperação de suas casas após calamidades.',
    link: 'https://www.meulardevolta.com.br/',
  },
  {
    title: 'Pagamento de Pix',
    shortDescription:
      'Cada família afetada receberá R$ 2 mil pelo pix SOS Rio Grande do Sul.',
    link: 'https://www.estado.rs.gov.br/comite-gestor-do-pix-sos-rio-grande-do-sul-define-criterios-para-a-distribuicao-dos-recursos',
  },
];

import BenefitsPage from './benefits/page';

export default function Home() {
  redirect('/benefits');
}
