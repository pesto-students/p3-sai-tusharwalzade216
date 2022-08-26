import styled, { css } from "styled-components";

const AddTodoContainer = styled.form`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;

    & input {
        font-size: inherit;
        height: 1.6rem;
        width: 32rem;
        margin-right: 2rem;
        border-radius: 0.4rem;

        @media (max-width: 768px) {
            max-width: 100%;
            margin-right: 0;
        }
    }

    & > button {
        align-self: flex-start;
        background: royalblue;
        color: whitesmoke;
        border: none;
        font-size: 1rem;
        border-radius: 0.4rem;
        padding: 0.4rem 2rem;

        &:hover {
            background: darkslateblue;
        }
    }

    & > div {
        max-width: 100%;

        @media (max-width: 768px) {
            margin-bottom: 2rem;
        }
    }

    ${props => props.hasError && css`
        & input, & input:invalid {
            border: solid darkred;
        }
    `}
`;

const ErrorWrapper = styled.h5`
    color: darkred;
    text-align: start;
    margin: auto;
`;

const Title = styled.h4`
    flex-grow: 1;
    font-size: 1.2rem;
    font-weight: 400;
    word-break: break-all;
`;

const TodoContainer = styled.li`
    display: flex;
    align-items: center;
    width: 60%;
    justify-content: inherit;
    border-bottom: 0.08rem solid;
    margin-bottom: 0.4rem;
    
    &:hover {
        background: lightgrey;
    }

    & > h4 {
        text-align: start;
    }

    ${props => props.completed && css`
        background: lightgreen;

        & h4 {
            text-decoration: line-through;
        }

        &:hover {
            background: limegreen;
        }
    `}

    & > label[for^=todo-state] {
        margin: 0 2rem;

        & > input[type=checkbox] {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        @media (max-width: 768px) {
            margin: 0 1.2rem;
        }
    }

    & button {
        margin: 0 2rem;
        padding: 0.4rem 0.6rem;
        color: whitesmoke;
        background: indianred;
        border: none;
        border-radius: 50%;
        font-weight: bold;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        
        &:hover {
            background: darkred;
        }

        @media (max-width: 768px) {
            margin: 0 1.2rem;
        }
    }

    @media (max-width: 768px) {
        width: 96%;
    }
`;

const TodosContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: inherit;
`;

export {
    AddTodoContainer,
    ErrorWrapper,
    Title,
    TodoContainer,
    TodosContainer,
};
