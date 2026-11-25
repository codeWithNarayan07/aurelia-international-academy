import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name.";

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!form.subject.trim()) newErrors.subject = "Please select a subject.";
    if (!form.message.trim()) newErrors.message = "Please enter your message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h2>
          Let's begin a conversation.
          <br />
          <span>We're here to help.</span>
        </h2>
        <p>
          Have questions about admissions or school life? Our team would be
          delighted to hear from you.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <span className="eyebrow">CONTACT AURELIA</span>
          <h3>Every great journey starts with a conversation.</h3>
          <p>
            Reach out to our admissions team for programme information, campus
            enquiries and admissions guidance.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <strong>admissions@aureliaacademy.edu</strong>
          </div>

          <div className="contact-detail">
            <span>Phone</span>
            <strong>+91 98765 43210</strong>
          </div>

          <div className="contact-detail">
            <span>Campus</span>
            <strong>Bengaluru, Karnataka, India</strong>
          </div>

          <div className="contact-detail">
            <span>Office Hours</span>
            <strong>Monday – Saturday, 9 AM – 4 PM</strong>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h3>Send us an enquiry</h3>
          <p>Complete the form and our team will be in touch.</p>

          {submitted && (
            <div className="form-success" role="status">
              Thank you! Your enquiry has been validated successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
                {errors.name && <small>{errors.name}</small>}
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {errors.email && <small>{errors.email}</small>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength="10"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && <small>{errors.phone}</small>}
              </div>

              <div className="form-field">
                <label htmlFor="subject">Enquiry Type *</label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Academics">Academics</option>
                  <option value="Campus Visit">Campus Visit</option>
                  <option value="Other">Other</option>
                </select>
                {errors.subject && <small>{errors.subject}</small>}
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
              />
              {errors.message && <small>{errors.message}</small>}
            </div>

            <button type="submit" className="contact-submit">
              Submit Enquiry <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
