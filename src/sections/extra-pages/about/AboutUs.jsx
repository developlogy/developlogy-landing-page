import { Box, Container, Typography, Stack } from '@mui/material';

export default function AboutUs() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Stack spacing={3} textAlign="center">
          <Typography variant="h3" fontWeight={700}>
            About Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
