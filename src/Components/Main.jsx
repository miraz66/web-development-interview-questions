import { ReactQuestions } from "../assets/ReactQuestions.jsx";
import { JavaScriptQuestions} from "../assets/JavaScriptQuestions.jsx";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { useState, useEffect } from "react";

export default function Main({questionName}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      ReactQuestions.forEach((section) => {
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
  }, []);

  return (
      <div className="py-10 pl-5 col-span-3 grid grid-cols-5">
        {/* Main content */}
        <div className="col-span-4">
          {ReactQuestions.map((section) => (
              <div key={section.type} id={section.type}>
                <h1 className="text-2xl font-bold text-neutral-200 capitalize">
                  {section.type} Questions
                </h1>
                <div>
                  {section.questions.map((item) => (
                      <div key={`${section.type}-${item.id}`} className="my-5 text-gray-400">
                        <h1 className="text-base font-medium">{item.question}</h1>
                        <p className="text-sm leading-7">{item.answer}</p>
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
              {ReactQuestions.map((section) => (
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
