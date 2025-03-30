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


import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

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
    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
      params: queryParams,
    });
    return response.data;
  } catch (error) {
    console.error("Error during advanced user search:", error);
    throw error;
  }
};