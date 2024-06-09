import React, { useEffect, useState, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AppDataContext } from "../App";

const ShowEmployee = ({ onEmployeeData }) => {
  const [employeeData, setemployeeData] = useState("");
  // const { employeeData, setEmployeeData } = useContext(AppDataContext);
  const [Rows, setRows] = useState([]);
  const onEmployeeDataRef = useRef(onEmployeeData);

  useEffect(() => {
    onEmployeeDataRef.current = onEmployeeData;
  }, [onEmployeeData]);

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

  // const UpdatedRows = {};
  // onEmployeeData = { UpdatedRows };

  useEffect(() => {
    if (employeeData && employeeData.length > 0) {
      const UpdatedRows = employeeData.map((result, index) => ({
        id: index + 1,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
      }));

      setRows(UpdatedRows);
      onEmployeeDataRef.current(UpdatedRows);
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
          <Button
            variant="contained"
            color="secondary"
            // onClick={(event) => {
            //   handleSellClick(event, cellValues);
            // }}
          >
            Update
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
