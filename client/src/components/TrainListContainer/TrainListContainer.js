import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 130px;
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
    width: 100%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;