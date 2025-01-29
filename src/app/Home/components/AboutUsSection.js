export default function AboutUs() {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-tight">
              About Us
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to our Virtual Learning Environment, where education meets
              innovation. We empower learners and educators to connect,
              collaborate, and grow in a digital-first world.
            </p>
          </div>
          
          {/* Cards Section */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {/* Mission Card */}
            <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.49 0-2.87.74-3.7 2-1.2 1.88-.85 4.34 1.04 5.54a4.002 4.002 0 005.2-1.04c.87-1.17 1.33-2.58 1.33-4.07 0-2.4-1.6-4-4-4z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-800">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600">
                To provide accessible, high-quality digital tools and resources
                that revolutionize how education is delivered and experienced.
              </p>
            </div>
  
            {/* Vision Card */}
            <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.25c4.273 0 7.75 3.477 7.75 7.75S16.273 19.75 12 19.75 4.25 16.273 4.25 12 7.727 4.25 12 4.25z"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-800">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600">
                To become the leading platform for empowering education globally,
                bridging gaps between learners and educators.
              </p>
            </div>
  
            {/* Values Card */}
            <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5v2.25m-3 0V4.5M7.5 9.75h9M9 11.25V9h-.75a3.375 3.375 0 00-3.375 3.375v4.5c0 1.105.896 2.625 2 2.625H9m6.75 0H18c1.105 0 2-.896 2-2V12.75a3.375 3.375 0 00-3.375-3.375H15v2.25M9 15.375v.375h6v-.375"
                  />
                </svg>
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-800">
                Our Values
              </h3>
              <p className="mt-4 text-gray-600">
                Innovation, accessibility, and collaboration are at the heart of
                everything we do, ensuring a seamless learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  