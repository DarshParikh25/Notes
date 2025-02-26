import Navbar from "./components/Navbar"
import Top from "./components/Top"
import CreateNote from "./components/CreateNote"
import { useState } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormData = (d) => {
    const inputValue = { id: Date.now(), value: d }
    setFormData([...formData, inputValue]);
    console.log(formData)
  };
  return (
    <div className="bg-[#f3f3f3] h-screen flex">
      <div id="left" className="border-r-2 border-[#11111122] w-1/5 h-screen p-4">
        <Navbar />
      </div>
      <div id="right" className="w-4/5">
        <div id="top">
          <Top />
        </div>
        <div id="bottom" className="flex">
          <div id="bottom-left" className="w-1/4 h-[90vh] border-r-2 border-[#11111122] px-3 py-4">
            <CreateNote data={handleFormData}/>
            {formData.map((item) => (
              <div key={item.id} className="pt-5 px-3 pb-2 border-b-2 border-[#11111122]">
                <div className="text-xl font-semibold">{item.value.title}</div>
                <div className="flex gap-3 py-2">
                  {item.value.tags.map(tag => (
                    <div key={tag.id} className="bg-gray-300 px-2 rounded-[7px] text-sm text-center">{tag.text}</div>
                  ))}
                </div>
                <div className="text-sm text-gray-600 px-0.5">{item.value.date}</div>
              </div>
            ))}
          </div>
          <div id="bottom-middle" className="w-1/2 h-[90vh] border-r-2 border-[#11111122]">
            
          </div>
          <div id="bottom-right"></div>
        </div>
      </div>
    </div>
  )
}

export default App