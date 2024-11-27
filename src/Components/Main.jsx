import { ReactQuestions } from "../assets/ReactQuestions.jsx";

export default function Main({questionName}) {
  const data = [
    {
      name: "React",
      data: questionName,
    }
  ]
  return (
    <div className="py-10 pl-5 col-span-3 grid grid-cols-5">
      <div className="col-span-4">
        <h1 className="text-2xl font-bold text-neutral-200">Basic Questions</h1>
        <div>
          {
            ReactQuestions.map((item) => (
                <div key={item.id} className="my-5 text-gray-400">
                  <h1 className="text-base font-medium">{item.question}</h1>
                  <p className="text-sm leading-7">{item.answer}</p>
                </div>
            ))
          }
        </div>
      </div>
     <div className="col-span-1">
       <div className="bg-gray-800/60 rounded-lg p-5 fixed">
         <h1 className="text-xl font-bold text-neutral-400">On this page</h1>
         <div className="mt-5 space-y-2 text-gray-400">
           <p>Basic</p>
           <p>Intermediate</p>
           <p>Advanced</p>
       </div>
       </div>
     </div>
    </div>
  )
}