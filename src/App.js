import React, { useState } from "react";

import "./App.css";
import TeamForm from "./components/teammemberForm";
import TeamMember from "./components/teamMember";

function App() {
  const [teamState, setTeamState] = useState([
    { id: 1, firstName: "Joe", lastName: "Stockton", role: "hit man" }
  ]);

  const addTeamMember = newMember =>{
    setTeamState([...teamState, newMember])
  }

  return (
    <div className="App">
      <h2>Join the Team!</h2>
      <TeamForm  newMember ={addTeamMember}/>
      <TeamMember team = {teamState}/>
    </div>
  );
}

export default App;
