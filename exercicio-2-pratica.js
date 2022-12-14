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