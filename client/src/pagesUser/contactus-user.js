import React, { Component } from 'react'
import ContactTable from '../components/ContactTable'
import NavbarUser from '../components/NavbarUser'
import SidebarUser from '../components/SidebarUser'
import DeveloperSign from '../components/DeveloperSign'

export default class ContactUsUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
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
            <div>
                <div>
                    <SidebarUser isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                    <NavbarUser toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                    <ContactTable />
                </div>
                <DeveloperSign />
            </div>
        )
    }
}

