import InvestementLogo from "../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header className="header">
      <img src={InvestementLogo} alt="InvestmentLogo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
