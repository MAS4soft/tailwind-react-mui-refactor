import React, { useState } from 'react';
import { TextField, Button, Box, Typography, FormHelperText } from '@mui/material';

const RequestQuote: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone: string) => {
    const re = /^[0-9]*$/;
    return re.test(phone);
  };

  const handleBlur = (field: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        newErrors.name = name ? '' : 'This field is required.';
        break;
      case 'email':
        if (!email) {
          newErrors.email = 'This field is required.';
        } else if (!validateEmail(email)) {
          newErrors.email = 'Please enter a valid email address.';
        } else {
          newErrors.email = '';
        }
        break;
      case 'phone':
        if (!phone) {
          newErrors.phone = 'This field is required.';
        } else if (!validatePhone(phone)) {
          newErrors.phone = 'Please enter a valid phone number.';
        } else {
          newErrors.phone = '';
        }
        break;
      
      case 'message':
        newErrors.message = message ? '' : 'This field is required.';
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };

    if (!name) newErrors.name = 'This field is required.';
    if (!email) {
      newErrors.email = 'This field is required.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phone) {
      newErrors.phone = 'This field is required.';
    } else if (!validatePhone(phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!message) newErrors.message = 'This field is required.';

    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error !== '')) {
      // Submit the form
      console.log('Form submitted');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'primary.light',
        p: 4,
        borderRadius: 1,
        color: 'white',
        maxWidth: 500,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Request a Quote
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Ready to Work Together? Build a project with us!
      </Typography>
      <TextField
        label="Enter your name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => handleBlur('name')}
        error={!!errors.name}
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
        }}
        InputProps={{
          endAdornment: errors.name ? (
            <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>{errors.name}</FormHelperText>
          ) : null
        }}
      />
      <TextField
        label="Enter your email address"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
        error={!!errors.email}
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
        }}
        InputProps={{
          endAdornment: errors.email ? (
            <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>{errors.email}</FormHelperText>
          ) : null
        }}
      />
      <TextField
        label="Enter your phone number"
        variant="outlined"
        fullWidth
        margin="normal"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        onBlur={() => handleBlur('phone')}
        error={!!errors.phone}
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
        }}
        InputProps={{
          endAdornment: errors.phone ? (
            <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>{errors.phone}</FormHelperText>
          ) : null
        }}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={() => handleBlur('message')}
        error={!!errors.message}
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
        }}
        InputProps={{
          endAdornment: errors.message ? (
            <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>{errors.message}</FormHelperText>
          ) : null
        }}
      />
      <Button variant="contained" color="warning" sx={{ mt: 2 }} onClick={handleSubmit}>
        Send Message
      </Button>
    </Box>
  );
};

export default RequestQuote;
