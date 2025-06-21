// material-ui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// assets
import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| CONTACT US - HEADER ||============================== //

export default function AboutUsHeader() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', pt: 9, pb: 0 }}>
      <AuthBackground />
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box sx={{ width: { xs: '100%', sm: 360, lg: 436 }, px: 2, py: 6, mx: 'auto' }}>
          <Stack sx={{ gap: 1 }}>
            <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
              About Us
            </Typography>
            <Typography align="center" sx={{ color: 'text.secondary' }}>
              Developlogy is a team of passionate technologists, designers, and problem-solvers dedicated to building scalable,
              high-performing digital solutions. We collaborate closely with businesses to turn ideas into impactful products through clean
              code, intuitive design, and reliable delivery.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
