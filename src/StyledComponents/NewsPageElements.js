import styled from "styled-components";

export const NewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F1FAEE;
`;

export const Heading = styled.div`
    width: 100%;
    padding: 2rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: #1D3557;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
`;

export const Card = styled.div`
    width: 20rem;
    height: 20rem;
    background-color: red;
`;