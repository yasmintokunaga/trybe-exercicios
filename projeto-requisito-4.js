// Implemente a função footballPoint que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates
// vitórias (wins): 3 pontos
// empates (ties): 1 ponto

const footbalpoints = (wins, ties) => (3* wins + ties);

let wins = 14;
let ties = 8;

console.log(footbalpoints(0, 0));