import React from "react";

const makeRequest = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
}

export default makeRequest;