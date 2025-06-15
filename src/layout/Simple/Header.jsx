// ✅ FULL HEADER WITH MEGA DROPDOWN FOR "OUR SERVICES" WITH THEME-RESPONSIVE COLORS

import PropTypes from 'prop-types';
import { useState, cloneElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {
  AppBar,
  Button,
  Container,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Box,
  Collapse,
  Chip,
  Menu,
  MenuItem,
  Typography,
  Grid
} from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
import IconButton from 'components/@extended/IconButton';
import Logo from 'components/logo';
import { HambergerMenu, Minus } from 'iconsax-react';
import { useIspValue } from 'hooks/useIspValue';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window || undefined
  });

  return cloneElement(children, {
    style: {
      boxShadow: trigger ? '0 8px 6px -10px rgba(0, 0, 0, 0.5)' : 'none',
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.8) : alpha(theme.palette.background.default, 0.1)
    }
  });
}

const menuLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact-us' }
];

const services = [
  {
    title: 'SEO & Content',
    items: ['Search Engine Optimization', 'SEO Consultation', 'Google My Business', 'Content Creation']
  },
  {
    title: 'Creative & Advertising',
    items: ['Social Media Management', 'Video & Post Production', 'Design & Branding', 'Performance Marketing']
  },
  {
    title: 'IT Solutions',
    items: ['Software Solutions', 'Web Development', 'Mobile App Development']
  },
  {
    title: 'Wikipedia',
    items: ['Page Creation', 'Page Editing', 'Monitoring & Maintenance', 'Content Writing']
  },
  {
    title: 'Cloud Solutions',
    items: ['Server', 'Domain', 'Elementor License', 'Visual Composer License']
  }
];

export default function Header({ layout = 'landing', ...others }) {
  const theme = useTheme();
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const ispValueAvailable = useIspValue();

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerToggle(open);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={(theme) => ({
          bgcolor: alpha(theme.palette.background.default, 0.1),
          backdropFilter: 'blur(8px)',
          color: 'text.primary',
          boxShadow: 'none'
        })}
      >
        <Container maxWidth="xl" disableGutters={downMD}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4 }, py: 1 }}>
            <Stack direction="row" sx={{ alignItems: 'center', flexGrow: 1 }}>
              <Logo to="/" />
            </Stack>

            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {menuLinks.map((link, i) => (
                <Link
                  key={i}
                  component={RouterLink}
                  to={link.to}
                  underline="none"
                  color="secondary.main"
                  sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' } }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Our Services Dropdown */}
              <Link
                className="header-link"
                color="secondary.main"
                id="services-button"
                href="#"
                underline="none"
                onClick={handleClick}
                sx={{ fontWeight: 500, '&:hover': { color: 'primary.main' } }}
              >
                Our Services
              </Link>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'services-button' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{
                  elevation: 3,
                  sx: (theme) => ({
                    p: 2,
                    minWidth: 800,
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`
                  })
                }}
              >
                <Grid container spacing={3}>
                  {services.map((section, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: theme.palette.primary.main }}>
                        {section.title}
                      </Typography>
                      {section.items.map((item, subIdx) => (
                        <MenuItem
                          key={subIdx}
                          sx={{
                            color: theme.palette.text.secondary,
                            py: 0.5,
                            '&:hover': {
                              color: theme.palette.primary.light,
                              backgroundColor: 'transparent'
                            },
                            background: 'transparent'
                          }}
                          disableRipple
                        >
                          <Link href="#" underline="none" sx={{ color: 'inherit' }}>
                            {item}
                          </Link>
                        </MenuItem>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </Menu>

              <AnimateButton>
                <Button component={RouterLink} to="/contact-us" variant="contained" color="success" size="large">
                  Request a Quote
                </Button>
              </AnimateButton>
            </Stack>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton size="large" color="secondary" onClick={drawerToggler(true)} sx={{ p: 1 }}>
                <HambergerMenu />
              </IconButton>
              <Drawer
                anchor="top"
                open={drawerToggle}
                onClose={drawerToggler(false)}
                sx={{ '& .MuiDrawer-paper': { backgroundImage: 'none' } }}
              >
                <Box role="presentation" onKeyDown={drawerToggler(false)} sx={{ width: 'auto' }}>
                  <List>
                    {[...menuLinks, { label: 'Our Services', to: '#' }].map((link, i) => (
                      <Link key={i} component={RouterLink} to={link.to} style={{ textDecoration: 'none' }}>
                        <ListItemButton>
                          <ListItemIcon>
                            <Minus />
                          </ListItemIcon>
                          <ListItemText primary={link.label} slotProps={{ primary: { variant: 'h6', color: 'secondary.main' } }} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.any
};

Header.propTypes = {
  layout: PropTypes.string,
  others: PropTypes.any
};
