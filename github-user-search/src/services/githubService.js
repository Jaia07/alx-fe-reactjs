import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

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