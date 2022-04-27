import React, { useEffect, useState } from "react";
import { getCategories } from "./CategoryManager";
import {CategoryForm} from "./CategoryForm";


export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    const categoryLoad = () => {
        getCategories()
                .then((data) => {
                    setCategories(data)
                })
    }

    return (
        <>
        <h1><b>Categories</b></h1>
        <div className = "categories">
        {
            categories.map(category => {
                return <div>{category.label}</div>
            })
        }
        </div><br/>
        <div>
        <CategoryForm categoryLoad={categoryLoad}/>
        </div>
        </>
    )
}