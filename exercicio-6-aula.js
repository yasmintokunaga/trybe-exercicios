const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

// const listarHabilidades = (objeto) => {
//   const arrayKeys = Object.keys(objeto);

//   for (let index = 0; index < arrayKeys.length; index += 1) {
//     console.log(`${arrayKeys[index]}, Nível: ${objeto[arrayKeys[index]]}`);
//   }
// };

// const listarHabilidades = (objeto) => {
//   const arrayKeys = Object.keys(objeto);
//   const arrayValues = Object.values(objeto);

//   for (let index = 0; index < arrayKeys.length; index += 1) {
//     console.log(`${arrayKeys[index]}, Nível: ${arrayValues[index]}`);
//   }
// }

const listarHabilidades = (objeto) => {
  const arrayObject = Object.entries(objeto);

  for (let index = 0; index < arrayObject.length; index += 1) {
    console.log(`${arrayObject[index][0]}, Nível: ${arrayObject[index][1]}`)
  }
}

listarHabilidades(student1);
listarHabilidades(student2);