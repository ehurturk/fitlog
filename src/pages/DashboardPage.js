import React from "react";
import Dashboard from "../components/Dashboard";
import Form from "../components/Form";

function Dashboardpage() {
  return (
    <div>
      <Dashboard containers={<Form />} />
    </div>
  );
}

export default Dashboardpage;
