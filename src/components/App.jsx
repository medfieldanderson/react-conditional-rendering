import React from "react";
import Login from "./Login";

// let isLoggedIn = true;
const currentTime = new Date("03/06/2022 14:00").getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        currentTime > 13 && <h1>Why are you still working?</h1>
        // isLoggedIn ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
