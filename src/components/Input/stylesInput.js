import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #586077;
    color: white;
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: white;
        background: transparent;
        border: none;

        &:placeholder {
            color: gray;
        }

    }

    > svg {
            margin-left: 16px;
        }

` 