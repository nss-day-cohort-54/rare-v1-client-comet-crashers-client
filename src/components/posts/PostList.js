import { GetPosts, getPostByCategory, getPostByUser } from "./PostManager";
import React, {useEffect, useState} from "react";
import { getCategories } from "../categories/CategoryManager";
import { getUsers } from "../users/UserManager";

export const Posts = () => {
    const [ getPosts, setPosts ] = useState([])
    const [ categories, setCategories ] = useState([])
    const [ users, setUsers] = useState([])
    

    useEffect(() => {
        GetPosts().then(postData => setPosts(postData))
    },[])

    useEffect(() => {
        getCategories().then(postData => setCategories(postData))
    },[])

    useEffect(() => {
        getUsers().then(postData => setUsers(postData))
    },[])

    const filterPostByCategory = (id) => {
        getPostByCategory(id)
            .then((res) => setPosts(res))
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