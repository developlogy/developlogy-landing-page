import { Box, Container, Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

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
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
        Why Choose Developlogy?
      </Typography>

      <Grid container spacing={4} mt={2}>
        {features.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MainCard
              border
              boxShadow
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                textAlign: 'left'
              }}
            >
              {item.icon}
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
