import React from 'react';

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

          <label for="dropdown-estado">
          Estado
          <select name="estado" id="dropdown-estado" onChange={this.handler} value={this.state.estado}>
            <option value="sp">SP</option>
            <option value="rj">RJ</option>
          </select>
          </label>

          <label for="nome">
            Nome
            <input 
              type="text"
              placeholder='Digite o seu nome'
              id="nome"
              name="nome"
              onChange={this.handler}
              value={this.state.nome}
            />
          </label>

          <label for="email">
            Email
            <input 
              type="email"
              placeholder='Digite o seu email'
              id="email"
              name="email"
              onChange={this.handler}
              value={this.state.email}
            />
          </label>

          <label for="comida-favorita">
            Comida Favorita
            <textarea 
              id="comida-favorita"
              name='comidaFavorita'
              placeholder='Liste as suas comidas favoritas'
              value={this.state.comidaFavorita}
              onChange={this.handler}
            />
          </label>
        </form>
      </main>
    )
  }
}

export default Form