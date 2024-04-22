import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Signature from "./Components/Signature.jsx";
import Complex from "./Components/Complex.jsx";
import Good from "./Components/Good.jsx";
import Bad from "./Components/Bad.jsx";
function App() {
  const [count, setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    console.log("CLICKED");
    setIsChecked(!isChecked);
  };
  return (
    <div className="h-screen bg-gray-200">
      <Header />
      <div className="w-1/2 mx-auto text-center p-2">
        <h1>Which borough are you insterested in?</h1>

        <label className="flex cursor-pointer select-none items-center bg-white p-2">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only h-8"
            />
            <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
            <div className="dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white translate-x-400 transition"></div>
          </div>
          Hi
        </label>
      </div>

      <Good />
      <Bad />

      <Complex />
      <Signature />
    </div>
  );
}

export default App;
