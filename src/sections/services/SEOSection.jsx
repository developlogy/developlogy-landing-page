import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const SEOSection = () => {
  const sections = [
    {
      id: 'seo-content',
      title: 'SEO & Content',
      tagline: 'Struggling to get your website noticed? I can help.',
      content: [
        'With a mix of smart SEO strategies and meaningful content creation, I work with you to improve your online presence and bring real results.',
        'Whether you need someone to guide you through the world of search engine optimization or just want better content that actually connects with people, I’ve got you covered.',
        "I also help you set up and manage your Google My Business profile so local customers can find and trust you more easily. It's not about tricks or shortcuts — just honest, effective work that helps your business grow online."
      ],
      services: ['Search Engine Optimization', 'SEO Consultant', 'Content Creation', 'Google My Business']
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
                    <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 3 }}>
                      Services We Offer:
                    </Typography>
                    <Grid container spacing={3}>
                      {section.services.map((service, idx) => (
                        <Grid item xs={12} sm={6} key={idx}>
                          <Box
                            component={motion.div}
                            whileHover={{
                              scale: 1.03,
                              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 3,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.07)',
                              height: '100%',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          >
                            <Box
                              sx={{
                                width: 10,
                                height: 10,
                                borderRadius: '50%',
                                background: idx % 2 === 0 ? '#25a1f4' : '#f91fa9',
                                mr: 2,
                                flexShrink: 0
                              }}
                            />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.85)',
                                fontWeight: 500
                              }}
                            >
                              {service}
                            </Typography>
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

export default SEOSection;
