// HeroPage.jsx
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateButton from 'components/@extended/AnimateButton';

// Slogans data
const slogans = [
  'Transform your digital presence with cutting-edge solutions',
  'Elevate your brand with innovative marketing strategies',
  'Unlock growth with data-driven decision making',
  'Accelerate your business with next-gen technology'
];

export default function HeroPage() {
  const theme = useTheme();
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const splitSlogan = (slogan) => {
    const words = slogan.split(' ');
    const midpoint = Math.ceil(words.length * 0.4);
    return {
      firstPart: words.slice(0, midpoint).join(' '),
      secondPart: words.slice(midpoint).join(' ')
    };
  };

  const { firstPart, secondPart } = splitSlogan(slogans[currentSlogan]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        pt: 15,
        pb: 2,
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
        {[...Array(30)].map((_, i) => (
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
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
              boxShadow: '0 0 10px rgba(249, 31, 169, 0.5), 0 0 20px rgba(37, 161, 244, 0.5)',
              top: '-50px'
            }}
          />
        ))}
      </Box>

      <Container sx={{ position: 'relative', zIndex: 2, px: { xs: 2, md: 0 } }}>
        <Grid container justifyContent="center" alignItems="center" spacing={6}>
          <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem', lg: '4.5rem' },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  mb: 11,
                  textAlign: 'center',
                  color: 'common.white',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  height: { xs: 100, sm: 120, md: 140 }, // 👈 Add fixed height responsive
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  px: 2
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlogan}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      display: 'inline-block',
                      background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textAlign: 'center'
                    }}
                  >
                    <Box component="span" display="block">
                      {firstPart}
                    </Box>
                    <Box component="span" display="block">
                      {secondPart}
                    </Box>
                  </motion.div>
                </AnimatePresence>
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 6,
                  maxWidth: 700,
                  mx: 'auto',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 300,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  lineHeight: 1.6
                }}
              >
                We provide innovative solutions to transform your digital presence and accelerate business growth through cutting-edge
                technology and strategic insights.
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                <AnimateButton>
                  <Button
                    component={RouterLink}
                    to="/contact-us"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 50,
                      background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                      boxShadow: '0 10px 20px rgba(37, 161, 244, 0.3)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 15px 25px rgba(249, 31, 169, 0.4)',
                        '&::before': {
                          transform: 'translateX(0)'
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #f91fa9, #25a1f4)',
                        zIndex: -1,
                        transition: 'transform 0.5s ease',
                        transform: 'translateX(-100%)'
                      }
                    }}
                  >
                    Request a Quote
                  </Button>
                </AnimateButton>

                <AnimateButton>
                  <Button
                    component={RouterLink}
                    to="/services"
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 50,
                      color: 'common.white',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        transform: 'translateY(-3px)',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                      }
                    }}
                  >
                    Explore Services
                  </Button>
                </AnimateButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Floating dashboard image */}
          <Grid item xs={12} md={4}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              sx={{
                position: 'relative',
                perspective: '1000px',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Box
                component={motion.div}
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                sx={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                  overflow: 'hidden',
                  width: { xs: '100%', sm: '80%', md: '100%' },
                  maxWidth: 450,
                  height: 300,
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
                    opacity: 0.2,
                    zIndex: -1
                  }
                }}
              >
                {/* Dashboard mockup */}
                <Box
                  sx={{
                    width: '90%',
                    height: '85%',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                >
                  {/* Chart bars */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-around',
                      height: '70%',
                      p: 2
                    }}
                  >
                    {[40, 70, 30, 90, 60, 80, 50].map((height, i) => (
                      <Box
                        key={i}
                        component={motion.div}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                        sx={{
                          width: '8%',
                          background: 'linear-gradient(to top, #25a1f4, #f91fa9)',
                          borderRadius: '4px 4px 0 0'
                        }}
                      />
                    ))}
                  </Box>

                  {/* Metrics */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      p: 2,
                      borderTop: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    {['Traffic', 'Engagement', 'Conversion'].map((metric, i) => (
                      <Box key={i} sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 0.5 }}>
                          {metric}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'common.white', fontWeight: 700 }}>
                          {i === 0 ? '1.2M' : i === 1 ? '78%' : '24%'}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Floating elements around dashboard */}
              <Box
                component={motion.div}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
                sx={{
                  position: 'absolute',
                  top: -30,
                  right: -30,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
                  opacity: 0.4,
                  filter: 'blur(15px)',
                  zIndex: 1
                }}
              />

              <Box
                component={motion.div}
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.7
                }}
                sx={{
                  position: 'absolute',
                  bottom: -40,
                  left: -20,
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f91fa9, #25a1f4)',
                  opacity: 0.3,
                  filter: 'blur(20px)',
                  zIndex: 1
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Stats counter at bottom */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          sx={{
            mt: 10,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 5
          }}
        >
          {[
            { value: '10', label: 'Active Clients' },
            { value: '98%', label: 'Client Retention' },
            { value: '4.8/5', label: 'Satisfaction Rating' },
            { value: '2+', label: 'Years Experience' }
          ].map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                minWidth: 150
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
