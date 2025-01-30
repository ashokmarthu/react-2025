const TabButton = ({ isSelected, onClick, children, ...props }) => {
  return (
    <div className={isSelected ? "active" : null} {...props}>
      <li>
        <button onClick={onClick}>{children}</button>
      </li>
    </div>
  );
};

export default TabButton;
