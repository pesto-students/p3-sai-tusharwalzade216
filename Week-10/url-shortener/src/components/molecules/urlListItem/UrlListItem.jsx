import { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import MuiListItem from '@mui/material/ListItem';

import { Stack } from '../stack';
import { IconButton } from '../iconButton';
import { ListItemText } from '../listItemText';
import { ListItemAvatar } from '../listItemAvatar';
import { Avatar, ContentCopyIcon, Divider, LinkIcon, Typography } from '../../atoms';

const UrlListItem = ({ longUrl, shortUrl }) => {
    const { enqueueSnackbar } = useSnackbar();

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(shortUrl).then(() => {
            enqueueSnackbar("Success! Shortened Url copied to clipboard!", { variant: "success" });
        }, () => {
            enqueueSnackbar("Error! Could not copy shortened Url", { variant: "error" });
        });
    }, [enqueueSnackbar, shortUrl]);

    return (
        <>
            <MuiListItem
                secondaryAction={
                    <IconButton
                        aria-label="Copy"
                        edge="end"
                        onClick={handleCopy}>
                        <ContentCopyIcon />
                    </IconButton>
                }>
                <ListItemAvatar>
                    <Avatar>
                        <LinkIcon />
                    </Avatar>
                </ListItemAvatar>

                <ListItemText>
                    <Stack
                        aria-label="URL list item"
                        direction="row"
                        flexGrow={1}
                        flexWrap="wrap"
                        justifyContent="space-between">
                        <Typography
                            aria-label="Long Url"
                            component="h4"
                            gutterBottom
                            sx={{
                                mr: 2,
                                whiteSpace: "inherit",
                                wordBreak: "break-all"
                            }}
                            variant="subtitle1">
                            {longUrl}
                        </Typography>
                        <Typography
                            aria-label="Short Url"
                            color="primary.main"
                            component="a"
                            gutterBottom
                            href={shortUrl}
                            sx={{
                                wordBreak: "break-all"
                            }}
                            target="_blank"
                            variant="subtitle1">
                            {shortUrl}
                        </Typography>
                    </Stack>
                </ListItemText>
            </MuiListItem>
            <Divider variant="middle" />
        </>
    );
};

UrlListItem.propTypes = {
    longUrl: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
};

export default UrlListItem;
