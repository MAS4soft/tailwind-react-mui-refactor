// src/Components/RequestQuote.tsx

import { useState, useRef } from "react";
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
  useTheme,
} from "@mui/material";

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
const validatePhone = (phone: string) => /^[0-9]*$/.test(phone);

const CustomTextField = ({
  name,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  helperText,
  multiline = false,
  rows = 1,
  InputLabelProps,
  ...rest
}: {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  error: boolean;
  helperText: string;
  multiline?: boolean;
  rows?: number;
  InputLabelProps?: object;
}) => (
  <TextField
    name={name}
    label={label}
    variant='outlined'
    fullWidth
    margin='normal'
    type={type}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    error={error}
    multiline={multiline}
    rows={rows}
    InputLabelProps={InputLabelProps}
    sx={{ bgcolor: 'white', borderRadius: 1 }}
    InputProps={{
      endAdornment: error ? (
        <FormHelperText sx={{ color: 'error.main', bgcolor: 'transparent' }}>
          {helperText}
        </FormHelperText>
      ) : null,
    }}
    {...rest}
  />
);

const RequestQuote: React.FC = () => {
  const theme = useTheme();
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleBlur = (field: string) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [field]: field === 'name'
        ? name ? "" : "This field is required."
        : field === 'email'
        ? !email ? "This field is required." : !validateEmail(email) ? "Please enter a valid email address." : ""
        : field === 'phone'
        ? !phone ? "This field is required." : !validatePhone(phone) ? "Please enter a valid phone number." : ""
        : field === 'message'
        ? message ? "" : "This field is required."
        : ""
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!name) newErrors.name = "This field is required.";
    if (!email) newErrors.email = "This field is required.";
    else if (!validateEmail(email)) newErrors.email = "Please enter a valid email address.";
    if (!phone) newErrors.phone = "This field is required.";
    else if (!validatePhone(phone)) newErrors.phone = "Please enter a valid phone number.";
    if (!message) newErrors.message = "This field is required.";

    setErrors(newErrors);
    if (!Object.values(newErrors).some(error => error !== "") && form.current) {
      try {
        await emailjs.sendForm('service_szbb8iq', 'template_eoqtyl8', form.current, 'fozYvqgQK65jwJIJc');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setIsSubmitted(true);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setLoading(false);
        console.error('Failed to send email. Error:', error);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: theme.palette.secondary.main ,
        p: 4,
        borderRadius: 1,
        color: theme.palette.text.secondary,
        maxWidth: 500,
        margin: 'auto',
      }}
    >
      <Snackbar
        open={isSubmitted || isError}
        autoHideDuration={6000}
        onClose={() => {
          setIsSubmitted(false);
          setIsError(false);
        }}
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
            <Alert
              onClose={() => setIsError(false)}
              severity='error'
              variant='filled'
              sx={{ width: '100%' }}
            >
              Something went wrong. Please try again later.
            </Alert>
          )}
        </Grid>
      </Snackbar>
      <Typography variant='h3' gutterBottom>
        Request a Quote
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        Ready to Work Together? Build a project with us!
      </Typography>
      <form ref={form} onSubmit={handleSubmit}>
        <CustomTextField
          name='user_name'
          label='Enter your name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleBlur('name')}
          error={!!errors.name}
          helperText={errors.name}
          InputLabelProps={{
            sx: { color: 'gray' },
          }}
        />
        <CustomTextField
          name='user_email'
          label='Enter your email address'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleBlur('email')}
          error={!!errors.email}
          helperText={errors.email}
          InputLabelProps={{
            sx: { color: 'gray' },
          }}
        />
        <CustomTextField
          name='user_phone'
          label='Enter your phone number'
          type='tel'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={() => handleBlur('phone')}
          error={!!errors.phone}
          helperText={errors.phone}
          InputLabelProps={{
            sx: { color: 'gray' },
          }}
        />
        <CustomTextField
          name='message'
          label='Message'
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleBlur('message')}
          error={!!errors.message}
          helperText={errors.message}
          InputLabelProps={{
            sx: { color: 'gray' },
          }}
        />
        <Button
          variant='contained'
          color='warning'
          sx={{ mt: 2, height: 32 }}
          type='submit'
          disabled={Object.values(errors).some(error => error !== '')}
        >
          {!loading ? 'Send Message' : <CircularProgress size={20} />}
        </Button>
      </form>
    </Box>
  );
};

export default RequestQuote;
