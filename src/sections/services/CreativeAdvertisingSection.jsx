import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const CreativeAdvertisingSection = () => {
  const sections = [
    {
      id: 'creative',
      title: 'Creative & Advertising',
      tagline: 'Strategy + design that gets your brand noticed.',
      content: [
        "In today's crowded digital world, it's not enough to just show up — you have to stand out. That's what we help businesses do. Whether it's managing your social media, producing scroll-stopping videos and posts, or building a visual identity that people remember, our goal is simple: make your brand feel real, relatable, and worth paying attention to.",
        "We understand that every brand has its own story, and through strong design and branding, we help you tell it in a way that connects. But it doesn't stop at looks — we also focus on results. With performance marketing, we don't just launch campaigns and hope for the best. We track what works, adjust what doesn't, and aim to get you the clicks, leads, and growth that actually matter.",
        "At the end of the day, it's about combining creativity with strategy — and we're here to make sure your business gets both."
      ],
      services: ['Social Media Management', 'Video and Post Production', 'Design and Branding', 'Performance Marketing']
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

export default CreativeAdvertisingSection;
