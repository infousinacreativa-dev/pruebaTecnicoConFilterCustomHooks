import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { PostList } from "../components/post/PostList"
import { Pagination } from "../components/utils/Pagination"

import './Home.css'

export function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setLoading(false)
            })

    }, [])



    return (
        <>
            <h1> Esto es el home</h1>

            <div className="contenedorData">
                {loading ? <p>Cargando...</p> :

                    <>
                        <PostList posts={currentPosts} />

                    </>
                }
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />


        </>
    )
}