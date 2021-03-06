import Axios from 'axios';
import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router';
import TrainCoachSeat from '../components/TrainCoachSeat';
import { Container1, Select, InfoDiv, UserInfoContainer, Button, Heading, Container2, Container3 } from './TrainCoachClerkElements'
import SidebarClerk from '../components/SidebarClerk';
import NavbarClerk from '../components/NavbarClerk';
import DeveloperSign from '../components/DeveloperSign'

export class TrainCoachClerk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSidebarOpen: false,
            trainName: "",
            fromStationName: "",
            toStationName: "",
            fare: 0,
            departureTime: "",
            noOfCoaches: 0,
            coachList: [],
            noOfSeats: 0,
            coachClassID: 0,
            coachClassName: "",
            seatList: [],
            seatStatusList: [],
            seatStatusList1: [],
            chosenSeatList: [],
            journeydate:this.props.journeyDate,
            style: {
                display: "flex",
                flexDirection: "column",
                padding: "0px 0px 80px 0px",
            },
            styleSelectDiv: {
                display: "flex",
                flexDirection: "row",
                padding: "40px 0px 0px 0px",
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
            },
            styleClassFare: {
                display: "flex",
                flexDirection: "row",
                padding: "40px 0px 0px 0px",
                width: "70%",
                alignItems: "center",
                justifyContent: "space-between",
            },
            styleSelectLabel: {
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0px 10px 0px 0px",
            },
            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleLabel: {
                fontSize: "20px",
                fontWeight: "bold",
                padding: "0px 0px 10px 0px",
            },
            styleText: {
                fontSize: "20px",
                padding: "5px 0px 5px 0px",
            },
        }
     
        Axios.post("http://localhost:3001/api/getCoachesCount", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            classID:this.props.classID
        })
            .then((res) => {
                for (let i = 0; i < res.data.length; i++) {
                    this.setState({ coachList: [...this.state.coachList, [res.data[i].coach_id.toString()]] })
                }
            })

        Axios.post("http://localhost:3001/api/getTrainName", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
        })
            .then((res) => {
                this.setTrainName(res.data[0].Name);
            })
        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
        })
            .then((res) => {
                this.setFromStationName(res.data[0].Name);
            })

        Axios.post("http://localhost:3001/api/getStationNameFromTrainIDAndPosition", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            position: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
        })
            .then((res) => {
                this.setToStationName(res.data[0].Name);
            })

        if (this.props.fromStationPosition < this.props.toStationPosition) {
            Axios.post("http://localhost:3001/api/getUpTime", {
                trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            })
                .then((res) => {
                    this.setDepartureTime(res.data[0].Up_time);
                })
        } else {
            Axios.post("http://localhost:3001/api/getDownTime", {
                trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                position: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            })
                .then((res) => {
                    this.setDepartureTime(res.data[0].Down_time);
                })
        }

        //alert(this.props.passengerNid);
        // alert(this.props.selectedTrainID);
        // alert(this.props.fromStationPosition);
        // alert(this.props.toStationPosition);
        // alert(this.props.journeyDate);
        // alert(this.props.classID);
        // alert(this.props.noOfPassengers);

        this.setNoOfCoaches = this.setNoOfCoaches.bind(this);
        this.changeCoachSeat = this.changeCoachSeat.bind(this);
        this.setTrainName = this.setTrainName.bind(this);
        this.setFromStationName = this.setFromStationName.bind(this);
        this.setToStationName = this.setToStationName.bind(this);
        this.setFare = this.setFare.bind(this)
        this.setDepartureTime = this.setDepartureTime.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.clearChosenSeatList = this.clearChosenSeatList.bind(this);
        this.addChosenSeatList = this.addChosenSeatList.bind(this);
        this.removeChosenSeatList = this.removeChosenSeatList.bind(this);
        this.purchasePressed = this.purchasePressed.bind(this);
    }

    clearChosenSeatList() {
        this.setState({
            chosenSeatList: []
        })
    }

    addChosenSeatList(data) {
        this.setState({
            chosenSeatList: [...this.state.chosenSeatList, data]
        })
    }

    removeChosenSeatList(data) {
        this.setState({
            chosenSeatList: this.state.chosenSeatList.filter(function (seat) {
                return seat !== data
            })
        });

        // this.setState({ 
        //     chosenSeatList: [...this.state.chosenSeatList, data] 
        // })
    }

    setTrainName(data) {
        this.setState({
            trainName: data,
        })
    }

    setFromStationName(data) {
        this.setState({
            fromStationName: data,
        })
    }

    setToStationName(data) {
        this.setState({
            toStationName: data,
        })
    }

    setFare(data) {
        this.setState({
            fare: data,
        })
    }

    setDepartureTime(data) {
        this.setState({
            departureTime: data,
        })
    }

    setNoOfCoaches(data) {
        this.setState({
            noOfCoaches: data,
        })
    }
    componentWillUnmount() {
        this.setState = (state,callback)=>{
            return null;
        };
    }
    async changeFare(){
        await Axios.post("http://localhost:3001/api/getFare", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            coachClassID: this.state.coachClassID,
            fromPosition: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            toPosition: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
        }) .then((res) => {
            console.log(res.data[0].fare);
            this.setFare(res.data[0].fare);
        })
    };

    async changeCoachSeat(data) {
        this.props.setSelectedCoachID(parseInt(data));
        this.clearChosenSeatList();
        await Axios.post("http://localhost:3001/api/getSeatCount", {
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            coachID: data,
        })
            .then((res) => {
                this.setState({
                    noOfSeats: res.data[0].No_of_seats,
                    coachClassID: res.data[0].Class_ID,
                })
                this.setState({ seatList: [] })
                this.setState({ seatStatusList: [] })
                let promises = [];
                this.setState({ seatStatusList1: [] })

                for (let i = 1; i <= res.data[0].No_of_seats; i++) {

                    this.setState({ seatList: [...this.state.seatList, [i]] })

                    promises.push(
                        Axios.post("http://localhost:3001/api/getSeatStatus", {
                            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                            coachID: this.props.selectedCoachID,
                            fromPosition: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
                            toPosition: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
                            date: this.props.journeyDate.toString().slice(4,15),
                            seatID: i,
                        })
                    );


                }

                Promise.all(promises)
                    .then((results) => {
                        for (let i = 0; i < results.length; i++) {

                            if (results[i].data.isAvailable == true) {
                                this.setState({ seatStatusList1: [...this.state.seatStatusList1, true] })
                            }
                            else {
                                this.setState({ seatStatusList1: [...this.state.seatStatusList1, false] })
                            }

                        }
                    })

                if (this.state.coachClassID == 1) {
                    this.setState({
                        coachClassName: "AC",
                    })
                }
                else {
                    this.setState({
                        coachClassName: "Non-AC",
                    })
                }
            })
            await this.changeFare();
    }

    toggleSidebar = () => {
        this.setState({
            isSidebarOpen: !this.state.isSidebarOpen,
        })
    }
    
    async purchasePressed(event) {
        event.preventDefault();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        if(this.state.chosenSeatList.length>this.props.noOfPassengers)
        {
            alert("Please choose upto "+this.props.noOfPassengers+" passengers!")
            return;
        }
        
        await Axios.post("http://localhost:3001/api/addTicket", {
            issueTime: date+' '+today.getHours() + ":"  + today.getMinutes() + ":" + today.getSeconds(),
            journeyTime: this.props.journeyDate.toString().slice(4,15) + ' ' + this.state.departureTime,
            startPositon: this.props.selectedTrainIDFromPositionToPosition.fromStationPosition,
            endPosition: this.props.selectedTrainIDFromPositionToPosition.toStationPosition,
            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
            classID: this.state.coachClassID,
            coachID: this.props.selectedCoachID,
            noOfSeats: this.state.chosenSeatList.length,
            fare: this.state.fare*this.state.chosenSeatList.length,
            passengerID: this.props.passengerNid,
        })
            .then((res) => {

                var x = res.data[0].Ticket_ID;
                //alert(x);

                if (x !== -1) {
                    for (var s = 0; s < this.state.chosenSeatList.length; s++) {
                        Axios.post("http://localhost:3001/api/addTicketSeat", {
                            ticketID: x,
                            seatID: this.state.chosenSeatList[s],
                        })
                            .then((res1) => {
                            })
                    }
                }

            })
            this.setFare(this.state.fare*this.state.chosenSeatList.length);

           
            let objectList = [];
            for (var seat = 0; seat < this.state.chosenSeatList.length; seat++) {
                //alert(this.state.chosenSeatList[seat]);
                for (var f = 1; f < this.props.selectedTrainIDFromPositionToPosition.toStationPosition; f++) {
                    //alert("fdsf");
                    for (var t = this.props.selectedTrainIDFromPositionToPosition.fromStationPosition + 1; t < 4; t++) {
                        if (t <= f)
                            t = f + 1;
                        //alert(this.state.chosenSeatList[seat]+ ' ' + f + ' ' + t);
    
                        let object = {
                            trainID: this.props.selectedTrainIDFromPositionToPosition.trainID,
                            coachID: this.props.selectedCoachID,
                            date: this.props.journeyDate.toString().slice(4,15),
                            startPositon: f,
                            endPosition: t,
                            seatNo: this.state.chosenSeatList[seat],
                        }
    
                        objectList.push(object);
    
                    }
                }
            }
    
            Axios.post("http://localhost:3001/api/addBookingStatus", {
                objectList: objectList,
            })
            .then((res) => {
                //alert("i am here!");
                // this.props.setPassengerMail("");
                //this.props.history.push("/clerk-home");
                window.location.href='/print-ticket-clerk'
            })
    };

    render() {
        return (
            <div style={this.state.style}>

                <SidebarClerk isSidebarOpen={this.state.isSidebarOpen} toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID} />
                <NavbarClerk toggleSidebar={this.toggleSidebar} setClerkID={this.props.setClerkID} clerkID={this.props.clerkID} />

                <Container1>

                    <Heading>
                        <h2 style={this.state.styleHeading}>Train Information</h2>
                    </Heading>

                    <UserInfoContainer>
                        <InfoDiv>
                            <label style={this.state.styleLabel}>Train Name:</label>
                            <text style={this.state.styleText}>{this.state.trainName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>From Station:</label>
                            <text style={this.state.styleText}>{this.state.fromStationName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>To Station:</label>
                            <text style={this.state.styleText}>{this.state.toStationName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Journey Date:</label>
                            <text style={this.state.styleText}>{this.state.journeydate.toString().slice(0,15)}</text>
                        
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Departure Time:</label>
                            <text style={this.state.styleText}>{this.state.departureTime}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Passenger Mail:</label>
                            <text style={this.state.styleText}>{this.props.passengerMail}</text>
                        </InfoDiv>
                    </UserInfoContainer>


                </Container1>

                <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Train Coach Information</h2>
                    </Heading>

                    <div style={this.state.styleSelectDiv}>
                        <label style={this.state.styleSelectLabel}>Coach No</label>
                        <Select onChange={(e) => { this.changeCoachSeat(e.target.value) }} >
                            <option value="" disabled selected>Select a coach</option>
                            {this.state.coachList.map((coach, index) => {
                                return <option key={index} value={coach}>
                                    {coach}
                                </option>
                            })}
                        </Select>
                        <br></br>
                    </div>

                    <div style={this.state.styleClassFare}>
                        <text style={this.state.styleText}>Class: {this.state.coachClassName}</text>
                        <text style={this.state.styleText}>Fare for 1 ticket: {this.state.fare}</text>
                    </div>

                    <Container3>
                        <TrainCoachSeat
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

                            setSelectedCoachID={this.props.setSelectedCoachID}
                            selectedCoachID={this.props.selectedCoachID}
                            setSelectedSeats={this.props.setSelectedSeats}
                            selectedSeats={this.props.selectedSeats}

                            noOfSeats={this.state.noOfSeats}

                            seatList={this.state.seatList}
                            seatStatusList1={this.state.seatStatusList1}

                            selectedTrainIDFromPositionToPosition={this.props.selectedTrainIDFromPositionToPosition}
                            setSelectedTrainIDFromPositionToPosition={this.props.setSelectedTrainIDFromPositionToPosition}

                            chosenSeatList={this.state.chosenSeatList}
                            addChosenSeatList={this.addChosenSeatList}
                            removeChosenSeatList={this.removeChosenSeatList}

                            setClerkID={this.props.setClerkID}
                            clerkID={this.props.clerkID}

                        />
                    </Container3>

                    <Button
                        setClerkID={this.props.setClerkID}
                        clerkID={this.props.clerkID}
                        onClick={this.purchasePressed}
                    >
                        Sell
                    </Button>

                </Container2>
                <DeveloperSign/>
            </div>
        )
    }
}

export default withRouter(TrainCoachClerk);
