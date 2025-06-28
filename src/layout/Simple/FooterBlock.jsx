import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import Logo from 'components/logo';
import { Dribbble, Instagram, Youtube } from 'iconsax-react';
import GithubIcon from 'assets/third-party/github';
import { LinkedIn } from '@mui/icons-material';

// Custom styled components
const GlassCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  opacity: 0.7,
  fontWeight: 400,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    opacity: 1,
    transform: 'translateX(5px)'
  }
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.common.white,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.primary.main,
    transform: 'translateY(-5px)',
    boxShadow: `0 5px 15px rgba(${theme.palette.mode === 'dark' ? '37, 161, 244' : '249, 31, 169'}, 0.4)`
  }
}));

export default function FooterBlock({ isFull }) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: isFull ? 5 : 10,
        pb: 4,
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(249, 31, 169, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(37, 161, 244, 0.1) 0%, transparent 20%)',
          zIndex: 0
        }
      }}
    >
      {/* Floating particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {[...Array(20)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: ['0%', '100vh'],
              x: [`${Math.random() * 100}%`]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
            sx={{
              position: 'absolute',
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
              boxShadow: '0 0 5px rgba(249, 31, 169, 0.5), 0 0 10px rgba(37, 161, 244, 0.5)',
              top: '-50px'
            }}
          />
        ))}
      </Box>

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <GlassCard>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Logo to="/" sx={{ filter: 'brightness(0) invert(1)' }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7,
                        mt: 2
                      }}
                    >
                      Developlogy has earned the trust of global clients by delivering reliable, custom software solutions since our
                      inception. Our expert team combines innovation with precision to build scalable, high-performance products that drive
                      business growth.
                    </Typography>
                  </Grid>
                </Grid>
              </GlassCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <GlassCard>
                <Grid container spacing={{ xs: 5, md: 2 }}>
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={3}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: 'common.white',
                          position: 'relative',
                          display: 'inline-block',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            width: 40,
                            height: 3,
                            background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                            borderRadius: 3
                          }
                        }}
                      >
                        Company
                      </Typography>
                      <Stack spacing={2}>
                        {['Profile', 'Portfolio', 'Follow Us', 'Website'].map((item, index) => (
                          <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <FooterLink href="#" underline="none">
                              {item}
                            </FooterLink>
                          </motion.div>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={3}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: 'common.white',
                          position: 'relative',
                          display: 'inline-block',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            width: 40,
                            height: 3,
                            background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                            borderRadius: 3
                          }
                        }}
                      >
                        Help & Support
                      </Typography>
                      <Stack spacing={2}>
                        {['Documentation', 'Feature Request', 'Support', 'Email Us'].map((item, index) => (
                          <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <FooterLink href="#" underline="none">
                              {item}
                            </FooterLink>
                          </motion.div>
                        ))}
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={3}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: 'common.white',
                          position: 'relative',
                          display: 'inline-block',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -8,
                            left: 0,
                            width: 40,
                            height: 3,
                            background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                            borderRadius: 3
                          }
                        }}
                      >
                        Contact
                      </Typography>
                      <Stack spacing={1.5}>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          contact@developlogy.com
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          +1 (555) 123-4567
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                          123 Innovation Street, Tech City
                        </Typography>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          py: 3,
          mt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Container>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                © {new Date().getFullYear()} Handcrafted by Team{' '}
                <Link
                  href="/"
                  target="_blank"
                  underline="none"
                  sx={{
                    color: 'common.white',
                    fontWeight: 600,
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    '&:hover': {
                      opacity: 0.9
                    }
                  }}
                >
                  Developlogy
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                {[
                  {
                    icon: <GithubIcon size={20} />,
                    tooltip: 'Github',
                    disabled: !isEnabled
                  },
                  {
                    icon: <LinkedIn fontSize="small" />,
                    tooltip: 'LinkedIn',
                    disabled: false
                  },
                  {
                    icon: <Instagram variant="Bold" size={20} />,
                    tooltip: 'Instagram',
                    disabled: false
                  },
                  {
                    icon: <Dribbble variant="Bold" size={20} />,
                    tooltip: 'Dribbble',
                    disabled: true
                  },
                  {
                    icon: <Youtube variant="Bold" size={20} />,
                    tooltip: 'YouTube',
                    disabled: true
                  }
                ].map((social, index) => (
                  <Tooltip key={index} title={social.tooltip} arrow>
                    <div>
                      {social.disabled ? (
                        <SocialIcon
                          sx={{
                            opacity: 0.3,
                            cursor: 'not-allowed',
                            '&:hover': {
                              transform: 'none',
                              background: 'rgba(255, 255, 255, 0.1)'
                            }
                          }}
                        >
                          {social.icon}
                        </SocialIcon>
                      ) : (
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <SocialIcon>{social.icon}</SocialIcon>
                        </motion.div>
                      )}
                    </div>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Floating gradient elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        sx={{
          position: 'absolute',
          bottom: 50,
          right: 100,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
          opacity: 0.1,
          filter: 'blur(40px)',
          zIndex: 1,
          display: { xs: 'none', md: 'block' }
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        sx={{
          position: 'absolute',
          top: 100,
          left: 50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #f91fa9, #25a1f4)',
          opacity: 0.1,
          filter: 'blur(50px)',
          zIndex: 1,
          display: { xs: 'none', md: 'block' }
        }}
      />
    </Box>
  );
}

FooterBlock.propTypes = { isFull: PropTypes.bool };
