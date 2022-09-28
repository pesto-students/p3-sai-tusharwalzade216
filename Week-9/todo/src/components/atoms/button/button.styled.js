import styled from "styled-components";

const StyledButton = styled.button`
    background: royalblue;
    border: double;
    border-radius: 0.4rem;
    color: white;
    font-size: 1rem;
    margin: 0.8rem;
    padding: 0.4rem 2rem;

    &:hover {
        background: darkslateblue;
    }
`;

export {
    StyledButton
};
