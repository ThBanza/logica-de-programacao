// Operadores aritmeticos
// Adição: soma dois valores
let adicao = 5 + 3;
console.log("Resultado da adição (5 + 3): " + adicao); // Saída: 8

// Subtração: subtrai o segundo valor do primeiro
let subtracao = 8 - 2;
console.log("Resultado da subtração (8 - 2): " + subtracao); // Saída: 6

// Multiplicação: multiplica dois valores
let multiplicacao = 4 * 6;
console.log("Resultado da multiplicação (4 * 6): " + multiplicacao); // Saída: 24

// Divisão: divide o primeiro valor pelo segundo
let divisao = 10 / 2;
console.log("Resultado da divisão (10 / 2): " + divisao); // Saída: 5

// Módulo: retorna o resto da divisão do primeiro valor pelo segundo
let modulo = 10 % 3;
console.log("Resultado do módulo (10 % 3): " + modulo); // Saída: 1

// Exibindo todos os resultados juntos
console.log("\nResumo dos Operadores Aritméticos:");
console.log("Adição (5 + 3): " + adicao);         // Saída: 8
console.log("Subtração (8 - 2): " + subtracao);    // Saída: 6
console.log("Multiplicação (4 * 6): " + multiplicacao); // Saída: 24
console.log("Divisão (10 / 2): " + divisao);       // Saída: 5
console.log("Módulo (10 % 3): " + modulo);         // Saída: 1





// Operadores Relacionais

let x = 5;
let y = 3;

// Operador ==
let isEqual = (x == y); // false
console.log(`É x igual a y? ${x} == ${y} => ${isEqual}`);

// Operador !=
let isNotEqual = (x != y); // true
console.log(`É x diferente de y? ${x} != ${y} => ${isNotEqual}`);

// Operador >
let isGreater = (x > y); // true
console.log(`É x maior que y? ${x} > ${y} => ${isGreater}`);

// Operador <
let isLess = (x < y); // false
console.log(`É x menor que y? ${x} < ${y} => ${isLess}`);

// Operador >=
let isGreaterOrEqual = (x >= y); // true
console.log(`É x maior ou igual a y? ${x} >= ${y} => ${isGreaterOrEqual}`);

// Operador <=
let isLessOrEqual = (x <= y); // false
console.log(`É x menor ou igual a y? ${x} <= ${y} => ${isLessOrEqual}`);




// Operadores Lógicos

let condition1 = true;
let condition2 = false;

// Operador &&
if (condition1 && condition2) {
    console.log("Ambas as condições são verdadeiras.");
} else {
    console.log("Pelo menos uma das condições não é verdadeira.");
}

// Operador ||
if (condition1 || condition2) {
    console.log("Pelo menos uma das condições é verdadeira.");
} else {
    console.log("Ambas as condições são falsas.");
}

// Operador !
let condition = true;
if (!condition) {
    console.log("A condição é falsa.");
} else {
    console.log("A condição é verdadeira.");
}



// Operadores de Atribuição

let a = 5;

// Operador =
let b = a; // b recebe o valor de a (5)

// Operador +=
let num1 = 10;
num1 += 2; // Equivalente a num1 = num1 + 2;
console.log(`num1 após adição: ${num1}`); // num1 agora é 12

// Operador -=
let num2 = 10;
num2 -= 3; // Equivalente a num2 = num2 - 3;
console.log(`num2 após subtração: ${num2}`); // num2 agora é 7

// Operador *=
let num3 = 5;
num3 *= 4; // Equivalente a num3 = num3 * 4;
console.log(`num3 após multiplicação: ${num3}`); // num3 agora é 20

// Operador /=
let num4 = 10;
num4 /= 2; // Equivalente a num4 = num4 / 2;
console.log(`num4 após divisão: ${num4}`); // num4 agora é 5

// Operador %=
let num5 = 10;
num5 %= 3; // Equivalente a num5 = num5 % 3;
console.log(`Resto da divisão de num5 por 3: ${num5}`); // num5 agora é 1



//Operadores de Incremento e Decremento:

// Operador ++
let counter1 = 0;
counter1++; // Incrementa counter1 por 1
console.log(`counter1 após incremento: ${counter1}`); // counter1 agora é 1

// Operador --
let counter2 = 5;
counter2--; // Decrementa counter2 por 1
console.log(`counter2 após decremento: ${counter2}`); // counter2 agora é 4

