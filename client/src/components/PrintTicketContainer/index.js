import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container2, Heading, UserInfoContainer, Container1, Container3, InfoDiv, Button } from '../PrintTicketContainer/PrintTicketContainerElements'
import Axios from 'axios'
import JourneyUserContainer from '../../components/JourneyUserContainer';
import axios from 'axios';

class PrintTicketContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            email: "",
            password: "",

            items: [],

            styleHeading: {
                color: "#fff",
                textAlign: "center",
            },
            styleInput: {
                height: "40px",
                padding: "0px 0px 0px 10px",
            },
            styleLabel: {
                fontSize: "20px",
                fontWeight: "bold",
                padding: "5px 0px 5px 0px",
            },
            styleText: {
                fontSize: "20px",
                padding: "5px 0px 5px 0px",
            },
            styleHr: {
                background: "transparent",
                color: "transparent",
                margin: "0",
                borderStyle: "none",
                height: "1vw",
            },
        }


        Axios.post("http://localhost:3001/api/getPassengerJourneys", {
            nid: this.props.passengerNid,
        })
        .then((res) => {
            // for(var i in res.data) {
                let i= res.data.length -1
                var object = {
                    Ticket_ID:  res.data[i].Ticket_ID,
                    Train_ID: res.data[i].Train_ID,
                    Coach_ID: res.data[i].Coach_ID,
                    No_of_seats: res.data[i].No_of_seats,
                    Start_position: res.data[i].Start_position,
                    End_position: res.data[i].End_position,
                    Journey_time: res.data[i].Journey_time,
                    Issue_time: res.data[i].Issue_time,
                    Fare: res.data[i].Fare
                };

                this.setState({ items: [...this.state.items, ...[object] ] })
            // }
        })

        Axios.post("http://localhost:3001/api/getPassenger", {
            nid: this.props.passengerNid,
        })
        .then((res) => {
                console.log("mobile: " + res.data[0].mobile);
                console.log("nid: "+ this.props.passengerNid);
                this.props.setPassengerMail(res.data[0].email);
                this.props.setPassengerMobile(res.data[0].mobile);
                this.props.setPassengerName(res.data[0].name);
        })

        this.loginPressed = this.loginPressed.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.printDiv = this.printDiv.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    loginPressed = event => {  // preventDefault before rendering site
        event.preventDefault();    
    };

    setEmail(data) {
        this.setState({
            email: data,
        },()=>{
            if(this.state.email !== "" && this.state.email ==="-1") {
                this.props.history.push({pathname: '/home-user'});
            }
        })
    }

    setPassword(data) {
        this.setState({
            password: data,
        })
    }

    printDiv(event) {
        event.preventDefault();
        var printContents = document.getElementById('printTicket').innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        
        document.body.innerHTML = originalContents;
   }

    render() {
        return (
        <div id="parentContainer">
            <div id="printTicket">

                <Container1>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Personal Information</h2>
                    </Heading>

                    <UserInfoContainer>
                        <InfoDiv>
                            <label style={this.state.styleLabel}>Name:</label>
                            <text style={this.state.styleText}>{this.props.passengerName}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Email:</label>
                            <text style={this.state.styleText}>{this.props.passengerMail}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Unique ID:</label>
                            <text style={this.state.styleText}>{this.props.passengerNid}</text>
                        </InfoDiv>

                        <InfoDiv>
                            <label style={this.state.styleLabel}>Mobile No:</label>
                            <text style={this.state.styleText}>0{parseInt(this.props.passengerMobile)}</text>
                        </InfoDiv>
                    </UserInfoContainer>
                    {/* <input type="button" onclick={() => console.log("printing")} value="practice" /> */}
                </Container1>
                
                <Container2>
                    <Heading>
                        <h2 style={this.state.styleHeading}>Ticket</h2>
                    </Heading>

                    {this.state.items.map((item,index)=>{
                        return <JourneyUserContainer 
                                key={index}
                                item={item}
                                />
                    })}
                </Container2>
            </div>
            <Container3>
                <Button  onClick={(event) => this.printDiv(event)}>Print Ticket</Button>
            </Container3>
        </div>
        )
    }
}

export default withRouter(PrintTicketContainer)

