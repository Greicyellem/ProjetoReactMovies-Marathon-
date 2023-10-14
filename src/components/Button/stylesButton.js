import styled from "styled-components";

export const Container = styled.button `
    color: ${({ theme }) => theme.text};
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 0;
    padding: 0 8px;
    transition: 0.5s;
    background: none;
    font-size: 40px;

    &:hover{
        transform: scale(1.3); 
        cursor: pointer;
    }
`;