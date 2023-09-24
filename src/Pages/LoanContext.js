import React, { createContext, useContext, useState } from "react";

const LoanContext = createContext();

export const useLoanContext = () => useContext(LoanContext);

export const LoanProvider = ({ children }) => {
  const [installments, setInstallments] = useState([]);

 

  return (
    <LoanContext.Provider value={{ installments, setInstallments }}>
      {children}
    </LoanContext.Provider>
  );
};
