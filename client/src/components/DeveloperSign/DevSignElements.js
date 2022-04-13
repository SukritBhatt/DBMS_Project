import styled from 'styled-components'

export const Container = styled.div`
    background-color: #20129d;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    height: 6vh;
    margin: auto;
    width: 100%;
`;

export const Text = styled.div`
    display: flex;
    color: white;
    font-weight: 600;
    align-items: center;
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