export const getUserDetails = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}`);

  const data = await api_call.json();
  return { data }
};

// Get the information of the Repos and keep it in 'fetchUsersRepos'
export const getUserRepos = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}/repos`);

  const data = await api_call.json();
  return { data }
};