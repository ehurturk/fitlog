import React from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import Dashboard from "../components/Dashboard";
import Form from "../components/Form";

function DashboardPage() {
  return (
    <div>
      <DashboardSidebar containers={<Dashboard />} openSide={0} />
    </div>
  );
}

export default DashboardPage;
