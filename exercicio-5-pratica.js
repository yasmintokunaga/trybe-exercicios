// ADICIONAR AS CINCO SECTIONS COM O MENU
itensMenu = {
    'Cor de fundo': ['white', 'black', 'green', 'blue', 'yellow'],
    'Cor da fonte': ['black', 'red', 'white'],
    'Tamanho da fonte': ['8pt', '10pt', '12pt', '14pt', '20pt'],
    'Espaçamento entre as linhas': ['1', 'normal', '1.5', '2.0', '3.0'],
    'Tipo da fonte': ['Arial', 'Times New Roman'],
};

const menu = document.querySelector('#menu');
menu.style.textAlign = 'center';
for (key in itensMenu) {
  let sectionMenu = document.createElement('section');
  sectionMenu.style.display = 'inline-block';
  sectionMenu.style.width = '15%';
  sectionMenu.style.margin = '10px';
  sectionMenu.style.fontSize = '15px';
  sectionMenu.style.verticalAlign = 'middle';
  sectionMenu.className = 'menuFormatacao';
  sectionMenu.innerHTML = key;
  menu.appendChild(sectionMenu);
  for (value of itensMenu[key]) {
    let btnMenu = document.createElement('button');
    btnMenu.innerHTML = value;
    btnMenu.style.display = 'block';
    btnMenu.style.width = '100%';
    btnMenu.className = key.split(' ').join('');
    sectionMenu.appendChild(btnMenu);
}
}

//ATIVANDO COR DE FUNDO
const btnCorDeFundo = document.querySelectorAll('.Cordefundo');
function changeCorDeFundo () {
  for(let index = 0; index < btnCorDeFundo.length; index += 1) {
    btnCorDeFundo[index].addEventListener('click', () => {
        const telaInteira = document.querySelector('body');
        let cor = btnCorDeFundo[index].innerHTML;
        telaInteira.style.backgroundColor = cor;
    })
  }
}
changeCorDeFundo();

//ATIVANDO COR DA FONTE
const btnCorDaFonte = document.querySelectorAll('.Cordafonte');
function changeCorDaFonte () {
  for(let index = 0; index < btnCorDaFonte.length; index += 1) {
    btnCorDaFonte[index].addEventListener('click', () => {
        const telaInteira = document.querySelector('body');
        let cor = btnCorDaFonte[index].innerHTML;
        telaInteira.style.color = cor;
    })
  }
}
changeCorDaFonte ();

//ATIVANDO TAMANHO DA FONTE
const btnTamanhoDaFonte = document.querySelectorAll('.Tamanhodafonte');
function changeTamanhoDaFonte () {
  for(let index = 0; index < btnTamanhoDaFonte.length; index += 1) {
    btnTamanhoDaFonte[index].addEventListener('click', () => {
        const telaInteira = document.querySelector('body');
        let tamanho = btnTamanhoDaFonte[index].innerHTML;
        telaInteira.style.fontSize = tamanho;
    })
  }
}
changeTamanhoDaFonte ();

//ATIVANDO ESPAÇAMENTO ENTRE LINHAS
const btnEspaçamentoEntreAsLinhas = document.querySelectorAll('.Espaçamentoentreaslinhas');
function changeEspaçamentoEntreAsLinhas () {
  for(let index = 0; index < btnEspaçamentoEntreAsLinhas.length; index += 1) {
    btnEspaçamentoEntreAsLinhas[index].addEventListener('click', () => {
        const telaInteira = document.querySelector('body');
        let espacamento = btnEspaçamentoEntreAsLinhas[index].innerHTML;
        telaInteira.style.lineHeight = espacamento;
    })
  }
}
changeEspaçamentoEntreAsLinhas ();

//ATIVANDO TIPO DA FONTE
const btnTipoDaFonte = document.querySelectorAll('.Tipodafonte');
function changeTipoDaFonte () {
  for(let index = 0; index < btnTipoDaFonte.length; index += 1) {
    btnTipoDaFonte[index].addEventListener('click', () => {
        const telaInteira = document.querySelector('body');
        let tipo = btnTipoDaFonte[index].innerHTML;
        telaInteira.style.fontFamily = tipo;
    })
  }
}
changeTipoDaFonte ();