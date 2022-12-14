const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

// >> PARTE 1 << CRIANDO OS DIAS DO MÊS
const createDaysOfMonth = () => {
  const decemberDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const decemberDaysList = document.querySelector('#days');
  const holidayDecember = [24, 25, 31];
  const fridayDecember = [4, 11, 18, 25];


  for (value of decemberDays) {
    const dayOfDecember = document.createElement('li');
    dayOfDecember.className = 'day';
    dayOfDecember.innerHTML = value;

    decemberDaysList.appendChild(dayOfDecember);

    for(value2 of holidayDecember) {
      if(value === value2) {
        dayOfDecember.classList.add('holiday');
        dayOfDecember.style.backgroundColor = 'rgb(238, 238, 238)';
      }
    }

    for(value3 of fridayDecember) {
      if(value3 === value) {
        dayOfDecember.classList.add('friday');
      }
    }
  }
}
  createDaysOfMonth();

// >> PARTE 2 << BOTÃO FERIADOS
function buttonHolidays(buttonName) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerHTML = buttonName;
  buttonsContainer.appendChild(btnHoliday);

  btnHoliday.addEventListener('click', () => {
    const holiday = document.getElementsByClassName('holiday');
    for(value of holiday) {
      let backgroundColorHoliday = value.style.backgroundColor;
      colorOriginal = 'rgb(238, 238, 238)';
      colorHoliday = 'green';

      if(backgroundColorHoliday === colorOriginal) {
        changeBackgroundColorHoliday(colorHoliday);
      } else {
        changeBackgroundColorHoliday(colorOriginal);
      }
    }
  });
}
buttonHolidays('Feriados');

// >> PARTE 3 << MUDAR COR DOS DIAS DE FERIADO
function changeBackgroundColorHoliday(color) {
  const holiday = document.getElementsByClassName('holiday');
  for(value of holiday) {
    value.style.backgroundColor = color;
  }
}

// >> PARTE 4 << BOTÃO SEXTA FEIRA
function buttonFriday(buttonDayOfWeek) {
  let buttonsContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  buttonFriday.id = 'btn-friday';
  buttonFriday.innerHTML = buttonDayOfWeek;
  buttonsContainer.appendChild(buttonFriday);

  buttonFriday.addEventListener('click', () => {
    const fridayDecember = [4, 11, 18, 25];
    const dayFriday = document.getElementsByClassName('friday');

    for(let index = 0; index < dayFriday.length; index += 1) {
      if(dayFriday[index].innerHTML == 'Sextou') {
        dayFriday[index].innerHTML = fridayDecember[index];
      } else {
     dayFriday[index].innerHTML = 'Sextou';
      }
    }
  });
}
buttonFriday('Sexta-Feira');

// >> PARTE 6 << ZOOM NOS DIAS DO MÊS QUANDO PASSAR O MOUSE POR CIMA
function zoomDay() {
  const day = document.querySelectorAll('.day');
  for(let index  = 0; index < day.length; index += 1) {
    day[index].addEventListener('mouseenter', () => {
      day[index].style.fontSize = '25px';
      }
    );
    day[index].addEventListener('mouseleave', () => {
      day[index].style.fontSize = '20px';
    });
  }
}
zoomDay();

// >> PARTE 7 << TAREFA PERSONALIZADA
function addTasks(task) {
  let newTask = document.createElement('span');
  newTask.innerHTML = task;
  
  const myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(newTask);
}
addTasks('cozinhar');

// >> PARTE 9 << ADICIONAR UMA LEGENDA COM COR PARA A TAREFA
function addSubtitleColorTask(cor) {
  let subtitle = document.createElement('div');
  subtitle.className = 'task';
  subtitle.style.backgroundColor = cor;
  const myTasks = document.querySelector('.my-tasks');
  myTasks.appendChild(subtitle);
}

addSubtitleColorTask('red');