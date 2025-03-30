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
const SEARCH_ENDPOINT_START = "https://api.github.com/search/users?q";
const LOCATION_KEYWORD = "location";
const MIN_REPOS_KEYWORD = "minRepos";
const REPOS_API_KEYWORD = "repos"; // GitHub API uses 'repos'

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
    let queryParts = [];
    if (queryParams.q) {
      queryParts.push(queryParams.q);
    }
    if (queryParams.location) {
      queryParts.push(`${LOCATION_KEYWORD}:${queryParams.location}`);
    }
    if (queryParams.minRepos) {
      queryParts.push(`${REPOS_API_KEYWORD}:>${queryParams.minRepos}`);
    }

    const queryString = queryParts.join('+');
    const apiUrl = `${SEARCH_ENDPOINT_START}=${queryString}`;

    console.log("Attempting API call to:", apiUrl);
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error during advanced user search:", error);
    throw error;
  }
};
