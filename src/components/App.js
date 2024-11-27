import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// Import user data
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* Pass name, color, and city as props to Home */}
      <Home name={user.name} color={user.color} city={user.city} />
      {/* Pass bio, github, and linkedin as props to About */}
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
