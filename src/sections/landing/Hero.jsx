// ✅ HERO PAGE WITH SLOGANS ROTATING INSIDE HEADLINE (FIXED)

import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

// project-imports
import { techData } from 'data/tech-data';
import { useIspValue } from 'hooks/useIspValue';

// third-party
import { motion, AnimatePresence } from 'framer-motion';

// assets
import AnimateButton from 'components/@extended/AnimateButton';

export default function HeroPage() {
  const ispValueAvailable = useIspValue();
  const theme = useTheme();

  const slogans = [
    'Code smarter, dream bigger, achieve faster.',
    'Elevate your brand - one search at a time.',
    'Building credibility, one verified fact at a time.',
    'Seamless IT solutions that keep your growth always online.'
  ];

  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slogans.length]);

  const splitSlogan = (slogan) => {
    const midpoint = Math.floor(slogan.length * 0.4);
    return [slogan.slice(0, midpoint), slogan.slice(midpoint)];
  };

  const techBottom = techData.map((item, index) => {
    const finalUrl = item.url !== '#!' && ispValueAvailable ? `${item.url}?isp=1` : item.url;
    return (
      <Grid key={index} sx={{ minWidth: { xs: 60, md: 90 } }}>
        <motion.div
          initial={{ opacity: 0, translateY: 550 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.8 }}
        >
          <Tooltip title={item.tooltipTitle}>
            <Link
              component={item.label === 'React MUI' ? RouterLink : Link}
              {...(item.label === 'React MUI' ? { to: finalUrl } : { href: finalUrl })}
              target={item.target}
            >
              <CardMedia component="img" image={item.image} sx={{ width: 'auto', height: { xs: 60, md: 'auto' } }} />
            </Link>
          </Tooltip>
        </motion.div>
      </Grid>
    );
  });

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', pb: 12.5, pt: 10, display: 'flex', alignItems: 'center' }}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: 'center', justifyContent: 'center', pt: { md: 0, xs: 10 }, pb: { md: 0, xs: 22 } }}>
          <Grid size={{ xs: 12, md: 9 }}>
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
              <Grid size={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '1.825rem', sm: '2rem', md: '3.4375rem' },
                      fontWeight: 700,
                      lineHeight: 1.2
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={slogans[currentSlogan]}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'inline-block' }}
                      >
                        {(() => {
                          const [first, second] = splitSlogan(slogans[currentSlogan]);
                          return (
                            <>
                              <Box
                                component="span"
                                sx={{
                                  fontWeight: 700,
                                  background: 'linear-gradient(90deg, rgb(37, 161, 244), rgb(249, 31, 169), rgb(37, 161, 244))',
                                  color: 'transparent',
                                  WebkitBackgroundClip: 'text',
                                  backgroundClip: 'text',
                                  animation: 'move-bg 24s infinite linear',
                                  '@keyframes move-bg': { '100%': { backgroundPosition: '400% 0' } }
                                }}
                              >
                                {first}
                              </Box>
                              <Box component="span" sx={{ color: theme.palette.text.primary }}>
                                {second}
                              </Box>
                            </>
                          );
                        })()}
                      </motion.span>
                    </AnimatePresence>
                  </Typography>
                </motion.div>
              </Grid>

              <Grid size={12}>
                <motion.div
                  initial={{ opacity: 0, translateY: 550 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                >
                  <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Grid>
                      <AnimateButton>
                        <Button
                          component={RouterLink}
                          to={ispValueAvailable ? '/components-overview/buttons?isp=1' : '/components-overview/buttons'}
                          size="large"
                          color="secondary"
                          variant="outlined"
                        >
                          Explore Components
                        </Button>
                      </AnimateButton>
                    </Grid>
                    <Grid>
                      <AnimateButton>
                        <Button component={RouterLink} to="/login" target="_blank" size="large" color="primary" variant="contained">
                          Live Preview
                        </Button>
                      </AnimateButton>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Bottom tech demo bar */}
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Grid
            container
            spacing={0}
            wrap="nowrap"
            sx={(theme) => ({
              justifyContent: { xs: 'start', lg: 'center' },
              overflowX: 'auto',
              '& > .MuiGrid2-root': {
                borderRight: `1px solid ${theme.palette.divider}`,
                '&:first-of-type': { borderLeft: `1px solid ${theme.palette.divider}` },
                '& img': { padding: 1.3 }
              }
            })}
          >
            {techBottom}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
