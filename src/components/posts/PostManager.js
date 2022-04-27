export const GetPosts = () => {

    return fetch("http://localhost8088/posts")
    .then(res => res.json())

}