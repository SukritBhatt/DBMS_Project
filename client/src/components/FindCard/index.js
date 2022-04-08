import React, { Component } from 'react'
import Select from 'react-select';
import { withRouter } from 'react-router';
import { Container, InputContainerRight, InputContainerLeft, SpaceContainer, LeftHalf, RightHalf, Button } from './FindCardElements'
import Axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../App.css'


class FindCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            styleLabel: {
                color: "#fff",
                fontWeight: 'bold',
                padding: "0px 0px 8px 0px",
            },
            date: new Date(),
            stationList: [],

            selectedFromStationName: "",
            selectedToStationName: "",
            selectedDate: null,
            selectedClassID: 0,
            selectedNoOfPassengers: 0, 
            
        }

        
        Axios.post("http://localhost:3001/api/getStationList", {
        })
        .then((res) => {
            for (var i in res.data) {
                var object = {label: res.data[i].Name, value: res.data[i].Name};
                //alert(object);
                this.setState({ stationList: [...this.state.stationList, ...[object]] })
            }
        })

        
        this.setSelectedFromStationName = this.setSelectedFromStationName.bind(this);
        this.setSelectedToStationName = this.setSelectedToStationName.bind(this);
        this.setSelectedDate = this.setSelectedDate.bind(this);
        this.setSelectedClassID = this.setSelectedClassID.bind(this);
        this.setSelectedNoOfPassengers = this.setSelectedNoOfPassengers.bind(this);

        this.findPressed = this.findPressed.bind(this);

    }
    
    setSelectedFromStationName(data) {
        this.setState({
            selectedFromStationName: data,
        })
    }

    setSelectedToStationName(data) {
        this.setState({
            selectedToStationName: data,
        })
    }

    setSelectedDate(data) {
        this.setState({
            selectedDate: data,
        })
    }

    setSelectedClassID(data) {
        this.setState({
            selectedClassID: data,
        })
    }

    setSelectedNoOfPassengers(data) {
        this.setState({
            selectedNoOfPassengers: data,
        })
    }

    findPressed = event => {
        event.preventDefault();

        
        Axios.post("http://localhost:3001/api/getStationIDForFindCard", {
            stationName: this.state.selectedFromStationName,
        })
        .then((res) => {
            this.props.setFromStationID(res.data[0].Station_ID);
            this.props.setJourneyDate(this.state.selectedDate);

            //alert(this.props.fromStationID);
        
            this.props.setClassID(parseInt(this.state.selectedClassID));

            this.props.setNoOfPassengers(parseInt(this.state.selectedNoOfPassengers));

        })

        Axios.post("http://localhost:3001/api/getStationIDForFindCard", {
            stationName: this.state.selectedToStationName,
        })
        .then((res) => {
            this.props.setToStationID(res.data[0].Station_ID);
            //alert(this.props.toStationID);
            if(this.props.passengerMail == "")
                this.props.history.push({ pathname: '/trainlist' });
            else
            this.props.history.push({ pathname: '/trainlist-user' });
        })
    };

    render() {
        return (
            <Container>
                {/* <LeftHalf>
                    <InputContainerLeft>
                        <label style={this.state.styleLabel}>From</label>
                        <Select onChange={(e) => { this.setSelectedFromStationName(e.value) }}
                            //isSearchable = {true}
                            placeholder = {'Select boarding station'}
                            options = {this.state.stationList}
                        />
                    </InputContainerLeft>
                    <InputContainerLeft>
                        <label style={this.state.styleLabel}>Date</label>
                        <DatePicker
                            wrapperClassName="datePicker"
                            calendarClassName="red-border"
                            placeholderText="Select a date"
                            selected={this.state.selectedDate}
                            onChange={date => this.setSelectedDate(date)}
                            dateFormat='yyyy-MM-dd'
                            width = 'auto'
                            minDate={new Date()}
                            maxDate={new Date(new Date().getTime()+(90*24*60*60*1000))}
                        />
                    </InputContainerLeft>
                    <InputContainerLeft>
                        <label style={this.state.styleLabel}>Passenger(s)</label>
                        <Select onChange={(e) => { this.setSelectedNoOfPassengers(e.label) }}
                            //isSearchable = {true}
                            placeholder = {'Select number of passengers'}
                            options = {[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' }
                            ]}
                        />
                    </InputContainerLeft>
                </LeftHalf>
                <SpaceContainer />
                <RightHalf>
                    <InputContainerRight>
                        <label style={this.state.styleLabel}>To</label>
                        <Select onChange={(e) => { this.setSelectedToStationName(e.value) }}
                            //isSearchable = {true}
                            placeholder = {'Select destination'}
                            options = {this.state.stationList}
                        />
                    </InputContainerRight>
                    <InputContainerRight>
                        <label style={this.state.styleLabel}>Class</label>
                        <Select
                            onChange={(e) => { this.setSelectedClassID(e.value) }}
                            isSearchable
                            placeholder = {'Select coach class'}
                            options = {[
                                { label: 'AC', value: '1' },
                                { label: 'NON-AC', value: '2' }
                            ]}
                        />
                    </InputContainerRight>
                        </RightHalf> */}
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>From</label>
                    <Select onChange={(e) => { this.setSelectedFromStationName(e.value) }}
                      //isSearchable = {true}
                      placeholder = {'Select boarding station'}
                      style = {{width: '50px'}}
                      options = {this.state.stationList}
                    />
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>To</label>
                    <Select onChange={(e) => { this.setSelectedToStationName(e.value) }}
                        //isSearchable = {true}
                        placeholder = {'Select destination'}
                        options = {this.state.stationList}
                    />
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Date</label>
                    <DatePicker
                        wrapperClassName="datePicker"
                        calendarClassName="red-border"
                        placeholderText="Select a date"
                        selected={this.state.selectedDate}
                        onChange={date => this.setSelectedDate(date)}
                        dateFormat='yyyy-MM-dd'
                        width = 'auto'
                        minDate={new Date()}
                        maxDate={new Date(new Date().getTime()+(90*24*60*60*1000))}
                    />
                </InputContainerLeft>
                <SpaceContainer />
                <InputContainerRight>
                    <label style={this.state.styleLabel}>Class</label>
                    <Select
                        onChange={(e) => { this.setSelectedClassID(e.value) }}
                        isSearchable
                        placeholder = {'Select coach class'}
                        options = {[
                            { label: 'AC', value: '1' },
                            { label: 'NON-AC', value: '2' }
                        ]}
                    />
                </InputContainerRight>
                <InputContainerLeft>
                    <label style={this.state.styleLabel}>Passenger(s)</label>
                    <Select onChange={(e) => { this.setSelectedNoOfPassengers(e.label) }}
                      //isSearchable = {true}
                      placeholder = {'Select number of passengers'}
                      options = {[
                        { label: '1', value: '1' },
                        { label: '2', value: '2' },
                        { label: '3', value: '3' },
                        { label: '4', value: '4' }
                      ]}
                    />
                </InputContainerLeft>

                <Button onClick={this.findPressed}>Find</Button>

            </Container>
        )
    }
}

export default withRouter(FindCard)