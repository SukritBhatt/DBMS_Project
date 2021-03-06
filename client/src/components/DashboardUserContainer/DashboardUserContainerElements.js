import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container1 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 130px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    flex-direction: column;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const Heading = styled.div`
    background: #20129d;
    align-items: center;
    border-radius:7px 7px 0px 0px;
    border: 4px solid #11095a;
    justify-content: center;
    padding: 10px 0px 10px 0px;
    margin: auto;
    width: 100%;
`;

export const UserInfoContainer = styled.div`
    background: #fff;
    display: flex;
    align-items: flex-start;
    margin: auto;
    padding: 10px 0px 45px 0px;
    border-radius:0px 0px 7px 7px;
    border: 2px solid transparent;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const InfoDiv = styled.div`
    width: 40%;
    padding: 30px 50px 0px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 30px 0px 0px 0px;
        width: 80%;
    }
`;

export const Container2 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 45px;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    padding: 0px 0px 30px 0px;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    flex-direction: column;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const Form = styled.form`
    background: #fff;
    display: flex;
    padding: 30px 0px 30px 0px;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    width: 55%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
`;