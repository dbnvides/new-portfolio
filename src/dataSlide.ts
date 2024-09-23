import motorshop from './assets/motorshop.png'
import inOrbit from './assets/InOrbit.png'
import hamburgueria from './assets/hamburgueria.png'
import juniorjobs from './assets/juniorJobs.png'
import kenzieHub from './assets/KenzieHub.png'

export type Slide = {
    id: number;
    image: string; 
    name: string;
    descricao: string;
    repositorio: string;
    deploy: string;
    tecnologias: string[];
  };

export const slides:Slide[] = [
  {
    id: 1,
    image: motorshop,
    name: 'MotorShop',
    descricao:
      'A aplicação consiste em um e-commerce voltado a compra e venda de automoveis, onde é possivel cadastrar dois tipos de usúarios, anunciante e comprador.',
    repositorio:
      'https://github.com/dbnvides/frontend-ecommerce-cars?tab=readme-ov-file',
    deploy: 'https://frontend-ecommerce-cars.vercel.app/',
    tecnologias: [
      'TypeScript',
      'Node',
      'Reactjs',
      'ExpressJs',
      'TypeORM',
      'PostgreSQL',
      'TailwindCSS',
      'Vite',
    ],
  },
  {
    id: 2,
    image: juniorjobs,
    name: 'Junior Jobs',
    descricao:
      'A aplicação acima tem como objetivo facilitar essa busca, tanto para novos desenvolvedores quanto para empresas buscando novos colaboradores.',
    repositorio: 'https://github.com/Project-Junior-Jobs/Junior-jobs',
    deploy: 'https://junior-jobs-eta.vercel.app/',
    tecnologias: [
      'TypeScript',
      'Reactjs',
      'Styled-component',
      'Json-server',
      'YUP',
    ],
  },
  {
    id: 3,
    image: inOrbit,
    name: 'InOrbit',
    descricao:
      'A aplicação desenvolvida ajuda os usuários a monitorar suas metas semanais, promovendo uma execução mais eficiente e um controle melhor sobre suas atividades.',
    repositorio: 'https://github.com/dbnvides/inorbit-web',
    deploy: '',
    tecnologias: [
      'TypeScript',
      'Node',
      'PostgreSQL',
      'Drizzle-orm',
      'Fastify',
      'Zod',
      'Reactjs',
      'TailwindCSS',
      'Radix-ui',
      'Vite',
    ],
  },
  {
    id: 4,
    image: hamburgueria,
    name: 'Hamburgeria',
    descricao:
      'Aplicação voltada para compras de lanches e acompanhamentos, com sistemas de login e registro, sistema de carrinho e filtro para buscar os lanches, totalmente responsivo.',
    repositorio: 'https://hamburgueria-2-0-azure.vercel.app/login',
    deploy: 'https://hamburgueria-2-0-azure.vercel.app/login',
    tecnologias: [
      'TypeScript',
      'Reactjs',
      'Styled-component',
      'ToastFy',
      'Axios',
      'YUP',
    ],
  },
  {
    id: 5,
    image: kenzieHub,
    name: 'KenzieHub',
    descricao:
      'Aplicação voltada para desenvolvedores cujo o principal objetivo é anotar quais tecnologias voce tem conhecimento e colocar qual o grau de conhecimento.',
    repositorio: 'https://github.com/dbnvides/kenzie-hub',
    deploy: 'https://react-kenziehub.vercel.app/login',
    tecnologias: [
      'TypeScript',
      'Reactjs',
      'TailwindCSS',
      'Framer-Motion',
      'Styled-component',
      'ToastFy',
      'YUP',
    ],
  },
]
