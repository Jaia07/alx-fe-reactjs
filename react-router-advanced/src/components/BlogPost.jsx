import { useParams } from 'react-router-dom'

// Component that displays user information based on URL parameter
const BlogPost = () => {
    // useParams hook is used to access route parameters
    const { blogId } = useParams();
    return (
        <div>
            <h2>Blog Post</h2>
            <h3>Blog Post: {blogId}</h3>
        </div>
    )
}

export default BlogPost;