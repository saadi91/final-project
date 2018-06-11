import React, { Component } from "react";
import Page from "./Page";
import "../pages-css/News.css";
import {Button,Modal} from 'react-bootstrap'

//import { Button, Image, Item } from 'semantic-ui-react'


/* const ArrayOfNews = [
  {
   src:'src={require("../images/epa_basketball.jpg")}',
   title:'Mavericks owner fined $600,000 for tanking comments',
  description:"Dallas Mavericks owner Mark Cuban was fined $600,000 for public statements detrimental to the NBA,it was announced by NBA Commissioner Adam Silver on Wednesday"
  },
  {
    src:'src={require("../images/epa_basketball.jpg")}',
    title:'Mavericks owner fined $600,000 for tanking comments',
   description:"Dallas Mavericks owner Mark Cuban was fined $600,000 for public statements detrimental to the NBA,it was announced by NBA Commissioner Adam Silver on Wednesday"
   },
  ] */
  
  
 
  

 class News extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render(){
   
return (
  
  <Page title="News" className="news">
  
 <div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Mavericks owner fined $600,000 for tanking comments </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <img className="news-img" src={require("../images/epa_basketball.jpg")} alt="team-logo"/>
         <hr />
          
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </p>
         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

  <div className="all-news">
  <div className="news-item">
  <div className="news-image">
  <img src={require("../images/epa_basketball.jpg")} alt="team-logo"/>
  </div>
  <div className="news-title">
   <a href="#" bsStyle="primary" bsSize="large" onClick={this.handleShow}><p> 	
    Mavericks owner fined $600,000 for tanking comments </p></a> 
  </div>
  <div className="news-description">
   <p>Dallas Mavericks owner Mark Cuban was 
   fined $600,000 for public statements detrimental to the NBA,
   it was announced by NBA Commissioner Adam Silver on Wednesday. ...</p>
  </div>
  </div>


  <div className="news-item">
  <div className="news-image">
  <img src={require("../images/epa_basketball.jpg")}  alt="team-logo"/>
  </div>
  <div className="news-title">
   <a href="#"><p> 	
    Mavericks owner fined $600,000 for tanking comments </p></a> 
  </div>
  
  <div className="news-description">
   <p>Dallas Mavericks owner Mark Cuban was
   fined $600,000 for public statements detrimental to the NBA,
   it was announced by NBA Commissioner Adam Silver on Wednesday. ...</p>
  </div>
  </div>

  <div className="news-item">
  <div className="news-image">
  <img src={require("../images/epa_basketball.jpg")}  alt="team-logo"/>
  </div>
  <div className="news-title">
   <a href="#"><p> 	
    Mavericks owner fined $600,000 for tanking comments </p></a> 
  </div>

  <div className="news-description">
   <p>Dallas Mavericks owner Mark Cuban was
   fined $600,000 for public statements detrimental to the NBA,
   it was announced by NBA Commissioner Adam Silver on Wednesday. ...</p>
  </div>
  </div>

  <div className="news-item">
  <div className="news-image">
  <img src={require("../images/epa_basketball.jpg")}  alt="team-logo"/>
  </div>
  <div className="news-title">
   <a href="#"><p> 	
    Mavericks owner fined $600,000 for tanking comments </p></a> 
  </div>
  <div className="news-description">
   <p>Dallas Mavericks owner Mark Cuban was
   fined $600,000 for public statements detrimental to the NBA,
   it was announced by NBA Commissioner Adam Silver on Wednesday. ...</p>
  </div>
  </div>

  <div className="news-item">
  <div className="news-image">
  <img src={require("../images/epa_basketball.jpg")}  alt="team-logo"/>
  </div>
  <div className="news-title">
  <a href="#"><p> 	
    Mavericks owner fined $600,000 for tanking comments </p></a> 
  </div>
  <div className="news-description">
  <p>Dallas Mavericks owner Mark Cuban was
   fined $600,000 for public statements detrimental to the NBA,
   it was announced by NBA Commissioner Adam Silver on Wednesday. ...</p>
  </div>
  </div>

  </div> 
  
</Page>
 


)
  }
}
export default News;