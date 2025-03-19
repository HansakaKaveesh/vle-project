export default function Header() {
    return (
      <div className="group bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-300/20 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
  
        <div className="relative overflow-hidden perspective-1000">
          {/* Parallax effect container */}
          <div className="relative transform transition-transform duration-700 group-hover:scale-[1.03] group-hover:rotate-[0.5deg] hover:shadow-2xl">
            <img
              src="https://timelinecovers.pro/facebook-cover/download/general-technology-computer-background-facebook-cover.jpg"
              alt="Computers classification illustration"
              className="w-full h-80 object-cover rounded-t-2xl transform transition-transform duration-700 origin-bottom"
            />
            {/* Dynamic gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-800/40 to-transparent flex items-end justify-start p-8">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_60%,rgba(255,255,255,0.1)_80%,transparent_100%)] opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
  
              <div className="flex items-center gap-4 animate-fade-in-up">
                <span className="text-red-300 font-bold text-5xl drop-shadow-lg bg-white/10 p-3 rounded-2xl backdrop-blur-sm border-2 border-white/20 hover:border-red-300/30 transition-all duration-300 hover:animate-float">
                  01
                  {/* Animated outer circle */}
                  <span className="absolute inset-0 border-2 border-red-300/20 rounded-2xl pointer-events-none animate-pulse"></span>
                </span>
  
                <h2 className="text-4xl font-bold text-white tracking-tight relative">
                  <span className="font-serif block text-5xl mb-2 bg-gradient-to-r from-red-100 to-orange-100 bg-clip-text text-transparent">
                    Computing Systems
                  </span>
                  <span className="block h-[3px] w-24 bg-gradient-to-r from-red-400 to-orange-300 rounded-full transform transition-all duration-500 group-hover:w-32 group-hover:from-red-300 group-hover:to-orange-200" />
                  {/* Decorative sparkles */}
                  <svg className="absolute -top-4 -right-8 w-12 h-12 text-red-300/40 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </h2>
              </div>
            </div>
          </div>
  
          {/* Animated corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-red-300/30 rounded -tl-2xl transition-all duration-500 group-hover:border-red-400" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-red-300/30 rounded-br-2xl transition-all duration-500 group-hover:border-red-400" />
        </div>
  
        <div className="p-8 bg-gradient-to-b from-white/95 to-red-50/60">
          <p className="text-lg text-red-900/90 italic font-medium mb-8 pl-6 relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-red-300 before:rounded-full">
            "Computers can be classified by size, purpose, or architecture"
          </p>
          <ul className="space-y-5">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                ),
                title: 'Size',
                content: 'From compact laptops to massive mainframe systems'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Purpose',
                content: 'Personal computers, servers, or supercomputers'
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: 'Architecture',
                content: 'Design elements like memory organization & I/O systems'
              }
            ].map((item, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 p-5 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md hover:-translate-x-1 transition-all duration-300 group/item cursor-pointer"
              >
                <span className="p-3 bg-red-100/50 rounded-xl text-red-600 group-hover/item:bg-red-200/30 transition-colors">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-900 flex items-center gap-2">
                    {item.title}
                    <span className="text-red-400 text-sm font-normal transition-opacity opacity-0 group-hover/item:opacity-100">
                      ↗
                    </span>
                  </h3>
                  <p className="text-red-700/90 text-sm mt-2 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }