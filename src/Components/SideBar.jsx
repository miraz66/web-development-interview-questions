import logo from "../assets/logo.png"

const data = [
  'React',
  'JavaScript',
  'PHP',
  'MySql',
  'Laravel',
  'python',
  '.Net',
  'Java',
  'C++',
  'C#',
  'Swift',
  'Kotlin',
  'Go',
  'Rust',
  'Ruby',
  'SQL',
  'HTML',
  'CSS',
  'Vue',
  'Angular',
  'React Native',
  'Flutter',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Oracle Database',
  'Microsoft SQL Server',
  'SQLite',
  'Redis',
  'Memcached',
  'Elasticsearch',
  'Kafka',
]
export default function SideBar() {
  return (
    <div className="h-screen w-72 fixed py-10 overflow-y-auto custom-scroll">
      <div className="text-white flex items-center gap-2">
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-3xl font-bold text-lime-400">Questions</h1>
      </div>

      <div className="mt-10">
        <h1 className="text-neutral-400 text-xl font-bold">Categories</h1>

        <ul className="text-white mt-5 space-y-2">
          {data.map((item) => (
            <li key={item.length} className="text-sm text-gray-400 hover:text-lime-400 cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}