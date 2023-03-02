import React from 'react';

function handleButtons()  {
  console.log('Clique');
}

class Buttons extends React.Component {
  render () {
    return <button onClick={handleButtons}>Meu botão</button>;
  }
}

export default Buttons;