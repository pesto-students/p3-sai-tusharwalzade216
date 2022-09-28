import styled from "styled-components";

import { INPUT_TYPES } from "../../../constants";

const StyledInput = styled.input`
    font-size: inherit;
    height: 1.6rem;
    width: ${({ type }) => type === INPUT_TYPES.CHECKBOX ? 'auto' : '32rem'};
    border-radius: 0.4rem;

    @media (max-width: 768px) {
        margin-right: 0;
        max-width: 16rem;
    }
`;

export {
    StyledInput
};
