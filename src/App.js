import "./App.css";
import DisplayEmployee from "./components/DisplayEmployee";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [employee, setEmployee] = useState(null);

  const getEmployee = () => {
    axios
      .get("https://randomuser.me/api?nat=en")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      });
  };

  return (
    <div className="App">
      <button type="button" onClick={getEmployee}>
        Get employee
      </button>
      <DisplayEmployee employee={employee} />
    </div>
  );
}

export default App;
