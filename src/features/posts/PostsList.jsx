import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article className="p-4 mb-4 bg-white bg-opacity-5 rounded-lg shadow-md" key={post.id}>
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mt-2 text-gray-300">{post.content.substring(0, 100)}</p>
        </article>
    ));

    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold">Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;