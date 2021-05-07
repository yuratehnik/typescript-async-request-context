import React from "react";

const makeRequest = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10')
        .then((response) => response.json())
        .catch((error)=>{
            throw new Error(error);
        })
}

export default makeRequest;