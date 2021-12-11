import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import Dashboard from "../components/DashboardSidebar";
import Form from "../components/Form";

export default function ProfilePage() {
  return (
    <div>
      <DashboardSidebar containers={<Form />} openSide={-1} />
    </div>
  );
}
