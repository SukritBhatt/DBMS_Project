import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 15vh;
    margin-bottom: auto;
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
    display: ${({ idError, passwordError }) => (idError != "" || passwordError!="" ? 'flex' : 'none')};
    align-items: center;
    margin-top: 50px;
    margin-bottom: auto;
    font-size: 23px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    border-radius:5px 5px 5px 5px;
    border: 2px solid transparent;
    flex-direction: column;
    width: fit-content;
    padding: 10px 20px 10px 20px;
    @media (max-width: 768px) {
        flex-direction: column;
        //width: 80%;
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
    border-radius: 10px 10px 10px 10px;
    border: 2px solid #11095a;
    &:hover{
        background: #3399ff;
    }
`;

export const Form = styled.form`
    background: #fff;
    display: flex;
    padding: 50px 0px 40px 0px;
    justify-content: space-between;
    flex-direction: column;
    margin: auto;
    width: 55%;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 70%;
    }
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