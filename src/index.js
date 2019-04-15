/* HTML Tags */
const inputUser = document.querySelector('#search');
const searchButton = document.querySelector('#button');
const container = document.querySelector('.container');

//Get all user details from Github API
const getUserDetails = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}`);

  const data = await api_call.json();
  return { data }
};

//Get all repos of user from Github API
const getUserRepos = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}/repos`);

  const data = await api_call.json();
  return { data }
};



const showUserDetails = () => {
  getUserDetails(inputUser.value)
    .then(res => {
      handleCreateTag("h1", container).innerHTML = `Name: ${res.data.name}`;
      handleCreateTag("img", container).src = res.data.avatar_url;
      handleCreateTag("h2", container).innerHTML = `Username: ${res.data.login}`;
      handleCreateTag("P", container).innerHTML = `Bio: ${res.data.bio}`;
    })
};

const showReposList = () => {
  getUserRepos(inputUser.value)
    .then(repos => {
      repos.data.map(repo => {
        createRepoCard(repo)
      })
    })
    .catch((error) => {
      console.log('error', error);
    })
}

const handleCreateTag = (tag, fatherElement) => {
  const prueba = fatherElement.appendChild(document.createElement(tag));
  return prueba;
};

const createRepoCard = repo => {
  const cardContainer = handleCreateTag("div", container);
  cardContainer.className = "card-container";

  const repoName = handleCreateTag("div", cardContainer);
  repoName.className = "repo-name-container";
  handleCreateTag("h1", repoName).innerHTML = repo.name;

  const repoDetails = handleCreateTag("div", cardContainer);
  repoDetails.className = "repo-details-container";

  handleCreateTag("P", repoDetails).innerHTML = repo.watchers_count;
  handleCreateTag("P", repoDetails).innerHTML = repo.forks_count;

};

searchButton.addEventListener("click", () => {
  showUserDetails();
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