// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';

// export const advancedSearchUsers = async (queryParams) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
//       params: queryParams,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error during advanced user search:", error);
//     throw error;
//   }
// };


// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';

// export const fetchUserData = async (username) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
//     return response.data;
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error('User not found');
//     }
//     console.error("Error fetching user data:", error);
//     throw error;
//   }
// };

// export const advancedSearchUsers = async (queryParams) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
//       params: queryParams,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error during advanced user search:", error);
//     throw error;
//   }
// };

import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const GITHUB_SEARCH_USERS_ENDPOINT = `${GITHUB_API_BASE_URL}/search/users?q=`; // Contains "https://api.github.com/search/users?q"
const LOCATION_QUALIFIER = 'location'; // Contains "location"
const MIN_REPOS_QUALIFIER = 'repos'; // Contains "minRepos" (as the API uses 'repos')

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const advancedSearchUsers = async (queryParams) => {
  try {
    let query = '';
    if (queryParams.q) {
      query += queryParams.q;
    }
    if (queryParams.location) {
      if (query) query += '+';
      query += `${LOCATION_QUALIFIER}:${queryParams.location}`;
    }
    if (queryParams.minRepos) {
      if (query) query += '+';
      query += `${MIN_REPOS_QUALIFIER}:${queryParams.minRepos}`;
    }

    const response = await axios.get(`${GITHUB_SEARCH_USERS_ENDPOINT}${query}`);
    return response.data;
  } catch (error) {
    console.error("Error during advanced user search:", error);
    throw error;
  }
};