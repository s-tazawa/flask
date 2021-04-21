import React from "react";
import {Link} from "react-router-dom";
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        {/* {this.prop.children} */}
        <Link to="/archives"><button class="btn btn-danger">archives</button></Link>,
        <Link to="/settings"><button class="btn btn-danger">settings</button></Link>
      </div>
    );
  }
}