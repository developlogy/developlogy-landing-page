// Updated ContactForm.jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Checkbox, Grid, MenuItem, Stack, TextField, Typography, Box } from '@mui/material';
import emailjs from 'emailjs-com';

const GlassCard = ({ children }) => (
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
      }
    }}
  >
    {children}
  </Box>
);

const sizes = [
  { value: '1', label: '1 - 5' },
  { value: '2', label: '5 - 10' },
  { value: '3', label: '10+' }
];

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    size: '',
    agree: false
  });

  const handleChange = (field) => (event) => {
    const value = field === 'agree' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Please agree to the Terms & Conditions');
      return;
    }

    emailjs.sendForm('service_3ryb7ns', 'template_t7z91j7', form.current, '7KPOS0OJb3w-sFqz7').then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Your message has been sent!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          size: '',
          agree: false
        });
      },
      (error) => {
        console.error('Email sending error:', error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <GlassCard>
      <form ref={form} onSubmit={sendEmail}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: 'common.white',
                background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Get in Touch
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange('firstname')}
                required
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#25a1f4'
                    }
                  }
                }}
              />

              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange('lastname')}
                required
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#25a1f4'
                    }
                  }
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#25a1f4'
                    }
                  }
                }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange('phone')}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#25a1f4'
                    }
                  }
                }}
              />

              <TextField
                select
                fullWidth
                label="Company Size"
                variant="outlined"
                name="size"
                value={formData.size}
                onChange={handleChange('size')}
                sx={{
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  },
                  '& .MuiOutlinedInput-root': {
                    color: 'common.white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#25a1f4'
                    }
                  },
                  '& .MuiSelect-icon': {
                    color: 'rgba(255, 255, 255, 0.7)'
                  }
                }}
              >
                {sizes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" alignItems="center">
              <Checkbox
                checked={formData.agree}
                onChange={handleChange('agree')}
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  '&.Mui-checked': {
                    color: '#25a1f4'
                  }
                }}
              />
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                I agree to all the{' '}
                <Box component="span" sx={{ color: '#25a1f4', cursor: 'pointer' }}>
                  Terms & Conditions
                </Box>
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  background: 'linear-gradient(90deg, #25a1f4, #f91fa9)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  py: 1.5,
                  px: 6,
                  borderRadius: '50px',
                  boxShadow: '0 4px 15px rgba(249, 31, 169, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #1d8fd8, #e01a96)',
                    boxShadow: '0 6px 20px rgba(249, 31, 169, 0.5)'
                  }
                }}
              >
                Submit Request
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </form>
    </GlassCard>
  );
}
