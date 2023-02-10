import './style.css';

const btnDog = document.getElementById('btn-dog');
const btnCat = document.getElementById('btn-cat');
const btnSurprise = document.getElementById('btn-surprise');
const imgPet = document.querySelector('img');
const titleRandomPet = document.querySelector('h2');

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://aws.random.cat/meow';

const getImage = (api, typePet) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      if (typePet === 'dog') imgPet.src = data.message;
      if (typePet === 'cat') imgPet.src = data.file;
    });
};

const clearDivImg = () => titleRandomPet.innerHTML = "";
const randomNumber = () => Math.round(Math.random());

btnDog.addEventListener('click', () => {
  clearDivImg();
  getImage(DOG_API, 'dog');
});

btnCat.addEventListener('click', () => {
  clearDivImg();
  getImage(CAT_API, 'cat');
});

btnSurprise.addEventListener('click', () => {
  clearDivImg();
  const sortPet = randomNumber();
  if (sortPet === 0) getImage(DOG_API, 'dog');
  if (sortPet === 1) getImage(CAT_API, 'cat');
});
