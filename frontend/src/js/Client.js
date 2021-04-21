import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Alert } from 'react-bootstrap';
import { BrowserRouter as Router , Route } from "react-router-dom";
import axios from 'axios';
import Layout from  "./pages/Layout"
import Featured from  "./pages/Featured"
import Archives from  "./pages/Archives"
import Settings from  "./pages/Settings"
import TodoApp from "./pages/Todo"
import PersonList from "./pages/PersonList"

var navbarInstance = (
  <Navbar inverse toggleNavKey={0} fixedTop={true}>
    ...
  </Navbar>
);
const app = document.getElementById('app');
// axios.get('https://trusted-api.co.jp', { 
//   withCredentials: true
// });
export const ClientRouter = ({path = ""}) => {
    return (
      <Router>
        <Layout>       
          <Route path={`${path}/`} component={Featured}><div className="featured">featured</div></Route>
          <Route path={`${path}/archives`} component={Archives}><div className="archives">archives</div></Route>
          <Route path={`${path}/settings`} component={Settings}><div><div className="settings">settings</div></div></Route>
          <Route><div className="default">default</div></Route>
        </Layout>
      </Router>
    )
}


export const ClientAlert = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
));

export default class Client extends React.Component {
    render(){
        return (
          <div>
              <ClientRouter/>
              <TodoApp />
              <PersonList />
          </div>
        )
    };
}