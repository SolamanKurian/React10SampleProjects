import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";



function App() {
  return (
    <UserContext>
   
      <Login/>
      <Profile/>
   
    </UserContext>
  );
}

export default App;
