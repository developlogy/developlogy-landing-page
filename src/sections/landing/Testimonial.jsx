import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

// ================================|| SLIDER - ITEMS ||================================ //

function TestimonialItem({ item }) {
  return (
    <Box
      component={motion.div}
      whileHover={{
        y: -10,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
      }}
      sx={{
        width: { xs: '300px', md: '420px' },
        cursor: 'pointer',
        my: 1.5,
        mx: 1.5,
        p: 3,
        borderRadius: 3,
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
          zIndex: 1
        }
      }}
    >
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Avatar
          alt="Avatar"
          sx={{
            width: 60,
            height: 60,
            border: '2px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
          }}
          src={item.image}
        />
        <Stack>
          <Typography
            component="blockquote"
            sx={{
              fontStyle: 'italic',
              position: 'relative',
              pl: 2,
              color: 'rgba(255, 255, 255, 0.9)',
              '&::before': {
                content: '"“"',
                position: 'absolute',
                left: -5,
                top: -15,
                fontSize: '3rem',
                color: 'rgba(255, 255, 255, 0.1)',
                fontFamily: 'Georgia, serif',
                lineHeight: 1
              }
            }}
          >
            {item.text}
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Typography
              component="span"
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {item.name}
            </Typography>
            {' - '}
            <Typography
              component="span"
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                fontStyle: 'italic'
              }}
            >
              {item.designation}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

// ==============================|| LANDING - TestimonialPage ||============================== //

export default function TestimonialPage() {
  const theme = useTheme();

  const items = [
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Code quality is amazing. Design is astonishing. Very easy to customize and any developer can use it with ease.',
      name: 'Shahab Blouch',
      designation: 'Senior Developer'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'I get all what I need for my project from this template so I can focus to back end side. The template looks fantastic!',
      name: 'Men Hook',
      designation: 'Product Manager'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: "The design system is incredibly intuitive. It has dramatically improved our team's productivity and consistency.",
      name: 'Dimas Ferian',
      designation: 'UI/UX Designer'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Amazing template for fast development. We cut our development time by 40% after switching to this framework.',
      name: 'Dev Bardbudist',
      designation: 'Lead Developer'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      text: 'The author is very responsive and solved my problem immediately. Customer support exceeded my expectations.',
      name: 'Richit Ela',
      designation: 'CTO'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'I love the aesthetic of Developlogy. The carefully chosen color palette creates a truly premium experience.',
      name: 'Rite Logic',
      designation: 'Creative Director'
    },
    {
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
      text: 'The documentation is comprehensive and well-organized. It made onboarding our team incredibly smooth.',
      name: 'Mac Ugi',
      designation: 'Engineering Manager'
    },
    {
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      text: 'An amazing template with very good design, excellent code quality, and outstanding customer support.',
      name: 'Sarah Johnson',
      designation: 'Frontend Lead'
    }
  ];

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
        <Grid container justifyContent="center" sx={{ textAlign: 'center', mb: 8 }}>
          <Grid item xs={12} md={8}>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
                They{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  love
                </Box>{' '}
                Developlogy, now it's your turn 😍
              </Typography>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
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
                We take pride in our Dashboard & Website development, which has been consistently rated 4.8/5 by our satisfied customers. It
                brings us joy to share the positive feedback we've received from our loyal clients.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Stats counter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          sx={{ mb: 6 }}
        >
          <Grid container justifyContent="center" spacing={4} sx={{ textAlign: 'center' }}>
            {[
              { value: '4.8/5', label: 'Average Rating' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '1.2K+', label: 'Active Users' },
              { value: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <Grid item key={index}>
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
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Testimonial marquees */}
        <Box sx={{ mb: 4 }}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Marquee pauseOnHover speed={40} gradient={false} style={{ overflow: 'hidden' }}>
              {items.slice(0, 4).map((item, index) => (
                <TestimonialItem key={index} item={item} />
              ))}
            </Marquee>
          </motion.div>
        </Box>

        <Box sx={{ mb: 4 }}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Marquee pauseOnHover speed={40} direction="right" gradient={false} style={{ overflow: 'hidden' }}>
              {items.slice(4).map((item, index) => (
                <TestimonialItem key={index} item={item} />
              ))}
            </Marquee>
          </motion.div>
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

TestimonialItem.propTypes = { item: PropTypes.object };
