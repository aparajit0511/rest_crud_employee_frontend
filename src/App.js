import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ShowEmployee from "./components/ShowEmployee";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import AddEmployee from "./components/AddEmployee";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <div className="App">
            <h2>Aparajit Chatterjee</h2>
            <ShowEmployee />
            <AddEmployee />
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
