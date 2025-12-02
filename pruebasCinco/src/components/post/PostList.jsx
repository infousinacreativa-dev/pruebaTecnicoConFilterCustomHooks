import { Link } from "react-router"
export function PostList({ posts }) {

    return (
        <>
            {posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <header>
                                <h2>{post.title}</h2>
                                <h4>User ID: {post.userId}</h4>
                            </header>
                            <main>
                                <p>{post.body}</p>
                            </main>
                            <footer>
                                <Link to={`/${post.id}`}> Ir al detalle</Link>
                                <span>Post ID: {post.id}</span>
                            </footer>
                        </article>
                    )
                })
            }
        </>
    )
}