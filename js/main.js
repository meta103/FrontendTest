/* HTML Tags */
const inputUser = document.querySelector('#search');
const searchButton = document.querySelector('#button');
const container = document.querySelector('.container');

/* API Keys */
const client_id = 'Iv1.8e3fc3e8fb2c709f';
const client_secret = '7dc79d301cca3659f7316508b9aabed778608d09';

/* Create DOM elements  */
//<p>
// let paragraphTag = document.createElement("P");
// const paragraphInDiv = container.appendChild(paragraphTag);
// //<img>
// const imgTag = document.createElement("img");
// const imgInDiv = container.appendChild(imgTag);

/* URLS extensions  */
const baseUrlUser = `?client_id=${client_id}&client_secret=${client_secret}`;
const baseUrlRepos = '/repos'


const fetchData = async (username, urlExtension) => {
  const api_call = await fetch(`https://api.github.com/users/${username}${urlExtension}`);

  const data = await api_call.json();
  return { data }
}

const showData = () => {
  fetchData(inputUser.value, baseUrlUser)
    .then(res => {
      // paragraphInDiv.innerHTML = `Name: ${res.data.name}`;
      // imgInDiv.src = res.data.avatar_url;
      // paragraphInDiv.innerHTML = "Funciona esta shit?";
      handleCreateTag("h1", container).innerHTML = `Name: ${res.data.name}`;
      handleCreateTag("img", container).src = res.data.avatar_url;
      handleCreateTag("h2", container).innerHTML = `Username: ${res.data.login}`;
      handleCreateTag("P", container).innerHTML = `Bio: ${res.data.bio}`;
    })
};

const showReposList = () => {
  fetchData(inputUser.value, baseUrlRepos)
    .then(repos => {
      repos.data.map(repo => {
        createRepoCard(repo)
      })
    })
}

const handleCreateTag = (tag, fatherElement) => {
  const prueba = fatherElement.appendChild(document.createElement(tag));
  return prueba;
};

const createRepoCard = repo => {
  const divCard = handleCreateTag("div", container);
  divCard.className = "card-container";
  handleCreateTag("h1", divCard).innerHTML = repo.name;
  handleCreateTag("P", divCard).innerHTML = repo.watchers_count;
  handleCreateTag("P", divCard).innerHTML = repo.forks_count;

};

searchButton.addEventListener("click", () => {
  showData();
  showReposList();
});


// avatar: avatar_url
//username: login
//fullname: name
//bio: bio
//repos: repos_url ESTO RETORNA UN JSON!!!

//REPOS JSON:
// Habria que hacer un for each o map y luego coger los siguientes datos:
//name: name
//favs: watchers_count
//forks: forks_count