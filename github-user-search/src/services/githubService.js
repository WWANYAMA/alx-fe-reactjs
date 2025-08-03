import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return { success: true, data: response.data.items };
  } catch (error) {
    return { success: false, error };
  }
};
