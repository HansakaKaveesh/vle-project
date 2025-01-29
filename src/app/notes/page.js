"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotesPage = () => {
  const [purchasedSubjects, setPurchasedSubjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedSubjects = localStorage.getItem("purchasedSubjects");
    if (!storedSubjects) {
      router.push("/login"); // Redirect to login if no subjects found
    } else {
      setPurchasedSubjects(JSON.parse(storedSubjects)); // Load purchased subjects
    }
  }, [router]);

  const renderSubjectNotes = (subject) => {
    // Simulated note data (replace with actual file links or content)
    const notes = [
      { name: `${subject} Notes`, file: `${subject}-notes.pdf` },
      { name: `${subject} Solutions`, file: `${subject}-solutions.pdf` },
    ];

    return (
      <div key={subject} className="mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{subject}</h3>
        {notes.map((note) => (
          <a
            key={note.file}
            href={`/notes/${note.file}`}
            className="block text-blue-500 hover:underline mb-2"
          >
            {note.name}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Your Purchased Notes</h1>
        {purchasedSubjects.length === 0 ? (
          <p className="text-lg text-gray-600">You have not purchased any subjects yet.</p>
        ) : (
          purchasedSubjects.map((subjectId) => renderSubjectNotes(subjectId))
        )}
      </div>
    </div>
  );
};

export default NotesPage;
