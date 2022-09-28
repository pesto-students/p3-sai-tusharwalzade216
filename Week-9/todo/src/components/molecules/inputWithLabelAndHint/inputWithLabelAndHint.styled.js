import styled from "styled-components";

const StyledInputWithLabelAndHintContainer = styled.fieldset`
    border: none;
    display: flex;
    flex-direction: column;
    margin: 0.8rem;
    padding: unset;

    @media (max-width: 768px) {
        max-width: 20rem;
    }
`;

export {
    StyledInputWithLabelAndHintContainer
};
