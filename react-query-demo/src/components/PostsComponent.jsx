import { useQuery } from "react-query";

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { posts, isError, isLoading, error } = useQuery(
        'fetchPosts', 
        fetchPosts, 
        {
            cacheTime: 300000, // 5 minutes
            staleTime: 60000, // 1 minute
            refetchOnWindowFocus: false,
            keepPreviousData: true,
        }
    );

    // Handle loading state 
    if (isLoading) return <div>Loading...</div>;
    // Handle Error state 
    if (isError) return <div>Error loading posts: {error.message}</div>;

    // Render the fetched data 
    return (
        <div>
            {posts.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
             <button onClick={() => refetch()}>Refetch</button> {/* Add refetch button */}
        </div>
    )
}

export default PostsComponent;