import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EmployeeContext from "./ContextAPI/EmployeeContext";
import UpdateEmployee from "./components/UpdateEmployee";

const router = createBrowserRouter([
  { path: "/api/employees", element: <App /> },
  { path: "/api/employessAdd", element: <AddEmployee /> },
  { path: "/api/employeesUpdate", element: <UpdateEmployee /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmployeeContext>
      <RouterProvider router={router} />
    </EmployeeContext>

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
