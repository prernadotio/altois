import { useState } from 'react';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import '../styles/Contact.css';

const init = { name: '', email: '', message: '' };

const contactDetails = [
  { icon: <MdLocationOn size={18} />, text: 'Andheri West, Mumbai, Maharashtra' },
  { icon: <MdPhone size={18} />,     text: '+91 98765 43210' },
  { icon: <MdEmail size={18} />,     text: 'hello@gharkhakhana.in' },
  { icon: <MdAccessTime size={18} />,text: 'Mon–Sat: 8am – 8pm' },
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
                <button type="submit" className="btn btn-primary" style={{width:'100%'}}>
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