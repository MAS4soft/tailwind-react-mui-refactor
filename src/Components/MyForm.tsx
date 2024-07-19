import { useRef } from "react";
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
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Phone</label>
        <input type="text" name="user_phone" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default MyForm;
