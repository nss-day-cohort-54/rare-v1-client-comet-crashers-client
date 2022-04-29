import { getPosts, getPostByCategory, getPostByUser } from "./PostManager";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { PostForm } from "./PostForm";
import { getCategories } from "../categories/CategoryManager";
import { getUsers } from "../users/UserManager";

export const PostList = () => {
    const [ posts, setPosts ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ users, setUsers] = useState([])
    

    useEffect(() => {
        getPosts().then(postData => setPosts(postData))
    },[])

    useEffect(() => {
        getCategories().then(postData => setCategories(postData))
    },[])

    useEffect(() => {
        getUsers().then(postData => setUsers(postData))
    },[])

    const filterPostByCategory = (id) => {
        if (id === 0) {
            getPosts().then(postData => setPosts(postData))
        } else {
            getPostByCategory(id)
                .then((res) => setPosts(res))
        }
    }

    const filterPostByUser = (id) => {
        getPostByUser(id)
            .then((res) => setPosts(res))
    }
    

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
                            <div>{post.category}</div>
                        </section>
                    })
                }
            </article>
            <article>
            <button onClick={() => {
                history.push(`/posts/create`)
            }}>Create a Post</button>
            </article>
            <section id="categoryDropdownFilter">
                <fieldset id="categoryDropdownFieldset">
                    <label id="categorySelectLabel" htmlFor="category"> Filter by category </label>
                    <select className="minimal" onChange={event => {filterPostByCategory(parseInt(event.target.value))}}>
                        <option value="0">Select a category</option>
                        {
                            categories.map(
                                (category) => {
                                    return <>
                                    <option value={category.id} id="categoryId">{category.label}</option>
                                    </>
                                }
                            )
                        }
                    </select>
                </fieldset>
            </section>

            <section id="userDropdownFilter">
                <fieldset id="userDropdownFieldset">
                    <label id="userSelectLabel" htmlFor="user"> Filter by user </label>
                    <select className="minimal" onChange={event => {filterPostByUser(parseInt(event.target.value))}}>
                        <option value="0">Select a user</option>
                        {
                            users.map(
                                (user) => {
                                    return <>
                                    <option value={user.id} id="userId">{user.username}</option>
                                    </>
                                }
                            )
                        }
                    </select>
                </fieldset>
            </section>
        </div>
    )
}