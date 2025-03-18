"use client";

import Link from 'next/link';
import { useState } from "react";
import { Book, Clock, FileText, PlayCircle, Users, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Label } from "../../components/ui/label";
import { FaDesktop, FaServer, FaMicrochip, FaCogs, FaLaptop } from 'react-icons/fa'; // Import icons from react-icons
import Quiz from './components/quiz';
import Computers from './components/computers';


  export default function Home() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const [selectedUnit, setSelectedUnit] = useState("unit1");
  
    const handleUnitChange = (e) => {
      setSelectedUnit(e.target.value);
    };

  return (
    <div className="min-h-screen bg-background ">
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-slate-50 to-indigo-50">
  <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
    <div className="space-y-3">
      <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight drop-shadow-sm">
        Edexcel ICT IGCSE
      </h1>
      <div className="flex items-center gap-5 text-indigo-600/90">
        <span className="flex items-center gap-2 text-sm font-medium">
          <Users className="w-5 h-5 text-indigo-500/80" />
          <span>234 Students</span>
        </span>
        <span className="flex items-center gap-2 text-sm font-medium">
          <Clock className="w-5 h-5 text-indigo-500/80" />
          <span>12 Weeks</span>
        </span>
      </div>
    </div>
    <Link href="/dashboard">
      <button className="group flex items-center gap-2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white font-semibold py-3 px-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 transition-transform group-hover:-translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
        Back to Dashboard
      </button>
    </Link>
  </div>
</header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Course Progress */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="modules" className="space-y-5">
              <TabsList>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>
              <TabsContent value="modules" className="space-y-4">
                
{/*--------------------------------------------------------------------- Dropdown for selecting unit ----------------------------------------------------------------- */}
      <div className="mb-6 group">
  <label 
    htmlFor="unit-select" 
    className="block text-sm font-semibold text-slate-700 mb-2 transition-colors duration-200 group-hover:text-indigo-600"
  >
    Select Unit
  </label>
  <div className="relative">
    <select
      id="unit-select"
      className="w-full pl-4 pr-12 py-3 border-2 border-slate-200 rounded-xl bg-white/90 
                focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:ring-opacity-50 
                hover:border-slate-300 transition-all duration-200 shadow-sm
                cursor-pointer appearance-none text-slate-700 font-medium"
      onChange={handleUnitChange}
      value={selectedUnit}
    >
      <option value="unit1" className="bg-indigo-50 hover:bg-indigo-100">UNIT 1: DIGITAL DEVICES</option>
      <option value="unit2" className="bg-indigo-50">UNIT 2: CONNECTIVITY</option>
      <option value="unit3" className="bg-indigo-50">UNIT 3: OPERATING ONLINE</option>
      <option value="unit4" className="bg-indigo-50">UNIT 4: ONLINE GOODS AND SERVICES</option>
      <option value="unit5" className="bg-indigo-50">UNIT 5: APPLYING ICT</option>
      <option value="unit6" className="bg-indigo-50">UNIT 6: SOFTWARE SKILLS</option>
    </select>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg 
        className="w-5 h-5 text-indigo-500/80" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 9l-7 7-7-7" 
        />
      </svg>
    </div>
  </div>
</div>

      
{/* --------------------------------------------------- Conditional rendering based on selected unit ---------------------------------------------------- */}      
      
      {/* Conditional rendering based on selected unit */}
      {selectedUnit === "unit1" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">UNIT 1: DIGITAL DEVICES</h3>
            </div>
            <Progress value={75} className="w-24" />
          </div>
          <div className="space-y-4">
            
                 
{/*--------------------------------------------------------- Chapter 1: DIGITAL DEVICES ------------------------------------------------------------------*/}
            <div
  className="group relative flex items-center justify-center gap-6 p-8 bg-cover bg-center bg-no-repeat rounded-xl transition-all duration-300 hover:shadow-xl overflow-hidden"
  style={{ backgroundImage: 'url(https://ichef.bbci.co.uk/images/ic/1200xn/p0f377s6.jpg)' }}
>
  {/* Animated overlay */}
  <div className="absolute inset-0 bg-black opacity-60 rounded-xl transition-opacity duration-300 group-hover:opacity-50"></div>

  <div className="text-center relative z-10 text-white space-y-4 max-w-2xl">
    {/* Chapter Header */}
    <div className="mb-4">
      <span className="text-sm font-medium text-primary/80 tracking-wider">CHAPTER 1</span>
      <h2 className="text-3xl font-bold mt-2 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
        DIGITAL DEVICES
      </h2>
      <p className="text-base text-primary-foreground/80 font-light">
        Understanding various types of digital devices and their ecosystem
      </p>
    </div>

    {/* Study Note with enhanced interaction */}
    <div className="mt-8 p-6 bg-background/20 backdrop-blur-sm rounded-xl border border-primary/20 transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-8 w-1 bg-primary rounded-full"></div>
        <h5 className="text-lg font-semibold text-primary">Key Study Note:</h5>
      </div>
      <p className="text-sm text-primary-foreground/80 text-left leading-relaxed">
        Digital devices form the foundation of modern computing ecosystems. Their evolution from 
        specialized tools to multifunctional systems has revolutionized how we interact with 
        technology across personal, professional, and industrial contexts.
      </p>
    </div>

    {/* Interactive CTA */}
    <button className="mt-8 px-6 py-2 bg-primary/90 text-sm font-medium rounded-full transition-all hover:bg-primary hover:scale-105 hover:shadow-lg">
      Start Chapter
    </button>
  </div>
</div>




{/* Computers */}
  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
  
  <div>
  
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

  {/*--------------------------------------------------------- Animated corner elements ------------------------------------------------------------------------*/}
 
<div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-red-300/30 rounded-tl-2xl transition-all duration-500 group-hover:border-red-400" />
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



<ul className="flex flex-wrap gap-8 justify-center mt-20 px-4">
  {[
    {
      icon: <FaServer className="text-4xl" />,
      title: "Mainframe Computers",
      description: "Large, expensive computers that can process data at high speeds and are used by large organizations to manage large amounts of data.",
      color: "from-green-400/90 to-emerald-600/90"
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: "Minicomputers",
      description: "Also known as midrange computers, used by small businesses and industries with processing power between mainframes and microcomputers.",
      color: "from-blue-500/90 to-sky-600/90"
    },
    {
      icon: <FaMicrochip className="text-4xl" />,
      title: "Microcomputers",
      description: "Compact, low-cost computers with a microprocessor as its central processing unit, ideal for personal and small business use.",
      color: "from-amber-500/90 to-orange-600/90"
    },
    {
      icon: <FaDesktop className="text-4xl" />,
      title: "Desktop Computers",
      description: "Personal computers designed to stay in one location, offering expandability and power for home/office use.",
      color: "from-rose-500/90 to-pink-600/90"
    },
    {
      icon: <FaCogs className="text-4xl" />,
      title: "Workstations",
      description: "Specialized high-performance computers for tasks like video editing, graphic design, and scientific modeling.",
      color: "from-purple-500/90 to-indigo-600/90"
    }
  ].map((item, index) => (
    <li 
      key={index}
      className="group relative w-72 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br opacity-20 blur transition-all duration-300 group-hover:opacity-40 group-hover:blur-xl" />
      
      <div className="relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100/30">
        <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${item.color}`} />
        
        <div className="p-6">
          <div className={`mb-5 w-fit p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
            {item.icon}
          </div>
          
          <h3 className="text-xl font-bold bg-gradient-to-br bg-clip-text text-transparent mb-3">
            <span className={`${item.color.replace('to', 'from')}`}>{item.title}</span>
          </h3>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
           
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>
    
<Computers />


  </div>
</div>

<Quiz />




{/* Mobile Devices */}
<div className="bg-green-100 shadow-lg rounded-lg overflow-hidden">
  <div className="relative">
    <img
      src="https://www.essay.ws/wp-content/uploads/2015/11/mobile-devices.jpg"
      alt="Computers classification illustration"
      className="w-full h-80 object-cover rounded-t-lg mb-6"
    />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <h2 className="text-4xl font-semibold text-white text-center">02. Mobile Devices</h2>
    </div>
  </div>

  <div className="p-6 bg-primary/10 rounded-lg">
    <p className="text-sm text-muted-foreground mb-4">
      Computers can be classified by size, purpose, or architecture:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li className="text-base">
        <strong>Size:</strong> Computers can range in size from small laptops to large mainframe systems.
      </li>
      <li className="text-base">
        <strong>Purpose:</strong> Computers can be classified by their intended use, such as personal computers, servers, or supercomputers.
      </li>
      <li className="text-base">
        <strong>Architecture:</strong> Computers can be grouped by design elements like memory organization or input/output systems.
      </li>
    </ul>
  </div>
</div>
          </div>
        </Card>
      )}

      {selectedUnit === "unit2" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">UNIT 2: CONNECTIVITY</h3>
            </div>
            <Progress value={50} className="w-24" />
          </div>
          <div className="space-y-4">
            {/* Content for UNIT 2 */}
          </div>
        </Card>
      )}

      {selectedUnit === "unit3" && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">UNIT 3: OPERATING ONLINE</h3>
            </div>
            <Progress value={60} className="w-24" />
          </div>
          <div className="space-y-4">
            {/* Content for UNIT 3 */}
          </div>
        </Card>
      )}
    </TabsContent>




{/*--------------------------------- Previous resources and discussions content remains the same ----------------------------*/}
              <TabsContent value="resources">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Course Resources</h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Course Syllabus
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Programming Guidelines
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Reference Materials
                    </Button>
                  </div>
                </Card>
              </TabsContent>

{/*----------------------------- Discussions Content------------------------------- */}

              <TabsContent value="discussions">{/* Discussions Content */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Course Discussions</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-medium">Week 1 Discussion: Programming Paradigms</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Share your thoughts on different programming paradigms and their use cases.
                      </p>
                      <div className="flex gap-2 mt-2">
                        <Button size="sm">View Discussion</Button>
                        <Button size="sm" variant="outline">Post Reply</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

{/* -------------------------------------------Right Column - Course Info ------------------------------------------*/}
    
        </div>
      </main>
    </div>
  );
}