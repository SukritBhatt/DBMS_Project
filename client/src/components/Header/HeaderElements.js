import styled from 'styled-components'


export const Container = styled.div`
    /*background-image: url("headerBackground.jpg");*/
    background-image: url("bgimg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 120px 0px 40px 0px;
    justify-content: center;
    flex-direction: row;
    margin: auto;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TextBox = styled.div`
    justify-content: center;
    width: 40%;
    align-items: center;
    text-align: center;
    padding: 0px 5px 0px 5px;
    color: #000000;
    @media (max-width: 768px) {
        width: 60%;
    }
`;

export const FindCardBox = styled.div`
    justify-content: center;
    align-items: center;
    width: 60%;
    @media (max-width: 768px) {
        width: 10%;
        padding: 10px 0px 0px 0px;
    }
`;
/*
    border: none;
    outline: none;
    color: #fff;
    background: #85a9eb;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    &:before{
        content: '';
        background: linear-gradient(45deg, red, lime, cyan, yellow, blue, black);
        position: absolute;
        top: -2px;
        left:-2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 20s linear infinite;
        opacity: 0;
        transition: opacity .3s ease-in-out;
        border-radius: 10px;
    }
    
    &:active{
        color: white;
    }
    
    &:active:after{
        background: transparent;
    }
    
    &:hover:before {
        opacity: 1;
    }
    
    &:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgb(111, 74, 179);
        left: 0;
        top: 0;
        border-radius: 10px;
    }
    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }
*/