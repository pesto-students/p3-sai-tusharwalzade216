import styled, { css } from "styled-components";

const ListItemContainer = styled.li`
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

    ${props => props.checked && css`
        background: lightgreen;

        & h4 {
            text-decoration: line-through;
        }

        &:hover {
            background: limegreen;
        }
    `}

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

export {
    ListItemContainer
};
