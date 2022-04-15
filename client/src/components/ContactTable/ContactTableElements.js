import styled from 'styled-components'

export const MegaContainer = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 10vh 0 0 0;
    flex-direction: column;
    margin: auto;
    width: 80%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const Container = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 5vh 0 2vh 0;
    flex-direction: column;
    margin: auto;
    width: 80%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const Logo = styled.div`
    float: left;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    vertical-align: middle;
    padding: 0 50px 0 0;
    width: 35px;
    height: 35px;
`;

export const td = styled.div`
    vertical-align: middle;
    align-items: center;
`;

export const Heading = styled.div`
    background: #20129d;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    border: 4px solid #11095a;
    justify-content: center;
    padding: 5px 0px 0 0px;
    margin: auto;
    width: 100%;
`;

export const Table = styled.table`
    width: 100%;
    background: #fff;
    border-collapse: collapse;
    @media (max-width: 768px) {
        width: 100%;
    }
`;