// material-ui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

//amimation
import FadeInWhenVisible from '../../landing/Animation';

// ==============================|| CONTACT US - HEADER ||============================== //

export default function ContactHeader() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: 9, pb: 0 }}>
      <AuthBackground />
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box sx={{ width: { xs: '100%', sm: 360, lg: 436 }, px: 2, py: 6, mx: 'auto' }}>
          <Stack sx={{ gap: 1 }}>
            <FadeInWhenVisible>
              <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
                Talk to our Expert
              </Typography>
            </FadeInWhenVisible>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
