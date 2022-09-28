import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form } from '../../molecules';
import { IconButton } from '../../molecules';
import { InputAdornment, KeyboardReturnIcon, LinkIcon, TextField } from '../../atoms';

const ShortenUrlForm = ({
    onSubmit
}) => {
    const [input, setInput] = useState('');

    const isValidUrl = inputUrl => {
        const regexQuery = '^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$';
        const url = new RegExp(regexQuery, 'i');
        return url.test(inputUrl);
    };

    const hasError = !!(input && !isValidUrl(input));

    const handleSubmit = e => {
        e.preventDefault();
        if (!hasError) {
            onSubmit(input);
            setInput('');
        }
    };

    return (
        <Form
            autoComplete='off'
            component='form'
            m={4}
            noValidate
            onSubmit={handleSubmit}
            sx={{
                '& > :not(style)': { my: 2 },
            }}>
            <TextField
                autoFocus
                color='secondary'
                hasError={hasError}
                fullWidth
                focused
                helperText={hasError ? 'Please enter a valid URL' : undefined}
                InputProps={{
                    inputMode: 'url',
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='Submit URL'
                                disabled={!input}
                                edge='end'
                                onClick={handleSubmit}
                            >
                                <KeyboardReturnIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    startAdornment: (
                        <InputAdornment position='start' >
                            <LinkIcon />
                        </InputAdornment>
                    ),
                }}
                label='URL to shorten'
                onChange={e => setInput(e?.target?.value)}
                placeholder='https://www.google.com/'
                value={input}
            />
        </Form>
    );
}

ShortenUrlForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ShortenUrlForm;
