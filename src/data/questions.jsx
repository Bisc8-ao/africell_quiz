const questions = [
  {
    id: 1,
    question: "Para que serve um seguro?",
    answers: [
      { text: "Serve para proteger financeiramente as pessoas ou empresas de imprevistos que possam causar diversos danos.", correct: true },
      { text: "Serve para andar seguro nas ruas e estar livre de ataques de pessoas más.", correct: false },
      { text: "Serve para ajudar a polícia a acabar com a delinquência juvenil.", correct: false },
      { text: "Serve para causar danos propositalmente às pessoas e ter sempre como me defender.", correct: false },
    ],
  },
  {
    id: 2,
    question: "O que é uma Apólice de seguro?",
    answers: [
      { text: "Documento que comprova a contratação de um seguro.", correct: true },
      { text: "Documento que a Polícia entrega quando alguém é assaltado.", correct: false },
      { text: "Documento que me ajuda a tirar um visto para uma viagem para Portugal.", correct: false },
      { text: "Documento que impede alguém de viajar quando não tem um seguro.", correct: false },
    ],
  },
  {
    id: 3,
    question: "O que é um prémio de seguro?",
    answers: [
      { text: "O que se paga pela contratação/compra de um seguro.", correct: true },
      { text: "O que se ganha pela contratação/compra de um seguro.", correct: false },
      { text: "O que se oferece a uma pessoa que tem um seguro.", correct: false },
      { text: "O dinheiro que alguém recebe por trabalhar numa seguradora.", correct: false },
    ],
  },
  {
    id: 4,
    question: "O que é um sinistro?",
    answers: [
      { text: "Situação imprevista que resulta em um dano físico/material, que pode acionar as garantias do seguro.", correct: true },
      { text: "Acontecimento que obriga alguém a mudar de país.", correct: false },
      { text: "Situação premeditada que faz a seguradora pagar uma indemnização a uma pessoa que sofreu um acidente.", correct: false },
      { text: "Uma situação que nunca aconteceu a nível mundial.", correct: false },
    ],
  },
  {
    id: 5,
    question: "Em que ano foi fundada a NOSSA?",
    answers: [
      { text: "2002", correct: false },
      { text: "2004", correct: false },
      { text: "2005", correct: true },
      { text: "2012", correct: false },
    ],
  },
  {
    id: 6,
    question: "Em que províncias se encontra a NOSSA?",
    answers: [
      { text: "Todas as províncias.", correct: false },
      { text: "Em 10 províncias.", correct: false },
      { text: "Em 16 províncias.", correct: true },
      { text: "Em 7 províncias.", correct: false },
    ],
  },
  {
    id: 7,
    question: "Como posso aderir a um seguro de saúde da NOSSA?",
    answers: [
      { text: "Na app da NOSSA.", correct: false },
      { text: "Nas agências da NOSSA e Banco BAI.", correct: false },
      { text: "No Contact Center da NOSSA.", correct: false },
      { text: "Em todos os pontos mencionados.", correct: true },
    ],
  },
  {
    id: 8,
    question: "Quantos anos de existência tem a NOSSA?",
    answers: [
      { text: "5 anos.", correct: false },
      { text: "19 anos.", correct: true },
      { text: "47 anos.", correct: false },
      { text: "19 anos.", correct: false },
    ],
  },
  {
    id: 9,
    question: "Quantos clientes tem a NOSSA?",
    answers: [
      { text: "90 000.", correct: false },
      { text: "120 000.", correct: false },
      { text: "300 000.", correct: false },
      { text: "170 000.", correct: true },
    ],
  },
  {
    id: 10,
    question: "Qual é o slogan da NOSSA?",
    answers: [
      { text: "Seguros de Angola.", correct: false },
      { text: "Por uma vida mais leve.", correct: false },
      { text: "NOSSA Seguros, protege o que é nosso.", correct: true },
      { text: "NOSSA Seguros, Angola merece a nossa protecção.", correct: false },
    ],
  },
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
