import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);

    this.state = {
      comidaFavorita: '',
      name: '',
      email: '',
      estado: 'sp',
    };
  }

  handleTextArea(event) {
    this.setState({
      comidaFavorita: event.target.value,
    })
  };

  handleInputName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleInputEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  handleSelectOption(event) {
    this.setState({
      estado: event.target.value,
    })
  }

  render() {
    return (
      <main>
        <h1>Fourmulário</h1>
        <form>

          <label for="dropdown-estado">
          Estado
          <select name="estado" id="dropdown-estado" onChange={this.handleSelectOption}>
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
              onChange={this.handleInputName}
            />
          </label>

          <label for="email">
            Email
            <input 
              type="email"
              placeholder='Digite o seu email'
              id="email"
              onChange={this.handleInputEmail}
            />
          </label>

          <label for="comida-favorita">
            Comida Favorita
            <textarea 
              id="comida-favorita"
              name='comidaFavorita'
              placeholder='Liste as suas comidas favoritas'
              value={this.state.comidaFavorita}
              onChange={this.handleTextArea}
            />
          </label>
        </form>
      </main>
    )
  }
}

export default Form