import React, { Component } from 'react'
import {
    Nav,
    SubTitle,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarElements'

export default class Navbar extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <>
                <Nav>
                    {/* <SubTitle>
                        <h5>Welcome to Hindustan Railways</h5>
                    </SubTitle> */}
                    <Title>
                        <h5>Welcome to Hindustan Railways</h5>
                        <h3>E-Ticketing Portal</h3>
                    </Title>
                    <Bars onClick={this.props.toggleSidebar} />
                    <NavMenu>
                        <NavLink to='/home' activeStyle>
                            Home
                        </NavLink>
                        <NavLink to='/login' activeStyle>
                            Login
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
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

