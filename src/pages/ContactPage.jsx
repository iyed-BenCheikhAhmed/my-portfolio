import React, { useState } from 'react';
import './ContactPage.css';
function ContactPage() {
  // États pour gérer le formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;   // email - value
    setFormData({
      ...formData,
      [name]: value
    });
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 2) {
      newErrors.message = 'Message must contain at least 2 characters';
    }

    return newErrors;
  };

  // Fonction pour gérer la soumission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Construction du mailto link
    const subject = encodeURIComponent(`Message de ${formData.nom}`);
    const body = encodeURIComponent(
      `Nom: ${formData.nom}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:iyedbencheikhahmed@gmail.com?subject=${subject}&body=${body}`;

    // Ouvrir le client email
    window.location.href = mailtoLink;

    // Afficher le message de succès
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({ nom: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 500);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Contact Me</h1>
          <p className="page-subtitle">
            Have a question? A project? Feel free to contact me!
          </p>
        </div>

        <div className="contact-content">
          {/* Formulaire */}
          <div className="contact-form-section">
            <h2 className="section-title">📧 Send Me a Message</h2>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message sent successfully!</h3>
                <p>I will reply to you as soon as possible.</p>
              </div>
            ) : (
              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="nom">Full Name *</label>
                  <input
                    id="nom"
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={loading}
                    className={errors.nom ? 'error' : ''}
                  />
                  {errors.nom && <span className="error-text">{errors.nom}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    disabled={loading}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows="6"
                    disabled={loading}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-submit"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            )}
          </div>

          {/* Informations de contact */}
          <div className="contact-info-section">
            <h2 className="section-title">📞 Contact Information</h2>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="card-icon">📧</div>
                <h3>Email</h3>
                <p>iyedbencheikhahmed@gmail.com</p>
                <a href="mailto:iyed.bencheikhahmed@isgb.ucar.tn">Send me an email</a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📱</div>
                <h3>Phone</h3>
                <p>+216 93 555 555</p>
                <a href="tel:+21655555555">Call me</a>
              </div>

              <div className="contact-card">
                <div className="card-icon">📍</div>
                <h3>Location</h3>
                <p>Bizerte, Tunisia</p>
                <a href="https://www.google.com/maps/place/ISGB+:+Institut+Sup%C3%A9rieur+De+Gestion+De+Bizerte/@37.055083,9.9262005,9.23z/data=!4m10!1m2!2m1!1sisgb!3m6!1s0x12fd35ab56f77281:0xa341ba2aac3e7135!8m2!3d36.8208614!4d10.1799122!15sCgRpc2dikgERcHVibGljX3VuaXZlcnNpdHngAQA!16s%2Fg%2F11fn6m8jgh?authuser=0&entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                  View on map
                </a>
              </div>
            </div>

            {/* Social networks */}
            <div className="social-section">
              <h3>Find me on:</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/iyed-ben-cheikh-ahmed/" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                  LinkedIn
                </a>
                <a href="https://github.com/iyed-BenCheikhAhmed" target="_blank" rel="noopener noreferrer" className="social-btn github">
                  GitHub
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;