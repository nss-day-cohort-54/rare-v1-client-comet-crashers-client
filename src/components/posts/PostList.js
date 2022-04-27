import { GetPosts } from "./PostManager";
import React, {useEffect, useState} from "react";

export const Posts = () => {
    const [ getPosts, setPosts ] = useState([])
    

    useEffect(() => {
        GetPosts().then(postData => setPosts(postData))
    },[])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>Posts</h1>
            <article className="Posts">
                {
                    getPosts.map(post => {
                        return <section key={post.id} className="posts">
                            <h2>{post.title}</h2>
                            <div>{post.user}</div>
                            <div>{post.publication_date}</div>
                            <div>{post.image_url}</div>
                            <div>{post.content}</div>
                            <div>{post.category}</div>
                        </section>
                    })
                }
            </article>
        </div>
    )
}