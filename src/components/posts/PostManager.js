export const GetPosts = () => {
    return fetch("http://localhost:8088/posts")
        .then(res => res.json())

}

export const getPostByCategory = (id) => {
    return fetch(`http://localhost:8088/posts?category_id=${id}`)
        .then(res => res.json())

}

export const getPostByUser = (id) => {
    return fetch(`http://localhost:8088/posts?user=${id}`)
        .then(res => res.json())

}