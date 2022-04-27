import React, {useEffect, useState} from "react";
import { useParams, useHistory } from 'react-router-dom'
import { getCategories } from "../categories/CategoryManager";
import { addPost, getPostById, updatePost } from "./PostManager";
export const PostForm = () => {
    // Use the required context providers for data
    const [categories, setCategories] = useState([])
    const { postId } = useParams()
    // Component state
    const [post, setPost] = useState({})
    const history = useHistory()

    // Is there a a URL parameter??
    const editMode = postId ? true : false  // true or false

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newPost = Object.assign({}, post)          // Create copy
        newPost[event.target.name] = event.target.value    // Modify copy
        setPost(newPost)                                 // Set copy as new state
    }

    // Get posts from API when component initializes
    useEffect(() => {
        if (editMode) {
            getPostById(postId).then((res) => {
                setPost(res)
            })
        }
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    const constructNewPost = () => {
        const categoryId = parseInt(post.categoryId)

        if (categoryId === 0) {
            window.alert("Please select a category")
        } else {
            if (editMode) {
                // PUT
                updatePost({
                    id: post.id,
                    userId: parseInt(localStorage.getItem("rare_user")),
                    categoryId: categoryId,
                    title: post.title,
                    content: post.content
                })
                    .then(() => history.push("/posts"))
            } else {
                // POST
                addPost({
                    userId: parseInt(localStorage.getItem("rare_user")),
                    categoryId: categoryId,
                    title: post.title,
                    content: post.content
                })
                    .then(() => history.push("/posts"))
            }
        }
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">{editMode ? "Update post" : "Admit post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        placeholder="post title"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="content">Content: </label>
                    <input type="text" name="content" required autoFocus className="form-control"
                        placeholder="post content"
                        defaultValue={post.content}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryId">category: </label>
                    <select name="categoryId" className="form-control"
                        value={post.categoryId}
                        onChange={handleControlledInputChange}>

                        <option value="0">Select a category</option>
                        {
                            categories.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    constructNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Reservation"}
            </button>
        </form>
    )
}
