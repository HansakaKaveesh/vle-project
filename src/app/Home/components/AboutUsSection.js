export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 relative z-10">
              About Our Platform
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of digital education, we create immersive learning experiences that transcend traditional boundaries. Our platform connects <span className="font-semibold text-blue-600">1.5 million learners</span> worldwide with top-tier educational resources.
          </p>
        </div>

        {/* Interactive Cards Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Mission Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Democratize quality education through cutting-edge technology, making learning accessible, engaging, and effective for everyone, everywhere.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
                  #EducationForAll
                </span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">Global Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Create a worldwide learning ecosystem that breaks geographical barriers, fostering cross-cultural collaboration and knowledge exchange.
              </p>
              <div className="mt-6">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">
                  #GlobalLearning
                </span>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-gray-900">Core Values</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                  Learner-centric innovation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                  Ethical technology use
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div>
                  Inclusive community building
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600">5M+</div>
            <div className="mt-2 text-gray-600">Learning Hours</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600">150K+</div>
            <div className="mt-2 text-gray-600">Active Users</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600">200+</div>
            <div className="mt-2 text-gray-600">Courses Offered</div>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-teal-600">50+</div>
            <div className="mt-2 text-gray-600">Global Partners</div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 text-center">
          <a href="/learn-more" className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}