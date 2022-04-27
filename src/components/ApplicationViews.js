import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./posts/PostDetail"
import { Posts } from "./posts/PostList"
import { CategoryList } from "./categories/CategoryList"

export const ApplicationViews = () => {
    return (
    <>
        <Route exact path="/">
            <Posts/>
        </Route>

        <Route exact path="/posts">
            <Posts/>
        </Route>

        <Route path="/posts/:postId(\d+)">
            <PostDetail />
        </Route>

        <Route exact path="/categories">
                <CategoryList />
            </Route>
    </>
)
}