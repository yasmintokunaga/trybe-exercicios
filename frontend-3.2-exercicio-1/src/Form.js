import React from 'react';
import ComidaFavorita from './ComidaFavorita.js';
import Email from './Email.js';
import Estado from './Estado.js';
import Nome from './Nome.js';

class Form extends React.Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);

    this.state = {
      comidaFavorita: '',
      nome: '',
      email: '',
      estado: 'sp',
    };
  }

  handler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  };

  render() {
    return (
      <main>
        <h1>Fourmulário</h1>
        <form>

          <Nome handler={this.handler} value={this.state.nome} />
          <Estado handler={this.handler} value={this.state.estado} />
          <Email handler={this.handler} value={this.state.email} />
          <ComidaFavorita handler={this.handler} value={this.state.comidaFavorita} />

        </form>
      </main>
    )
  }
}

export default Form