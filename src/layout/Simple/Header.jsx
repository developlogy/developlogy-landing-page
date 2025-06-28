// ✅ FIXED HEADER WITH GLASSMORPHISM & GRADIENT EFFECTS
import PropTypes from 'prop-types';
import { useState, cloneElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import { alpha, useTheme, styled } from '@mui/material/styles';
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
  Menu,
  MenuItem,
  Typography,
  Grid
} from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';
import IconButton from 'components/@extended/IconButton';
import Logo from 'components/logo';
import { HambergerMenu, Minus } from 'iconsax-react';
import { Close } from '@mui/icons-material';

// Glassmorphism styled components
const GlassMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(12px)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    minWidth: 800,
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      zIndex: -1,
      opacity: 0.95
    }
  }
}));

const NavLink = styled(Link)(({ theme }) => ({
  fontWeight: 500,
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    color: theme.palette.common.white,
    '&::after': {
      transform: 'scaleX(1)',
      opacity: 1
    }
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -4,
    left: 0,
    width: '100%',
    height: 2,
    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    opacity: 0,
    borderRadius: 2
  }
}));

const GlassDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
    backdropFilter: 'blur(12px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    width: '80%',
    maxWidth: 320,
    color: theme.palette.common.white
  }
}));

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
    target: window || undefined
  });

  return cloneElement(children, {
    style: {
      backgroundColor: trigger ? alpha(theme.palette.background.default, 0.9) : 'transparent',
      backdropFilter: trigger ? 'blur(8px)' : 'none',
      borderBottom: trigger ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      transition: 'all 0.3s ease'
    }
  });
}

const menuLinks = [
  { label: 'Home', to: '/', disabled: false },
  { label: 'About Us', to: '/about-us', disabled: false },
  { label: 'Portfolio', to: '/portfolio', disabled: true },
  { label: 'Blog', to: '/blog', disabled: true },
  { label: 'Careers', to: '/careers', disabled: true },
  { label: 'Contact', to: '/contact-us', disabled: false }
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
    items: ['Server', 'Domain', 'Infra Solution', 'Architectural Solutions']
  },
  {
    title: 'B2B Services',
    items: ['Lead Management', 'Data Solutions', 'Sales Targeting', 'Digital Marketing']
  }
];

export default function Header({ layout = 'landing', ...others }) {
  const theme = useTheme();
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [drawerToggle, setDrawerToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [servicesOpen, setServicesOpen] = useState(false);

  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerToggle(open);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <ElevationScroll layout={layout} {...others}>
      <AppBar
        sx={{
          color: 'common.white',
          boxShadow: 'none',
          background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
        }}
      >
        <Container maxWidth="xl" disableGutters={downMD}>
          <Toolbar sx={{ px: { xs: 1.5, sm: 4 }, py: 1 }}>
            <Stack direction="row" sx={{ alignItems: 'center', flexGrow: 1 }}>
              <Logo to="/" sx={{ filter: 'brightness(0) invert(1)' }} />
            </Stack>

            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              {menuLinks.map((link, i) =>
                link.disabled ? (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.3)',
                      fontWeight: 500,
                      cursor: 'not-allowed',
                      userSelect: 'none'
                    }}
                  >
                    {link.label}
                  </Typography>
                ) : (
                  <NavLink key={i} component={RouterLink} to={link.to} underline="none">
                    {link.label}
                  </NavLink>
                )
              )}

              {/* Our Services Dropdown */}
              <NavLink id="services-button" href="#" underline="none" onClick={handleClick}>
                Our Services
              </NavLink>

              <GlassMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'services-button' }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <Grid container spacing={3}>
                  {services.map((section, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5, color: '#25a1f4' }}>
                        {section.title}
                      </Typography>
                      {section.items.map((item, subIdx) => (
                        <MenuItem
                          key={subIdx}
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            py: 0.5,
                            '&:hover': {
                              color: '#f91fa9',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)'
                            },
                            borderRadius: 1,
                            mb: 0.5
                          }}
                        >
                          <Link href="#" underline="none" sx={{ color: 'inherit' }}>
                            {item}
                          </Link>
                        </MenuItem>
                      ))}
                    </Grid>
                  ))}
                </Grid>
              </GlassMenu>

              <AnimateButton>
                <Button
                  component={RouterLink}
                  to="/contact-us"
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    fontWeight: 600,
                    boxShadow: '0 4px 15px rgba(249, 31, 169, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #1d8fd8, #e01a96)',
                      boxShadow: '0 6px 20px rgba(249, 31, 169, 0.5)'
                    }
                  }}
                >
                  Request a Quote
                </Button>
              </AnimateButton>
            </Stack>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
              <IconButton
                size="large"
                onClick={drawerToggler(true)}
                sx={{
                  p: 1,
                  color: 'common.white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.2)'
                  }
                }}
              >
                <HambergerMenu />
              </IconButton>
              <GlassDrawer anchor="right" open={drawerToggle} onClose={drawerToggler(false)}>
                <Box role="presentation" sx={{ p: 2, height: '100%' }}>
                  {/* Close Button Header */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      Menu
                    </Typography>
                    <IconButton onClick={drawerToggler(false)} size="small" sx={{ color: 'common.white' }}>
                      <Close />
                    </IconButton>
                  </Stack>

                  <List>
                    {menuLinks.map((link, i) =>
                      link.disabled ? (
                        <ListItemButton key={i} disabled sx={{ color: 'rgba(255, 255, 255, 0.3)' }}>
                          <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
                            <Minus size={16} />
                          </ListItemIcon>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      ) : (
                        <Link key={i} component={RouterLink} to={link.to} style={{ textDecoration: 'none' }}>
                          <ListItemButton onClick={drawerToggler(false)} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                            <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
                              <Minus size={16} />
                            </ListItemIcon>
                            <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500 }} />
                          </ListItemButton>
                        </Link>
                      )
                    )}

                    {/* OUR SERVICES COLLAPSIBLE SECTION */}
                    <ListItemButton onClick={() => setServicesOpen(!servicesOpen)} sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      <ListItemIcon sx={{ minWidth: 32, color: 'inherit' }}>
                        <Minus size={16} />
                      </ListItemIcon>
                      <ListItemText primary="Our Services" primaryTypographyProps={{ fontWeight: 500 }} />
                    </ListItemButton>

                    <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        {services.map((section, idx) => (
                          <Box key={idx} sx={{ mb: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                color: '#25a1f4',
                                mb: 0.5,
                                mt: idx !== 0 ? 1 : 0
                              }}
                            >
                              {section.title}
                            </Typography>
                            {section.items.map((item, subIdx) => (
                              <ListItemButton
                                key={subIdx}
                                sx={{
                                  pl: 2,
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  '&:hover': { color: '#f91fa9' }
                                }}
                              >
                                <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                              </ListItemButton>
                            ))}
                          </Box>
                        ))}
                      </List>
                    </Collapse>

                    <Box sx={{ mt: 3, px: 2 }}>
                      <Button
                        component={RouterLink}
                        to="/contact-us"
                        fullWidth
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                          fontWeight: 600,
                          boxShadow: '0 4px 15px rgba(249, 31, 169, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(90deg, #1d8fd8, #e01a96)',
                            boxShadow: '0 6px 20px rgba(249, 31, 169, 0.5)'
                          }
                        }}
                      >
                        Request a Quote
                      </Button>
                    </Box>
                  </List>
                </Box>
              </GlassDrawer>
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
