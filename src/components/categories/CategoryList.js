import React, { useEffect, useState } from "react";
import { getCategories } from "./CategoryManager";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    return (
        <>
        <h1><b>Categories</b></h1>
        <div className = "categories">
        {
            categories.map(category => {
                return <div>{category.label}</div>
            })
        }
        </div>
        </>
    )
}