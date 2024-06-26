import React, { useState, useContext } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeDataContext } from "../ContextAPI/EmployeeContext";

const AddEmployee = () => {
  const { updateData } = useContext(EmployeeDataContext);
  const navigate = useNavigate();

  console.log("Show Update Data", updateData);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const onFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    const employee = { firstName, lastName, email };
    console.log(JSON.stringify(employee));
    fetch("http://localhost:8080/api/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      console.log("New Employee added");
    });

    setTimeout(() => {
      navigate(`/api/employees`);
    }, 3000);
  };

  return (
    <div>
      <div>AddEmployee</div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=" "
            onChange={onFirstNameHandler}
          />

          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=" "
            onChange={onLastNameHandler}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=" "
            onChange={onEmailHandler}
          />
        </div>
        <div>
          <Button variant="contained" color="success" onClick={onClickHandler}>
            Submit
          </Button>
          <Link to="/api/employees">
            <Button variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default AddEmployee;
