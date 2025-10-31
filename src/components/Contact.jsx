import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = ({ darkMode }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Mock submission - will be replaced with backend integration
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. We\'ll get back to you soon!',
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className={`py-20 lg:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <Card
                  className={`p-6 flex items-start space-x-4 transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-cyan-400'
                      : 'bg-gray-50 border-gray-200 hover:border-cyan-400'
                  }`}
                >
                  <div className="p-3 rounded-full bg-cyan-400/10">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium mb-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:hello@temuin.live"
                      className={`text-lg hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      hello@temuin.live
                    </a>
                  </div>
                </Card>

                <Card
                  className={`p-6 flex items-start space-x-4 transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-cyan-400'
                      : 'bg-gray-50 border-gray-200 hover:border-cyan-400'
                  }`}
                >
                  <div className="p-3 rounded-full bg-cyan-400/10">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium mb-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Call / WhatsApp
                    </p>
                    <a
                      href="tel:+6282246680943"
                      className={`text-lg hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      082246680943
                    </a>
                    <p
                      className={`text-sm mt-1 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}
                    >
                      Temuin Team
                    </p>
                  </div>
                </Card>

                <Card
                  className={`p-6 flex items-start space-x-4 transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-cyan-400'
                      : 'bg-gray-50 border-gray-200 hover:border-cyan-400'
                  }`}
                >
                  <div className="p-3 rounded-full bg-cyan-400/10">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-medium mb-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      Location
                    </p>
                    <p
                      className={`text-lg ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Indonesia
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className={`p-8 ${
              darkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`${
                    darkMode
                      ? 'bg-gray-900 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`${
                    darkMode
                      ? 'bg-gray-900 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={`${
                    darkMode
                      ? 'bg-gray-900 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-full py-6 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 group"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
