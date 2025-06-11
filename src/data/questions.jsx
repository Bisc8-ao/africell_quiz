import konekta5g from '../assets/campanhas/konekta-5g.jpg'
import konekta4g from '../assets/campanhas/konekta-4g.jpg'
import esim from '../assets/campanhas/esim.jpg'
import afrimoney from '../assets/campanhas/afrimoney.jpg'

const questions = [
  {
    id: 1,
    question: "Konekta – Internet residencial",
    image: konekta4g,
    answers: [
      { text: "Internet fixa 4G/5G, ideal para casas e pequenos negócios", correct: true },
      { text: "Permite alternar entre vários números num só dispositivo", correct: false },
      { text: "Funciona em todo o tipo de telemóvel via *777#", correct: false },
      { text: "Cobertura em expansão nas principais cidades do país", correct: false },
    ],
  },
  {
    id: 2,
    question: "Afrimoney – Pagamentos móveis",
    image: afrimoney,
    answers: [
      { text: "Ideal para quem não tem conta bancária", correct: true },
      { text: "Alta velocidade, cobertura estável, suporte técnico contínuo", correct: false },
      { text: "Ativação simples com suporte nas lojas Africell ou por WhatsApp", correct: false },
      { text: "A nova geração de internet móvel da Africell", correct: false },
    ],
  },
  {
    id: 3,
    question: "eSIM – Chip digital",
    image: esim,
    answers: [
      { text: "Permite alternar entre vários números num só dispositivo", correct: true },
      { text: "Plataforma de pagamentos e transferências por telemóvel", correct: false },
      { text: "Navegação ilimitada com planos acessíveis", correct: false },
      { text: "Velocidade ultra-rápida para jogos online, vídeos em HD, chamadas sem falhas", correct: false },
    ],
  },
  {
    id: 4,
    question: "5G – Alta velocidade",
    image: konekta5g,
    answers: [
      { text: "Velocidade ultra-rápida para jogos online, vídeos em HD, chamadas sem falhas", correct: true },
      { text: "Sem necessidade de cabos, basta ligar e começar a usar", correct: false },
      { text: "SIM virtual integrado no smartphone", correct: false },
      { text: "Permite comprar saldo, pagar serviços e enviar dinheiro sem sair de casa", correct: false },
    ],
  }
];


// Função para randomizar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomizar as perguntas
const shuffledQuestions = shuffleArray([...questions]);

// Randomizar as respostas de cada pergunta
shuffledQuestions.forEach(question => {
  question.answers = shuffleArray([...question.answers]);
});

console.log(shuffledQuestions);

export { shuffledQuestions };
