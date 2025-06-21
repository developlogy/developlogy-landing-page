import { Accordion, AccordionDetails, AccordionSummary, Container, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useState } from 'react';
import FadeInWhenVisible from './Animation';

const faqs = [
  {
    question: 'What makes Developlogy Agency a top choice for website development?',
    answer: 'We combine a strong portfolio, strategic planning, and a results-driven approach to deliver high-performing websites.'
  },
  {
    question: 'What types of website development services do you offer?',
    answer: 'We offer custom websites, e-commerce solutions, redesigns, maintenance, SEO, and more tailored to your needs.'
  },
  {
    question: 'How long does it take to develop a website with Developlogy?',
    answer: 'Depending on complexity, our typical projects range from 2 to 6 weeks including design, development, and testing.'
  },
  {
    question: 'Can you help with website redesigns?',
    answer: 'Absolutely. We specialize in modernizing and rebranding websites for better performance and visual appeal.'
  },
  {
    question: 'What is the cost of website development services at Developlogy?',
    answer: 'Our pricing is project-specific and competitively structured to deliver value. Contact us for a quote.'
  },
  {
    question: 'Do you provide ongoing support and maintenance for websites?',
    answer: 'Yes, we offer flexible support packages for updates, backups, security, and continuous improvements.'
  }
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container sx={{ py: { xs: 6, md: 0 } }}>
      <FadeInWhenVisible>
        <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
          FAQs
        </Typography>
      </FadeInWhenVisible>

      <Box mt={4}>
        {faqs.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              borderRadius: 2,
              border: '1px solid #e0e0e0',
              boxShadow: 'none',
              mb: 2,
              '&:before': { display: 'none' }
            }}
          >
            <AccordionSummary
              expandIcon={<NorthEastIcon sx={{ color: 'primary.main' }} />}
              sx={{
                typography: 'subtitle1',
                fontWeight: 600,
                color: 'primary.main',
                '& .MuiAccordionSummary-content': {
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }
              }}
            >
              {item.question}
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary">
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
