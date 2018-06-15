import React, { Component } from 'react';
import "../pages-css/Result.css";
import axios from "axios";





class Result extends Component {
 
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('http://localhost:4055/')
      .then(response => {
        const users = response.data.users
        this.setState({ users });
      })
  }

  render() {
    return (
      
      <div className="result-table">
      <table>
        <tbody>
      <tr>
      <th>User Name</th>
      <th>Points</th>
      </tr>
      <tr>
        <td>samer</td>
        <td>15</td>
          </tr>
          <tr>
        <td>jad</td>
        <td>10</td>
          </tr>
          <tr>
        <td>ali</td>
        <td>5</td>
          </tr>
          
        { this.state.users.map(user => 
        
        <tr>
        <td>{user.username}</td>
        <td>{user.points}</td>
        </tr>
        )}
         
         </tbody>
        </table>
        </div>
       
    )
  }
  
  

}
export default Result;