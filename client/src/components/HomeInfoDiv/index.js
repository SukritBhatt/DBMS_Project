import React from 'react'
import { Container, Logo, LogoAndTextBox, TextBox } from './HomeInfoDivElements'

const HomeInfoDiv = () => {
    const styleSmallText = {
        fontSize: 13,
    }
    const styleLargeText = {
        fontSize: 19,
    }
    return (
        <Container>
            <LogoAndTextBox>
                <Logo src={`securepayments.png`}/>
                <TextBox>
                    <h2  style={styleLargeText}>
                        Secure payments, hassle-free cancellations and easy refunds
                    </h2>
                    <br></br>
                    <text style={styleSmallText}>
                        Perform all transactions securely and quickly with our globally trusted payment partners. Claim refunds and cancel tickets without hassel. Visa, MasterCard ann Rupay cards enjoy platform-wide support on all services.
                    </text>
                </TextBox>
            </LogoAndTextBox>

            <LogoAndTextBox>
                <Logo src={`railwayservices.png`}/>
                <TextBox>
                    <h2 style={styleLargeText}>
                        Exhaustive range of railway services<br></br>Just a click away
                    </h2>
                    <br></br>
                    <text style={styleSmallText}>
                        Check train schedules, book seats, verify tickets and plan your journey all from one place. Users can Login on the portal to enjoy seamless service throughout the platform.
                    </text>
                </TextBox>
            </LogoAndTextBox>

            <LogoAndTextBox>
                <Logo src={`bizpartners.png`}/>
                <TextBox>
                    <h2 style={styleLargeText}>
                        Uplift your travel experience with our travel partners
                    </h2>
                    <br></br>
                    <text style={styleSmallText}>
                        Explore unmatched added services at discounted rates. Get combo travel and hotel deals with ITC. Order food on or off the rails via IRCTC. Track your train with MapmyIndia. All of this, at one place, brought to you by Hindustan Rails.
                    </text>
                </TextBox>
            </LogoAndTextBox>
        </Container>
    )
}

export default HomeInfoDiv