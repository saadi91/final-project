import React,{Component} from 'react';
import "../pages-css/Footer.css";



class Footer extends Component{
  render() {
return(

<div className="footer">
<div className="copy-right"><p>Copyright @2018-All rights reserved.</p></div>
<div className="social-media-icons">
  <a href="https://www.facebook.com/"><img src={require("../images/facebook.png")} alt="facebook-logo"/></a>
  <a href="https://www.twitter.com/"><img src={require("../images/twitter.png")} alt="twitter-logo"/></a>
  <a href="https://www.instagram.com/"><img src={require("../images/instagram.png")} alt="instagram-logo"/></a>
</div>
</div>
)
}
}
export default Footer;