import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DiamondIcon from '@mui/icons-material/Diamond';
import approachImage from 'assets/images/services/approach.jpg';

const features = [
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 36 }} />,
    title: 'Understanding Your Needs',
    description:
      'We begin by diving deep into your business goals and audience. We gather all necessary input to create a clear project roadmap.',
    color: '#25a1f4'
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 36 }} />,
    title: 'Custom Design & Development',
    description: 'We create a bespoke website that reflects your brand. Our designs focus on engagement, UX, and visual appeal.',
    color: '#f91fa9'
  },
  {
    icon: <RocketLaunchIcon sx={{ fontSize: 36 }} />,
    title: 'Testing & Quality Assurance',
    description: 'We rigorously test all features to ensure smooth performance—forms, buttons, links, and interactive elements.',
    color: '#7209b7'
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 36 }} />,
    title: 'Launch & Continuous Support',
    description: 'After launch, we monitor performance and provide ongoing support to ensure everything runs flawlessly.',
    color: '#4cc9f0'
  }
];

export default function ApproachSection() {
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
              Approach
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
            We follow a structured, transparent process to transform your vision into a high-performing digital solution.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {/* Left Section - Features Cards */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3} sx={{ height: '100%' }}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: 'flex' }}>
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
                      p: 4,
                      height: '100%',
                      width: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        borderColor: `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.3)`,
                        '&::before': {
                          opacity: 0.2
                        },
                        '& .approach-icon': {
                          background: `linear-gradient(135deg, ${item.color}, #f91fa9)`,
                          color: 'white'
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: `linear-gradient(90deg, ${item.color}, #f91fa9)`,
                        zIndex: 1,
                        opacity: 0,
                        transition: 'opacity 0.4s ease'
                      }
                    }}
                  >
                    <Box
                      className="approach-icon"
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: item.color,
                        fontSize: '2rem',
                        mb: 3,
                        transition: 'all 0.4s ease'
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: 'common.white'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.7
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Section - Animated Image */}
          <Grid item xs={12} md={5} sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                rotate: 1,
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)'
              }}
              sx={{
                width: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                height: '100%',
                minHeight: { xs: 400, md: 'auto' }
              }}
            >
              <Box
                component="img"
                src={approachImage}
                alt="Our Approach"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

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
                  top: 30,
                  left: 30,
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #25a1f4, #f91fa9)',
                  opacity: 0.1,
                  filter: 'blur(20px)',
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
                  bottom: 40,
                  right: 40,
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'linear-gradient(45deg, #f91fa9, #25a1f4)',
                  opacity: 0.1,
                  filter: 'blur(25px)',
                  zIndex: 1
                }}
              />

              <Box
                component={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5
                }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  height: '80%',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Process Flow */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{
            mt: 8,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 2,
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 4,
            maxWidth: 900,
            mx: 'auto'
          }}
        >
          {[
            { title: 'Discovery', color: '#25a1f4' },
            { title: 'Design', color: '#f91fa9' },
            { title: 'Development', color: '#7209b7' },
            { title: 'Testing', color: '#4cc9f0' },
            { title: 'Launch', color: '#3a0ca3' }
          ].map((step, index) => (
            <Box
              key={index}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: step.color,
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.2rem'
                }}
              >
                {index + 1}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: 'common.white',
                  fontWeight: 600,
                  minWidth: 120
                }}
              >
                {step.title}
              </Typography>
              {index < 4 && (
                <Box
                  component={motion.div}
                  // animate={{
                  //   rotate: [0, 10, 0]
                  // }}
                  // transition={{
                  //   duration: 3,
                  //   repeat: Infinity,
                  //   ease: 'easeInOut'
                  // }}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '1.5rem',
                    mx: 1
                  }}
                >
                  →
                </Box>
              )}
            </Box>
          ))}
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
