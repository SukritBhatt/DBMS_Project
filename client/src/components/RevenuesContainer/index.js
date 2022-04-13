import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container, Container2, Table, Button, Heading, Form, Select, ButtonAndNavLinkBox, Button1 } from './RevenueContainerElements'
import Axios from 'axios'
import AddTrainCoachContainer from '../AddTrainCoachContainer';
import AddTrainStationContainer from '../AddTrainStationContainer';
import StationListContainer from '../StationListContainer';

class RevenuesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            trainName: "",
            trainId: "",
            revenue: "",
            revenueCheck: false,
            bDate: "",
            noOfCoaches: 0,
            noOfClasses: 2,
            isAddTrainCoachContainerVisible: false,
            isAddTrainStationContainerVisible: false,
            coachList: [],
            stationCount: 0,

            stationList: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
                justifyContent: "center",
                alignItems: "center",
            },
            styleInput: {
                height: "40px",
                padding: "0px 0px 0px 10px",
            },
            styleLabel: {
                padding: "0px 0px 0px 0px",
            },
            styleHr: {
                background: "transparent",
                color: "transparent",
                margin: "0",
                borderStyle: "none",
                height: "1vw",
            },
        }

        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for (var i in res.data) {
                var object = res.data[i].Name;

                this.setState({ stationList: [...this.state.stationList, ...[object]] })
            }
        })

        this.addPressed = this.addPressed.bind(this);
        this.addNewStationToPathPressed = this.addNewStationToPathPressed.bind(this);

        this.setTrainName = this.setTrainName.bind(this);
        this.setBDate = this.setBDate.bind(this);
        this.setTrainId = this.setTrainId.bind(this);
        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
        this.setNoOfClasses = this.setNoOfClasses.bind(this);
        this.decrementStationCount = this.decrementStationCount.bind(this);
        this.setIsAddTrainStationContainerVisibleToFalse = this.setIsAddTrainStationContainerVisibleToFalse.bind(this);
    }

    setIsAddTrainStationContainerVisibleToFalse() {
        this.setState({
            isAddTrainStationContainerVisible: false
        })
    }

    setBDate(data) {
        this.setState({
            bDate : data
        })
    }

    setTrainId(data) {
        this.setState({
            trainId: data
        })
    }

    decrementStationCount() {
        this.setState({stationCount: this.state.stationCount-1});
    }

    setTrainName(data) {
        this.setState({
            trainName: data,
        })
    }

    setNoOfCoaches(data) {
        this.setState({
            noOfCoaches: data,
        })
    }

    setNoOfClasses(data) {
        this.setState({
            noOfClasses: data,
        })
    }


    addPressed = event => {
        event.preventDefault();

        // Axios.post("http://localhost:3001/api/addNewTrain", {
        //     trainName: this.state.trainName,
        //     noOfCoaches: this.state.noOfCoaches,
        //     noOfClasses: this.state.noOfClasses,
        // })
        //     .then((res) => {
        //         if (res.data.isValid) {
        //             alert("Train Added Successfully!");
        //             this.setState({isAddTrainCoachContainerVisible: true})

        //             for(let i=1; i<=this.state.noOfCoaches; i++) {
        //                 this.setState({ coachList: [...this.state.coachList, [i]] });
        //             }
        //         }
        //         else {
        //             alert("Train already exits!");
        //         }
        //     })

        Axios.post("http://localhost:3001/api/getRevenue", {
            trainID : this.state.trainId,
            b_date : this.state.bDate
        })
        .then((res) => {
            this.setState({revenue: res.data[0].Revenue, revenueCheck: true})
        })

    };

    addNewStationToPathPressed = event => {
        event.preventDefault();
        this.setState({stationCount: this.state.stationCount+1});

        this.setState({isAddTrainStationContainerVisible: true});
    };


    render() {
        return (
            <div style={this.state.style}>
                {!this.state.isAddTrainCoachContainerVisible && 
                    <Container>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Revenue Details</h2>
                    </Heading>

                    <Form>
                        <label style={this.state.styleLabel}>Train ID</label>
                        <hr style={this.state.styleHr}></hr>
                        <input style={this.state.styleInput} onChange={(e) => { this.setTrainId(e.target.value) }} type="text" placeholder="Enter train id" />
                        <br ></br>

                        <label style={this.state.styleLabel}>Date</label>
                        <hr style={this.state.styleHr}></hr>
                        <input style={this.state.styleInput} onChange={(e) => { this.setBDate(e.target.value) }} type="text" placeholder="Enter date" />
                        <br></br>

                        <hr style={this.state.styleHr}></hr>

                        <ButtonAndNavLinkBox>
                            <Button onClick={this.addPressed}>Show Revenue</Button>
                        </ButtonAndNavLinkBox>
                    </Form>

                    </Container>
                }
                
                {this.state.revenueCheck && 
                    <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Revenue Details</h2>
                    </Heading>

                    <Table>
                        <tr>
                            <th style={this.state.styleCol1}>Revenue</th>
                            <th style={this.state.styleCol2}>{this.state.revenue}</th>
                        </tr>

                    </Table>

                </Container2>
                }

            </div>
        )
    }
}

export default withRouter(RevenuesContainer)

//Login form checked