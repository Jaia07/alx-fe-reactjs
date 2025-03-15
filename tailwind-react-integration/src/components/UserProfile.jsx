function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 sm:p-4 md:p8 max-w-sm sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
        <img
        className="rounded-full w-36 h-36 sm:w-24 h-24 md:w-36 h-36 hover:scale-110 transition-transform duration-300 ease-in-out" 
        src="https://via.placeholder.com/150" 
        alt="User" 
        />
        <h1 className="text-xl sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;