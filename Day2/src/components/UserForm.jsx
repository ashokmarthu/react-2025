import React, { useState } from "react";

const UserForm = () => {
  const [userInput, setuserInput] = useState({
    initialAmount: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });
  const handleUserChange = (field, newValue) => {
    setuserInput((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };
  return (
    <div className="user-input">
      <p>
        <label>
          <input
            value={userInput.initialAmount}
            type="number"
            required
            onChange={(e) => handleUserChange("initialAmount", e.target.value)}
          />
          INITIAL AMOUNT
        </label>
      </p>
      <p>
        <label>
          <input
            value={userInput.annualInvestment}
            type="number"
            required
            onChange={(e) =>
              handleUserChange("annualInvestment", e.target.value)
            }
          />
          ANNUAL INVESTMENT
        </label>
      </p>
      <p>
        <label>
          <input
            value={userInput.expectedReturn}
            type="number"
            required
            onChange={(e) => handleUserChange("expectedReturn", e.target.value)}
          />
          EXPECTED RETURN
        </label>
      </p>
      <p>
        <label>
          <input
            value={userInput.duration}
            type="number"
            required
            onChange={(e) => handleUserChange("duration", e.target.value)}
          />
          DURATION
        </label>
      </p>
    </div>
  );
};

export default UserForm;
