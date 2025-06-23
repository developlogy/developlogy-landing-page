import { Box, Container, Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FadeInWhenVisible from './Animation';

const features = [
  {
    icon: <LayersOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Proven Track Record',
    description: 'Our portfolio is filled with successful projects and satisfied clients.'
  },
  {
    icon: <GroupsOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Customized Strategies',
    description: 'We tailor our website development services to align with your specific business needs.'
  },
  {
    icon: <AttachMoneyOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Experienced Team',
    description: 'Our diverse team consists of website development experts passionate about delivering the best results.'
  },
  {
    icon: <LayersOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Transparent Communication',
    description: 'We believe in clear and honest communication throughout every project.'
  },
  {
    icon: <GroupsOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Results-Driven Approach',
    description: 'We focus on delivering measurable results and high ROI through our website development services.'
  },
  {
    icon: <AttachMoneyOutlinedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'Affordable Pricing',
    description: 'We offer high-quality website development solutions at competitive rates.'
  }
];

export default function WhyChooseUs() {
  return (
    <Container sx={{ py: { xs: 6, md: 0 } }}>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Why Choose Developlogy?
        </Typography>
      </FadeInWhenVisible>

      <Grid
        container
        spacing={3}
        sx={{
          mt: { md: 5, xs: 2.5 },
          mb: { md: 10, xs: 2.5 },
          alignItems: 'stretch'
        }}
      >
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <MainCard
              border
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Box flexGrow={1} display="flex" flexDirection="column" gap={2}>
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
    </Container>
  );
}
