import { FaDesktop, FaServer, FaMicrochip, FaCogs, FaLaptop } from 'react-icons/fa';

export default function Topics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {[
          {
            icon: <FaServer className="text-5xl" />,
            title: "Mainframe Computers",
            description: "Enterprise-level systems handling massive data processing for large organizations and critical operations.",
            color: "from-green-400 to-emerald-600"
          },
          {
            icon: <FaLaptop className="text-5xl" />,
            title: "Minicomputers",
            description: "Mid-range solutions bridging the gap between mainframes and personal computers for departmental use.",
            color: "from-blue-400 to-sky-600"
          },
          {
            icon: <FaMicrochip className="text-5xl" />,
            title: "Microcomputers",
            description: "Compact personal systems powered by microprocessors for individual and small business applications.",
            color: "from-amber-400 to-orange-500"
          },
          {
            icon: <FaDesktop className="text-5xl" />,
            title: "Desktop Computers",
            description: "Versatile stationary workhorses offering expandability and power for professional workflows.",
            color: "from-rose-400 to-pink-600"
          },
          {
            icon: <FaCogs className="text-5xl" />,
            title: "Workstations",
            description: "Specialized high-performance machines for technical computing and creative production.",
            color: "from-purple-400 to-indigo-600"
          }
        ].map((item, index) => (
          <div 
            key={index}
            className="group relative h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
          >
            <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${item.color} opacity-15 blur-lg transition-all duration-500 group-hover:opacity-25`} />
            
            <div className="relative h-full bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/40 shadow-sm hover:shadow-md">
              <div className={`absolute top-0 w-full h-1.5 bg-gradient-to-r ${item.color}`} />
              
              <div className="p-7">
                <div className={`mb-6 w-fit p-5 rounded-2xl bg-gradient-to-br ${item.color} shadow-inner transition-transform duration-300 group-hover:scale-105`}>
                  {item.icon}
                </div>
                
                <h3 className={`text-2xl font-semibold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-4`}>
                  {item.title}
                </h3>
                
                <p className="text-base text-gray-600 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}