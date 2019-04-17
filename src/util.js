/* API Base URL */
const baseUrl = 'https://api.github.com/users/';

/* Get User details from Github API */
const getUserDetails = async (username) => {
  const api_call = await fetch(baseUrl + username);
  const userDetails = await api_call.json();
  return { userDetails }
};

/* Get repos from Github API */
const getUserRepos = async (username) => {
  const api_call = await fetch(`${baseUrl + username}/repos`);
  const data = await api_call.json();
  return { data }
};

/* Returns a single object with all the data (user details + Repos) */
exports.getUserData = async (username) => {
  const userDetails = await getUserDetails(username);
  const reposList = await getUserRepos(username);
  return { ...userDetails, reposList };
};

/* This is just a simple function to test the API */
exports.testApi = async (username) => {
  const api_call = await fetch(`${baseUrl + username}/repos`);
  const data = await api_call.json();
  return data.login
};

/* DOM cleaners */
exports.cleanUserDetails = () => {
  const userDetails = document.querySelector('.user-container');
  const repoTitle = document.querySelector('.repo-title-section');
  if (userDetails && repoTitle) {
    userDetails.remove();
    repoTitle.remove();
  };
};

exports.cleanRepos = () => {
  const allRepos = document.querySelectorAll('.repo-container');
  if (allRepos) {
    allRepos.forEach(repo => {
      repo.remove()
    });
  };
};

exports.cleanErrorMessage = () => {
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  };
};
