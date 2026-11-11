import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'baixa-titulos-intercompany',
    title: 'Baixa de títulos intercompany em lote',
    sector: 'Cliente SAP Business One',
    context:
      'Grupo com várias filiais em SAP Business One sobre HANA, em que uma filial paga ou recebe títulos de outra. O processo era apoiado por um add-on de baixa de títulos que precisava evoluir para cobrir os casos reais do financeiro.',
    challenge:
      'O add-on ignorava lançamentos contábeis manuais com saldo em aberto, separava notas e adiantamentos em filtros diferentes, só aceitava intervalos sequenciais de documento e parceiro, e deixava a conta de pagamento livre, sem amarração à filial pagante.',
    solution:
      'Evolução do add-on em C# (DI API e UI API): stored procedures em HANA passaram a listar notas, adiantamentos e lançamentos manuais num único filtro de contas a pagar ou a receber, com coluna de tipo de documento; nova tela de cadastro de contas de pagamento por filial em tabelas de usuário, com conta padrão obrigatória preenchida automaticamente na baixa; coluna de valor efetivo (baixa + juros − desconto) com totalizador das linhas selecionadas. Cada baixa gera os pagamentos (contas a pagar ou a receber) dentro de transação da DI API, com rollback se qualquer etapa falhar.',
    result:
      'O financeiro passou a baixar em uma tela só todos os tipos de título que geram obrigação, com contas de pagamento restritas às autorizadas por filial e sem baixas parciais deixando o banco inconsistente.',
    stack: ['C#', '.NET Framework', 'DI API', 'UI API', 'SAP HANA', 'Stored procedures', 'UDTs/UDFs'],
  },
  {
    slug: 'contas-a-pagar-terceiros-lcm',
    title: 'Contas a pagar de terceiros com repasse por nota de débito',
    sector: 'Cliente SAP Business One',
    context:
      'A empresa paga despesas de terceiros (taxas, guias, boletos) em nome de clientes e depois repassa esse custo. O volume chegava em planilhas e era lançado manualmente no SAP Business One.',
    challenge:
      'Transformar planilhas em lançamentos contábeis consistentes, acompanhar o que já foi repassado, emitir a cobrança ao cliente e manter o arquivo bancário de remessa coerente com quem de fato é o pagador.',
    solution:
      'Add-on em C# com UI API, DI API e Service Layer: importação de CSV em lote que gera lançamentos contábeis manuais com contrapartida automática nas contas do cliente e dados do boleto ou Pix em campos de usuário; tela de listagem com filtros e status de pagamento (não realizado, parcial, liquidado); geração de nota de débito contra o cliente a partir dos lançamentos selecionados, com PDF em Crystal Reports; reconciliação dos lançamentos de repasse; e ajuste de CNPJ em arquivos CNAB de remessa. Procedures HANA alimentam os relatórios e o próprio add-on cria UDFs e procedures na instalação.',
    result:
      'O ciclo pagar → repassar → conciliar ficou dentro do SAP, com rastreabilidade de cada lançamento até a nota de débito correspondente e relatório de contas a pagar gerado direto do add-on.',
    stack: ['C#', '.NET Framework', 'UI API', 'DI API', 'Service Layer', 'SAP HANA', 'Crystal Reports', 'CNAB'],
  },
  {
    slug: 'automacao-pdd',
    title: 'Cálculo e contabilização automática de PDD',
    sector: 'Cliente SAP Business One',
    context:
      'Grupo com várias empresas no SAP Business One que calculava a Provisão para Devedores Duvidosos (PDD) fora do sistema e depois lançava o resultado.',
    challenge:
      'Calcular a provisão por parcela em aberto conforme faixas de atraso configuráveis e gerar o lançamento contábil com contas, históricos e dimensões corretas por empresa, sem planilha intermediária.',
    solution:
      'Add-on em C# com UDO de configuração (faixas de vencimento com percentual, contas de débito e crédito, históricos com placeholders e centro de custo por empresa). O SQL traz apenas dados brutos (saldo em aberto e dias corridos até a data de visão) e o C# concentra a regra: enquadramento em faixa, percentual e valor do PDD. A partir do cálculo, o add-on gera o pré-lançamento e o lançamento contábil com as dimensões de custo, além de tela de log.',
    result:
      'Provisão calculada e contabilizada dentro do ERP, com parametrização editável pelo próprio usuário e regra de negócio em um único lugar, fácil de auditar e corrigir.',
    stack: ['C#', 'DI API', 'UI API', 'UDO', 'UDTs/UDFs', 'SQL', 'Journal Entries'],
  },
  {
    slug: 'notas-recorrentes-automaticas',
    title: 'Faturamento recorrente automático em múltiplas bases',
    sector: 'Cliente SAP Business One',
    context:
      'Faturamento mensal baseado em transações recorrentes do SAP Business One, distribuído em mais de uma base (schema) do ERP.',
    challenge:
      'As notas recorrentes dependiam de execução manual e saíam sem o vencimento e as observações corretos. Além disso, uma base com problema de conexão travava o processamento de todas as outras.',
    solution:
      'Serviço em Node.js que roda como serviço Windows com agendador: busca os esboços pendentes, ajusta vencimento e observações no esboço via Service Layer, dispara a transação recorrente (RecurringTransactionService), localiza a nota gerada e grava log de sucesso ou erro em tabela própria por stored procedure. O suporte a múltiplas bases testa a conexão de cada schema isoladamente e segue processando as saudáveis. Tela de configuração e consulta de logs em SAP UI5; procedures para SQL Server e HANA.',
    result:
      'Notas recorrentes geradas sem intervenção manual, já com o vencimento certo, e falha em uma base deixou de interromper o faturamento das demais.',
    stack: ['Node.js', 'Service Layer', 'SAP UI5', 'SQL Server', 'SAP HANA', 'Stored procedures', 'Windows Service'],
  },
  {
    slug: 'api-integracao-saas',
    title: 'API de integração entre plataforma SaaS e SAP Business One',
    sector: 'Cliente SAP Business One',
    context:
      'A plataforma do cliente concentra cadastro de clientes, vendas e cobranças, e esses dados precisavam chegar ao SAP Business One para faturamento e financeiro.',
    challenge:
      'Receber eventos da plataforma com segurança e refleti-los no ERP como parceiros de negócio, pedidos, notas, adiantamentos e recebimentos, incluindo cancelamentos, sem acesso direto do sistema externo ao banco.',
    solution:
      'API REST em Node.js e Express autenticada por JWT, documentada em Swagger, que traduz cada chamada em operações do Service Layer: criação e atualização de parceiros, pedidos, notas fiscais, adiantamentos e recebimentos, além dos respectivos cancelamentos. Configuração de credenciais e parâmetros por interface SAP UI5, logs de operação, suporte a HANA e SQL Server e instalação como serviço Windows.',
    result:
      'A plataforma passou a alimentar o ERP por um contrato de API único e documentado, com cada operação registrada em log para conferência.',
    stack: ['Node.js', 'Express', 'JWT', 'Swagger', 'Service Layer', 'SAP UI5', 'SAP HANA', 'SQL Server'],
  },
  {
    slug: 'adapter-operacional-nfse',
    title: 'Adapter entre sistema operacional e SAP, com NFS-e',
    sector: 'Cliente SAP Business One',
    context:
      'O sistema operacional do cliente gerencia ordens de serviço, equipamentos instalados e contratos; o SAP Business One cuida de estoque, compras, faturamento e fiscal. Os dois precisavam conversar nos dois sentidos.',
    challenge:
      'Manter cadastros, estoque e movimentações sincronizados e, com a evolução da NFS-e, devolver ao sistema externo os novos blocos da nota de serviço (município emissor, serviço, tributação municipal, federal e IBS/CBS, informações complementares) a partir de procedures do banco.',
    solution:
      'Adapter em Node.js com API REST para estoque, transferências, parceiros, notas de entrada e saída, lotes e eventos de ordem de serviço (instalação, suporte, fechamento, troca de titularidade), mais um job que envia cadastros de itens, clientes, fornecedores e transportadoras para o sistema externo. Para a NFS-e, um mapa de configuração com função recursiva monta os nós aninhados a partir dos tipos retornados pela procedure; tipos ainda não disponíveis no cliente, como os da reforma tributária, simplesmente não aparecem até a procedure passar a devolvê-los.',
    result:
      'Integração bidirecional centralizada em um serviço, e inclusão de novos blocos fiscais reduzida a uma linha de configuração, sem duplicar código por tipo.',
    stack: ['Node.js', 'Service Layer', 'SAP HANA', 'Stored procedures', 'SAP UI5', 'NFS-e'],
  },
  {
    slug: 'portal-sap',
    title: 'Portal SAP: vendas e recebimentos pela web',
    sector: 'Projeto próprio (código aberto)',
    context:
      'Usuários que precisam consultar e lançar vendas e recebimentos não deveriam depender do client do SAP Business One nem de licença completa para tarefas simples.',
    challenge:
      'Oferecer cadastros, fluxo de documentos de venda e recebimentos pela web, com segurança, sem expor o ERP ao navegador e respeitando as regras do SAP.',
    solution:
      'Portal em Next.js 16 com Server Components e Server Actions chamando um cliente único do Service Layer no servidor: sessão técnica compartilhada, re-login automático em 401, filtros OData escapados e validação com Zod. Documentos de venda gerados a partir de outros com BaseType/BaseEntry/BaseLine; recebimentos validados em centavos contra o saldo aberto de cada nota. Login próprio em SQLite com JWT em cookie httpOnly e scrypt, mock do Service Layer e testes E2E com Playwright.',
    result:
      'Fluxo completo de cotação a devolução e de contas a receber a recebimento disponível no navegador, documentado e testável sem um SAP de verdade.',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Service Layer', 'OData', 'SQLite', 'Zod', 'Playwright'],
  },
]
