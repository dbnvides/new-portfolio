// Conteúdo do restaurante fictício. Endereço, avaliações e chef são inventados.

export const restaurante = {
  nome: 'Brasa & Lenha',
  telefone: '5512981326766', // número de demonstração do desenvolvedor
  telefoneLabel: '(12) 98132-6766',
  rua: 'Rua das Paineiras, 480',
  bairro: 'Jardim Aquarius',
  cidade: 'São José dos Campos',
  uf: 'SP',
  cep: '12246-000',
  faixaPreco: 'R$ 90 a R$ 160 por pessoa',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jardim%20Aquarius%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP',
}

export const cardapio = [
  { nome: 'Costela fogo de chão', descricao: '12 horas na lenha de eucalipto, servida com farofa de alho e vinagrete.', preco: 129, destaque: 'Da casa' },
  { nome: 'Picanha na brasa', descricao: '400 g com sal grosso, mandioca na manteiga e chimichurri.', preco: 148 },
  { nome: 'Ancho maturado', descricao: 'Corte de 350 g maturado por 21 dias, ponto do chef.', preco: 112 },
  { nome: 'Linguiça artesanal', descricao: 'Porco caipira com pimenta biquinho, feita na casa.', preco: 42 },
  { nome: 'Queijo coalho na grelha', descricao: 'Com melaço de cana e castanha-de-caju.', preco: 38 },
  { nome: 'Cebola na brasa', descricao: 'Assada inteira nas cinzas, com manteiga de ervas.', preco: 29 },
  { nome: 'Abacaxi com canela', descricao: 'Grelhado e servido com sorvete de creme.', preco: 34 },
  { nome: 'Caipirinha de cachaça envelhecida', descricao: 'Limão-cravo e cachaça mineira de 3 anos em carvalho.', preco: 32 },
] as const

export const avaliacoes = [
  { nome: 'Mariana', texto: 'A costela desmancha. Fomos em seis pessoas num sábado e a mesa estava pronta na hora marcada.' },
  { nome: 'Rafael', texto: 'Ambiente quente, cheiro de lenha logo na entrada e atendimento sem pressa. Vale cada real.' },
  { nome: 'Juliana', texto: 'Reservei pelo WhatsApp em dois minutos. A caipirinha de cachaça envelhecida é obrigatória.' },
] as const

export const faq = [
  {
    pergunta: 'Preciso reservar?',
    resposta: 'Não é obrigatório, mas às sextas e sábados a casa enche cedo. Com reserva, a mesa fica guardada por 15 minutos.',
  },
  {
    pergunta: 'Vocês têm opções sem carne?',
    resposta: 'Sim. Legumes na brasa, queijo coalho, cebola nas cinzas e uma moqueca de banana-da-terra entram no cardápio todos os dias.',
  },
  {
    pergunta: 'Aceitam grupos grandes?',
    resposta: 'Pelo formulário, até 20 pessoas. Para eventos e grupos maiores, fale direto pelo WhatsApp que montamos o salão.',
  },
  {
    pergunta: 'Tem estacionamento?',
    resposta: 'Temos manobrista nas noites de quinta a sábado e estacionamento conveniado na mesma rua.',
  },
  {
    pergunta: 'Pode levar criança e pet?',
    resposta: 'Crianças são bem-vindas e temos cadeirão. Pets ficam liberados na varanda externa.',
  },
] as const
