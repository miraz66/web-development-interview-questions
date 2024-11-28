import logo from "../assets/logo.png"
import clsx from "clsx";

const data = [
  'react',
  'javaScript',
  'pHP',
  'mySql',
  'laravel',
  'python',
  '.Net',
  'java',
  'c++',
  'c#',
  'swift',
  'kotlin',
  'go',
  'rust',
  'ruby',
  'sQL',
  'hTML',
  'cSS',
  'vue',
  'angular',
  'react Native',
  'flutter',
  'node.js',
  'express.js',
  'mongoDB',
  'mySQL',
  'postgreSQL',
  'oracle Database',
  'microsoft SQL Server',
  'sQLite',
  'redis',
  'memcached',
  'lasticsearch',
  'kafka',
]

export default function SideBar({questionName, setQuestionName}) {
  console.log( questionName )
  return (
    <div className="h-screen w-72 fixed py-10 overflow-y-auto custom-scroll">
      <div className="text-white flex items-center gap-2">
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-3xl font-bold text-lime-400">Questions</h1>
      </div>

      <div className="mt-10">
        <h1 className="text-neutral-400 text-xl font-bold">Categories</h1>

        <ul className="text-white mt-5 space-y-2">
          {data.map((item, index) => (
          <li onClick={() => setQuestionName(item)} key={index} className={clsx("text-sm capitalize",  questionName === item ? "text-lime-400" : "text-gray-400 hover:text-lime-400 cursor-pointer")}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}