// Remova a tag h2, filha do elemento elementoOndeVoceEsta.
let elementoPai = document.querySelector('#elementoOndeVoceEsta');
let tagRemoverH2 = document.querySelectorAll('h2');

elementoPai.removeChild(tagRemoverH2[1]);