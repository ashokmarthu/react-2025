import React from "react";

const Tabs = ({ ButtonContainer, buttons, children }) => {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
