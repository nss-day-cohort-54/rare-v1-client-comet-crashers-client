import React, { useEffect, useState } from "react";
import { getTags } from "./TagManager";
import { TagForm } from "./TagForm";

export const TagList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags()
            .then(tagData => 
                setTags(tagData))
    }, 
    [])

    return (
        <>
        <h1><b>Tags</b></h1>
        <div className = "tags">
        {
            tags.map(tag => {
                return <div>{tag.label}, </div>
            })
        }
        </div>
        <div>
            {TagForm()}
        </div>
        </>
    )
}