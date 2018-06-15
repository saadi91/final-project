import React from "react";
import Page from "./Page";
import "../pages-css/Contact.css";


export default () => (
<Page title="Contact Us" className="contact_us">

<form className="form1" action="">


			<label for="firstName" className="first-name">First Name</label>
			<input className="form-group" type="text" />

			<label for="lastName" className="last-name">Last Name</label>
			<input className="form-group" type="text" />

      <label for="email">Email</label>
			<input className="form-group" type="email" />

			<label for="subject">Subject</label>
			<input className="form-group" type="text" />

			<label for="message">message</label>
			<textarea className="form-group" />

			<button className="form-button">Submit</button>
		</form>
		

		</Page>
);

