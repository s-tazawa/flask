import React from "react"
import {Container, Nav} from "react-bootstrap"
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';


export default class SideNav extends React.Component {
  render(){
    return (
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>Dashboard</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    )
  }
}


// export default class SideNav extends React.Component {
//   render(){
//     return (
//       <Container>
//         <Nav justify variant="tabs" defaultActiveKey="/home" className="flex-column">
//           <Nav.Item>
//             <Nav.Link href="/home">Active</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="link-2">Link</Nav.Link>
//           </Nav.Item>
//           <Nav.Item>
//             <Nav.Link eventKey="disabled" disabled>
//               Disabled
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
        
//         </Container>
//     )
//   }
// }