const UserForm = ({ userInput, onUserChange }) => {
  return (
    <div id="user-input">
      <p>
        <label>
          <input
            value={userInput.initialInvestment}
            type="number"
            required
            onChange={(e) => onUserChange("initialInvestment", e.target.value)}
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
            onChange={(e) => onUserChange("annualInvestment", e.target.value)}
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
            onChange={(e) => onUserChange("expectedReturn", e.target.value)}
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
            onChange={(e) => onUserChange("duration", e.target.value)}
          />
          DURATION
        </label>
      </p>
    </div>
  );
};

export default UserForm;
