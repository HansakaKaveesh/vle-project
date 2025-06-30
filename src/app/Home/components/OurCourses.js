"use client";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

export default function OurCourses() {
  const courses = [
    {
      title: "IGCSE ICT",
      description: "Foundations in Information and Communication Technology for high school learners.",
      duration: "1 Academic Year",
      difficulty: "Beginner",
      rating: 4.6,
      progress: 40,
      trending: true,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRObkO8H_uYDj0uuGJ1vlSPl4i-qFHG92YQ&s",
    },
    {
      title: "IAL AS ICT",
      description: "Introductory advanced-level ICT concepts aligned with Edexcel curriculum.",
      duration: "6 Months",
      difficulty: "Intermediate",
      rating: 4.7,
      progress: 55,
      image:
        "https://ictasaplatformforchange.wordpress.com/wp-content/uploads/2017/02/img_6009.jpg",
    },
    {
      title: "IAL AS2 ICT",
      description: "Second part of A-Level ICT course focused on systems analysis and design concepts.",
      duration: "6 Months",
      difficulty: "Intermediate",
      rating: 4.8,
      progress: 35,
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "IGCSE Computer Science",
      description: "Develop logical thinking and programming with global IGCSE standards.",
      duration: "1 Academic Year",
      difficulty: "Intermediate",
      rating: 4.9,
      progress: 50,
      trending: true,
      image:
        "https://www.igcsebookshop.co.uk/wp-content/uploads/2017/04/9781471809309-502x380.jpg",
    },
  ];

  const EnrollNowButton = (
    <button className="w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
      Enroll Now
    </button>
  );

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-indigo-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600">
            Learn modern skills with hands-on programs tailored to your level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Blurred Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-3xl blur-lg z-0 transition-opacity duration-300" />

              {/* Course Card */}
              <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                {/* Trending Badge */}
                {course.trending && (
                  <div className="absolute top-4 right-4 flex items-center bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm z-20">
                    <FaFire className="mr-1.5" />
                    Trending
                  </div>
                )}

                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{course.description}</p>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{course.duration}</span>
                      <span>{course.difficulty}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(course.rating) ? "fill-current text-yellow-400" : "fill-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs">({course.rating})</span>
                    </div>
                    <div className="pt-4">{EnrollNowButton}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative blurred blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
    </section>
  );
}