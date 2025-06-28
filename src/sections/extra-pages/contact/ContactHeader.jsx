// material-ui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

// animation
import FadeInWhenVisible from '../../landing/Animation';

// ==============================|| CONTACT US - HEADER ||============================== //

export default function ContactHeader() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: 4, pb: 4 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <FadeInWhenVisible>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 4,
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto'
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                mb: 3,
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Talk to our Expert
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Have questions or ready to start your project? Our team is here to help you achieve your digital goals.
            </Typography>

            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              sx={{ mt: 4, display: 'inline-block' }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  color: '#25a1f4',
                  display: 'inline-block',
                  borderBottom: '2px solid #f91fa9',
                  pb: 0.5
                }}
              >
                We usually respond within 24 hours
              </Typography>
            </Box>
          </Box>
        </FadeInWhenVisible>
      </Container>
    </Box>
  );
}
