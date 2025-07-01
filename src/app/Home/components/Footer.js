import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">GenZedu</h3>
            <p className="text-sm leading-relaxed">
              Transforming education through innovative technology and personalized learning experiences.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Courses</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-sm">
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="mt-1" />
              <p>
                123 Education Street<br />
                Tech City, TC 12345
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope />
              <a href="mailto:info@edusphere.com" className="hover:text-white transition-colors">
                info@edusphere.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone />
              <a href="tel:+11234567890" className="hover:text-white transition-colors">
                +1 (123) 456-7890
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm">Subscribe to get updates on new courses and special offers.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          &copy; 2024 GenZedu. All rights reserved. |
          <a href="#" className="ml-2 hover:text-white transition-colors">Privacy Policy</a> |
          <a href="#" className="ml-2 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
