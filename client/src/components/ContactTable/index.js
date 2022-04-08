import React from 'react'
import { MegaContainer, Container, Logo, Table, Heading } from './ContactTableElements'

const ContactTable = () => {

    const styleHeading = {
        color: "#fff",
        textAlign: "center",
    }

    const styleTable = {
        borderStyle: "ridge",
        borderLeft: "1.5px solid #a4b0af",
        borderBottom: "2px solid #a4b0af",
    }

    const styleTdBorder = {
        justify: "center",
        valign: "middle",
        borderBottom: "1px solid #a4b0af",
        borderRight: "1.5px solid #a4b0af",
        padding: "10px 10px 10px 10px",
    }

    return (
        <MegaContainer>
            <Container>
                <Heading>
                    <h2 style={styleHeading}>Technical Issues</h2>
                </Heading>
                <Table style={styleTable}>
                    <tr>
                        <td style={styleTdBorder}>Trouble logging in?</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            tech-help@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0755 661 0661
                        </td>
                    </tr>
                    <tr>
                        <td style={styleTdBorder}>Unsuccessful payments/refunds</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            payment-help@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0755 778 6698
                        </td>
                    </tr>
                    <tr>
                        <td style={styleTdBorder}>Site down or bugs?</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            site-help@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0755 335 7788
                        </td>
                    </tr>
                </Table>
            </Container >

            <Container>
                <Heading>
                    <h2 style={styleHeading}>Train Complaints</h2>
                </Heading>

                <Table style={styleTable}>
                    <tr>
                        <td style={styleTdBorder}>Hygiene/Sanitation Complaints</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            train-sanitation@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0998 133 7701
                        </td>
                    </tr>
                    <tr>
                        <td style={styleTdBorder}>Housekeeping Complaints</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            train-housekeep@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0998 553 7702
                        </td>
                    </tr>
                    <tr>
                        <td style={styleTdBorder}>Other Complaints</td>
                        <td style={styleTdBorder}>
                            <Logo src={`mailto.png`}/>
                            train-help@hindrail.com
                        </td>
                        <td style={styleTdBorder}>
                            <Logo src={`phone.png`}/>
                            0998 229 7703
                        </td>
                    </tr>
                </Table>
            </Container >
        </MegaContainer>
    )
}

export default ContactTable