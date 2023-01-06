const agreeTerm2 = document.getElementById('agree-term-2');
const btnSubmit = document.getElementById('btn-submit');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const respostaInput = document.getElementById('resposta');

nameInput.addEventListener('keypress', () => {
  const nameInputValue = nameInput.value;
  if (nameInputValue.length < 10 || nameInputValue.length >40) {
    nameInput.style.borderColor = 'red';
  } else {
    nameInput.style.borderColor = 'green';
  }
});

emailInput.addEventListener('keypress', () => {
  const emailInputValue = emailInput.value;
  if (emailInputValue.length < 10 || emailInputValue.length > 50) {
    emailInput.style.borderColor = 'red';
  } else {
    emailInput.style.borderColor = 'green';
  }
});

respostaInput.addEventListener('keypress', () => {
  const respostaInputValue = respostaInput.value;
  if (respostaInputValue.length < 10 || respostaInputValue.length >500) {
    respostaInput.style.borderColor = 'red';
  } else {
    respostaInput.style.borderColor = 'green';
  }
});

const checkNome = () => {
  const nameInputValue = nameInput.value;
  if (nameInputValue.length < 10 || nameInputValue.length > 40) {
    return true;
  } else {
    return false;
  }
};

const checkEmail = () => {
  const emailInputValue = emailInput.value;
  if (emailInputValue.length < 10 || emailInputValue.length > 50) {
    return true;
  } else {
    return false;
  }
};

const checkResposta = () => {
  const respostaInputValue = respostaInput.value;
  if (respostaInputValue.length < 10 || respostaInputValue.length > 500) {
    return true;
  } else {
    return false;
  }
};

const checkAgreeTerm2 = () => {
  if (agreeTerm2.checked === false) {
    return true;
  } else {
    return false;
  }
};

btnSubmit.addEventListener('click', (event) => {
  if(checkNome() || checkEmail() || checkResposta() || checkAgreeTerm2()) {
    event.preventDefault();
    alert('Dados Inválidos');    
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip')
  }
});
