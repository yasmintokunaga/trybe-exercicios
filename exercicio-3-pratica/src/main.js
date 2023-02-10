import "./style.css";

const btnRaffle = document.querySelector('button');
const nameSuperHero = document.querySelector('h2');
const imgSuperHero = document.querySelector('img');

const SUPERHERO_API = 'https://akabab.github.io/superhero-api/api/id/';

const randomSuperHeros = (randomNumber) => {
  return fetch(`${SUPERHERO_API}${randomNumber}.json`)
  .then((response) => response.json())
  .then((data) => {
    const { name, images } = data;
    nameSuperHero.innerHTML = name;
    imgSuperHero.src = images.sm;
  })
  .catch((error) => alert(error.message))
};

const randomNumber = () => Math.round(Math.random() * (731 - 1) + 1);

btnRaffle.addEventListener('click', () => {
  randomSuperHeros(randomNumber());
});
