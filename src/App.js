import "./App.css";
/* pages */
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import DiaryPage from "./pages/DiaryPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
