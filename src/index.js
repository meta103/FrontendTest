import '../styles/main.scss';

/* HTML Tags */
const inputUser = document.querySelector('#search');
const searchButton = document.querySelector('#button');
const container = document.querySelector('.container');

/* API Base URL */
const baseUrl = 'https://api.github.com/users/';

//Get all user details from Github API
const getUserDetails = async (username) => {
  const api_call = await fetch(baseUrl + username);
  const userDetails = await api_call.json();
  return { userDetails }
};

//Get all repos of user from Github API
const getUserRepos = async (username) => {
  const api_call = await fetch(`${baseUrl + username}/repos`);
  const data = await api_call.json();
  return { data }
};

//Handles creation of html tags to show user details
const showUserDetails = ({ userDetails }) => {
  //Divs
  const userContainer = handleCreateTag("div", container);
  const detailsContainer = handleCreateTag("div", userContainer);
  const avatarContainer = handleCreateTag("div", userContainer);

  //Tags
  let avatar = handleCreateTag("img", avatarContainer);
  let username = handleCreateTag("h1", detailsContainer);
  let name = handleCreateTag("h2", detailsContainer);
  let bio = handleCreateTag("P", detailsContainer);

  //Properties
  userContainer.className = "user-container";
  detailsContainer.className = "user-details-container";
  avatarContainer.className = "avatar-container";
  avatar.src = userDetails.avatar_url;
  username.innerHTML = `@${userDetails.login}`;
  username.className = "username";
  name.innerHTML = userDetails.name;
  name.className = "name"
  bio.innerHTML = userDetails.bio;
  bio.className = "bio";
};

//Handles creation of html tags to show user's repos
const showReposList = ({ reposList }) => {
  //"Repositories Title Section"
  const reposTitleSection = handleCreateTag("h3", container);
  reposTitleSection.innerHTML = "Repositories";
  reposTitleSection.className = "repo-title-section";

  return reposList.data.forEach(repo => {
    createRepoCard(repo)
  })

}
/* Function to create any HTML tag */
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
/* Event listener on click */
searchButton.addEventListener("click", async () => {
  cleanErrorMessage();
  cleanUserDetails();
  cleanRepos();
  const data = await getUserData(inputUser.value);
  if (data.userDetails.message) {
    const errorContainer = handleCreateTag("div", container);
    errorContainer.className = "error-message"
    handleCreateTag("P", errorContainer).innerHTML = data.userDetails.message;
  } else {
    showUserDetails(data);
    showReposList(data);
  }
});

/* Cleans DOM */
function cleanUserDetails() {
  const userDetails = document.querySelector('.user-container');
  const repoTitle = document.querySelector('.repo-title-section');
  if (userDetails && repoTitle) {
    userDetails.remove();
    repoTitle.remove();
  }
}

function cleanRepos() {
  const allRepos = document.querySelectorAll('.repo-container');
  if (allRepos) {
    allRepos.forEach(repo => {
      repo.remove()
    })
  }
}

function cleanErrorMessage() {
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

const getUserData = async (username) => {
  const userDetails = await getUserDetails(username);
  const reposList = await getUserRepos(username);
  return { ...userDetails, reposList };
}