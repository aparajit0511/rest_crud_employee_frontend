import React, { useState } from "react";

export const EmployeeDataContext = React.createContext();

const EmployeeContext = ({ children }) => {
  const [updateData, setUpdateData] = useState("");
  return (
    <EmployeeDataContext.Provider value={{ updateData, setUpdateData }}>
      {children}
    </EmployeeDataContext.Provider>
  );
};

export default EmployeeContext;
