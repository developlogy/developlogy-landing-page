import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import FadeInWhenVisible from './Animation';

// Glassmorphism card component
const GlassCard = ({ children, sx = {} }) => (
  <Box
    sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      p: 4,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
      },
      ...sx
    }}
  >
    {children}
  </Box>
);

export default function MissionSection() {
  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
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
        <FadeInWhenVisible>
          <GlassCard sx={{ mb: 6 }}>
            <Stack spacing={3}>
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  color: 'common.white',
                  textAlign: 'center',
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Our Mission
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
                At Delelplogy, our mission is simple: to empower businesses with smart, scalable, and meaningful digital solutions. We
                combine strategy, creativity, and technology to help brands grow — not just for the short term, but with real momentum that
                lasts.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.8,
                  fontSize: '1.1rem'
                }}
              >
                Every solution we deliver is rooted in clarity, purpose, and measurable impact.
              </Typography>
            </Stack>
          </GlassCard>
        </FadeInWhenVisible>
      </Container>

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
          top: '30%',
          left: '10%',
          width: 200,
          height: 200,
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
          bottom: '20%',
          right: '10%',
          width: 250,
          height: 250,
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
