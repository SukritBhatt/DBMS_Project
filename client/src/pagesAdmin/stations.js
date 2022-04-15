import React, { Component } from 'react'
import AdminNavbar from '../components/AdminNavbar'
import AdminSidebar from '../components/AdminSidebar'
import StationList from '../components/StationList'
import DeveloperSign from '../components/DeveloperSign'

export default class HomeAdmin extends Component {

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
                <AdminSidebar isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setAdminID={this.props.setAdminID} adminID={this.props.adminID} />
                <AdminNavbar toggleSidebar={this.toggleSidebar} setAdminID={this.props.setAdminID} adminID={this.props.adminID} />
                <StationList />
                <DeveloperSign/>
            </div>
        )
    }
}
