import styled from "@emotion/styled";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: start;
    border: 1px solid black;
    width: 400px;
    padding: 10px;
`;

export const FromLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 18px;
    font-weight: 600;
`;

export const FormButton = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: aqua;
    }

`