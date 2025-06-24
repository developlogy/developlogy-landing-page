import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, Container, Grid, Link, Typography, Box, IconButton } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ExportSquare } from 'iconsax-react';

// Mock tech data
// Updated techData with links for each service
const techData = [
  {
    label: 'IT Solutions',
    description: 'Comprehensive IT services including infrastructure management, network solutions, and technical support to keep your business running smoothly.',
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#25a1f4',
    link: '/services/it-solutions' // Added link
  },
  {
    label: 'Creative & Advertising',
    description: 'Innovative branding, graphic design, and marketing campaigns that capture attention and drive engagement.',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#f91fa9',
    link: '/services/creative-advertising' // Added link
  },
  {
    label: 'Cloud Solutions',
    description: 'Scalable cloud services including migration, management, and optimization for enhanced business agility.',
    images: [
      'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#7209b7',
    link: '/services/cloud-solutions' // Added link
  },
  {
    label: 'Wikipedia',
    description: 'Professional Wikipedia page creation and editing services to establish your online credibility and presence.',
    images: [
      'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#4cc9f0',
    link: '/services/wikipedia' // Added link
  },
  {
    label: 'SEO & Content',
    description: 'Strategic SEO optimization and high-quality content creation to boost your search rankings and audience engagement.',
    images: [
      'https://images.unsplash.com/photo-1607703703520-bb638e84c0cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#3a0ca3',
    link: '/services/seo-content' // Added link
  },
  {
    label: 'B2B Services',
    description: 'Tailored business-to-business solutions including lead generation, partnership development, and enterprise services.',
    images: [
      'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    ],
    color: '#4361ee',
    link: '/services/b2b-services' // Added link
  }
];

export default function TechnologiesPage() {
  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: true
  };

  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at center, #0f0c29 0%, #302b63 50%, #24243e 100%)',
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
      {/* Floating particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1
        }}
      >
        {[...Array(30)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: [0, 0.7, 0],
              y: ['0%', '100vh'],
              x: [`${Math.random() * 100}%`]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: 'linear'
            }}
            sx={{
              position: 'absolute',
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
              boxShadow: '0 0 5px rgba(249, 31, 169, 0.5), 0 0 10px rgba(37, 161, 244, 0.5)',
              top: '-50px'
            }}
          />
        ))}
      </Box>

      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: 'common.white',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              lineHeight: 1.2
            }}
          >
            Our{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Services
            </Box>
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            We offer comprehensive digital solutions tailored to your business needs, from concept to deployment.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {techData.map((tech, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: `rgba(${parseInt(tech.color.slice(1, 3), 16)}, ${parseInt(tech.color.slice(3, 5), 16)}, ${parseInt(tech.color.slice(5, 7), 16)}, 0.3)`,
                    '&::before': {
                      opacity: 0.2
                    }
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background: `linear-gradient(90deg, ${tech.color}, #f91fa9)`,
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }
                }}
              >
                {/* Image slider */}
                <Box
                  sx={{
                    position: 'relative',
                    height: 200,
                    overflow: 'hidden'
                  }}
                >
                  <Slider {...sliderSettings}>
                    {tech.images.map((img, idx) => (
                      <Box
                        key={idx}
                        component="div"
                        sx={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: 200,
                          width: '100%'
                        }}
                      />
                    ))}
                  </Slider>

                  {/* Floating elements */}
                  <Box
                    component={motion.div}
                    animate={{
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    sx={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, ${tech.color}, #f91fa9)`,
                      opacity: 0.1,
                      filter: 'blur(10px)',
                      zIndex: 1
                    }}
                  />

                  <Box
                    component={motion.div}
                    animate={{
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 2
                    }}
                    sx={{
                      position: 'absolute',
                      bottom: 20,
                      right: 20,
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(45deg, #f91fa9, ${tech.color})`,
                      opacity: 0.1,
                      filter: 'blur(15px)',
                      zIndex: 1
                    }}
                  />
                </Box>

                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 1.5,
                      color: 'common.white',
                      minHeight: 64,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {tech.label}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.7,
                      mb: 3
                    }}
                  >
                    {tech.description}
                  </Typography>

                  <Link
                    component={RouterLink}
                    to={tech.link} // Updated to use the tech.link property
                    underline="none"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: tech.color,
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)',
                        '& .arrow': {
                          transform: 'translateX(5px)'
                        }
                      }
                    }}
                  >
                    Learn more
                    <Box
                      component="span"
                      className="arrow"
                      sx={{
                        ml: 1,
                        transition: 'transform 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                    >
                      →
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 4,
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'common.white'
            }}
          >
            Ready to Transform Your Digital Presence?
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 300,
              mb: 3,
              maxWidth: 600
            }}
          >
            Let's discuss how we can help you achieve your business goals with our cutting-edge solutions.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ExportSquare variant="Bold" />}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 50,
              background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
              boxShadow: '0 10px 20px rgba(37, 161, 244, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 25px rgba(249, 31, 169, 0.4)',
                '&::before': {
                  transform: 'translateX(0)'
                }
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #f91fa9, #25a1f4)',
                zIndex: -1,
                transition: 'transform 0.5s ease',
                transform: 'translateX(-100%)'
              }
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>

      {/* Floating gradient elements */}
      <Box
        component={motion.div}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        sx={{
          position: 'absolute',
          top: '30%',
          left: '10%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
          opacity: 0.1,
          filter: 'blur(40px)',
          zIndex: 1,
          display: { xs: 'none', md: 'block' }
        }}
      />

      <Box
        component={motion.div}
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #f91fa9, #25a1f4)',
          opacity: 0.1,
          filter: 'blur(50px)',
          zIndex: 1,
          display: { xs: 'none', md: 'block' }
        }}
      />
    </Box>
  );
}
