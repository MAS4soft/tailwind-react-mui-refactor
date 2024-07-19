import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { Container, TextField, Button, Box, Typography } from "@mui/material";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string().required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", values, "YOUR_USER_ID")
        .then(() => {
          alert("Message Sent!");
          resetForm();
        }, () => {
          alert("An error occurred, please try again.");
        });
    }
  });

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Send Us a Message
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Box>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default ContactForm;

