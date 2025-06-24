import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';

const trends = [
  {
    icon: <LayersOutlinedIcon />,
    title: 'Minimal and Clean Design',
    description: 'Emphasis on simplicity and clarity for better user experience with ample white space and intuitive navigation.',
    color: '#25a1f4'
  },
  {
    icon: <GroupsOutlinedIcon />,
    title: 'Mobile-First Design',
    description: "Creating websites primarily for mobile phones to cater to India's rapidly growing mobile user base.",
    color: '#f91fa9'
  },
  {
    icon: <AttachMoneyOutlinedIcon />,
    title: 'AI and Chatbots Integration',
    description: 'Enhancing user interaction and support with intelligent automated tools and conversational interfaces.',
    color: '#7209b7'
  },
  {
    icon: <PieChartOutlineIcon />,
    title: 'Animations and Micro-Interactions',
    description: 'Adding subtle animations to create engaging, interactive experiences that delight users.',
    color: '#4cc9f0'
  },
  {
    icon: <CampaignOutlinedIcon />,
    title: 'Accessibility and Inclusion',
    description: 'Designing websites accessible to all users, including people with various disabilities.',
    color: '#3a0ca3'
  },
  {
    icon: <DesignServicesOutlinedIcon />,
    title: 'Dark Mode Design',
    description: 'Implementing dark color schemes to reduce eye strain and improve battery life on devices.',
    color: '#4361ee'
  }
];

export default function WebDesignTrends() {
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
            Web Design{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Trends
            </Box>{' '}
            in India
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
            Discover the latest innovations shaping digital experiences across India's diverse digital landscape.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {trends.map((item, index) => (
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
                  p: 4,
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    borderColor: `rgba(${parseInt(item.color.slice(1, 3), 16)}, ${parseInt(item.color.slice(3, 5), 16)}, ${parseInt(item.color.slice(5, 7), 16)}, 0.3)`,
                    '&::before': {
                      opacity: 0.2
                    },
                    '& .trend-icon': {
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
                  className="trend-icon"
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: item.color,
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
                    lineHeight: 1.7,
                    mb: 3
                  }}
                >
                  {item.description}
                </Typography>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: item.color,
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
            mx: 'auto',
            textAlign: 'center'
          }}
        >
          <Box>
            <Typography
              variant="h4"
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
              78%
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              of Indian users prefer mobile browsing
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
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
              62%
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              growth in AI adoption for websites
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
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
              3.5×
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              more engagement with animations
            </Typography>
          </Box>
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
