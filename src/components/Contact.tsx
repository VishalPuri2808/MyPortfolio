import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await emailjs.send(
        'service_epgnnif', // Replace with your EmailJS Service ID
        'template_ar1bd9c', // Replace with your EmailJS Template ID
        formData,
        'GmS4A2XWnr-PI6Rcz' // Replace with your EmailJS Public Key
      );

      if (response.status === 200) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });

        // Hide success message after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen pt-24 md:pl-16 px-4 md:px-8 lg:px-16 pb-20 relative">
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-200">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through the form or via my social links.
            </p>

            <div className="space-y-4 mb-8">
              <a 
                href="mailto:pmvishal2808@gmail.com" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>pmvishal2808@gmail.com</span>
              </a>
              <a 
                href="https://github.com/VishalPuri2808" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/VishalPuri2808</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vishalmpuri/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/vishalmpuri</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div 
                  className="text-accent text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✅ Message sent successfully!
                </motion.div>
              )}

              {submitError && (
                <motion.div 
                  className="text-red-500 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ❌ Failed to send message. Try again.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
