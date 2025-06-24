import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const WikipediaServicesSection = () => {
  const sections = [
    {
      id: 'wikipedia',
      title: 'Wikipedia Services',
      tagline: 'Credibility, visibility, and compliance — done right.',
      content: [
        "Having a Wikipedia page can add real trust to your name — but getting there isn't as simple as hitting 'publish.' At Delelplogy, we help individuals, brands, and businesses build a strong, lasting presence on one of the most respected platforms on the web.",
        "We take care of the entire process — from page creation to regular monitoring and maintenance — making sure everything stays accurate, up to date, and within Wikipedia's strict guidelines. Our team handles both new and existing pages, offering page editing services that clean up outdated info or improve how your story is told.",
        "Every article we work on starts with solid, well-researched content writing. We focus on facts, not fluff — because getting a page approved (and keeping it live) takes more than just good writing. It takes experience, and that's exactly what we bring."
      ],
      services: ['Page Creation', 'Page Editing', 'Monitoring and Maintenance', 'Content Writing']
    }
  ];

  const GlassCard = ({ children, sx = {} }) => (
    <Box
      sx={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        p: 4,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
        },
        ...sx
      }}
    >
      {children}
    </Box>
  );

  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            'radial-gradient(circle at 10% 20%, rgba(249, 31, 169, 0.1) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(37, 161, 244, 0.1) 0%, transparent 20%)',
          zIndex: 0
        }
      }}
    >
      {/* Floating particles would go here */}

      <Container sx={{ position: 'relative', zIndex: 2, mt: 4 }}>
        {sections.map((section) => (
          <Box key={section.id} sx={{ mb: 8 }}>
            <GlassCard>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {section.title}
                </Typography>

                {section.tagline && (
                  <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    {section.tagline}
                  </Typography>
                )}

                {section.content.map((paragraph, idx) => (
                  <Typography key={idx} variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8 }}>
                    {paragraph}
                  </Typography>
                ))}

                {section.services.length > 0 && (
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                      Services:
                    </Typography>
                    <Grid container spacing={2}>
                      {section.services.map((service, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Box
                            component={motion.div}
                            whileHover={{ x: 5 }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 2,
                              borderRadius: 1,
                              background: 'rgba(255, 255, 255, 0.05)'
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: idx % 2 === 0 ? '#25a1f4' : '#f91fa9',
                                mr: 2
                              }}
                            />
                            <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{service}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Stack>
            </GlassCard>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default WikipediaServicesSection;
