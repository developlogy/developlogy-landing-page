// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

// project-imports
import AboutUsHeader from 'sections/extra-pages/about/AboutUsHeader';
import OurCapabilities from '../sections/landing/OurCapabilities';
import FadeInWhenVisible from '../sections/landing/Animation';

// ==============================|| ABOUT US - MAIN ||============================== //

export default function AboutUs() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12}>
            <AboutUsHeader />
          </Grid>

          <Grid item xs={12} md={10} lg={9}>
            <OurStorySection />
          </Grid>

          <Grid item xs={12}>
            <OurCapabilities />
          </Grid>
        </Grid>
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

// Glassmorphism card component
const GlassCard = ({ children }) => (
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
      }
    }}
  >
    {children}
  </Box>
);

// Our Story Section Component
function OurStorySection() {
  return (
    <Box sx={{ py: 6 }}>
      <FadeInWhenVisible>
        <GlassCard>
          <Stack spacing={4}>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                color: 'common.white',
                textAlign: 'center',
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Story
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              Developlogy began as a small team of passionate technologists with a shared vision: to create digital solutions that empower
              businesses and transform industries. Founded in 2015, we've grown into a global team of experts who combine technical
              excellence with creative problem-solving.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.8,
                fontSize: '1.1rem'
              }}
            >
              Over the years, we've helped hundreds of clients navigate the complexities of digital transformation. From startups to Fortune
              500 companies, our approach remains the same: listen deeply, think strategically, and build with precision.
            </Typography>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Typography variant="h2" fontWeight={700} sx={{ color: '#25a1f4' }}>
                    100+
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Projects Completed
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h2" fontWeight={700} sx={{ color: '#f91fa9' }}>
                    50+
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Happy Clients
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h2" fontWeight={700} sx={{ color: '#25a1f4' }}>
                    10+
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    Years Experience
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </GlassCard>
      </FadeInWhenVisible>
    </Box>
  );
}
