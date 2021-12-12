import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import Reports from "../components/Reports";

function ReportsPage() {
  return (
    <div>
      <DashboardSidebar containers={<Reports />} openSide={3} />
    </div>
  );
}

export default ReportsPage;
