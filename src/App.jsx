import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"


function App() {

    return (
        <main>
            <section>
                <AddPostForm />
                <PostsList />
            </section>
        </main>
    )
}

export default App
