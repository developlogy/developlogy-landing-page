import { useRef, useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid2';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// email functionality dependency
import emailjs from 'emailjs-com';

// select company-size
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
    size: ''
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3ryb7ns', 'template_t7z91j7', form.current, '7KPOS0OJb3w-sFqz7').then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Your message has been sent!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          size: ''
        });

        // Redirect to homepage
        window.location.href = '/';
      },
      (error) => {
        console.error('Email sending error:', error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <Box sx={{ p: { xs: 2.5, sm: 0 } }}>
      <form ref={form} onSubmit={sendEmail}>
        <Grid
          container
          spacing={5}
          sx={{ alignItems: 'center', justifyContent: 'center', mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}
        >
          <Grid size={{ xs: 12, sm: 10, lg: 6 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1" color="secondary">
                    First Name
                  </Typography>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange('firstname')}
                  />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1" color="secondary">
                    Last Name
                  </Typography>
                  <TextField
                    fullWidth
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange('lastname')}
                  />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1" color="secondary">
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                  />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack sx={{ gap: 1 }}>
                  <Typography variant="subtitle1" color="secondary">
                    Phone Number
                  </Typography>
                  <TextField
                    fullWidth
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                  />
                </Stack>
              </Grid>
              <Grid size={12}>
                <TextField select fullWidth name="size" value={formData.size} onChange={handleChange('size')}>
                  <MenuItem disabled value="">
                    Select Company Size
                  </MenuItem>
                  {sizes.map((option, index) => (
                    <MenuItem key={index} value={option.label}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={12}>
                <Stack direction="row" sx={{ alignItems: 'center', ml: -1 }}>
                  <Checkbox defaultChecked />
                  <Typography>
                    I agree to all the{' '}
                    <Typography component="span" sx={{ color: 'primary.main', cursor: 'pointer' }}>
                      Terms & Condition
                    </Typography>
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={12}>
                <Button variant="contained" fullWidth type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
