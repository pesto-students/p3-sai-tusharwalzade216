import { memo } from 'react';
import { Typography } from '@mui/material';

import { Image } from '../../atoms';
import { Grid } from '../../molecules';
import brandImage from '../../../assets/images/url-shortener.webp';

const AppInfoSection = () => (
    <Grid
        alignItems="center"
        container
        direction="row"
        flexWrap={"wrap"}
        justifyContent="center"
        p={2}
        sx={{ flexGrow: 1 }}>

        <Grid item md={4} xs={12}>
            <Image
                alt="shortener image"
                height={200}
                src={brandImage}
                sx={{
                    borderEndStartRadius: '2rem',
                    borderStartEndRadius: '2rem'
                }}
                width={200} />
        </Grid>

        <Grid container direction="column" item md={8} xs={12}>
            <Typography component="h2" gutterBottom variant="h2">
                More than just shorter links
            </Typography>
            <Typography gutterBottom variant="body2">
                Build your brand's recognition and get detailed insights on how your links are performing
            </Typography>
        </Grid>
    </Grid>
);

AppInfoSection.propTypes = {};

export default memo(AppInfoSection);
