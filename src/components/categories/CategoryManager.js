export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
      .then(res => res.json())
  };

  export const addCategory = (Category) => {
    return fetch("http://localhost:8088/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Category)
    }).then(getCategories);
  };