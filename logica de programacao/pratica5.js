// Variável que armazena um vetor (array) de nomes de Pokémon
let nomesPokemon = ["Pikachu", "Charmander", "Bulbasaur"];

// Variável que armazena uma matriz (array de arrays) com informações sobre os Pokémon
let timePokemon = [
    ["Pikachu", "M", 1],       // Primeiro sub-array (vetor)
    ["Charmander", "F", 4],    // Segundo sub-array (vetor)
    ["Bulbasaur", "M", 10]     // Terceiro sub-array (vetor)
];

// Acessando elementos específicos da matriz e exibindo no console
console.log(`O pokemon ${timePokemon[1][0]} é do sexo ${timePokemon[1][1]} e está no level ${timePokemon[1][2]}`);