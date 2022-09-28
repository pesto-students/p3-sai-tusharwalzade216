import PropTypes from 'prop-types';

import { Button } from '../../atoms';
import { StyledForm } from "./form.styled";

const Form = ({
    ariaLabel,
    children,
    hasError,
    onReset,
    onSubmit,
    resetButtonProps,
    submitButtonProps,
}) => {
    return (
        <StyledForm
            aria-label={ariaLabel}
            hasError={hasError}
            onReset={onReset}
            onSubmit={onSubmit}
        >
            {children}

            {resetButtonProps?.show &&
                <Button
                    disabled={resetButtonProps?.disabled}
                    id="form-reset"
                    onClick={onReset}
                    type="reset">
                    Reset
                </Button>
            }
            {submitButtonProps?.show &&
                <Button
                    disabled={submitButtonProps?.disabled}
                    id="form-submit"
                    onClick={onSubmit}
                    type="submit">
                    Submit
                </Button>
            }
        </StyledForm>
    );
};

Form.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.element,
    hasError: PropTypes.bool,
    onReset: PropTypes.func,
    onSubmit: PropTypes.func,
    resetButtonProps: PropTypes.shape({
        disabled: PropTypes.bool,
        show: PropTypes.bool,
    }),
    submitButtonProps: PropTypes.shape({
        disabled: PropTypes.bool,
        show: PropTypes.bool,
    }),
};

Form.defaultProps = {
    ariaLabel: "Form",
    children: <></>,
    hasError: false,
    onReset: () => { },
    onSubmit: () => { },
    resetButtonProps: {
        disabled: false,
        show: false,
    },
    submitButtonProps: {
        disabled: false,
        show: false
    }
};

export default Form;
