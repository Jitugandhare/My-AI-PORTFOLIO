import { useState } from "react";
import Chat from "../components/Chat";

function Career() {
    const initialMessage =
        "Hello! I'm CareerAgent, the career specialist. I can provide information about skills, experience, and professional background. What would you like to know?";

    const [currentQuestion, setCurrentQuestion] = useState("");

    const askCareerQuestion = (question) => {
        setCurrentQuestion(`${question} [${Date.now()}]`);

        setTimeout(() => {
            setCurrentQuestion("");
        }, 500);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3">
                    <h1 className="text-3xl font-bold mb-4">Career</h1>
                    <p className="text-lg mb-4">
                        Here you can find information about my professional background,
                        skills, and experience. Feel free to ask CareerAgent for more
                        details.
                    </p>
                </div>
                <div className="md:w-2/3">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6">
                            <h5 className="text-xl font-semibold mb-2">Chat with CareerAgent</h5>
                            <p className="text-gray-600 mb-4">
                                Our career specialist can provide information about skills,
                                experience, and professional background.
                            </p>
                            <Chat
                                agentType="career"
                                initialMessage={initialMessage}
                                agentInitials="CA"
                                directQuestion={currentQuestion}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-12">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Frontend Development Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                            <h5 className="text-xl font-semibold mb-4">Frontend Development</h5>
                            <ul className="divide-y divide-gray-200 flex-1">
                                <li className="py-3 flex justify-between items-center">
                                    Html
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Advanced
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    CSS
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    JavaScript
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    React
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    TypeScript
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Advanced
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                                    onClick={() =>
                                        askCareerQuestion("Tell me more about your frontend development skills")
                                    }
                                >
                                    Ask About Frontend Skills
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Backend Development Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                            <h5 className="text-xl font-semibold mb-4">Backend Development</h5>
                            <ul className="divide-y divide-gray-200 flex-1">
                                <li className="py-3 flex justify-between items-center">
                                    Node.js
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    Express.js
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    NoSQL
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Advanced
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    SQL
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Beginner
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                                    onClick={() =>
                                        askCareerQuestion("Tell me more about your backend development skills")
                                    }
                                >
                                    Ask About Backend Skills
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Other Skills Card */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                            <h5 className="text-xl font-semibold mb-4">Other Skills</h5>
                            <ul className="divide-y divide-gray-200 flex-1">
                                <li className="py-3 flex justify-between items-center">
                                    Team Management
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Intermediate
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    Project Management
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Advanced
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    Agile Methodologies
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Expert
                                    </span>
                                </li>
                                <li className="py-3 flex justify-between items-center">
                                    Technical Writing
                                    <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                                        Intermediate
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button
                                    className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                                    onClick={() => askCareerQuestion("What other skills do you have?")}
                                >
                                    Ask About Other Skills
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Updated Experience Section */}
            <div className="mb-12">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-4">Experience</h2>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
                    <p className="text-gray-700">
                        I am currently building my professional experience through personal and
                        collaborative projects, focusing on full-stack development with
                        React, Node.js, and Express. My portfolio showcases a variety of
                        applications where I’ve implemented features such as user authentication,
                        real-time chat, payment integration, and task management.
                    </p>
                    <p className="mt-4 text-gray-700">
                        Although I do not have formal work experience yet, I am eager to
                        apply my skills in a professional environment and contribute to
                        impactful projects.
                    </p>
                </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h5 className="text-xl font-semibold mb-4">Education</h5>
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-1">
                                <h6 className="font-medium">Full Stack Web Development</h6>
                                <span className="text-gray-500 text-sm">2023-present</span>
                            </div>
                            <p className="text-gray-600">Masai School</p>
                        </div>
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <h6 className="font-medium">Bachelor of Engineering in Information Technology</h6>
                                <span className="text-gray-500 text-sm">2015 - 2019</span>
                            </div>
                            <p className="text-gray-600">Medicaps Institute Of Technology And Management</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                        <h5 className="text-xl font-semibold mb-4">Certifications</h5>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Certified Full Stack MERN Developer - 2023</li>
                            <li>Certified FreeCodeCamp Legacy JavaScript Algorithms and Data Structure - 2024</li>
                            <li>Certified Hackerrank Basics of JavaScript - 2023</li>
                            <li>Zoom Marathon Challenge - Masai School, 2023</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Career;
