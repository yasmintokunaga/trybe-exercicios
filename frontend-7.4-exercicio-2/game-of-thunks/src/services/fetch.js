const API = 'https://anapioficeandfire.com/api/characters?name='

const fetchAPI = async (name) => {
  const result = await fetch(`${API}${name}`);
  const data = await result.json();
  return data;
}

export default fetchAPI;
