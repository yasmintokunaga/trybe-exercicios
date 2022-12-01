//Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

function transformaAlgarismoRomano(algarismo) {
    listaAlgarismosSimples = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    listaAlgarimosDuplos = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
let soma = 0;

    if (algarismo.length === 1) {
        return listaAlgarismosSimples[algarismo];
    } else {
        for (let index = 0; index < algarismo.length; index += 1) {
            if( typeof( listaAlgarimosDuplos[algarismo[index]+algarismo[index+1]]) == "number" ) {
                soma += listaAlgarimosDuplos[algarismo[index]+algarismo[index+1]];
                index += 1;
            } else {
                soma += listaAlgarismosSimples[algarismo[index]];
            }            
        }
        return soma;
    }
}

let algarismoTeste = 'III';


console.log(transformaAlgarismoRomano(algarismoTeste));