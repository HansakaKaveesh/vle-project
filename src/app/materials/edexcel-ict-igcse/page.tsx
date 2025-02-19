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
      <header className="border-b">
  <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Edexcel ICT IGCSE</h1>
      <div className="flex items-center gap-4 mt-2 text-muted-foreground">
        <span className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>234 Students</span>
        </span>
        <span className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>12 Weeks</span>
        </span>
      </div>
    </div>
    <Link href="/dashboard">
      <button className="bg-white text-green-600 font-medium py-2 px-6 rounded-xl shadow hover:bg-gray-100 transition ease-in-out duration-300 transform hover:scale-105">
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
            <Tabs defaultValue="modules" className="space-y-4">
              <TabsList>
                <TabsTrigger value="modules">Modules</TabsTrigger>
                
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
              </TabsList>



              
              <TabsContent value="modules" className="space-y-4">
      {/* Dropdown for selecting unit */}
      <div className="mb-4">
        <label htmlFor="unit-select" className="text-sm font-semibold">Select Unit</label>
        <select
          id="unit-select"
          className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          onChange={handleUnitChange}
          value={selectedUnit}
        >
          <option value="unit1">UNIT 1: DIGITAL DEVICES</option>
          <option value="unit2">UNIT 2: CONNECTIVITY</option>
          <option value="unit3">UNIT 3: OPERATING ONLINE</option>
          <option value="unit4">UNIT 4: ONLINE GOODS AND SERVICES</option>
          <option value="unit5">UNIT 5: APPLYING INFORMATION AND COMMUNICATION TECHNOLOGY</option>
          <option value="unit6">UNIT 6: SOFTWARE SKILLS</option>
        </select>
      </div>

      
{/* ---------------------------------------Conditional rendering based on selected unit--------------------------------------------- */}      
      
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
            
            
            {/* Chapter 1: DIGITAL DEVICES */}
            <div
  className="relative flex items-center justify-center gap-6 p-6 bg-cover bg-center bg-no-repeat rounded-lg transition-shadow duration-300"
  style={{ backgroundImage: 'url(https://ichef.bbci.co.uk/images/ic/1200xn/p0f377s6.jpg)' }}
>
  <div className="absolute inset-0 bg-black opacity-65 rounded-lg"></div> {/* Transparent black overlay */}

  

  <div className="text-center relative z-10 text-white"> {/* Make sure the text is above the overlay */}
    <h4 className="text-2xl font-semibold text-primary mt-5 mb-2">CHAPTER 1: DIGITAL DEVICES</h4>
    <p className="text-sm text-muted-foreground mt-1 mb-4">
      Understanding various types of digital devices.
    </p>

    <div className="mt-6 p-6 bg-primary/10 rounded-lg ">
      <h5 className="text-lg font-semibold text-primary">Study Note:</h5>
      <p className="text-sm text-muted-foreground mt-2">
        Digital devices play a vital role in modern technology. It’s essential to understand the different types and their functions for better application in various fields.
      </p>
    </div>
  </div>
</div>




            {/* Computers */}
  <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
  
  <div>
  
  <div className="bg-red-100 shadow-lg rounded-lg overflow-hidden">
  <div className="relative">
    <img
      src="https://timelinecovers.pro/facebook-cover/download/general-technology-computer-background-facebook-cover.jpg"
      alt="Computers classification illustration"
      className="w-full h-80 object-cover rounded-t-lg mb-6"
    />
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <h2 className="text-4xl font-semibold text-white text-center">01. Computers</h2>
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



<ul className="flex flex-wrap gap-6 justify-center mt-4">
      <li className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-6">
          <FaServer className="text-4xl text-primary text-green-400 mb-4" />
          <strong className="text-lg font-semibold text-primary">Mainframe Computers</strong>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Large, expensive computers that can process data at high speeds and are used by large organizations to manage large amounts of data.
            </p>
          </div>
        </div>
      </li>
      <li className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-6">
          <FaLaptop className="text-4xl text-primary text-blue-600 mb-4" />
          <strong className="text-lg font-semibold text-primary">Minicomputers</strong>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Also known as midrange computers, these computers are used by small businesses and industries and are slower than mainframes.
            </p>
          </div>
        </div>
      </li>
      <li className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-6">
          <FaMicrochip className="text-4xl text-primary text-yellow-600 mb-4" />
          <strong className="text-lg font-semibold text-primary">Microcomputers</strong>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              A compact, low-cost computer with a microprocessor as its central processing unit.
            </p>
          </div>
        </div>
      </li>
      <li className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-6">
          <FaDesktop className="text-4xl text-primary text-red-600 mb-4" />
          <strong className="text-lg font-semibold text-primary">Desktop Computers</strong>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              A personal computer designed to stay in one place and fits on or under a desk.
            </p>
          </div>
        </div>
      </li>
      <li className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-64">
        <div className="p-6">
          <FaCogs className="text-4xl text-primary text-green-600 mb-4" />
          <strong className="text-lg font-semibold text-primary">Workstations</strong>
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              A specialized computer used for high-performance tasks like video editing, graphic design, and scientific modeling.
            </p>
          </div>
        </div>
      </li>
    </ul>
    
    <div className="mt-4 p-6 bg-primary/10 rounded-xl shadow-lg flex items-center">
    <div className="w-1/2 pr-6">
  <h5 className="text-lg font-semibold text-blue-600">1. Mainframe Computers</h5>
  <p className="text-sm text-muted-foreground mt-2">
    <span className="font-semibold text-red-500">Use:</span> Large-scale data processing for organizations like banks, governments, and airlines.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Examples:</span> Financial transactions, weather forecasting.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Technology Used:</span> High-performance CPUs and specialized hardware for massive parallel processing.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Operating Systems (OS):</span> IBM z/OS, Linux on zSystems.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Size:</span> Room-sized or large cabinet-sized systems.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Processing Power:</span> Exceptionally high, capable of processing billions of instructions per second (BIPS).
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Advantages:</span> Handles enormous workloads with reliability, superior data security, and ideal for mission-critical tasks.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Disadvantages:</span> Very expensive and requires highly trained personnel.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Price:</span> $500,000 to over $10 million.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Real World Applications:</span> Banking systems, census data management, airline reservation systems.
  </p>
</div>

<div className="w-1/2">
    <img src="https://www.entrepreneurshipinabox.com/wp-content/uploads/Mainframe-Computers.webp" alt="Mainframe Computers" className="w-full h-80 rounded-xl" />
  </div>
</div>



<div className="mt-4 p-6 bg-primary/10 rounded-xl shadow-lg flex items-center">
<div className="w-1/2 pr-6">
  <h5 className="text-lg font-semibold text-primary text-blue-600">2. Minicomputers</h5>
  <p className="text-sm text-muted-foreground mt-2">
    <span className="font-semibold text-red-500">Use:</span> Used by small to medium-sized businesses for applications like database management and ERP systems.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Examples:</span> Research labs, manufacturing control.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Technology Used:</span> Multi-user system architecture, slower than mainframes.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Operating Systems (OS):</span> UNIX, Linux, VMS.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Size:</span> Cabinet-sized, smaller than mainframes.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Processing Power:</span> Moderate to high, processes millions of instructions per second (MIPS), and can support multiple users simultaneously.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Advantages:</span> More affordable than mainframes, supports multiple users.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Disadvantages:</span> Limited scalability for larger workloads, becoming less common with modern servers.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Price:</span> $5,000 to $200,000.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Real World Applications:</span> Business servers, small research facilities, university labs.
  </p>
</div>


  <div className="w-1/2">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pdp7-oslo-2005.jpeg/800px-Pdp7-oslo-2005.jpeg" alt="Minicomputers" className="w-full h-80 rounded-xl" />
  </div>
</div>



<div className="mt-4 p-6 bg-primary/10 rounded-xl shadow-lg flex items-center">
<div className="w-1/2 pr-6">
  <h5 className="text-lg font-semibold text-primary text-blue-600">3. Microcomputers</h5>
  <p className="text-sm text-muted-foreground mt-2">
    <span className="font-semibold text-red-500">Use:</span> Personal tasks like web browsing, office work, and gaming.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Examples:</span> Home computers, entry-level desktops.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Technology Used:</span> Microprocessor-based, such as Intel Core or AMD Ryzen CPUs.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Operating Systems (OS):</span> Windows, macOS, Linux.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Size:</span> Compact, small enough to fit on a desk or in a home.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Processing Power:</span> Low to moderate, processes millions of instructions per second (MIPS), designed for single-user applications.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Advantages:</span> Affordable and widely available, easy to use and maintain.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Disadvantages:</span> Limited power for resource-intensive tasks, less robust for multitasking.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Price:</span> $300 to $2,000.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Real World Applications:</span> Home use, small offices, basic computing tasks.
  </p>
</div>

  <div className="w-1/2">
    <img src="https://learn.shilpa64.lk/unidata/m82/5/5/0/i_15625_4.jpg" alt="Microcomputers" className="w-full h-80 rounded-xl" />
  </div>
</div>



<div className="mt-4 p-6 bg-primary/10 rounded-xl shadow-lg flex items-center">
<div className="w-1/2 pr-6">
  <h5 className="text-lg font-semibold text-primary text-blue-600">4. Desktop Computers</h5>
  <p className="text-sm text-muted-foreground mt-2">
    <span className="font-semibold text-red-500">Use:</span> Professional and personal tasks like document editing, gaming, and light software development.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Examples:</span> Office workstations, gaming PCs.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Technology Used:</span> Intel Core, AMD Ryzen, or equivalent processors; often with discrete GPUs.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Operating Systems (OS):</span> Windows, Linux.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Size:</span> Small, intended to fit on or under a desk.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Processing Power:</span> Moderate to high for personal use. Handles multitasking and medium complexity software.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Advantages:</span> More powerful than microcomputers for professional tasks.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Disadvantages:</span> Not as portable as laptops or tablets.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Price:</span> $500 to $3,000.
  </p>
  <p className="text-sm text-muted-foreground mt-1">
    <span className="font-semibold text-red-500">Real World Applications:</span> Office use, home entertainment, gaming.
  </p>
</div>

  <div className="w-1/2">
    <img src="https://dlcdnrog.asus.com/rog/media/172782111228.webp" alt="Desktop Computers" className="w-full h-80 rounded-xl" />
  </div>
</div>


  </div>
</div>

{/* ---------------------------------------quizzes selected unit Computers--------------------------------------------- */}
<div className='mb-8'>
  <Quiz />
</div>




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