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

//Handles creation of html tags to show user details
const showUserDetails = () => {
  //Divs
  const userContainer = handleCreateTag("div", container);
  const detailsContainer = handleCreateTag("div", userContainer);
  const avatarContainer = handleCreateTag("div", userContainer);

  //Tags
  let avatar = handleCreateTag("img", avatarContainer);
  let username = handleCreateTag("h1", detailsContainer);
  let name = handleCreateTag("h2", detailsContainer);
  let bio = handleCreateTag("P", detailsContainer);

  getUserDetails(inputUser.value)
    .then(res => {
      userContainer.className = "user-container";
      detailsContainer.className = "user-details-container";
      avatarContainer.className = "avatar-container";
      avatar.src = res.data.avatar_url;
      username.innerHTML = `@${res.data.login}`;
      username.className = "username";
      name.innerHTML = res.data.name;
      name.className = "name"
      bio.innerHTML = res.data.bio;
      bio.className = "bio";
    })

  //"Repositories"
  const reposTitleSection = handleCreateTag("h3", container);
  reposTitleSection.innerHTML = "Repositories";
  reposTitleSection.className = "repo-title-section";
};

//Handles creation of html tags to show user's repos
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
  //Repo container
  const repoContainer = handleCreateTag("div", container);
  repoContainer.className = "repo-container";

  //Repo title
  handleCreateTag("h4", repoContainer).innerHTML = repo.name;

  //Repo details container
  const repoDetails = handleCreateTag("div", repoContainer);
  repoDetails.className = "repo-details-container";

  //Forks nº & icon
  handleCreateTag("P", repoDetails).innerHTML = repo.watchers_count;

  const startIcon = handleCreateTag("i", repoDetails);
  startIcon.className = "fas fa-code-branch";

  //Stars nº & icon
  handleCreateTag("P", repoDetails).innerHTML = repo.forks_count;

  const forkIcon = handleCreateTag("i", repoDetails);
  forkIcon.className = "fas fa-star";
};

searchButton.addEventListener("click", () => {
  showUserDetails();
  showReposList();
});