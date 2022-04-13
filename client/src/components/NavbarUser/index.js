import React, { Component } from 'react'
import { withRouter } from 'react-router';
import {
    Nav,
    Text,
    Title,
    Bars,
    NavLink,
    NavMenu,
} from './NavbarUserElements'

class NavbarUser extends Component {

    constructor(props) {
        super(props);  
        this.logoutPressed = this.logoutPressed.bind(this);
        this.state={
            passengerName: "henlo"
        }
    }

    logoutPressed = event => {
        event.preventDefault();
        this.props.setPassengerMail("");
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
                    {/* <RightNav> */}
                        <NavMenu>
                            <NavLink to='/home-user' activeStyle>
                                Home
                            </NavLink>
                            <NavLink to='/dashboard-user' activeStyle>
                                Dashboard
                            </NavLink>
                            <NavLink to='/verify-ticket-user' activeStyle>
                                Verify Ticket
                            </NavLink>
                            <NavLink to='/contact-us-user' activeStyle>
                                Contact Us
                            </NavLink>
                            <NavLink to='/home' onClick={this.logoutPressed} activeStyle>
                                Logout
                            </NavLink>
                        </NavMenu>
                    {/* </RightNav> */}
                </Nav>
            </>
        )
    }
}

const UserText = () => {
    //var greeting = {"Hello, you are logged in as " + this.state.passengerName};
  //this.state.setPassengerMail
  //alert(this.state.passengerName);
    return <Text>{"Hello"}</Text>;
  };

export default withRouter(NavbarUser)