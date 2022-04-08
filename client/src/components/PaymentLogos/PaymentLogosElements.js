import styled from 'styled-components'

export const ParentCont = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px 30px 0px;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
    width: 50%;
    max-width: 450px;
    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 30px;
    }
`;

export const CapCont = styled.h5`
    font-size: 0.8em;
    background: #fff;
    display: flex;
`;

export const Logos = styled.div`
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
`;