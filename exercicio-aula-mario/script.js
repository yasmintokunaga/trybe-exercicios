window.onload = () => {
  //PEGANDO OS ELEMENTOS
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const buttonStart = document.getElementById('start-race-btn');
  const buttonReset = document.getElementById('reset-race-btn');
  const carSection = document.querySelector('.car-section');

  //INICIALIZANDO/ VOLTANDO A CORRIDA NO MARCO ZERO
  function resetRun() {
    player1.style.marginLeft = 0;
    player1.style.backgroundImage = 'url(./files/selectPlayer.png)';
    player2.style.marginLeft = 0;
    player2.style.backgroundImage = 'url(./files/selectPlayer.png)';
  }
  buttonReset.addEventListener('click', () => {
    resetRun();
  });

  //ANDANDO COM OS CARRINHOS
  resetRun();
  buttonStart.addEventListener('click', () => {
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + (Math.random() * 100) + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + (Math.random() * 100) + 'px';
    
    let player1WinRun = parseInt(player1.style.marginLeft) > window.innerWidth;
    let player2WinRun = parseInt(player2.style.marginLeft) > window.innerWidth;

    if(player1WinRun) {
      alert('Jogador 1 venceu!! UHHUL!!');
      resetRun();
    }
    if(player2WinRun) {
      alert('Jogador 2 venceu!! UHHUL!!');
      resetRun();
    }
  });
  //SELECIONANDO O PLAYER 1 OU PLAYER 2
  const players = document.getElementsByClassName('car');

  for(let index = 0; index < players.length; index += 1) {
    players[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      if(selected){
        selected.classList.remove('selected');
      }
      players[index].classList.add('selected');
    });
  }

  //SELECIONANDO O PERSONAGEM
  const pilots = document.getElementsByClassName('playersImages');
  for(let index = 0; index < pilots.length; index += 1) {
    pilots[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      selected.style.backgroundImage = `url(${pilots[index].src})`;
      selected.classList.remove('selected');
    })
  }

}