window.onload = () => {
  //CAPTURA DE ELEMENTOS
  const starBtn = document.getElementById('start-race-btn');
  const resetBtn = document.getElementById('reset-race-btn');
  const player1 = document.getElementById('player1');
  const player2= document.getElementById('player2');
  const audioWinner = document.getElementById('audioWinner');
  
  const resetCars = () => {
    player1.style.marginLeft = 0;
    player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
    player2.style.marginLeft = 0;
    player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
  };

  resetCars();

  starBtn.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 100 + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 100 + 'px';

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

    if(player1Win) {
      alert('PLAYER 1 GANHOU! UHUUL!!');
      resetCars();
      audioWinner.play();
    }

    if(player2Win) {
      alert('PLAYER 2 GANHOU! UHUUL!!');
      resetCars();
      audioWinner.play();
    }
  });

  resetBtn.addEventListener('click', resetCars);

  //SELECIONA PLAYER - CARRINHO 
  const cars = document.getElementsByClassName('car');
  const alternativas = document.getElementsByClassName('playersImages');

  //SELECIONA PLAYER 1 OU PLAYER 2
  for(let index = 0; index < cars.length; index += 1) {
    cars[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if(selected){
        selected.classList.remove('selected');
      }

      event.target.classList.add('selected');
    })
  }

  //SELECIONA O CARRINHO
  for(let index = 0; index < alternativas.length; index += 1) {
    alternativas[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if(selected) {
        selected.style.backgroundImage = `url(${event.target.src})`;
        selected.classList.remove('selected');
      }
    })
  }

}