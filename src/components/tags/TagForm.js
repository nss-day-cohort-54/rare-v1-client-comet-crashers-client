import React, { useEffect, useState } from "react";
import { addTag } from "./AddTags";
import { useHistory } from "react-router-dom";

export const TagForm = () => {
    const [tag, setTags] = useState({
        label: ""
    })

    const saveTag = (newTag) => {

        addTag(newTag)

        .then(()=> {
            history.push("/tags")
        })
    }

    return (
        <div className = "createTags"> 
            <form className="createTagsForm">
                <h2 id="createTagsForm__title">Add new tag</h2>
                <fieldset>
                    <div className="form-group">
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            //Create an event listener for when state changes
                            onChange={
                                //Capture event passed to us as an argument by the browser
                                (event) => {
                                    //Since you cannot directly modify state in React, 
                                    //you must first copy the existing state.
                                    //Use object spread operator to copy of the current state
                                    //The copy variable will be a brand new object with all of the values
                                    //copied from state
                                    const copy = {...tag}
                                    //Modify the copy and update the name to user input
                                    copy.label = event.target.value
                                    //Make the copy the new state via setTags() function
                                    setTags(copy)
                                }
                            } />
                    </div>
                </fieldset>
                <div id="addTagContainer">
                    <button type="submit"
                        id="addTag" 
                        onClick={event => {
                            event.preventDefault
                            let newTag = {
                                label: tag.label
                            }
                            saveTag(newTag)
                        }}>
                    Add tag
                </button>
            </div>
            </form>
        </div>
)
}