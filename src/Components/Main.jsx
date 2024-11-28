import { ReactQuestions } from "../assets/ReactQuestions.jsx";
import { JavaScriptQuestions } from "../assets/JavaScriptQuestions.jsx";
import { LaravelQuestions } from "../assets/LaravelQuestions.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Example style

export default function Main({ questionName }) {
  const [activeSection, setActiveSection] = useState("basic");

  // Determine which question set to use
  const getQuestionsByName = () => {
    switch (questionName.toLowerCase()) {
      case "react":
        return ReactQuestions;
      case "javascript":
        return JavaScriptQuestions;
      case "laravel":
        return LaravelQuestions;
      default:
        return []; // Return an empty array if no match
    }
  };

  const questions = getQuestionsByName();

  useEffect(() => {
    const handleScroll = () => {
      questions.forEach((section) => {
        const element = document.getElementById(section.type);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(section.type);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [questions]);

  return (
      <div className="py-10 col-span-3 grid grid-cols-5 min-h-screen">
        {/* Main content */}
        <div className="col-span-4 pl-5 pr-10">
          {questions.map((section) => (
              <div key={section.type} id={section.type}>
                <h1 className="text-xl font-bold text-neutral-400 capitalize">
                  {section.type} Questions
                </h1>
                <div>
                  {section.questions.map((item) => (
                      <div
                          key={`${section.type}-${item.id}`}
                          className="my-5 text-gray-400"
                      >
                        <h1 className="text-base font-medium">{item.question}</h1>
                        <p className="text-sm leading-7">{item.answer}</p>

                        {item.example && (
                            <div className="mt-2">
                              <h1 className="text-xs font-medium pb-1">Example: </h1>
                            <SyntaxHighlighter
                                className="text-sm leading-7"
                                language={item.type? item.type : questionName.toLowerCase()}
                                style={atomOneDark}
                                customStyle={{ borderRadius: "10px" }}
                            >
                              {item.example}
                            </SyntaxHighlighter>
                          </div>
                        )}
                      </div>
                  ))}
                </div>
              </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-gray-800/60 rounded-lg p-5 fixed">
            <h1 className="text-xl font-bold text-neutral-400">On this page</h1>
            <div className="mt-5 space-y-2 text-gray-400">
              {questions.map((section) => (
                  <a
                      key={section.type}
                      href={`#${section.type}`}
                      className={`block ${
                          activeSection === section.type
                              ? "text-lime-400 font-bold"
                              : "hover:text-lime-400"
                      }`}
                  >
                    {section.type.charAt(0).toUpperCase() + section.type.slice(1)}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}
