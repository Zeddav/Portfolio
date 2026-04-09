import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaEnvelope,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      form.current.reset();
    } catch (err) {
      console.log(err);
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contactez-moi</h2>
        <p className="contact-subtitle">
          Une question, un projet ? N'hésitez pas à m'écrire !
        </p>

        <div className="contact-card">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="user_name"
                placeholder="Votre nom"
                required
              />
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="user_email"
                placeholder="Votre email"
                required
              />
            </div>

            <div className="input-group textarea-group">
              <textarea
                name="message"
                placeholder="Votre message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={status === "sending" ? "sending" : ""}
            >
              {status === "sending" ? (
                <>
                  <div className="spinner"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Envoyer le message
                </>
              )}
            </button>
          </form>

          {status === "success" && (
            <div className="message-popup success">
              <FaCheckCircle />
              <div>
                <strong>Message envoyé !</strong>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="message-popup error">
              <FaExclamationCircle />
              <div>
                <strong>Erreur d'envoi</strong>
                <p>Une erreur est survenue. Veuillez réessayer.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
