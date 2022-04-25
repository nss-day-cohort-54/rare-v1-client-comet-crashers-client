import React, { useEffect, useState } from "react";
import { getCategories } from "./CategoryManager";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    const getAllCategories = () => {
        getCategories().then(categoriesData => setCategories(categoriesData))
      }

    return (
        <>
        <h1>Categories</h1>
        </>
    )
}