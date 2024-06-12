import React, { useEffect, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { EmployeeDataContext } from "../ContextAPI/EmployeeContext";

const ShowEmployee = () => {
  const [employeeData, setemployeeData] = useState("");
  const [Rows, setRows] = useState([]);
  const navigate = useNavigate();

  const { setUpdateData } = useContext(EmployeeDataContext);

  const handleUpdateClick = (event, cellValues) => {
    setUpdateData(cellValues.row);
  };

  const handleDeleteClick = (event, cellValues) => {
    // event.preventDefault();
    const id_ = cellValues.row.result_id;
    console.log("Delete data ", id_);
    fetch(`http://localhost:8080/api/employees/${id_}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Employee delete");
    });

    // both works

    navigate(0);
    // window.location.reload();
  };

  useEffect(() => {
    async function callGetEmployees() {
      const data = await fetch("http://localhost:8080/api/employees").then(
        (res) => res.json()
      );
      console.log("data", data);
      setemployeeData(data);
      // setEmployeeData(data);
    }
    callGetEmployees();
  }, []);

  useEffect(() => {
    if (employeeData && employeeData.length > 0) {
      const UpdatedRows = employeeData.map((result, index) => ({
        result_id: result.id,
        id: index + 1,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
      }));

      setRows(UpdatedRows);
    }
  }, [employeeData]);

  const columns = [
    { field: "id", headerName: "#", width: 100 },
    { field: "firstName", headerName: "First name", width: 230 },
    { field: "lastName", headerName: "Last name", width: 230 },
    { field: "email", headerName: "Email", width: 330 },
    {
      field: "Update",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Link to="/api/employeesUpdate">
            <Button
              variant="contained"
              color="secondary"
              onClick={(event) => {
                handleUpdateClick(event, cellValues);
              }}
            >
              Update
            </Button>
          </Link>
        );
      },
    },
    {
      field: "Delete",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="success"
            onClick={(event) => {
              handleDeleteClick(event, cellValues);
            }}
          >
            Delete
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        ShowEmployee
      </div>
      {/* {employeeData &&
        employeeData.map((result) => (
          <div key={result.id}>
            <h3>{result.firstName}</h3>
            <h3>{result.lastName}</h3>
            <h3>{result.email}</h3>
          </div>
        ))} */}

      <DataGrid
        rows={Rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default ShowEmployee;
