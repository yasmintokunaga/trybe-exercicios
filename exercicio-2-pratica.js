const generateEmail = (fullName) => {
  const arrayName = fullName.split(' ');
  arrayName.forEach((name, index) => {
    arrayName[index] = name.toLowerCase();
  });
  const email = `${arrayName.join('_')}@trybe.com`
  return email;
};


const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),
    id2: generateEmail('Luiza Drumond'),
    id3: generateEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());