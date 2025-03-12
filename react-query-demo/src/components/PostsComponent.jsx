import { useQuery } from "react-query";

// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { posts, isError, isLoading, error } = useQuery('fetchPosts', fetchPosts);

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
        </div>
    )
}

export default PostsComponent;