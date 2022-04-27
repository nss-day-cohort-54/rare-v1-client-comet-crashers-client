import { getPosts } from "./PostManager";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Posts = () => {
    const [ posts, setPosts ] = useState([])
    

    useEffect(() => {
        getPosts().then(postData => setPosts(postData))
    },[])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Posts</h1>
            <article className="Posts">
                {
                    posts.map(post => {
                        return <section key={post.id} className="posts">
                            <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
                            <div>Posted By: {post.user}</div>
                            <div>Published on{post.publication_date}</div>
                            <div>{post?.image_url}</div>
                            <div>{post.content}</div>
                            <div>{post.category}</div>
                        </section>
                    })
                }
            </article>
        </div>
    )
}