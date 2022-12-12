const pai = document.getElementById('pai');

const newSectionIrmao = document.createElement('section');
newSectionIrmao.id = 'newSectionIrmao'; 
pai.appendChild(newSectionIrmao);

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const primeiroBisneto = document.createElement('section');
primeiroBisneto.id = 'primeiroBisneto';
primeiroFilhoDoFilho.appendChild(primeiroBisneto);

