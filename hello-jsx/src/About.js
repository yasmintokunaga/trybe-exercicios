import React from 'react';

class About extends React.Component {
  render () {
    const titulo = <h2>Minhas Habilidades</h2>;
    const habilidade1 = <li>HTML</li>
    const habilidade2 = <li>CSS</li>
    const habilidade3 = <li>JavaScript</li>
    const lista = <ul>{habilidade1}{habilidade2}{habilidade3}</ul>
    const tudo = <body>{titulo}{lista}</body>
    return tudo;
  }
}

export default About