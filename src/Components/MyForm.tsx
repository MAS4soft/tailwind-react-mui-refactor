import React, { useRef } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";

const MyForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_6ejek2a", "template_0fcv7zw", form.current, "user_YOUR_USER_ID")
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.error("FAILED...", error);
            alert(`Failed to send message. Error: ${error.text}`);
          }
        );
    }
  };

  return (
    <Box
      component="form"
      ref={form}
      onSubmit={sendEmail}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        backgroundColor: "#1a2b44",
        borderRadius: 1,
        boxShadow: 1
      }}
    >
      <Typography variant="h4" component="h1" color="white" gutterBottom>
        Request a Quote
      </Typography>
      <Typography variant="body1" color="white" gutterBottom>
        Ready to Work Together? Build a project with us!
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        label="Name"
        name="user_name"
        required
        margin="normal"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Email"
        name="user_email"
        required
        margin="normal"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Subject"
        name="user_subject"
        required
        margin="normal"
        sx={{ backgroundColor: "white" }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Message"
        name="message"
        required
        margin="normal"
        multiline
        rows={4}
        sx={{ backgroundColor: "white" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          marginTop: 2,
          backgroundColor: "#ffc107",
          "&:hover": {
            backgroundColor: "#e0a800"
          }
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default MyForm;
