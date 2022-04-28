import { getUserPosts } from "./PostManager";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const {userId} = useParams()



    const updatePostList = () => {
        getUserPosts(userId)
            .then((postData) => {
                setPosts(postData)
            })
    }

    const deletePost = (id) => {
        deletePost(id).then(
            () => {updatePostList}
        )
    }

    useEffect(
        () => {
            updatePostList()
        },
        []
    )

    return (
        <div style={{ margin: "0rem 3rem" }}>
            <h1>Posts</h1>
            <article className="Posts">
                {
                    posts.map(post => {
                        return <section key={post.id} className="posts">
                            <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>

                            <div>Published on{post.publication_date}</div>
                            <div>{post?.image_url}</div>

                            <div>{post.category}</div>
                            <div>
                                <button onClick={() => deletePost(post.id).then(() => history.push("/posts"))} >Delete Post</button>

                                <button onClick={() => {
                                    history.push(`/posts/edit/${post.id}`)
                                }}>Edit</button>
                            </div>
                        </section>
                    })
                }
            </article>
        </div>
    )
}