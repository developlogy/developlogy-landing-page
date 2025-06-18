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
import { Close } from '@mui/icons-material';

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
  const ispValueAvailable = useIspValue();

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
              {menuLinks.map((link, i) =>
                link.disabled ? (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      color: 'text.disabled',
                      fontWeight: 500,
                      cursor: 'not-allowed',
                      userSelect: 'none'
                    }}
                  >
                    {link.label}
                  </Typography>
                ) : (
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
                )
              )}

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
                <Box role="presentation" sx={{ width: '100%', p: 2 }}>
                  {/* Close Button Header */}
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    <Typography variant="h6" fontWeight={600}>
                      Menu
                    </Typography>
                    <IconButton onClick={drawerToggler(false)} size="small" color="inherit">
                      <Close />
                    </IconButton>
                  </Stack>
                  <List>
                    {menuLinks.map((link, i) =>
                      link.disabled ? (
                        <ListItemButton key={i} disabled>
                          <ListItemIcon>
                            <Minus />
                          </ListItemIcon>
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      ) : (
                        <Link key={i} component={RouterLink} to={link.to} style={{ textDecoration: 'none' }}>
                          <ListItemButton onClick={drawerToggler(false)}>
                            <ListItemIcon>
                              <Minus />
                            </ListItemIcon>
                            <ListItemText primary={link.label} />
                          </ListItemButton>
                        </Link>
                      )
                    )}

                    {/* OUR SERVICES COLLAPSIBLE SECTION */}
                    <ListItemButton onClick={() => setServicesOpen(!servicesOpen)}>
                      <ListItemIcon>
                        <Minus />
                      </ListItemIcon>
                      <ListItemText primary="Our Services" />
                    </ListItemButton>
                    <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 4 }}>
                        {services.map((section, idx) => (
                          <Box key={idx} sx={{ mb: 2 }}>
                            <Typography
                              variant="subtitle2"
                              sx={{
                                fontWeight: 600,
                                color: theme.palette.primary.main,
                                mb: 0.5,
                                mt: idx !== 0 ? 1 : 0
                              }}
                            >
                              {section.title}
                            </Typography>
                            {section.items.map((item, subIdx) => (
                              <ListItemButton key={subIdx} sx={{ pl: 2 }}>
                                <ListItemText primary={item} primaryTypographyProps={{ fontSize: 14 }} />
                              </ListItemButton>
                            ))}
                          </Box>
                        ))}
                      </List>
                    </Collapse>
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
