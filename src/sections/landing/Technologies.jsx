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
      <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid size={12}>
          <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            {techData.map((tech, index) => (
              <Grid key={index} size={{ xs: 12, md: 6, lg: 4 }}>
                <FadeInWhenVisible>
                  <MainCard>
                    <Grid container spacing={2}>
                      <Grid size={12}>
                        <CardMedia
                          component="img"
                          image={tech.image}
                          sx={{
                            width: '100%',
                            height: 180,
                            objectFit: 'contain',
                            borderRadius: 1
                          }}
                        />
                      </Grid>
                      <Grid size={12}>
                        <Typography variant="h4">{tech.label}</Typography>
                      </Grid>
                      <Grid size={12}>
                        <Typography>{tech.description}</Typography>
                      </Grid>
                      <Grid size={12}>
                        <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
                          {!(tech.free == null) && (
                            <Grid>
                              <Link component={RouterLink} to={tech.url}>
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
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
