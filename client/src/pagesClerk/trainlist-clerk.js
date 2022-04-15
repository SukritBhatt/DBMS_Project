import React, {Component} from 'react'
import Axios from 'axios'
import TrainListContainer from '../components/TrainListContainer'
import SidebarClerk from '../components/SidebarClerk'
import NavbarClerk from '../components/NavbarClerk'
import DeveloperSign from '../components/DeveloperSign'

export default class TrainListClerk extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            trainIDFromPositionToPositionList: [],

            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            }
        }

        // alert(this.props.passengerMail);


        Axios.post("http://localhost:3001/api/getTrainIDFromPositionToPositionList", {
            fromStationID: this.props.fromStationID,
            toStationID: this.props.toStationID,
        })
        .then((res) => {
            for (var i in res.data) {
                var object = {
                    trainID: res.data[i].trainID,
                    fromStationPosition: res.data[i].fromStationPosition,
                    toStationPosition: res.data[i].toStationPosition,
                };

                this.setState({ trainIDFromPositionToPositionList: [...this.state.trainIDFromPositionToPositionList, ...[object]] })
            }
        })


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
                <SidebarClerk isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <NavbarClerk toggleSidebar={this.toggleSidebar} setPassengerMail={this.props.setPassengerMail} passengerMail={this.props.passengerMail} />
                <TrainListContainer 
                    setPassengerMail={this.props.setPassengerMail} 
                    passengerMail={this.props.passengerMail}
                    setFromStationID={this.props.setFromStationID}
                    fromStationID={this.props.fromStationID}
                    setToStationID={this.props.setToStationID}
                    toStationID={this.props.toStationID}
                    setFromStationPosition={this.props.setFromStationPosition}
                    fromStationPosition={this.props.fromStationPosition}
                    setToStationPosition={this.props.setToStationPosition}
                    toStationPosition={this.props.toStationPosition}
                    setJourneyDate={this.props.setJourneyDate}
                    journeyDate={this.props.journeyDate}
                    setClassID={this.props.setClassID}
                    classID={this.props.classID}
                    setNoOfPassengers={this.props.setNoOfPassengers}
                    noOfPassengers={this.props.noOfPassengers}
                    setSelectedTrainID={this.props.setSelectedTrainID}
                    selectedTrainID={this.props.selectedTrainID}
                    trainIDFromPositionToPositionList={this.state.trainIDFromPositionToPositionList} 
                    selectedTrainIDFromPositionToPosition={this.props.selectedTrainIDFromPositionToPosition}
                    setSelectedTrainIDFromPositionToPosition={this.props.setSelectedTrainIDFromPositionToPosition}
                    setClerkID={this.props.setClerkID} 
                    clerkID={this.props.clerkID}
               />
               <DeveloperSign/>
            </div>
        )
    }
}
