import React from 'react';
import './App.css';
import Sidebar from "react-sidebar";
import Client from "./js/Client.js"
import Header from "./Header.js"
import SideNav from "./Sidebar.js"

const mql = window.matchMedia(`(min-width: 1000px)`);
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
 
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }
 
  render() {
    return (
      <div>
        <Sidebar
          sidebar={
            <SideNav />
          }
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
        >
          <Header />
          <Client />
        </Sidebar>
        <div>test</div>
      </div>
    );
  }
}
 
export default App;
