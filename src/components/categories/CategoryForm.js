import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { addCategory } from "./CategoryManager"


export const CategoryForm = ({categoryLoad}) => {
    // Component state
    const [category, setCategory] = useState({
        label: ""
    })
    const history= useHistory()

    const saveCategory = (evt) => {
        addCategory(evt)
        .then(() =>{categoryLoad()
        setCategory({label:""})})
    }

    return (
        <form className="categoryForm">
            <b><h2 className="categoryForm__title">Add Category</h2></b>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"> </label>
                    <input type="text" value={category.label} name="name" required autoFocus className="form-control"
                        placeholder="Category label"
                        onChange={
                            (evt) => {
                                const copy = { ...category }
                                copy.label = evt.target.value
                                setCategory(copy)
                            }
                        }
                        
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    let newCategory = {
                        label: category.label
                    }

                    saveCategory(newCategory)
                }}

                className="btn btn-primary">
                Add Category
            </button>
        </form>
    )
}
