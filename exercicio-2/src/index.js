import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    const { users } = data;
    fillUsersSelect(users);
  })


usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.

  const userSelected = usersSelect.value;
  const USERS_API_SELECTED = `https://dummyjson.com/posts/user/${userSelected}`;
  fetch(USERS_API_SELECTED)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      return fetch(`https://dummyjson.com/posts/${posts[0].id}/comments`)
        .then((response) => response.json())
        .then((data) => {
          const { comments } = data;
          fillFeaturedPostComments(comments);
        });
    })
    .catch((error) => fillErrorMessage(error.message))
});