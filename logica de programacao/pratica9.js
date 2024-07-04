// O nosso herói João chegou a uma encruzilhada na floresta misteriosa.
// Ele precisa decidir qual caminho seguir para continuar a sua jornada.

if (caminhoEsquerdo === 'obstaculo') { // (1) Verifica se o caminho à esquerda tem um obstáculo
    // Se o caminho da esquerda tiver um obstáculo, João vai tentar o caminho da direita.
    seguirCaminhoDireito(); // (2) Ação tomada se a condição do if for verdadeira
  } else if (caminhoEsquerdo === 'ponteQuebrada') { // (3) Verifica se o caminho à esquerda tem uma ponte quebrada
    // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
    procurarOutroCaminho(); // (4) Ação tomada se a condição do else if for verdadeira
  } else { // (5) Se nenhuma das condições anteriores for verdadeira
    // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
    seguirCaminhoEsquerdo(); // (6) Ação tomada se nenhuma das condições anteriores for verdadeira
  }


  let idade = 17;

if (idade >= 18) { // (1) Verifica se a idade é maior ou igual a 18
    console.log("Você é maior de idade."); // (2) Se a condição for verdadeira, executa este bloco
} else if (idade >= 13) { // (3) Verifica se a idade é maior ou igual a 13 (e menor que 18, já que a primeira condição falhou)
    console.log("Você é um adolescente."); // (4) Se a condição for verdadeira, executa este bloco
} else { // (5) Se nenhuma das condições anteriores for verdadeira
    console.log("Você é uma criança."); // (6) Executa este bloco
}


let numeroCasa = 52

if (numeroCasa >= 53) {
  console.log("Você mora em uma casa grande.");
}
else if (numeroCasa >= 30) {
  console.log("Você mora em uma casa média.");
}
else {
  console.log("Você mora em uma casa pequena.");
}

