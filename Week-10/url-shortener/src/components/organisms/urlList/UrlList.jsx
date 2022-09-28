import PropTypes from 'prop-types';

import { Box, List, UrlListItem } from '../../molecules';

const UrlList = ({ data }) => (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <List>
            {data?.map((obj, index) =>
                <UrlListItem key={index} longUrl={obj?.longUrl} shortUrl={obj?.shortUrl} />
            )}
        </List>
    </Box>
);

UrlList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default UrlList;
