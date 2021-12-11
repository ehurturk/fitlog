import React from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import Dashboard from "../components/Dashboard";

function DashboardPage() {
  return (
    <div>
      <DashboardSidebar containers={<Dashboard />} openSide={0} />
    </div>
  );
}

export default DashboardPage;
