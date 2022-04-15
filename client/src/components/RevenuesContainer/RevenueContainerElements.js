import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'


export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 15vh;
    margin-bottom: 20px;
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

export const Container2 = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
    padding: 0px 0px 30px 0px;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #a4b0af;
    flex-direction: column;
    width: 90%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
    }
`;

export const Table = styled.table`
    box-shadow: 4.5px 5px #a4b0af;
    border-radius:10px 10px 10px 10px;
    border: 2px solid transparent;
    width: 90%;
    background: #bdf6ff;
    padding: 0px 0px 0px 0px;
    margin: 20px 0px 0px 0px;
    border-collapse: collapse;
    @media (max-width: 768px) {
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

export const Button = styled.button`
    background: #20129d;
    color: white;
    width: 100%;
    max-width: 150px;
    height: 40px;
    @media (max-width: 768px) {
        width: 35%;
    }
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    &:hover{
        background: #3399ff;
    }
`;

export const Button1 = styled.button`
    background: #20129d;
    color: white;
    height: 40px;
    cursor: pointer;
    padding: 0px 20px 0px 20px;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    &:hover{
        background: #3399ff;
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

export const Select = styled.select`
    background: #fff;
    padding: 0px 0px 0px 10px;
    font-size: 14px;
    height: 40px;
`;

export const NavLink = styled(Link)`
    color: #20129d;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0px 0px 0px 10px;
    height: 100%;
    cursor: pointer;
`;

export const ButtonAndNavLinkBox = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;