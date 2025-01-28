import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const results = calculateInvestmentResults(input);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  const COLUMNS = [
    "Year",
    "InvestmentValue",
    "Interest (Year",
    "Total Interest",
    "Invested Capital",
  ];
  return (
    <table id="result">
      <thead>
        <tr>
          {COLUMNS.map((cloumnName) => (
            <th key={cloumnName}>{cloumnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
