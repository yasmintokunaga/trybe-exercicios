import React from 'react';
import Search from './components/Search';
import Details from './components/Details';

class App extends React.Component {
  render (){
    return (
     <main>
      <Search />
      <Details />
    </main>
    );
  }
}

export default App;
