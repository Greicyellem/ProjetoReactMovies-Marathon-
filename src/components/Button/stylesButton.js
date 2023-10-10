import styled from "styled-components";

export const Container = styled.button `
    color: white;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0 8px;
    border-radius: 10px;
    font-weight: 500;
    transform: 0.5s;
    background: none;
    font-size: 30px;

    &:hover{
        transition: .5s;
        cursor: pointer;
    }
`;