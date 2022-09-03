import styled from "styled-components";

const StyledLabel = styled.label`
    font-size: 0.8rem;
    font-weight: bold;
    text-align: start;
    text-transform: uppercase;

    & > span {
        color: red;
        font-size: 1.2rem;
        margin: 0 0.2rem;
    }

    @media (max-width: 768px) {
        max-width: 16rem;
    }
`;

export {
    StyledLabel
};
