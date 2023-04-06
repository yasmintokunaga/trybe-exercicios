import React from 'react';
import { connect } from 'react-redux';
import { fetchDogImage } from './redux/actions';

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if(isFetching) return <p>Carregando...</p>
    
    return (
      <div>
        <button 
          onClick={ () => { dispatch(fetchDogImage()) } }
          type="button"
        >
          Novo Doguinho
        </button>
        <img
          src={ imageURL }
          alt="Imagem dog"
        />
      </div>
      );
  }
};

const mapStateToProps = ({ imageURL, isFetching }) => ({
  imageURL,
  isFetching,
});

export default connect(mapStateToProps)(App);
