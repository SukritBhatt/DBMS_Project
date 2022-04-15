import React, { Component } from 'react'
import NavbarClerk from '../components/NavbarClerkLogin'
import SidebarClerk from '../components/SidebarClerkLogin'
import ClerkLoginForm from '../components/ClerkLoginForm'
import DeveloperSign from '../components/DeveloperSign'

export default class ClerkLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }
        //alert(this.props.clerkID);
    }

    render() {
        return (
            <div style={this.state.style}>
                <SidebarClerk isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                <NavbarClerk toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                <ClerkLoginForm
                    setClerkID={this.props.setClerkID}
                    clerkID={this.props.clerkID}
                />
                <DeveloperSign/>
            </div>
        )
    }
}

