import styled, { css } from "styled-components";

const StyledForm = styled.form`
    align-items: end;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem;

    ${props => props.hasError && css`
        & input, & input:invalid {
            border: solid darkred;
        }

        fieldset ~ button[id=form-submit] {
            margin-bottom: 1.8rem;
        }
    `}
`;

export {
    StyledForm
};
