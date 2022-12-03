// Implemente a função hydrate que recebe uma string e retorna a sugestão de quantos copos de água você deve beber

function hydrate(stringBebida) {
let arrayCopoBebidaAlcolica = stringBebida.match(/\d+/g);
let SomaCopoAgua = 0;
for(value of arrayCopoBebidaAlcolica) {
    value = parseInt(value);
    SomaCopoAgua += value;
}
return `${SomaCopoAgua} copos de água`;
}

let stringBebida = '1 chachaça, 5 cervejas, 1 copo de vinho';

console.log(hydrate(stringBebida));