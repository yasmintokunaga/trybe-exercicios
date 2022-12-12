// >> 1 << Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const tagBody = document.getElementsByTagName('body');

const tagH1 = document.createElement('h1');
tagH1.innerText = 'TrybeTrip - Agência de Viagens';
tagBody[0].appendChild(tagH1);

// >> 2 << Adicione a tag main com a classe main-content como filho da tag body;

const tagMain = document.createElement('main');
tagMain.className = 'main-content';
tagBody[0].appendChild(tagMain);

//>> 3 << Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

// >> 4 << Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const tagP = document.createElement('p');
tagP.innerText = 'Escolha o seu destino';
tagSection.appendChild(tagP);

// >> 5 << Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const tagSectionLeft = document.createElement('section');
tagSectionLeft.className = 'left-content';
tagMain.appendChild(tagSectionLeft);

// >> 6 << Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const tagSectionRight = document.createElement('section');
tagSectionRight.className = 'right-content';
tagMain.appendChild(tagSectionRight);

// >> 7 << Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const elementImg = document.createElement('img');
elementImg.src = 'https://picsum.photos/200';
tagSectionLeft.appendChild(elementImg);

// >> 8 << Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const listNumber = document.createElement('ul');
tagSectionRight.appendChild(listNumber);

let arrayNumerosExtenso = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (value of arrayNumerosExtenso) {
    listNumber.appendChild(document.createElement('li')).innerText = value;
}

// >> 9 << Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

for (let index = 0; index < 3; index += 1) {
    tagMain.appendChild(document.createElement('h3'));
}

// >> 10 << Adicione a classe title na tag h1 criada;

tagH1.className = 'title';

// >> 11 << Adicione a classe description nas 3 tags h3 criadas;

for (let index = 0; index < 3; index += 1) {
    let h3 = document.querySelectorAll('h3');
    h3[index].className = 'description';
}

// >> 12 << Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

tagMain.removeChild(tagSectionLeft);

// >> 13 << Centralize a section criada no passo 6 (aquele que possui a classe right-content).

tagSectionRight.style.marginRight = 'auto';

// >> 14 << Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

tagSection.parentElement.style.backgroundColor = 'green';

// >> 15 << Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

for (let index = 1; index <= 2; index += 1) {
listNumber.removeChild(listNumber.lastChild);
}
