import Head from 'next/head';
import { 
  FaMapMarkerAlt, FaPhone, FaMap, FaFacebook, FaInstagram, FaEnvelope, 
  FaLinkedin, FaUser, FaComment, FaPaperPlane, FaEdit, FaClock, 
  FaBuilding, FaCity, FaPhoneVolume, FaFax, FaEnvelopeOpenText, FaQuestionCircle
} from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Let's start a conversation! Whether you have questions, suggestions, or just want to connect, we're all ears.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-blue-500">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl shadow-lg">
                  <FaMapMarkerAlt className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Headquarters</h3>
                  <div className="text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <FaBuilding className="w-5 h-5 mr-2 text-blue-500" />
                      123 Education Street
                    </p>
                    <p className="flex items-center">
                      <FaCity className="w-5 h-5 mr-2 text-blue-500" />
                      Knowledge City, LN 4567
                    </p>
                    <a href="#map" className="mt-4 inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-all">
                      <FaMap className="mr-2 h-5 w-5" />
                      View on Map
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-green-500">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl shadow-lg">
                  <FaPhoneVolume className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact Numbers</h3>
                  <div className="text-gray-600 space-y-3">
                    <a href="tel:+15551234567" className="flex items-center hover:text-green-700 group transition-colors">
                      <FaPhone className="w-5 h-5 mr-2 text-green-500" />
                      +1 (555) 123-4567
                    </a>
                    <a href="tel:+15551234568" className="flex items-center hover:text-green-700 group transition-colors">
                      <FaFax className="w-5 h-5 mr-2 text-green-500" />
                      +1 (555) 123-4568 (Fax)
                    </a>
                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700 flex items-center">
                        <FaClock className="w-4 h-4 mr-2" />
                        Mon-Fri: 8am - 6pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Card */}
            <div className="relative group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-purple-500">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl shadow-lg">
                  <FaEnvelopeOpenText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect With Us</h3>
                  <div className="text-gray-600 space-y-4">
                    <a href="mailto:support@vle.com" className="flex items-center hover:text-purple-700 group transition-colors">
                      <FaEnvelope className="w-5 h-5 mr-2 text-purple-500" />
                      support@vle.com
                    </a>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-3">Follow our journey:</p>
                      <div className="flex space-x-4">
                        {[
                          { icon: FaFacebook, color: 'text-blue-600' },
                          { icon: FaInstagram, color: 'text-pink-500' },
                          { icon: FaLinkedin, color: 'text-blue-700' },
                        ].map((SocialIcon, index) => (
                          <a key={index} href="#" className={`p-3 bg-white hover:bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all ${SocialIcon.color}`}>
                            <SocialIcon.icon className="h-6 w-6" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-blue-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent">
              Drop Us a Line
            </h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-transparent peer"
                    placeholder="John Doe"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute left-4 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Full Name
                  </label>
                  <FaUser className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-transparent peer"
                    placeholder="john@example.com"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-4 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Email Address
                  </label>
                  <FaEnvelope className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
                </div>
              </div>

              {/* Subject Input */}
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-transparent peer"
                  placeholder="How can we help?"
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-4 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Subject
                </label>
                <FaComment className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-blue-500" />
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-transparent peer"
                  placeholder="Write your message here..."
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 -top-2.5 px-1 bg-white text-sm font-medium text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Your Message
                </label>
                <FaEdit className="absolute right-5 top-4 text-gray-400 peer-focus:text-blue-500" />
              </div>

              {/* Newsletter Subscription and Submit Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
                    Subscribe to newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center px-8 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:scale-105"
                >
                  <FaPaperPlane className="mr-2 h-5 w-5 animate-pulse" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
         </div>


          
      {/* Q&A Section */}
<div className="mt-16">
<div className="flex items-center justify-center h-32"> {/* Adjust h-32 to your desired height */}
  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent">
    Frequently Asked Questions
  </h2>
</div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
    {/* Column 1 */}
    <div className="space-y-6">
      {/* Q&A Item 1 */}
      <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-200 hover:border-blue-500">
        <div className="flex items-start space-x-4">
          <FaQuestionCircle className="flex-shrink-0 text-blue-500 mt-1 w-6 h-6" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">How can I update my account information?</h3>
            <p className="mt-2 text-gray-600">You can update your account details at any time by visiting the 'My Profile' section in your dashboard.</p>
          </div>
        </div>
      </div>

      {/* Q&A Item 2 */}
      <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-200 hover:border-blue-500">
        <div className="flex items-start space-x-4">
          <FaQuestionCircle className="flex-shrink-0 text-blue-500 mt-1 w-6 h-6" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">What's your typical response time?</h3>
            <p className="mt-2 text-gray-600">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Column 2 */}
    <div className="space-y-6">
      {/* Q&A Item 3 */}
      <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-200 hover:border-blue-500">
        <div className="flex items-start space-x-4">
          <FaQuestionCircle className="flex-shrink-0 text-blue-500 mt-1 w-6 h-6" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Do you offer 24/7 support?</h3>
            <p className="mt-2 text-gray-600">Our standard support hours are Mon-Fri 8am-6pm EST. For emergency after-hours support, please call our main number and follow the prompts.</p>
          </div>
        </div>
      </div>

      {/* Q&A Item 4 */}
      <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-blue-200 hover:border-blue-500">
        <div className="flex items-start space-x-4">
          <FaQuestionCircle className="flex-shrink-0 text-blue-500 mt-1 w-6 h-6" />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Where can I find documentation?</h3>
            <p className="mt-2 text-gray-600">Comprehensive documentation and user guides are available in our Help Center. You can access it through your account dashboard or our website footer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>

    </div>
  );
}