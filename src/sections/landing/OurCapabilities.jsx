import { Box, Container, Grid, Stack, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FadeInWhenVisible from './Animation';

// Glassmorphism card component
const GlassCard = ({ children }) => (
  <Box
    sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      p: 3,
      height: '100%',
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

const capabilities = [
  {
    icon: <ComputerIcon fontSize="large" sx={{ color: '#25a1f4' }} />,
    title: 'Unmatched IT Expertise',
    description: 'We deliver a versatile and professional approach, finely tuned to meet the unique needs of every client.'
  },
  {
    icon: <RocketLaunchIcon fontSize="large" sx={{ color: '#f91fa9' }} />,
    title: 'Rapid Execution',
    description: 'From aligned expectations to swift development, we prioritize efficiency at every step.'
  },
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ color: '#25a1f4' }} />,
    title: 'On-Time Excellence',
    description: 'Clear communication and diligent planning ensure every project is delivered on schedule.'
  },
  {
    icon: <AttachMoneyIcon fontSize="large" sx={{ color: '#f91fa9' }} />,
    title: 'Value-Driven Solutions',
    description: 'Our team ensures optimal outcomes, providing exceptional results for every dollar invested.'
  },
  {
    icon: <PersonIcon fontSize="large" sx={{ color: '#25a1f4' }} />,
    title: 'Established Leadership',
    description: 'With over 10+ years of proven experience, we stand as trusted innovators in the industry.'
  },
  {
    icon: <HandshakeIcon fontSize="large" sx={{ color: '#f91fa9' }} />,
    title: 'Reliable Partnership',
    description: 'Unico Connect Solutions offers steadfast, responsive support you can depend on, every time.'
  }
];

export default function OurCapabilities() {
  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
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

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <FadeInWhenVisible>
          <Typography
            variant="h3"
            align="center"
            fontWeight={700}
            sx={{
              color: 'common.white',
              mb: 2,
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            Our Capabilities
          </Typography>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Typography
            variant="h5"
            align="center"
            fontWeight={600}
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 3,
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            We Craft Exceptional Websites And Apps Entirely In-House, Ensuring End-To-End Precision And Uncompromising Excellence
          </Typography>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            sx={{
              color: 'common.white',
              mb: 5,
              background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              mx: 'auto'
            }}
          >
            Why Join Hands With Us?
          </Typography>
        </FadeInWhenVisible>

        <Grid container spacing={3} sx={{ justifyContent: 'center', mt: { md: 8, xs: 2 }, mb: { md: 8, xs: 2 } }}>
          {capabilities.map((cap, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                <GlassCard>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    {cap.icon}
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{
                          color: 'common.white',
                          mb: 1
                        }}
                      >
                        {cap.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6
                        }}
                      >
                        {cap.description}
                      </Typography>
                    </Box>
                  </Stack>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          mt={10}
          textAlign="center"
          sx={{
            position: 'relative',
            zIndex: 2
          }}
        >
          <FadeInWhenVisible>
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                mb: 1,
                color: 'common.white',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Have a project in mind?
            </Typography>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                mb: 4,
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              Let&apos;s Connect
            </Typography>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={RouterLink}
                to="/contact-us"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 4,
                  boxShadow: '0 4px 15px rgba(249, 31, 169, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1d8fd8, #e01a96)',
                    boxShadow: '0 6px 20px rgba(249, 31, 169, 0.5)'
                  }
                }}
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </Box>
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
