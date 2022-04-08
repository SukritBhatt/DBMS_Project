import React from 'react'
//import { CapCont, Container, Logos } from '../PaymentLogos/PaymentLogosElements'
import * as All from '../PaymentLogos/PaymentLogosElements'

const PaymentLogos = () => {
    return (
        <All.ParentCont>
            <All.Container>
                <All.CapCont>Payments driven by: </All.CapCont>
                <All.Logos src={`visa.png`}/>
                <All.Logos src={`mastercard.png`}/>
                <All.Logos src={`paypal.png`}/>
                <All.Logos src={`paytm.png`}/>
                <All.Logos src={`rupay.png`}/> 
            </All.Container>

            <All.Container>
            <All.CapCont>Business Partners: </All.CapCont>
            <All.Logos src={`verisign.png`}/>
            <All.Logos src={`irctc.png`}/>
            <All.Logos src={`itc.png`}/>
            <All.Logos src={`mmi.png`}/>
            <All.Logos src={`tatasteel.png`}/>
            </All.Container>
        </All.ParentCont>
    )
}

export default PaymentLogos