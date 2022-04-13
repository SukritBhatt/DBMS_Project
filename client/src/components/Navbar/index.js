import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown, SplitButton } from 'react-bootstrap';
import { withRouter } from 'react-router'
import {
    Navout,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarElements'

class Navbar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        
        return (
            <>
                <Navout>
                    <Title>
                        <h5>Welcome to Hindustan Railways</h5>
                        <h3>E-Ticketing Portal</h3>
                    </Title>
                    <Bars onClick={this.props.toggleSidebar} />
                    <NavMenu>
                        <NavLink to='/home' activeStyle>
                            Home
                        </NavLink>
                        <NavLink to='/register' activeStyle>
                            Register
                        </NavLink>
                        <NavLink to='/verify-ticket' activeStyle>
                            Verify Ticket
                        </NavLink>
                        <NavLink to='/contact-us' activeStyle>
                            Contact Us
                        </NavLink>
                        <Nav variant="pills" style={{padding: '10px'}}>
                            <SplitButton title="Login" href="/login" variant="danger">
                                <Dropdown.Item href="/clerk-login" eventKey="Clerk Login">Clerk</Dropdown.Item>
                                <Dropdown.Item href="/admin-login" eventKey="Admin Login">Admin</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="/login" eventKey="User Login">Passenger</Dropdown.Item>
                            </SplitButton>
                        </Nav>
                    </NavMenu>
                </Navout>
            </>
        )
    }
}

export default withRouter(Navbar);