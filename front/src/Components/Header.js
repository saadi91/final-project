import React, { Component } from "react";
import qs from "qs";
import axios from "axios";
import {
  Button,Modal,FormGroup,ControlLabel,Form,FormControl,MenuItem,
  ButtonToolbar,DropdownButton,Col,Checkbox, FieldGroup ,HelpBlock
} from "react-bootstrap";
import "../pages-css/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      registerEmail: "",
      password: "",
      registerPassword: "",
      confirmPassword: "",
      isLogin: false,
      show: false,
      showMessage: false,
      showResult: false,
      users: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleChangeRegister = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  logOut = () => {
    this.setState({ isLogin: false, email: "", password: "" });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    axios.get("http://localhost:4055/").then(response => {
      let loginUsers = response.data.users;
      
      for(var i=0; i < loginUsers.length; i++){
      if (
        loginUsers[i].email == this.state.email &&
        loginUsers[i].password == this.state.password) {
           this.setState({ isLogin: true, username:loginUsers[i].username });
        }
      
      }
    });
   
};

  handleRegisterClose = () => {
    this.setState({ show: false });
  };
  handleRegisterShow = () => {
    this.setState({ show: true });
  };
  addRegisterUser = event => {
    this.setState({ showResult: true, show: false, isLogin: true });
    const myData = {
      username: this.state.username,
      email: this.state.registerEmail,
      password: this.state.registerPassword,
      points: 0
    };
    // console.log("myData: " +myData);
    // if(!myData.email){
    //   return ('email not provided')
    // }
    // if(myData.email.indexOf('@') < 0 | myData.email.indexOf('.') < 0 ){
    //   return ('email is not valid')
    // }
    // if(!myData.password){
    //   return ('password not provided')
    // }
    // if(myData.confirmPassword){
    //   return ('confirm password not provided')
    // }
    // if(myData.password !== myData.confirmPassword){
    //    return ('confirm password not equal to password')
    // }
    if (myData.username && myData.email && myData.password) {
      // console.log("with qs: " + qs.stringify(myData));

      axios
        .post("http://localhost:4055/api/form", qs.stringify(myData))
        .then(response => {
          //console.log("response: " + response.data);
        })
        .then(alert("Your message was sent successfully."));
    } else {
      alert("All fields are required!");
    }
  };
  showLoginLogout() {
    if (!this.state.isLogin) {
      return (
        <div>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="small">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            
          </FormGroup>

          <FormGroup controlId="password" bsSize="small">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

      </FormGroup>
      
      <div className="forgot-password">
            <a href="#">Forgot password?</a>
            </div>
          <div className="login-buttons">
            <Button bsStyle="primary" onClick={this.handleRegisterShow}>
              Register
            </Button>
            <Button type="submit" className="login-btn">
              Login
            </Button>
          </div>
        </Form>
        
        </div>
      );
    } else {
      return (
        <div>
          <ButtonToolbar className="user-info">
            <DropdownButton
              pullRight
              bsStyle="primary"
              bsSize="small"
              title={this.state.username}
              id="dropdown-size-small"
            >
              <MenuItem eventKey="1">Your Profile</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="2" className="log-out" onClick={this.logOut}>
                Log Out
              </MenuItem>
            </DropdownButton>
          </ButtonToolbar>
        </div>
      );
    }
  }

  render() {
    /*     const show = this.state.show
     */
  
    return (
      <div className="container">
        <header>
          <div>
            <img className="logo" src={require("../logo.jpg")} alt="logo" />
          </div>

          <div className="login">
            {this.showLoginLogout()}

            <Modal show={this.state.show} onHide={this.handleRegisterClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={this.addRegisterUser}>
                  <FormGroup controlId="username" bsSize="small">
                    <ControlLabel>User Name</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChangeRegister}
                    />
                  </FormGroup>

                  <FormGroup controlId="registerEmail" bsSize="small">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      onChange={this.handleChangeRegister}
                    />
                  </FormGroup>

                  <FormGroup controlId="registerPassword" bsSize="small">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                      type="password"
                      onChange={this.handleChangeRegister}
                    />
                  </FormGroup>

                  <FormGroup controlId="confirmPassword" bsSize="small">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                      type="password"
                      onChange={this.handleChangeRegister}
                    />
                  </FormGroup>
             
                </Form>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.handleRegisterClose}>Close</Button>
                <Button
                  type="submit"
                  bsStyle="primary"
                  onClick={this.addRegisterUser}
                 >
                  Register
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
