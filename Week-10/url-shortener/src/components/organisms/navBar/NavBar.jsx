import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';

import { Button, LinkIcon, MenuIcon, Typography } from '../../atoms';
import { AppBar, Box, Container, IconButton, Menu, Toolbar } from "../../molecules";

const NavBar = ({ items }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    let navigate = useNavigate();

    const handleCloseNavMenu = async (link) => {
        link && navigate(link);
        setAnchorElNav(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    return (
        <AppBar position="static">
            <Container
                sx={{
                    mx: { md: 'auto', xs: 0 },
                    px: { md: 'auto', xs: 0 }
                }}>
                <Toolbar>
                    <LinkIcon
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            mr: 1
                        }} />

                    <Typography
                        component="a"
                        href="/"
                        noWrap
                        sx={{
                            color: 'inherit',
                            display: { md: 'flex', xs: 'none' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            mr: 2,
                            textDecoration: 'none',
                        }}
                        variant="h6"
                    >
                        URL SHORTENER
                    </Typography>

                    <Box
                        sx={{
                            display: { md: 'none', xs: 'flex' },
                            flexGrow: 1
                        }}>
                        <IconButton
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            aria-label="List of menus"
                            color="inherit"
                            onClick={handleOpenNavMenu}
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            id="menu-appbar"
                            items={items}
                            keepMounted
                            onClose={handleCloseNavMenu}
                            open={Boolean(anchorElNav)}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            sx={{
                                display: { md: 'none', xs: 'block' },
                            }}
                        />
                    </Box>

                    <LinkIcon
                        sx={{
                            display: { md: 'none', xs: 'flex' },
                            mr: 1
                        }} />
                    <Typography
                        component="a"
                        href="/"
                        noWrap
                        sx={{
                            color: 'inherit',
                            display: { md: 'none', xs: 'flex' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            mr: 2,
                            textDecoration: 'none',
                        }}
                        variant="h5"
                    >
                        URL SHORTENER
                    </Typography>

                    <Box
                        sx={{
                            display: { md: 'flex', xs: 'none' },
                            flexGrow: 1,
                            justifyContent: 'end'
                        }}>
                        {items?.map((item) => (
                            <Button
                                key={item?.link}
                                onClick={() => handleCloseNavMenu(item?.link)}
                                sx={{ color: 'white', display: 'block', m: 2 }}
                                variant='text'
                            >
                                {item?.text}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

NavBar.propTypes = {
    brandTitle: PropTypes.string,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'transparent']),
    enableColorOnDark: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            link: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    position: PropTypes.oneOf(['absolute', 'fixed', 'relative', 'static', 'sticky']),
    sx: PropTypes.object,
};

NavBar.defaultProps = {
    brandTitle: 'URL SHORTENER',
    color: 'primary',
    enableColorOnDark: true,
    position: 'static',
    sx: {},
};

export default NavBar;
