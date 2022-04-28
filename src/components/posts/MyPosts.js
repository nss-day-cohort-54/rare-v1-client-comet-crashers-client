import { deletePost, getUserPosts } from "./PostManager";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export const MyPosts = () => {
    const [posts, setPosts] = useState([])
    const {userId} = useParams()
    const history = useHistory()



    const updatePostList = () => {
        getUserPosts(userId)
            .then((postData) => {
                setPosts(postData)
            })
    }

    

    const deleteLocalPost = (id) => {
        deletePost(id).then(
            () => {updatePostList()}
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
                            <div>Posted By: {post.user?.username}</div>
                            <div>{post.category}</div>
                            <div>
                                <button onClick={() => deleteLocalPost(post.id)} >Delete Post</button>

                                <button onClick={() => {
                                    history.push(`/myposts/edit/${parseInt(post.id)}`)
                                }}>Edit</button>
                            </div>
                        </section>
                    })
                }
            </article>
        </div>
    )
}