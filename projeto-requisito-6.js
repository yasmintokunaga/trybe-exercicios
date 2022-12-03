// Implemente três funções. Uma função que calcula a área de um triângulo, outra que calcula a área de um retângulo e uma função que exiba o resultado desses cálculos de acordo com o parâmetro passado para função. 

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {

    if(form === 'triângulo') {
        return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
    } else if (form === 'retângulo') {
        return `O valor da área do retêngulo é de: ${calcRectangleArea(base, height)}`;
    } else {
        return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida.'
    }
}

let form = 'quadrado'
let base = 10;
let height = 50;
console.log(calcAllAreas(base, height, form));