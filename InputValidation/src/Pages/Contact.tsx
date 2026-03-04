import React from "react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    alert(`✅ Message sent successfully!\n\nWe'll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <div className="page-header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you</p>
        </div>

        <div className="contact-form-wrapper">
          <div className="card">
            <h2 className="card-title">Send us a message</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="message-textarea"
                />
              </div>

              <button type="submit" className="login-button">
                Send Message
              </button>
            </form>
          </div>

          <div className="content-grid contact-info">
            <div className="feature-card">
              <h3>📧 Email</h3>
              <p>contact@myapp.com</p>
            </div>
            <div className="feature-card">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
