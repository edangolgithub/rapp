import React, { Component } from 'react'

export class Product extends Component {
    state = {
        users: [],
        userjson: ""
    }


    componentDidMount() {
        console.log("cons called");
        let baseURL = "https://jsonplaceholder.typicode.com/users";

       

    }
    render() {
        return (
            <div className="container mt-5">
            <h1 className="mb-4">User Data</h1>
           
          </div>
        )
    }
}

export default Product
