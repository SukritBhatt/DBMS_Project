import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    flex-direction: column;
    width: 60%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 80%;
    }
`;

export const MessageBox = styled.div`
    background: #fc5353;
    display: ${({ nameError, nidError, emailError, mobileError, passwordError, confirmPasswordError }) => (nameError!="" || nidError!="" || emailError != "" || mobileError!="" || passwordError!="" || confirmPasswordError!="" ? 'flex' : 'none')};
    align-items: center;
    margin-top: 50px;
    margin-bottom: 5px;
    font-size: 23px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    border-radius:5px 5px 5px 5px;
    border: 2px solid transparent;
    flex-direction: column;
    width: fit-content;
    padding: 10px 20px 10px 10px;
    @media (max-width: 768px) {
        flex-direction: column;
        //width: 80%;
    }
`;

export const Heading = styled.div`
    background: #1c0bb2;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    border: 4px solid #11095a;
    justify-content: center;
    padding: 10px;
    margin: auto;
    width: 100%;
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

export const NavLink = styled(Link)`
    color: #0099ff;
    display: flex;
    text-decoration: none;
    padding: 10px 0px 0px 0px;
    height: 100%;
    cursor: pointer;
`;

export const Button = styled.button`
    background: #1c0bb2;
    color: white;
    width: 100%;
    max-width: 150px;
    height: 40px;
    @media (max-width: 768px) {
        width: 35%;
    }
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 3px solid #11095a;
`;

export const ButtonAndNavLinkBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
    margin: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;