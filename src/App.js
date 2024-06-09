import logo from "./logo.svg";
import React, { useState, useCallback } from "react";
import "./App.css";
import ShowEmployee from "./components/ShowEmployee";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import AddEmployee from "./components/AddEmployee";
import { Link } from "react-router-dom";

export const AppDataContext = React.createContext();

function App() {
  // const [AppData, setAppData] = useState("");
  const [employeeData, setemployeeData] = useState("");

  const getEmployeeHandler = useCallback((UpdatedRows) => {
    setemployeeData(UpdatedRows);
  }, []);

  console.log("In App.js", employeeData);

  return (
    <React.Fragment>
      {/* <AppDataContext.Provider value={{ AppData, setAppData }}> */}
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <div className="App">
            <h2>Aparajit Chatterjee</h2>
            <ShowEmployee onEmployeeData={getEmployeeHandler} />
            <Link to="/api/employessAdd">
              <Button variant="contained" color="success">
                Add Employee
              </Button>
            </Link>
            {/* <AddEmployee /> */}
          </div>
        </Box>
      </Container>
      {/* </AppDataContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
