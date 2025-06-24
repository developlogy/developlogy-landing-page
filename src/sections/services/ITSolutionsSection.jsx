import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const ITSolutionsSection = () => {
  const sections = [
    {
      id: 'it',
      title: 'IT Solutions',
      tagline: 'Custom tech that solves real business problems.',
      content: [
        "Not every business needs a fancy app or complex system — but when you do need something built, it should actually work the way you need it to. That's what we focus on at Delelplogy. Our team builds software solutions that are clean, reliable, and built around your real-world needs — not guesswork or shortcuts.",
        "Whether it's a fast, responsive website that reflects your brand, or a custom mobile app designed to make your product easier to access, we approach every project with one goal: keep it simple, smart, and scalable. We don't overcomplicate. We listen, plan, and build tech that makes sense — for your business, your team, and your users.",
        "At the end of the day, it's not just about code — it's about solving problems. And that's what Delelplogy is here to do."
      ],
      services: ['Software Solutions', 'Web Development', 'Mobile App Development']
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
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                          <Box
                            component={motion.div}
                            whileHover={{ scale: 1.03 }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              p: 3,
                              borderRadius: 2,
                              background: 'rgba(255, 255, 255, 0.05)',
                              height: '100%',
                              minHeight: 100
                            }}
                          >
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                borderRadius: '50%',
                                background: idx % 2 === 0 ? '#25a1f4' : '#f91fa9',
                                mr: 2,
                                flexShrink: 0
                              }}
                            />
                            <Typography
                              variant="subtitle1"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
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

export default ITSolutionsSection;
