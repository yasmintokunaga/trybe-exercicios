import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        nome: 'JavaScript assíncrono',
        bloco: 9,
        status: 'já aprendi'
      },
      {
        nome: 'Composição de Componentes',
        bloco: 10,
        status: 'estou aprendendo',
      },
      {
        nome: 'Composição de Estados',
        bloco: 11,
        status: 'aprenderei'
      },
      {
        nome: 'Redux',
        bloco: 15,
        status: 'aprenderei'
      },
    ];
    const list = conteudos.map((conteudo) => (
      `Eu ${conteudo.status} o conteúdo ${conteudo.nome} no bloco ${conteudo.bloco}`
    ));
    return <ul>{list.map((item) => (<li>{item}</li>))}</ul>
  }
}

export default Content
