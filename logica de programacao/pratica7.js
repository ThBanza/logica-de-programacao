// Variáveis individuais de contas
let contaLuz = 200;
let contaAgua = 70;
let contaGas = 50;
let contaAluguel = 1300;
let contaInternet = 100;
let contaMoto = 420;
let contaComida = 800;

// Vetor de nomes das contas
let nomesContas = ["contaLuz", "contaAgua", "contaGas", "contaAluguel", "contaInternet", "contaMoto", "contaComida"];

// Matriz que armazena informações sobre as contas
let contasCasa = [
    ["contaLuz", 200],      // Primeiro sub-array (vetor)
    ["contaAgua", 70],      // Segundo sub-array (vetor)
    ["contaGas", 50],       // Terceiro sub-array (vetor)
    ["contaAluguel", 1300], // Quarto sub-array (vetor)
    ["contaInternet", 100], // Quinto sub-array (vetor)
    ["contaMoto", 420],     // Sexto sub-array (vetor)
    ["contaComida", 800]    // Sétimo sub-array (vetor)
];

// Acessando elementos específicos da matriz e exibindo no console
console.log(`A ${contasCasa[0][0]} é R$${contasCasa[0][1]}`);
console.log(`A ${contasCasa[1][0]} é R$${contasCasa[1][1]}`);
console.log(`A ${contasCasa[2][0]} é R$${contasCasa[2][1]}`);
console.log(`A ${contasCasa[3][0]} é R$${contasCasa[3][1]}`);
console.log(`A ${contasCasa[4][0]} é R$${contasCasa[4][1]}`);
console.log(`A ${contasCasa[5][0]} é R$${contasCasa[5][1]}`);
console.log(`A ${contasCasa[6][0]} é R$${contasCasa[6][1]}`);