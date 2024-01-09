import React, { Component } from 'react'
import axios from 'axios';
export class Product extends Component {
    state = {
        users: [],
        userjson: ""
    }


    componentDidMount() {
        console.log("cons called");
        let baseURL = "https://jsonplaceholder.typicode.com/users";

        axios.get(`${baseURL}`)
            .then((response) => {
                console.log(response);
                this.setState({ users: response.data })
                this.setState({ userjson: JSON.stringify(response.data) })

            });

    }
    render() {
        return (
            <div className="container mt-5">
            <h1 className="mb-4">User Data</h1>
            <div className="row">
              {this.state.users.map(user => (
                <div key={user.id} className="col-md-6 mb-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <h2 className="card-title">{user.name}</h2>
                      <p className="card-text">Username: {user.username}</p>
                      <p className="card-text">Email: {user.email}</p>
                      <p className="card-text">Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                      <p className="card-text">Phone: {user.phone}</p>
                      <p className="card-text">Website: {user.website}</p>
                      <p className="card-text">Company: {user.company.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
    }
}

export default Product