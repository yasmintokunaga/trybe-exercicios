const hitsMistakes = document.getElementById('hits-mistakes');
const clearButton = document.getElementById('clear-btn');
const fullCourt = document.getElementById('full-court');
const allPoints = document.getElementById('all-points');

let selectedColor;
let shot;

hitsMistakes.addEventListener('click', (event) => {
  if (event.target.innerText === 'ACERTOS') {
    selectedColor = 'green';
    shot = 'Acertou';
  }
  if (event.target.innerText === 'ERROS') {
    selectedColor = 'red';
    shot = 'Errou';
  }
});

fullCourt.addEventListener('click', (event) => {
    if (selectedColor !== undefined) {
        createNewDiv(event.pageX, event.pageY);
    } else {
        alert('Selecione uma cor');
    }
});

const createNewDiv = (x, y) => {
  const div = document.createElement('div');
  div.className = 'checkPoints';
  div.style.backgroundColor = selectedColor;
  div.style.borderRadius = '50%';
  div.style.width = '8px';
  div.style.height = '8px';
  div.style.position = 'fixed';
  div.style.top = `${y}px`;
  div.style.left = `${x}px`;
  allPoints.appendChild(div);
  saveLocalStorage(x, y);
};

const saveLocalStorage = (x, y) => {
  const divs = document.getElementsByClassName('checkPoints');
  localStorage.setItem(divs.length, `X: ${x}, Y${y}`);
  localStorage.setItem('mapsOfPoints', allPoints.innerHTML);
};

window.onload = () => { 
  allPoints.innerHTML = localStorage.getItem('mapsOfPoints');
};

clearButton.addEventListener('click', () => {
  localStorage.clear();
  location.reload();
});