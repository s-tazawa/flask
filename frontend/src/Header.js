import React from "react"
import {Container, Navbar, Nav, Button, Form, FormControl, NavDropdown} from "react-bootstrap"


export default class Header extends React.Component {

    constructor(props){
        super(props)
        this.search = this.search.bind(this)
    }

    search(e) {
        e.preventDefault();
        console.log('The button was clicked.');
      }

    render(){
        return (
            <div>

                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <img
                        src={`${process.env.PUBLIC_URL}/logo192.png`}
                        width="30"
                        height="30"
                        alt="React Bootstrap logo"
                />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="#home">splendid opportunity</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light" onClick={this.search}>Search</Button>
                </Form>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
                </Navbar>
            </div>
        )
    }
}