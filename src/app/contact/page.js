"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your form submission logic here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="space-y-8 border-r-0 md:border-r border-gray-200 pr-0 md:pr-12"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <MapPinIcon className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Office</h3>
                  <p className="text-gray-600">123 Innovation Street<br/>Tech Valley, CA 94016</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <PhoneIcon className="h-8 w-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567<br/>Mon-Fri, 9am-5pm PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-xl">
                  <EnvelopeIcon className="h-8 w-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">hello@genzedu.com<br/>support@genzedu.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform, idx) => (
                  <button
                    key={idx}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                  >
                    <span className="sr-only">{platform}</span>
                    <div className="h-6 w-6 bg-gray-400 rounded-full" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                required
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-40"
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <PaperAirplaneIcon className="h-5 w-5 text-white" />
                <span>Send Message</span>
              </button>
            </motion.div>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-4 bg-green-50 text-green-700 rounded-lg"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201550.6796574382!2d-122.08405899114502!3d37.42199987970362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1623257530703!5m2!1sen!2sus"
            className="w-full h-96 border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;