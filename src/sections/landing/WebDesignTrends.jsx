import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import MainCard from 'components/MainCard';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FadeInWhenVisible from './Animation';

const trends = [
  {
    icon: <LayersOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Minimal and Clean Design',
    description: 'Emphasis on simplicity and clarity for better user experience.',
    active: false
  },
  {
    icon: <GroupsOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Mobile-First Design',
    description: 'Creating websites primarily for mobile phones because of the increasing mobile user base.'
  },
  {
    icon: <AttachMoneyOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Integration of AI and Chatbots',
    description: 'Improving the interaction and support of users with automated tools.'
  },
  {
    icon: <PieChartOutlineIcon sx={{ fontSize: 40 }} />,
    title: 'Animations and Micro-Interactions',
    description: 'Adding subtle animations to make the website more engaging and interactive.'
  },
  {
    icon: <CampaignOutlinedIcon sx={{ fontSize: 40 }} />,
    title: 'Emphasize Accessibility and Inclusion',
    description: 'Design websites that would be accessible to all users, including people with disabilities.'
  }
];

export default function WebDesignTrends() {
  return (
    <Container>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Trends in Web Design in India
        </Typography>
      </FadeInWhenVisible>

      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 5, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        {trends.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MainCard
              sx={{
                p: 3,
                height: '100%',
                bgcolor: item.active ? 'primary.lighter' : 'background.paper',
                boxShadow: item.active ? 4 : 1,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                },
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <Box color={item.active ? 'primary.main' : 'text.secondary'}>{item.icon}</Box>
              <Typography variant="h6" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <MuiLink underline="hover" color="primary" sx={{ mt: 'auto', fontWeight: 500, display: 'inline-flex', gap: 0.5 }}>
                Learn more →
              </MuiLink>
            </MainCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
