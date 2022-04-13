import styled from 'styled-components'

export const Container = styled.div`
    background-color: #20129d;
    display: flex;
    valign: middle;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
    height: 6vh;
    width: auto;
`;

export const Text = styled.div`
    display: flex;
    color: white;
    font-weight: 600;
    align-items: center;
    padding: 0px 0px 0px 0px;
    margin: auto;
`;

export const Logo = styled.div`
    float: left;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 2vh 5vw 2vh 0;
    width: 35px;
    height: 35px;
`;