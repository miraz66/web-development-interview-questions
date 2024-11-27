import SideBar from "./Components/SideBar.jsx";
import Main from "./Components/Main.jsx";

function App() {

  return (
      <div className="bg-neutral-950">
        <div className="max-w-7xl mx-auto grid grid-cols-4 font-display tracking-wide">
         <div className="col-span-1">
          <SideBar />
         </div>
          <Main />
        </div>
      </div>
  )
}

export default App
