export const addTag = (newTag) => {
    //Define variable to send object to API
    const fetchOptionTag = {
        //Sending an object = POST
        method: "POST",
        headers: {
            "Content-Type": "application/JSON"
        },
        //Send body of employee form - This must be a string for JSON 
        body: JSON.stringify(newTag)
    }

    return fetch("http://localhost:8088/tags", fetchOptionTag)
        .then(response => response.json())
        .then(() => {
            //Use history mechanism from react-router-dom
            //This allows us to push to our browser history (this looks like an array method, but is not)
            //When this triggers, the user will be redirected to the tags page
            history.push("/tags")
    })
}