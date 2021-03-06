import styled from 'styled-components'

export const Container = styled.div`
    background-color: rgba(41,38,38,.85);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
    margin: auto;
    width: 90%;
    @media (max-width: 768px) {
        width: 95%;
    }
`;

export const SpaceContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 5%;
`;

export const LeftHalf = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 50%;
`;

export const RightHalf = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 50%;
`;

export const InputContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 42.5%;
`;

export const InputContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 0px 0px 30px 0px;
    margin: 0px;
    width: 42.5%;
`;

export const Table = styled.table`
    width: 100%;
    background: #fff;
    border-collapse: collapse;
    @media (max-width: 768px) {
        width: 100%;
        padding: 100px 0px 0px 0px;
    }
`;

export const Button = styled.button`
    background: #20129d;
    color: white;
    width: 90%;
    height: 40px;
    cursor: pointer;
    border-radius:10px 10px 10px 10px;
    border: 2px solid #11095a;
    &:hover{
        background: #3399ff;
    }
`;