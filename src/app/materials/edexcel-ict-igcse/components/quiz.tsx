"use client";
import Link from 'next/link'
import { useState } from "react";
import { Card } from "../../../components/ui/card";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

const mcqQuestions = [

    {
      id: 1,
      question: "Which one of these is found in all computers?",
      options: [
        "Control software",
        "Keyboard",
        "Operating system",
        "Processor"
      ],
      correctAnswer: 3,
      answerDescription: "The processor (CPU) is the core component found in all computers. It performs the calculations and logical operations required for running software and executing instructions."
    },
    {
      id: 2,
      question: "Which one of these would be used as a desktop replacement computer?",
      options: [
        "Laptop",
        "Mainframe",
        "Media Player",
        "Server"
      ],
      correctAnswer: 0,
      answerDescription: "A laptop is a portable device capable of replacing a desktop computer. Mainframes, media players, and servers are not suitable for this role."
    },
    {
      id: 3,
      question: "Which type of computer is primarily used for high performance tasks like video editing and scientific modeling?",
      options: [
        "Workstation",
        "Media Player",
        "Smartphone",
        "Tablet"
      ],
      correctAnswer: 0,
      answerDescription: "A workstation is designed for high-performance tasks such as video editing, graphic design, and scientific modeling."
    },
    {
      id: 4,
      question: "Which device is most suitable for playing video games?",
      options: [
        "Home Entertainment System",
        "Games Console",
        "Navigation Aid",
        "Server"
      ],
      correctAnswer: 1,
      answerDescription: "A games console, such as a PlayStation or Xbox, is optimized for gaming with specialized hardware and controllers."
    },
    {
      id: 5,
      question: "Which type of digital device is commonly used for location tracking and navigation?",
      options: [
        "Tablet",
        "GPS Navigation Aid",
        "Microcomputer",
        "Media Player"
      ],
      correctAnswer: 1,
      answerDescription: "GPS navigation aids, such as Garmin or TomTom, are specifically designed for location tracking and navigation."
    },
    {
      id: 6,
      question: "Which device is designed for rugged outdoor use and basic communication?",
      options: [
        "Specialist Phone",
        "Smartphone",
        "Laptop",
        "Camcorder"
      ],
      correctAnswer: 0,
      answerDescription: "Specialist phones are built with durable and waterproof designs, ideal for outdoor use and basic communication."
    },
    {
      id: 7,
      question: "Which digital device is primarily used for processing large amounts of data in organizations?",
      options: [
        "Mainframe",
        "Desktop Computer",
        "Tablet Device",
        "Media Player"
      ],
      correctAnswer: 0,
      answerDescription: "Mainframes are large, powerful computers designed to process and manage vast amounts of data in organizations."
    },
    {
      id: 8,
      question: "What is an example of a multifunctional device?",
      options: [
        "Smartphone",
        "GPS Navigation Aid",
        "Media Player",
        "Camcorder"
      ],
      correctAnswer: 0,
      answerDescription: "Smartphones combine multiple functionalities such as a camera, GPS, internet access, and apps, making them multifunctional devices."
    },
    {
      id: 9,
      question: "Which digital device is considered portable, with a touchscreen interface, and is often used for browsing and media consumption?",
      options: [
        "Tablet",
        "Workstation",
        "Server",
        "Microcomputer"
      ],
      correctAnswer: 0,
      answerDescription: "Tablets are portable, touchscreen devices suitable for browsing and media consumption."
    },
    {
      id: 10,
      question: "Which device is a compact computer used as a personal computer?",
      options: [
        "Microcomputer",
        "Mainframe",
        "Navigation Aid",
        "Media Player"
      ],
      correctAnswer: 0,
      answerDescription: "A microcomputer, such as desktops and laptops, is a compact and low-cost personal computer."
    },
    {
      id: 11,
      question: "Which type of computer is typically used by small businesses and is slower than mainframes?",
      options: [
        "Minicomputer",
        "Desktop",
        "Laptop",
        "Server"
      ],
      correctAnswer: 0,
      answerDescription: "Minicomputers, or midrange computers, are smaller and slower than mainframes, making them suitable for small businesses."
    },
    {
      id: 12,
      question: "Which device is primarily designed to play music and videos?",
      options: [
        "Media Player",
        "Tablet",
        "Laptop",
        "Smartphone"
      ],
      correctAnswer: 0,
      answerDescription: "Media players, such as MP3 players and iPods, are designed specifically for playing music and videos."
    },
    {
      id: 13,
      question: "Which one of these features would be improved if she used a desktop replacement?",
      options: [
        "User interface",
        "Energy consumption",
        "Portability",
        "Performance"
      ],
      correctAnswer: 3,
      answerDescription: "A desktop replacement would improve performance, but it would consume more energy and be less portable."
    },
    {
      id: 14,
      question: "Which one of these is the best choice of computer for a concert venue to use for processing bookings?",
      options: [
        "Desktop",
        "Embedded",
        "Mainframe",
        "Tablet"
      ],
      correctAnswer: 2,
      answerDescription: "A mainframe is the best choice for a concert venue to handle large-scale bookings efficiently."
    }
  ];

  export default function Quizs() {

const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
const [showResults, setShowResults] = useState(false);
const [showQuiz, setShowQuiz] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      const question = mcqQuestions.find(q => q.id === parseInt(questionId));
      if (question && answer === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

return (
  <div className="flex flex-col items-center space-y-6">
    {!showQuiz ? (
      <Button
      onClick={() => setShowQuiz(true)}
      className="py-3 px-6 text-lg font-semibold bg-red-600 text-white rounded-md hover:bg-blue-900 transition-colors duration-900 animate-pulse"
    >
      Start Quiz - 01. Computers
    </Button>
    ) : (
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-6 text-center text-blue-700">
          Unit 1 Quiz: Computers
        </h3>
        <div className="space-y-8">
          {mcqQuestions.map((q, qIndex) => (
            <div key={q.id} className="space-y-4">
              <div className="flex gap-4">
                <span className="font-medium text-lg text-blue-600">
                  {qIndex + 1}.
                </span>
                <div className="space-y-4 flex-1">
                  <h4 className="text-xl font-medium text-blue-800">
                    {q.question}
                  </h4>
                  <RadioGroup
                    onValueChange={(value) => handleAnswerSelect(q.id, parseInt(value))}
                    value={selectedAnswers[q.id]?.toString()}
                  >
                    {q.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <RadioGroupItem value={index.toString()} id={`q${q.id}-${index}`} />
                        <Label htmlFor={`q${q.id}-${index}`} className="flex-1 text-lg text-gray-700 hover:text-blue-600 transition-colors duration-200">
                          {option}
                          {showResults && (
                            <span className="ml-2">
                              {index === q.correctAnswer ? (
                                <CheckCircle2 className="inline w-5 h-5 text-green-500" />
                              ) : selectedAnswers[q.id] === index ? (
                                <XCircle className="inline w-5 h-5 text-red-500" />
                              ) : null}
                            </span>
                          )}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {showResults && (
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>Answer Explanation:</strong> {q.answerDescription}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="pt-6 border-t border-blue-200">
            <Button
              onClick={() => setShowResults(true)}
              className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
              disabled={Object.keys(selectedAnswers).length < mcqQuestions.length}
            >
              Submit Quiz
            </Button>
            {showResults && (
  <div className="flex justify-center mt-8">
    <div className="flex items-center space-x-6 p-8 bg-blue-100 rounded-lg text-center shadow-xl">
      <div>
        <h3 className="text-lg font-semibold text-primary">Your Score</h3>
        <p className="mt-2 text-2xl font-bold text-blue-800">
          {calculateScore()} / {mcqQuestions.length}
        </p>
      </div>
      <div>
        <p className="text-sm">
          (<span
            className={`font-semibold text-lg ${
              ((calculateScore() / mcqQuestions.length) * 100) >= 50
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {((calculateScore() / mcqQuestions.length) * 100).toFixed(2)}%
          </span>)
        </p>
        <p
          className={`mt-2 text-lg font-bold ${
            ((calculateScore() / mcqQuestions.length) * 100) >= 50
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {((calculateScore() / mcqQuestions.length) * 100) >= 50 ? "Pass" : "Fail"}
        </p>
      </div>
    </div>
  </div>
)}

          </div>
        </div>
      </Card>
    )}
  </div>

    )}