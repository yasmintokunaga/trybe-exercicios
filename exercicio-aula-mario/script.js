window.onload = () => {
  //PEGANDO OS ELEMENTOS
  const player1 = document.getElementById('player1');
  const player2 = document.getElementById('player2');
  const buttonStart = document.getElementById('start-race-btn');
  const buttonReset = document.getElementById('reset-race-btn');
  const carSection = document.querySelector('.car-section');

  let ps1score = document.getElementById('p1Score');
  let ps2score = document.getElementById('p2Score');

  if(localStorage === 0) {
    ps1score.innerHTML = 0;
    ps2score.innerHTML = 0;
  } else if(localStorage.getItem('scorePlayer1') === null) {
    ps1score.innerHTML = 0;
    ps2score.innerHTML = localStorage.getItem('scorePlayer2');
  } else if(localStorage.getItem('scorePlayer2') === null) {
    ps1score.innerHTML = localStorage.getItem('scorePlayer1');
    ps2score.innerHTML = 0;
  }  else {
    ps1score.innerHTML = localStorage.getItem('scorePlayer1');
    ps2score.innerHTML = localStorage.getItem('scorePlayer2');
  }

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
    player1.style.marginLeft = parseInt(player1.style.marginLeft) + (Math.random() * 300) + 'px';
    player2.style.marginLeft = parseInt(player2.style.marginLeft) + (Math.random() * 300) + 'px';
    
    let player1WinRun = parseInt(player1.style.marginLeft) > window.innerWidth;
    let player2WinRun = parseInt(player2.style.marginLeft) > window.innerWidth;

    if(player1WinRun) {
      alert('Jogador 1 venceu!! UHHUL!!');
      if(localStorage.getItem('scorePlayer1') === null) {
        localStorage.setItem('scorePlayer1', 1);
        // ps1score.innerHTML = localStorage.getItem('scorePlayer1');
      } else {
        let player1Score = parseInt(localStorage.getItem('scorePlayer1'));
        localStorage.setItem('scorePlayer1', player1Score + 1);
        // ps1score.innerHTML = localStorage.getItem('scorePlayer1');
      }
      ps1score.innerHTML = localStorage.getItem('scorePlayer1');
      resetRun();
    }
    if(player2WinRun) {
      alert('Jogador 2 venceu!! UHHUL!!');
      if(localStorage.getItem('scorePlayer2') === null) {
        localStorage.setItem('scorePlayer2', 1);
        // ps1score.innerHTML = localStorage.getItem('scorePlayer2');
      } else {
        let player2Score = parseInt(localStorage.getItem('scorePlayer1'));
        localStorage.setItem('scorePlayer2', player2Score + 1);
        // ps1score.innerHTML = localStorage.getItem('scorePlayer2');
      }
      ps2score.innerHTML = localStorage.getItem('scorePlayer2');
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