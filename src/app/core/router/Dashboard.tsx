import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
  );
};

export default Dashboard;
