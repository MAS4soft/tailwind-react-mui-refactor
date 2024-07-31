import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  TextField,
  Button,
  Box,
  Typography,
  FormHelperText,
  CircularProgress,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";

const RequestQuote: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
      case "name":
        newErrors.name = name ? "" : "This field is required.";
        break;
      case "email":
        if (!email) {
          newErrors.email = "This field is required.";
        } else if (!validateEmail(email)) {
          newErrors.email = "Please enter a valid email address.";
        } else {
          newErrors.email = "";
        }
        break;
      case "phone":
        if (!phone) {
          newErrors.phone = "This field is required.";
        } else if (!validatePhone(phone)) {
          newErrors.phone = "Please enter a valid phone number.";
        } else {
          newErrors.phone = "";
        }
        break;
      case "message":
        newErrors.message = message ? "" : "This field is required.";
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setLoading(true);
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!name) newErrors.name = "This field is required.";
    if (!email) {
      newErrors.email = "This field is required.";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      newErrors.phone = "This field is required.";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!message) newErrors.message = "This field is required.";

    setErrors(newErrors);
    if (!Object.values(newErrors).some((error) => error !== "") && form.current) {
      try{
        await emailjs.sendForm('service_szbb8iq', 'template_eoqtyl8', form.current, 'fozYvqgQK65jwJIJc')
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setIsSubmitted(true)
        setLoading(false)
      } catch (error) {
        setIsError(true)
        setLoading(false)
        console.error('Failed to send email. Error:', error)
      }
    } else {
        setLoading(false);
    }
  }


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
          <Snackbar
              open={isSubmitted || isError}
              autoHideDuration={6000}
              onClose={() => setIsSubmitted(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          >
              <Grid>
                  {isSubmitted && (
                      <Alert
                          onClose={() => setIsSubmitted(false)}
                          severity='success'
                          variant='filled'
                          sx={{ width: '100%' }}
                      >
                          Thanks for your message! We will get back to you soon.
                      </Alert>
                  )}
                  {isError && (
                      <Alert onClose={() => setIsError(false)} severity='error' variant='filled' sx={{ width: '100%' }}>
                          Something went wrong. Please try again later.
                      </Alert>
                  )}
              </Grid>
          </Snackbar>
          <Typography variant='h4' gutterBottom>
              Request a Quote
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
              Ready to Work Together? Build a project with us!
          </Typography>
          <form ref={form} onSubmit={handleSubmit}>
              <TextField
                  name='user_name'
                  label='Enter your name'
                  variant='outlined'
                  fullWidth
                  margin='normal'
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
                          <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>
                              {errors.name}
                          </FormHelperText>
                      ) : null,
                  }}
              />
              <TextField
                  name='user_email'
                  label='Enter your email address'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  type='email'
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
                          <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>
                              {errors.email}
                          </FormHelperText>
                      ) : null,
                  }}
              />
              <TextField
                  name='user_phone'
                  label='Enter your phone number'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  type='tel'
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
                          <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>
                              {errors.phone}
                          </FormHelperText>
                      ) : null,
                  }}
              />
              <TextField
                  name='message'
                  label='Message'
                  variant='outlined'
                  fullWidth
                  multiline
                  rows={4}
                  margin='normal'
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
                          <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>
                              {errors.message}
                          </FormHelperText>
                      ) : null,
                  }}
              />
              <Button
                  variant='contained'
                  color='warning'
                  sx={{ mt: 2, height: 32 }}
                  type='submit'
                  disabled={Object.values(errors).some((error) => error !== '')}
              >
                  {!loading ? 'Send Message' : <CircularProgress size={20} />}
              </Button>
          </form>
      </Box>
  )
};

export default RequestQuote