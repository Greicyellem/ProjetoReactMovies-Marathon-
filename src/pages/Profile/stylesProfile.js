import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    > header {
        max-width: 100%;
        height: 44px;
        margin-top: 20px;

        background-color: ${({ theme }) => theme.header};
        display: flex;
        align-items: center;
        padding: 10px 84px;

        svg {
            color: #e9e5e1;
            font-size: 35px;
            margin-right: 20px;
        }     

    
}  

`;

export const Form = styled.form`
    max-width: 340px;
    margin: 50px auto 0;
    text-align: center;
    

    >div:nth-child(4) {
        margin-top: 26px;
    }

    > button {
        margin-top: 20px;
        margin-bottom: 150px;
        font-size: 16px;
        padding: 10px 48px;
        border-radius: 10px;
        border: none;
        color: gray;
        background-color: #f7d354;
    
        &:hover{
            background-color: #e3b613;
            cursor: pointer;
        }
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 10px auto 32px;
    width: 186px;
    height: 186px;

    >img { 
    border-radius: 50%;
    width: 186px;
    height: 186px;
    }

    >label { 
        width: 48px;
        height: 48px;
        background-color: #e3b613 ;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;

        input {
            display: none;
        }

        svg { 
            width: 20px;
            height: 20px;
            color: #313e67;
        }

    }

    h1{
        text-align-last: center;
        display: flex;
    }



    
`

