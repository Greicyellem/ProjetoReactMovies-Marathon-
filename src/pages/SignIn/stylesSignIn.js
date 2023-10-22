import styled from "styled-components";
import backgroundImg from '../../assets/assistir-filmes.jpg'

export const Container = styled.div `
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-blend-mode: luminosity;
`;

export const Form = styled.form`
    padding:  136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    >h1 {
        font-size: 48px;
        color: #f7d354;

    }

    >h2 {
        font-size: 24px;
        margin: 48px 0;
        color: #f7d354;
    }

    > p{ 
        font-size: 18px;
        color: #e3b613;
    }

    > a{
        margin-top: 40px;
        background: none;
        background-color: #f7d354;
        padding: 10px;
        border-radius: 10px;
        color: #7e8391;

        &:hover{
            background-color: #e3b613;
            cursor: pointer;
        }

    }
    >button {
        margin-top: 20px;
        font-size: 16px;
        padding: 10px 48px;
        border-radius: 10px;
        border: none;
        color: gray;
        background-color: #f7d354;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;
      
        svg{ 
            font-size: 25px;
            margin-left: 7px;
            align-items: center;
        }
        
        &:hover{
            background-color: #e3b613;
            cursor: pointer;
        }

    } 
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
;
    background-size: cover;
    opacity: 0.7;

`