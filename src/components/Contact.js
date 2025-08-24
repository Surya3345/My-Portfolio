import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "suryasairam444@gmail.com",
      link: "mailto:suryasairam444@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/surya-sairam-doddipatla-303984225/"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/Surya3345"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/yourusername"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.message.trim()) return 'Message is required';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ submitting: false, submitted: false, error: validationError });
      return;
    }
    
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: 'Failed to send message. Please try again later.' 
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              {formStatus.submitted ? (
                <div className="text-center py-8">
                  <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setFormStatus({ ...formStatus, submitted: false })}
                    className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {formStatus.error && (
                      <div className="flex items-center p-3 bg-red-50 text-red-700 rounded-md text-sm">
                        <FaExclamationCircle className="mr-2 flex-shrink-0" />
                        <span>{formStatus.error}</span>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="How can I help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tell me about your project or ask me anything..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus.submitting}
                        className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formStatus.submitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <span>Send Message</span>
                            <FaPaperPlane className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
                  <p className="text-gray-600 text-sm">
                    Have a question or want to work together? Fill out the form or use the contact details below.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="flex items-start text-gray-700 hover:text-blue-600 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <item.icon className="w-5 h-5 mt-0.5 mr-3 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <span className="flex-1">
                        <span className="block text-sm font-medium">{item.title}</span>
                        <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
                
                <div className="pt-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Connect With Me
                  </h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-blue-500 hover:bg-blue-50 transition-colors"
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
