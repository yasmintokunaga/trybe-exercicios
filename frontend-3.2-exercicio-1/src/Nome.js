import React from "react";

class Nome extends React.Component {
  render() {
    const { value, handler } = this.props;

    return (
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          placeholder='Digite o seu nome'
          id="nome"
          name="nome"
          onChange={ handler }
          value={ value }
        />
      </label>
    )
  }
}

export default Nome;