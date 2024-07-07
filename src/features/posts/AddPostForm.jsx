import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            );

            setTitle('');
            setContent('');
        }
    }

    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold">Add a New Post</h2>
            <form className="mt-4">
                <label htmlFor="postTitle" className="block text-gray-300">Post Title</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    className="w-full p-2 mt-1 text-gray-900 bg-gray-100 rounded-md"
                />
                <label htmlFor="postContent" className="block mt-4 text-gray-300">Content</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    className="w-full p-2 mt-1 text-gray-900 bg-gray-100 rounded-md"
                />
                <button 
                    type="button" 
                    className="block mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm