import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeDataContext } from "../ContextAPI/EmployeeContext";

function UpdateEmployee() {
  const { updateData } = useContext(EmployeeDataContext);
  const { result_id, firstName, lastName, email } = updateData;

  const navigate = useNavigate();

  const [UpdatedName, setUpdatedName] = useState(firstName);
  const [UpdatedTitle, setUpdatedTitle] = useState(lastName);
  const [UpdatedEmail, setUpdatedEmail] = useState(email);

  const onUpdatedFirstNameHandler = (event) => {
    setUpdatedName(event.target.value);
  };

  const onUpdatedLastNameHandler = (event) => {
    setUpdatedTitle(event.target.value);
  };

  const onUpdatedEmailHandler = (event) => {
    setUpdatedEmail(event.target.value);
  };

  console.log("Show Update Data", updateData);
  console.log("Data->", result_id, firstName, lastName, email);

  const onClickHandler = (event) => {
    event.preventDefault();
    // async function callUpdate() {
    //   const id = result_id;
    //   const employee = { id, UpdatedName, UpdatedTitle, UpdatedEmail };
    //   console.log("Updated Employee ", employee);
    //   await fetch("http://localhost:8080/api/employees", {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(employee),
    //   }).then(() => {
    //     console.log("Updated Employee");
    //   });
    // }
    // callUpdate();
    const id = result_id;
    const employee = {
      id: id,
      firstName: UpdatedName,
      lastName: UpdatedTitle,
      email: UpdatedEmail,
    };
    console.log("Updated Employee ", employee);
    fetch("http://localhost:8080/api/employees", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee),
    }).then(() => {
      console.log("Updated Employee");
    });

    setTimeout(() => {
      navigate(`/api/employees`);
    }, 2000);
  };

  return (
    <div>
      <div>Update Employee</div>
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
            defaultValue={firstName}
            onChange={onUpdatedFirstNameHandler}
          />

          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue={lastName}
            onChange={onUpdatedLastNameHandler}
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue={email}
            onChange={onUpdatedEmailHandler}
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={onClickHandler}
          >
            Update
          </Button>
          <Link to="/api/employees">
            <Button variant="contained" color="success">
              Go Back
            </Button>
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default UpdateEmployee;
