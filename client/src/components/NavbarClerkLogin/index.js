import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    Nav,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarClerkElements'

class NavbarClerk extends Component {

    constructor(props) {
        super(props);

        this.logoutPressed = this.logoutPressed.bind(this);
    }

    logoutPressed = event => {
        event.preventDefault();
        this.props.history.push("/home");
    }

    render() {
        return (
            <>
                <Nav>
                    <Title>
                        <h5>Welcome to Hindustan Railways</h5>
                        <h3>E-Ticketing Portal</h3>
                    </Title>
                    <Bars onClick={this.props.toggleSidebar} />
                    <NavMenu>
                        <NavLink to='/home' onClick={this.logoutPressed} activeStyle>
                            Home
                        </NavLink>
                    </NavMenu>
                </Nav>
            </>
        )
    }
}

export default withRouter(NavbarClerk)