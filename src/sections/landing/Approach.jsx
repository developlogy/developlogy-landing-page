import { Box, Container, Grid, Typography } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiamondIcon from '@mui/icons-material/Diamond';
import FadeInWhenVisible from './Animation'; // assuming you use this
import MainCard from 'components/MainCard'; // for consistent theme
import approachImage from 'assets/images/services/approach.jpg'; // put your image here

const features = [
  {
    icon: <EmojiObjectsIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Understanding Your Needs',
    description:
      'We begin by diving deep into your business goals and audience. We gather all necessary input to create a clear project roadmap.'
  },
  {
    icon: <DesignServicesIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Custom Design and Development',
    description: 'We create a bespoke website that reflects your brand. Our designs focus on engagement, UX, and visual appeal.'
  },
  {
    icon: <RocketLaunchIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Testing and Quality Assurance',
    description: 'We rigorously test all features to ensure smooth performance—forms, buttons, links, and interactive elements.'
  },
  {
    icon: <DiamondIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Launch and Continuous Support',
    description: 'After launch, we monitor performance and provide ongoing support to ensure everything runs flawlessly.'
  }
];

export default function ApproachSection() {
  return (
    <Container sx={{ py: { xs: 6, md: 0 } }}>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Our Approach
        </Typography>
      </FadeInWhenVisible>

      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        {/* Left: Text */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={4}>
            {features.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <FadeInWhenVisible>
                  <MainCard border>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {item.icon}
                      <Typography variant="h6" fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right: Image */}
        <Grid item xs={12} md={5}>
          <FadeInWhenVisible>
            <Box
              component="img"
              src={approachImage}
              alt="Approach"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
                maxHeight: 500,
                objectFit: 'cover'
              }}
            />
          </FadeInWhenVisible>
        </Grid>
      </Grid>
    </Container>
  );
}
