import konekta5g from '../assets/campanhas/konekta-5g.jpg'
import konekta4g from '../assets/campanhas/konekta-4g.jpg'
import esim from '../assets/campanhas/esim.jpg'
import afrimoney from '../assets/campanhas/afrimoney.jpg'

const questions = [
  {
    id: 1,
    question: "5G",
    image: konekta5g,
    answers: [
      { text: "Internet de alta velocidade", correct: true },
      { text: "Router de banda limitada", correct: false },
      { text: "Pagamentos móveis", correct: false },
      { text: "Cartão sim físico com memória expandida para armazenar contactos e fotos", correct: false },
    ],
  },
  {
    id: 2,
    question: "KONEKTA",
    image: konekta4g,
    answers: [
      { text: "Internet residencial", correct: true },
      { text: "Internet 3G dupla", correct: false },
      { text: "Serviço para rastrear o telemóvel em caso de roubo ou perda", correct: false },
      { text: "Conta africell", correct: false },
    ],
  },
  {
    id: 3,
    question: "AFRIMONEY",
    image: afrimoney,
    answers: [
      { text: "Pagamentos móveis", correct: true },
      { text: "Router portátil da africell", correct: false },
      { text: "Chip digital que não precisa ser inserido fisicamente no telemóvel", correct: false },
      { text: "Internet da nova geração", correct: false },
    ],
  },
  {
    id: 4,
    question: "eSIM",
    image: esim,
    answers: [
      { text: "Chip digital que não precisa ser inserido fisicamente no telemóvel", correct: true },
      { text: "Nome do site da africell", correct: false },
      { text: "Pacote de internet", correct: false },
      { text: "Velocidade média", correct: false },
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
