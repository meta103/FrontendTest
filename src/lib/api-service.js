// class GitHubApi {
//   getUserDetails(username) {
//     const api_call = fetch(`https://api.github.com/users/${username}`)
//       .then(() => {
//         return api_call.json()
//       })
//       .catch((error) => {
//         console.log('error', error);
//       })
//   };

//   getUserRepos(username) {
//     const api_call = fetch(`https://api.github.com/users/${username}/repos`)
//       .then(() => {
//         return api_call.json()
//       })
//       .catch((error) => {
//         console.log('error', error);
//       })
//   };
// };

// const gitApiInstance = new GitHubApi();

// export default gitApiInstance;

export default fetchUsers = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}`);

  const data = await api_call.json();
  return { data }
};

// Get the information of the Repos and keep it in 'fetchUsersRepos'
export default getUserRepos = async (username) => {
  const api_call = await fetch(`https://api.github.com/users/${username}/repos`);

  const data = await api_call.json();
  return { data }
};