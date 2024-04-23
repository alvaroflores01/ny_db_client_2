import React, { useState } from "react";

import "./App.css";
import Header from "./Components/Header.jsx";
import Overview from "./Components/Overview.jsx";
import Signature from "./Components/Signature.jsx";
import Complex from "./Components/Complex.jsx";
import Good from "./Components/Good.jsx";
import Bad from "./Components/Bad.jsx";
function App() {
  return (
    <div className="h-screen bg-gray-200">
      <Header />
      <Overview />
      <Good />
      <Bad />

      <Complex />
      <Signature />
    </div>
  );
}

export default App;
