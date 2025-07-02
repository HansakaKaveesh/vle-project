'use client';
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
    <footer className="relative bg-gradient-to-b from-gray-900/90 to-gray-800/90 text-gray-300 bg-cover bg-center bg-no-repeat bg-[url('/footer.jpg')]">
      {/* Dark overlay (optional) */}
      <div className="absolute inset-0 bg-blue-950/90 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-3xl font-bold mb-4">SynapZ</h2>
            <p className="text-sm leading-relaxed">
              Empowering learners by bridging the gap between technology and education through adaptive and intuitive solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: FaFacebook, label: 'Facebook', href: '#' },
                { Icon: FaTwitter, label: 'Twitter', href: '#' },
                { Icon: FaLinkedin, label: 'LinkedIn', href: '#' },
                { Icon: FaInstagram, label: 'Instagram', href: '#' },
              ].map(({ Icon, label, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm">
              {['Home', 'Courses', 'About Us', 'Contact', 'Blog'].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="mt-1 shrink-0" />
                <address className="not-italic">
                  123 Education Street<br />
                  Tech City, TC 12345
                </address>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope />
                <a
                  href="mailto:info@edusphere.com"
                  className="hover:text-white transition-colors"
                >
                  info@edusphere.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <FaPhone />
                <a
                  href="tel:+11234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Stay up to date with the latest courses and offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-start sm:items-stretch gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                required
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

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-white">SynapZ</strong>. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}