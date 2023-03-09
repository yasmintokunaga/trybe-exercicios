import React from 'react';

class ComidaFavorita extends React.Component {
  render() {
    const { value, handler } = this.props;

    let error = undefined;
    if (value.length > 120) error = "Texto muito grande!!"

    return (
      <label htmlFor="comida-favorita">
      Comida Favorita
      <textarea 
        id="comida-favorita"
        name='comidaFavorita'
        placeholder='Liste as suas comidas favoritas'
        value={value}
        onChange={handler}
        />
        <span>{error ? error : ''}</span>
    </label>
    )
  }
}

export default ComidaFavorita;