import PropTypes from 'prop-types';

import { StyledImage } from './image.styled';

const Image = ({
    alt,
    height,
    src,
    sx,
    width,
}) => (
    <StyledImage
        alt={alt}
        height={height}
        src={src}
        sx={sx}
        width={width} />
);

Image.propTypes = {
    alt: PropTypes.string,
    height: PropTypes.number,
    src: PropTypes.string.isRequired,
    sx: PropTypes.object,
    width: PropTypes.number,
};

Image.defaultProps = {
    alt: 'sample image',
    height: 200,
    sx: {},
    width: 200,
};

export default Image;
