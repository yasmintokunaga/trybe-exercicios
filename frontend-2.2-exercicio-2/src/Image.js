import React from 'react';
import './Image.css'

class Image extends React.Component {
  render() {
    const { avatar } = this.props;
    return (<img src={ avatar }/>);
  }
}

export default Image;