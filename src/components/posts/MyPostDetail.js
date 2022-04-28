import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { getPostById, deletePost } from "./PostManager"

export const PostDetail = () => {
    const [post, setPost] = useState([ {user: {}, category: {} }])
    const { postId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getPostById(postId)
            .then(setPost)
    }, [])
    return (
        <section className="post">
            <h3 className="post__title">{post.title}</h3>
            <div className="post__content">{post.content}</div>
            <div className="post__user">Posted by: {post.user}</div>
            <div className="post__category">Category: {post.category}</div>

            <button onClick={() => deletePost(post.id).then(() => history.push("/posts"))} >Delete Post</button>

            <button onClick={() => {
                history.push(`/posts/edit/${post.id}`)
            }}>Edit</button>
        </section>
    )
}