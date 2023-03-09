import React from 'react';

class Email extends React.Component {
  render() {
    const { value, handler } = this.props;
    return (
      <label htmlFor="email">
        Email
        <input
          type="email"
          placeholder='Digite o seu email'
          id="email"
          name="email"
          onChange={handler}
          value={value}
        />
      </label>
    )
  }
}

export default Email;