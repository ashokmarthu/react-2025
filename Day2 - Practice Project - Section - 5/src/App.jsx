import Header from "./components/Header";
import Results from "./components/Results";
import UserForm from "./components/UserForm";
import React, { useState } from "react";
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });
  const isDurationValid = userInput.duration >= 1;
  const handleUserChange = (inputField, newValue) => {
    setuserInput((prev) => ({
      ...prev,
      [inputField]: Number(newValue),
    }));
  };
  return (
    <>
      <Header />
      <UserForm userInput={userInput} onUserChange={handleUserChange} />
      {isDurationValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please Input Duration Greater than zero</p>
      )}
    </>
  );
}

export default App;
