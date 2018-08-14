import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return <div>404! Page Not Found <Link to="/">Go Home</Link></div>;
  }
}

export default PageNotFound;
