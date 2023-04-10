import React from "react";
import { connect } from "react-redux";

class Details extends React.Component {
  render() {
    const {  isFetching, personagemData, isError, errorMessage } = this.props;
    const { name, gender, culture, born } = personagemData;
    if(isFetching) return <p>Carregando...</p>
    if(isError) return<p>{ errorMessage }</p>
    return(
      <>
        { name && (          
          <main>
            <p>
              {`Nome: ${name}`}
            </p>
            <p>
            {`Genero: ${gender}`}
            </p>
            <p>
            {`Cultura: ${culture}`}
            </p>
            <p>
            {`Nascimento: ${born}`}
            </p>
          </main>
        )}
      </>
    );
  }
}

const mapStateToProps = (globalState) => ({
  ...globalState,
});

export default connect(mapStateToProps)(Details);