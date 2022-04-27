import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./categories/CategoryList"
import { TagList } from "./tags/TagList"

export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/">
                
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
