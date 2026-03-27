// FIXED: react-icons/md (2,536 KiB) hataya — inline SVGs se replace kiya

import { useState } from 'react';
import '../styles/Contact.css';

const init = { name: '', email: '', message: '' };

// Inline SVG icons — zero bundle cost
const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);

const contactDetails = [
  { icon: <LocationIcon />, text: 'Andheri West, Mumbai, Maharashtra' },
  { icon: <PhoneIcon />,    text: '+91 98765 43210' },
  { icon: <EmailIcon />,    text: 'hello@gharkhakhana.in' },
  { icon: <ClockIcon />,    text: 'Mon–Sat: 8am – 8pm' },
];

export default function Contact() {
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    setSuccess(true);
    setForm(init);
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have a question or want to place a bulk order? We'd love to hear from you.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Reach out for orders, feedback, or catering enquiries.</p>
            {contactDetails.map(({ icon, text }) => (
              <div className="contact-detail" key={text}>
                <span className="contact-detail-icon">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
          <div className="contact-form">
            {success ? (
              <div className="form-success">🎉 Thanks! We'll get back to you within 24 hours.</div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {[
                  { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Rahul Sharma' },
                  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'rahul@email.com' },
                ].map(({ label, name, type, placeholder }) => (
                  <div className="form-group" key={name}>
                    <label>{label}</label>
                    <input type={type} name={name} placeholder={placeholder}
                      value={form[name]} onChange={handleChange}
                      className={errors[name] ? 'error' : ''} />
                    {errors[name] && <span className="form-error">{errors[name]}</span>}
                  </div>
                ))}
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="I'd like to order daily tiffins..."
                    value={form.message} onChange={handleChange}
                    className={errors.message ? 'error' : ''} />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}