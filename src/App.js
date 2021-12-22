import React from "react";

import Profile from "./profile/Profile";
import "./App.css";
function App() {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div>
      <Profile name="Mohamed Essam" age={19} handleName={handleName}>
        /710804.jpg
      </Profile>
      <Profile handleName={handleName}></Profile>
    </div>
  );
}

export default App;
