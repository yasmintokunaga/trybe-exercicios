const btnSubmit = document.getElementById('btn-Submit');
const inputResumo = document.getElementById('resumo');
const qtdWordResumo = document.getElementById('count-word');

const countName = () => {
  const inputFullName = document.getElementById('full-name');
  const fullNameValue = inputFullName.value;
  const arrayFullName = fullNameValue.split(' ');
  return arrayFullName.length;
}

inputResumo.addEventListener('keypress', (event) => {
    const resumoValue = inputResumo.value;
    const arrayResumo = resumoValue.split(' ');
    qtdWordResumo.innerText = `${arrayResumo.length}`;
    // return arrayResumo.length;
    if (arrayResumo.length > 499) {
        event.preventDefault();
        qtdWordResumo.style.color = 'red';
    }
});

btnSubmit.addEventListener('click', (event) => {
    if (countName() <= 1) {
        alert('Por favor, inserir nome e sobrenome');
        event.preventDefault();
    }
});