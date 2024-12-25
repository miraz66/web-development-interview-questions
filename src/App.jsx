import { useState } from "react";
import SideBar from "./Components/SideBar.jsx";
import Home from "./Components/Home.jsx";

function App() {
  const [questionName, setQuestionName] = useState("react");
  console.log(questionName);

  return (
      <div className="bg-neutral-950">
        <div className="max-w-6xl mx-auto grid grid-cols-4 font-display tracking-wide">
          <div className="col-span-1">
            <SideBar
                questionName={questionName}
                setQuestionName={setQuestionName}
            />
          </div>
          <Home questionName={questionName} />
        </div>
      </div>
  );
}

export default App;
