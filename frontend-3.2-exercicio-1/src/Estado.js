import React from "react";

class Estado extends React.Component {

  render() {
    const { value, handler } = this.props;

    return (
      <label htmlFor="dropdown-estado">
        Estado
        <select name="estado" id="dropdown-estado" onChange={ handler } value={ value }>
          <option value="sp">SP</option>
          <option value="rj">RJ</option>
        </select>
      </label>
    )
  }
}

export default Estado;