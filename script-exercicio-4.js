function paragraphText(text){
const paragraph = document.getElementsByTagName('p');
paragraph[0].style.textTransform = 'uppercase';
paragraph[1].innerText = text };

let text = 'Me vejo trabalhando como desenvolvedora júnior em uma empresa com valores como inclusão e diversidade';
paragraphText(text);

const mainContent = (color) => document.getElementsByClassName('main-content')[0].style.backgroundColor = color;

let color = 'rgb(76, 164, 109)';
mainContent(color);

const centerContent = (color) => document.getElementsByClassName('center-content')[0].style.backgroundColor = color;

let colorCenter = 'white';
centerContent(colorCenter);

const title = (title) => document.getElementsByTagName('h1')[0].innerText = title;

let titleH1 = 'Desafio - JavaScript';
title(titleH1);

const printParagraph = () => {
    let paragraphs = document.getElementsByTagName('p');
    for (value of paragraphs) {
        console.log(value.innerText);
    }
}

printParagraph();