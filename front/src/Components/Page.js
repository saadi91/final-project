import React from "react";
import Helmet from "react-helmet";


export default ({ title, children, className: c }) => (
  <div className="Page">
    <Helmet>
      <title>{title} | Slam Dunk</title>
    </Helmet>
    <div className={"Page-Body" + (c ? " " + c : "")}>
      <div className="Page-Content">{children}</div>
    </div>
  </div>
);