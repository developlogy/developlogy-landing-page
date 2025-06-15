import { Box, Container, Grid, Stack, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ComputerIcon from '@mui/icons-material/Computer';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const capabilities = [
  {
    icon: <ComputerIcon fontSize="large" color="primary" />,
    title: 'Unmatched IT Expertise',
    description: 'We deliver a versatile and professional approach, finely tuned to meet the unique needs of every client.'
  },
  {
    icon: <RocketLaunchIcon fontSize="large" color="primary" />,
    title: 'Rapid Execution',
    description: 'From aligned expectations to swift development, we prioritize efficiency at every step.'
  },
  {
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
    title: 'On-Time Excellence',
    description: 'Clear communication and diligent planning ensure every project is delivered on schedule.'
  },
  {
    icon: <AttachMoneyIcon fontSize="large" color="primary" />,
    title: 'Value-Driven Solutions',
    description: 'Our team ensures optimal outcomes, providing exceptional results for every dollar invested.'
  },
  {
    icon: <PersonIcon fontSize="large" color="primary" />,
    title: 'Established Leadership',
    description: 'With over 10+ years of proven experience, we stand as trusted innovators in the industry.'
  },
  {
    icon: <HandshakeIcon fontSize="large" color="primary" />,
    title: 'Reliable Partnership',
    description: 'Unico Connect Solutions offers steadfast, responsive support you can depend on, every time.'
  }
];

export default function OurCapabilities() {
  return (
    <Box sx={{ py: { xs: 8, md: 0 } }}>
      <Container>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Our Capabilities
        </Typography>

        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          We Craft Exceptional Websites And Apps Entirely In-House, Ensuring End-To-End Precision And Uncompromising Excellence
        </Typography>

        <Typography variant="h5" align="center" color="primary" fontWeight={700} mt={6} mb={4}>
          Why Join Hands With Us?
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {capabilities.map((cap, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                {cap.icon}
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {cap.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cap.description}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box mt={10} textAlign="center">
          <Typography variant="h3" fontWeight={700} color="primary" sx={{ mb: 1 }}>
            Have a project in mind?
          </Typography>
          <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
            Let&apos;s Connect
          </Typography>
          <Button component={RouterLink} to="/contact-us" variant="contained" size="large" endIcon={<ArrowForwardIcon />}>
            Let&apos;s Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
