import React, { useRef } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";

export const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        (result) => {
          // Code pour gérer la soumission réussie du formulaire
          console.log("SUCCESS!", result.text);
          // Réinitialiser le formulaire après l'envoi réussi
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          // Code pour gérer l'échec de la soumission du formulaire
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="container mt-5 home">
      <h1 className="contact">Contact</h1>
      <p className="contact-message">
        Merci de visiter mon portfolio ! Que vous ayez des questions, des
        opportunités professionnelles ou des collaborations à proposer,
        n'hésitez pas à me contacter. Je vous répondrai dans les plus brefs
        délais.
      </p>

      <div className="mb-3 mt-3">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="your_name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Courriel
        </label>
        <input
          type="email"
          id="email"
          name="your_email"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};
export default ContactPage;
