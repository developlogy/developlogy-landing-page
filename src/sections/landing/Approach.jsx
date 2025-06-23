import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiamondIcon from '@mui/icons-material/Diamond';
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import approachImage from 'assets/images/services/approach.jpg';

const features = [
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 36 }} color="primary" />,
    title: 'Understanding Your Needs',
    description:
      'We begin by diving deep into your business goals and audience. We gather all necessary input to create a clear project roadmap.'
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 36 }} color="primary" />,
    title: 'Custom Design & Development',
    description: 'We create a bespoke website that reflects your brand. Our designs focus on engagement, UX, and visual appeal.'
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 36 }} color="primary" />,
    title: 'Testing & Quality Assurance',
    description: 'We rigorously test all features to ensure smooth performance—forms, buttons, links, and interactive elements.'
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 36 }} color="primary" />,
    title: 'Launch & Continuous Support',
    description: 'After launch, we monitor performance and provide ongoing support to ensure everything runs flawlessly.'
  }
];

export default function ApproachSection() {
  return (
    <Container>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Our Approach
        </Typography>
      </FadeInWhenVisible>

      <Grid container spacing={3} alignItems="stretch" justifyContent="center" sx={{ mt: { md: 5, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={3} sx={{ height: '100%' }}>
            {features.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <MainCard
                  sx={{
                    height: '100%',
                    transition: '0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-4px)'
                    }
                  }}
                  border
                >
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
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
          <Box
            component="img"
            src={approachImage}
            alt="Approach"
            sx={{
              width: '100%',
              borderRadius: 3,
              boxShadow: 4,
              objectFit: 'cover',
              height: '94%' // Ensures full stretch
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
