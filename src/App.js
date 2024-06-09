import React from "react";
import "./App.css";
import ShowEmployee from "./components/ShowEmployee";
import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <div className="App">
            <h2>Aparajit Chatterjee</h2>
            <ShowEmployee />
            <Link to="/api/employessAdd">
              <Button variant="contained" color="success">
                Add Employee
              </Button>
            </Link>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
