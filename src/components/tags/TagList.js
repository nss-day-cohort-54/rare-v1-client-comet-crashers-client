import React, { useEffect, useState } from "react";
import { getTags } from "./TagManager";

export const TagList = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        getTags()
            .then(tagData => setTags(tagData))
    }, [])

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
        <div className = "createTags"> 
            <form className="createTagsForm">
                <h2 id="createTagsForm__title">Add new tag</h2>
                <fieldset>
                    <div className="form-group">
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                        />
                    </div>
                </fieldset>
                <div id="addTagContainer">
                    <button id="addTag" onClick={(event) => {
                                    //Since you cannot directly modify state in React, 
                                    //you must first copy the existing state.
                                    //Use object spread operator to copy of the current state
                                    //The copy variable will be a brand new object with all of the values
                                    //copied from state
                                    const copy = {...tags}
                                    //Modify the copy and update the name to user input
                                    copy.label = event.target.value
                                    //Make the copy the new state via setTags() function
                                    setTags(copy)
                                }}>
                    Add tag
                </button>
            </div>
            </form>
        </div>
        </>
    )
}