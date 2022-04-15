import React, { Component } from 'react'
import NavbarClerk from '../components/NavbarClerkLogin'
import SidebarClerk from '../components/SidebarClerkLogin'
import DeveloperSign from '../components/DeveloperSign'
import AdminLoginForm from '../components/AdminLoginForm'

export default class AdminLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }

    render() {
        return (
            <div style={this.state.style}>
                <SidebarClerk isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                <NavbarClerk toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID}/>
                <AdminLoginForm
                    setAdminID={this.props.setAdminID}
                    adminID={this.props.adminID}
                />
                <DeveloperSign/>
            </div>
        )
    }
}

