import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.fetchUsers = this.fetchUsers.bind(this);
    this.handleFavoriteUsers = this.handleFavoriteUsers.bind(this);
    this.removeFavorites = this.removeFavorites.bind(this);

    this.state = {
      object: undefined,
      loanding: true,
      favoriteUsers: [],
    }
  }

  async fetchUsers() {
    this.setState(
      {
        loanding: true,
      },
      async () => {
        const requestReturn = await fetch('https://api.randomuser.me/');
        const requestObject = await requestReturn.json();
        const requestInfo = requestObject.results[0];
        const { picture, name, email, dob, login } = requestInfo;
        this.setState({
          object: {
            picture: picture.medium,
            name: `${name.title} ${name.first} ${name.last}`,
            email,
            age: dob.age,
            username: login.username,
          },
          loanding: false,
        });
        console.log(requestInfo);
      }
    )
  }

  componentDidMount() {
    this.fetchUsers();
  }

  handleFavoriteUsers() {
    console.log('click')
    this.setState(({ favoriteUsers, object }) => (
      {
        favoriteUsers: [...favoriteUsers, object],
      }
    ))
    this.fetchUsers();
  }

  removeFavorites(username) {
    const { favoriteUsers } = this.state;
    const newFavorites = favoriteUsers.filter((user) => user.username !== username)
    this.setState({
      favoriteUsers: newFavorites,
    });
  }

  render() {
    const { object, loanding, favoriteUsers } = this.state;
    return (
      <>
        <h1>Usuários aleatórios</h1>
        {
          loanding
            ? <p>Carregando</p>
            : (<div><img src={object.picture} alt={object.name} />
              <p>Full name: {object.name}</p>
              <p>E-mail: {object.email}</p>
              <p>Idade: {object.age}</p></div>)
        }
        <button onClick={this.fetchUsers}>Trocar</button>
        <button onClick={this.handleFavoriteUsers}> Adicionar aos favoritos</button>
        <h2>Usuários Favoritados</h2>
        {favoriteUsers.map(({ picture, name, email, age, username }) => (
          <div key={username}><img src={picture} alt={name} />
            <p>Last name: {name}</p>
            <p>E-mail: {email}</p>
            <p>Idade: {age}</p>
            <button onClick={() => this.removeFavorites(username)}>Remover</button></div>))}
      </>
    )
  }
}

export default App;
