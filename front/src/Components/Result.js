import React, { Component } from 'react';
import "../pages-css/Result.css";
import axios from "axios";





class Result extends Component {
 
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:8888/')
      .then(response => {
        const users = response.data.users
        this.setState({ users });
        
      })
  }

  render() {
    return (
      
      <div className="result-table">
      <table>
      <tr>
      <th>User Name</th>
      <th>Points</th>
      </tr>
        
        { this.state.users.map(user => 
        
          <tr>
        <td>{user.username}</td>
        <td>{user.points}</td>
          </tr>
        )}
        </table>
        </div>
       
    )
  }
  
  

}
export default Result;