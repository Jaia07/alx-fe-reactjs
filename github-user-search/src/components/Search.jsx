// import React, { useState } from 'react';
// import { advancedSearchUsers } from '../services/githubService';

// function Search() {
//   const [username, setUsername] = useState('');
//   const [location, setLocation] = useState('');
//   const [repos, setRepos] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleInputChange = (event) => {
//     const { name } = event.target;
//     if (name === 'username') {
//       setUsername(event.target.value);
//     } else if (name === 'location') {
//       setLocation(event.target.value);
//     } else if (name === 'repos') {
//       setRepos(event.target.value);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSearchResults([]);
//     setLoading(true);
//     setError('');

//     let query = '';
//     if (username) {
//       query += username;
//     }
//     if (location) {
//       if (query) query += '+';
//       query += `location:${location}`;
//     }
//     if (repos) {
//       if (query) query += '+';
//       query += `repos:${repos}`;
//     }

//     const queryParams = query ? { q: query } : {};
//     console.log("queryParams:", queryParams);

//     if (Object.keys(queryParams).length > 0) {
//       try {
//         const data = await advancedSearchUsers(queryParams);
//         setSearchResults(data.items);
//       } catch (error) {
//         setError('Looks like we encountered an error during the search.');
//         console.error("Error during advanced search:", error);
//         if (error.isAxiosError) {
//           console.error("Axios error details:", error.response);
//         } else {
//           console.error("Non-Axios error:", error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setLoading(false);
//       setError('Please enter at least one search criteria.');
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div>
//           <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Enter username"
//             value={username}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div>
//           <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             placeholder="Enter location"
//             value={location}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div>
//           <label htmlFor="repos" className="block text-gray-700 text-sm font-bold mb-2">Minimum Repositories:</label>
//           <input
//             type="number"
//             id="repos"
//             name="repos"
//             placeholder="e.g., >10"
//             value={repos}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Search Users
//         </button>
//       </form>

//       {loading && <p className="mt-4">Loading...</p>}
//       {error && <p className="mt-4 text-red-500">{error}</p>}

//       {searchResults.length > 0 && (
//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-4">Search Results</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {searchResults.map(user => (
//               <li key={user.id} className="bg-white shadow-md rounded p-4">
//                 <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto mb-2" />
//                 <h3 className="text-lg font-semibold text-center">{user.login}</h3>
//                 <p className="text-center"><a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a></p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {searchResults.length === 0 && !loading && !error && (
//         <p className="mt-4">No users found matching your criteria.</p>
//       )}
//     </div>
//   );
// }

// export default Search;


// import React, { useState } from 'react';
// import { advancedSearchUsers } from '../services/githubService';

// function Search() {
//   const [username, setUsername] = useState('');
//   const [location, setLocation] = useState('');
//   const [repos, setRepos] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [searchInitiated, setSearchInitiated] = useState(false);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'username':
//         setUsername(value);
//         break;
//       case 'location':
//         setLocation(value);
//         break;
//       case 'repos':
//         setRepos(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setSearchResults([]);
//     setLoading(true);
//     setError('');
//     setSearchInitiated(true);

//     let query = '';
//     if (username) {
//       query += username;
//     }
//     if (location) {
//       if (query) query += '+';
//       query += `location:${location}`;
//     }
//     if (repos) {
//       if (query) query += '+';
//       query += `repos:${repos}`;
//     }

//     const queryParams = query ? { q: query } : {};
//     console.log("queryParams:", queryParams);

//     if (Object.keys(queryParams).length > 0) {
//       try {
//         const data = await advancedSearchUsers(queryParams);
//         if (data && data.items && data.items.length === 0 && location === '' && repos === '' && username !== '') {
//           setError("Looks like we cant find the user"); // Specific message for username-only search with no results
//         } else {
//           setSearchResults(data.items);
//         }
//       } catch (error) {
//         setError('Looks like we cant find the user');
//         console.error("Error during advanced search:", error);
//         if (error.isAxiosError) {
//           console.error("Axios error details:", error.response);
//         } else {
//           console.error("Non-Axios error:", error);
//         }
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setLoading(false);
//       setError('Please enter at least one search criteria.');
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <div>
//           <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Enter username"
//             value={username}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div>
//           <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
//           <input
//             type="text"
//             id="location"
//             name="location"
//             placeholder="Enter location"
//             value={location}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div>
//           <label htmlFor="repos" className="block text-gray-700 text-sm font-bold mb-2">Minimum Repositories:</label>
//           <input
//             type="number"
//             id="repos"
//             name="repos"
//             placeholder="e.g., >10"
//             value={repos}
//             onChange={handleInputChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//           Search Users
//         </button>
//       </form>

//       {loading && <p className="mt-4">Loading...</p>}
//       {error && <p className="mt-4 text-red-500">{error}</p>}

//       {!error && searchInitiated && searchResults.length === 0 && (
//         <p className="mt-4">No users found matching your criteria.</p>
//       )}
//     </div>
//   );
// }

// export default Search;

import React, { useState } from 'react';
import { advancedSearchUsers, fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState(''); // Changed 'repos' to 'minRepos'
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [singleUserUsername, setSingleUserUsername] = useState('');
  const [singleUserData, setSingleUserData] = useState(null);
  const [singleUserLoading, setSingleUserLoading] = useState(false);
  const [singleUserError, setSingleUserError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'minRepos': // Changed 'repos' to 'minRepos'
        setMinRepos(value);
        break;
      case 'singleUserUsername':
        setSingleUserUsername(value);
        break;
      default:
        break;
    }
  };

  const handleAdvancedSearchSubmit = async (event) => {
    event.preventDefault();
    setSearchResults([]);
    setLoading(true);
    setError('');
    setSearchInitiated(true);
    setSingleUserData(null);

    let query = '';
    if (username) {
      query += username;
    }
    if (location) {
      if (query) query += '+';
      query += `location:${location}`;
    }
    if (minRepos) { // Changed 'repos' to 'minRepos'
      if (query) query += '+';
      query += `repos:${minRepos}`; // Note: Keeping 'repos' prefix for GitHub API
    }

    const queryParams = query ? { q: query } : {};
    console.log("queryParams:", queryParams);

    if (Object.keys(queryParams).length > 0) {
      try {
        const data = await advancedSearchUsers(queryParams);
        if (data && data.items && data.items.length === 0 && location === '' && minRepos === '' && username !== '') { // Changed 'repos' to 'minRepos'
          setError("Looks like we cant find the user");
        } else {
          setSearchResults(data.items);
        }
      } catch (error) {
        setError('Looks like we encountered an error during the search.');
        console.error("Error during advanced search:", error);
        if (error.isAxiosError) {
          console.error("Axios error details:", error.response);
        } else {
          console.error("Non-Axios error:", error);
        }
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      setError('Please enter at least one search criteria.');
    }
  };

  const handleSingleUserSearch = async () => {
    if (!singleUserUsername) {
      setSingleUserError('Please enter a username to search.');
      return;
    }

    setSingleUserData(null);
    setSingleUserLoading(true);
    setSingleUserError('');
    setSearchResults([]);

    try {
      const userData = await fetchUserData(singleUserUsername);
      setSingleUserData(userData);
    } catch (error) {
      setSingleUserError(error.message === 'User not found' ? "Looks like we cant find the user" : 'Error fetching user data.');
      console.error("Error fetching single user:", error);
    } finally {
      setSingleUserLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2>Search Users</h2>
      <form onSubmit={handleAdvancedSearchSubmit} className="flex flex-col gap-4 mb-8">
        <div>
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="minRepos" className="block text-gray-700 text-sm font-bold mb-2">Minimum Repositories:</label>
          <input
            type="number"
            id="minRepos" // Changed 'repos' to 'minRepos'
            name="minRepos" // Changed 'repos' to 'minRepos'
            placeholder="e.g., >10"
            value={minRepos} // Changed 'repos' to 'minRepos'
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Search Users
        </button>
      </form>

      {loading && <p className="mt-4">Searching users...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {searchResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Search Results</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map(user => (
              <li key={user.id} className="bg-white shadow-md rounded p-4">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-center">{user.login}</h3>
                <p className="text-center"><a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile</a></p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!error && searchInitiated && searchResults.length === 0 && (
        <p className="mt-4">No users found matching your criteria.</p>
      )}

      <h2 className="mt-8">Find a Specific User</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          id="singleUserUsername"
          name="singleUserUsername"
          placeholder="Enter GitHub username"
          value={singleUserUsername}
          onChange={handleInputChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          onClick={handleSingleUserSearch}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Find User
        </button>
      </div>

      {singleUserLoading && <p className="mt-4">Fetching user data...</p>}
      {singleUserError && <p className="mt-4 text-red-500">{singleUserError}</p>}

      {singleUserData && (
        <div className="mt-8 border rounded p-4">
          <h2 className="text-xl font-bold mb-4">User Details</h2>
          <img src={singleUserData.avatar_url} alt={singleUserData.login} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <p className="text-center text-lg font-semibold">{singleUserData.name || singleUserData.login}</p>
          <p className="text-center text-gray-600 mb-2">@{singleUserData.login}</p>
          {singleUserData.bio && <p className="mb-2">{singleUserData.bio}</p>}
          {singleUserData.location && <p className="mb-2">Location: {singleUserData.location}</p>}
          <p><a href={singleUserData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Profile on GitHub</a></p>
        </div>
      )}
    </div>
  );
}

export default Search;