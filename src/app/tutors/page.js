'use client';

import Image from 'next/image';

const tutors = [
  {
    id: 1,
    name: "Mr. Tanjana Chamikara",
    subject: "IGCSE ICT",
    description: "Expert in IGCSE ICT with over 10 years of teaching experience.",
    image: "/images/home/tanjana-sir-image-1.png",
  },
  {
    id: 2,
    name: "Ms. Madhara Wedhage",
    subject: "Computer Science",
    description: "Specialized in Computer Science and Software Engineering.",
    image: "/images/home/madara-miss-image-600-2-1.png",
  },
  {
    id: 3,
    name: "Ms. Madhara Wedhage",
    subject: "IAL AS2 ICT",
    description: "Passionate about teaching AS2 ICT in a simplified way.",
    image: "/images/home/madara-miss-image-600-2-1.png",
  },
  {
    id: 4,
    name: "Ms. Madhara Wedhage",
    subject: "IGCSE Computer Science",
    description: "Creative methods to make coding fun and interactive.",
    image: "/images/home/madara-miss-image-600-2-1.png",
  },
];

export default function TutorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
{/* Hero Section */}
<section className="relative h-[400px] md:h-[600px] w-full">
  <Image
    src="/tutor.jpg"
    alt="Hero Background"
    fill
    className="object-cover object-center"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 backdrop-blur-sm flex items-center justify-center px-6 text-center">
    <div className="max-w-4xl">
      <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
        Learn From World-Class Tutors Online
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-200 font-light">
        Excel in IGCSE, A-Level ICT & Computer Science with expert support.
      </p>

     
    </div>
  </div>
</section>

      {/* Tutors Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
  <h2 className="text-4xl font-bold text-center text-blue-800 mb-14">
    Meet Our Tutors
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
    {tutors.map((tutor) => (
      <div
        key={tutor.id}
        className="flex flex-col bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-all duration-300 group"
      >
        {/* Tutor Image */}
        <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
          <Image
            src={tutor.image}
            alt={tutor.name || 'Tutor Photo'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Tutor Info */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {tutor.name}
          </h3>

          <p className="text-sm text-blue-600 font-medium mt-1">
            {tutor.subject}
          </p>

          <p className="text-gray-600 text-sm mt-3 flex-grow leading-relaxed">
            {tutor.description}
          </p>

          {/* View Profile Button */}
          <button
            className="mt-5 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={`View profile of ${tutor.name}`}
          >
            View Profile
            {/* Optional: Add an icon here if using Heroicons or similar */}
            {/* <ArrowRightIcon className="w-5 h-5" aria-hidden="true" /> */}
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
    </main>
  );
}