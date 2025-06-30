// pages/index.js
import {
  FaBook,
  FaLaptopCode,
  FaFlask,
  FaHistory,
  FaPalette,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900">

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center px-4 py-24 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-blue-100/80 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative max-w-3xl text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-blue-800 drop-shadow-md">
            Empower Your Learning Journey
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-10">
            Join thousands of learners and access high-quality content for free.
            No credit card needed—just dive in and start learning today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </a>
            <a
              href="/courses"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-xl hover:bg-gray-100 shadow-md transition-transform transform hover:scale-105"
            >
              Browse Courses
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Featured Courses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {[
              {
                title: "IGCSE ICT",
                description:
                  "Comprehensive IGCSE ICT course covering systems, databases, communication, and application skills.",
                href: "/courses/igcse-ict",
                photo:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRObkO8H_uYDj0uuGJ1vlSPl4i-qFHG92YQ&s",
              },
              {
                title: "IAL AS ICT",
                description:
                  "Explore the core foundations of ICT with Pearson Edexcel's IAL AS syllabus, including ICT systems and applications.",
                href: "/courses/ial-as-ict",
                photo:
                  "https://ictasaplatformforchange.wordpress.com/wp-content/uploads/2017/02/img_6009.jpg",
              },
              {
                title: "IAL AS2 ICT",
                description:
                  "Advance your knowledge with IAL AS2 ICT—databases, project planning, and digital communication.",
                href: "/courses/ial-as2-ict",
                photo:
                  "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=60",
              },
              {
                title: "IGCSE Computer Science",
                description:
                  "Master algorithms, programming, and problem-solving with our in-depth IGCSE Computer Science course.",
                href: "/courses/igcse-computer-science",
                photo:
                  "https://www.igcsebookshop.co.uk/wp-content/uploads/2017/04/9781471809309-502x380.jpg",
              },
            ].map((course, idx) => (
              <a
                key={idx}
                href={course.href}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-transform hover:scale-105"
              >
                <img
                  src={course.photo}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}