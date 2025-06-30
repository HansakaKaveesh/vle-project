export default function AboutUs() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl sm:text-5xl font-bold text-gray-900 mb-6 relative z-10">
              About Our Platform
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
          </div>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are redefining education for the digital generation. Our mission is to empower <span className="text-blue-600 font-semibold">1.5 million+</span> learners worldwide through personalized, syllabus-focused, and engaging digital learning experiences designed specifically for <strong>IGCSE</strong> and <strong>IAL</strong> success.
          </p>
        </div>

        {/* Mission • Vision • Values */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Mission Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h3>
              <ul className="mt-4 text-gray-600 space-y-2 list-disc list-inside">
                <li>Deliver syllabus-aligned content for IGCSE & IAL learners</li>
                <li>Promote deep understanding through interactive digital tools</li>
                <li>Build an inclusive, globally connected learning community</li>
                <li>Support learner motivation, confidence, and success</li>
              </ul>
              <div className="mt-6">
                <span className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full font-medium text-sm">
                  #EducationForAll
                </span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Global Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To become the most trusted and transformative online education hub for students preparing for Cambridge IGCSE and Edexcel IAL examinations across the globe.
              </p>
              <div className="mt-6">
                <span className="inline-block bg-purple-50 text-purple-600 px-4 py-2 rounded-full font-medium text-sm">
                  #GlobalLearning
                </span>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="relative group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-8">Our Core Values</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 text-sm">
                {[
                  "Excellence", 
                  "Personalization", 
                  "Innovation", 
                  "Integrity", 
                  "Empowerment", 
                  "Inclusivity", 
                  "Collaboration", 
                  "Responsibility"
                ].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 mr-2 bg-teal-500 rounded-full"></div> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "5M+", label: "Learning Hours", color: "text-blue-600" },
            { number: "150K+", label: "Active Learners", color: "text-purple-600" },
            { number: "200+", label: "Courses Offered", color: "text-green-600" },
            { number: "50+", label: "Global Partners", color: "text-teal-600" }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
              <div className={`text-4xl font-bold ${stat.color}`}>{stat.number}</div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="/learn-more"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}