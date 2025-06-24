import { useState } from 'react';
import { Container, Typography, Box, Stack, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What makes Developlogy Agency a top choice for website development?',
    answer:
      'We combine a strong portfolio, strategic planning, and a results-driven approach to deliver high-performing websites that drive real business growth. Our team of experts brings years of experience in creating visually stunning and technically superior digital solutions.'
  },
  {
    question: 'What types of website development services do you offer?',
    answer:
      'We offer a comprehensive suite of services including custom websites, e-commerce solutions, responsive redesigns, ongoing maintenance, SEO optimization, and performance analytics. Each solution is tailored to meet your specific business objectives and user needs.'
  },
  {
    question: 'How long does it take to develop a website with Developlogy?',
    answer:
      'Our typical projects range from 2 to 6 weeks depending on complexity. We follow an agile development process with milestones at each phase: discovery (1 week), design (1-2 weeks), development (2-3 weeks), and testing/launch (1 week).'
  },
  {
    question: 'Can you help with website redesigns?',
    answer:
      'Absolutely. We specialize in modernizing and rebranding websites to improve both visual appeal and performance. Our redesign process focuses on enhancing user experience, optimizing conversion paths, and implementing modern design trends while maintaining your brand identity.'
  },
  {
    question: 'What is the cost of website development services at Developlogy?',
    answer:
      'Our pricing is project-specific and structured to deliver maximum value. Basic websites start at $3,500, while comprehensive e-commerce solutions begin at $8,000. We provide detailed quotes after understanding your specific requirements and business goals.'
  },
  {
    question: 'Do you provide ongoing support and maintenance for websites?',
    answer:
      'Yes, we offer flexible support packages including monthly updates, security monitoring, performance optimization, and content management. Our maintenance plans ensure your website remains secure, up-to-date, and continues to perform at its best.'
  }
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
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
        {[...Array(20)].map((_, i) => (
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
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
              Frequently{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Asked
              </Box>{' '}
              Questions
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
              Find answers to common questions about our services, processes, and how we can help transform your digital presence.
            </Typography>
          </Box>
        </motion.div>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{ mb: 3 }}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: expandedIndex === index ? 'rgba(37, 161, 244, 0.3)' : 'rgba(255, 255, 255, 0.3)'
                  }
                }}
                onClick={() => toggleFAQ(index)}
              >
                <Box
                  sx={{
                    p: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: expandedIndex === index ? 'rgba(37, 161, 244, 0.1)' : 'transparent'
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{
                      fontWeight: 600,
                      color: expandedIndex === index ? '#25a1f4' : 'common.white',
                      pr: 2,
                      textAlign: 'left'
                    }}
                  >
                    {item.question}
                  </Typography>

                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: expandedIndex === index ? '#25a1f4' : 'rgba(255, 255, 255, 0.7)'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </Box>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <Box
                        sx={{
                          p: 3,
                          background: 'rgba(0, 0, 0, 0.1)',
                          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.7
                          }}
                        >
                          {item.answer}
                        </Typography>
                      </Box>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </motion.div>
          ))}
        </Box>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          sx={{
            mt: 6,
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: 4,
            maxWidth: 700,
            mx: 'auto'
          }}
        >
          <Typography variant="h5" sx={{ color: 'common.white', mb: 2 }}>
            Still have questions?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
            Our team is ready to answer any questions you might have about our services or processes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
                background: 'linear-gradient(90deg, #1d8fd8, #e01a96)',
                boxShadow: '0 15px 25px rgba(249, 31, 169, 0.4)'
              }
            }}
          >
            Contact Us
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
