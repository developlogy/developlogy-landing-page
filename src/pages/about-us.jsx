// material-ui
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

// project-imports
import AboutUsHeader from 'sections/extra-pages/about/AboutUsHeader';
import AboutUs from 'sections/extra-pages/about/AboutUs';
import OurCapabilities from '../sections/landing/OurCapabilities';

// ==============================|| CONTACT US - MAIN ||============================== //

export default function contactUS() {
  return (
    <Grid container spacing={12} sx={{ justifyContent: 'center', alignItems: 'center', mb: 12 }}>
      <Grid size={{ xs: 12, md: 12 }}>
        <AboutUsHeader />
      </Grid>
      <Grid size={{ xs: 12, sm: 10, lg: 9 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
          {/* <AboutUs /> */}
          <OurCapabilities />
        </Container>
      </Grid>
    </Grid>
  );
}
