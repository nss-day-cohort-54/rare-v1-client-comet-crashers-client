import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./posts/PostDetail"
import { Posts } from "./posts/PostList"
import { CategoryList } from "./categories/CategoryList"
import { PostForm } from "./posts/PostForm"
import { TagList } from "./tags/TagList"
import { MyPosts } from "./posts/MyPosts"

export const ApplicationViews = () => {
    return (
    <>
        <Route exact path="/">
            <Posts/>
        </Route>

        <Route exact path="/posts">
            <Posts/>
        </Route>

        <Route exact path="/posts/:postId(\d+)">
            <PostDetail />
        </Route>
        <Route exact path="/myposts/:postId(\d+)">
            <PostDetail />
        </Route>
        <Route exact path="/posts/edit/:postId(\d+)">
            <PostForm />
        </Route>
        <Route exact path="/posts/create">
            <PostForm />
        </Route>

        <Route exact path="/myposts/:userId(\d+)">
                <MyPosts />
        </Route>

        <Route exact path="/categories">
                <CategoryList />
            </Route>
        <Route exact path="/tags">
            <TagList />
        </Route>
    </>
)
}