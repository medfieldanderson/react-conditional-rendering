import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const currentTime = new Date("03/06/2022 14:00").getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        <>
          {/* using && to short-circuit conditional logic */}
          {currentTime > 13 && <h1>Why are you still working?</h1>}
          {/* refactored to use ternary operator to show greeting for Login form */}
          {isLoggedIn ? <h1>Hello</h1> : <Login />}
        </>
      }
    </div>
  );
}

export default App;
