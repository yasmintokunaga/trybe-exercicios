import React from "react";
import store from "../redux";
import { fetchAction } from "../redux/actions";
import { connect } from 'react-redux';

class Search extends React.Component {
  state = {
    personagem: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;    
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { personagem } = this.state;
    return(
      <section>
        <label>
          <p>Procurar personagem</p>
          <input 
            type="text"
            name="personagem"
            onChange={ this.handleChange }
            value={ personagem }
          />
        </label>
        <button
          onClick={ () => store.dispatch(fetchAction(personagem))}
        >
          Pesquisar
        </button>
      </section>
    );
  }

}

export default connect()(Search);
