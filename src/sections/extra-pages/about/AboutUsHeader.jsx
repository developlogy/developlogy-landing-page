// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

import FadeInWhenVisible from '../../landing/Animation';

// Updated AboutUsHeader component
export default function AboutUsHeader() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: 8, pb: 4 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <FadeInWhenVisible>
          <GlassCard>
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  color: 'common.white',
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                About Developlogy
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  maxWidth: 800,
                  lineHeight: 1.6
                }}
              >
                Developlogy is a team of passionate technologists, designers, and problem-solvers dedicated to building scalable,
                high-performing digital solutions. We collaborate closely with businesses to turn ideas into impactful products through
                clean code, intuitive design, and reliable delivery.
              </Typography>

              <Box component={motion.div} whileHover={{ scale: 1.05 }} sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Our Mission: To empower businesses with technology that drives growth
                </Typography>
              </Box>
            </Stack>
          </GlassCard>
        </FadeInWhenVisible>
      </Container>
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
