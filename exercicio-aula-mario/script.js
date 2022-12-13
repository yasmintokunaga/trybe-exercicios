window.onload = () => {
  //Captura de elementos
  const startBtn = document.getElementById('start-race-btn');
  const resetBtn = document.getElementById('reset-race-btn');
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const audioWinner = document.getElementById('audioWinner');

  player1.style.marginLeft = 0;
  player2.style.marginLeft = 0;

  startBtn.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if(player1Win){
      alert('PLAYER 1 GANHOU!');
      resetCars();
      audioWinner.play();
    }

    if(player2Win){
      alert('PLAYER 2 GANHOU!');
      resetCars();
      audioWinner.play();
    }

  });

  const resetCars = () => {
    player1.style.marginLeft = 0;
    player1.style.backgroundImage = "url('./files/selectPlayer.png')";
    player2.style.marginLeft = 0;
    player2.style.backgroundImage = "url('./files/selectPlayer.png')";
  }

  resetBtn.addEventListener('click', resetCars);

  //=================================

  //Seleciona player
  const cars = document.getElementsByClassName('car');
  const alternatives = document.getElementsByClassName('playersImages');

  //seleciona player 1 ou 2 [?]
  for(let index = 0; index < cars.length; index += 1){
    cars[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if(selected){
        selected.classList.remove('selected');
      }

      event.target.classList.add('selected');
    })
  }

  //seleciona a personagem
  for(let index = 0; index < alternatives.length; index += 1){
    alternatives[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if(selected){
        selected.style.backgroundImage = `url(${event.target.src})`;
        selected.classList.remove('selected');
      }
    })
  }
}
