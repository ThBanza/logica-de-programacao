// Declaração de variáveis (valores que podem mudar)
let poteCafe = "Cafe Pilao";
let poteAcucar = "Acucar Cristal";
let poteBiscoito = "Biscoito Maizena";

// Declaração de constante (valor fixo que não muda)
const mensagem = "Na cozinha tem: ";

// Mensagem de saída com concatenação
console.log(mensagem + poteCafe + " - " + poteAcucar + " - " + poteBiscoito);

// Para melhorar a legibilidade, você também pode usar template literals:
console.log(`${mensagem}${poteCafe} - ${poteAcucar} - ${poteBiscoito}`);