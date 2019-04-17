/* Styles */
import '../styles/main.scss';

/* Import API services & "DOM cleaner" functions */
const { getUserData, cleanUserDetails, cleanRepos, cleanErrorMessage } = require('./util');

/* Initial HTML Tags */
const inputUser = document.querySelector('#search');
const searchButton = document.querySelector('#button');
const container = document.querySelector('.container');

/* Function to create any HTML tag */
const handleCreateTag = (tag, fatherElement) => {
  const newTag = fatherElement.appendChild(document.createElement(tag));
  return newTag;
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
    renderUserDetails(data);
    renderReposList(data);
  };
});

/* Handles creation of html tags to show user details */
const renderUserDetails = ({ userDetails }) => {
  //Divs
  const userContainer = handleCreateTag("div", container);
  const detailsContainer = handleCreateTag("div", userContainer);
  const avatarContainer = handleCreateTag("div", userContainer);

  //Tags
  const avatar = handleCreateTag("img", avatarContainer);
  const username = handleCreateTag("h1", detailsContainer);
  const name = handleCreateTag("h2", detailsContainer);
  const bio = handleCreateTag("P", detailsContainer);

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

/* Handles creation of html tags to show user's repos */
const renderReposList = ({ reposList }) => {
  //"Repositories Title Section"
  const reposTitleSection = handleCreateTag("h3", container);
  reposTitleSection.innerHTML = "Repositories";
  reposTitleSection.className = "repo-title-section";

  return reposList.data.forEach(repo => {
    createRepoCard(repo)
  });
};

/* Handles creation of repo container*/
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