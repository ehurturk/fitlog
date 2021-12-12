import React from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import Dashboard from "../components/DashboardSidebar";
import Form from "../components/Form";
import Settings from "../components/Settings";

export default function ProfilePage() {
  return (
    <div>
      {/* <DashboardSidebar containers={<Settings />} openSide={-1} /> */}
      <Settings />
    </div>
  );
}
