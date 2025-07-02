// pages/about.js
import {
  FaBullseye,
  FaGlobe,
  FaLaptopCode,
  FaUserTie,
  FaPaintBrush,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { MdOutlineLightbulb } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg">
            About <span className="text-blue-400">SynapZ</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Empowering education through innovation, accessibility, and digital engagement.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white text-gray-800 py-24">
        <div className="container px-6 mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 flex items-center justify-center">
            <HiUserGroup className="mr-2 text-blue-500 text-3xl" />
            Who We Are
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            SynapZ is a dynamic Virtual Learning Environment (VLE) platform revolutionizing how learners and educators
            connect. We're committed to inclusive, engaging, and tech-driven education experiences.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 container mx-auto px-6 grid gap-12 md:grid-cols-2">
          <Card
            icon={<FaBullseye className="text-3xl text-blue-600" />}
            title="Our Mission"
            text={`• Deliver syllabus-aligned content for IGCSE & IAL learners\n• Promote deep understanding through interactive digital tools\n• Build an inclusive, globally connected learning community\n• Support learner motivation, confidence, and success`}
            bg="from-blue-100 to-blue-50"
          />
          <Card
            icon={<FaGlobe className="text-3xl text-indigo-600" />}
            title="Our Vision"
            text="To become the most trusted and transformative online education hub for students preparing for Cambridge IGCSE and Edexcel IAL examinations across the globe."
            bg="from-indigo-100 to-indigo-50"
          />
        </div>

        {/* Team Section */}
        <div className="text-center mt-24 container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <MdOutlineLightbulb className="text-yellow-500 mr-2 text-3xl" />
            Meet the Team
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
            A passionate group of educators, developers, and dreamers building the future of learning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border shadow-md p-6 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="aspect-square w-24 h-24 mx-auto mb-4 object-cover rounded-full border-4 border-blue-100 shadow-md"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <div className="text-gray-500 flex items-center justify-center space-x-2">
                  {getRoleIcon(member.role)}
                  <span className="text-sm">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Card Component
function Card({ icon, title, text, bg }) {
  return (
    <div
      className={`bg-gradient-to-br ${bg} p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-4">
        {icon}
        <h3 className="text-2xl font-semibold mt-2 sm:mt-0">{title}</h3>
      </div>
      <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">{text}</p>
    </div>
  );
}

// Icon Helper Function
function getRoleIcon(role) {
  const roleLower = role.toLowerCase();

  if (roleLower.includes('ceo') || roleLower.includes('founder')) return <FaUserTie className="text-blue-500" />;
  if (roleLower.includes('cto') || roleLower.includes('developer')) return <FaLaptopCode className="text-green-500" />;
  if (roleLower.includes('learning') || roleLower.includes('teacher')) return <FaChalkboardTeacher className="text-purple-500" />;
  if (roleLower.includes('designer') || roleLower.includes('ux')) return <FaPaintBrush className="text-pink-500" />;

  return <FaUserTie className="text-gray-400" />;
}

// Team Data
const teamMembers = [
  {
    name: 'Jane Smith',
    role: 'Founder & CEO',
    image: '/team/jane.jpg',
  },
  {
    name: 'John Lee',
    role: 'Chief Technology Officer',
    image: '/team/john.jpg',
  },
  {
    name: 'Emily Khan',
    role: 'Learning Experience Designer',
    image: '/team/emily.jpg',
  },
  {
    name: 'Carlos Gomez',
    role: 'Full-Stack Developer',
    image: '/team/carlos.jpg',
  },
  {
    name: 'Amina Yusuf',
    role: 'UX/UI Designer',
    image: '/team/amina.jpg',
  },
  {
    name: 'David Zhou',
    role: 'Education Strategist',
    image: '/team/david.jpg',
  },
];
