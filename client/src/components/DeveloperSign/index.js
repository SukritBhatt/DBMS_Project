import React, { Component } from 'react'
import { Container, Text, Logo } from './DevSignElements'

export default class DeveloperSign extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Container>
                <Text>
                    <Logo src={`developers.png`}/>
                    Developed by Sukrit, Kushagra and Satya
                </Text>
                <Text>
                    <Logo src={`sponsor.jpg`}/>
                    In collaboration with CRIS and NIC
                </Text>
            </Container>
        )
    }
}