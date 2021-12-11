import React from "react";

import DashboardSidebar from "../components/DashboardSidebar";
import Diary from "../components/Diary";

function DiaryPage() {
  return (
    <div>
      <DashboardSidebar containers={<Diary />} openSide={1} />
    </div>
  );
}

export default DiaryPage;
