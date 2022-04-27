export const getPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())

}

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
}

export const addPost = post => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}

export const updatePost = post => {
    return fetch(`http://localhost:8088/Posts/${post.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getPosts)
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/Posts/${postId}`, {
        method: "DELETE"
    })
        .then(getPosts)
}