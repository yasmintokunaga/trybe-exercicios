import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');
  const [showResponse, setResponse] = useState(false);

  return (
    <main>
      <form class="field">
        <div class="field">
          <label class="label" for="name">Nome completo:</label>
          <div class="control has-icons-left">
            <input
              class="input is-success"
              placeholder="Nome completo"
              type="text"
              name="name"
              id="name"
              value={ name }
              onChange={ ({ target }) => setName(target.value) }
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label" for="age">Idade:</label>
          <div class="control has-icons-left">
            <input
              class="input is-link"
              placeholder="Idade"
              type="number"
              name="age"
              id="age"
              value={ age }
              onChange={ ({ target }) => setAge(target.value) }
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-cake-candles"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label" for="city">Cidade:</label>
          <div class="control has-icons-left">
            <input
              class="input"
              placeholder="Cidade"
              type="text"
              name="city"
              id="city"
              value={ city }
              onChange={ ({ target }) => setCity(target.value) }
            />
            <span class="icon is-small is-left">
              <i class="fa-solid fa-location-dot"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="radio">
              <input
                type="radio"
                name="module"
                value="Fundamentos"
                checked={module === 'Fundamentos'}
                onChange={({ target }) => setModule(target.value)}
              />
              Fundamentos
            </label>
            <label class="radio">
              <input
                type="radio"
                name="module"
                value="Front-end"
                checked={module === 'Front-end'}
                onChange={({ target }) => setModule(target.value)}
              />
              Front-end
            </label>
            <label class="radio">
              <input
                type="radio"
                name="module"
                value="Back-end"            
                checked={module === 'Back-end'}
                onChange={({ target }) => setModule(target.value)}
              />
              Back-end
            </label>
            <label class="radio">
              <input
                type="radio"
                name="module"
                value="Ciências da Computação"
                checked={module === 'Ciências da Computação'}
                onChange={({ target }) => setModule(target.value)}
              />
              Ciências da Computação
            </label>
          </div>
          </div>

          <div class="field">
            <div class="control">
              <button
                class="button is-link"
                onClick={ (event) => {
                  event.preventDefault();
                  setResponse(true);
                }}
              >
                Enviar
              </button>
            </div>
          </div>
      </form>
      { showResponse && (
          <div class="card">
            <div class="card-content">
              <div class="content">
                <p>Nome: { name }</p>
                <p>Idade: { age }</p>
                <p>Cidade: { city }</p>
                <p>Módulo: { module }</p>
              </div>
            </div>
          </div>
        )
      }
    </main>
  );
}

export default App;
