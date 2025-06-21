import { Link as RouterLink } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third-party
import { motion } from 'framer-motion';

// project-imports
import FadeInWhenVisible from './Animation';
import IconButton from 'components/@extended/IconButton';
import MainCard from 'components/MainCard';
import { techData } from 'data/tech-data';
import { useIspValue } from 'hooks/useIspValue';

// assets
import { ExportSquare } from 'iconsax-react';
import GithubIcon from 'assets/third-party/github';

// ==============================|| LANDING - TECHNOLOGIES PAGE ||============================== //

export default function TechnologiesPage() {
  const ispValueAvailable = useIspValue();

  return (
    <Container>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          Our Services
        </Typography>
      </FadeInWhenVisible>

      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        {techData.map((tech, index) => (
          <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
            <FadeInWhenVisible>
              <MainCard
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  image={tech.image}
                  sx={{
                    width: '100%',
                    height: 180,
                    objectFit: 'contain',
                    borderRadius: 1,
                    mb: 2
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {tech.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {tech.description}
                </Typography>
                {tech.url && (
                  <Link component={RouterLink} to={tech.url} underline="none">
                    <IconButton
                      size="large"
                      shape="rounded"
                      color="secondary"
                      variant="light"
                      sx={(theme) => ({
                        bgcolor: 'secondary.light',
                        color: 'secondary.darker',
                        '&:hover': {
                          color: 'secondary.lighter',
                          bgcolor: 'grey.800',
                          svg: { stroke: theme.palette.common.white },
                          ...theme.applyStyles('dark', { color: 'grey.500' })
                        }
                      })}
                    >
                      <GithubIcon />
                    </IconButton>
                  </Link>
                )}
              </MainCard>
            </FadeInWhenVisible>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}