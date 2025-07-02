import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

const features = [
  {
    icon: <LayersOutlinedIcon />,
    title: 'Proven Track Record',
    description: 'Our portfolio is filled with successful projects and satisfied clients across various industries.'
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: 'Customized Strategies',
    description: 'We tailor our website development services to align with your specific business goals and target audience.'
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    title: 'Experienced Team',
    description: 'Our diverse team consists of website development experts passionate about delivering exceptional results.'
  },
  {
    icon: <DesignServicesOutlinedIcon />,
    title: 'Modern Design',
    description: 'We create visually stunning, user-friendly interfaces that captivate your audience and enhance engagement.'
  },
  {
    icon: <ChatOutlinedIcon />,
    title: 'Transparent Communication',
    description: 'We believe in clear and honest communication throughout every phase of your project.'
  },
  {
    icon: <TrendingUpOutlinedIcon />,
    title: 'Results-Driven Approach',
    description: 'We focus on delivering measurable results and high ROI through our website development services.'
  }
];

export default function WhyChooseUs() {
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
            Why Choose{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Developlogy?
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
            We combine technical expertise with creative vision to deliver exceptional digital experiences that drive business growth and
            exceed expectations.
          </Typography>
        </Box>

        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'center'
          }}
        >
          {features.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
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
                    borderColor: 'rgba(37, 161, 244, 0.3)',
                    '&::before': {
                      opacity: 0.2
                    },
                    '& .feature-icon': {
                      background: 'linear-gradient(135deg, #25a1f4, #f91fa9)',
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
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    zIndex: 1,
                    opacity: 0,
                    transition: 'opacity 0.4s ease'
                  }
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#25a1f4',
                    fontSize: '2.5rem',
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
                    color: 'common.white',
                    minHeight: 64,
                    display: 'flex',
                    alignItems: 'center'
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

        {/* Stats section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          sx={{
            mt: 10,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 6,
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
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Projects Completed' },
            { value: '2', label: 'Years Experience' },
            { value: '4.8/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <Box
              key={index}
              sx={{
                textAlign: 'center',
                minWidth: 150
              }}
            >
              <Typography
                variant="h3"
                component="div"
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {stat.label}
              </Typography>
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
