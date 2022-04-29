import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./posts/PostDetail"
import { PostList } from "./posts/PostList"
import { CategoryList } from "./categories/CategoryList"
import { PostForm } from "./posts/PostForm"
import { TagList } from "./tags/TagList"
import { MyPosts } from "./posts/MyPosts"
import { UserList } from "./users/UserList"

export const ApplicationViews = () => {
    return (
    <>

        <Route exact path="/posts">
            <PostList/>
        </Route>

        <Route exact path="/posts/:postId(\d+)">
            <PostDetail />
        </Route>
        <Route exact path="/myposts/edit/:postId(\d+)">
            <PostForm />
        </Route>
        <Route exact path="/posts/create">
            <PostForm />
        </Route>

        <Route path="/myposts/:userId(\d+)">
                <MyPosts />
        </Route>

        <Route exact path="/categories">
                <CategoryList />
            </Route>
    <Route exact path="/tags">
        <TagList />
    </Route>
    <Route exact path="/users">
        <UserList />
    </Route>
    </>
)
}